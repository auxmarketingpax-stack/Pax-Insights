(() => {
  function ensureClient(client) {
    if (!client || typeof client.from !== "function") {
      throw new Error("Supabase client indisponivel.");
    }
    return client;
  }

  function ensureAuthClient(client) {
    if (!client || !client.auth) {
      throw new Error("Supabase auth indisponivel.");
    }
    return client;
  }

  function normalizeFilters(filters = []) {
    return Array.isArray(filters) ? filters.filter((item) => item && item.column && item.op) : [];
  }

  function normalizeOrderBy(orderBy = []) {
    if (!orderBy) return [];
    return Array.isArray(orderBy) ? orderBy.filter((item) => item && item.column) : [orderBy].filter(Boolean);
  }

  function wait(delayMs = 0) {
    return new Promise((resolve) => window.setTimeout(resolve, Math.max(0, Number(delayMs) || 0)));
  }

  function chunkArray(items = [], chunkSize = 100) {
    const source = Array.isArray(items) ? items : [];
    const size = Math.max(1, Number(chunkSize) || 100);
    const chunks = [];
    for (let index = 0; index < source.length; index += size) {
      chunks.push(source.slice(index, index + size));
    }
    return chunks;
  }

  function isRetryableSupabaseError(error) {
    const code = String(error?.code || "").trim();
    const message = String(error?.message || "").trim().toLowerCase();
    const details = String(error?.details || "").trim().toLowerCase();
    const fullText = `${message} ${details}`;

    if (!code && !fullText) return false;

    return (
      code === "57014"
      || code === "40001"
      || /statement timeout/.test(fullText)
      || /schema cache/.test(fullText)
      || /retrying/.test(fullText)
      || /timeout/.test(fullText)
      || /connection/i.test(fullText)
    );
  }

  async function executeSupabaseOperation(operation, {
    retries = 2,
    baseDelayMs = 180
  } = {}) {
    const totalRetries = Math.max(0, Number(retries) || 0);
    let attempt = 0;
    let lastResult = null;

    while (attempt <= totalRetries) {
      try {
        const result = await operation();
        if (!result?.error) {
          return result;
        }

        lastResult = result;
        if (attempt >= totalRetries || !isRetryableSupabaseError(result.error)) {
          return result;
        }
      } catch (error) {
        const wrappedResult = { data: null, error };
        lastResult = wrappedResult;
        if (attempt >= totalRetries || !isRetryableSupabaseError(error)) {
          return wrappedResult;
        }
      }

      await wait(baseDelayMs * Math.pow(2, attempt));
      attempt += 1;
    }

    return lastResult || { data: null, error: null };
  }

  function applyFilter(query, filter) {
    const { column, op } = filter || {};
    if (!column || !op || typeof query?.[op] !== "function") return query;

    if (op === "order") {
      return query.order(column, filter.options || { ascending: true });
    }

    if (op === "in") {
      return query.in(column, Array.isArray(filter.value) ? filter.value : []);
    }

    if (op === "is") {
      return query.is(column, filter.value);
    }

    return query[op](column, filter.value);
  }

  function buildSelectQuery(client, table, {
    select = "*",
    filters = [],
    orderBy = []
  } = {}) {
    let query = ensureClient(client).from(table).select(select);
    normalizeFilters(filters).forEach((filter) => {
      query = applyFilter(query, filter);
    });
    normalizeOrderBy(orderBy).forEach((orderRule) => {
      query = applyFilter(query, {
        column: orderRule.column,
        op: "order",
        options: orderRule.options || { ascending: true }
      });
    });
    return query;
  }

  async function selectRows(client, table, options = {}) {
    return executeSupabaseOperation(() => buildSelectQuery(client, table, options));
  }

  async function selectMaybeSingleRow(client, table, options = {}) {
    return executeSupabaseOperation(() => buildSelectQuery(client, table, options).maybeSingle());
  }

  async function insertRows(client, table, rows, options = {}) {
    const payload = Array.isArray(rows) ? rows : [rows];
    return executeSupabaseOperation(() => {
      let query = ensureClient(client).from(table).insert(payload);
      if (options.select) {
        query = query.select(options.select === true ? "*" : options.select);
      }
      if (options.single) {
        query = query.single();
      }
      return query;
    });
  }

  async function upsertRows(client, table, rows, options = {}) {
    const payload = Array.isArray(rows) ? rows : [rows];
    return executeSupabaseOperation(() => ensureClient(client).from(table).upsert(payload, options));
  }

  async function upsertSingleRow(client, table, payload, {
    onConflict = "id",
    select = "*",
    maybeSingle = true
  } = {}) {
    return executeSupabaseOperation(() => {
      let query = ensureClient(client)
        .from(table)
        .upsert(payload, { onConflict });

      if (select) {
        query = query.select(select === true ? "*" : select);
      }

      if (maybeSingle) {
        query = query.maybeSingle();
      }

      return query;
    });
  }

  async function updateRows(client, table, values, {
    filters = [],
    select = null,
    single = false,
    maybeSingle = false
  } = {}) {
    return executeSupabaseOperation(() => {
      let query = ensureClient(client).from(table).update(values);
      normalizeFilters(filters).forEach((filter) => {
        query = applyFilter(query, filter);
      });

      if (select) {
        query = query.select(select === true ? "*" : select);
      }

      if (single) {
        query = query.single();
      } else if (maybeSingle) {
        query = query.maybeSingle();
      }

      return query;
    });
  }

  async function deleteRows(client, table, { filters = [] } = {}) {
    return executeSupabaseOperation(() => {
      let query = ensureClient(client).from(table).delete();
      normalizeFilters(filters).forEach((filter) => {
        query = applyFilter(query, filter);
      });
      return query;
    });
  }

  async function runRpc(client, functionName, params = {}) {
    return executeSupabaseOperation(() => ensureClient(client).rpc(functionName, params));
  }

  async function invokeEdgeFunction(client, functionName, body = {}) {
    if (!client || !client.functions || typeof client.functions.invoke !== "function") {
      throw new Error("Supabase functions indisponiveis.");
    }
    return client.functions.invoke(functionName, { body });
  }

  async function getAuthSession(client) {
    return ensureAuthClient(client).auth.getSession();
  }

  async function signOutAuth(client) {
    return ensureAuthClient(client).auth.signOut();
  }

  async function updateAuthUser(client, payload = {}) {
    return ensureAuthClient(client).auth.updateUser(payload);
  }

  async function resetPasswordForEmail(client, email, options = {}) {
    return ensureAuthClient(client).auth.resetPasswordForEmail(email, options);
  }

  async function signInWithPassword(client, payload = {}) {
    return ensureAuthClient(client).auth.signInWithPassword(payload);
  }

  async function signUpAuth(client, payload = {}) {
    return ensureAuthClient(client).auth.signUp(payload);
  }

  function onAuthStateChange(client, callback) {
    return ensureAuthClient(client).auth.onAuthStateChange(callback);
  }

  async function fetchAllRowsInPages(client, table, {
    select = "*",
    pageSize = 1000,
    orderBy = []
  } = {}) {
    const allRows = [];
    let from = 0;

    while (true) {
      const pageResult = await executeSupabaseOperation(() => {
        let query = ensureClient(client).from(table).select(select).range(from, from + pageSize - 1);
        normalizeOrderBy(orderBy).forEach((orderRule) => {
          query = applyFilter(query, {
            column: orderRule.column,
            op: "order",
            options: orderRule.options || { ascending: true }
          });
        });
        return query;
      });
      const { data, error } = pageResult;
      if (error) {
        return { data: [], error };
      }

      const rows = Array.isArray(data) ? data : [];
      allRows.push(...rows);

      if (rows.length < pageSize) {
        return { data: allRows, error: null };
      }

      from += pageSize;
    }
  }

  async function insertSingleRow(client, table, payload, select = "*") {
    return executeSupabaseOperation(() =>
      ensureClient(client)
        .from(table)
        .insert([payload])
        .select(select)
        .single()
    );
  }

  async function updateRowById(client, table, id, values, idColumn = "id", options = {}) {
    return updateRows(client, table, values, {
      ...options,
      filters: [{ column: idColumn, op: "eq", value: id }]
    });
  }

  async function deleteRowById(client, table, id, idColumn = "id") {
    return deleteRows(client, table, {
      filters: [{ column: idColumn, op: "eq", value: id }]
    });
  }

  async function updateRowsByIds(client, table, ids, values, idColumn = "id") {
    return updateRows(client, table, values, {
      filters: [{ column: idColumn, op: "in", value: Array.isArray(ids) ? ids : [] }]
    });
  }

  async function updateRowsByColumnValue(client, table, column, value, values) {
    return updateRows(client, table, values, {
      filters: [{ column, op: "eq", value }]
    });
  }

  async function upsertRowsInChunks(client, table, rows, {
    chunkSize = 100,
    ...options
  } = {}) {
    const payload = Array.isArray(rows) ? rows : [rows];
    if (!payload.length) {
      return { data: [], error: null };
    }

    const chunks = chunkArray(payload, chunkSize);
    const collectedData = [];

    for (const chunk of chunks) {
      const result = await upsertRows(client, table, chunk, options);
      if (result?.error) {
        return {
          data: collectedData,
          error: result.error
        };
      }

      if (Array.isArray(result?.data)) {
        collectedData.push(...result.data);
      } else if (result?.data != null) {
        collectedData.push(result.data);
      }
    }

    return { data: collectedData, error: null };
  }

  async function deleteRowsByColumnValuesInChunks(client, table, column, values = [], {
    chunkSize = 100,
    extraFilters = []
  } = {}) {
    const normalizedValues = Array.isArray(values) ? values.filter((value) => value !== undefined && value !== null && value !== "") : [];
    if (!normalizedValues.length) {
      return { data: [], error: null };
    }

    for (const chunk of chunkArray(normalizedValues, chunkSize)) {
      const result = await deleteRows(client, table, {
        filters: [
          ...normalizeFilters(extraFilters),
          { column, op: "in", value: chunk }
        ]
      });
      if (result?.error) {
        return result;
      }
    }

    return { data: [], error: null };
  }

  async function upsertRowsWithTransientPositions(client, table, rows, {
    onConflict = "id",
    positionField = "position",
    transientBase = 1000000,
    chunkSize = 100
  } = {}) {
    const normalizedRows = Array.isArray(rows) ? rows : [];
    if (!normalizedRows.length) {
      return { data: [], error: null };
    }

    const transientRows = normalizedRows.map((row, index) => ({
      ...row,
      [positionField]: transientBase + index
    }));

    const transientResult = await upsertRowsInChunks(client, table, transientRows, { onConflict, chunkSize });
    if (transientResult?.error) {
      return transientResult;
    }

    return upsertRowsInChunks(client, table, normalizedRows, { onConflict, chunkSize });
  }

  async function loadFunnelWorkspaceTables(client, loadSharedMeta) {
    return Promise.all([
      selectRows(client, "crm_funnels", {
        filters: [{ column: "archived_at", op: "is", value: null }],
        orderBy: { column: "created_at", options: { ascending: true } }
      }),
      selectRows(client, "crm_subfunnels", {
        orderBy: { column: "position", options: { ascending: true } }
      }),
      selectRows(client, "crm_funnel_department_permissions"),
      selectRows(client, "crm_stage_subfunnel_assignments"),
      selectRows(client, "crm_lead_subfunnel_assignments"),
      selectRows(client, "crm_stage_reminder_configs"),
      typeof loadSharedMeta === "function" ? loadSharedMeta() : Promise.resolve(null)
    ]);
  }

  async function loadBootstrapTables(client, {
    includeProfiles = false,
    includeAdminData = false,
    profilesFallback = [],
    accessRequestsFallback = [],
    adminRequestsFallback = []
  } = {}) {
    return Promise.all([
      selectRows(client, "stages", {
        orderBy: { column: "position", options: { ascending: true } }
      }),
      includeProfiles
        ? selectRows(client, "profiles", {
            orderBy: { column: "full_name", options: { ascending: true } }
          })
        : Promise.resolve({ data: profilesFallback, error: null }),
      selectRows(client, "stage_type_catalog", {
        select: "name",
        orderBy: { column: "name", options: { ascending: true } }
      }),
      selectRows(client, "lead_source_catalog", {
        orderBy: { column: "name", options: { ascending: true } }
      }),
      includeAdminData
        ? selectRows(client, "access_requests", {
            orderBy: { column: "created_at", options: { ascending: false } }
          })
        : Promise.resolve({ data: accessRequestsFallback, error: null }),
      includeAdminData
        ? selectRows(client, "admin_requests", {
            orderBy: { column: "created_at", options: { ascending: false } }
          })
        : Promise.resolve({ data: adminRequestsFallback, error: null }),
      selectRows(client, "departments", {
        orderBy: { column: "name", options: { ascending: true } }
      })
    ]);
  }

  async function loadAdminTables(client) {
    return Promise.all([
      selectRows(client, "access_requests", {
        orderBy: { column: "created_at", options: { ascending: false } }
      }),
      selectRows(client, "admin_requests", {
        orderBy: { column: "created_at", options: { ascending: false } }
      })
    ]);
  }

  async function loadHistoryEntries(client, limit = 300) {
    let query = ensureClient(client)
      .from("change_history")
      .select("*")
      .order("created_at", { ascending: false });

    if (Number.isFinite(limit) && limit > 0) {
      query = query.limit(limit);
    }

    return query;
  }

  async function loadLatestChangeHistoryPayloads(client, requests = []) {
    const items = Array.isArray(requests) ? requests : [];
    return Promise.all(items.map((request) =>
      ensureClient(client)
        .from("change_history")
        .select("payload, created_at")
        .eq("entity_type", request.entityType)
        .eq("entity_id", request.entityId)
        .order("created_at", { ascending: false })
        .limit(1)
    ));
  }

  async function insertChangeHistoryEntry(client, row) {
    return insertRows(client, "change_history", [row]);
  }

  async function insertAdminRequest(client, payload) {
    return insertRows(client, "admin_requests", [payload]);
  }

  async function updateProfileById(client, profileId, values, options = {}) {
    return updateRowById(client, "profiles", profileId, values, "id", options);
  }

  async function updateProfileByEmail(client, email, values, options = {}) {
    return updateRows(client, "profiles", values, {
      ...options,
      filters: [{ column: "email", op: "eq", value: email }]
    });
  }

  async function deleteLeadsByIds(client, ids = [], { onProgress = null, waitForNextPaint = null } = {}) {
    const normalizedIds = Array.isArray(ids) ? ids : [];
    const { data, error } = await runRpc(client, "delete_leads_by_ids", { target_ids: normalizedIds });
    if (!error) {
      onProgress?.(normalizedIds.length, normalizedIds.length);
      return { data: Array.isArray(data) ? data : [], error: null };
    }

    if (String(error.code || "").trim() !== "PGRST202") {
      return { data: [], error };
    }

    const deletedIds = [];
    const batches = [];
    for (let index = 0; index < normalizedIds.length; index += 100) {
      batches.push(normalizedIds.slice(index, index + 100));
    }

    for (const batch of batches) {
      const { error: deleteError } = await deleteRows(client, "leads", {
        filters: [{ column: "id", op: "in", value: batch }]
      });

      if (deleteError) {
        return {
          data: deletedIds.map((deletedId) => ({ deleted_id: deletedId })),
          error: deleteError
        };
      }

      deletedIds.push(...batch);
      onProgress?.(deletedIds.length, normalizedIds.length);
      if (typeof waitForNextPaint === "function") {
        await waitForNextPaint();
      }
    }

    return {
      data: deletedIds.map((deletedId) => ({ deleted_id: deletedId })),
      error: null
    };
  }

  window.PaxSupabaseApi = {
    selectRows,
    selectMaybeSingleRow,
    insertRows,
    insertSingleRow,
    upsertRows,
    upsertSingleRow,
    updateRows,
    updateRowById,
    updateRowsByIds,
    updateRowsByColumnValue,
    upsertRowsInChunks,
    deleteRowsByColumnValuesInChunks,
    deleteRows,
    deleteRowById,
    runRpc,
    invokeEdgeFunction,
    getAuthSession,
    signOutAuth,
    updateAuthUser,
    resetPasswordForEmail,
    signInWithPassword,
    signUpAuth,
    onAuthStateChange,
    fetchAllRowsInPages,
    upsertRowsWithTransientPositions,
    loadFunnelWorkspaceTables,
    loadBootstrapTables,
    loadAdminTables,
    loadHistoryEntries,
    loadLatestChangeHistoryPayloads,
    insertChangeHistoryEntry,
    insertAdminRequest,
    updateProfileById,
    updateProfileByEmail,
    deleteLeadsByIds
  };
})();

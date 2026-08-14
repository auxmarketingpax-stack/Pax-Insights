(() => {
  function ensureClient(client) {
    if (!client || typeof client.from !== "function") {
      throw new Error("Supabase client indisponivel.");
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
    return buildSelectQuery(client, table, options);
  }

  async function selectMaybeSingleRow(client, table, options = {}) {
    return buildSelectQuery(client, table, options).maybeSingle();
  }

  async function insertRows(client, table, rows, options = {}) {
    const payload = Array.isArray(rows) ? rows : [rows];
    let query = ensureClient(client).from(table).insert(payload);
    if (options.select) {
      query = query.select(options.select === true ? "*" : options.select);
    }
    if (options.single) {
      query = query.single();
    }
    return query;
  }

  async function upsertRows(client, table, rows, options = {}) {
    const payload = Array.isArray(rows) ? rows : [rows];
    return ensureClient(client).from(table).upsert(payload, options);
  }

  async function upsertSingleRow(client, table, payload, {
    onConflict = "id",
    select = "*",
    maybeSingle = true
  } = {}) {
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
  }

  async function updateRows(client, table, values, {
    filters = [],
    select = null,
    single = false,
    maybeSingle = false
  } = {}) {
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
  }

  async function deleteRows(client, table, { filters = [] } = {}) {
    let query = ensureClient(client).from(table).delete();
    normalizeFilters(filters).forEach((filter) => {
      query = applyFilter(query, filter);
    });
    return query;
  }

  async function runRpc(client, functionName, params = {}) {
    return ensureClient(client).rpc(functionName, params);
  }

  async function invokeEdgeFunction(client, functionName, body = {}) {
    if (!client || !client.functions || typeof client.functions.invoke !== "function") {
      throw new Error("Supabase functions indisponiveis.");
    }
    return client.functions.invoke(functionName, { body });
  }

  async function fetchAllRowsInPages(client, table, {
    select = "*",
    pageSize = 1000,
    orderBy = []
  } = {}) {
    const allRows = [];
    let from = 0;

    while (true) {
      let query = ensureClient(client).from(table).select(select).range(from, from + pageSize - 1);
      normalizeOrderBy(orderBy).forEach((orderRule) => {
        query = applyFilter(query, {
          column: orderRule.column,
          op: "order",
          options: orderRule.options || { ascending: true }
        });
      });
      const { data, error } = await query;
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
    return ensureClient(client)
      .from(table)
      .insert([payload])
      .select(select)
      .single();
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

  async function upsertRowsWithTransientPositions(client, table, rows, {
    onConflict = "id",
    positionField = "position",
    transientBase = 1000000
  } = {}) {
    const normalizedRows = Array.isArray(rows) ? rows : [];
    if (!normalizedRows.length) {
      return { data: [], error: null };
    }

    const transientRows = normalizedRows.map((row, index) => ({
      ...row,
      [positionField]: transientBase + index
    }));

    const transientResult = await upsertRows(client, table, transientRows, { onConflict });
    if (transientResult?.error) {
      return transientResult;
    }

    return upsertRows(client, table, normalizedRows, { onConflict });
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
    deleteRows,
    deleteRowById,
    runRpc,
    invokeEdgeFunction,
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

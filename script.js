(() => {
  const $ = (id) => document.getElementById(id);

  const els = {
    bootScreen: $("bootScreen"),
    authScreen: $("authScreen"),
    appScreen: $("appScreen"),
    authCard: document.querySelector(".auth-card"),
    authBrandLogo: $("authBrandLogo"),
    authMessage: $("authMessage"),
    registerTabBtn: $("registerTabBtn"),
    registrationNotice: $("registrationNotice"),
    resetPasswordBox: $("resetPasswordBox"),
    loginForm: $("loginForm"),
    registerForm: $("registerForm"),
    registerDepartment: $("registerDepartment"),
    registerDepartmentSecondary: $("registerDepartmentSecondary"),
    forgotPasswordBtn: $("forgotPasswordBtn"),
    updatePasswordBtn: $("updatePasswordBtn"),
    logoutBtn: $("logoutBtn"),
    headerLogoutBtn: $("headerLogoutBtn"),
    mobileMenuBtn: $("mobileMenuBtn"),
    mobileAddLeadBtn: $("mobileAddLeadBtn"),
    mobileTopbar: document.querySelector(".mobile-topbar"),
    app: document.querySelector(".app"),
    app: $("app"),
    sidebar: $("sidebar"),
    sidebarCollapseBtn: $("sidebarCollapseBtn"),
    sidebarExpandBtn: $("sidebarExpandBtn"),
    crmNavbar: $("crmNavbar"),
    crmNavbarCollapseBtn: $("crmNavbarCollapseBtn"),
    crmNavbarExpandBtn: $("crmNavbarExpandBtn"),
    main: document.querySelector(".main"),
    topbar: document.querySelector(".topbar"),
    shellTabCrm: $("shellTabCrm"),
    shellTabIntel: $("shellTabIntel"),
    shellViewCrm: $("shellViewCrm"),
    shellViewIntel: $("shellViewIntel"),
    shellBrandLogo: $("shellBrandLogo"),
    notificationsBtn: $("notificationsBtn"),
    notificationsCount: $("notificationsCount"),
    notificationsPanel: $("notificationsPanel"),
    notificationsPanelMeta: $("notificationsPanelMeta"),
    notificationsList: $("notificationsList"),
    profileMenuBtn: $("profileMenuBtn"),
    profileMenu: $("profileMenu"),
    profileMenuAvatar: $("profileMenuAvatar"),
    profileMenuName: $("profileMenuName"),
    profileMenuRole: $("profileMenuRole"),
    profileNotificationsBtn: $("profileNotificationsBtn"),
    profileNotificationsCount: $("profileNotificationsCount"),
    openAccountBtn: $("openAccountBtn"),
    profileTeamBtn: $("profileTeamBtn"),
    profileSettingsBtn: $("profileSettingsBtn"),
    themeToggleBtn: $("themeToggleBtn"),
    themeToggleThumbIcon: $("themeToggleThumbIcon"),

    orgNameLabel: $("orgNameLabel"),
    mobileOrgName: $("mobileOrgName"),
    userWelcome: $("userWelcome"),
    userAccessLevel: $("userAccessLevel"),
    pageTitle: $("pageTitle"),
    pageSubtitle: $("pageSubtitle"),
    funnelBackBtn: $("funnelBackBtn"),

    searchInput: $("searchInput"),
    mobileFiltersBtn: $("mobileFiltersBtn"),
    mobileFiltersPanel: $("mobileFiltersPanel"),
    desktopFiltersBtn: $("desktopFiltersBtn"),
    desktopFiltersCount: $("desktopFiltersCount"),
    desktopFiltersPanel: $("desktopFiltersPanel"),
    desktopFiltersSummary: $("desktopFiltersSummary"),
    desktopFiltersCloseBtn: $("desktopFiltersCloseBtn"),
    mobileCategoryFilter: $("mobileCategoryFilter"),
    mobileGroupFilter: $("mobileGroupFilter"),
    mobileFunnelFilter: $("mobileFunnelFilter"),
    mobileSubfunnelFilter: $("mobileSubfunnelFilter"),
    mobileOwnerFilter: $("mobileOwnerFilter"),
    mobileMonthFilter: $("mobileMonthFilter"),
    mobileStageFilter: $("mobileStageFilter"),
    mobileLeadSourceFilter: $("mobileLeadSourceFilter"),
    mobileSocialSourceFilter: $("mobileSocialSourceFilter"),
    mobileIndicatorFilter: $("mobileIndicatorFilter"),
    mobileIndicatorSectorFilter: $("mobileIndicatorSectorFilter"),
    mobileClearFiltersBtn: $("mobileClearFiltersBtn"),
    desktopClearFiltersBtn: $("desktopClearFiltersBtn"),
    categoryFilterDropdown: $("categoryFilterDropdown"),
    categoryFilterBtn: $("categoryFilterBtn"),
    categoryFilterMenu: $("categoryFilterMenu"),
    categoryFilterLabel: $("categoryFilterLabel"),
    categoryFilter: $("categoryFilter"),
    groupFilterDropdown: $("groupFilterDropdown"),
    groupFilterBtn: $("groupFilterBtn"),
    groupFilterMenu: $("groupFilterMenu"),
    groupFilterLabel: $("groupFilterLabel"),
    groupFilter: $("groupFilter"),
    funnelFilterDropdown: $("funnelFilterDropdown"),
    funnelFilterBtn: $("funnelFilterBtn"),
    funnelFilterMenu: $("funnelFilterMenu"),
    funnelFilterLabel: $("funnelFilterLabel"),
    funnelFilter: $("funnelFilter"),
    subfunnelFilterDropdown: $("subfunnelFilterDropdown"),
    subfunnelFilterBtn: $("subfunnelFilterBtn"),
    subfunnelFilterMenu: $("subfunnelFilterMenu"),
    subfunnelFilterLabel: $("subfunnelFilterLabel"),
    subfunnelFilter: $("subfunnelFilter"),
    ownerFilterDropdown: $("ownerFilterDropdown"),
    ownerFilterBtn: $("ownerFilterBtn"),
    ownerFilterMenu: $("ownerFilterMenu"),
    ownerFilterLabel: $("ownerFilterLabel"),
    ownerFilter: $("ownerFilter"),
    monthFilterDropdown: $("monthFilterDropdown"),
    monthFilterBtn: $("monthFilterBtn"),
    monthFilterMenu: $("monthFilterMenu"),
    monthFilterLabel: $("monthFilterLabel"),
    monthFilter: $("monthFilter"),
    stageFilterDropdown: $("stageFilterDropdown"),
    stageFilterBtn: $("stageFilterBtn"),
    stageFilterMenu: $("stageFilterMenu"),
    stageFilterLabel: $("stageFilterLabel"),
    stageFilter: $("stageFilter"),
    leadSourceFilterDropdown: $("leadSourceFilterDropdown"),
    leadSourceFilterBtn: $("leadSourceFilterBtn"),
    leadSourceFilterMenu: $("leadSourceFilterMenu"),
    leadSourceFilterLabel: $("leadSourceFilterLabel"),
    leadSourceFilter: $("leadSourceFilter"),
    socialSourceFilterDropdown: $("socialSourceFilterDropdown"),
    socialSourceFilterBtn: $("socialSourceFilterBtn"),
    socialSourceFilterMenu: $("socialSourceFilterMenu"),
    socialSourceFilterLabel: $("socialSourceFilterLabel"),
    socialSourceFilter: $("socialSourceFilter"),
    indicatorFilterDropdown: $("indicatorFilterDropdown"),
    indicatorFilterBtn: $("indicatorFilterBtn"),
    indicatorFilterMenu: $("indicatorFilterMenu"),
    indicatorFilterLabel: $("indicatorFilterLabel"),
    indicatorFilter: $("indicatorFilter"),
    indicatorSectorFilterDropdown: $("indicatorSectorFilterDropdown"),
    indicatorSectorFilterBtn: $("indicatorSectorFilterBtn"),
    indicatorSectorFilterMenu: $("indicatorSectorFilterMenu"),
    indicatorSectorFilterLabel: $("indicatorSectorFilterLabel"),
    indicatorSectorFilter: $("indicatorSectorFilter"),
    selectAllLeads: $("selectAllLeads"),
    deleteSelectedBtn: $("deleteSelectedBtn"),

    importCsvBtn: $("importCsvBtn"),
    exportCsvBtn: $("exportCsvBtn"),
    csvFileInput: $("csvFileInput"),
    addLeadBtn: $("addLeadBtn"),
    addStageBtn: $("addStageBtn"),
    historyBtn: $("historyBtn"),

    pipelineScrollArea: $("pipelineScrollArea"),
    pipelineStageStrip: $("pipelineStageStrip"),
    pipelineScrollTop: $("pipelineScrollTop"),
    pipelineScrollTopTrack: $("pipelineScrollTopTrack"),
    pipelineScrollTopThumb: $("pipelineScrollTopThumb"),
    pipelineScrollBottom: $("pipelineScrollBottom"),
    pipelineScrollBottomInner: $("pipelineScrollBottomInner"),
    pipeline: $("pipeline"),
    leadsTableBody: $("leadsTableBody"),
    totalLeads: $("totalLeads"),
    totalValue: $("totalValue"),
    closedDeals: $("closedDeals"),
    conversionRate: $("conversionRate"),
    avgTicket: $("avgTicket"),
    organicLeads: $("organicLeads"),
    topStage: $("topStage"),
    paidRate: $("paidRate"),
    metricsSection: $("metricsSection"),
    funilStickyHead: $("funilStickyHead"),
    funnelHubPanel: $("funnelHubPanel"),
    funnelDetailPanel: $("funnelDetailPanel"),
    funnelCardsGrid: $("funnelCardsGrid"),
    funnelHubKicker: $("funnelHubKicker"),
    funnelHubTitle: $("funnelHubTitle"),
    funnelHubDescription: $("funnelHubDescription"),
    editCurrentFunnelBtn: $("editCurrentFunnelBtn"),
    deleteCurrentFunnelBtn: $("deleteCurrentFunnelBtn"),
    addSubfunnelBtn: $("addSubfunnelBtn"),
    funnelDiagramPanel: $("funnelDiagramPanel"),
    crmFunnelSidebar: $("crmFunnelSidebar"),
    crmFunnelNav: $("crmFunnelNav"),
    funnelCategoryB2BList: $("funnelCategoryB2BList"),
    funnelCategoryB2CList: $("funnelCategoryB2CList"),
    funnelCategoryB2BCreate: $("funnelCategoryB2BCreate"),
    funnelCategoryB2CCreate: $("funnelCategoryB2CCreate"),

    reportClosedValue: $("reportClosedValue"),
    reportTotalLeads: $("reportTotalLeads"),
    reportClosedDeals: $("reportClosedDeals"),
    reportConversionRate: $("reportConversionRate"),
    reportReferralCount: $("reportReferralCount"),
    reportWaitingCount: $("reportWaitingCount"),
    reportAvgTicket: $("reportAvgTicket"),
    reportTopOwner: $("reportTopOwner"),
    reportTopReferral: $("reportTopReferral"),
    reportTopStage: $("reportTopStage"),
    reportBestMonth: $("reportBestMonth"),
    reportClosedPlans: $("reportClosedPlans"),
    planSummaryBody: $("planSummaryBody"),

    teamList: $("teamList"),
    closeTeamViewBtn: $("closeTeamViewBtn"),
    closeSettingsViewBtn: $("closeSettingsViewBtn"),
    stagesConfigList: $("stagesConfigList"),
    structureFunnelSelect: $("structureFunnelSelect"),
    structureSubfunnelSelect: $("structureSubfunnelSelect"),
    accountModalOverlay: $("accountModalOverlay"),
    closeAccountModalBtn: $("closeAccountModalBtn"),
    cancelAccountBtn: $("cancelAccountBtn"),
    accountForm: $("accountForm"),
    accountAvatarPreview: $("accountAvatarPreview"),
    accountAvatarInitials: $("accountAvatarInitials"),
    accountAvatarFile: $("accountAvatarFile"),
    removeAccountAvatarBtn: $("removeAccountAvatarBtn"),
    accountFullName: $("accountFullName"),
    accountEmail: $("accountEmail"),
    accountRole: $("accountRole"),
    accountMessage: $("accountMessage"),
    departmentName: $("departmentName"),
    addDepartmentBtn: $("addDepartmentBtn"),
    departmentsConfigList: $("departmentsConfigList"),

    funnelModalOverlay: $("funnelModalOverlay"),
    closeFunnelModalBtn: $("closeFunnelModalBtn"),
    cancelFunnelBtn: $("cancelFunnelBtn"),
    funnelForm: $("funnelForm"),
    funnelModalTitle: $("funnelModalTitle"),
    funnelEditId: $("funnelEditId"),
    funnelName: $("funnelName"),
    funnelCategory: $("funnelCategory"),
    funnelVisibilityScope: $("funnelVisibilityScope"),
    funnelGlobalAccessGroup: $("funnelGlobalAccessGroup"),
    funnelGlobalAccessLevel: $("funnelGlobalAccessLevel"),
    funnelOfficialDepartmentGroup: $("funnelOfficialDepartmentGroup"),
    funnelOfficialDepartmentLabel: $("funnelOfficialDepartmentLabel"),
    funnelOfficialDepartmentHelper: $("funnelOfficialDepartmentHelper"),
    funnelOfficialDepartmentSelect: $("funnelOfficialDepartmentSelect"),
    funnelDepartmentsGroup: $("funnelDepartmentsGroup"),
    funnelDepartmentsChecklist: $("funnelDepartmentsChecklist"),
    funnelSubCount: $("funnelSubCount"),
    funnelSubfields: $("funnelSubfields"),
    saveFunnelBtn: $("saveFunnelBtn"),

    modalOverlay: $("modalOverlay"),
    closeModalBtn: $("closeModalBtn"),
    cancelBtn: $("cancelBtn"),
    leadForm: $("leadForm"),
    modalTitle: $("modalTitle"),
    leadId: $("leadId"),
    name: $("name"),
    contact: $("contact"),
    owner: $("owner"),
    value: $("value"),
    startDate: $("startDate"),
    leadFunnelSelect: $("leadFunnelSelect"),
    leadSubfunnelSelect: $("leadSubfunnelSelect"),
    stage: $("stage"),
    leadReminderSummary: $("leadReminderSummary"),
    contractNumberGroup: $("contractNumberGroup"),
    contractNumber: $("contractNumber"),
    socialSource: $("socialSource"),
    socialSourceCreateBox: $("socialSourceCreateBox"),
    socialSourceCreateInput: $("socialSourceCreateInput"),
    socialSourceCreateBtn: $("socialSourceCreateBtn"),
    trafficType: $("trafficType"),
    referralNameGroup: $("referralNameGroup"),
    referralName: $("referralName"),
    referralSectorGroup: $("referralSectorGroup"),
    referralSector: $("referralSector"),
    addPlanBtn: $("addPlanBtn"),
    plansList: $("plansList"),
    planSuggestions: $("planSuggestions"),
    addObservationBtn: $("addObservationBtn"),
    observationsList: $("observationsList"),

    stageModalOverlay: $("stageModalOverlay"),
    closeStageModalBtn: $("closeStageModalBtn"),
    cancelStageBtn: $("cancelStageBtn"),
    stageForm: $("stageForm"),
    stageModalTitle: $("stageModalTitle"),
    saveStageBtn: $("saveStageBtn"),
    stageId: $("stageId"),
    stageName: $("stageName"),
    stageFunnelSelect: $("stageFunnelSelect"),
    stageSubfunnelSelect: $("stageSubfunnelSelect"),
    stageColor: $("stageColor"),
    stageColorPreview: $("stageColorPreview"),
    stageType: $("stageType"),
    ownerGroup: $("ownerGroup"),
    planGroup: $("planGroup"),
    ownerCreateBox: $("ownerCreateBox"),
    ownerCreateInput: $("ownerCreateInput"),
    ownerCreateBtn: $("ownerCreateBtn"),
    customStageTypeGroup: $("customStageTypeGroup"),
    customStageType: $("customStageType"),
    removeCustomTypeBtn: $("removeCustomTypeBtn"),
    savedStageTypesGroup: $("savedStageTypesGroup"),
    savedStageTypes: $("savedStageTypes"),
    savedStageTypeActions: $("savedStageTypeActions"),
    removeSelectedStageTypeBtn: $("removeSelectedStageTypeBtn"),
    stageReminderSummary: $("stageReminderSummary"),
    stageDuplicateModalOverlay: $("stageDuplicateModalOverlay"),
    closeStageDuplicateModalBtn: $("closeStageDuplicateModalBtn"),
    cancelStageDuplicateBtn: $("cancelStageDuplicateBtn"),
    stageDuplicateForm: $("stageDuplicateForm"),
    stageDuplicateModalTitle: $("stageDuplicateModalTitle"),
    stageDuplicateSourceId: $("stageDuplicateSourceId"),
    stageDuplicateCategory: $("stageDuplicateCategory"),
    stageDuplicateGroup: $("stageDuplicateGroup"),
    stageDuplicateFunnel: $("stageDuplicateFunnel"),
    stageDuplicateSubfunnel: $("stageDuplicateSubfunnel"),
    saveStageDuplicateBtn: $("saveStageDuplicateBtn"),
    stageDeleteModalOverlay: $("stageDeleteModalOverlay"),
    closeStageDeleteModalBtn: $("closeStageDeleteModalBtn"),
    cancelStageDeleteBtn: $("cancelStageDeleteBtn"),
    stageDeleteForm: $("stageDeleteForm"),
    stageDeleteModalTitle: $("stageDeleteModalTitle"),
    stageDeleteSourceId: $("stageDeleteSourceId"),
    stageDeleteTargetGroup: $("stageDeleteTargetGroup"),
    stageDeleteTargetStage: $("stageDeleteTargetStage"),
    stageDeleteTargetHint: $("stageDeleteTargetHint"),
    confirmStageDeleteBtn: $("confirmStageDeleteBtn"),
    addLeadSourceBtn: $("addLeadSourceBtn"),
    leadSourceName: $("leadSourceName"),
    leadSourcesConfigList: $("leadSourcesConfigList"),
    addSocialSourceBtn: $("addSocialSourceBtn"),
    socialSourceName: $("socialSourceName"),
    socialSourcesConfigList: $("socialSourcesConfigList"),
    teamAccessLegend: $("teamAccessLegend"),
    accessRequestsList: $("accessRequestsList"),
    adminRequestsList: $("adminRequestsList"),

    historyModalOverlay: $("historyModalOverlay"),
    closeHistoryModalBtn: $("closeHistoryModalBtn"),
    refreshHistoryBtn: $("refreshHistoryBtn"),
    historyText: $("historyText"),

    permissionModalOverlay: $("permissionModalOverlay"),
    closePermissionModalBtn: $("closePermissionModalBtn"),
    cancelPermissionRequestBtn: $("cancelPermissionRequestBtn"),
    submitPermissionRequestBtn: $("submitPermissionRequestBtn"),
    permissionRequestReason: $("permissionRequestReason"),
    permissionModalTitle: $("permissionModalTitle"),
    permissionModalText: $("permissionModalText"),

    notificationModalOverlay: $("notificationModalOverlay"),
    closeNotificationModalBtn: $("closeNotificationModalBtn"),
    cancelNotificationBtn: $("cancelNotificationBtn"),
    deleteNotificationBtn: $("deleteNotificationBtn"),
    notificationForm: $("notificationForm"),
    notificationModalTitle: $("notificationModalTitle"),
    notificationModalDescription: $("notificationModalDescription"),
    notificationTargetType: $("notificationTargetType"),
    notificationTargetId: $("notificationTargetId"),
    leadNotificationEditor: $("leadNotificationEditor"),
    leadNotificationEnabled: $("leadNotificationEnabled"),
    leadNotificationFields: $("leadNotificationFields"),
    leadNotificationDate: $("leadNotificationDate"),
    leadNotificationMessage: $("leadNotificationMessage"),
    stageNotificationEditor: $("stageNotificationEditor"),
    stageNotificationEnabled: $("stageNotificationEnabled"),
    stageNotificationFields: $("stageNotificationFields"),
    stageNotificationDays: $("stageNotificationDays"),
    stageNotificationMessage: $("stageNotificationMessage"),

    funnelGroupModalOverlay: $("funnelGroupModalOverlay"),
    closeFunnelGroupModalBtn: $("closeFunnelGroupModalBtn"),
    funnelGroupModalTitle: $("funnelGroupModalTitle"),
    funnelGroupForm: $("funnelGroupForm"),
    funnelGroupId: $("funnelGroupId"),
    funnelGroupName: $("funnelGroupName"),
    funnelGroupCategory: $("funnelGroupCategory"),
    funnelGroupOwnerDepartment: $("funnelGroupOwnerDepartment"),
    funnelGroupDepartmentsChecklist: $("funnelGroupDepartmentsChecklist"),
    cancelFunnelGroupBtn: $("cancelFunnelGroupBtn"),
    saveFunnelGroupBtn: $("saveFunnelGroupBtn"),
    funnelContextMenu: $("funnelContextMenu")
  };

  const ICONS = {
    sun: '<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M12 4.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75Zm0 11a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Zm0 4.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V20.5a.75.75 0 0 1 .75-.75Zm7-7.75a.75.75 0 0 1 .75.75.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5H19Zm-12.5 0a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h1.5Zm9.45-5.2a.75.75 0 0 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06-1.06l1.06-1.06Zm-7.84 7.84a.75.75 0 0 1 1.06 1.06L8.11 16.5a.75.75 0 0 1-1.06-1.06l1.06-1.05Zm8.9 2.11a.75.75 0 0 1 0 1.06.75.75 0 0 1-1.06 0l-1.06-1.05a.75.75 0 1 1 1.06-1.06l1.06 1.05Zm-7.84-7.84a.75.75 0 0 1 0 1.06L8.11 9.72a.75.75 0 0 1-1.06-1.06L8.11 7.6a.75.75 0 0 1 1.06 0Z" fill="currentColor"></path></svg>',
    moon: '<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M14.5 4.5a.75.75 0 0 1 .79-.73 8.2 8.2 0 1 1-7.52 12.06.75.75 0 0 1 .88-1.05 6.7 6.7 0 0 0 7.95-8.73.75.75 0 0 1 .59-.99 6.6 6.6 0 0 0-2.69-.56Z" fill="currentColor"></path></svg>',
    chevronRight: '<svg viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="M6 3.5 10.5 8 6 12.5"></path></svg>',
    chevronDown: '<svg viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="M3.5 6 8 10.5 12.5 6"></path></svg>'
  };

  const state = {
    supabase: null,
    currentUser: null,
    profile: null,
    stages: [],
    customStageTypes: [],
    hiddenPresetStageTypes: [],
    leads: [],
    profiles: [],
    departments: [],
    accessRequests: [],
    adminRequests: [],
    leadSources: [],
    socialSources: [],
    ownerCanonicalMap: new Map(),
    socialSourceCanonicalMap: new Map(),
    indicatorCanonicalMap: new Map(),
    indicatorSectorCanonicalMap: new Map(),
    brandedSelectCounter: 0,
    history: [],
    theme: "light",
    filterSelections: {
      category: [],
      group: [],
      funnel: [],
      subfunnel: [],
      owner: [],
      month: [],
      stage: [],
      leadSource: [],
      socialSource: [],
      indicator: [],
      indicatorSector: []
    },
    activeView: "relatorios",
    activeShellTab: "crm",
    sidebarCollapsed: false,
    accountAvatarDraft: null,
    historyLoaded: false,
    profilesLoaded: false,
    adminDataLoaded: false,
    permissionRequestContext: null,
    security: {
      allowSelfRegistration: false,
      allowedSignupEmailDomains: []
    },
    chartLoader: null,
    selectedLeadIds: new Set(),
    bulkDeleteInProgress: false,
    bulkDeleteTotal: 0,
    bulkDeleteCompleted: 0,
    modalPlans: [],
    modalObservations: [],
    charts: {
      pipeline: null,
      traffic: null,
      owner: null,
      yearlyDaily: null,
      monthly: null,
      social: null,
      ownerMonthlyAverage: null,
      referralSector: null,
      planCount: null,
      planRevenue: null
    },
    pipelineScrollObserver: null,
    pipelineScrollbarDrag: null,
    pipelineCardPan: null,
    pipelineCardInteractionsBound: false,
    pipelineStageDrag: null,
    pipelineStageInteractionsBound: false,
    touchPipelineDrag: null,
    touchPipelineDragSuppressContextUntil: 0,
    stageConfigDrag: null,
    subfunnelCardDrag: null,
    pipelineDragAutoScroll: {
      frameId: null,
      speed: 0
    },
    renderComputationCache: null,
    reportChartsRenderFrame: null,
    reportChartsBatchFrame: null,
    reportChartsBatchToken: 0,
    reportChartsSignature: null,
    reportStatsSignature: null,
    liveSyncChannel: null,
    liveSyncRefreshTimer: null,
    liveSyncRefreshInFlight: false,
    liveSyncRefreshQueued: false,
    liveSyncPollTimer: null,
    liveSyncLocalMutationUntil: 0,
    liveSyncLocalMutationTimer: null,
    appDataCacheWriteTimer: null,
    liveSyncProtectedMutationCount: 0,
    lastSharedFunnelMetaSignature: "",
    lastSharedFunnelGroupsSignature: "",
    lastSharedFunnelLinksSignature: "",
    funnelWorkspace: null,
    funnelDataLoadedFromSupabase: false,
    funnelSyncInFlight: false,
    funnelSyncQueued: false,
    subfunnelOrderSyncInFlight: false,
    subfunnelOrderSyncQueue: [],
    stageNameCleanupInFlight: false,
    socialSourceBackfillInFlight: false,
    suppressFunnelSync: false,
    funnelModalContext: null,
    structureFunnelId: null,
    structureSubfunnelId: null,
    activeFunnelId: null,
    activeSubfunnelId: null,
    funnelSidebarOpen: false,
    adminOverlayReturnState: null,
    ownerReconciliationInProgress: false,
    ownerReconciliationDone: false,
    funnelGroupModalContext: null,
    funnelContextMenuState: null,
    funnelNavDrag: null,
    touchContextTap: null,
    notificationPanelOpen: false,
    highlightedLeadId: null
    ,
    pendingStagePositionCommits: new Map(),
    pendingLeadMoveCommits: new Map()
  };

  const PRESET_STAGE_TYPES = [
    { value: "andamento", label: "Andamento" },
    { value: "fechado", label: "Fechado" },
    { value: "cancelado", label: "Cancelado" },
    { value: "espera", label: "Espera" }
  ];

  const DEFAULT_STAGE_COLOR = "#1F9D55";
  const DEPARTMENT_ACCESS_ALL_VALUE = "__all__";
  const FUNNEL_UNGROUPED_OPTION = "__no_group__";
  const DEVELOPER_EMAIL = "auxmarketingpax@gmail.com";
  const FUNNEL_ACCESS_LEVEL = {
    VIEW: "view",
    EDIT: "edit"
  };
  const CHART_JS_URL = "https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js";
  const ALLOWED_EXTERNAL_SCRIPT_URLS = new Set([CHART_JS_URL]);
  const deletingLeadIds = new Set();
  const TRANSIENT_POSITION_BASE = 1000000;
  const CHART_GREEN_PALETTE = [
    "#14532D",
    "#166534",
    "#15803D",
    "#16A34A",
    "#22C55E",
    "#4ADE80",
    "#65A30D",
    "#84CC16",
    "#2F855A",
    "#276749",
    "#34D399",
    "#86EFAC"
  ];
  const USER_ROLE = {
    DEVELOPER: "developer",
    ADMIN: "admin",
    USER: "user",
    MANAGEMENT: "management"
  };
  const ACCESS_STATUS = {
    PENDING: "pending",
    APPROVED: "approved",
    REJECTED: "rejected"
  };
  const DEFAULT_LEAD_SOURCES = ["Indicação", "Evento Externo", "Organico", "Pago"];
  const APP_STORAGE_PREFIX = "pax-insights-current";
  const CUSTOM_STAGE_TYPES_STORAGE_KEY = `${APP_STORAGE_PREFIX}.custom-stage-types`;
  const HIDDEN_PRESET_STAGE_TYPES_STORAGE_KEY = `${APP_STORAGE_PREFIX}.hidden-preset-stage-types`;
  const STORAGE_CLEANUP_KEY = `${APP_STORAGE_PREFIX}.storage-cleanup-at`;
  const LEGACY_STORAGE_IMPORT_DONE_KEY = `${APP_STORAGE_PREFIX}.legacy-import-done-v1`;
  const SIDEBAR_COLLAPSE_STORAGE_KEY = `${APP_STORAGE_PREFIX}.sidebar-collapsed`;
  const FUNNEL_WORKSPACE_STORAGE_KEY = `${APP_STORAGE_PREFIX}.funnel-workspace`;
  const FUNNEL_UI_STATE_STORAGE_KEY = `${APP_STORAGE_PREFIX}.funnel-ui-state`;
  const FUNNEL_STORAGE_SCHEMA_VERSION_KEY = `${APP_STORAGE_PREFIX}.funnel-storage-schema-version`;
  const OWNER_RECONCILIATION_STORAGE_KEY = `${APP_STORAGE_PREFIX}.owner-reconciliation-v6`;
  const SOCIAL_SOURCE_STORAGE_KEY = `${APP_STORAGE_PREFIX}.social-source-catalog-v1`;
  const APP_DATA_CACHE_STORAGE_KEY = `${APP_STORAGE_PREFIX}.app-data-cache-v1`;
  const FUNNEL_ROUTE_MIGRATION_STORAGE_KEY = `${APP_STORAGE_PREFIX}.funnel-route-migration-v2`;
  const EXTERNAL_ACTIONS_FUNNEL_MERGE_STORAGE_KEY = `${APP_STORAGE_PREFIX}.external-actions-funnel-merge-v1`;
  const B2C_EXTERNAL_CAPTURE_NORMALIZATION_STORAGE_KEY = `${APP_STORAGE_PREFIX}.b2c-external-capture-normalization-v1`;
  const DELETED_FUNNEL_WORKSPACE_IDS_STORAGE_KEY = `${APP_STORAGE_PREFIX}.deleted-funnel-workspace-ids-v1`;
  const NOTIFICATION_DISMISSALS_STORAGE_KEY = `${APP_STORAGE_PREFIX}.notification-dismissals-v1`;
  const DEMO_PIPELINE_REMINDER_SEEDED_STORAGE_KEY = `${APP_STORAGE_PREFIX}.demo-pipeline-reminder-seeded-v1`;
  const GROUP_FILTER_UNGROUPED_VALUE = "__ungrouped__";
  const THEME_STORAGE_KEY = `${APP_STORAGE_PREFIX}.theme`;
  const FUNNEL_STORAGE_SCHEMA_VERSION = "20260728-remote-truth-v1";
  const DEFAULT_SOCIAL_SOURCE = "Instagram";
  const DEMO_PIPELINE_REMINDER_LEAD_NAME = "Lead demonstracao notificacao";
  const DEMO_PIPELINE_REMINDER_OWNER = "Wendller";
  const DEMO_PIPELINE_REMINDER_DAYS = 1;
  const DEMO_PIPELINE_REMINDER_MESSAGE = "Demonstracao de notificacao da pipeline para hoje.";
  const LEGACY_CUSTOM_STAGE_TYPES_STORAGE_KEY = "crmPax.customStageTypes";
  const LEGACY_HIDDEN_PRESET_STAGE_TYPES_STORAGE_KEY = "crmPax.hiddenPresetStageTypes";
  const LEGACY_STORAGE_CLEANUP_KEY = "crmPax.storageCleanupAt";
  const LEGACY_SIDEBAR_COLLAPSE_STORAGE_KEY = "pax-insights.sidebar-collapsed";
  const LEGACY_FUNNEL_WORKSPACE_STORAGE_KEY = "pax-insights.funnel-workspace";
  const LEGACY_FUNNEL_UI_STATE_STORAGE_KEY = "pax-insights.funnel-ui-state";
  const LEGACY_OWNER_RECONCILIATION_STORAGE_KEY = "pax-insights.owner-reconciliation-v6";
  const LEGACY_SOCIAL_SOURCE_STORAGE_KEY = "pax-insights.social-source-catalog-v1";
  const LEGACY_FUNNEL_ROUTE_MIGRATION_STORAGE_KEY = "pax-insights.funnel-route-migration-v1";

  function normalizeComparisonText(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .toLowerCase();
  }

  function normalizeSpacing(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function getCanonicalValueKey(value) {
    return normalizeComparisonText(value)
      .replace(/[^a-z0-9]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function readJsonStorageValue(primaryKey, fallbackKey = "") {
    const readFromKey = (storageKey) => {
      if (!storageKey) return null;
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return null;
      return parsed;
    };

    try {
      return readFromKey(primaryKey) || readFromKey(fallbackKey);
    } catch (_error) {
      return null;
    }
  }

  function readArrayStorageValue(primaryKey, fallbackKey = "") {
    const readFromKey = (storageKey) => {
      if (!storageKey) return null;
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : null;
    };

    try {
      return readFromKey(primaryKey) || readFromKey(fallbackKey) || [];
    } catch (_error) {
      return [];
    }
  }

  function getCompactAliasKey(value) {
    return normalizeComparisonText(value).replace(/[^a-z0-9]+/g, "");
  }

  function formatTitleCaseLabel(value) {
    const lowerWords = new Set(["da", "de", "do", "das", "dos", "e"]);
    return normalizeSpacing(value)
      .toLowerCase()
      .split(" ")
      .filter(Boolean)
      .map((word, index) => {
        if (index > 0 && lowerWords.has(word)) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  function getKnownSocialSourceLabel(value) {
    const aliases = {
      indicacaocolaborador: "Indicação",
      indicacaodecolaborador: "Indicação",
      indicacao: "Indicação",
      indicao: "Indicação",
      indicao: "Indicação",
      acim: "ACIM",
      cdl: "CDL",
      sudoexpo: "SUDOEXPO",
      fieldsales: "Field Sales",
      instagram: "Instagram",
      instagran: "Instagram",
      instgran: "Instagram",
      facebook: "Facebook",
      pap: "PAP",
      interesseproprio: "Interesse Próprio",
      whatsapp: "WhatsApp",
      whatsap: "WhatsApp",
      whats: "WhatsApp",
      wpp: "WhatsApp",
      ligacao: "Ligação / Mensagem",
      mensagem: "Ligação / Mensagem",
      telefone: "Ligação / Mensagem",
      telef: "Ligação / Mensagem",
      ligacaomensagem: "Ligação / Mensagem",
      ligacaoemensagem: "Ligação / Mensagem",
      telefonemensagem: "Ligação / Mensagem",
      telefoneemensagem: "Ligação / Mensagem",
      telefmensagem: "Ligação / Mensagem"
    };

    return aliases[getCompactAliasKey(value)] || "";
  }

  function formatSocialSourceLabel(value) {
    const knownLabel = getKnownSocialSourceLabel(value);
    if (knownLabel) return knownLabel;
    return formatTitleCaseLabel(value);
  }

  function getKnownOwnerLabel(value) {
    const aliases = {
      maria: "Maria Clara",
      mariaclara: "Maria Clara",
      willian: "Willyan",
      willyan: "Willyan"
    };

    return aliases[getCompactAliasKey(value)] || "";
  }

  function shouldHideOwnerProfileOption(profileName) {
    const compactName = getCompactAliasKey(profileName);
    return compactName === "thalitacaguimaraes";
  }

  function getManualLeadOwnerOptions() {
    return ["Thalya"];
  }

  function getManualLeadOwnerLabel(value) {
    const compactValue = getCompactAliasKey(value);
    const matchedOwner = getManualLeadOwnerOptions().find((owner) => getCompactAliasKey(owner) === compactValue);
    return matchedOwner || "";
  }

  function formatOwnerLabel(value) {
    const knownLabel = getKnownOwnerLabel(value);
    if (knownLabel) return knownLabel;
    return formatTitleCaseLabel(value);
  }

  function getKnownIndicatorNameLabel(value) {
    const compactKey = getCompactAliasKey(value);
    const aliases = {
      brunanathiely: "Bruna Nathiely",
      brunan: "Bruna Nathiely",
      jose: "José Correia",
      josecorreia: "José Correia",
      luiz: "Luiz Carlos",
      luizcarlos: "Luiz Carlos",
      macinara: "Marcinara",
      marcinara: "Marcinara",
      nataliaa: "Natalia Arantes",
      nataliaarantes: "Natalia Arantes",
      diessyca: "Diessyca"
    };

    if (aliases[compactKey]) return aliases[compactKey];

    if (compactKey && getLevenshteinDistance(compactKey, "diessyca") <= 2) {
      return "Diessyca";
    }

    return "";
  }

  function formatIndicatorNameLabel(value) {
    const knownLabel = getKnownIndicatorNameLabel(value);
    if (knownLabel) return knownLabel;
    return formatTitleCaseLabel(value);
  }

  function getKnownIndicatorSectorLabel(value) {
    const aliases = {
      rh: "RH",
      ti: "TI",
      "t i": "TI"
    };

    return aliases[getCanonicalValueKey(value)] || "";
  }

  function formatIndicatorSectorLabel(value) {
    const knownLabel = getKnownIndicatorSectorLabel(value);
    if (knownLabel) return knownLabel;
    return formatTitleCaseLabel(value);
  }

  function getCanonicalDisplayLabel(value, kind) {
    const normalized = normalizeSpacing(value);
    if (!normalized) return "";
    if (kind === "owner") return formatOwnerLabel(normalized);
    if (kind === "social_source") return formatSocialSourceLabel(normalized);
    if (kind === "indicator_name") return formatIndicatorNameLabel(normalized);
    if (kind === "indicator_sector") return formatIndicatorSectorLabel(normalized);
    return normalized;
  }

  function buildCanonicalValueMap(values = [], kind = "generic") {
    const map = new Map();

    (Array.isArray(values) ? values : []).forEach((value) => {
      const normalized = normalizeSpacing(value);
      if (!normalized) return;
      const key = getCanonicalValueKey(normalized);
      if (!key) return;
      if (!map.has(key)) {
        map.set(key, getCanonicalDisplayLabel(normalized, kind));
      }
    });

    return map;
  }

  function getCanonicalMappedValue(value, map, kind = "generic") {
    const normalized = normalizeSpacing(value);
    if (!normalized) return "";
    const key = getCanonicalValueKey(normalized);
    return map?.get?.(key) || getCanonicalDisplayLabel(normalized, kind);
  }

  function getMeaningfulNameTokens(value) {
    return normalizeComparisonText(value)
      .split(/[^a-z0-9]+/g)
      .map((token) => token.trim())
      .filter((token) => token.length >= 3);
  }

  function readStoredOwnerReconciliationDone() {
    try {
      const storedValue = window.localStorage.getItem(OWNER_RECONCILIATION_STORAGE_KEY);
      if (storedValue != null) return storedValue === "true";
      return window.localStorage.getItem(LEGACY_OWNER_RECONCILIATION_STORAGE_KEY) === "true";
    } catch (_error) {
      return false;
    }
  }

  function writeStoredOwnerReconciliationDone(value) {
    try {
      window.localStorage.setItem(OWNER_RECONCILIATION_STORAGE_KEY, value ? "true" : "false");
    } catch (_error) {
      // ignore local storage failures
    }
  }

  function getLevenshteinDistance(a = "", b = "") {
    const source = String(a || "");
    const target = String(b || "");
    if (source === target) return 0;
    if (!source.length) return target.length;
    if (!target.length) return source.length;

    const rows = Array.from({ length: source.length + 1 }, () => new Array(target.length + 1).fill(0));
    for (let i = 0; i <= source.length; i += 1) rows[i][0] = i;
    for (let j = 0; j <= target.length; j += 1) rows[0][j] = j;

    for (let i = 1; i <= source.length; i += 1) {
      for (let j = 1; j <= target.length; j += 1) {
        const cost = source[i - 1] === target[j - 1] ? 0 : 1;
        rows[i][j] = Math.min(
          rows[i - 1][j] + 1,
          rows[i][j - 1] + 1,
          rows[i - 1][j - 1] + cost
        );
      }
    }

    return rows[source.length][target.length];
  }

  function findMatchingProfileNameForOwner(ownerValue, profiles = []) {
    const normalizedOwner = getCanonicalDisplayLabel(ownerValue, "owner");
    const ownerCompact = getCompactAliasKey(normalizedOwner);
    const ownerTokens = getMeaningfulNameTokens(normalizedOwner);
    const ownerFirstToken = ownerTokens[0] || ownerCompact;
    if (!ownerCompact) return "";

    const candidates = (Array.isArray(profiles) ? profiles : [])
      .map((profile) => String(profile?.full_name || "").trim())
      .filter(Boolean)
      .map((profileName) => {
        const canonicalProfileName = getCanonicalDisplayLabel(profileName, "owner");
        const profileCompact = getCompactAliasKey(canonicalProfileName);
        const profileTokens = getMeaningfulNameTokens(canonicalProfileName);
        const profileFirstToken = profileTokens[0] || profileCompact;
        const firstTokenDistance = getLevenshteinDistance(ownerFirstToken, profileFirstToken);
        const overlapCount = ownerTokens.filter((token) =>
          profileTokens.some((profileToken) => profileToken.startsWith(token) || token.startsWith(profileToken))
        ).length;

        let score = 0;
        if (ownerCompact === profileCompact) {
          score = 100;
        } else {
          const ownerSubset = ownerTokens.length > 0
            && ownerTokens.every((token) => profileTokens.some((profileToken) => profileToken.startsWith(token) || token.startsWith(profileToken)));
          const profileSubset = profileTokens.length > 0
            && profileTokens.every((token) => ownerTokens.some((ownerToken) => ownerToken.startsWith(token) || token.startsWith(ownerToken)));
          const compactContained = ownerCompact.length >= 5 && profileCompact.length >= 5
            && (profileCompact.includes(ownerCompact) || ownerCompact.includes(profileCompact));

          if (ownerSubset) score = Math.max(score, 84);
          if (profileSubset) score = Math.max(score, 76);
          if (compactContained) score = Math.max(score, 72);
          if (overlapCount >= 2) score = Math.max(score, 94);
          if (ownerTokens[0] && profileTokens[0] && ownerTokens[0] === profileTokens[0]) score = Math.max(score, 60);
          if (ownerTokens.length === 1 && ownerFirstToken && profileFirstToken && ownerFirstToken === profileFirstToken) {
            score = Math.max(score, 92);
          }
          if (ownerFirstToken && profileFirstToken && (profileFirstToken.startsWith(ownerFirstToken) || ownerFirstToken.startsWith(profileFirstToken))) {
            score = Math.max(score, 90);
          }
          if (ownerFirstToken.length >= 5 && profileFirstToken.length >= 5 && firstTokenDistance <= 2) {
            score = Math.max(score, 88);
          }
        }

        return {
          profileName: canonicalProfileName,
          score
        };
      })
      .filter((item) => item.score >= 72)
      .sort((a, b) =>
        b.score - a.score
        || getMeaningfulNameTokens(b.profileName).length - getMeaningfulNameTokens(a.profileName).length
        || String(b.profileName || "").length - String(a.profileName || "").length
        || a.profileName.localeCompare(b.profileName, "pt-BR")
      );

    if (!candidates.length) return "";
    return candidates[0].profileName;
  }

  function resolvePreferredOwnerDisplayName(value, profiles = state.profiles) {
    const manualOwnerLabel = getManualLeadOwnerLabel(value);
    if (manualOwnerLabel) return manualOwnerLabel;
    const matchedProfileName = findMatchingProfileNameForOwner(value, profiles);
    return matchedProfileName || getCanonicalDisplayLabel(value, "owner");
  }

  function getForcedLeadOwnerReassignment(ownerValue, profiles = state.profiles) {
    const compactOwner = getCompactAliasKey(ownerValue);
    if (!compactOwner.startsWith("thalita")) return "";

    const thalyaProfileName = (Array.isArray(profiles) ? profiles : [])
      .map((profile) => normalizeSpacing(profile?.full_name || ""))
      .find((profileName) => {
        const compactProfile = getCompactAliasKey(profileName);
        if (!compactProfile) return false;
        if (compactProfile === "thalya") return true;
        const [firstToken] = getMeaningfulNameTokens(profileName);
        return firstToken === "thalya";
      });

    return thalyaProfileName || "Thalya";
  }

  function buildOwnerCanonicalMap(values = [], profiles = []) {
    const map = new Map();

    (Array.isArray(values) ? values : []).forEach((value) => {
      const normalized = normalizeSpacing(value);
      if (!normalized) return;
      const key = getCanonicalValueKey(normalized);
      if (!key) return;
      map.set(key, resolvePreferredOwnerDisplayName(normalized, profiles));
    });

    (Array.isArray(profiles) ? profiles : []).forEach((profile) => {
      const normalized = normalizeSpacing(profile?.full_name || "");
      if (!normalized) return;
      const key = getCanonicalValueKey(normalized);
      if (!key) return;
      map.set(key, getCanonicalDisplayLabel(normalized, "owner"));
    });

    return map;
  }

  function hasDiacritics(value) {
    return String(value || "").normalize("NFD") !== String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function choosePreferredCanonicalLabel(values = [], kind = "generic") {
    const candidates = [...new Set(
      (Array.isArray(values) ? values : [])
        .map((value) => normalizeSpacing(value))
        .filter(Boolean)
    )];

    if (!candidates.length) return "";

    return getCanonicalDisplayLabel(
      candidates.sort((a, b) =>
        getMeaningfulNameTokens(b).length - getMeaningfulNameTokens(a).length
        || Number(hasDiacritics(b)) - Number(hasDiacritics(a))
        || String(b).length - String(a).length
        || String(a).localeCompare(String(b), "pt-BR")
      )[0],
      kind
    );
  }

  function buildIndicatorFirstTokenCounts(values = []) {
    return (Array.isArray(values) ? values : []).reduce((map, value) => {
      const [firstToken] = getMeaningfulNameTokens(value);
      if (!firstToken) return map;
      map.set(firstToken, (map.get(firstToken) || 0) + 1);
      return map;
    }, new Map());
  }

  function areIndicatorNamesEquivalent(leftValue, rightValue, multiTokenFirstTokenCounts = new Map()) {
    const left = normalizeSpacing(leftValue);
    const right = normalizeSpacing(rightValue);
    if (!left || !right) return false;

    const leftCompact = getCompactAliasKey(left);
    const rightCompact = getCompactAliasKey(right);
    if (!leftCompact || !rightCompact) return false;
    if (leftCompact === rightCompact) return true;

    const leftTokens = getMeaningfulNameTokens(left);
    const rightTokens = getMeaningfulNameTokens(right);
    const leftFirstToken = leftTokens[0] || leftCompact;
    const rightFirstToken = rightTokens[0] || rightCompact;
    if (!leftFirstToken || leftFirstToken !== rightFirstToken) return false;

    const leftSingleToken = leftTokens.length <= 1;
    const rightSingleToken = rightTokens.length <= 1;
    const shorterTokens = leftTokens.length <= rightTokens.length ? leftTokens : rightTokens;
    const longerTokens = leftTokens.length <= rightTokens.length ? rightTokens : leftTokens;
    const shorterCompact = leftTokens.length <= rightTokens.length ? leftCompact : rightCompact;
    const longerCompact = leftTokens.length <= rightTokens.length ? rightCompact : leftCompact;

    if (leftSingleToken !== rightSingleToken) {
      return shorterTokens.length === 1
        && shorterTokens[0]?.length >= 6
        && (multiTokenFirstTokenCounts.get(shorterTokens[0]) || 0) <= 1
        && longerTokens.length >= 2
        && longerCompact.includes(shorterCompact);
    }

    const overlapCount = shorterTokens.filter((token) =>
      longerTokens.some((otherToken) => otherToken === token || otherToken.startsWith(token) || token.startsWith(otherToken))
    ).length;

    return overlapCount >= shorterTokens.length && overlapCount > 0;
  }

  function buildIndicatorCanonicalMap(values = []) {
    const normalizedValues = [...new Set(
      (Array.isArray(values) ? values : [])
        .map((value) => normalizeSpacing(value))
        .filter(Boolean)
    )];
    const multiTokenFirstTokenCounts = buildIndicatorFirstTokenCounts(
      normalizedValues.filter((value) => getMeaningfulNameTokens(value).length >= 2)
    );
    const groups = [];

    normalizedValues
      .sort((a, b) =>
        getMeaningfulNameTokens(b).length - getMeaningfulNameTokens(a).length
        || String(b).length - String(a).length
        || String(a).localeCompare(String(b), "pt-BR")
      )
      .forEach((value) => {
        const matchedGroup = groups.find((group) =>
          group.values.some((existingValue) => areIndicatorNamesEquivalent(existingValue, value, multiTokenFirstTokenCounts))
        );

        if (matchedGroup) {
          matchedGroup.values.push(value);
          return;
        }

        groups.push({ values: [value] });
      });

    const map = new Map();
    groups.forEach((group) => {
      const label = choosePreferredCanonicalLabel(group.values, "indicator_name");
      group.values.forEach((value) => {
        const key = getCanonicalValueKey(value);
        if (key) map.set(key, label);
      });
    });

    return map;
  }

  function rebuildReferralCanonicalMaps(leads = state.leads) {
    const referralNames = (Array.isArray(leads) ? leads : [])
      .map((lead) => String(lead?._meta?.referral_name || "").trim())
      .filter(Boolean);
    const referralSectors = (Array.isArray(leads) ? leads : [])
      .map((lead) => String(lead?._meta?.referral_sector || "").trim())
      .filter(Boolean);

    state.indicatorCanonicalMap = buildIndicatorCanonicalMap(referralNames);
    state.indicatorSectorCanonicalMap = buildCanonicalValueMap(referralSectors, "indicator_sector");
  }

  function hexToRgba(hex, alpha = 1) {
    const normalized = sanitizeHexColor(hex, "#22C55E").replace("#", "");
    const red = parseInt(normalized.slice(0, 2), 16);
    const green = parseInt(normalized.slice(2, 4), 16);
    const blue = parseInt(normalized.slice(4, 6), 16);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  function getChartPalette(count, { fillAlpha = 0.78, borderAlpha = 1 } = {}) {
    const size = Math.max(0, Number(count) || 0);
    const fills = [];
    const borders = [];

    for (let index = 0; index < size; index += 1) {
      const color = CHART_GREEN_PALETTE[index % CHART_GREEN_PALETTE.length];
      fills.push(hexToRgba(color, fillAlpha));
      borders.push(hexToRgba(color, borderAlpha));
    }

    return { fills, borders };
  }

  function getSingleSeriesColors(index = 0, { fillAlpha = 0.3, borderAlpha = 1 } = {}) {
    const color = CHART_GREEN_PALETTE[index % CHART_GREEN_PALETTE.length];
    return {
      fill: hexToRgba(color, fillAlpha),
      border: hexToRgba(color, borderAlpha)
    };
  }

  function getIndicatorFilterOptions(referralNames = []) {
    return [
      { value: "", label: "Todas as indicações" },
      ...(Array.isArray(referralNames) ? referralNames : []).map((name) => ({ value: name, label: name }))
    ];
  }

  function isReferralLeadSource(value) {
    return normalizeComparisonText(value) === "indicacao";
  }

  function isDefaultLeadSourceName(value) {
    const normalized = normalizeComparisonText(value);
    return DEFAULT_LEAD_SOURCES.some((item) => normalizeComparisonText(item) === normalized);
  }

  const STORAGE_CACHE_KEYS = [
    CUSTOM_STAGE_TYPES_STORAGE_KEY,
    HIDDEN_PRESET_STAGE_TYPES_STORAGE_KEY,
    APP_DATA_CACHE_STORAGE_KEY
  ];

  const STORAGE_CLEANUP_INTERVAL_MS = 3 * 24 * 60 * 60 * 1000;
  const LIVE_SYNC_SCOPE_KEY = "__paxLiveSyncScope";
  const LIVE_SYNC_NOTIFIED_KEY = "__paxLiveSyncNotified";
  const LIVE_SYNC_DECORATED_KEY = "__paxLiveSyncDecorated";
  const SHARED_FUNNEL_META_ENTITY_TYPE = "crm_funnel_workspace_meta";
  const SHARED_FUNNEL_GROUPS_ENTITY_TYPE = "crm_funnel_groups_meta";
  const SHARED_FUNNEL_LINKS_ENTITY_TYPE = "crm_funnel_links_meta";
  const SHARED_FUNNEL_META_ENTITY_ID = "shared";

  function resolveLiveSyncScope(tableName = "") {
    const normalized = String(tableName || "").trim().toLowerCase();
    if (!normalized) return "data";
    if (normalized.startsWith("crm_")) return "funnel-workspace";
    if (["stages", "leads", "profiles", "departments", "access_requests", "admin_requests"].includes(normalized)) return normalized;
    if (["lead_source_catalog", "stage_type_catalog"].includes(normalized)) return "catalog";
    return normalized;
  }

  function attachLiveSyncNotification(promiseLike, scope) {
    if (!promiseLike || typeof promiseLike.then !== "function") return promiseLike;
    if (promiseLike[LIVE_SYNC_DECORATED_KEY]) {
      if (scope && !promiseLike[LIVE_SYNC_SCOPE_KEY]) {
        promiseLike[LIVE_SYNC_SCOPE_KEY] = scope;
      }
      return promiseLike;
    }

    promiseLike[LIVE_SYNC_DECORATED_KEY] = true;
    if (scope) {
      promiseLike[LIVE_SYNC_SCOPE_KEY] = scope;
    }

    const originalThen = promiseLike.then?.bind(promiseLike);
    if (originalThen) {
      promiseLike.then = (onFulfilled, onRejected) => originalThen(
        (value) => {
          if (
            promiseLike[LIVE_SYNC_SCOPE_KEY]
            && !promiseLike[LIVE_SYNC_NOTIFIED_KEY]
            && !value?.error
          ) {
            promiseLike[LIVE_SYNC_NOTIFIED_KEY] = true;
            notifyLiveSyncChange(promiseLike[LIVE_SYNC_SCOPE_KEY]);
          }
          return typeof onFulfilled === "function" ? onFulfilled(value) : value;
        },
        onRejected
      );
    }

    return promiseLike;
  }

  function decorateSupabaseBuilder(builder, tableName = "", inheritedScope = "") {
    if (!builder || typeof builder !== "object") return builder;
    if (builder[LIVE_SYNC_DECORATED_KEY]) {
      if (inheritedScope && !builder[LIVE_SYNC_SCOPE_KEY]) {
        builder[LIVE_SYNC_SCOPE_KEY] = inheritedScope;
      }
      return builder;
    }

    const mutationScope = inheritedScope || resolveLiveSyncScope(tableName);
    const mutationMethods = new Set(["insert", "update", "upsert", "delete"]);
    const chainMethods = [
      "select", "single", "maybeSingle", "eq", "neq", "in", "order", "limit",
      "range", "is", "not", "match", "or", "filter", "textSearch", "lte", "gte",
      "lt", "gt", "like", "ilike", "contains", "containedBy", "overlaps"
    ];

    Object.defineProperty(builder, LIVE_SYNC_DECORATED_KEY, {
      value: true,
      configurable: true,
      enumerable: false,
      writable: true
    });
    if (mutationScope) {
      builder[LIVE_SYNC_SCOPE_KEY] = mutationScope;
    }

    chainMethods.forEach((methodName) => {
      const originalMethod = builder[methodName];
      if (typeof originalMethod !== "function") return;
      builder[methodName] = (...args) => {
        const result = originalMethod.apply(builder, args);
        return decorateSupabaseBuilder(result, tableName, builder[LIVE_SYNC_SCOPE_KEY] || "");
      };
    });

    mutationMethods.forEach((methodName) => {
      const originalMethod = builder[methodName];
      if (typeof originalMethod !== "function") return;
      builder[methodName] = (...args) => {
        const result = originalMethod.apply(builder, args);
        if (result && typeof result === "object") {
          result[LIVE_SYNC_SCOPE_KEY] = mutationScope;
        }
        return attachLiveSyncNotification(
          decorateSupabaseBuilder(result, tableName, mutationScope),
          mutationScope
        );
      };
    });

    attachLiveSyncNotification(builder, inheritedScope || "");
    return builder;
  }

  function decorateSupabaseClientForLiveSync(client) {
    if (!client || client.__paxLiveSyncWrapped) return client;

    const originalFrom = client.from?.bind(client);
    if (originalFrom) {
      client.from = (tableName, ...args) => decorateSupabaseBuilder(
        originalFrom(tableName, ...args),
        tableName
      );
    }

    const originalRpc = client.rpc?.bind(client);
    if (originalRpc) {
      client.rpc = (fnName, ...args) => attachLiveSyncNotification(
        originalRpc(fnName, ...args),
        `rpc:${String(fnName || "").trim() || "data"}`
      );
    }

    const originalInvoke = client.functions?.invoke?.bind(client.functions);
    if (originalInvoke) {
      client.functions.invoke = (fnName, ...args) => attachLiveSyncNotification(
        originalInvoke(fnName, ...args),
        `fn:${String(fnName || "").trim() || "data"}`
      );
    }

    client.__paxLiveSyncWrapped = true;
    return client;
  }

  function createClient() {
    const cfg = window.APP_CONFIG || {};
    if (!cfg.supabaseUrl || !cfg.supabaseAnonKey) {
      throw new Error("Configuração do Supabase não encontrada em config.js");
    }
    if (!window.supabase || typeof window.supabase.createClient !== "function") {
      throw new Error("Biblioteca do Supabase não carregada.");
    }
    state.supabase = decorateSupabaseClientForLiveSync(
      window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey)
    );
  }

  function getSecurityConfig() {
    const cfg = window.APP_CONFIG || {};
    const allowedSignupEmailDomains = [...new Set(
      (Array.isArray(cfg.allowedSignupEmailDomains) ? cfg.allowedSignupEmailDomains : [])
        .map((item) => String(item || "").trim().toLowerCase().replace(/^@+/, ""))
        .filter((item) => item && item.includes(".") && !item.includes(" "))
    )];

    return {
      allowSelfRegistration: cfg.allowSelfRegistration === true,
      allowedSignupEmailDomains
    };
  }

  function getSignupRestrictionMessage() {
    if (!state.security.allowSelfRegistration) {
      return "Novas solicitacoes publicas estao desativadas. Solicite a liberacao diretamente a um administrador.";
    }
    if (!state.security.allowedSignupEmailDomains.length) {
      return "Depois de enviar um cadastro valido, o acesso ainda depende de aprovacao do administrador.";
    }
    return `Cadastros validos sao aceitos apenas para e-mails de: ${state.security.allowedSignupEmailDomains.join(", ")}. Depois do envio, o acesso fica pendente ate a aprovacao do administrador.`;
  }

  function applySecurityConfigToUi() {
    const registrationEnabled = state.security.allowSelfRegistration;

    els.registerTabBtn?.classList.toggle("hidden", !registrationEnabled);
    els.registerForm?.classList.toggle("hidden", !registrationEnabled);
    els.registerForm?.classList.remove("active");
    els.loginForm?.classList.add("active");
    document.querySelector('[data-tab="login"]')?.classList.add("active");
    els.registerTabBtn?.classList.remove("active");

    const notice = getSignupRestrictionMessage();
    if (els.registrationNotice) {
      els.registrationNotice.textContent = notice;
      els.registrationNotice.classList.toggle("hidden", !notice);
    }
  }

  function renderDepartmentSelects() {
    const registerValue = String(els.registerDepartment?.value || "");
    const registerSecondaryValue = String(els.registerDepartmentSecondary?.value || "");
    const funnelSelected = getSelectedFunnelDepartmentPermissions();

    if (els.registerDepartment) {
      els.registerDepartment.innerHTML = getDepartmentOptionsMarkup(registerValue, true, "Selecione o departamento");
    }
    if (els.registerDepartmentSecondary) {
      els.registerDepartmentSecondary.innerHTML = getDepartmentOptionsMarkup(registerSecondaryValue, true, "Opcional");
    }

    renderDepartmentChecklist(funnelSelected);
    syncBrandedSelects();
  }

  async function loadDepartments(force = false) {
    if (!force && Array.isArray(state.departments) && state.departments.length) {
      renderDepartmentSelects();
      return;
    }

    const { data, error } = await state.supabase
      .from("departments")
      .select("*")
      .order("name", { ascending: true });

    if (error) {
      if (!isMissingRelationError(error)) {
        console.error("Erro ao carregar departamentos:", error);
      }
      state.departments = [];
      renderDepartmentSelects();
      return;
    }

    state.departments = data || [];
    renderDepartmentSelects();
  }

  function setMessage(el, text, isError = false) {
    el.textContent = text || "";
    el.style.color = isError ? "#fecaca" : "#cdecd6";
  }

  function formatNaturalLanguageList(values = []) {
    const items = (Array.isArray(values) ? values : [])
      .map((item) => String(item || "").trim())
      .filter(Boolean);

    if (!items.length) return "";
    if (items.length === 1) return items[0];
    if (items.length === 2) return `${items[0]} e ${items[1]}`;
    return `${items.slice(0, -1).join(", ")} e ${items[items.length - 1]}`;
  }

  function getPasswordRuleErrorMessage(error) {
    const rawMessage = String(error?.message || "");
    const message = rawMessage.toLowerCase();
    if (!message.includes("password")) return "";

    const minLengthMatch = message.match(/at least\s+(\d+)\s+characters?/);
    if (minLengthMatch) {
      return `A senha deve ter pelo menos ${minLengthMatch[1]} caracteres.`;
    }

    if (message.includes("at least one character of each")) {
      const requirements = [];
      if (rawMessage.includes("abc")) requirements.push("uma letra minuscula");
      if (rawMessage.includes("ABC")) requirements.push("uma letra maiuscula");
      if (rawMessage.includes("123")) requirements.push("um numero");
      if (
        rawMessage.includes("!@#$") ||
        rawMessage.includes("@#$%") ||
        rawMessage.includes("^&*") ||
        message.includes("special character")
      ) {
        requirements.push("um caractere especial");
      }

      if (requirements.length) {
        return `A senha precisa conter ${formatNaturalLanguageList(requirements)}.`;
      }
      return "A senha nao atende aos requisitos minimos de seguranca.";
    }

    if (message.includes("too short")) {
      return "A senha esta muito curta.";
    }

    if (message.includes("weak password")) {
      return "A senha nao atende aos requisitos minimos de seguranca.";
    }

    const maxLengthMatch = message.match(/(?:no more than|at most)\s+(\d+)\s+characters?/);
    if (maxLengthMatch) {
      return `A senha deve ter no maximo ${maxLengthMatch[1]} caracteres.`;
    }

    return "";
  }

  function getAuthErrorMessage(error, fallback = "Nao foi possivel concluir a autenticacao.") {
    const code = String(error?.code || "").toLowerCase();
    const message = String(error?.message || "").toLowerCase();
    const passwordRuleMessage = getPasswordRuleErrorMessage(error);

    if (passwordRuleMessage) {
      return passwordRuleMessage;
    }

    if (code === "email_not_confirmed" || message.includes("email not confirmed")) {
      return "Seu e-mail ainda nao foi confirmado. Verifique a caixa de entrada antes de entrar.";
    }

    if (code === "email_provider_disabled" || message.includes("email provider is disabled")) {
      return "O login e cadastro por e-mail estao desabilitados no Supabase. Ative o provedor Email nas configuracoes de Authentication.";
    }

    if (code === "provider_disabled" || message.includes("provider is disabled")) {
      return "Este metodo de autenticacao esta desabilitado no Supabase. Revise Authentication > Providers.";
    }

    if (code === "invalid_credentials" || message.includes("invalid login credentials")) {
      return "E-mail ou senha invalidos.";
    }

    if (code === "email_exists" || message.includes("user already registered")) {
      return "Este e-mail ja esta cadastrado. Tente entrar ou recuperar a senha.";
    }

    if (
      code === "over_email_send_rate_limit" ||
      message.includes("email rate limit exceeded") ||
      message.includes("rate limit exceeded")
    ) {
      return "O Supabase atingiu o limite temporario de envio de e-mails. Aguarde alguns minutos e tente novamente, ou configure um SMTP proprio no projeto.";
    }

    if (code === "email_address_not_authorized" || message.includes("email address not authorized")) {
      return "O Supabase nao vai enviar e-mails para esse endereco usando o SMTP padrao. Configure um SMTP proprio ou teste com um e-mail da equipe do projeto.";
    }

    return error?.message || fallback;
  }

  function getAuthRedirectUrl(suffix = "") {
    const protocol = String(window.location.protocol || "").toLowerCase();
    if (protocol !== "http:" && protocol !== "https:") return null;

    const baseUrl = `${window.location.origin}${window.location.pathname}`;
    return suffix ? `${baseUrl}${suffix}` : baseUrl;
  }

  function getUrlParams(value = "") {
    return new URLSearchParams(String(value).replace(/^[#?]/, ""));
  }

  function isPasswordRecoveryFlow() {
    const searchParams = getUrlParams(window.location.search);
    const hashParams = getUrlParams(window.location.hash);
    return searchParams.get("type") === "recovery" || hashParams.get("type") === "recovery";
  }

  function setPasswordRecoveryMode(enabled) {
    els.authCard?.classList.toggle("recovery-mode", enabled);
    els.resetPasswordBox?.classList.toggle("hidden", !enabled);
  }

  function showPasswordRecoveryScreen() {
    setPasswordRecoveryMode(true);
    document.querySelector('[data-tab="login"]')?.click();
    showScreen("authScreen");
    setMessage(els.authMessage, "Digite sua nova senha e salve.");
    $("newPassword")?.focus();
  }

  function clearAuthRedirectState() {
    const cleanUrl = `${window.location.origin}${window.location.pathname}`;
    window.history.replaceState({}, document.title, cleanUrl);
  }

  function normalizeUserRole(role, fallback = USER_ROLE.USER) {
    const normalized = String(role || fallback).trim().toLowerCase();
    return Object.values(USER_ROLE).includes(normalized) ? normalized : fallback;
  }

  function getUserRole() {
    return getProfileRole(state.profile);
  }

  function normalizeEmail(value) {
    return String(value || "").trim().toLowerCase();
  }

  function getCurrentUserEmail() {
    return normalizeEmail(state.currentUser?.email || state.profile?.email || "");
  }

  function isDeveloperEmail(value = "") {
    return normalizeEmail(value) === DEVELOPER_EMAIL;
  }

  function getAccessStatus() {
    return String(state.profile?.access_status || ACCESS_STATUS.PENDING).trim().toLowerCase();
  }

  function getProfileRole(profile = null) {
    if (isDeveloperEmail(profile?.email || "")) return USER_ROLE.DEVELOPER;
    return normalizeUserRole(profile?.role, USER_ROLE.USER);
  }

  function isDeveloper(profile = state.profile) {
    if (profile === state.profile) {
      return isApprovedUser() && isDeveloperEmail(getCurrentUserEmail());
    }
    return getProfileRole(profile) === USER_ROLE.DEVELOPER || isDeveloperEmail(profile?.email || "");
  }

  function isAdmin(profile = state.profile) {
    return getProfileRole(profile) === USER_ROLE.ADMIN;
  }

  function isManagement(profile = state.profile) {
    return getProfileRole(profile) === USER_ROLE.MANAGEMENT;
  }

  function isApprovedUser() {
    return getAccessStatus() === ACCESS_STATUS.APPROVED;
  }

  function hasAdminRole(profile = state.profile) {
    return isDeveloper(profile) || isAdmin(profile);
  }

  function isProtectedDeveloperProfile(profile = null) {
    return Boolean(profile) && (getProfileRole(profile) === USER_ROLE.DEVELOPER || isDeveloperEmail(profile.email));
  }

  function canManageDepartments() {
    return hasAdminRole();
  }

  function normalizeDepartmentName(value) {
    return String(value || "").trim().replace(/\s+/g, " ");
  }

  function getDepartmentNameById(departmentId) {
    if (!departmentId) return "-";
    return state.departments.find((item) => String(item.id) === String(departmentId))?.name || "-";
  }

  function getDepartmentNamesLabel(primaryDepartmentId, secondaryDepartmentId = null) {
    const names = [
      getDepartmentNameById(primaryDepartmentId),
      getDepartmentNameById(secondaryDepartmentId)
    ].filter((value, index, array) => value && value !== "-" && array.indexOf(value) === index);
    return names.length ? names.join(" + ") : "-";
  }

  function hasUnrestrictedDepartmentAccess(profile = null) {
    return !profile?.department_id && !profile?.department_id_secondary;
  }

  function getProfileDepartmentIds(profile = null) {
    const ids = [profile?.department_id, profile?.department_id_secondary]
      .map((value) => String(value || "").trim())
      .filter(Boolean);
    return [...new Set(ids)];
  }

  function getDepartmentAccessLabel(primaryDepartmentId, secondaryDepartmentId = null) {
    const normalizedSelection = normalizeDepartmentSelectionValues(primaryDepartmentId, secondaryDepartmentId);
    if (normalizedSelection.unrestricted || (!normalizedSelection.primaryDepartmentId && !normalizedSelection.secondaryDepartmentId)) {
      return "Acesso total";
    }
    return getDepartmentNamesLabel(normalizedSelection.primaryDepartmentId, normalizedSelection.secondaryDepartmentId);
  }

  function normalizeDepartmentSelectionValues(primaryDepartmentId, secondaryDepartmentId = null) {
    const primary = String(primaryDepartmentId || "").trim();
    const secondary = String(secondaryDepartmentId || "").trim();

    if (primary === DEPARTMENT_ACCESS_ALL_VALUE) {
      return {
        primaryDepartmentId: null,
        secondaryDepartmentId: null,
        unrestricted: true
      };
    }

    return {
      primaryDepartmentId: primary || null,
      secondaryDepartmentId: secondary || null,
      unrestricted: false
    };
  }

  function getDepartmentOptionsMarkup(selectedValue = "", includeBlank = true, blankLabel = "Selecione o departamento", includeAccessAll = false) {
    const options = [];
    if (includeAccessAll) {
      options.push(`<option value="${DEPARTMENT_ACCESS_ALL_VALUE}" ${String(selectedValue || "") === DEPARTMENT_ACCESS_ALL_VALUE ? "selected" : ""}>Acesso total</option>`);
    }
    if (includeBlank) {
      options.push(`<option value="">${escapeHtml(blankLabel)}</option>`);
    }
    state.departments.forEach((department) => {
      options.push(`<option value="${escapeHtml(department.id)}" ${String(selectedValue || "") === String(department.id) ? "selected" : ""}>${escapeHtml(department.name)}</option>`);
    });
    return options.join("");
  }

  function normalizeFunnelDepartmentPermissions(items = []) {
    const permissionsByDepartment = new Map();

    (Array.isArray(items) ? items : []).forEach((item) => {
      if (!item) return;

      let departmentId = "";
      let accessLevel = "";

      if (typeof item === "string") {
        departmentId = String(item).trim();
        accessLevel = FUNNEL_ACCESS_LEVEL.VIEW;
      } else if (typeof item === "object") {
        departmentId = String(item.department_id || item.departmentId || item.id || "").trim();
        accessLevel = String(item.access_level || item.accessLevel || "").trim().toLowerCase();
      }

      if (!departmentId) return;
      if (![FUNNEL_ACCESS_LEVEL.VIEW, FUNNEL_ACCESS_LEVEL.EDIT].includes(accessLevel)) {
        return;
      }

      const previous = permissionsByDepartment.get(departmentId);
      if (!previous || (previous.access_level !== FUNNEL_ACCESS_LEVEL.EDIT && accessLevel === FUNNEL_ACCESS_LEVEL.EDIT)) {
        permissionsByDepartment.set(departmentId, {
          department_id: departmentId,
          access_level: accessLevel
        });
      }
    });

    return [...permissionsByDepartment.values()];
  }

  function getFunnelDepartmentPermissions(funnel = null) {
    return normalizeFunnelDepartmentPermissions(
      funnel?.department_permissions
      || funnel?.departmentPermissions
      || funnel?.department_ids
      || []
    );
  }

  function getFunnelDepartmentIds(funnel = null) {
    return getFunnelDepartmentPermissions(funnel).map((item) => item.department_id);
  }

  function getDepartmentAccessUiMeta(accessLevel = "") {
    const normalizedLevel = String(accessLevel || "").trim().toLowerCase();

    if (normalizedLevel === FUNNEL_ACCESS_LEVEL.VIEW) {
      return {
        status: "Somente visualizar",
        title: "Clique para mudar para editar",
        nextTitle: "Permissão atual: visualizar. Próximo clique: editar.",
        buttonLabel: "Alternar permissão do departamento para editar",
        icon: `
          <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path d="M2.75 12s3.6-6.25 9.25-6.25S21.25 12 21.25 12 17.65 18.25 12 18.25 2.75 12 2.75 12Z" />
            <circle cx="12" cy="12" r="3.25" />
          </svg>
        `
      };
    }

    if (normalizedLevel === FUNNEL_ACCESS_LEVEL.EDIT) {
      return {
        status: "Pode editar",
        title: "Clique para desativar o acesso",
        nextTitle: "Permissão atual: editar. Próximo clique: desativar.",
        buttonLabel: "Desativar permissão do departamento",
        icon: `
          <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path d="m4 15.75 8.9-8.9 3.25 3.25-8.9 8.9L4 19.25Zm11.55-10.55 1.3-1.3a1.9 1.9 0 0 1 2.7 0l.55.55a1.9 1.9 0 0 1 0 2.7l-1.3 1.3-3.25-3.25Z" />
          </svg>
        `
      };
    }

    return {
      status: "Sem acesso",
      title: "Clique para liberar visualização",
      nextTitle: "Permissão atual: sem acesso. Próximo clique: visualizar.",
      buttonLabel: "Liberar visualização para o departamento",
      icon: `
        <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
          <path d="M4.75 4.75 19.25 19.25m-6.42-7.26a3.25 3.25 0 0 0-3.82-3.82m-5.76 1.75C5.08 7.45 8.01 5.75 12 5.75c5.65 0 9.25 6.25 9.25 6.25a16.9 16.9 0 0 1-2.83 3.45m-3 1.98A9.8 9.8 0 0 1 12 18.25C6.35 18.25 2.75 12 2.75 12a16.7 16.7 0 0 1 2.2-2.83" />
        </svg>
      `
    };
  }

  function getNextDepartmentAccessLevel(accessLevel = "") {
    const normalizedLevel = String(accessLevel || "").trim().toLowerCase();
    if (normalizedLevel === FUNNEL_ACCESS_LEVEL.VIEW) return FUNNEL_ACCESS_LEVEL.EDIT;
    if (normalizedLevel === FUNNEL_ACCESS_LEVEL.EDIT) return "";
    return FUNNEL_ACCESS_LEVEL.VIEW;
  }

  function setDepartmentChecklistAccessIn(container, departmentId, accessLevel = "") {
    const item = container?.querySelector?.(`[data-department-check-item][data-department-id="${departmentId}"]`);
    if (!item) return;

    const normalizedLevel = [FUNNEL_ACCESS_LEVEL.VIEW, FUNNEL_ACCESS_LEVEL.EDIT].includes(String(accessLevel || "").trim().toLowerCase())
      ? String(accessLevel).trim().toLowerCase()
      : "";

    item.dataset.accessLevel = normalizedLevel;
    item.classList.toggle("is-selected", Boolean(normalizedLevel));
    item.classList.toggle("is-view", normalizedLevel === FUNNEL_ACCESS_LEVEL.VIEW);
    item.classList.toggle("is-edit", normalizedLevel === FUNNEL_ACCESS_LEVEL.EDIT);

    const uiMeta = getDepartmentAccessUiMeta(normalizedLevel);
    const toggleButton = item.querySelector("[data-department-access-toggle]");
    if (toggleButton) {
      toggleButton.classList.toggle("active", Boolean(normalizedLevel));
      toggleButton.classList.toggle("is-view", normalizedLevel === FUNNEL_ACCESS_LEVEL.VIEW);
      toggleButton.classList.toggle("is-edit", normalizedLevel === FUNNEL_ACCESS_LEVEL.EDIT);
      toggleButton.setAttribute("aria-pressed", normalizedLevel ? "true" : "false");
      toggleButton.setAttribute("aria-label", uiMeta.buttonLabel);
      toggleButton.setAttribute("title", uiMeta.nextTitle);
      toggleButton.innerHTML = uiMeta.icon;
    }

    const status = item.querySelector("[data-department-access-status]");
    if (status) {
      status.textContent = uiMeta.status;
    }
  }

  function setDepartmentChecklistAccess(departmentId, accessLevel = "") {
    setDepartmentChecklistAccessIn(els.funnelDepartmentsChecklist, departmentId, accessLevel);
  }

  function renderDepartmentChecklist(selectedPermissions = [], options = {}) {
    if (!els.funnelDepartmentsChecklist) return;
    const omittedDepartmentIds = new Set(normalizeIdList(options.omitDepartmentIds || []));
    const selectedMap = new Map(
      normalizeFunnelDepartmentPermissions(selectedPermissions)
        .filter((item) => !omittedDepartmentIds.has(String(item.department_id || "")))
        .map((item) => [String(item.department_id), item.access_level])
    );
    if (!state.departments.length) {
      els.funnelDepartmentsChecklist.innerHTML = '<div class="department-checklist-empty">Nenhum departamento cadastrado.</div>';
      return;
    }

    els.funnelDepartmentsChecklist.innerHTML = state.departments
      .filter((department) => !omittedDepartmentIds.has(String(department.id || "")))
      .map((department) => `
      <div
        class="department-checklist-item"
        data-department-check-item="true"
        data-department-id="${escapeHtml(department.id)}"
        data-access-level=""
      >
        <div class="department-checklist-actions">
          <button
            type="button"
            class="department-access-btn"
            data-department-access-toggle="true"
            aria-label="Liberar visualização para ${escapeHtml(department.name)}"
            title="Clique para liberar visualização"
          ></button>
        </div>
        <div class="department-checklist-copy">
          <strong>${escapeHtml(department.name)}</strong>
          <span data-department-access-status>Sem acesso</span>
        </div>
      </div>
    `).join("");

    state.departments.forEach((department) => {
      if (omittedDepartmentIds.has(String(department.id || ""))) return;
      setDepartmentChecklistAccess(department.id, selectedMap.get(String(department.id)) || "");
    });
  }

  function updateFunnelDepartmentOwnerUi(forceValue = null) {
    const scope = String(forceValue || els.funnelVisibilityScope?.value || "all");
    if (!els.funnelOfficialDepartmentLabel || !els.funnelOfficialDepartmentHelper) return;

    if (scope === "departments") {
      els.funnelOfficialDepartmentLabel.textContent = "Departamento dono do funil";
      els.funnelOfficialDepartmentHelper.textContent = "Selecione o departamento principal do funil. Ele já entra com edição e não precisa ser marcado na lista abaixo.";
      return;
    }

    els.funnelOfficialDepartmentLabel.textContent = "Departamento oficial com edição";
    els.funnelOfficialDepartmentHelper.textContent = "Quando o funil estiver em \"Todos\", este departamento pode editar mesmo se os demais só visualizarem.";
  }

  function toggleFunnelDepartmentsVisibility(forceValue = null) {
    const scope = String(forceValue || els.funnelVisibilityScope?.value || "all");
    els.funnelGlobalAccessGroup?.classList.toggle("hidden", scope !== "all");
    els.funnelOfficialDepartmentGroup?.classList.toggle("hidden", scope === "owner");
    els.funnelDepartmentsGroup?.classList.toggle("hidden", scope !== "departments");
    updateFunnelDepartmentOwnerUi(scope);
  }

  function getFunnelOfficialDepartmentId(funnel = null) {
    const explicitOwnerDepartmentId = String(
      funnel?.owner_department_id
      || funnel?.ownerDepartmentId
      || ""
    ).trim();
    if (explicitOwnerDepartmentId) return explicitOwnerDepartmentId;
    const editPermission = getFunnelDepartmentPermissions(funnel).find((item) => item.access_level === FUNNEL_ACCESS_LEVEL.EDIT);
    return String(editPermission?.department_id || "").trim();
  }

  function renderFunnelOfficialDepartmentOptions(selectedDepartmentId = "") {
    if (!els.funnelOfficialDepartmentSelect) return;
    els.funnelOfficialDepartmentSelect.innerHTML = [
      '<option value="">Nenhum departamento oficial</option>',
      ...state.departments.map((department) => (
        `<option value="${escapeHtml(department.id)}" ${String(selectedDepartmentId || "") === String(department.id) ? "selected" : ""}>${escapeHtml(department.name)}</option>`
      ))
    ].join("");
  }

  function refreshFunnelDepartmentChecklistForModal() {
    const scope = String(els.funnelVisibilityScope?.value || "all").trim();
    const selectedPermissions = getSelectedFunnelDepartmentPermissions();
    const ownerDepartmentId = String(els.funnelOfficialDepartmentSelect?.value || "").trim();
    renderDepartmentChecklist(
      selectedPermissions,
      { omitDepartmentIds: scope === "departments" && ownerDepartmentId ? [ownerDepartmentId] : [] }
    );
  }

  function getFunnelGlobalAccessLevelValue(value = null) {
    const normalized = String(value ?? els.funnelGlobalAccessLevel?.value ?? "view").trim().toLowerCase();
    return normalized === FUNNEL_ACCESS_LEVEL.EDIT ? FUNNEL_ACCESS_LEVEL.EDIT : FUNNEL_ACCESS_LEVEL.VIEW;
  }

  function getSelectedFunnelDepartmentPermissions() {
    const items = [...(els.funnelDepartmentsChecklist?.querySelectorAll("[data-department-check-item]") || [])];
    return normalizeFunnelDepartmentPermissions(
      items
        .map((item) => ({
          department_id: String(item.dataset.departmentId || "").trim(),
          access_level: String(item.dataset.accessLevel || "").trim().toLowerCase()
        }))
        .filter((item) => item.department_id && item.access_level)
    );
  }

  function getSelectedFunnelDepartmentIds() {
    return getSelectedFunnelDepartmentPermissions().map((item) => item.department_id);
  }

  function renderDepartmentChecklistInto(container, selectedPermissions = [], options = {}) {
    if (!container) return;
    const omittedDepartmentIds = new Set(normalizeIdList(options.omitDepartmentIds || []));
    const selectedMap = new Map(
      normalizeFunnelDepartmentPermissions(selectedPermissions)
        .filter((item) => !omittedDepartmentIds.has(String(item.department_id || "")))
        .map((item) => [String(item.department_id), item.access_level])
    );

    if (!state.departments.length) {
      container.innerHTML = '<div class="department-checklist-empty">Nenhum departamento cadastrado.</div>';
      return;
    }

    container.innerHTML = state.departments
      .filter((department) => !omittedDepartmentIds.has(String(department.id || "")))
      .map((department) => `
        <div
          class="department-checklist-item"
          data-department-check-item="true"
          data-department-id="${escapeHtml(department.id)}"
          data-access-level=""
        >
          <div class="department-checklist-actions">
            <button
              type="button"
              class="department-access-btn"
              data-department-access-toggle="true"
              aria-label="Liberar visualização para ${escapeHtml(department.name)}"
              title="Clique para liberar visualização"
            ></button>
          </div>
          <div class="department-checklist-copy">
            <strong>${escapeHtml(department.name)}</strong>
            <span data-department-access-status>Sem acesso</span>
          </div>
        </div>
      `).join("");

    state.departments.forEach((department) => {
      if (omittedDepartmentIds.has(String(department.id || ""))) return;
      setDepartmentChecklistAccessIn(container, department.id, selectedMap.get(String(department.id)) || "");
    });
  }

  function renderGroupDepartmentChecklist(selectedPermissions = [], options = {}) {
    renderDepartmentChecklistInto(els.funnelGroupDepartmentsChecklist, selectedPermissions, options);
  }

  function getSelectedGroupDepartmentPermissions() {
    const items = [...(els.funnelGroupDepartmentsChecklist?.querySelectorAll("[data-department-check-item]") || [])];
    return normalizeFunnelDepartmentPermissions(
      items
        .map((item) => ({
          department_id: String(item.dataset.departmentId || "").trim(),
          access_level: String(item.dataset.accessLevel || "").trim().toLowerCase()
        }))
        .filter((item) => item.department_id && item.access_level)
    );
  }

  function renderGroupOwnerDepartmentOptions(selectedDepartmentId = "") {
    if (!els.funnelGroupOwnerDepartment) return;
    els.funnelGroupOwnerDepartment.innerHTML = [
      '<option value="">Sem departamento fixo</option>',
      ...state.departments.map((department) => (
        `<option value="${escapeHtml(department.id)}" ${String(selectedDepartmentId || "") === String(department.id) ? "selected" : ""}>${escapeHtml(department.name)}</option>`
      ))
    ].join("");
  }

  function refreshGroupDepartmentChecklist() {
    const ownerDepartmentId = String(els.funnelGroupOwnerDepartment?.value || "").trim();
    renderGroupDepartmentChecklist(
      getSelectedGroupDepartmentPermissions(),
      { omitDepartmentIds: ownerDepartmentId ? [ownerDepartmentId] : [] }
    );
  }

  function hasFunnelDepartmentPermission(funnel = null, allowedLevels = [FUNNEL_ACCESS_LEVEL.VIEW, FUNNEL_ACCESS_LEVEL.EDIT], profile = state.profile) {
    const departmentIds = getProfileDepartmentIds(profile);
    if (!departmentIds.length) return false;

    const levelSet = new Set((Array.isArray(allowedLevels) ? allowedLevels : [allowedLevels]).map((item) => String(item || "").trim().toLowerCase()));
    return getFunnelDepartmentPermissions(funnel).some((permission) => (
      departmentIds.includes(String(permission.department_id || ""))
      && levelSet.has(String(permission.access_level || FUNNEL_ACCESS_LEVEL.VIEW).trim().toLowerCase())
    ));
  }

  function getHighestFunnelDepartmentAccessLevel(funnel = null, profile = state.profile) {
    const departmentIds = getProfileDepartmentIds(profile);
    if (!departmentIds.length) return "";

    const permissions = getFunnelDepartmentPermissions(funnel);
    const hasEdit = permissions.some((permission) => (
      departmentIds.includes(String(permission.department_id || ""))
      && String(permission.access_level || "").trim().toLowerCase() === FUNNEL_ACCESS_LEVEL.EDIT
    ));
    if (hasEdit) return FUNNEL_ACCESS_LEVEL.EDIT;

    const hasView = permissions.some((permission) => (
      departmentIds.includes(String(permission.department_id || ""))
      && String(permission.access_level || FUNNEL_ACCESS_LEVEL.VIEW).trim().toLowerCase() === FUNNEL_ACCESS_LEVEL.VIEW
    ));
    return hasView ? FUNNEL_ACCESS_LEVEL.VIEW : "";
  }

  function getFunnelAccessLevelForProfile(funnel = null, profile = state.profile) {
    if (!funnel || !isApprovedUser()) return "";
    if (isDeveloper(profile)) return FUNNEL_ACCESS_LEVEL.EDIT;
    if (hasAdminRole(profile) && hasUnrestrictedDepartmentAccess(profile)) return FUNNEL_ACCESS_LEVEL.EDIT;
    if (hasUnrestrictedDepartmentAccess(profile)) {
      return String(funnel.visibility_scope || "all").trim().toLowerCase() === "all"
        ? getFunnelGlobalAccessLevelValue(funnel.visibility_access_level)
        : FUNNEL_ACCESS_LEVEL.EDIT;
    }
    if (String(funnel.created_by || "") === String(state.currentUser?.id || "")) {
      return FUNNEL_ACCESS_LEVEL.EDIT;
    }

    const visibilityScope = String(funnel.visibility_scope || "all").trim().toLowerCase();
    if (visibilityScope === "owner") {
      return String(funnel.created_by || "") === String(state.currentUser?.id || "") ? FUNNEL_ACCESS_LEVEL.EDIT : "";
    }
    if (visibilityScope === "all") {
      if (hasFunnelDepartmentPermission(funnel, [FUNNEL_ACCESS_LEVEL.EDIT], profile)) {
        return FUNNEL_ACCESS_LEVEL.EDIT;
      }
      return getFunnelGlobalAccessLevelValue(funnel.visibility_access_level);
    }
    if (visibilityScope === "departments") {
      return getHighestFunnelDepartmentAccessLevel(funnel, profile);
    }
    return "";
  }

  function resolveFunnelFromPermissionTarget(target = null) {
    if (!target) {
      const [selectedFunnelId] = getFilterValues("funnel", els.funnelFilter);
      return getFunnelById(state.activeFunnelId)
        || getFunnelById(getSubfunnelById(state.activeSubfunnelId)?.funnel_id)
        || getFunnelById(state.structureFunnelId)
        || getFunnelById(selectedFunnelId || "")
        || null;
    }

    if (typeof target === "string") {
      return getFunnelById(target) || getFunnelById(getSubfunnelById(target)?.funnel_id) || null;
    }

    if (target.funnel_id) {
      return getFunnelById(target.funnel_id);
    }

    if (target.stage_id || target.owner || target.contact || target.notes) {
      return getFunnelFromLeadLikeTarget(target);
    }

    if (target.stage_type || target.color || Object.prototype.hasOwnProperty.call(target, "position")) {
      return getFunnelById(getFunnelIdFromStageId(target.id));
    }

    if (target.id && target.category) {
      return getFunnelById(target.id) || target;
    }

    return null;
  }

  function canRoleEditFunnelContent(funnel = null, profile = state.profile) {
    if (!funnel || !isApprovedUser()) return false;
    return getFunnelAccessLevelForProfile(funnel, profile) === FUNNEL_ACCESS_LEVEL.EDIT;
  }

  function canViewFunnelGroupContext(funnel = null, profile = state.profile) {
    if (!funnel?.group_id) return true;
    if (isDeveloper(profile)) return true;
    if (hasUnrestrictedDepartmentAccess(profile)) return true;
    if (String(funnel.created_by || "") === String(state.currentUser?.id || "")) return true;

    const group = getGroupById(funnel.group_id);
    if (!group) return true;
    if (canViewGroupItem(group, profile)) return true;

    const funnelAccessLevel = getFunnelAccessLevelForProfile(funnel, profile);
    return funnelAccessLevel === FUNNEL_ACCESS_LEVEL.VIEW || funnelAccessLevel === FUNNEL_ACCESS_LEVEL.EDIT;
  }

  function canViewFunnelItem(funnel = null, profile = state.profile) {
    if (!funnel || !isApprovedUser()) return false;

    let hasBasePermission = false;
    if (isDeveloper(profile)) {
      hasBasePermission = true;
    } else if (hasUnrestrictedDepartmentAccess(profile)) {
      hasBasePermission = true;
    } else if (String(funnel.created_by || "") === String(state.currentUser?.id || "")) {
      hasBasePermission = true;
    }

    const visibilityScope = String(funnel.visibility_scope || "all").trim().toLowerCase();
    if (!hasBasePermission && visibilityScope === "all") hasBasePermission = true;
    if (visibilityScope === "owner") {
      hasBasePermission = String(funnel.created_by || "") === String(state.currentUser?.id || "");
    } else if (!hasBasePermission && visibilityScope === "departments") {
      hasBasePermission = hasFunnelDepartmentPermission(funnel, [FUNNEL_ACCESS_LEVEL.VIEW, FUNNEL_ACCESS_LEVEL.EDIT], profile);
    }

    if (!hasBasePermission) return false;
    return canViewFunnelGroupContext(funnel, profile);
  }

  function canEditFunnelItem(funnel = null, profile = state.profile) {
    if (!funnel || !hasAdminRole(profile)) return false;
    if (isDeveloper(profile)) return true;
    if (hasUnrestrictedDepartmentAccess(profile)) return true;
    if (String(funnel.created_by || "") === String(state.currentUser?.id || "")) return canViewFunnelGroupContext(funnel, profile);

    const visibilityScope = String(funnel.visibility_scope || "all").trim().toLowerCase();
    let canEdit = false;
    if (visibilityScope === "all") {
      canEdit = getFunnelGlobalAccessLevelValue(funnel.visibility_access_level) === FUNNEL_ACCESS_LEVEL.EDIT
        || hasFunnelDepartmentPermission(funnel, [FUNNEL_ACCESS_LEVEL.EDIT], profile);
    } else {
      canEdit = hasFunnelDepartmentPermission(funnel, [FUNNEL_ACCESS_LEVEL.EDIT], profile);
    }
    return canEdit && canViewFunnelGroupContext(funnel, profile);
  }

  function profileMatchesCurrentDepartmentScope(profile = null) {
    if (!profile) return false;
    if (isDeveloper()) return true;
    if (hasUnrestrictedDepartmentAccess(state.profile)) return true;
    const currentDepartmentIds = getProfileDepartmentIds(state.profile);
    if (!currentDepartmentIds.length) return false;
    return getProfileDepartmentIds(profile).some((departmentId) => currentDepartmentIds.includes(departmentId));
  }

  function requestMatchesCurrentDepartmentScope(request = null) {
    if (!request) return false;
    if (isDeveloper()) return true;
    if (hasUnrestrictedDepartmentAccess(state.profile)) return true;
    const currentDepartmentIds = getProfileDepartmentIds(state.profile);
    if (!currentDepartmentIds.length) return false;

    const requestedDepartmentIds = [
      request.requested_department_id,
      request.requested_department_id_secondary,
      request.approved_department_id,
      request.approved_department_id_secondary,
      request.department_id
    ]
      .map((value) => String(value || "").trim())
      .filter(Boolean);

    if (!requestedDepartmentIds.length) return false;
    return requestedDepartmentIds.some((departmentId) => currentDepartmentIds.includes(departmentId));
  }

  function getFunnelIdFromStageId(stageId = "") {
    const normalizedStageId = String(stageId || "").trim();
    if (!normalizedStageId) return null;
    const assignedSubfunnelId = state.funnelWorkspace?.stageAssignments?.[normalizedStageId] || null;
    return getSubfunnelById(assignedSubfunnelId)?.funnel_id || null;
  }

  function getFunnelFromLeadLikeTarget(target = null) {
    if (!target) return null;

    const directLeadFunnelId = getLeadFunnelId(target);
    if (directLeadFunnelId) {
      return getFunnelById(directLeadFunnelId);
    }

    const stageBasedFunnelId = getFunnelIdFromStageId(target.stage_id || target.stageId || "");
    if (stageBasedFunnelId) {
      return getFunnelById(stageBasedFunnelId);
    }

    return getFunnelById(state.activeFunnelId)
      || getFunnelById(getSubfunnelById(state.activeSubfunnelId)?.funnel_id)
      || null;
  }

  function getRequestTargetFunnel(context = null) {
    if (!context) return null;

    const payload = context.payload || {};
    const explicitFunnelId = String(
      payload.target_funnel_id
      || payload.funnel_id
      || context.funnelId
      || context.entityId
      || ""
    ).trim();

    if (context.entityType === "funnel" && explicitFunnelId) {
      return getFunnelById(explicitFunnelId);
    }

    if (payload.subfunnel_id || payload.target_subfunnel_id) {
      const subfunnel = getSubfunnelById(payload.subfunnel_id || payload.target_subfunnel_id);
      if (subfunnel?.funnel_id) return getFunnelById(subfunnel.funnel_id);
    }

    if (payload.stage_id || payload.target_stage_id || context.entityType === "stage") {
      const stageFunnelId = getFunnelIdFromStageId(payload.stage_id || payload.target_stage_id || context.entityId || "");
      if (stageFunnelId) return getFunnelById(stageFunnelId);
    }

    if (payload.lead_id || payload.target_lead_id || context.entityType === "lead") {
      const lead = state.leads.find((item) => item.id === (payload.lead_id || payload.target_lead_id || context.entityId))
        || { id: payload.lead_id || payload.target_lead_id || context.entityId, stage_id: payload.stage_id || payload.lead_stage_id || "" };
      const leadFunnel = getFunnelFromLeadLikeTarget(lead);
      if (leadFunnel) return leadFunnel;
    }

    return getFunnelById(state.activeFunnelId)
      || getFunnelById(getSubfunnelById(state.activeSubfunnelId)?.funnel_id)
      || null;
  }

  function getAdminRequestTargetDepartmentIds(request = null) {
    if (!request) return [];

    const payload = request.payload || {};
    const explicitDepartmentIds = normalizeIdList(
      payload.target_department_ids
      || payload.department_ids
      || payload.requested_department_ids
      || []
    );
    if (explicitDepartmentIds.length) return explicitDepartmentIds;

    const targetFunnel = getRequestTargetFunnel({
      entityType: request.entity_type,
      entityId: request.entity_id,
      payload
    });
    return getFunnelDepartmentIds(targetFunnel);
  }

  function canManageAdminRequest(request = null) {
    if (!hasAdminRole() || !request) return false;
    if (isDeveloper()) return true;
    if (hasUnrestrictedDepartmentAccess(state.profile)) return true;

    const targetDepartmentIds = getAdminRequestTargetDepartmentIds(request);
    if (!targetDepartmentIds.length) return false;

    const currentDepartmentIds = getProfileDepartmentIds(state.profile);
    if (!currentDepartmentIds.length) return false;
    return targetDepartmentIds.some((departmentId) => currentDepartmentIds.includes(String(departmentId || "").trim()));
  }

  function getHistoryItemTargetFunnel(item = null) {
    if (!item) return null;

    const payload = item.payload || {};
    const explicitFunnelId = String(payload.funnel_id || payload.target_funnel_id || "").trim();
    if (explicitFunnelId) {
      const directFunnel = getFunnelById(explicitFunnelId);
      if (directFunnel) return directFunnel;
    }

    if (payload.subfunnel_id || payload.target_subfunnel_id) {
      const subfunnel = getSubfunnelById(payload.subfunnel_id || payload.target_subfunnel_id);
      if (subfunnel?.funnel_id) return getFunnelById(subfunnel.funnel_id);
    }

    const stageId = payload.stage_id || payload.target_stage_id || payload.from_stage_id || payload.to_stage_id || item.entity_id;
    if ((item.entity_type === "stage" || payload.stage_id || payload.target_stage_id || payload.from_stage_id || payload.to_stage_id) && stageId) {
      const stageFunnelId = getFunnelIdFromStageId(stageId);
      if (stageFunnelId) return getFunnelById(stageFunnelId);
    }

    const leadId = payload.lead_id || payload.target_lead_id || item.entity_id;
    if ((item.entity_type === "lead" || payload.lead_id || payload.target_lead_id) && leadId) {
      const leadPayload = payload.stage_id ? { id: leadId, stage_id: payload.stage_id } : null;
      const lead = state.leads.find((entry) => entry.id === leadId) || payload || leadPayload;
      return getFunnelFromLeadLikeTarget(lead);
    }

    if (item.entity_type === "funnel") {
      return getFunnelById(item.entity_id);
    }

    return null;
  }

  function canViewHistoryItem(item = null) {
    if (!hasAdminRole()) return false;
    if (isDeveloper()) return true;
    if (hasUnrestrictedDepartmentAccess(state.profile)) return true;

    const targetFunnel = getHistoryItemTargetFunnel(item);
    if (!targetFunnel) return false;

    const currentDepartmentIds = getProfileDepartmentIds(state.profile);
    const targetDepartmentIds = getFunnelDepartmentIds(targetFunnel);
    if (!currentDepartmentIds.length || !targetDepartmentIds.length) return false;
    return targetDepartmentIds.some((departmentId) => currentDepartmentIds.includes(String(departmentId || "").trim()));
  }

  function canAssignDepartmentScope(primaryDepartmentId, secondaryDepartmentId = null) {
    if (!hasAdminRole()) return false;
    if (isDeveloper()) return true;

    const normalizedSelection = normalizeDepartmentSelectionValues(primaryDepartmentId, secondaryDepartmentId);
    if (hasUnrestrictedDepartmentAccess(state.profile)) return true;
    if (normalizedSelection.unrestricted || (!normalizedSelection.primaryDepartmentId && !normalizedSelection.secondaryDepartmentId)) {
      return false;
    }

    const currentDepartmentIds = getProfileDepartmentIds(state.profile);
    const nextDepartmentIds = [normalizedSelection.primaryDepartmentId, normalizedSelection.secondaryDepartmentId].filter(Boolean);
    return nextDepartmentIds.length > 0 && nextDepartmentIds.every((departmentId) => currentDepartmentIds.includes(departmentId));
  }

  function canSeeManagedProfile(profile = null) {
    if (!hasAdminRole() || !profile) return false;
    if (isDeveloper()) return true;
    if (hasUnrestrictedDepartmentAccess(state.profile)) return true;
    return profileMatchesCurrentDepartmentScope(profile);
  }

  function canManageProfile(profile = null, options = {}) {
    if (!hasAdminRole() || !profile) return false;

    const normalizedOptions = typeof options === "string" ? { action: options } : (options || {});
    const action = String(normalizedOptions.action || "general").trim().toLowerCase();
    const nextRole = normalizedOptions.nextRole ? normalizeUserRole(normalizedOptions.nextRole, getProfileRole(profile)) : getProfileRole(profile);
    const targetIsSelf = String(profile.id || "") === String(state.profile?.id || "");
    const actorIsDeveloper = isDeveloper();
    const actorIsUnrestrictedAdmin = isAdmin() && hasUnrestrictedDepartmentAccess(state.profile);
    const targetIsDeveloper = isProtectedDeveloperProfile(profile);
    const targetHasAdminRole = hasAdminRole(profile);

    if (action === "delete" && targetIsSelf) return false;

    if (action === "role") {
      if (nextRole === USER_ROLE.DEVELOPER) {
        if (!actorIsDeveloper || !isDeveloperEmail(profile.email)) return false;
      }
      if (targetIsDeveloper && (!actorIsDeveloper || !targetIsSelf)) return false;
      if (targetIsSelf && !actorIsDeveloper) return false;
    }

    if ((action === "department" || action === "delete") && targetIsDeveloper && !actorIsDeveloper) {
      return false;
    }

    if (actorIsDeveloper) return true;

    if (targetIsDeveloper) return false;

    if (actorIsUnrestrictedAdmin) {
      if (targetHasAdminRole && hasUnrestrictedDepartmentAccess(profile) && !targetIsSelf) return false;
      return true;
    }

    if (!profileMatchesCurrentDepartmentScope(profile)) return false;
    if (targetHasAdminRole) return false;
    return true;
  }

  function canManageAccessRequest(request = null) {
    if (!hasAdminRole() || !request) return false;
    if (isDeveloperEmail(request.email || "")) return isDeveloper();
    if (isDeveloper()) return true;
    if (hasUnrestrictedDepartmentAccess(state.profile)) return true;
    return requestMatchesCurrentDepartmentScope(request);
  }

  function canEditLeads(target = null) {
    if (!isApprovedUser()) return false;
    const funnel = resolveFunnelFromPermissionTarget(target);
    if (funnel) return canRoleEditFunnelContent(funnel);
    return getAvailableFunnels().some((item) => canRoleEditFunnelContent(item));
  }

  function canDeleteLeads(target = null) {
    if (!hasAdminRole()) return false;
    if (isDeveloper()) return true;
    const funnel = resolveFunnelFromPermissionTarget(target);
    if (funnel) return canEditFunnelItem(funnel);
    return hasUnrestrictedDepartmentAccess(state.profile);
  }

  function canAssignLeadOwner(target = null) {
    if (!hasAdminRole()) return false;
    if (isDeveloper()) return true;
    const funnel = resolveFunnelFromPermissionTarget(target);
    if (funnel) return canEditFunnelItem(funnel);
    return hasUnrestrictedDepartmentAccess(state.profile);
  }

  function canCreateLeads() {
    return canEditLeads();
  }

  function canMoveLeads(target = null) {
    return canEditLeads(target);
  }

  function canImportLeads(target = null) {
    return canEditLeads(target);
  }

  function canExportLeads(target = null) {
    return canEditLeads(target);
  }

  function canViewLeadsList() {
    return isApprovedUser();
  }

  function canViewTeam() {
    return isApprovedUser() && !isManagement();
  }

  function canManageAdminAreas() {
    return hasAdminRole();
  }

  function canViewHistory() {
    return hasAdminRole();
  }

  function canManageStages(funnel = null) {
    if (!hasAdminRole()) return false;
    if (isDeveloper()) return true;
    const targetFunnel = funnel
      || getFunnelById(state.activeFunnelId)
      || getFunnelById(state.structureFunnelId)
      || getFunnelById(state.funnelModalContext?.funnelId)
      || getFunnelById(getSubfunnelById(state.activeSubfunnelId)?.funnel_id)
      || getFunnelById(getSubfunnelById(state.structureSubfunnelId)?.funnel_id)
      || null;

    if (!targetFunnel) return true;
    return canEditFunnelItem(targetFunnel);
  }

  function canManageLeadSources() {
    return hasAdminRole();
  }

  function isViewAllowed(name) {
    if (!name) return false;
    if ((name === "estrutura" || name === "configuracoes") && !canManageAdminAreas()) return false;
    if (name === "leads" && !canViewLeadsList()) return false;
    if (name === "equipe" && !canViewTeam()) return false;
    return true;
  }

  function getCurrentLeadOwnerName() {
    return normalizeSpacing(getUserDisplayName());
  }

  function resolveLeadOwnerForPersistence({ existingLead = null, requestedOwner = "" } = {}) {
    if (canAssignLeadOwner(existingLead)) {
      return getCanonicalMappedValue(requestedOwner, state.ownerCanonicalMap, "owner");
    }
    if (existingLead) {
      return existingLead.owner_raw ?? existingLead.owner ?? null;
    }
    return getCurrentLeadOwnerName();
  }

  function getLeadOwnerOptions(includeOwner = "") {
    const values = [
      ...state.leads.map((lead) => lead?.owner),
      ...state.profiles
        .map((profile) => profile?.full_name || "")
        .filter((profileName) => !shouldHideOwnerProfileOption(profileName)),
      ...getManualLeadOwnerOptions(),
      getCurrentLeadOwnerName(),
      includeOwner
    ];

    return [...new Set(
      values
        .map((value) => normalizeSpacing(value))
        .filter(Boolean)
        .map((value) => resolvePreferredOwnerDisplayName(value, state.profiles))
        .filter(Boolean)
    )]
      .sort((a, b) => a.localeCompare(b, "pt-BR"));
  }

  function renderLeadOwnerOptions(selectedOwner = "") {
    if (!els.owner) return;

    const normalizedSelectedOwner = normalizeSpacing(selectedOwner);
    const owners = getLeadOwnerOptions(normalizedSelectedOwner);

    els.owner.innerHTML = [
      '<option value="">Selecione o responsável</option>',
      ...owners.map((owner) => `<option value="${escapeHtml(owner)}">${escapeHtml(owner)}</option>`),
      '<option value="__new__">+ Adicionar novo responsável</option>'
    ].join("");

    els.owner.value = owners.includes(getCanonicalDisplayLabel(normalizedSelectedOwner, "owner"))
      ? getCanonicalDisplayLabel(normalizedSelectedOwner, "owner")
      : "";

    syncBrandedSelects();
  }

  function getSocialSourceOptions(includeSource = "") {
    const values = [
      ...(state.socialSources || []).map((item) => item?.name || item || ""),
      ...state.leads.map((lead) => lead?.social_source || ""),
      includeSource
    ];

    return [...new Set(
      values
        .map((value) => normalizeSpacing(value))
        .filter(Boolean)
        .map((value) => getCanonicalDisplayLabel(value, "social_source"))
        .filter(Boolean)
    )]
      .sort((a, b) => a.localeCompare(b, "pt-BR"));
  }

  function renderSocialSourceOptions(selectedSource = "") {
    if (!els.socialSource) return;

    const normalizedSelectedSource = normalizeSpacing(selectedSource);
    const socialSources = getSocialSourceOptions(normalizedSelectedSource);
    const canonicalSelectedSource = getCanonicalDisplayLabel(normalizedSelectedSource, "social_source");

    els.socialSource.innerHTML = [
      '<option value="">Selecione o canal</option>',
      ...socialSources.map((source) => `<option value="${escapeHtml(source)}">${escapeHtml(source)}</option>`),
      '<option value="__new__">+ Adicionar novo canal</option>'
    ].join("");

    els.socialSource.value = socialSources.includes(canonicalSelectedSource) ? canonicalSelectedSource : "";
    syncBrandedSelects();
  }

  function renderLeadTargetSelectors({ lead = null, selectedFunnelId = "", selectedSubfunnelId = "", selectedStageId = "" } = {}) {
    if (!els.leadFunnelSelect || !els.leadSubfunnelSelect || !els.stage) return;

    const selectableFunnels = getLeadSelectableFunnels();
    const activeLeadFunnelId = selectedFunnelId || getLeadFunnelId(lead) || state.activeFunnelId || selectableFunnels[0]?.id || "";
    const resolvedFunnel = selectableFunnels.find((item) => item.id === activeLeadFunnelId) || selectableFunnels[0] || null;
    const hasDetailedAccess = canSelectDetailedLeadTarget(resolvedFunnel);
    const subfunnels = resolvedFunnel ? getSubfunnelsForFunnel(resolvedFunnel.id) : [];
    const resolvedSubfunnel = subfunnels.find((item) => item.id === selectedSubfunnelId)
      || subfunnels.find((item) => item.id === getLeadSubfunnelId(lead))
      || subfunnels[0]
      || null;
    const stageOptions = resolvedSubfunnel ? getStagesForSubfunnel(resolvedSubfunnel.id) : [];
    const resolvedStage = stageOptions.find((item) => item.id === selectedStageId)
      || stageOptions.find((item) => item.id === lead?.stage_id)
      || stageOptions[0]
      || null;

    els.leadFunnelSelect.innerHTML = selectableFunnels.map((funnel) => `
      <option value="${funnel.id}" ${resolvedFunnel?.id === funnel.id ? "selected" : ""}>${escapeHtml(funnel.name)} (${escapeHtml(funnel.category)})</option>
    `).join("");

    els.leadSubfunnelSelect.innerHTML = subfunnels.map((subfunnel) => `
      <option value="${subfunnel.id}" ${resolvedSubfunnel?.id === subfunnel.id ? "selected" : ""}>${escapeHtml(subfunnel.name)}</option>
    `).join("");

    els.stage.innerHTML = stageOptions.map((stage) => `
      <option value="${stage.id}" ${resolvedStage?.id === stage.id ? "selected" : ""}>${escapeHtml(stage.name)}</option>
    `).join("");

    els.leadSubfunnelSelect.disabled = !hasDetailedAccess;
    els.stage.disabled = !hasDetailedAccess;

    if (resolvedFunnel?.id) els.leadFunnelSelect.value = resolvedFunnel.id;
    if (resolvedSubfunnel?.id) els.leadSubfunnelSelect.value = resolvedSubfunnel.id;
    if (resolvedStage?.id) els.stage.value = resolvedStage.id;

    syncBrandedSelects();
  }

  function toggleLeadOwnerCreateBox(forceOpen = null) {
    if (!els.ownerCreateBox || !els.ownerCreateInput || !els.owner) return;
    const shouldOpen = forceOpen === null ? els.owner.value === "__new__" : Boolean(forceOpen);
    els.ownerCreateBox.classList.toggle("hidden", !shouldOpen);
    if (!shouldOpen) {
      els.ownerCreateInput.value = "";
    }
  }

  function createAndSelectLeadOwner() {
    if (!els.owner || !els.ownerCreateInput) return;

    const nextOwner = normalizeSpacing(els.ownerCreateInput.value);
    if (!nextOwner) {
      alert("Informe o nome do novo responsável.");
      return;
    }

    const canonicalOwner = getCanonicalDisplayLabel(nextOwner, "owner");
    const key = getCanonicalValueKey(canonicalOwner);
    if (key) {
      state.ownerCanonicalMap.set(key, canonicalOwner);
    }

    renderLeadOwnerOptions(canonicalOwner);
    els.owner.value = canonicalOwner;
    toggleLeadOwnerCreateBox(false);
  }

  function toggleSocialSourceCreateBox(forceOpen = null) {
    if (!els.socialSourceCreateBox || !els.socialSourceCreateInput || !els.socialSource) return;
    const shouldOpen = forceOpen === null ? els.socialSource.value === "__new__" : Boolean(forceOpen);
    els.socialSourceCreateBox.classList.toggle("hidden", !shouldOpen);
    if (!shouldOpen) {
      els.socialSourceCreateInput.value = "";
    }
  }

  function createAndSelectSocialSource() {
    if (!els.socialSource || !els.socialSourceCreateInput) return;

    const nextSource = normalizeSpacing(els.socialSourceCreateInput.value);
    if (!nextSource) {
      alert("Informe o nome do novo canal de origem.");
      return;
    }

    const canonicalSource = getCanonicalDisplayLabel(nextSource, "social_source");
    const key = getCanonicalValueKey(canonicalSource);
    if (key) {
      state.socialSourceCanonicalMap.set(key, canonicalSource);
    }
    state.socialSources = normalizeSocialSources([...(state.socialSources || []), canonicalSource]);
    writeStoredSocialSources();

    renderSocialSourceOptions(canonicalSource);
    els.socialSource.value = canonicalSource;
    toggleSocialSourceCreateBox(false);
  }

  async function reconcileLeadOwnersWithProfilesOnce() {
    if (state.ownerReconciliationInProgress || state.ownerReconciliationDone) return false;
    if (!canAssignLeadOwner() || !state.profilesLoaded || !state.profiles.length) return false;

    if (readStoredOwnerReconciliationDone()) {
      state.ownerReconciliationDone = true;
      return false;
    }

    const updates = state.leads
      .map((lead) => {
        const currentOwner = normalizeSpacing(lead?.owner_raw ?? lead?.owner ?? "");
        const matchedProfileName = getForcedLeadOwnerReassignment(currentOwner, state.profiles)
          || findMatchingProfileNameForOwner(currentOwner, state.profiles);
        if (!currentOwner || !matchedProfileName || matchedProfileName === currentOwner) return null;
        return {
          id: lead.id,
          previous_owner: currentOwner,
          next_owner: matchedProfileName
        };
      })
      .filter(Boolean);

    if (!updates.length) {
      state.ownerReconciliationDone = true;
      writeStoredOwnerReconciliationDone(true);
      return false;
    }

    state.ownerReconciliationInProgress = true;

    try {
      for (const batch of chunkArray(updates, 200)) {
        const payload = batch.map((item) => ({
          id: item.id,
          owner: item.next_owner
        }));

        const { error } = await state.supabase
          .from("leads")
          .upsert(payload, { onConflict: "id" });

        if (error) {
          console.error("Erro ao reconciliar responsáveis:", error);
          return false;
        }
      }

      await logChange(
        "reconcile_lead_owners",
        "lead",
        null,
        `Responsáveis dos leads foram reconciliados com os usuários em ${new Date().toLocaleDateString("pt-BR")} por ${getUserDisplayName()}.`,
        {
          total_updated: updates.length,
          updates
        }
      );

      state.ownerReconciliationDone = true;
      writeStoredOwnerReconciliationDone(true);
      await loadAppData({ includeProfiles: state.profilesLoaded });
      return true;
    } finally {
      state.ownerReconciliationInProgress = false;
    }
  }

  function resolveLeadAssigneeForPersistence(existingLead = null) {
    if (existingLead) {
      return existingLead.assigned_to ?? null;
    }
    return state.currentUser?.id || null;
  }

  function isUuid(value) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(value || "").trim());
  }

  function normalizeIdList(values) {
    const list = Array.isArray(values) ? values : [values];
    const seen = new Set();

    return list.reduce((acc, value) => {
      const normalized = String(value || "").trim();
      if (!normalized) return acc;

      const key = normalized.toLowerCase();
      if (seen.has(key)) return acc;
      seen.add(key);
      acc.push(normalized);
      return acc;
    }, []);
  }

  function formatSupabaseError(error, fallback = "Operacao nao concluida.") {
    if (!error) return fallback;

    const parts = [];
    const message = String(error.message || "").trim();
    const details = String(error.details || "").trim();
    const hint = String(error.hint || "").trim();
    const code = String(error.code || "").trim();

    if (message) parts.push(message);
    if (details && details !== message) parts.push(details);
    if (hint) parts.push(`Dica: ${hint}`);
    if (code) parts.push(`Codigo: ${code}`);

    return parts.join(" | ") || fallback;
  }

  function chunkArray(items, chunkSize) {
    const size = Math.max(1, Number(chunkSize) || 1);
    const source = Array.isArray(items) ? items : [];
    const chunks = [];

    for (let index = 0; index < source.length; index += size) {
      chunks.push(source.slice(index, index + size));
    }

    return chunks;
  }

  function waitForNextPaint() {
    return new Promise((resolve) => window.requestAnimationFrame(() => resolve()));
  }

  async function fetchAllLeads() {
    const pageSize = 1000;
    const allRows = [];
    let from = 0;

    const getLeadOrderTimestamp = (lead) => {
      const createdAt = Date.parse(String(lead?.created_at || ""));
      if (Number.isFinite(createdAt)) return createdAt;
      const startDate = Date.parse(String(lead?.start_date || ""));
      if (Number.isFinite(startDate)) return startDate;
      return 0;
    };

    while (true) {
      const { data, error } = await state.supabase
        .from("leads")
        .select("*")
        .range(from, from + pageSize - 1);

      if (error) {
        return { data: [], error };
      }

      const rows = Array.isArray(data) ? data : [];
      allRows.push(...rows);

      if (rows.length < pageSize) {
        allRows.sort((left, right) => getLeadOrderTimestamp(right) - getLeadOrderTimestamp(left));
        return { data: allRows, error: null };
      }

      from += pageSize;
    }
  }

  function getRoleLabel(role = getUserRole(), email = "") {
    if (isDeveloperEmail(email || getCurrentUserEmail())) return "Desenvolvedor";
    const normalizedRole = normalizeUserRole(role, USER_ROLE.USER);
    if (normalizedRole === USER_ROLE.DEVELOPER) return "Desenvolvedor";
    if (normalizedRole === USER_ROLE.ADMIN) return "Administrador";
    if (normalizedRole === USER_ROLE.MANAGEMENT) return "Gest\u00e3o";
    return "Usuario comum";
  }

  function canAssignDeveloperRoleToEmail(email = "") {
    return isDeveloper() && isDeveloperEmail(email);
  }

  function getRoleOptionsMarkup(selectedRole = USER_ROLE.USER, targetEmail = "") {
    const normalizedSelectedRole = isDeveloperEmail(targetEmail)
      ? USER_ROLE.DEVELOPER
      : normalizeUserRole(selectedRole, USER_ROLE.USER);
    const options = [
      { value: USER_ROLE.USER, label: "Usuario comum" },
      { value: USER_ROLE.MANAGEMENT, label: "Gest\u00e3o" },
      { value: USER_ROLE.ADMIN, label: "Administrador" }
    ];

    if (canAssignDeveloperRoleToEmail(targetEmail) || normalizedSelectedRole === USER_ROLE.DEVELOPER) {
      options.push({ value: USER_ROLE.DEVELOPER, label: "Desenvolvedor" });
    }

    return options.map((option) => `
      <option value="${option.value}" ${normalizedSelectedRole === option.value ? "selected" : ""}>${option.label}</option>
    `).join("");
  }

  function canAssignRoleToProfile(profile = null, nextRole = USER_ROLE.USER) {
    if (!profile) return false;
    return canManageProfile(profile, { action: "role", nextRole });
  }

  function getPersistedRoleValue(nextRole = USER_ROLE.USER, email = "") {
    const normalizedRole = normalizeUserRole(nextRole, USER_ROLE.USER);
    return isDeveloperEmail(email) ? USER_ROLE.ADMIN : normalizedRole;
  }

  function canAssignRoleToRequest(request = null, nextRole = USER_ROLE.USER) {
    if (!request || !canManageAccessRequest(request)) return false;
    const normalizedRole = normalizeUserRole(nextRole, USER_ROLE.USER);

    if (normalizedRole === USER_ROLE.DEVELOPER) {
      return canAssignDeveloperRoleToEmail(request.email || "");
    }

    if (isDeveloperEmail(request.email || "")) {
      return isDeveloper();
    }

    return true;
  }

  function getAccessStatusLabel(status = getAccessStatus()) {
    if (status === ACCESS_STATUS.APPROVED) return "Aprovado";
    if (status === ACCESS_STATUS.REJECTED) return "Recusado";
    return "Pendente";
  }

  function getAccessSummaryLabel() {
    const roleLabel = getRoleLabel();
    const statusLabel = getAccessStatusLabel();
    if (isApprovedUser()) return `${roleLabel} liberado`;
    return `${roleLabel} - ${statusLabel.toLowerCase()}`;
  }

  function getUserInitials() {
    const source = getUserDisplayName();
    const parts = String(source || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2);
    if (!parts.length) return "PI";
    return parts.map((part) => part[0]?.toUpperCase() || "").join("");
  }

  function getUserAvatarUrl() {
    return String(
      state.currentUser?.user_metadata?.avatar_url ||
      state.profile?.avatar_url ||
      ""
    ).trim();
  }

  function renderAvatarContent(container, options = {}) {
    if (!container) return;

    const avatarUrl = String(options.avatarUrl ?? getUserAvatarUrl()).trim();
    const initials = String(options.initials ?? getUserInitials()).trim() || "PI";

    container.classList.toggle("has-image", Boolean(avatarUrl));
    if (avatarUrl) {
      container.innerHTML = `<img src="${escapeHtml(avatarUrl)}" alt="Foto do perfil" class="avatar-image" style="width:100%;height:100%;display:block;object-fit:cover;border:0;outline:none;border-radius:50%;clip-path:circle(50% at 50% 50%);box-shadow:none;background:transparent;" />`;
      return;
    }

    container.textContent = initials;
  }

  function renderAccountAvatarPreview(avatarUrl = state.accountAvatarDraft) {
    renderAvatarContent(els.accountAvatarPreview, {
      avatarUrl,
      initials: els.accountFullName?.value || getUserInitials()
    });
    els.removeAccountAvatarBtn?.classList.toggle("hidden", !String(avatarUrl || "").trim());
  }

  function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = () => reject(new Error("Nao foi possivel ler a imagem."));
      reader.readAsDataURL(file);
    });
  }

  function loadImageElement(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Nao foi possivel processar a imagem."));
      image.src = src;
    });
  }

  async function buildAvatarDataUrl(file) {
    const originalDataUrl = await readFileAsDataUrl(file);
    const image = await loadImageElement(originalDataUrl);
    const side = Math.min(image.naturalWidth || image.width || 0, image.naturalHeight || image.height || 0);
    if (!side) return originalDataUrl;

    const sourceX = Math.max(0, ((image.naturalWidth || image.width) - side) / 2);
    const sourceY = Math.max(0, ((image.naturalHeight || image.height) - side) / 2);
    const canvas = document.createElement("canvas");
    const targetSize = 256;
    canvas.width = targetSize;
    canvas.height = targetSize;
    const context = canvas.getContext("2d");
    if (!context) return originalDataUrl;

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.drawImage(image, sourceX, sourceY, side, side, 0, 0, targetSize, targetSize);
    return canvas.toDataURL("image/jpeg", 0.86);
  }

  function syncShellUserSummary() {
    if (els.profileMenuName) {
      els.profileMenuName.textContent = getUserDisplayName();
    }
    if (els.profileMenuRole) {
      els.profileMenuRole.textContent = getAccessSummaryLabel();
    }
    if (els.profileMenuAvatar) {
      renderAvatarContent(els.profileMenuAvatar);
    }
  }

  function readStoredTheme() {
    try {
      return window.localStorage.getItem(THEME_STORAGE_KEY) === "dark" ? "dark" : "light";
    } catch (_error) {
      return "light";
    }
  }

  function writeStoredTheme(theme) {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme === "dark" ? "dark" : "light");
    } catch (_error) {
      // ignore local storage failures
    }
  }

  function isDarkTheme() {
    return state.theme === "dark";
  }

  function syncThemeToggleUi() {
    const isDark = isDarkTheme();
    els.themeToggleBtn?.classList.toggle("is-dark", isDark);
    els.themeToggleBtn?.setAttribute("aria-label", isDark ? "Trocar para tema white" : "Trocar para tema dark");
    if (els.themeToggleThumbIcon) {
      els.themeToggleThumbIcon.innerHTML = isDark ? ICONS.moon : ICONS.sun;
    }
  }

  function applyTheme(theme = "light", options = {}) {
    const normalizedTheme = theme === "dark" ? "dark" : "light";
    const persist = options.persist !== false;
    const rerender = options.rerender !== false;

    state.theme = normalizedTheme;
    document.body.dataset.theme = normalizedTheme;
    document.documentElement.dataset.theme = normalizedTheme;
    document.documentElement.style.colorScheme = normalizedTheme;
    syncThemeToggleUi();

    if (persist) {
      writeStoredTheme(normalizedTheme);
    }

    if (rerender && !els.appScreen?.classList.contains("hidden")) {
      renderAll();
    }
  }

  function toggleTheme() {
    applyTheme(isDarkTheme() ? "light" : "dark");
  }

  function closeProfileMenu() {
    els.profileMenu?.classList.add("hidden");
    els.profileMenuBtn?.setAttribute("aria-expanded", "false");
  }

  function toggleProfileMenu(forceOpen = null) {
    if (!els.profileMenu) return;
    const nextOpen = forceOpen === null ? els.profileMenu.classList.contains("hidden") : forceOpen;
    els.profileMenu.classList.toggle("hidden", !nextOpen);
    els.profileMenuBtn?.setAttribute("aria-expanded", String(nextOpen));
  }

  function setShellTab(name) {
    const previous = state.activeShellTab;
    const normalized = name === "intel" ? "intel" : "crm";
    state.activeShellTab = normalized;
    els.shellTabCrm?.classList.toggle("active", normalized === "crm");
    els.shellTabIntel?.classList.toggle("active", normalized === "intel");
    els.shellViewCrm?.classList.toggle("shell-view-active", normalized === "crm");
    els.shellViewCrm?.classList.toggle("hidden", normalized !== "crm");
    els.shellViewIntel?.classList.toggle("shell-view-active", normalized === "intel");
    els.shellViewIntel?.classList.toggle("hidden", normalized !== "intel");
    closeProfileMenu();

    if (previous !== normalized && normalized === "crm") {
      requestAnimationFrame(() => {
        syncFunnelSidebarVisibility();
        renderStats();
        renderLeadTable();
        requestAnimationFrame(updateStickyLayout);
        if (state.activeView === "relatorios") {
          ensureChartLibrary()
            .then(() => {
              renderStats();
              renderCharts();
            })
            .catch((error) => console.error(error));
        }
      });
    }
  }

  function syncStickyChrome() {
    document.body.classList.toggle("crm-scrolled", window.scrollY > 8);
  }

  function populateAccountModal() {
    state.accountAvatarDraft = getUserAvatarUrl();
    if (els.accountFullName) {
      els.accountFullName.value = state.profile?.full_name || state.currentUser?.user_metadata?.full_name || "";
    }
    if (els.accountEmail) {
      els.accountEmail.value = state.currentUser?.email || state.profile?.email || "";
    }
    if (els.accountRole) {
      els.accountRole.value = getAccessSummaryLabel();
    }
    if (els.accountAvatarInitials) {
      els.accountAvatarInitials.textContent = getUserInitials();
    }
    if (els.accountAvatarFile) {
      els.accountAvatarFile.value = "";
    }
    renderAccountAvatarPreview(state.accountAvatarDraft);
    setMessage(els.accountMessage, "");
  }

  function openAccountModal() {
    populateAccountModal();
    closeProfileMenu();
    openModalOverlay(els.accountModalOverlay, "#accountFullName");
  }

  function closeAccountModal() {
    closeModalOverlay(els.accountModalOverlay);
    state.accountAvatarDraft = null;
    if (els.accountAvatarFile) {
      els.accountAvatarFile.value = "";
    }
    setMessage(els.accountMessage, "");
  }

  async function handleAccountAvatarChange(event) {
    const file = event.target?.files?.[0];
    if (!file) return;

    if (!/^image\//i.test(String(file.type || ""))) {
      event.target.value = "";
      setMessage(els.accountMessage, "Escolha um arquivo de imagem valido.", true);
      return;
    }

    try {
      state.accountAvatarDraft = await buildAvatarDataUrl(file);
      renderAccountAvatarPreview(state.accountAvatarDraft);
      setMessage(els.accountMessage, "");
    } catch (error) {
      console.error(error);
      setMessage(els.accountMessage, "Nao foi possivel carregar a foto.", true);
    }
  }

  function removeAccountAvatar() {
    state.accountAvatarDraft = "";
    if (els.accountAvatarFile) {
      els.accountAvatarFile.value = "";
    }
    renderAccountAvatarPreview("");
    setMessage(els.accountMessage, "");
  }

  async function saveAccountProfile(event) {
    event.preventDefault();
    if (!state.currentUser) return;

    const fullName = String(els.accountFullName?.value || "").trim();
    if (!fullName) {
      return setMessage(els.accountMessage, "Informe seu nome completo.", true);
    }

    const avatarUrl = String(state.accountAvatarDraft ?? getUserAvatarUrl()).trim();
    const nextUserMetadata = {
      ...(state.currentUser.user_metadata || {}),
      full_name: fullName,
      avatar_url: avatarUrl || null
    };

    const { error: authError } = await state.supabase.auth.updateUser({
      data: nextUserMetadata
    });
    if (authError) {
      return setMessage(els.accountMessage, formatSupabaseError(authError), true);
    }

    const { data: profile, error: profileError } = await state.supabase
      .from("profiles")
      .update({ full_name: fullName })
      .eq("id", state.currentUser.id)
      .select("*")
      .maybeSingle();

    if (profileError) {
      return setMessage(els.accountMessage, formatSupabaseError(profileError), true);
    }

    state.currentUser = {
      ...state.currentUser,
      user_metadata: {
        ...nextUserMetadata
      }
    };
    state.profile = {
      ...(state.profile || {}),
      ...(profile || {}),
      full_name: fullName,
      avatar_url: avatarUrl || ""
    };

    if (Array.isArray(state.profiles) && state.profiles.length) {
      state.profiles = state.profiles.map((item) =>
        item.id === state.currentUser.id ? { ...item, full_name: fullName, avatar_url: avatarUrl || "" } : item
      );
    }

    if (els.userWelcome) {
      els.userWelcome.textContent = getUserDisplayName();
    }
    syncShellUserSummary();
    renderAccountAvatarPreview(avatarUrl);
    setMessage(els.accountMessage, "Conta atualizada com sucesso.");
    renderTeam();
  }

  function applyRoleBasedUi() {
    const adminVisible = canManageAdminAreas();
    const leadsVisible = canViewLeadsList();
    const teamVisible = canViewTeam();
    const canCreate = canCreateLeads();
    const canImport = canImportLeads();
    const canExport = canExportLeads();

    document.querySelectorAll("[data-admin-only='true']").forEach((element) => {
      element.classList.toggle("hidden", !adminVisible);
    });
    document.querySelectorAll('[data-view="leads"]').forEach((element) => {
      element.classList.toggle("hidden", !leadsVisible);
    });
    document.querySelectorAll('[data-view="equipe"]').forEach((element) => {
      element.classList.toggle("hidden", !teamVisible);
    });
    $("view-leads")?.classList.toggle("hidden", !leadsVisible);
    $("view-equipe")?.classList.toggle("hidden", !teamVisible);
    els.addLeadBtn?.classList.toggle("hidden", !canCreate);
    els.mobileAddLeadBtn?.classList.toggle("hidden", !canCreate);
    els.importCsvBtn?.classList.toggle("hidden", !canImport);
    els.exportCsvBtn?.classList.toggle("hidden", !canExport);
    els.deleteSelectedBtn?.classList.toggle("hidden", !canDeleteLeads() || state.selectedLeadIds.size === 0);
    document.querySelectorAll("[data-funnel-create-category]").forEach((element) => {
      element.classList.toggle("hidden", !canManageStages());
    });

    if (els.userAccessLevel) {
      els.userAccessLevel.textContent = getAccessSummaryLabel();
    }

    if (els.teamAccessLegend) {
      els.teamAccessLegend.classList.toggle("hidden", !adminVisible);
    }

    syncShellUserSummary();
  }

  async function forceSignOutWithMessage(message) {
    resetAppState();
    await state.supabase.auth.signOut();
    showScreen("authScreen");
    setMessage(els.authMessage, message, true);
  }

  function showScreen(id) {
    closeAllModals();
    closeProfileMenu();
    [els.authScreen, els.appScreen].forEach((screen) => screen.classList.add("hidden"));
    $(id).classList.remove("hidden");
    els.bootScreen.classList.add("hidden");
  }

  function resetAppState() {
    stopLiveSync();
    state.currentUser = null;
    state.profile = null;
    state.stages = [];
    state.customStageTypes = [];
    state.hiddenPresetStageTypes = [];
    state.leads = [];
    state.profiles = [];
    state.accessRequests = [];
    state.adminRequests = [];
    state.leadSources = [];
    state.socialSources = [];
    state.ownerCanonicalMap = new Map();
    state.socialSourceCanonicalMap = new Map();
    state.history = [];
    state.activeView = "relatorios";
    state.activeShellTab = "crm";
    state.activeFunnelId = null;
    state.activeSubfunnelId = null;
    state.funnelSidebarOpen = false;
    state.historyLoaded = false;
    state.profilesLoaded = false;
    state.adminDataLoaded = false;
    state.permissionRequestContext = null;
    setPasswordRecoveryMode(false);
    setShellTab("crm");
  }

  function stopLiveSync() {
    clearLiveSyncTimers();
    state.liveSyncRefreshInFlight = false;
    state.liveSyncRefreshQueued = false;
    if (state.liveSyncChannel && state.supabase?.removeChannel) {
      try {
        state.supabase.removeChannel(state.liveSyncChannel);
      } catch (_error) {
        // ignore realtime cleanup failures
      }
    }
    state.liveSyncChannel = null;
  }

  function clearLiveSyncTimers() {
    if (state.liveSyncRefreshTimer) {
      clearTimeout(state.liveSyncRefreshTimer);
      state.liveSyncRefreshTimer = null;
    }
    if (state.liveSyncLocalMutationTimer) {
      clearTimeout(state.liveSyncLocalMutationTimer);
      state.liveSyncLocalMutationTimer = null;
    }
    if (state.liveSyncPollTimer) {
      clearInterval(state.liveSyncPollTimer);
      state.liveSyncPollTimer = null;
    }
  }

  function notifyLiveSyncChange(scope = "workspace") {
    if (!state.liveSyncChannel?.send) return;
    void state.liveSyncChannel.send({
      type: "broadcast",
      event: "crm-sync",
      payload: {
        scope,
        at: new Date().toISOString(),
        userId: state.currentUser?.id || null
      }
    }).catch((error) => {
      console.warn("Não foi possível enviar broadcast de sincronização:", error);
    });
  }

  function isLiveSyncRefreshBlocked() {
    return Boolean(
      Date.now() < Number(state.liveSyncLocalMutationUntil || 0)
      || Number(state.liveSyncProtectedMutationCount || 0) > 0
      || document.body.classList.contains("modal-open")
      || state.touchPipelineDrag
      || state.pipelineStageDrag
      || state.pipelineCardPan?.isPanning
      || state.stageConfigDrag
      || state.subfunnelCardDrag
      || state.funnelNavDrag
      || isFunnelContextMenuOpen()
    );
  }

  function markLocalMutationCooldown(delayMs = 1200) {
    const duration = Math.max(300, Number(delayMs) || 1200);
    state.liveSyncLocalMutationUntil = Date.now() + duration;
  }

  function beginProtectedLiveSyncMutation(delayMs = 1200) {
    state.liveSyncProtectedMutationCount = Math.max(0, Number(state.liveSyncProtectedMutationCount || 0)) + 1;
    markLocalMutationCooldown(delayMs);
  }

  function endProtectedLiveSyncMutation(delayMs = 1200) {
    state.liveSyncProtectedMutationCount = Math.max(0, Number(state.liveSyncProtectedMutationCount || 0) - 1);
    markLocalMutationCooldown(delayMs);
  }

  function queueLocalConsistencyRefresh(reason = "local-mutation", delayMs = 1200) {
    markLocalMutationCooldown(delayMs);
    if (state.liveSyncLocalMutationTimer) {
      clearTimeout(state.liveSyncLocalMutationTimer);
      state.liveSyncLocalMutationTimer = null;
    }
    state.liveSyncLocalMutationTimer = window.setTimeout(() => {
      state.liveSyncLocalMutationTimer = null;
      if (!state.currentUser || !isApprovedUser()) return;
      scheduleLiveDataRefresh(reason, { immediate: true });
    }, Math.max(380, Number(delayMs) || 1200) + 80);
  }

  function finalizeLocalMutation(options = {}) {
    if (options.syncSelectedLeadIds !== false) {
      syncSelectedLeadIds();
    }
    if (options.writeCache !== false) {
      writeStoredAppDataCache();
    }
    if (options.render !== false) {
      if (!renderPipelineInteractionFrame()) {
        renderAll();
      }
    }
    if (options.notifyScope) {
      notifyLiveSyncChange(options.notifyScope);
    }
    if (options.refresh !== false) {
      queueLocalConsistencyRefresh(
        options.refreshReason || (options.notifyScope ? `local:${options.notifyScope}` : "local-mutation"),
        options.cooldownMs
      );
    }
  }

  function cloneMutableState(value, fallback = null) {
    if (typeof structuredClone === "function") {
      try {
        return structuredClone(value);
      } catch (_error) {
        // fallback below
      }
    }
    try {
      return JSON.parse(JSON.stringify(value));
    } catch (_error) {
      return fallback;
    }
  }

  function createCriticalMutationSnapshot(options = {}) {
    return {
      leads: options.leads ? cloneMutableState(state.leads || [], []) : null,
      stages: options.stages ? cloneMutableState(state.stages || [], []) : null,
      funnelWorkspace: options.funnelWorkspace
        ? cloneMutableState(state.funnelWorkspace || getDefaultFunnelWorkspace(), getDefaultFunnelWorkspace())
        : null,
      selectedLeadIds: options.selectedLeadIds ? [...(state.selectedLeadIds || [])] : null
    };
  }

  function restoreCriticalMutationSnapshot(snapshot = null, options = {}) {
    if (!snapshot || typeof snapshot !== "object") return;

    if (snapshot.leads) {
      state.leads = snapshot.leads.map((lead) => normalizeLead(lead, {
        ownerMap: state.ownerCanonicalMap,
        socialSourceMap: state.socialSourceCanonicalMap
      }));
    }
    if (snapshot.stages) {
      state.stages = snapshot.stages.map((stage) => normalizeStage(stage));
    }
    if (snapshot.funnelWorkspace) {
      state.funnelWorkspace = cloneMutableState(snapshot.funnelWorkspace, getDefaultFunnelWorkspace()) || getDefaultFunnelWorkspace();
      state.suppressFunnelSync = true;
      writeStoredFunnelWorkspace();
    }
    if (snapshot.selectedLeadIds) {
      state.selectedLeadIds = new Set(snapshot.selectedLeadIds);
    }

    finalizeLocalMutation({
      notifyScope: null,
      refresh: false,
      syncSelectedLeadIds: options.syncSelectedLeadIds !== false,
      writeCache: options.writeCache !== false,
      render: options.render !== false
    });
  }

  async function executeCriticalMutation(options = {}) {
    const snapshot = options.snapshot
      ? createCriticalMutationSnapshot(options.snapshot)
      : null;
    const protectedCooldownMs = Math.max(600, Number(options.protectedCooldownMs || options.cooldownMs || 1600));

    beginProtectedLiveSyncMutation(protectedCooldownMs);

    try {
      if (typeof options.applyOptimistic === "function") {
        await options.applyOptimistic(snapshot);
        finalizeLocalMutation({
          notifyScope: null,
          refresh: false,
          syncSelectedLeadIds: options.optimisticSyncSelectedLeadIds !== false,
          writeCache: options.optimisticWriteCache !== false,
          render: options.optimisticRender !== false
        });
      }

      const result = typeof options.persist === "function"
        ? await options.persist(snapshot)
        : null;
      if (typeof options.afterPersist === "function") {
        await options.afterPersist(result, snapshot);
      }
      return result;
    } catch (error) {
      if (snapshot) {
        restoreCriticalMutationSnapshot(snapshot, options.rollback || {});
      }
      throw error;
    } finally {
      endProtectedLiveSyncMutation(protectedCooldownMs);
    }
  }

  function createFunnelWorkspaceMetaSnapshot() {
    return {
      funnelWorkspace: cloneMutableState(state.funnelWorkspace || getDefaultFunnelWorkspace(), getDefaultFunnelWorkspace()),
      activeFunnelId: state.activeFunnelId || null,
      activeSubfunnelId: state.activeSubfunnelId || null
    };
  }

  function restoreFunnelWorkspaceMetaSnapshot(snapshot = null) {
    if (!snapshot || typeof snapshot !== "object") return;
    state.funnelWorkspace = cloneMutableState(snapshot.funnelWorkspace, getDefaultFunnelWorkspace()) || getDefaultFunnelWorkspace();
    state.activeFunnelId = snapshot.activeFunnelId || null;
    state.activeSubfunnelId = snapshot.activeSubfunnelId || null;
    state.suppressFunnelSync = true;
    writeStoredFunnelWorkspace();
    finalizeLocalMutation({
      notifyScope: null,
      refresh: false,
      syncSelectedLeadIds: false
    });
  }

  async function executeFunnelWorkspaceMetaMutation({ applyLocal, persist, afterPersist } = {}) {
    const snapshot = createFunnelWorkspaceMetaSnapshot();
    const protectedCooldownMs = 1800;
    beginProtectedLiveSyncMutation(protectedCooldownMs);
    try {
      if (typeof applyLocal === "function") {
        await applyLocal(snapshot);
        state.suppressFunnelSync = true;
        writeStoredFunnelWorkspace();
      }
      if (typeof persist === "function") {
        await persist(snapshot);
      }
      if (typeof afterPersist === "function") {
        await afterPersist(snapshot);
      }
      return true;
    } catch (error) {
      restoreFunnelWorkspaceMetaSnapshot(snapshot);
      throw error;
    } finally {
      endProtectedLiveSyncMutation(protectedCooldownMs);
    }
  }

  async function executeLiveDataRefresh(reason = "external-change") {
    await loadAppData({
      includeProfiles: state.profilesLoaded,
      includeAdminData: state.adminDataLoaded,
      runRouteMigration: false,
      runFollowUps: false,
      restoreUiState: false,
      silentRender: true
    });
    renderAll();
  }

  function scheduleLiveDataRefresh(reason = "external-change", options = {}) {
    if (!state.currentUser || !isApprovedUser()) return;
    const immediate = options.immediate === true;
    const delayMs = immediate ? 20 : 180;

    if (state.liveSyncRefreshTimer) {
      clearTimeout(state.liveSyncRefreshTimer);
      state.liveSyncRefreshTimer = null;
    }

    state.liveSyncRefreshTimer = window.setTimeout(async () => {
      state.liveSyncRefreshTimer = null;

      if (!state.currentUser || !isApprovedUser()) return;
      if (isLiveSyncRefreshBlocked()) {
        scheduleLiveDataRefresh(`${reason}:blocked`, { immediate: false });
        return;
      }
      if (state.liveSyncRefreshInFlight) {
        state.liveSyncRefreshQueued = true;
        return;
      }

      state.liveSyncRefreshInFlight = true;
      try {
        await executeLiveDataRefresh(reason);
      } catch (error) {
        console.error(`Erro ao sincronizar dados (${reason}):`, error);
      } finally {
        state.liveSyncRefreshInFlight = false;
        if (state.liveSyncRefreshQueued) {
          state.liveSyncRefreshQueued = false;
          scheduleLiveDataRefresh(`${reason}:queued`, { immediate: true });
        }
      }
    }, delayMs);
  }

  function getLiveSyncRealtimeTables() {
    return [
      "leads",
      "stages",
      "profiles",
      "departments",
      "access_requests",
      "admin_requests",
      "lead_source_catalog",
      "stage_type_catalog",
      "crm_funnels",
      "crm_subfunnels",
      "crm_funnel_department_permissions",
      "crm_stage_subfunnel_assignments",
      "crm_lead_subfunnel_assignments",
      "crm_stage_reminder_configs"
    ];
  }

  function registerLiveSyncTableSubscriptions(channel) {
    getLiveSyncRealtimeTables().forEach((table) => {
      channel.on(
        "postgres_changes",
        { event: "*", schema: "public", table },
        () => {
          scheduleLiveDataRefresh(`realtime:${table}`);
        }
      );
    });
  }

  function registerLiveSyncSharedMetaSubscription(channel) {
    channel.on(
      "postgres_changes",
      { event: "*", schema: "public", table: "change_history" },
      (payload) => {
        const entityType = String(payload?.new?.entity_type || payload?.old?.entity_type || "").trim();
        const entityId = String(payload?.new?.entity_id || payload?.old?.entity_id || "").trim();
        if (![SHARED_FUNNEL_META_ENTITY_TYPE, SHARED_FUNNEL_GROUPS_ENTITY_TYPE, SHARED_FUNNEL_LINKS_ENTITY_TYPE].includes(entityType)) return;
        if (entityId !== SHARED_FUNNEL_META_ENTITY_ID) return;
        scheduleLiveDataRefresh("realtime:shared-funnel-meta", { immediate: true });
      }
    );
  }

  function registerLiveSyncBroadcastSubscription(channel) {
    channel.on(
      "broadcast",
      { event: "crm-sync" },
      () => {
        scheduleLiveDataRefresh("broadcast", { immediate: true });
      }
    );
  }

  function startLiveSyncPolling() {
    state.liveSyncPollTimer = window.setInterval(() => {
      if (document.hidden) return;
      scheduleLiveDataRefresh("poll");
    }, 10000);
  }

  function startLiveSync() {
    if (!state.currentUser || !isApprovedUser() || !state.supabase?.channel) return;

    stopLiveSync();

    const channel = state.supabase.channel("crm-live-sync");
    registerLiveSyncTableSubscriptions(channel);
    registerLiveSyncSharedMetaSubscription(channel);
    registerLiveSyncBroadcastSubscription(channel);
    channel.subscribe((status) => {
      if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
        console.warn("Realtime indisponível. Mantendo sincronização por polling.");
      }
    });
    state.liveSyncChannel = channel;
    startLiveSyncPolling();
  }

  function closeAllModals() {
    [els.modalOverlay, els.stageModalOverlay, els.stageDuplicateModalOverlay, els.stageDeleteModalOverlay, els.notificationModalOverlay, els.historyModalOverlay, els.permissionModalOverlay, els.accountModalOverlay, els.funnelModalOverlay, els.funnelGroupModalOverlay].forEach((overlay) => {
      overlay?.classList.add("hidden");
    });
    document.body.classList.remove("modal-open");
  }

  function openModalOverlay(overlay, focusSelector = null) {
    if (!overlay) return;
    overlay.classList.remove("hidden");
    overlay.scrollTop = 0;
    document.body.classList.add("modal-open");

    const modal = overlay.querySelector(".crm-modal");
    if (modal) {
      modal.scrollTop = 0;
      requestAnimationFrame(() => {
        const focusTarget = focusSelector ? modal.querySelector(focusSelector) : null;
        focusTarget?.focus?.({ preventScroll: true });
      });
    }
  }

  function closeModalOverlay(overlay) {
    if (!overlay) return;
    overlay.classList.add("hidden");
    overlay.scrollTop = 0;
    const hasOpenOverlay = [els.modalOverlay, els.stageModalOverlay, els.stageDuplicateModalOverlay, els.stageDeleteModalOverlay, els.notificationModalOverlay, els.historyModalOverlay, els.permissionModalOverlay, els.accountModalOverlay, els.funnelModalOverlay, els.funnelGroupModalOverlay]
      .some((item) => item && !item.classList.contains("hidden"));
    if (!hasOpenOverlay) document.body.classList.remove("modal-open");
  }

  function brMoney(value) {
    return Number(value || 0).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  }

  function brNumber(value, options = {}) {
    return Number(value || 0).toLocaleString("pt-BR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      ...options
    });
  }

  function formatPlanValue(value) {
    return brMoney(value);
  }

  function parseMonetaryValue(value) {
    if (value === null || value === undefined || value === "") return 0;

    let normalized = String(value)
      .trim()
      .replace(/r\$\s*/gi, "")
      .replace(/\s+/g, "")
      .replace(/[^0-9,.-]/g, "");

    if (!normalized) return 0;

    const lastComma = normalized.lastIndexOf(",");
    const lastDot = normalized.lastIndexOf(".");

    if (lastComma >= 0 && lastDot >= 0) {
      if (lastComma > lastDot) {
        normalized = normalized.replace(/\./g, "").replace(",", ".");
      } else {
        normalized = normalized.replace(/,/g, "");
      }
    } else if (lastComma >= 0) {
      normalized = normalized.replace(/\./g, "").replace(",", ".");
    } else if ((normalized.match(/\./g) || []).length > 1) {
      normalized = normalized.replace(/\./g, "");
    } else if (lastDot >= 0) {
      const decimalDigits = normalized.length - lastDot - 1;
      if (decimalDigits === 3) {
        normalized = normalized.replace(".", "");
      }
    }

    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function formatPlanInputValue(value) {
    if (value === null || value === undefined || value === "") return "";
    return brNumber(parseMonetaryValue(value));
  }

  function normalizePlanNameKey(value) {
    return String(value || "").trim().toLowerCase();
  }

  function isNoPlanName(value) {
    return normalizePlanNameKey(value) === "sem plano";
  }

  function getPlansTotalValue(plans) {
    return cleanPlanList(plans).reduce((sum, item) => sum + Number(item.value || 0), 0);
  }

  function isMissingRelationError(error) {
    const code = String(error?.code || "").toUpperCase();
    const message = String(error?.message || "").toLowerCase();
    return code === "PGRST205" || code === "42P01" || message.includes("does not exist") || message.includes("could not find the table");
  }

  function isDuplicateKeyError(error) {
    const code = String(error?.code || "").toUpperCase();
    const message = String(error?.message || "").toLowerCase();
    return code === "23505" || message.includes("duplicate key") || message.includes("already exists");
  }

  function getStoredCustomStageTypes() {
    return readArrayStorageValue(CUSTOM_STAGE_TYPES_STORAGE_KEY, LEGACY_CUSTOM_STAGE_TYPES_STORAGE_KEY);
  }

  function persistCustomStageTypes(values) {
    const normalized = sortStageTypeNames(values);
    try {
      window.localStorage.setItem(CUSTOM_STAGE_TYPES_STORAGE_KEY, JSON.stringify(normalized));
    } catch (_error) {
      // Ignore storage failures and keep the in-memory list.
    }
    return normalized;
  }

  function getStoredHiddenPresetStageTypes() {
    return readArrayStorageValue(HIDDEN_PRESET_STAGE_TYPES_STORAGE_KEY, LEGACY_HIDDEN_PRESET_STAGE_TYPES_STORAGE_KEY);
  }

  function persistHiddenPresetStageTypes(values) {
    const allowed = new Set(PRESET_STAGE_TYPES.map((item) => item.value));
    const normalized = [...new Set(
      (Array.isArray(values) ? values : [])
        .map((item) => String(item || "").trim())
        .filter((item) => allowed.has(item))
    )];

    try {
      window.localStorage.setItem(HIDDEN_PRESET_STAGE_TYPES_STORAGE_KEY, JSON.stringify(normalized));
    } catch (_error) {
      // Ignore storage failures and keep the in-memory list.
    }

    return normalized;
  }

  function importLegacyStorageNamespaceOnce() {
    try {
      if (window.localStorage.getItem(LEGACY_STORAGE_IMPORT_DONE_KEY) === "true") return;

      if (!window.localStorage.getItem(CUSTOM_STAGE_TYPES_STORAGE_KEY)) {
        const raw = window.localStorage.getItem(LEGACY_CUSTOM_STAGE_TYPES_STORAGE_KEY);
        if (raw) window.localStorage.setItem(CUSTOM_STAGE_TYPES_STORAGE_KEY, raw);
      }

      if (!window.localStorage.getItem(HIDDEN_PRESET_STAGE_TYPES_STORAGE_KEY)) {
        const raw = window.localStorage.getItem(LEGACY_HIDDEN_PRESET_STAGE_TYPES_STORAGE_KEY);
        if (raw) window.localStorage.setItem(HIDDEN_PRESET_STAGE_TYPES_STORAGE_KEY, raw);
      }

      if (!window.localStorage.getItem(SIDEBAR_COLLAPSE_STORAGE_KEY)) {
        const raw = window.localStorage.getItem(LEGACY_SIDEBAR_COLLAPSE_STORAGE_KEY);
        if (raw) window.localStorage.setItem(SIDEBAR_COLLAPSE_STORAGE_KEY, raw);
      }

      if (!window.localStorage.getItem(FUNNEL_WORKSPACE_STORAGE_KEY)) {
        const raw = window.localStorage.getItem(LEGACY_FUNNEL_WORKSPACE_STORAGE_KEY);
        if (raw) window.localStorage.setItem(FUNNEL_WORKSPACE_STORAGE_KEY, raw);
      }

      if (!window.localStorage.getItem(FUNNEL_UI_STATE_STORAGE_KEY)) {
        const raw = window.localStorage.getItem(LEGACY_FUNNEL_UI_STATE_STORAGE_KEY);
        if (raw) window.localStorage.setItem(FUNNEL_UI_STATE_STORAGE_KEY, raw);
      }

      if (!window.localStorage.getItem(OWNER_RECONCILIATION_STORAGE_KEY)) {
        const raw = window.localStorage.getItem(LEGACY_OWNER_RECONCILIATION_STORAGE_KEY);
        if (raw) window.localStorage.setItem(OWNER_RECONCILIATION_STORAGE_KEY, raw);
      }

      if (!window.localStorage.getItem(SOCIAL_SOURCE_STORAGE_KEY)) {
        const raw = window.localStorage.getItem(LEGACY_SOCIAL_SOURCE_STORAGE_KEY);
        if (raw) window.localStorage.setItem(SOCIAL_SOURCE_STORAGE_KEY, raw);
      }

      if (!window.localStorage.getItem(FUNNEL_ROUTE_MIGRATION_STORAGE_KEY)) {
        const raw = window.localStorage.getItem(LEGACY_FUNNEL_ROUTE_MIGRATION_STORAGE_KEY);
        if (raw) window.localStorage.setItem(FUNNEL_ROUTE_MIGRATION_STORAGE_KEY, raw);
      }

      if (!window.localStorage.getItem(STORAGE_CLEANUP_KEY)) {
        const raw = window.localStorage.getItem(LEGACY_STORAGE_CLEANUP_KEY);
        if (raw) window.localStorage.setItem(STORAGE_CLEANUP_KEY, raw);
      }

      window.localStorage.setItem(LEGACY_STORAGE_IMPORT_DONE_KEY, "true");
    } catch (_error) {
      // Ignore storage failures and continue boot.
    }
  }

  function resetDeprecatedFunnelStorageIfNeeded() {
    try {
      const storedVersion = String(window.localStorage.getItem(FUNNEL_STORAGE_SCHEMA_VERSION_KEY) || "").trim();
      if (storedVersion === FUNNEL_STORAGE_SCHEMA_VERSION) return;

      [
        FUNNEL_WORKSPACE_STORAGE_KEY,
        FUNNEL_UI_STATE_STORAGE_KEY,
        APP_DATA_CACHE_STORAGE_KEY,
        DELETED_FUNNEL_WORKSPACE_IDS_STORAGE_KEY,
        FUNNEL_ROUTE_MIGRATION_STORAGE_KEY,
        EXTERNAL_ACTIONS_FUNNEL_MERGE_STORAGE_KEY,
        LEGACY_FUNNEL_WORKSPACE_STORAGE_KEY,
        LEGACY_FUNNEL_UI_STATE_STORAGE_KEY,
        LEGACY_FUNNEL_ROUTE_MIGRATION_STORAGE_KEY
      ].forEach((storageKey) => {
        window.localStorage.removeItem(storageKey);
      });

      window.localStorage.setItem(FUNNEL_STORAGE_SCHEMA_VERSION_KEY, FUNNEL_STORAGE_SCHEMA_VERSION);
    } catch (_error) {
      // Ignore storage failures and continue boot.
    }
  }

  function runPeriodicStorageCleanup() {
    try {
      resetDeprecatedFunnelStorageIfNeeded();
      importLegacyStorageNamespaceOnce();
      const now = Date.now();
      const lastCleanup = Number(window.localStorage.getItem(STORAGE_CLEANUP_KEY) || 0);

      if (!lastCleanup) {
        window.localStorage.setItem(STORAGE_CLEANUP_KEY, String(now));
        return;
      }

      if (now - lastCleanup < STORAGE_CLEANUP_INTERVAL_MS) return;

      STORAGE_CACHE_KEYS.forEach((key) => window.localStorage.removeItem(key));
      window.localStorage.setItem(STORAGE_CLEANUP_KEY, String(now));
    } catch (_error) {
      // Ignore storage failures and continue boot.
    }
  }

  function loadExternalScript(src) {
    return new Promise((resolve, reject) => {
      const normalizedSrc = String(src || "").trim();
      if (!ALLOWED_EXTERNAL_SCRIPT_URLS.has(normalizedSrc)) {
        reject(new Error(`Origem de script nao autorizada: ${normalizedSrc}`));
        return;
      }
      const script = document.createElement("script");
      script.src = normalizedSrc;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.referrerPolicy = "no-referrer";
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Falha ao carregar ${normalizedSrc}`));
      document.head.appendChild(script);
    });
  }

  async function ensureChartLibrary() {
    if (typeof window.Chart !== "undefined") return;
    if (!state.chartLoader) {
      state.chartLoader = loadExternalScript(CHART_JS_URL)
        .catch((error) => {
          state.chartLoader = null;
          throw error;
        });
    }
    await state.chartLoader;
  }

  function formatDate(value) {
    if (!value) return "-";
    const p = String(value).split("-");
    if (p.length !== 3) return value;
    return `${p[2]}/${p[1]}/${p[0]}`;
  }

  function formatMonthLabel(value) {
    if (!value || !/^\d{4}-\d{2}$/.test(String(value))) return value || "Todos os meses";
    return `${String(value).slice(5, 7)}/${String(value).slice(0, 4)}`;
  }

  function formatDayMonthLabel(value) {
    if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(String(value))) return value || "-";
    return `${String(value).slice(8, 10)}/${String(value).slice(5, 7)}`;
  }

  function getLocalIsoDate(date = new Date()) {
    const source = date instanceof Date ? new Date(date.getTime()) : new Date(date);
    if (Number.isNaN(source.getTime())) return "";
    source.setMinutes(source.getMinutes() - source.getTimezoneOffset());
    return source.toISOString().slice(0, 10);
  }

  function diffDaysBetweenDates(startDate, endDate = getLocalIsoDate()) {
    if (!startDate || !endDate) return 0;
    const start = new Date(`${startDate}T00:00:00`);
    const end = new Date(`${endDate}T00:00:00`);
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 0;
    return Math.floor((end.getTime() - start.getTime()) / 86400000);
  }

  function normalizeDateInput(value) {
    const raw = String(value || "").trim();
    if (!raw) return "";

    if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;

    const slashIso = raw.match(/^(\d{4})[\/](\d{2})[\/](\d{2})$/);
    if (slashIso) return `${slashIso[1]}-${slashIso[2]}-${slashIso[3]}`;

    const br = raw.match(/^(\d{2})[\/-](\d{2})[\/-](\d{4})$/);
    if (br) return `${br[3]}-${br[2]}-${br[1]}`;

    const parsed = new Date(raw);
    if (!Number.isNaN(parsed.getTime())) {
      const year = parsed.getFullYear();
      const month = String(parsed.getMonth() + 1).padStart(2, "0");
      const day = String(parsed.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    return "";
  }

  function normalizeLeadReminder(reminder = null) {
    if (!reminder || typeof reminder !== "object") return null;
    const type = String(reminder.type || "").trim();
    const message = normalizeSpacing(reminder.message || reminder.label || "");

    if (type === "date") {
      const dueDate = normalizeDateInput(reminder.due_date || reminder.dueDate || "");
      if (!dueDate) return null;
      return {
        type: "date",
        due_date: dueDate,
        message
      };
    }

    if (type === "stage_days") {
      const stageId = String(reminder.stage_id || reminder.stageId || "").trim();
      const days = Math.max(1, Number(reminder.days || 0) || 0);
      const startDate = normalizeDateInput(reminder.start_date || reminder.startDate || "") || getLocalIsoDate();
      if (!stageId || !days) return null;
      return {
        type: "stage_days",
        stage_id: stageId,
        days,
        start_date: startDate,
        message
      };
    }

    return null;
  }

  function normalizeStageReminderConfig(config = null) {
    if (!config || typeof config !== "object") return null;
    const days = Math.max(1, Number(config.days || 0) || 0);
    const message = normalizeSpacing(config.message || config.label || "");
    if (!days) return null;
    return {
      days,
      message
    };
  }

  function normalizeLeadStageTracking(tracking = null) {
    const normalized = {};
    if (!tracking || typeof tracking !== "object") return normalized;
    Object.entries(tracking).forEach(([stageId, rawDate]) => {
      const nextStageId = String(stageId || "").trim();
      const nextDate = normalizeDateInput(rawDate || "");
      if (!nextStageId || !nextDate) return;
      normalized[nextStageId] = nextDate;
    });
    return normalized;
  }

  function cleanObservationList(observations) {
    return (Array.isArray(observations) ? observations : [])
      .map((item) => ({
        date: normalizeDateInput(item?.date || ""),
        text: String(item?.text || "").trim()
      }))
      .filter((item) => item.text);
  }

  function markPersistedObservations(observations) {
    return cleanObservationList(observations).map((item) => ({
      ...item,
      _persisted: true,
      _originalDate: item.date || "",
      _originalText: item.text || ""
    }));
  }

  function buildObservationRequestPayload(lead, observation) {
    return {
      lead_id: lead?.id || null,
      lead_name: lead?.name || "",
      observation_date: observation?._originalDate || observation?.date || "",
      observation_text: observation?._originalText || observation?.text || ""
    };
  }

  function isSameObservationItem(left, right) {
    return normalizeDateInput(left?.date || "") === normalizeDateInput(right?.date || "")
      && String(left?.text || "").trim() === String(right?.text || "").trim();
  }

  function cleanPlanList(plans) {
    return (Array.isArray(plans) ? plans : [])
      .map((item) => {
        const name = String(item?.name || "").trim();
        const value = parseMonetaryValue(item?.value);
        const contractNumber = String(item?.contract_number || item?.contractNumber || "").trim();
        const closedAt = normalizeDateInput(item?.closed_at || item?.closedAt || "") || "";

        return {
          name,
          value: Number.isFinite(value) ? value : 0,
          contract_number: contractNumber,
          closed_at: closedAt
        };
      })
      .filter((item) => item.name);
  }

  function isAutoClosingPlanDraft(plan = {}) {
    return Boolean(plan?._autoCreatedClosing);
  }

  function hasPlanClosingMetadata(plan = {}) {
    return Boolean(
      String(plan?.contract_number || plan?.contractNumber || "").trim() ||
      normalizeDateInput(plan?.closed_at || plan?.closedAt || "")
    );
  }

  function planSupportsClosingDetails(plan = {}) {
    if (isNoPlanName(plan?.name)) return false;
    if (isClosedStageId(els.stage?.value)) return true;
    return Number(parseMonetaryValue(plan?.value)) > 0 || hasPlanClosingMetadata(plan);
  }

  function isPlanDraftMeaningful(plan = {}) {
    if (isNoPlanName(plan?.name)) return false;
    if (Number(parseMonetaryValue(plan?.value)) > 0) return true;
    if (hasPlanClosingMetadata(plan)) return true;
    return !isAutoClosingPlanDraft(plan) && Boolean(String(plan?.name || "").trim());
  }

  function hasMeaningfulPlanDrafts() {
    return state.modalPlans.some((plan) => isPlanDraftMeaningful(plan));
  }

  function buildAutoClosingPlanDraft(index = 0) {
    return {
      name: getDefaultPlanName(index),
      value: "",
      contract_number: "",
      closed_at: "",
      _autoCreatedClosing: true
    };
  }

  function ensureClosingPlanDraft() {
    if (hasMeaningfulPlanDrafts()) return false;
    state.modalPlans = [buildAutoClosingPlanDraft(0)];
    return true;
  }

  function clearUnusedAutoClosingPlanDrafts() {
    if (!state.modalPlans.length) return false;

    const hasPersistableDraft = state.modalPlans.some((plan) => !isAutoClosingPlanDraft(plan) || isPlanDraftMeaningful(plan));
    if (hasPersistableDraft) return false;

    state.modalPlans = [];
    return true;
  }

  function syncLeadPlanSection() {
    const isClosingStage = isClosedStageId(els.stage?.value);
    let changed = false;

    if (isClosingStage) {
      changed = ensureClosingPlanDraft();
    } else {
      changed = clearUnusedAutoClosingPlanDrafts();
    }

    const shouldShowPlans = Boolean(els.leadId?.value) || isClosingStage || hasMeaningfulPlanDrafts();
    els.planGroup?.classList.toggle("hidden", !shouldShowPlans);
    els.contractNumberGroup?.classList.toggle("hidden", !isClosingStage);

    if (changed || state.modalPlans.length) {
      renderPlanItems();
    }
  }

  function getDefaultPlanName(index = 0) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const safeIndex = Math.max(0, Number(index) || 0);
    const letter = alphabet[safeIndex % alphabet.length];
    const suffix = Math.floor(safeIndex / alphabet.length);
    return `Plano ${letter}${suffix ? suffix + 1 : ""}`;
  }

  function getPlanCatalog() {
    const catalog = new Map();

    state.leads.forEach((lead) => {
      getLeadPlans(lead).forEach((item) => {
        const name = String(item?.name || "").trim();
        if (!name || catalog.has(name)) return;
        catalog.set(name, Number(item?.value || 0));
      });
    });

    return [...catalog.entries()]
      .map(([name, value]) => ({ name, value: Number.isFinite(Number(value)) ? Number(value) : 0 }))
      .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }

  function findKnownPlan(name) {
    const normalized = String(name || "").trim().toLowerCase();
    if (!normalized) return null;
    return getPlanCatalogWithDefault().find((item) => item.name.trim().toLowerCase() === normalized) || null;
  }

  function syncPlanDraftWithCatalog(index) {
    const draft = state.modalPlans[index];
    if (!draft) return false;

    const knownPlan = findKnownPlan(draft.name);
    if (!knownPlan) return false;

    draft.name = knownPlan.name;
    draft.value = knownPlan.value;
    return true;
  }

  function renderPlanSuggestions() {
    if (!els.planSuggestions) return;
    const catalog = getPlanCatalogWithDefault();
    els.planSuggestions.innerHTML = catalog
      .map((item) => `<option value="${escapeHtml(item.name)}"></option>`)
      .join("");
  }


  function getLeadMeta(rawNotes, leadValue = 0) {
    const raw = String(rawNotes || "");
    const prefix = "__CRM_META__";

    if (!raw.startsWith(prefix)) {
      const text = raw.trim();
      return {
        plan: "",
        plans: [],
        legacyText: text,
        observations: text ? [{ date: "", text }] : [],
        contract_number: "",
        referral_name: "",
        referral_sector: "",
        reminder: null,
        stage_tracking: {}
      };
    }

    try {
      const parsed = JSON.parse(raw.slice(prefix.length));
      const legacyText = String(parsed?.legacyText || "").trim();
      const observations = cleanObservationList(parsed?.observations || []);
      const plans = cleanPlanList(parsed?.plans || []);
      const legacyPlan = String(parsed?.plan || "").trim();
      const contractNumber = String(parsed?.contract_number || parsed?.contractNumber || "").trim();
      const referralName = String(parsed?.referral_name || "").trim();
      const referralSector = String(parsed?.referral_sector || "").trim();
      const reminder = normalizeLeadReminder(parsed?.reminder || null);
      const stageTracking = normalizeLeadStageTracking(parsed?.stage_tracking || parsed?.stageTracking || {});
      if (!plans.length && legacyPlan) {
        plans.push({ name: legacyPlan, value: Number.isFinite(Number(leadValue)) ? Number(leadValue) : 0 });
      } else if (!plans.length && Number(leadValue || 0) > 0) {
        plans.push({ name: getDefaultPlanName(0), value: Number(leadValue || 0) });
      }
      if (contractNumber && plans.length && !plans.some((item) => String(item?.contract_number || "").trim())) {
        const targetPlan = plans.find((item) => !isNoPlanName(item?.name)) || plans[0];
        if (targetPlan) targetPlan.contract_number = contractNumber;
      }
      if (!observations.length && legacyText) observations.push({ date: "", text: legacyText });
      return {
        plan: legacyPlan || (plans[0]?.name || ""),
        plans,
        legacyText,
        observations,
        contract_number: contractNumber,
        referral_name: referralName,
        referral_sector: referralSector,
        reminder,
        stage_tracking: stageTracking
      };
    } catch (_error) {
      const text = raw.trim();
      return {
        plan: "",
        plans: [],
        legacyText: text,
        observations: text ? [{ date: "", text }] : [],
        contract_number: "",
        referral_name: "",
        referral_sector: "",
        reminder: null,
        stage_tracking: {}
      };
    }
  }

  function serializeLeadMeta(meta = {}) {
    const legacyText = String(meta.legacyText || "").trim();
    const plans = cleanPlanList(meta.plans || []);
    const observations = cleanObservationList(meta.observations || []);
    const plan = plans[0]?.name || String(meta.plan || "").trim();
    const contractNumber = String(meta.contract_number || meta.contractNumber || "").trim();
    const referralName = String(meta.referral_name || "").trim();
    const referralSector = String(meta.referral_sector || "").trim();
    const reminder = normalizeLeadReminder(meta.reminder || null);
    const stageTracking = normalizeLeadStageTracking(meta.stage_tracking || meta.stageTracking || {});

    if (!plan && !plans.length && !observations.length && !contractNumber && !referralName && !referralSector && !reminder && !Object.keys(stageTracking).length) return legacyText;

    return `__CRM_META__${JSON.stringify({ plan, plans, legacyText, observations, contract_number: contractNumber, referral_name: referralName, referral_sector: referralSector, reminder, stage_tracking: stageTracking })}`;
  }

  function normalizeLead(lead, options = {}) {
    const meta = getLeadMeta(lead?.notes || "", lead?.value || 0);
    const computedValue = getPlansTotalValue(meta.plans || []);
    const ownerMap = options.ownerMap || state.ownerCanonicalMap;
    const socialSourceMap = options.socialSourceMap || state.socialSourceCanonicalMap;
    const normalizedSocialSource = normalizeSpacing(lead?.social_source || "") || DEFAULT_SOCIAL_SOURCE;
    return {
      ...lead,
      owner_raw: lead?.owner ?? null,
      owner: getCanonicalMappedValue(lead?.owner || "", ownerMap, "owner"),
      social_source: getCanonicalMappedValue(normalizedSocialSource, socialSourceMap, "social_source"),
      value: computedValue || Number(lead?.value || 0) || 0,
      start_date: normalizeDateInput(lead?.start_date || "") || String(lead?.start_date || "").trim(),
      _meta: meta
    };
  }

  function sanitizeHexColor(value, fallback = DEFAULT_STAGE_COLOR) {
    const raw = String(value || "").trim().toUpperCase();
    if (/^#[0-9A-F]{6}$/.test(raw)) return raw;

    const short = raw.match(/^#([0-9A-F]{3})$/);
    if (short) {
      return `#${short[1].split("").map((char) => char + char).join("")}`;
    }

    return fallback;
  }

  function normalizeStage(stage) {
    const normalizedName = normalizeStageName(stage?.name || "");
    return {
      ...stage,
      name: normalizedName || String(stage?.name || "").trim(),
      color: sanitizeHexColor(stage?.color)
    };
  }

  function normalizeStageName(value) {
    return String(value || "")
      .replace(/\s*\.+\s*$/, "")
      .trim();
  }

  async function ensureStageNamesWithoutTrailingPeriods(options = {}) {
    if (state.stageNameCleanupInFlight || !state.currentUser || !state.supabase) return;

    const updates = state.stages
      .map((stage) => {
        const currentName = String(stage?.name || "").trim();
        const normalizedName = normalizeStageName(currentName);
        if (!currentName || !normalizedName || normalizedName === currentName) return null;
        return {
          id: stage.id,
          before: currentName,
          after: normalizedName
        };
      })
      .filter(Boolean);

    if (!updates.length) return;

    state.stageNameCleanupInFlight = true;
    try {
      for (const item of updates) {
        const { error } = await state.supabase
          .from("stages")
          .update({ name: item.after })
          .eq("id", item.id);
        if (error) throw error;
      }

      applyStageNameUpdatesLocally(updates);
      writeStoredAppDataCache();
      if (!options.silent) {
        renderAll();
      }
    } catch (error) {
      console.error("Erro ao limpar pontos finais dos nomes de pipeline:", error);
    } finally {
      state.stageNameCleanupInFlight = false;
    }
  }

  function normalizeLeadSources(rows = []) {
    const map = new Map();

    DEFAULT_LEAD_SOURCES.forEach((name) => {
      const normalizedName = String(name || "").trim();
      if (!normalizedName) return;
      map.set(normalizedName.toLowerCase(), {
        id: normalizedName.toLowerCase(),
        name: normalizedName,
        is_builtin: true
      });
    });

    rows.forEach((item) => {
      const name = String(item?.name || "").trim();
      if (!name) return;
      map.set(name.toLowerCase(), {
        ...item,
        name,
        is_builtin: isDefaultLeadSourceName(name)
      });
    });

    return [...map.values()].sort((a, b) => String(a.name || "").localeCompare(String(b.name || ""), "pt-BR"));
  }

  function getLeadSourceNames() {
    return normalizeLeadSources(state.leadSources).map((item) => item.name);
  }

  function getLeadSourceItems() {
    return normalizeLeadSources(state.leadSources);
  }

  function getSocialSourceItems() {
    return normalizeSocialSources([
      ...(state.socialSources || []),
      ...state.leads.map((lead) => lead?.social_source || "")
    ]);
  }

  function normalizeSocialSources(rows = []) {
    const map = new Map();

    (Array.isArray(rows) ? rows : []).forEach((item) => {
      const rawName = typeof item === "string" ? item : item?.name;
      const name = getCanonicalDisplayLabel(rawName || "", "social_source");
      if (!name) return;
      map.set(name.toLowerCase(), {
        id: name.toLowerCase(),
        name
      });
    });

    return [...map.values()].sort((a, b) => String(a.name || "").localeCompare(String(b.name || ""), "pt-BR"));
  }

  function readStoredSocialSources() {
    return normalizeSocialSources(readArrayStorageValue(SOCIAL_SOURCE_STORAGE_KEY, LEGACY_SOCIAL_SOURCE_STORAGE_KEY));
  }

  function writeStoredSocialSources() {
    try {
      window.localStorage.setItem(SOCIAL_SOURCE_STORAGE_KEY, JSON.stringify(normalizeSocialSources(state.socialSources)));
    } catch (_error) {
      // ignore local storage failures
    }
  }

  function isSignupEmailAllowed(email) {
    if (!state.security.allowedSignupEmailDomains.length) return true;

    const normalizedEmail = String(email || "").trim().toLowerCase();
    const domain = normalizedEmail.split("@")[1] || "";
    return state.security.allowedSignupEmailDomains.includes(domain);
  }

  function getLeadPlans(lead) {
    return cleanPlanList(lead?._meta?.plans || []);
  }

  function getLeadPlan(lead) {
    const plans = getLeadPlans(lead);
    if (plans.length) return plans.map((item) => item.name).join(", ");
    return String(lead?._meta?.plan || "").trim();
  }

  function getLeadPlanDisplayText(lead) {
    const plans = getLeadPlans(lead)
      .map((item) => String(item?.name || "").trim())
      .filter((name) => name && !isNoPlanName(name));

    if (plans.length) return plans.join(", ");

    const rawPlan = String(lead?._meta?.plan || "").trim();
    if (rawPlan && !isNoPlanName(rawPlan)) return rawPlan;

    return "Não fechou ainda";
  }

  function getLeadContractNumbers(lead) {
    const contracts = getLeadPlans(lead)
      .map((item) => String(item?.contract_number || "").trim())
      .filter(Boolean)
      .join(", ");
    if (contracts) return contracts;
    return String(lead?._meta?.contract_number || "").trim();
  }

  function getLeadPrimaryContractNumber(lead) {
    return String(getLeadContractNumbers(lead) || "").split(",").map((item) => item.trim()).find(Boolean) || "";
  }

  function getLeadObservations(lead) {
    return cleanObservationList(lead?._meta?.observations || []);
  }

  function getLeadReferralName(lead) {
    return getCanonicalMappedValue(String(lead?._meta?.referral_name || "").trim(), state.indicatorCanonicalMap, "indicator_name");
  }

  function getLeadReferralSector(lead) {
    return getCanonicalMappedValue(String(lead?._meta?.referral_sector || "").trim(), state.indicatorSectorCanonicalMap, "indicator_sector");
  }

  function getLeadLatestObservation(lead) {
    const observations = getLeadObservations(lead);
    return observations[observations.length - 1] || null;
  }

  function getLeadReminder(lead) {
    return normalizeLeadReminder(lead?._meta?.reminder || null);
  }

  function getLeadStageTracking(lead) {
    return normalizeLeadStageTracking(lead?._meta?.stage_tracking || lead?._meta?.stageTracking || {});
  }

  function getLeadStageEntryDate(lead, stageId = lead?.stage_id) {
    const normalizedStageId = String(stageId || "").trim();
    const tracking = getLeadStageTracking(lead);
    if (normalizedStageId && tracking[normalizedStageId]) return tracking[normalizedStageId];
    return normalizeDateInput(lead?.start_date || "") || getLocalIsoDate();
  }

  function getStageReminderConfig(stageId) {
    return normalizeStageReminderConfig(state.funnelWorkspace?.stageReminderConfigs?.[String(stageId || "").trim()] || null);
  }

  function isLeadOwnedByCurrentUser(lead) {
    const currentOwnerKey = normalizeComparisonText(getCurrentLeadOwnerName());
    const leadOwnerKey = normalizeComparisonText(lead?.owner || lead?.owner_raw || "");
    return Boolean(currentOwnerKey && leadOwnerKey && currentOwnerKey === leadOwnerKey);
  }

  function getLeadReminderNotification(lead) {
    const reminder = getLeadReminder(lead);
    if (!lead || !reminder || !isLeadOwnedByCurrentUser(lead)) return null;

    if (reminder.type === "date") {
      if (reminder.due_date > getLocalIsoDate()) return null;
      return {
        leadId: lead.id,
        type: "date",
        dueLabel: `Venceu em ${formatDate(reminder.due_date)}`,
        message: reminder.message || "Lembrete do lead",
        reminder
      };
    }

    if (reminder.type === "stage_days") {
      if (String(lead.stage_id || "") !== String(reminder.stage_id || "")) return null;
      const elapsedDays = diffDaysBetweenDates(reminder.start_date, getLocalIsoDate());
      if (elapsedDays < Number(reminder.days || 0)) return null;
      return {
        leadId: lead.id,
        type: "stage_days",
        dueLabel: `${elapsedDays} dia(s) na pipeline`,
        message: reminder.message || `Acompanhar lead após ${reminder.days} dia(s)`,
        reminder
      };
    }

    return null;
  }

  function getPipelineReminderNotification(lead) {
    if (!lead || !isLeadOwnedByCurrentUser(lead)) return null;
    const stageId = String(lead.stage_id || "").trim();
    const config = getStageReminderConfig(stageId);
    if (!stageId || !config) return null;
    const elapsedDays = diffDaysBetweenDates(getLeadStageEntryDate(lead, stageId), getLocalIsoDate());
    if (elapsedDays < Number(config.days || 0)) return null;
    return {
      leadId: lead.id,
      type: "pipeline_days",
      dueLabel: `${elapsedDays} dia(s) na pipeline`,
      message: config.message || `Lead parado há ${elapsedDays} dia(s) nesta pipeline`,
      reminder: config,
      stageReminder: true
    };
  }

  function getActiveLeadNotifications() {
    return state.leads
      .map((lead) => {
        const notification = getLeadReminderNotification(lead) || getPipelineReminderNotification(lead);
        if (!notification) return null;
        const stage = state.stages.find((item) => item.id === lead.stage_id) || null;
        const subfunnelId = getLeadSubfunnelId(lead);
        const subfunnel = getSubfunnelById(subfunnelId);
        const funnel = getFunnelById(subfunnel?.funnel_id);
        return {
          ...notification,
          lead,
          stage,
          subfunnel,
          funnel,
          dismissKey: buildNotificationDismissKey({
            ...notification,
            lead,
            stage
          })
        };
      })
      .filter((item) => item && !isNotificationDismissed(item))
      .filter(Boolean)
      .sort((a, b) => String(a.lead?.name || "").localeCompare(String(b.lead?.name || ""), "pt-BR"));
  }

  function getLeadSearchText(lead) {
    return [
      lead?.name,
      lead?.contact,
      lead?.owner,
      lead?.traffic_type,
      lead?.social_source,
      getLeadReferralName(lead),
      getLeadReferralSector(lead),
      lead?._meta?.legacyText,
      getLeadPlan(lead),
      getLeadContractNumbers(lead),
      ...getLeadPlans(lead).map((item) => `${item.name} ${item.value} ${item.contract_number || ""}`),
      ...getLeadObservations(lead).map((item) => item.text)
    ].join(" ").toLowerCase();
  }

  function toggleReferralNameField({ clearWhenHidden = false } = {}) {
    const shouldShow = isReferralLeadSource(els.trafficType?.value);
    els.referralNameGroup?.classList.toggle("hidden", !shouldShow);
    els.referralSectorGroup?.classList.toggle("hidden", !shouldShow);

    if (!shouldShow && clearWhenHidden && els.referralName) {
      els.referralName.value = "";
      if (els.referralSector) els.referralSector.value = "";
    }
  }

  function toggleLeadReminderFields({ clearWhenHidden = false } = {}) {
    const enabled = Boolean(els.leadNotificationEnabled?.checked);
    els.leadNotificationFields?.classList.toggle("hidden", !enabled);

    if (!enabled && clearWhenHidden) {
      if (els.leadNotificationDate) els.leadNotificationDate.value = "";
      if (els.leadNotificationMessage) els.leadNotificationMessage.value = "";
    }
  }

  function toggleStageReminderFields({ clearWhenHidden = false } = {}) {
    const enabled = Boolean(els.stageNotificationEnabled?.checked);
    els.stageNotificationFields?.classList.toggle("hidden", !enabled);

    if (!enabled && clearWhenHidden) {
      if (els.stageNotificationDays) els.stageNotificationDays.value = "";
      if (els.stageNotificationMessage) els.stageNotificationMessage.value = "";
    }
  }

  function buildReminderSummaryMarkup(title, lines = []) {
    const safeLines = (Array.isArray(lines) ? lines : []).filter(Boolean);
    if (!safeLines.length) return "";

    return `
      <div class="notification-summary-card">
        <strong>${escapeHtml(title)}</strong>
        ${safeLines.map((line) => `<span>${escapeHtml(line)}</span>`).join("")}
      </div>
    `;
  }

  function renderLeadReminderSummary(lead = null) {
    if (!els.leadReminderSummary) return;
    const reminder = getLeadReminder(lead);
    if (!lead || !reminder) {
      els.leadReminderSummary.classList.add("hidden");
      els.leadReminderSummary.innerHTML = "";
      return;
    }

    const lines = [];
    if (reminder.type === "date" && reminder.due_date) {
      lines.push(`Data: ${formatDate(reminder.due_date)}`);
    } else if (reminder.type === "stage_days" && reminder.days) {
      lines.push(`Pipeline atual: ${reminder.days} dia${reminder.days > 1 ? "s" : ""}`);
    }
    if (reminder.message) lines.push(reminder.message);

    els.leadReminderSummary.innerHTML = buildReminderSummaryMarkup("Notificação salva", lines);
    els.leadReminderSummary.classList.remove("hidden");
  }

  function renderStageReminderSummary(stage = null) {
    if (!els.stageReminderSummary) return;
    const reminder = getStageReminderConfig(stage?.id);
    if (!stage || !reminder) {
      els.stageReminderSummary.classList.add("hidden");
      els.stageReminderSummary.innerHTML = "";
      return;
    }

    const lines = [`Avisar após ${reminder.days} dia${reminder.days > 1 ? "s" : ""} nesta pipeline`];
    if (reminder.message) lines.push(reminder.message);

    els.stageReminderSummary.innerHTML = buildReminderSummaryMarkup("Notificação salva", lines);
    els.stageReminderSummary.classList.remove("hidden");
  }

  function leadHasStageNotification(lead = null) {
    return Boolean(lead?.stage_id && getStageReminderConfig(lead.stage_id));
  }

  function toggleNotificationDeleteButton(visible, label = "Excluir notificação") {
    if (!els.deleteNotificationBtn) return;
    els.deleteNotificationBtn.classList.add("hidden");
  }

  function applyLeadReminderLocally(leadId, nextReminder) {
    updateLeadsLocallyByIds([leadId], (lead) => {
      const meta = getLeadMeta(lead.notes || "", lead.value || 0);
      const nextMeta = {
        ...meta,
        reminder: nextReminder || null
      };
      return {
        ...lead,
        notes: serializeLeadMeta(nextMeta)
      };
    });
  }

  function applyStageReminderConfigLocally(stageId, nextReminder) {
    const normalizedStageId = String(stageId || "").trim();
    if (!normalizedStageId || !state.funnelWorkspace) return;

    state.funnelWorkspace.stageReminderConfigs = {
      ...(state.funnelWorkspace.stageReminderConfigs || {})
    };

    if (nextReminder) {
      state.funnelWorkspace.stageReminderConfigs[normalizedStageId] = normalizeStageReminderConfig(nextReminder);
    } else {
      delete state.funnelWorkspace.stageReminderConfigs[normalizedStageId];
    }

    state.suppressFunnelSync = true;
    writeStoredFunnelWorkspace();
  }

  function getLeadMonthKey(lead) {
    const leadDate = getLeadDateKey(lead);
    return leadDate ? leadDate.slice(0, 7) : "";
  }

  function getLeadDateKey(lead) {
    const fromStart = normalizeDateInput(lead?.start_date || "");
    if (fromStart) return fromStart;

    return normalizeDateInput(String(lead?.created_at || "").slice(0, 10));
  }

  function getReportYear(leads) {
    const [selectedMonth] = getFilterValues("month", els.monthFilter);
    if (/^\d{4}-\d{2}$/.test(selectedMonth)) return selectedMonth.slice(0, 4);

    const years = [...new Set(leads.map((lead) => getLeadDateKey(lead).slice(0, 4)).filter(Boolean))].sort();
    return years[years.length - 1] || String(new Date().getFullYear());
  }

  function buildYearDateKeys(year) {
    const yearNumber = Number(year);
    if (!Number.isInteger(yearNumber)) return [];

    const dates = [];
    const cursor = new Date(Date.UTC(yearNumber, 0, 1));

    while (cursor.getUTCFullYear() === yearNumber) {
      dates.push(cursor.toISOString().slice(0, 10));
      cursor.setUTCDate(cursor.getUTCDate() + 1);
    }

    return dates;
  }

  function hasLeadValue(lead) {
    return Number(lead?.value || 0) > 0;
  }

  function getClosedStageIds() {
    return state.stages.filter((stage) => stage.stage_type === "fechado").map((stage) => stage.id);
  }

  function isClosedStageId(stageId) {
    return getClosedStageIds().includes(stageId);
  }

  function getClosedLeads(leads) {
    const cache = getRenderComputationCache();
    if (Array.isArray(leads) && cache.closedLeads.has(leads)) {
      return cache.closedLeads.get(leads);
    }
    const closedIds = getClosedStageIds();
    const result = (Array.isArray(leads) ? leads : []).filter((lead) => closedIds.includes(lead.stage_id));
    if (Array.isArray(leads)) {
      cache.closedLeads.set(leads, result);
    }
    return result;
  }

  function getQualifiedClosedLeads(leads) {
    const cache = getRenderComputationCache();
    if (Array.isArray(leads) && cache.qualifiedClosedLeads.has(leads)) {
      return cache.qualifiedClosedLeads.get(leads);
    }
    const result = getClosedLeads(leads).filter((lead) => hasLeadValue(lead));
    if (Array.isArray(leads)) {
      cache.qualifiedClosedLeads.set(leads, result);
    }
    return result;
  }

  function syncSelectedLeadIds() {
    const validIds = new Set(state.leads.map((lead) => lead.id));
    state.selectedLeadIds = new Set(
      [...state.selectedLeadIds].filter((id) => validIds.has(id))
    );
  }

  function sortStagesByStablePosition(items = []) {
    return [...(Array.isArray(items) ? items : [])].sort((a, b) => {
      const positionA = Number(a?.position);
      const positionB = Number(b?.position);
      const safePositionA = Number.isFinite(positionA) ? positionA : Number.MAX_SAFE_INTEGER;
      const safePositionB = Number.isFinite(positionB) ? positionB : Number.MAX_SAFE_INTEGER;
      if (safePositionA !== safePositionB) return safePositionA - safePositionB;
      return String(a?.id || "").localeCompare(String(b?.id || ""));
    });
  }

  function sortStagesCollection(items = []) {
    return sortStagesByStablePosition(items);
  }

  function reorderListByIndex(items = [], currentIndex, targetIndex) {
    const normalizedItems = Array.isArray(items) ? [...items] : [];
    const boundedCurrentIndex = Math.max(0, Math.min(Number(currentIndex), normalizedItems.length - 1));
    const boundedTargetIndex = Math.max(0, Math.min(Number(targetIndex), normalizedItems.length - 1));
    if (!normalizedItems.length || !Number.isFinite(boundedCurrentIndex) || !Number.isFinite(boundedTargetIndex)) {
      return normalizedItems;
    }
    if (boundedCurrentIndex === boundedTargetIndex) return normalizedItems;

    const [movedItem] = normalizedItems.splice(boundedCurrentIndex, 1);
    if (typeof movedItem === "undefined") return normalizedItems;
    normalizedItems.splice(boundedTargetIndex, 0, movedItem);
    return normalizedItems;
  }

  function reorderSubfunnelsInFunnelLocally(funnelId, subfunnelId, targetIndex) {
    const funnel = getFunnelById(funnelId);
    if (!funnel) return false;

    const currentSubfunnels = [...(funnel.subfunnels || [])];
    const currentIndex = currentSubfunnels.findIndex((item) => item.id === subfunnelId);
    if (currentIndex === -1) return false;

    const normalizedTargetIndex = Math.max(0, Math.min(Number(targetIndex), currentSubfunnels.length - 1));
    if (!Number.isFinite(normalizedTargetIndex) || normalizedTargetIndex === currentIndex) return false;

    funnel.subfunnels = reorderListByIndex(currentSubfunnels, currentIndex, normalizedTargetIndex);
    state.suppressFunnelSync = true;
    writeStoredFunnelWorkspace();
    return true;
  }

  function upsertFunnelGroupLocally(group) {
    if (!group?.id || !state.funnelWorkspace) return null;
    const currentGroups = [...(state.funnelWorkspace.groups || [])];
    const currentIndex = currentGroups.findIndex((item) => String(item?.id || "").trim() === String(group.id || "").trim());
    if (currentIndex === -1) {
      state.funnelWorkspace.groups = [...currentGroups, group];
    } else {
      state.funnelWorkspace.groups = currentGroups.map((item, index) => (index === currentIndex ? group : item));
    }
    return group;
  }

  function updateFunnelGroupLocally(groupId, updater) {
    const normalizedGroupId = String(groupId || "").trim();
    if (!normalizedGroupId || !state.funnelWorkspace || typeof updater !== "function") return null;

    let updatedGroup = null;
    state.funnelWorkspace.groups = (state.funnelWorkspace.groups || []).map((group) => {
      if (String(group?.id || "").trim() !== normalizedGroupId) return group;
      updatedGroup = updater(group) || group;
      return updatedGroup;
    });
    return updatedGroup;
  }

  function upsertFunnelLocally(funnel) {
    if (!funnel?.id || !state.funnelWorkspace) return null;
    const currentFunnels = [...(state.funnelWorkspace.funnels || [])];
    const currentIndex = currentFunnels.findIndex((item) => String(item?.id || "").trim() === String(funnel.id || "").trim());
    if (currentIndex === -1) {
      state.funnelWorkspace.funnels = [...currentFunnels, funnel];
    } else {
      state.funnelWorkspace.funnels = currentFunnels.map((item, index) => (index === currentIndex ? funnel : item));
    }
    return funnel;
  }

  function updateFunnelLocally(funnelId, updater) {
    const normalizedFunnelId = String(funnelId || "").trim();
    if (!normalizedFunnelId || !state.funnelWorkspace || typeof updater !== "function") return null;

    let updatedFunnel = null;
    state.funnelWorkspace.funnels = (state.funnelWorkspace.funnels || []).map((funnel) => {
      if (String(funnel?.id || "").trim() !== normalizedFunnelId) return funnel;
      updatedFunnel = updater(funnel) || funnel;
      return updatedFunnel;
    });
    return updatedFunnel;
  }

  function updateFunnelsInGroupLocally(groupId, updater) {
    const normalizedGroupId = String(groupId || "").trim();
    if (!normalizedGroupId || !state.funnelWorkspace || typeof updater !== "function") return 0;

    let updatedCount = 0;
    state.funnelWorkspace.funnels = (state.funnelWorkspace.funnels || []).map((funnel) => {
      if (String(funnel?.group_id || "").trim() !== normalizedGroupId) return funnel;
      updatedCount += 1;
      return updater(funnel) || funnel;
    });
    return updatedCount;
  }

  function removeFunnelGroupLocally(groupId) {
    const normalizedGroupId = String(groupId || "").trim();
    if (!normalizedGroupId || !state.funnelWorkspace) return 0;

    const previousCount = (state.funnelWorkspace.groups || []).length;
    state.funnelWorkspace.groups = (state.funnelWorkspace.groups || []).filter(
      (group) => String(group?.id || "").trim() !== normalizedGroupId
    );
    return previousCount - state.funnelWorkspace.groups.length;
  }

  function clearFunnelsGroupLocally(groupId) {
    const normalizedGroupId = String(groupId || "").trim();
    if (!normalizedGroupId || !state.funnelWorkspace) return 0;

    let updatedCount = 0;
    state.funnelWorkspace.funnels = (state.funnelWorkspace.funnels || []).map((funnel) => {
      if (String(funnel?.group_id || "").trim() !== normalizedGroupId) return funnel;
      updatedCount += 1;
      return {
        ...funnel,
        group_id: null
      };
    });
    return updatedCount;
  }

  function removeFunnelLocally(funnelId) {
    const normalizedFunnelId = String(funnelId || "").trim();
    if (!normalizedFunnelId || !state.funnelWorkspace) return 0;

    const previousCount = (state.funnelWorkspace.funnels || []).length;
    state.funnelWorkspace.funnels = (state.funnelWorkspace.funnels || []).filter(
      (funnel) => String(funnel?.id || "").trim() !== normalizedFunnelId
    );
    return previousCount - state.funnelWorkspace.funnels.length;
  }

  function resolveMutableFunnelRecord(funnelOrId) {
    if (!funnelOrId) return null;
    if (typeof funnelOrId === "string") {
      return getFunnelById(funnelOrId);
    }
    const funnelId = String(funnelOrId?.id || "").trim();
    return funnelId ? (getFunnelById(funnelId) || funnelOrId) : funnelOrId;
  }

  function appendSubfunnelToFunnelLocally(funnelOrId, subfunnel) {
    const funnel = resolveMutableFunnelRecord(funnelOrId);
    if (!funnel || !subfunnel?.id) return null;
    funnel.subfunnels = [...(funnel.subfunnels || []), subfunnel];
    return subfunnel;
  }

  function updateSubfunnelInFunnelLocally(funnelOrId, subfunnelId, updater) {
    const funnel = resolveMutableFunnelRecord(funnelOrId);
    const normalizedSubfunnelId = String(subfunnelId || "").trim();
    if (!funnel || !normalizedSubfunnelId || typeof updater !== "function") return null;

    let updatedSubfunnel = null;
    funnel.subfunnels = (funnel.subfunnels || []).map((subfunnel) => {
      if (String(subfunnel?.id || "").trim() !== normalizedSubfunnelId) return subfunnel;
      updatedSubfunnel = updater(subfunnel) || subfunnel;
      return updatedSubfunnel;
    });
    return updatedSubfunnel;
  }

  function replaceSubfunnelsInFunnelLocally(funnelOrId, nextSubfunnels = []) {
    const funnel = resolveMutableFunnelRecord(funnelOrId);
    if (!funnel) return 0;
    funnel.subfunnels = [...(Array.isArray(nextSubfunnels) ? nextSubfunnels : [])];
    return funnel.subfunnels.length;
  }

  function removeSubfunnelFromFunnelLocally(funnelOrId, subfunnelId) {
    const funnel = resolveMutableFunnelRecord(funnelOrId);
    const normalizedSubfunnelId = String(subfunnelId || "").trim();
    if (!funnel || !normalizedSubfunnelId) return 0;

    const previousCount = (funnel.subfunnels || []).length;
    funnel.subfunnels = (funnel.subfunnels || []).filter(
      (subfunnel) => String(subfunnel?.id || "").trim() !== normalizedSubfunnelId
    );
    return previousCount - funnel.subfunnels.length;
  }

  function buildFunnelSubfunnels(subfunnelNames = [], previousSubfunnels = []) {
    return (Array.isArray(subfunnelNames) ? subfunnelNames : []).map((subName, index) => ({
      id: previousSubfunnels[index]?.id || createSubfunnelId(),
      name: subName
    }));
  }

  function applyFunnelCoreFieldsLocally(funnelOrId, {
    name,
    category,
    ownerDepartmentId,
    visibilityScope,
    visibilityAccessLevel,
    departmentPermissions = [],
    departmentIds = []
  } = {}) {
    return updateFunnelLocally(funnelOrId?.id || funnelOrId, (funnel) => ({
      ...funnel,
      name,
      category,
      owner_department_id: ownerDepartmentId || null,
      visibility_scope: visibilityScope,
      visibility_access_level: visibilityAccessLevel,
      department_permissions: departmentPermissions,
      department_ids: departmentIds
    }));
  }

  function reconcileWorkspaceAssignmentsForSubfunnels(previousSubfunnels = [], nextSubfunnels = []) {
    const previousSubfunnelIds = new Set((Array.isArray(previousSubfunnels) ? previousSubfunnels : []).map((item) => String(item?.id || "").trim()).filter(Boolean));
    const validSubfunnelIds = new Set((Array.isArray(nextSubfunnels) ? nextSubfunnels : []).map((item) => String(item?.id || "").trim()).filter(Boolean));
    const fallbackSubfunnelId = String(nextSubfunnels?.[0]?.id || "").trim() || null;
    const removedSubfunnelIds = [...previousSubfunnelIds].filter((id) => !validSubfunnelIds.has(id));

    if (removedSubfunnelIds.length) {
      rememberDeletedFunnelWorkspaceIds({ subfunnels: removedSubfunnelIds });
    }

    Object.keys(state.funnelWorkspace?.stageAssignments || {}).forEach((stageId) => {
      const assignedId = String(state.funnelWorkspace.stageAssignments[stageId] || "").trim();
      if (!previousSubfunnelIds.has(assignedId)) return;
      if (!validSubfunnelIds.has(assignedId)) {
        state.funnelWorkspace.stageAssignments[stageId] = fallbackSubfunnelId || assignedId;
      }
    });

    Object.keys(state.funnelWorkspace?.leadAssignments || {}).forEach((leadId) => {
      const assignedId = String(state.funnelWorkspace.leadAssignments[leadId] || "").trim();
      if (!previousSubfunnelIds.has(assignedId)) return;
      if (!validSubfunnelIds.has(assignedId)) {
        state.funnelWorkspace.leadAssignments[leadId] = fallbackSubfunnelId || assignedId;
      }
    });

    return {
      validSubfunnelIds,
      removedSubfunnelIds,
      fallbackSubfunnelId
    };
  }

  function buildLocalFunnelRecord({
    name,
    category,
    ownerDepartmentId,
    visibilityScope,
    visibilityAccessLevel,
    departmentPermissions = [],
    departmentIds = [],
    subfunnels = []
  } = {}) {
    return {
      id: createFunnelId(),
      name,
      category,
      owner_department_id: ownerDepartmentId || null,
      visibility_scope: visibilityScope,
      visibility_access_level: visibilityAccessLevel,
      department_permissions: departmentPermissions,
      department_ids: departmentIds,
      created_by: state.currentUser?.id || null,
      subfunnels: [...(Array.isArray(subfunnels) ? subfunnels : [])],
      created_at: new Date().toISOString(),
      is_default: false
    };
  }

  function applyExistingFunnelWorkspaceUpdate(existingFunnelId, {
    name,
    category,
    ownerDepartmentId,
    visibilityScope,
    visibilityAccessLevel,
    departmentPermissions = [],
    departmentIds = [],
    previousSubfunnels = [],
    nextSubfunnels = []
  } = {}) {
    const localExistingFunnel = getFunnelById(existingFunnelId);
    if (!localExistingFunnel) {
      throw new Error("Funil não encontrado para edição.");
    }

    applyFunnelCoreFieldsLocally(localExistingFunnel, {
      name,
      category,
      ownerDepartmentId,
      visibilityScope,
      visibilityAccessLevel,
      departmentPermissions,
      departmentIds
    });
    replaceSubfunnelsInFunnelLocally(localExistingFunnel, nextSubfunnels);

    const { validSubfunnelIds } = reconcileWorkspaceAssignmentsForSubfunnels(previousSubfunnels, nextSubfunnels);
    state.activeFunnelId = localExistingFunnel.id;
    if (state.activeSubfunnelId && !validSubfunnelIds.has(state.activeSubfunnelId)) {
      state.activeSubfunnelId = null;
    }

    return localExistingFunnel;
  }

  function createFunnelInWorkspace({
    name,
    category,
    ownerDepartmentId,
    visibilityScope,
    visibilityAccessLevel,
    departmentPermissions = [],
    departmentIds = [],
    subfunnels = []
  } = {}) {
    const newFunnel = buildLocalFunnelRecord({
      name,
      category,
      ownerDepartmentId,
      visibilityScope,
      visibilityAccessLevel,
      departmentPermissions,
      departmentIds,
      subfunnels
    });

    upsertFunnelLocally(newFunnel);
    state.activeFunnelId = newFunnel.id;
    state.activeSubfunnelId = null;
    return newFunnel;
  }

  async function persistSingleFunnelSubsetByIdOrThrow(funnelId, options = {}) {
    const targetFunnel = getFunnelById(funnelId);
    if (!targetFunnel) {
      throw new Error("Funil não encontrado para persistência.");
    }
    await persistFunnelsSubsetToSupabase([targetFunnel], options);
    return targetFunnel;
  }

  async function saveSingleSubfunnelModalChange({
    funnelId,
    subfunnelId = null,
    subfunnelName,
    mode = "create"
  } = {}) {
    const normalizedFunnelId = String(funnelId || "").trim();
    const normalizedSubfunnelId = String(subfunnelId || "").trim();
    const normalizedMode = String(mode || "").trim().toLowerCase();
    const isEditMode = normalizedMode === "edit";

    const targetFunnel = getFunnelById(normalizedFunnelId);
    if (!targetFunnel) {
      throw new Error(isEditMode ? "Funil não encontrado para edição do subfunil." : "Funil não encontrado para adicionar o subfunil.");
    }

    if (isEditMode && !getSubfunnelById(normalizedSubfunnelId)) {
      throw new Error("Subfunil não encontrado para edição.");
    }

    await executeFunnelWorkspaceMetaMutation({
      applyLocal: () => {
        const localTargetFunnel = getFunnelById(normalizedFunnelId);
        if (!localTargetFunnel) {
          throw new Error(isEditMode ? "Funil não encontrado para edição do subfunil." : "Funil não encontrado para adicionar o subfunil.");
        }

        if (isEditMode) {
          const localTargetSubfunnel = getSubfunnelById(normalizedSubfunnelId);
          if (!localTargetSubfunnel) throw new Error("Subfunil não encontrado para edição.");
          updateSubfunnelInFunnelLocally(localTargetFunnel, localTargetSubfunnel.id, (item) => ({
            ...item,
            name: subfunnelName
          }));
          return;
        }

        appendSubfunnelToFunnelLocally(localTargetFunnel, {
          id: createSubfunnelId(),
          name: subfunnelName
        });
      },
      persist: async () => {
        await persistSingleFunnelSubsetByIdOrThrow(normalizedFunnelId, {
          includeSubfunnels: true,
          includePermissions: false
        });
      }
    });
  }

  function upsertStageLocally(stage) {
    if (!stage?.id) return null;
    const normalizedStage = normalizeStage(stage);
    const currentIndex = state.stages.findIndex((item) => item.id === normalizedStage.id);
    if (currentIndex === -1) {
      state.stages = sortStagesCollection([...state.stages, normalizedStage]);
    } else {
      state.stages = sortStagesCollection(
        state.stages.map((item, index) => (index === currentIndex ? normalizedStage : item))
      );
    }
    return normalizedStage;
  }

  function upsertLeadLocally(lead) {
    if (!lead?.id) return null;
    const normalizedLead = normalizeLead(lead, {
      ownerMap: state.ownerCanonicalMap,
      socialSourceMap: state.socialSourceCanonicalMap
    });
    const currentIndex = state.leads.findIndex((item) => item.id === normalizedLead.id);
    if (currentIndex === -1) {
      state.leads = [...state.leads, normalizedLead];
    } else {
      state.leads = state.leads.map((item, index) => (index === currentIndex ? normalizedLead : item));
    }
    return normalizedLead;
  }

  function normalizeAllLeadsLocally() {
    state.leads = state.leads.map((lead) => normalizeLead(lead, {
      ownerMap: state.ownerCanonicalMap,
      socialSourceMap: state.socialSourceCanonicalMap
    }));
    return state.leads.length;
  }

  function updateLeadsLocallyByIds(leadIds = [], updater) {
    const ids = new Set(normalizeIdList(leadIds));
    if (!ids.size || typeof updater !== "function") return 0;

    let updatedCount = 0;
    state.leads = state.leads.map((lead) => {
      const leadId = String(lead?.id || "").trim();
      if (!ids.has(leadId)) return lead;
      updatedCount += 1;
      const nextLead = updater(lead);
      return normalizeLead(nextLead || lead, {
        ownerMap: state.ownerCanonicalMap,
        socialSourceMap: state.socialSourceCanonicalMap
      });
    });

    return updatedCount;
  }

  function applyStageNameUpdatesLocally(updates = []) {
    const updateMap = new Map(
      (Array.isArray(updates) ? updates : [])
        .map((item) => [String(item?.id || "").trim(), item?.after])
        .filter(([id, name]) => id && name)
    );
    if (!updateMap.size) return 0;

    let updatedCount = 0;
    state.stages = state.stages.map((stage) => {
      const stageId = String(stage?.id || "").trim();
      const nextName = updateMap.get(stageId);
      if (!nextName) return normalizeStage(stage);
      updatedCount += 1;
      return normalizeStage({ ...stage, name: nextName });
    });

    return updatedCount;
  }

  function removeLeadsLocally(leadIds = []) {
    const ids = new Set(normalizeIdList(leadIds));
    if (!ids.size) return 0;

    const previousCount = state.leads.length;
    state.leads = state.leads.filter((lead) => !ids.has(String(lead?.id || "").trim()));
    if (state.funnelWorkspace?.leadAssignments) {
      ids.forEach((leadId) => {
        delete state.funnelWorkspace.leadAssignments[leadId];
      });
      state.suppressFunnelSync = true;
      writeStoredFunnelWorkspace();
    }
    state.selectedLeadIds = new Set([...state.selectedLeadIds].filter((leadId) => !ids.has(leadId)));
    return previousCount - state.leads.length;
  }

  function removeStagesLocally(stageIds = []) {
    const ids = new Set(normalizeIdList(stageIds));
    if (!ids.size) return 0;

    const previousCount = state.stages.length;
    state.stages = state.stages.filter((stage) => !ids.has(String(stage?.id || "").trim()));

    if (state.funnelWorkspace?.stageAssignments) {
      ids.forEach((stageId) => {
        delete state.funnelWorkspace.stageAssignments[stageId];
      });
    }

    if (state.funnelWorkspace?.stageReminderConfigs) {
      ids.forEach((stageId) => {
        delete state.funnelWorkspace.stageReminderConfigs[stageId];
      });
    }

    if (state.funnelWorkspace) {
      state.suppressFunnelSync = true;
      writeStoredFunnelWorkspace();
    }

    return previousCount - state.stages.length;
  }

  function moveLeadsToStageLocally(sourceStageIds = [], targetStageId) {
    const normalizedSourceStageIds = new Set(normalizeIdList(sourceStageIds));
    const normalizedTargetStageId = String(targetStageId || "").trim();
    if (!normalizedSourceStageIds.size || !normalizedTargetStageId) return 0;

    const leadIds = state.leads
      .filter((lead) => normalizedSourceStageIds.has(String(lead?.stage_id || "").trim()))
      .map((lead) => lead.id);

    return updateLeadsLocallyByIds(leadIds, (lead) => ({
      ...lead,
      stage_id: normalizedTargetStageId
    }));
  }

  function closeFilterDropdowns(except = null) {
    [
      { dropdown: els.categoryFilterDropdown, btn: els.categoryFilterBtn, menu: els.categoryFilterMenu },
      { dropdown: els.groupFilterDropdown, btn: els.groupFilterBtn, menu: els.groupFilterMenu },
      { dropdown: els.funnelFilterDropdown, btn: els.funnelFilterBtn, menu: els.funnelFilterMenu },
      { dropdown: els.subfunnelFilterDropdown, btn: els.subfunnelFilterBtn, menu: els.subfunnelFilterMenu },
      { dropdown: els.ownerFilterDropdown, btn: els.ownerFilterBtn, menu: els.ownerFilterMenu },
      { dropdown: els.monthFilterDropdown, btn: els.monthFilterBtn, menu: els.monthFilterMenu },
      { dropdown: els.stageFilterDropdown, btn: els.stageFilterBtn, menu: els.stageFilterMenu },
      { dropdown: els.leadSourceFilterDropdown, btn: els.leadSourceFilterBtn, menu: els.leadSourceFilterMenu },
      { dropdown: els.socialSourceFilterDropdown, btn: els.socialSourceFilterBtn, menu: els.socialSourceFilterMenu },
      { dropdown: els.indicatorFilterDropdown, btn: els.indicatorFilterBtn, menu: els.indicatorFilterMenu },
      { dropdown: els.indicatorSectorFilterDropdown, btn: els.indicatorSectorFilterBtn, menu: els.indicatorSectorFilterMenu }
    ].forEach((item) => {
      if (!item.dropdown || item.dropdown === except) return;
      item.dropdown.classList.remove("open");
      item.menu?.classList.add("hidden");
      item.btn?.setAttribute("aria-expanded", "false");
    });
  }

  function setFilterDropdownOpen(dropdown, btn, menu, shouldOpen) {
    if (!dropdown || !btn || !menu) return;
    dropdown.classList.toggle("open", shouldOpen);
    menu.classList.toggle("hidden", !shouldOpen);
    btn.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
  }

  function closeBrandedSelects(except = null) {
    document.querySelectorAll(".brand-select.open").forEach((wrapper) => {
      if (except && wrapper === except) return;
      wrapper.classList.remove("open");
      wrapper.querySelector(".brand-select-btn")?.setAttribute("aria-expanded", "false");
    });
  }

  function ensureBrandedSelectId(selectEl) {
    if (!selectEl) return "";
    if (!selectEl.id) {
      state.brandedSelectCounter += 1;
      selectEl.id = `brand-select-${state.brandedSelectCounter}`;
    }
    return selectEl.id;
  }

  function getBrandedSelectLabel(selectEl) {
    const selectedOption = selectEl.options[selectEl.selectedIndex];
    return selectedOption?.textContent?.trim() || "Selecionar";
  }

  function renderBrandedSelect(selectEl) {
    if (!selectEl) return;
    const selectId = ensureBrandedSelectId(selectEl);
    const wrapper = selectEl.parentElement?.querySelector(`.brand-select[data-brand-select-for="${selectId}"]`);
    if (!wrapper) return;

    const control = wrapper.querySelector(".brand-select-btn");
    const label = wrapper.querySelector(".brand-select-label");
    const menu = wrapper.querySelector(".brand-select-menu");
    if (!control || !label || !menu) return;

    label.textContent = getBrandedSelectLabel(selectEl);
    control.disabled = !!selectEl.disabled;
    wrapper.classList.toggle("is-disabled", !!selectEl.disabled);

    menu.innerHTML = [...selectEl.options].map((option) => {
      const isActive = option.value === selectEl.value;
      return `
        <button
          type="button"
          class="brand-select-option${isActive ? " active" : ""}"
          data-brand-select-option="${escapeHtml(selectId)}"
          data-value="${escapeHtml(option.value)}"
          role="option"
          aria-selected="${isActive ? "true" : "false"}"
        >
          <span class="brand-select-option-text">${escapeHtml(option.textContent || option.value)}</span>
          <span class="brand-select-option-check" aria-hidden="true">${isActive ? "•" : ""}</span>
        </button>
      `;
    }).join("");
  }

  function ensureBrandedSelect(selectEl) {
    if (!selectEl) return;
    const selectId = ensureBrandedSelectId(selectEl);

    selectEl.classList.add("brand-select-native");

    let wrapper = selectEl.parentElement?.querySelector(`.brand-select[data-brand-select-for="${selectId}"]`);
    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.className = "brand-select";
      wrapper.dataset.brandSelectFor = selectId;
      wrapper.innerHTML = `
        <button type="button" class="brand-select-btn" data-brand-select-control="${escapeHtml(selectId)}" aria-haspopup="listbox" aria-expanded="false">
          <span class="brand-select-label"></span>
          <span class="brand-select-arrow" aria-hidden="true">⌄</span>
        </button>
        <div class="brand-select-menu" role="listbox"></div>
      `;
      selectEl.insertAdjacentElement("afterend", wrapper);
    }

    if (!selectEl.dataset.brandSelectBound) {
      selectEl.addEventListener("change", () => renderBrandedSelect(selectEl));
      selectEl.dataset.brandSelectBound = "true";
    }

    renderBrandedSelect(selectEl);
  }

  function syncBrandedSelects() {
    const fixedSelects = [
      els.registerDepartment,
      els.registerDepartmentSecondary,
      els.mobileCategoryFilter,
      els.mobileGroupFilter,
      els.mobileFunnelFilter,
      els.mobileSubfunnelFilter,
      els.mobileOwnerFilter,
      els.mobileMonthFilter,
      els.mobileStageFilter,
      els.mobileLeadSourceFilter,
      els.mobileSocialSourceFilter,
      els.mobileIndicatorFilter,
      els.mobileIndicatorSectorFilter,
      els.owner,
      els.leadFunnelSelect,
      els.leadSubfunnelSelect,
      els.stage,
      els.socialSource,
      els.trafficType,
      els.funnelCategory,
      els.funnelVisibilityScope,
      els.funnelGlobalAccessLevel,
      els.funnelOfficialDepartmentSelect,
      els.funnelGroupCategory,
      els.funnelGroupOwnerDepartment,
      els.stageType,
      els.structureFunnelSelect,
      els.structureSubfunnelSelect,
      els.stageFunnelSelect,
      els.stageSubfunnelSelect,
      els.stageDuplicateCategory,
      els.stageDuplicateGroup,
      els.stageDuplicateFunnel,
      els.stageDuplicateSubfunnel,
      els.stageDeleteTargetStage
    ];

    const dynamicSelects = [...document.querySelectorAll(".plan-select-input, .team-role-select, .team-department-select, .team-department-secondary-select, [data-access-role], [data-access-department], [data-access-department-secondary], .department-select")];
    [...new Set([...fixedSelects, ...dynamicSelects].filter(Boolean))].forEach((selectEl) => ensureBrandedSelect(selectEl));
  }

  function syncFilterButtonLabel(selectEl, labelEl, defaultLabel, formatLabel = (value, text) => text || value, filterKey = "") {
    if (!selectEl || !labelEl) return;
    const selectedValues = getFilterValues(filterKey, selectEl);
    labelEl.textContent = getMultiFilterButtonLabel(
      selectedValues,
      defaultLabel,
      (value) => {
        const selectedOption = [...selectEl.options].find((option) => option.value === value);
        return formatLabel(value, selectedOption?.textContent || value);
      }
    );
  }

  function renderFilterOptions(selectEl, menuEl, labelEl, defaultLabel, formatLabel = (value, text) => text || value, filterKey = "") {
    if (!selectEl || !menuEl) return;

    const options = [...selectEl.options].map((option) => ({
      value: option.value,
      label: option.textContent || ""
    }));
    const triggerBtn = menuEl.parentElement?.querySelector(".filter-btn");
    const hasSelectableOptions = options.some((option) => String(option.value || "").trim());
    const selectedValues = getFilterValues(filterKey, selectEl);

    menuEl.innerHTML = options.map((option) => `
      <button
        type="button"
        class="filter-option ${(!option.value && !selectedValues.length) || selectedValues.includes(option.value) ? "active" : ""}"
        data-value="${escapeHtml(option.value)}"
      >
        ${escapeHtml(option.label)}
      </button>
    `).join("");

    if (triggerBtn) {
      triggerBtn.disabled = !hasSelectableOptions;
      triggerBtn.setAttribute("aria-disabled", !hasSelectableOptions ? "true" : "false");
      triggerBtn.closest(".filter-dropdown")?.classList.toggle("is-disabled", !hasSelectableOptions);
      if (!hasSelectableOptions) {
        triggerBtn.setAttribute("aria-expanded", "false");
        triggerBtn.closest(".filter-dropdown")?.classList.remove("open");
        menuEl.classList.add("hidden");
      }
    }

    syncFilterButtonLabel(selectEl, labelEl, defaultLabel, formatLabel, filterKey);

    menuEl.querySelectorAll(".filter-option").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const clickedValue = String(button.dataset.value || "").trim();
        const currentValues = getFilterValues(filterKey, selectEl);
        let nextValues = [];

        if (!clickedValue) {
          nextValues = [];
        } else if (currentValues.includes(clickedValue)) {
          nextValues = currentValues.filter((value) => value !== clickedValue);
        } else {
          nextValues = [...currentValues, clickedValue];
        }

        setFilterValues(filterKey, nextValues, selectEl);
        renderFilterOptions(selectEl, menuEl, labelEl, defaultLabel, formatLabel, filterKey);
        selectEl.dispatchEvent(new Event("change", { bubbles: true }));
      });
    });
  }

  function isMobileViewport() {
    return window.matchMedia("(max-width: 700px)").matches;
  }

  function isCompactViewport() {
    return window.matchMedia("(max-width: 1100px)").matches;
  }

  function shouldAutoCloseFunnelSidebarOnSelection() {
    return isMobileViewport();
  }

  function syncResponsiveHeaderState() {
    document.body.classList.toggle(
      "compact-admin-overlay",
      isCompactViewport() && isAdminOverlayView(state.activeView)
    );

    if (els.shellBrandLogo) {
      const useSymbol = isCompactViewport();
      const nextSrc = useSymbol ? "assets/pax-insights-symbol.png" : "assets/pax-insights-logo.png";
      const currentSrc = String(els.shellBrandLogo.getAttribute("src") || "").trim();
      if (currentSrc !== nextSrc) {
        els.shellBrandLogo.setAttribute("src", nextSrc);
      }
    }

    if (els.mobileOrgName) {
      const activeFunnel = getFunnelById(state.activeFunnelId);
      let compactLabel = "Relatórios";
      if (state.activeView === "funil") {
        compactLabel = activeFunnel?.name || "Funis";
      } else if (state.activeView === "leads") {
        compactLabel = "Leads";
      } else if (state.activeView === "equipe") {
        compactLabel = "Acessos";
      } else if (state.activeView === "estrutura") {
        compactLabel = "Estrutura";
      } else if (state.activeView === "configuracoes") {
        compactLabel = "Configurações";
      }
      els.mobileOrgName.textContent = compactLabel;
    }

    els.profileNotificationsBtn?.classList.toggle("hidden", !isCompactViewport());
  }

  function supportsCollapsibleCrmNavbar() {
    return window.matchMedia("(min-width: 1181px)").matches;
  }

  const FUNNEL_CATEGORIES = ["B2B", "B2C"];

  function createFunnelId() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
    return `funnel-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
  }

  function createRenderComputationCache() {
    return {
      filteredLeads: new Map(),
      closedLeads: new WeakMap(),
      qualifiedClosedLeads: new WeakMap(),
      dashboardMetrics: new WeakMap()
    };
  }

  function resetRenderComputationCache() {
    state.renderComputationCache = createRenderComputationCache();
  }

  function getRenderComputationCache() {
    if (!state.renderComputationCache) {
      resetRenderComputationCache();
    }
    return state.renderComputationCache;
  }

  function clampNumber(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function hexToRgb(hex) {
    const normalized = String(hex || "").replace("#", "").trim();
    if (!/^[0-9a-f]{6}$/i.test(normalized)) return { r: 0, g: 0, b: 0 };
    return {
      r: Number.parseInt(normalized.slice(0, 2), 16),
      g: Number.parseInt(normalized.slice(2, 4), 16),
      b: Number.parseInt(normalized.slice(4, 6), 16)
    };
  }

  function rgbToHex({ r = 0, g = 0, b = 0 } = {}) {
    return `#${[r, g, b].map((value) => clampNumber(Math.round(value), 0, 255).toString(16).padStart(2, "0")).join("")}`;
  }

  function interpolateHexColor(startHex, endHex, progress) {
    const start = hexToRgb(startHex);
    const end = hexToRgb(endHex);
    const ratio = clampNumber(Number(progress) || 0, 0, 1);
    return rgbToHex({
      r: start.r + ((end.r - start.r) * ratio),
      g: start.g + ((end.g - start.g) * ratio),
      b: start.b + ((end.b - start.b) * ratio)
    });
  }

  function getFunnelFlowPalette(total, { dark = false } = {}) {
    const count = Math.max(1, Number(total) || 1);
    const start = dark ? "#7fb98c" : "#d7ecd9";
    const end = dark ? "#274031" : "#6ea973";
    return Array.from({ length: count }, (_, index) => {
      const progress = count === 1 ? 0 : index / (count - 1);
      return interpolateHexColor(start, end, progress);
    });
  }

  function getElementContextMenuPoint(element) {
    const rect = element?.getBoundingClientRect?.();
    if (!rect) {
      return { x: 24, y: 24 };
    }
    return {
      x: Math.round(rect.left + Math.min(rect.width / 2, Math.max(28, rect.width - 28))),
      y: Math.round(rect.top + Math.min(rect.height / 2, Math.max(28, rect.height - 28)))
    };
  }

  function clearTouchContextTap() {
    if (state.touchContextTap?.timerId) {
      window.clearTimeout(state.touchContextTap.timerId);
    }
    state.touchContextTap = null;
  }

  function registerTouchContextTap(scope, id, element, onActivate) {
    const normalizedId = String(id || "").trim();
    if (!normalizedId || typeof onActivate !== "function") return false;

    const now = Date.now();
    const lastTap = state.touchContextTap;
    if (lastTap && lastTap.scope === scope && lastTap.id === normalizedId && (now - lastTap.time) <= 420) {
      clearTouchContextTap();
      onActivate(getElementContextMenuPoint(element));
      return true;
    }

    clearTouchContextTap();
    const timerId = window.setTimeout(() => {
      if (state.touchContextTap?.timerId === timerId) {
        state.touchContextTap = null;
      }
    }, 480);

    state.touchContextTap = {
      scope,
      id: normalizedId,
      time: now,
      timerId
    };
    return false;
  }

  function createSubfunnelId() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
    return `subfunnel-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
  }

  function createFunnelGroupId() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
    return `funnel-group-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
  }

  function getDefaultFunnelWorkspace() {
    return {
      groups: [],
      funnels: [],
      stageAssignments: {},
      leadAssignments: {},
      stageReminderConfigs: {}
    };
  }

  function isLegacyPlaceholderFunnel(funnel = null) {
    if (!funnel || typeof funnel !== "object") return false;
    const compareKey = normalizeComparisonText(funnel.name || "").replace(/\s+/g, "");
    return compareKey === "operacaoatual" || Boolean(funnel.is_default);
  }

  function readStoredFunnelWorkspace() {
    const normalizeWorkspace = (parsed) => {
      if (!parsed || typeof parsed !== "object") return null;
      return {
        groups: Array.isArray(parsed.groups) ? parsed.groups : [],
        funnels: Array.isArray(parsed.funnels) ? parsed.funnels : [],
        stageAssignments: parsed.stageAssignments && typeof parsed.stageAssignments === "object" ? parsed.stageAssignments : {},
        leadAssignments: parsed.leadAssignments && typeof parsed.leadAssignments === "object" ? parsed.leadAssignments : {},
        stageReminderConfigs: parsed.stageReminderConfigs && typeof parsed.stageReminderConfigs === "object" ? parsed.stageReminderConfigs : {}
      };
    };

    const primaryWorkspace = normalizeWorkspace(readJsonStorageValue(FUNNEL_WORKSPACE_STORAGE_KEY));
    if (primaryWorkspace) return primaryWorkspace;
    return normalizeWorkspace(readJsonStorageValue(LEGACY_FUNNEL_WORKSPACE_STORAGE_KEY));
  }

  function readDeletedFunnelWorkspaceIds() {
    const parsed = readJsonStorageValue(DELETED_FUNNEL_WORKSPACE_IDS_STORAGE_KEY);
    return {
      groups: normalizeIdList(parsed?.groups || []),
      funnels: normalizeIdList(parsed?.funnels || []),
      subfunnels: normalizeIdList(parsed?.subfunnels || [])
    };
  }

  function writeDeletedFunnelWorkspaceIds(value = {}) {
    try {
      window.localStorage.setItem(
        DELETED_FUNNEL_WORKSPACE_IDS_STORAGE_KEY,
        JSON.stringify({
          groups: normalizeIdList(value.groups || []),
          funnels: normalizeIdList(value.funnels || []),
          subfunnels: normalizeIdList(value.subfunnels || [])
        })
      );
    } catch (_error) {
      // ignore local storage failures
    }
  }

  function rememberDeletedFunnelWorkspaceIds(partial = {}) {
    const current = readDeletedFunnelWorkspaceIds();
    writeDeletedFunnelWorkspaceIds({
      groups: [...current.groups, ...(partial.groups || [])],
      funnels: [...current.funnels, ...(partial.funnels || [])],
      subfunnels: [...current.subfunnels, ...(partial.subfunnels || [])]
    });
  }

  function writeStoredFunnelWorkspace() {
    try {
      window.localStorage.setItem(FUNNEL_WORKSPACE_STORAGE_KEY, JSON.stringify(state.funnelWorkspace || getDefaultFunnelWorkspace()));
    } catch (_error) {
      // ignore local storage failures
    }
    if (state.suppressFunnelSync) {
      state.suppressFunnelSync = false;
      return;
    }
    if (state.funnelDataLoadedFromSupabase) {
      markLocalMutationCooldown(1800);
      queueFunnelWorkspaceSync();
    }
  }

  function readStoredAppDataCache() {
    const parsed = readJsonStorageValue(APP_DATA_CACHE_STORAGE_KEY);
    if (!parsed) return null;

    return {
      stages: Array.isArray(parsed.stages) ? parsed.stages : [],
      leads: Array.isArray(parsed.leads) ? parsed.leads : [],
      leadSources: Array.isArray(parsed.leadSources) ? parsed.leadSources : [],
      departments: Array.isArray(parsed.departments) ? parsed.departments : [],
      socialSources: Array.isArray(parsed.socialSources) ? parsed.socialSources : [],
      cachedAt: parsed.cachedAt || null
    };
  }

  function writeStoredAppDataCache() {
    try {
      window.localStorage.setItem(APP_DATA_CACHE_STORAGE_KEY, JSON.stringify({
        stages: state.stages || [],
        leads: state.leads || [],
        leadSources: state.leadSources || [],
        departments: state.departments || [],
        socialSources: state.socialSources || [],
        cachedAt: new Date().toISOString()
      }));
    } catch (_error) {
      // ignore local storage failures
    }
  }

  function scheduleAppDataCacheWrite(delayMs = 180) {
    if (state.appDataCacheWriteTimer) {
      clearTimeout(state.appDataCacheWriteTimer);
      state.appDataCacheWriteTimer = null;
    }

    state.appDataCacheWriteTimer = window.setTimeout(() => {
      state.appDataCacheWriteTimer = null;
      writeStoredAppDataCache();
    }, Math.max(0, Number(delayMs) || 0));
  }

  async function ensureDefaultSocialSourceForMissingLeads(leadIds = [], options = {}) {
    const silent = options.silent === true;
    const ids = normalizeIdList(leadIds);
    if (!ids.length || state.socialSourceBackfillInFlight) return;
    if (!state.currentUser || !isApprovedUser()) return;

    const editableIds = ids.filter((leadId) => {
      const lead = state.leads.find((item) => item.id === leadId);
      return lead && canEditLeads(lead);
    });
    if (!editableIds.length) return;

    state.socialSourceBackfillInFlight = true;

    try {
      for (const batch of chunkArray(editableIds, 200)) {
        const { error } = await state.supabase
          .from("leads")
          .update({ social_source: DEFAULT_SOCIAL_SOURCE })
          .in("id", batch);

        if (error) throw error;
      }

      updateLeadsLocallyByIds(editableIds, (lead) => ({
        ...lead,
        social_source: DEFAULT_SOCIAL_SOURCE
      }));
      state.socialSourceCanonicalMap.set(getCanonicalValueKey(DEFAULT_SOCIAL_SOURCE), DEFAULT_SOCIAL_SOURCE);
      state.socialSources = normalizeSocialSources([...(state.socialSources || []), DEFAULT_SOCIAL_SOURCE]);
      writeStoredSocialSources();
      writeStoredAppDataCache();
      if (!silent) {
        renderAll();
      }
    } catch (error) {
      console.error("Erro ao preencher canal de origem padrão:", error);
    } finally {
      state.socialSourceBackfillInFlight = false;
    }
  }

  function hydrateAppDataFromCache() {
    const cached = readStoredAppDataCache();
    if (!cached?.stages?.length && !cached?.leads?.length) return false;

    applyHydratedAppDataCache(cached);
    syncFunnelWorkspaceWithData(readStoredFunnelWorkspace());
    syncSelectedLeadIds();
    return state.stages.length > 0 || state.leads.length > 0;
  }

  function applyHydratedAppDataCache(cached = null) {
    state.stages = (cached?.stages || []).map(normalizeStage);
    const rawLeads = cached?.leads || [];
    state.ownerCanonicalMap = buildOwnerCanonicalMap(rawLeads.map((lead) => lead?.owner), state.profiles || []);
    state.socialSourceCanonicalMap = buildCanonicalValueMap(rawLeads.map((lead) => lead?.social_source), "social_source");
    state.leads = rawLeads.map((lead) => normalizeLead(lead, {
      ownerMap: state.ownerCanonicalMap,
      socialSourceMap: state.socialSourceCanonicalMap
    }));
    state.leadSources = normalizeLeadSources(cached?.leadSources || []);
    state.socialSources = normalizeSocialSources([
      ...(cached?.socialSources || []),
      ...rawLeads.map((lead) => lead?.social_source || "")
    ]);
    state.departments = Array.isArray(cached?.departments) ? cached.departments : [];
  }

  function readNotificationDismissals() {
    const parsed = readJsonStorageValue(NOTIFICATION_DISMISSALS_STORAGE_KEY);
    return parsed && typeof parsed === "object" ? parsed : {};
  }

  function writeNotificationDismissals(value = {}) {
    try {
      window.localStorage.setItem(NOTIFICATION_DISMISSALS_STORAGE_KEY, JSON.stringify(value && typeof value === "object" ? value : {}));
    } catch (_error) {
      // ignore local storage failures
    }
  }

  function readStorageFlag(key) {
    try {
      return window.localStorage.getItem(key) === "1";
    } catch (_error) {
      return false;
    }
  }

  function writeStorageFlag(key, active = true) {
    try {
      if (active) {
        window.localStorage.setItem(key, "1");
      } else {
        window.localStorage.removeItem(key);
      }
    } catch (_error) {
      // ignore local storage failures
    }
  }

  function ensureDemoPipelineReminderSeed() {
    if (readStorageFlag(DEMO_PIPELINE_REMINDER_SEEDED_STORAGE_KEY)) return;

    const lead = state.leads.find((item) =>
      normalizeComparisonText(item?.name || "") === normalizeComparisonText(DEMO_PIPELINE_REMINDER_LEAD_NAME)
      && normalizeComparisonText(item?.owner || item?.owner_raw || "") === normalizeComparisonText(DEMO_PIPELINE_REMINDER_OWNER)
    );
    if (!lead || !isLeadOwnedByCurrentUser(lead)) return;

    const stageId = String(lead.stage_id || "").trim();
    if (!stageId) return;

    state.funnelWorkspace = state.funnelWorkspace || getDefaultFunnelWorkspace();
    state.funnelWorkspace.stageReminderConfigs = {
      ...(state.funnelWorkspace.stageReminderConfigs || {}),
      [stageId]: {
        days: DEMO_PIPELINE_REMINDER_DAYS,
        message: DEMO_PIPELINE_REMINDER_MESSAGE
      }
    };
    writeStoredFunnelWorkspace();

    const dismissals = readNotificationDismissals();
    const dismissKey = `${lead.id}:pipeline_days:${stageId}:${DEMO_PIPELINE_REMINDER_DAYS}:${getLeadStageEntryDate(lead, stageId)}`;
    if (dismissals[dismissKey]) {
      delete dismissals[dismissKey];
      writeNotificationDismissals(dismissals);
    }

    writeStorageFlag(DEMO_PIPELINE_REMINDER_SEEDED_STORAGE_KEY, true);
  }

  function buildNotificationDismissKey(notification) {
    if (!notification?.leadId || !notification?.type) return "";
    if (notification.type === "date") {
      return `${notification.leadId}:date:${notification.reminder?.due_date || ""}`;
    }
    if (notification.type === "stage_days") {
      return `${notification.leadId}:stage_days:${notification.reminder?.stage_id || ""}:${notification.reminder?.days || ""}:${notification.reminder?.start_date || ""}`;
    }
    if (notification.type === "pipeline_days") {
      return `${notification.leadId}:pipeline_days:${notification.stage?.id || notification.lead?.stage_id || ""}:${notification.reminder?.days || ""}:${getLeadStageEntryDate(notification.lead, notification.stage?.id || notification.lead?.stage_id || "")}`;
    }
    return `${notification.leadId}:${notification.type}`;
  }

  function dismissNotification(notificationKey) {
    const normalizedKey = String(notificationKey || "").trim();
    if (!normalizedKey) return;
    const current = readNotificationDismissals();
    current[normalizedKey] = getLocalIsoDate();
    writeNotificationDismissals(current);
    renderNotifications();
  }

  function isNotificationDismissed(notification) {
    const notificationKey = buildNotificationDismissKey(notification);
    if (!notificationKey) return false;
    const dismissals = readNotificationDismissals();
    return Boolean(dismissals[notificationKey]);
  }

  function readStoredFunnelRouteMigrationDone() {
    try {
      const storedValue = window.localStorage.getItem(FUNNEL_ROUTE_MIGRATION_STORAGE_KEY);
      if (storedValue != null) return storedValue === "true";
      return window.localStorage.getItem(LEGACY_FUNNEL_ROUTE_MIGRATION_STORAGE_KEY) === "true";
    } catch (_error) {
      return false;
    }
  }

  function writeStoredFunnelRouteMigrationDone(value) {
    try {
      window.localStorage.setItem(FUNNEL_ROUTE_MIGRATION_STORAGE_KEY, value ? "true" : "false");
    } catch (_error) {
      // ignore local storage failures
    }
  }

  function readStoredExternalActionsFunnelMergeDone() {
    try {
      return window.localStorage.getItem(EXTERNAL_ACTIONS_FUNNEL_MERGE_STORAGE_KEY) === "true";
    } catch (_error) {
      return false;
    }
  }

  function writeStoredExternalActionsFunnelMergeDone(value) {
    try {
      window.localStorage.setItem(EXTERNAL_ACTIONS_FUNNEL_MERGE_STORAGE_KEY, value ? "true" : "false");
    } catch (_error) {
      // ignore local storage failures
    }
  }

  function readStoredB2CExternalCaptureNormalizationDone() {
    try {
      return window.localStorage.getItem(B2C_EXTERNAL_CAPTURE_NORMALIZATION_STORAGE_KEY) === "true";
    } catch (_error) {
      return false;
    }
  }

  function writeStoredB2CExternalCaptureNormalizationDone(value) {
    try {
      window.localStorage.setItem(B2C_EXTERNAL_CAPTURE_NORMALIZATION_STORAGE_KEY, value ? "true" : "false");
    } catch (_error) {
      // ignore local storage failures
    }
  }

  function readStoredFunnelUiState() {
    const parsed = readJsonStorageValue(FUNNEL_UI_STATE_STORAGE_KEY, LEGACY_FUNNEL_UI_STATE_STORAGE_KEY);
    if (!parsed) return null;
    return {
      activeView: parsed.activeView || null,
      activeFunnelId: parsed.activeFunnelId || null,
      activeSubfunnelId: parsed.activeSubfunnelId || null,
      funnelSidebarOpen: Boolean(parsed.funnelSidebarOpen)
    };
  }

  function writeStoredFunnelUiState() {
    try {
      window.localStorage.setItem(FUNNEL_UI_STATE_STORAGE_KEY, JSON.stringify({
        activeView: state.activeView || null,
        activeFunnelId: state.activeFunnelId || null,
        activeSubfunnelId: state.activeSubfunnelId || null,
        funnelSidebarOpen: state.activeView === "funil" ? Boolean(state.funnelSidebarOpen) : false
      }));
    } catch (_error) {
      // ignore local storage failures
    }
  }

  function repairKnownFunnelLabel(value) {
    const raw = normalizeSpacing(value);
    const compact = normalizeComparisonText(raw).replace(/[^a-z0-9?]+/g, "");
    if (["indicacao", "indicao", "indica??o"].includes(compact)) return "Indicação";
    if (["apresentacao", "apresentao", "apresenta??o"].includes(compact)) return "Apresentação";
    if ([
      "eventoexterno",
      "eventosexternos",
      "eventosexterno",
      "eventosexterno",
      "acaoexterna",
      "acoesexternas",
      "acaoexternas",
      "acaoexterno",
      "acaoexternos",
      "acoesexterno",
      "acoesexternos"
    ].includes(compact)) return "Ações Externas";
    return raw;
  }

  function getFunnelLabelCompareKey(value) {
    return getCanonicalValueKey(repairKnownFunnelLabel(value)).replace(/\s+/g, "");
  }

  function getPreferredFunnelLabel(...values) {
    const candidates = values
      .map((value) => repairKnownFunnelLabel(value))
      .filter(Boolean);
    if (!candidates.length) return "";

    return [...candidates].sort((a, b) => {
      const aHasQuestion = a.includes("?");
      const bHasQuestion = b.includes("?");
      return Number(aHasQuestion) - Number(bHasQuestion)
        || b.length - a.length
        || a.localeCompare(b, "pt-BR");
    })[0];
  }

  function normalizeStoredSubfunnels(items = []) {
    return items.map((item) => {
      if (item && typeof item === "object") {
        return {
          id: item.id || createSubfunnelId(),
          name: repairKnownFunnelLabel(item.name || "")
        };
      }
      return {
        id: createSubfunnelId(),
        name: repairKnownFunnelLabel(item || "")
      };
    }).filter((item) => item.name);
  }

  function normalizeStoredFunnelGroups(items = []) {
    return (Array.isArray(items) ? items : [])
      .map((item) => ({
        id: item?.id || createFunnelGroupId(),
        name: repairKnownFunnelLabel(item?.name || "Novo grupo"),
        category: FUNNEL_CATEGORIES.includes(String(item?.category || "").trim()) ? String(item.category).trim() : "B2C",
        owner_department_id: String(item?.owner_department_id || item?.ownerDepartmentId || "").trim() || null,
        department_permissions: normalizeFunnelDepartmentPermissions(item?.department_permissions || item?.department_ids || []),
        department_ids: normalizeFunnelDepartmentPermissions(item?.department_permissions || item?.department_ids || []).map((value) => String(value.department_id)),
        collapsed: Boolean(item?.collapsed),
        created_by: item?.created_by || state.currentUser?.id || null,
        created_at: item?.created_at || new Date().toISOString()
      }))
      .filter((item) => item.name);
  }

  function normalizeSharedFunnelWorkspaceMeta(payload = null) {
    const source = payload && typeof payload === "object" ? payload : {};
    const groups = normalizeStoredFunnelGroups(source.groups || []);
    const funnelsById = new Map();

    (Array.isArray(source.funnels) ? source.funnels : []).forEach((item) => {
      const id = String(item?.id || "").trim();
      if (!id) return;
      funnelsById.set(id, {
        id,
        group_id: String(item?.group_id || item?.groupId || "").trim() || null,
        owner_department_id: String(item?.owner_department_id || item?.ownerDepartmentId || "").trim() || null
      });
    });

    return {
      version: Number(source.version || 1) || 1,
      groups,
      funnels: [...funnelsById.values()].sort((a, b) => String(a.id).localeCompare(String(b.id), "pt-BR"))
    };
  }

  function buildSharedFunnelWorkspaceMetaSnapshot(workspace = state.funnelWorkspace) {
    const normalizedWorkspace = workspace && typeof workspace === "object"
      ? workspace
      : getDefaultFunnelWorkspace();

    const groups = normalizeStoredFunnelGroups(normalizedWorkspace.groups || [])
      .map((group) => {
        const departmentPermissions = getGroupDepartmentPermissions(group);
        return {
          id: group.id,
          name: group.name,
          category: group.category,
          owner_department_id: String(group.owner_department_id || "").trim() || null,
          department_permissions: departmentPermissions,
          department_ids: departmentPermissions.map((item) => item.department_id),
          collapsed: Boolean(group.collapsed),
          created_by: group.created_by || null,
          created_at: group.created_at || null
        };
      })
      .sort((a, b) => (
        String(a.category || "").localeCompare(String(b.category || ""), "pt-BR")
        || String(a.name || "").localeCompare(String(b.name || ""), "pt-BR")
        || String(a.id || "").localeCompare(String(b.id || ""), "pt-BR")
      ));

    const funnels = (Array.isArray(normalizedWorkspace.funnels) ? normalizedWorkspace.funnels : [])
      .filter((funnel) => !isLegacyPlaceholderFunnel(funnel))
      .map((funnel) => ({
        id: String(funnel?.id || "").trim(),
        group_id: String(funnel?.group_id || funnel?.groupId || "").trim() || null,
        owner_department_id: String(
          funnel?.owner_department_id
          || funnel?.ownerDepartmentId
          || getFunnelOfficialDepartmentId(funnel)
          || ""
        ).trim() || null
      }))
      .filter((item) => item.id)
      .sort((a, b) => String(a.id).localeCompare(String(b.id), "pt-BR"));

    return {
      version: 1,
      groups,
      funnels
    };
  }

  function buildSharedFunnelGroupsMetaSnapshot(workspace = state.funnelWorkspace) {
    const snapshot = buildSharedFunnelWorkspaceMetaSnapshot(workspace);
    return {
      version: Number(snapshot.version || 1) || 1,
      groups: normalizeStoredFunnelGroups(snapshot.groups || [])
    };
  }

  function buildSharedFunnelLinksMetaSnapshot(workspace = state.funnelWorkspace) {
    const snapshot = buildSharedFunnelWorkspaceMetaSnapshot(workspace);
    return {
      version: Number(snapshot.version || 1) || 1,
      funnels: Array.isArray(snapshot.funnels) ? snapshot.funnels : []
    };
  }

  function getSharedFunnelWorkspaceMetaSignature(payload = null) {
    return JSON.stringify(normalizeSharedFunnelWorkspaceMeta(
      payload && typeof payload === "object" && ("groups" in payload || "funnels" in payload || "version" in payload)
        ? payload
        : buildSharedFunnelWorkspaceMetaSnapshot(payload)
    ));
  }

  function getSharedFunnelGroupsMetaSignature(payload = null) {
    const normalized = buildSharedFunnelGroupsMetaSnapshot(payload);
    return JSON.stringify(normalized);
  }

  function getSharedFunnelLinksMetaSignature(payload = null) {
    const normalized = buildSharedFunnelLinksMetaSnapshot(payload);
    return JSON.stringify(normalized);
  }

  async function loadSharedFunnelWorkspaceMetaFromSupabase() {
    if (!state.supabase) return null;

    const [legacyRes, groupsRes, linksRes] = await Promise.all([
      state.supabase
        .from("change_history")
        .select("payload, created_at")
        .eq("entity_type", SHARED_FUNNEL_META_ENTITY_TYPE)
        .eq("entity_id", SHARED_FUNNEL_META_ENTITY_ID)
        .order("created_at", { ascending: false })
        .limit(1),
      state.supabase
        .from("change_history")
        .select("payload, created_at")
        .eq("entity_type", SHARED_FUNNEL_GROUPS_ENTITY_TYPE)
        .eq("entity_id", SHARED_FUNNEL_META_ENTITY_ID)
        .order("created_at", { ascending: false })
        .limit(1),
      state.supabase
        .from("change_history")
        .select("payload, created_at")
        .eq("entity_type", SHARED_FUNNEL_LINKS_ENTITY_TYPE)
        .eq("entity_id", SHARED_FUNNEL_META_ENTITY_ID)
        .order("created_at", { ascending: false })
        .limit(1)
    ]);

    const error = legacyRes?.error || groupsRes?.error || linksRes?.error || null;
    if (error) {
      console.error("Erro ao carregar metadados compartilhados dos funis:", error);
      return null;
    }

    const legacyPayload = normalizeSharedFunnelWorkspaceMeta(legacyRes?.data?.[0]?.payload || null);
    const groupsPayload = buildSharedFunnelGroupsMetaSnapshot(groupsRes?.data?.[0]?.payload || null);
    const linksPayload = buildSharedFunnelLinksMetaSnapshot(linksRes?.data?.[0]?.payload || null);
    const payload = normalizeSharedFunnelWorkspaceMeta({
      version: 1,
      groups: (groupsRes?.data?.length ? groupsPayload.groups : legacyPayload.groups) || [],
      funnels: (linksRes?.data?.length ? linksPayload.funnels : legacyPayload.funnels) || []
    });

    return {
      payload,
      signature: getSharedFunnelWorkspaceMetaSignature(payload),
      groupsSignature: getSharedFunnelGroupsMetaSignature({ groups: payload.groups }),
      linksSignature: getSharedFunnelLinksMetaSignature({ funnels: payload.funnels }),
      created_at: groupsRes?.data?.[0]?.created_at || linksRes?.data?.[0]?.created_at || legacyRes?.data?.[0]?.created_at || null
    };
  }

  async function persistSharedFunnelGroupsMetaToSupabase(workspace = state.funnelWorkspace) {
    if (!state.supabase || !state.currentUser) return false;

    const payload = buildSharedFunnelGroupsMetaSnapshot(workspace);
    const signature = getSharedFunnelGroupsMetaSignature(payload);
    if (signature === state.lastSharedFunnelGroupsSignature) return false;

    const row = {
      action: "sync",
      entity_type: SHARED_FUNNEL_GROUPS_ENTITY_TYPE,
      entity_id: SHARED_FUNNEL_META_ENTITY_ID,
      description: "Sincronizou grupos compartilhados dos funis.",
      payload,
      user_id: state.currentUser.id,
      user_name: getUserDisplayName(),
      user_email: state.currentUser.email
    };

    const { error } = await state.supabase.from("change_history").insert([row]);
    if (error) throw error;

    state.lastSharedFunnelGroupsSignature = signature;
    return true;
  }

  async function persistSharedFunnelLinksMetaToSupabase(workspace = state.funnelWorkspace) {
    if (!state.supabase || !state.currentUser) return false;

    const payload = buildSharedFunnelLinksMetaSnapshot(workspace);
    const signature = getSharedFunnelLinksMetaSignature(payload);
    if (signature === state.lastSharedFunnelLinksSignature) return false;

    const row = {
      action: "sync",
      entity_type: SHARED_FUNNEL_LINKS_ENTITY_TYPE,
      entity_id: SHARED_FUNNEL_META_ENTITY_ID,
      description: "Sincronizou vínculos compartilhados dos funis.",
      payload,
      user_id: state.currentUser.id,
      user_name: getUserDisplayName(),
      user_email: state.currentUser.email
    };

    const { error } = await state.supabase.from("change_history").insert([row]);
    if (error) throw error;

    state.lastSharedFunnelLinksSignature = signature;
    return true;
  }

  async function persistSharedFunnelWorkspaceMetaToSupabase(workspace = state.funnelWorkspace) {
    if (!state.supabase || !state.currentUser) return false;

    const payload = buildSharedFunnelWorkspaceMetaSnapshot(workspace);
    const signature = getSharedFunnelWorkspaceMetaSignature(payload);
    if (signature === state.lastSharedFunnelMetaSignature) return false;
    await persistSharedFunnelGroupsMetaToSupabase(payload);
    await persistSharedFunnelLinksMetaToSupabase(payload);
    state.lastSharedFunnelMetaSignature = signature;
    state.historyLoaded = false;
    return true;
  }

  function getFallbackSubfunnelId(workspace = state.funnelWorkspace) {
    return workspace?.funnels?.find((item) => item.category === "B2C")?.subfunnels?.[0]?.id
      || workspace?.funnels?.[0]?.subfunnels?.[0]?.id
      || null;
  }

  function getDefaultAllowedView() {
    if (isViewAllowed("relatorios")) return "relatorios";
    if (isViewAllowed("funil")) return "funil";
    if (isViewAllowed("estrutura")) return "estrutura";
    if (isViewAllowed("leads")) return "leads";
    if (isViewAllowed("equipe")) return "equipe";
    return "relatorios";
  }

  function getFunnelById(funnelId) {
    return state.funnelWorkspace?.funnels?.find((item) => item.id === funnelId) || null;
  }

  function getFunnelsByCategory(category) {
    return getAvailableFunnels().filter((item) => item.category === category);
  }

  function getGroupById(groupId) {
    return state.funnelWorkspace?.groups?.find((item) => item.id === groupId) || null;
  }

  function getDepartmentIdByName(departmentName) {
    const normalizedName = normalizeComparisonText(departmentName);
    return state.departments.find((item) => normalizeComparisonText(item?.name || "") === normalizedName)?.id || null;
  }

  function getCurrentUserDefaultDepartmentId() {
    return getProfileDepartmentIds(state.profile)[0] || null;
  }

  function getDiretoriaDepartmentId() {
    return getDepartmentIdByName("Diretoria");
  }

  function getDefaultDepartmentPermissions(ownerDepartmentId = null) {
    const permissions = [];
    const ownerId = String(ownerDepartmentId || "").trim();
    const diretoriaId = String(getDiretoriaDepartmentId() || "").trim();

    if (ownerId) {
      permissions.push({
        department_id: ownerId,
        access_level: FUNNEL_ACCESS_LEVEL.EDIT
      });
    }

    if (diretoriaId && diretoriaId !== ownerId) {
      permissions.push({
        department_id: diretoriaId,
        access_level: FUNNEL_ACCESS_LEVEL.VIEW
      });
    }

    return normalizeFunnelDepartmentPermissions(permissions);
  }

  function getGroupDepartmentPermissions(group = null) {
    return normalizeFunnelDepartmentPermissions(
      group?.department_permissions
      || group?.departmentPermissions
      || group?.department_ids
      || []
    );
  }

  function getGroupDepartmentIds(group = null) {
    return getGroupDepartmentPermissions(group).map((item) => item.department_id);
  }

  function getFunnelsForGroup(groupId) {
    return getAvailableFunnels().filter((item) => String(item.group_id || "") === String(groupId || ""));
  }

  function getUngroupedFunnelsByCategory(category) {
    return getFunnelsByCategory(category).filter((item) => !item.group_id);
  }

  function ensureDerivedDefaultGroups(groups = [], funnels = []) {
    const nextGroups = Array.isArray(groups) ? [...groups] : [];
    const nextFunnels = Array.isArray(funnels) ? funnels.map((item) => ({ ...item })) : [];
    const salesDepartmentId = getDepartmentIdByName("Vendas");

    ["B2B", "B2C"].forEach((category) => {
      const categoryFunnels = nextFunnels.filter((item) => item.category === category);
      if (!categoryFunnels.length) return;

      let categoryGroup = nextGroups.find((item) =>
        item.category === category
        && getFunnelLabelCompareKey(item.name || "") === getFunnelLabelCompareKey("Vendas")
      ) || null;

      if (!categoryGroup) {
        categoryGroup = {
          id: createFunnelGroupId(),
          name: "Vendas",
          category,
          owner_department_id: salesDepartmentId,
          department_permissions: [],
          department_ids: [],
          collapsed: false,
          created_by: state.currentUser?.id || categoryFunnels[0]?.created_by || null,
          created_at: new Date().toISOString()
        };
        nextGroups.push(categoryGroup);
      }

      nextFunnels.forEach((item) => {
        if (item.category !== category) return;
        if (item.group_id) return;
        item.group_id = categoryGroup.id;
      });
    });

    return { groups: nextGroups, funnels: nextFunnels };
  }

  function getFunnelGroupsByCategory(category) {
    return (state.funnelWorkspace?.groups || [])
      .filter((item) => item.category === category)
      .filter((item) => {
        if (canViewGroupItem(item)) return true;
        return getFunnelsForGroup(item.id).some((funnel) => canViewFunnelItem(funnel));
      })
      .sort((a, b) => String(a.name || "").localeCompare(String(b.name || ""), "pt-BR"));
  }

  function getGroupAccessLevelForProfile(group = null, profile = state.profile) {
    if (!group || !isApprovedUser()) return "";
    if (isDeveloper(profile)) return FUNNEL_ACCESS_LEVEL.EDIT;
    if (hasAdminRole(profile) && hasUnrestrictedDepartmentAccess(profile)) return FUNNEL_ACCESS_LEVEL.EDIT;
    if (String(group.created_by || "") === String(state.currentUser?.id || "")) return FUNNEL_ACCESS_LEVEL.EDIT;

    const departmentIds = getProfileDepartmentIds(profile);
    const ownerDepartmentId = String(group.owner_department_id || "").trim();
    if (ownerDepartmentId && departmentIds.includes(ownerDepartmentId)) {
      return FUNNEL_ACCESS_LEVEL.EDIT;
    }

    const hasEdit = getGroupDepartmentPermissions(group).some((permission) => (
      departmentIds.includes(String(permission.department_id || ""))
      && String(permission.access_level || "").trim().toLowerCase() === FUNNEL_ACCESS_LEVEL.EDIT
    ));
    if (hasEdit) return FUNNEL_ACCESS_LEVEL.EDIT;

    const hasView = getGroupDepartmentPermissions(group).some((permission) => (
      departmentIds.includes(String(permission.department_id || ""))
      && String(permission.access_level || FUNNEL_ACCESS_LEVEL.VIEW).trim().toLowerCase() === FUNNEL_ACCESS_LEVEL.VIEW
    ));
    return hasView ? FUNNEL_ACCESS_LEVEL.VIEW : "";
  }

  function canViewGroupItem(group = null, profile = state.profile) {
    return getGroupAccessLevelForProfile(group, profile) === FUNNEL_ACCESS_LEVEL.VIEW
      || getGroupAccessLevelForProfile(group, profile) === FUNNEL_ACCESS_LEVEL.EDIT;
  }

  function canEditGroupItem(group = null, profile = state.profile) {
    if (!hasAdminRole(profile)) return false;
    return getGroupAccessLevelForProfile(group, profile) === FUNNEL_ACCESS_LEVEL.EDIT;
  }

  function isFunnelDetailActive() {
    return state.activeView === "funil" && !!state.activeSubfunnelId && !!getSubfunnelById(state.activeSubfunnelId);
  }

  function getSubfunnelById(subfunnelId) {
    for (const funnel of state.funnelWorkspace?.funnels || []) {
      const subfunnel = funnel.subfunnels?.find((item) => item.id === subfunnelId);
      if (subfunnel) {
        return { ...subfunnel, funnel_id: funnel.id, funnel_name: funnel.name, category: funnel.category };
      }
    }
    return null;
  }

  function getSubfunnelsForFunnel(funnelId) {
    return getFunnelById(funnelId)?.subfunnels || [];
  }

  function getStageScope(stageId) {
    const subfunnelId = String(state.funnelWorkspace?.stageAssignments?.[stageId] || "").trim() || null;
    const subfunnel = getSubfunnelById(subfunnelId);
    const funnel = getFunnelById(subfunnel?.funnel_id || "");
    const group = funnel?.group_id ? getGroupById(funnel.group_id) : null;
    return { subfunnelId, subfunnel, funnel, group };
  }

  function getFunnelsByCategory(category) {
    return (state.funnelWorkspace?.funnels || [])
      .filter((funnel) => !category || String(funnel.category || "") === String(category))
      .sort((a, b) => String(a.name || "").localeCompare(String(b.name || ""), "pt-BR"));
  }

  function getStageDuplicateGroupOptions(category) {
    const funnels = getFunnelsByCategory(category);
    const groups = [];
    const seen = new Set();
    let hasUngrouped = false;

    funnels.forEach((funnel) => {
      const groupId = String(funnel.group_id || "").trim();
      if (!groupId) {
        hasUngrouped = true;
        return;
      }
      if (seen.has(groupId)) return;
      const group = getGroupById(groupId);
      if (!group) return;
      seen.add(groupId);
      groups.push(group);
    });

    groups.sort((a, b) => String(a.name || "").localeCompare(String(b.name || ""), "pt-BR"));

    return [
      ...(hasUngrouped ? [{ id: FUNNEL_UNGROUPED_OPTION, name: "Sem grupo" }] : []),
      ...groups
    ];
  }

  function getFunnelsByDuplicateGroup(category, groupId) {
    return getFunnelsByCategory(category).filter((funnel) => {
      const currentGroupId = String(funnel.group_id || "").trim();
      if (groupId === FUNNEL_UNGROUPED_OPTION) return !currentGroupId;
      return currentGroupId === String(groupId || "").trim();
    });
  }

  function getStagesForSubfunnel(subfunnelId) {
    if (!subfunnelId) return [];
    return state.stages
      .filter((stage) => state.funnelWorkspace?.stageAssignments?.[stage.id] === subfunnelId)
      .sort((a, b) => {
        const positionA = Number(a?.position);
        const positionB = Number(b?.position);
        const safePositionA = Number.isFinite(positionA) ? positionA : Number.MAX_SAFE_INTEGER;
        const safePositionB = Number.isFinite(positionB) ? positionB : Number.MAX_SAFE_INTEGER;
        if (safePositionA !== safePositionB) return safePositionA - safePositionB;
        return String(a?.id || "").localeCompare(String(b?.id || ""));
      });
  }

  function getVisibleStagesForSubfunnel(subfunnelId) {
    const scopedStages = getStagesForSubfunnel(subfunnelId);
    const leadCountByStageId = new Map();
    state.leads.forEach((lead) => {
      leadCountByStageId.set(lead.stage_id, (leadCountByStageId.get(lead.stage_id) || 0) + 1);
    });

    const visibleStages = [];
    const seenStageNames = new Map();
    scopedStages.forEach((stage) => {
      const stageKey = normalizeComparisonText(stage.name || "");
      const leadCount = leadCountByStageId.get(stage.id) || 0;
      const previousStage = seenStageNames.get(stageKey);

      if (!previousStage) {
        seenStageNames.set(stageKey, { id: stage.id, leadCount });
        visibleStages.push(stage);
        return;
      }

      if (leadCount > 0 && previousStage.leadCount === 0) {
        const replaceIndex = visibleStages.findIndex((item) => item.id === previousStage.id);
        if (replaceIndex >= 0) visibleStages.splice(replaceIndex, 1, stage);
        seenStageNames.set(stageKey, { id: stage.id, leadCount });
      }
    });

    return visibleStages;
  }

  function getFirstStageForSubfunnel(subfunnelId) {
    return getStagesForSubfunnel(subfunnelId)[0] || null;
  }

  function getLeadsForSubfunnel(subfunnelId) {
    if (!subfunnelId) return [];
    return state.leads.filter((lead) => getLeadSubfunnelId(lead) === subfunnelId);
  }

  function getPipelineCountForSubfunnel(subfunnelId) {
    return getVisibleStagesForSubfunnel(subfunnelId).length;
  }

  function getLeadCountForSubfunnel(subfunnelId) {
    return getLeadsForSubfunnel(subfunnelId).length;
  }

  function getAvailableFunnels() {
    return (state.funnelWorkspace?.funnels || []).filter((item) => canViewFunnelItem(item));
  }

  function isLeadHiddenRestrictedFunnel(funnel = null) {
    if (!funnel) return false;
    const normalizedName = normalizeComparisonText(funnel.name || "");
    if (/(gestao|gestão|diretoria|directoria|diretoria)/.test(normalizedName)) {
      return true;
    }
    const departmentNames = getFunnelDepartmentPermissions(funnel)
      .map((permission) => normalizeComparisonText(getDepartmentNameById(permission.department_id)))
      .filter(Boolean);
    return departmentNames.some((name) => /(gestao|gestão|diretoria|directoria|diretoria)/.test(name));
  }

  function getLeadSelectableFunnels() {
    return (state.funnelWorkspace?.funnels || []).filter((funnel) => {
      if (canViewFunnelItem(funnel)) return true;
      return !isLeadHiddenRestrictedFunnel(funnel);
    });
  }

  function canSelectDetailedLeadTarget(funnel = null) {
    return Boolean(funnel) && canViewFunnelItem(funnel);
  }

  function getLeadSubfunnelId(lead) {
    if (!lead) return null;
    return state.funnelWorkspace?.leadAssignments?.[lead.id]
      || state.funnelWorkspace?.stageAssignments?.[lead.stage_id]
      || null;
  }

  function getLeadFunnelId(lead) {
    const subfunnelId = getLeadSubfunnelId(lead);
    return getSubfunnelById(subfunnelId)?.funnel_id || null;
  }

  function syncStructureSelection() {
    const funnels = getAvailableFunnels();
    const selectedFunnel = funnels.find((item) => item.id === state.structureFunnelId)
      || funnels.find((item) => item.id === state.activeFunnelId)
      || funnels[0]
      || null;

    state.structureFunnelId = selectedFunnel?.id || null;

    const subfunnels = selectedFunnel?.subfunnels || [];
    const selectedSubfunnel = subfunnels.find((item) => item.id === state.structureSubfunnelId)
      || subfunnels.find((item) => item.id === state.activeSubfunnelId)
      || subfunnels[0]
      || null;

    state.structureSubfunnelId = selectedSubfunnel?.id || null;
  }

  function renderStructureSelectors() {
    if (!els.structureFunnelSelect || !els.structureSubfunnelSelect) return;
    syncStructureSelection();

    const funnels = getAvailableFunnels();
    els.structureFunnelSelect.innerHTML = funnels.map((funnel) => `
      <option value="${funnel.id}" ${funnel.id === state.structureFunnelId ? "selected" : ""}>${escapeHtml(funnel.name)} (${escapeHtml(funnel.category)})</option>
    `).join("");

    const subfunnels = getSubfunnelsForFunnel(state.structureFunnelId);
    els.structureSubfunnelSelect.innerHTML = subfunnels.map((subfunnel) => `
      <option value="${subfunnel.id}" ${subfunnel.id === state.structureSubfunnelId ? "selected" : ""}>${escapeHtml(subfunnel.name)}</option>
    `).join("");
    syncBrandedSelects();
  }

  function getStructureFilteredStages() {
    syncStructureSelection();
    if (!state.structureSubfunnelId) return [];
    return state.stages.filter((stage) => state.funnelWorkspace?.stageAssignments?.[stage.id] === state.structureSubfunnelId);
  }

  function renderStageModalScopeSelectors(selectedSubfunnelId = null) {
    if (!els.stageFunnelSelect || !els.stageSubfunnelSelect) return;

    const fallbackSubfunnelId = selectedSubfunnelId || state.activeSubfunnelId || state.structureSubfunnelId || getFallbackSubfunnelId();
    const fallbackSubfunnel = getSubfunnelById(fallbackSubfunnelId);
    const fallbackFunnelId = fallbackSubfunnel?.funnel_id || state.activeFunnelId || state.structureFunnelId || getAvailableFunnels()[0]?.id || null;

    const funnels = getAvailableFunnels();
    els.stageFunnelSelect.innerHTML = funnels.map((funnel) => `
      <option value="${funnel.id}" ${funnel.id === fallbackFunnelId ? "selected" : ""}>${escapeHtml(funnel.name)} (${escapeHtml(funnel.category)})</option>
    `).join("");

    const subfunnels = getSubfunnelsForFunnel(fallbackFunnelId);
    const resolvedSubfunnelId = subfunnels.find((item) => item.id === fallbackSubfunnelId)?.id || subfunnels[0]?.id || "";
    els.stageSubfunnelSelect.innerHTML = subfunnels.map((subfunnel) => `
      <option value="${subfunnel.id}" ${subfunnel.id === resolvedSubfunnelId ? "selected" : ""}>${escapeHtml(subfunnel.name)}</option>
    `).join("");
    syncBrandedSelects();
  }

  function getScopedStages() {
    if (!isFunnelDetailActive()) {
      if (hasUnrestrictedDepartmentAccess(state.profile)) return state.stages;
      return state.stages.filter((stage) => {
        const subfunnelId = state.funnelWorkspace?.stageAssignments?.[stage.id];
        const funnelId = getSubfunnelById(subfunnelId)?.funnel_id;
        return funnelId && canViewFunnelItem(getFunnelById(funnelId));
      });
    }
    if (!canViewFunnelItem(getFunnelById(getSubfunnelById(state.activeSubfunnelId)?.funnel_id))) return [];
    return getVisibleStagesForSubfunnel(state.activeSubfunnelId);
  }

  function getScopedLeads() {
    if (!isFunnelDetailActive()) {
      if (hasUnrestrictedDepartmentAccess(state.profile)) return state.leads;
      return state.leads.filter((lead) => {
        const funnelId = getLeadFunnelId(lead);
        return funnelId && canViewFunnelItem(getFunnelById(funnelId));
      });
    }
    if (!canViewFunnelItem(getFunnelById(getSubfunnelById(state.activeSubfunnelId)?.funnel_id))) return [];
    const validStageIds = new Set(getScopedStages().map((stage) => stage.id));
    return state.leads.filter((lead) => {
      return state.funnelWorkspace?.leadAssignments?.[lead.id] === state.activeSubfunnelId && validStageIds.has(lead.stage_id);
    });
  }

  function buildRemoteFunnelWorkspace(rows = {}) {
    const funnelRows = Array.isArray(rows.funnels) ? rows.funnels : [];
    const subfunnelRows = stabilizeTransientSubfunnelRows(Array.isArray(rows.subfunnels) ? rows.subfunnels : []);
    const permissionRows = Array.isArray(rows.permissions) ? rows.permissions : [];
    const stageAssignmentRows = Array.isArray(rows.stageAssignments) ? rows.stageAssignments : [];
    const leadAssignmentRows = Array.isArray(rows.leadAssignments) ? rows.leadAssignments : [];
    const stageReminderRows = Array.isArray(rows.stageReminders) ? rows.stageReminders : [];
    const sharedMeta = normalizeSharedFunnelWorkspaceMeta(rows.sharedMeta || null);
    const sharedMetaFunnelsById = new Map((sharedMeta.funnels || []).map((item) => [String(item.id || ""), item]));

    const permissionsByFunnel = new Map();
    permissionRows.forEach((row) => {
      const funnelId = String(row.funnel_id || "");
      if (!funnelId) return;
      if (!permissionsByFunnel.has(funnelId)) permissionsByFunnel.set(funnelId, []);
      permissionsByFunnel.get(funnelId).push({
        department_id: String(row.department_id || ""),
        access_level: String(row.access_level || FUNNEL_ACCESS_LEVEL.EDIT).trim().toLowerCase()
      });
    });

    const subfunnelsByFunnel = new Map();
    subfunnelRows.forEach((row) => {
      const funnelId = String(row.funnel_id || "");
      if (!funnelId) return;
      if (!subfunnelsByFunnel.has(funnelId)) subfunnelsByFunnel.set(funnelId, []);
      subfunnelsByFunnel.get(funnelId).push({
        id: row.id || createSubfunnelId(),
        name: String(row.name || "").trim(),
        position: Number(row.position || 0)
      });
    });

    const funnels = funnelRows
      .filter((row) => !row.archived_at)
      .sort((a, b) => String(a.name || "").localeCompare(String(b.name || ""), "pt-BR"))
      .map((row) => {
        const funnelId = String(row.id || "");
        const departmentPermissions = normalizeFunnelDepartmentPermissions(permissionsByFunnel.get(funnelId) || []);
        const sharedMetaFunnel = sharedMetaFunnelsById.get(funnelId) || null;
        const fallbackOwnerDepartmentId = String(
          departmentPermissions.find((item) => item.access_level === FUNNEL_ACCESS_LEVEL.EDIT)?.department_id || ""
        ).trim() || null;

        return {
          id: row.id || createFunnelId(),
          name: String(row.name || "Novo funil").trim(),
          category: FUNNEL_CATEGORIES.includes(String(row.category || "").trim()) ? String(row.category).trim() : "B2C",
          group_id: String(sharedMetaFunnel?.group_id || row.group_id || "").trim() || null,
          owner_department_id: String(
            sharedMetaFunnel?.owner_department_id
            || row.owner_department_id
            || fallbackOwnerDepartmentId
            || ""
          ).trim() || null,
          visibility_scope: String(row.visibility_scope || "all"),
          visibility_access_level: getFunnelGlobalAccessLevelValue(row.visibility_access_level || FUNNEL_ACCESS_LEVEL.VIEW),
          department_permissions: departmentPermissions,
          department_ids: departmentPermissions.map((item) => item.department_id),
          created_by: row.created_by || null,
          created_at: row.created_at || new Date().toISOString(),
          is_default: false,
          subfunnels: (subfunnelsByFunnel.get(funnelId) || [])
            .sort((a, b) => {
              const positionA = Number(a?.position);
              const positionB = Number(b?.position);
              const safePositionA = Number.isFinite(positionA) ? positionA : Number.MAX_SAFE_INTEGER;
              const safePositionB = Number.isFinite(positionB) ? positionB : Number.MAX_SAFE_INTEGER;
              if (safePositionA !== safePositionB) return safePositionA - safePositionB;
              return String(a?.id || "").localeCompare(String(b?.id || ""));
            })
            .map((item) => ({ id: item.id, name: item.name }))
        };
      });

    const stageAssignments = {};
    stageAssignmentRows.forEach((row) => {
      if (row?.stage_id && row?.subfunnel_id) {
        stageAssignments[row.stage_id] = row.subfunnel_id;
      }
    });

    const leadAssignments = {};
    leadAssignmentRows.forEach((row) => {
      if (row?.lead_id && row?.subfunnel_id) {
        leadAssignments[row.lead_id] = row.subfunnel_id;
      }
    });

    const stageReminderConfigs = {};
    stageReminderRows.forEach((row) => {
      const stageId = String(row?.stage_id || "").trim();
      const normalizedConfig = normalizeStageReminderConfig({
        days: row?.days,
        message: row?.message || ""
      });
      if (!stageId || !normalizedConfig) return;
      stageReminderConfigs[stageId] = normalizedConfig;
    });

    return {
      groups: sharedMeta.groups || [],
      funnels,
      stageAssignments,
      leadAssignments,
      stageReminderConfigs
    };
  }

  async function loadFunnelWorkspaceFromSupabase() {
    const [funnelsRes, subfunnelsRes, permissionsRes, stageAssignmentsRes, leadAssignmentsRes, stageRemindersRes, sharedMetaRes] = await Promise.all([
      state.supabase.from("crm_funnels").select("*").is("archived_at", null).order("created_at", { ascending: true }),
      state.supabase.from("crm_subfunnels").select("*").order("position", { ascending: true }),
      state.supabase.from("crm_funnel_department_permissions").select("*"),
      state.supabase.from("crm_stage_subfunnel_assignments").select("*"),
      state.supabase.from("crm_lead_subfunnel_assignments").select("*"),
      state.supabase.from("crm_stage_reminder_configs").select("*"),
      loadSharedFunnelWorkspaceMetaFromSupabase()
    ]);

    const responses = [funnelsRes, subfunnelsRes, permissionsRes, stageAssignmentsRes, leadAssignmentsRes, stageRemindersRes];
    const blockingError = responses.find((response) => response?.error && !isMissingRelationError(response.error))?.error || null;
    if (blockingError) {
      console.error("Erro ao carregar workspace de funis:", blockingError);
      state.funnelDataLoadedFromSupabase = false;
      return null;
    }

    const hasSchema = responses.some((response) => Array.isArray(response?.data));
    if (!hasSchema) {
      state.funnelDataLoadedFromSupabase = false;
      return null;
    }

    state.funnelDataLoadedFromSupabase = true;
    state.lastSharedFunnelMetaSignature = sharedMetaRes?.signature || "";
    state.lastSharedFunnelGroupsSignature = sharedMetaRes?.groupsSignature || "";
    state.lastSharedFunnelLinksSignature = sharedMetaRes?.linksSignature || "";
    return buildRemoteFunnelWorkspace({
      funnels: funnelsRes.data || [],
      subfunnels: subfunnelsRes.data || [],
      permissions: permissionsRes.data || [],
      stageAssignments: stageAssignmentsRes.data || [],
      leadAssignments: leadAssignmentsRes.data || [],
      stageReminders: isMissingRelationError(stageRemindersRes?.error) ? [] : (stageRemindersRes.data || []),
      sharedMeta: sharedMetaRes?.payload || null
    });
  }

  function dedupeFunnelWorkspace(funnels = [], stageAssignments = {}, leadAssignments = {}) {
    const nextStageAssignments = { ...(stageAssignments || {}) };
    const nextLeadAssignments = { ...(leadAssignments || {}) };

    const getSubfunnelSignal = (subfunnelId) => {
      const stageCount = Object.values(nextStageAssignments).filter((value) => value === subfunnelId).length;
      const leadCount = Object.values(nextLeadAssignments).filter((value) => value === subfunnelId).length;
      return { score: (stageCount * 10000) + leadCount, stageCount, leadCount };
    };

    const dedupeSubfunnelsInFunnel = (funnel) => {
      const duplicateMap = new Map();
      const uniqueSubfunnels = [];
      const subfunnelByKey = new Map();

      (funnel.subfunnels || []).forEach((subfunnel) => {
        const currentSubfunnel = {
          ...subfunnel,
          name: getPreferredFunnelLabel(subfunnel.name || "") || String(subfunnel.name || "").trim()
        };
        const compareKey = getFunnelLabelCompareKey(currentSubfunnel.name);

        if (!compareKey) {
          uniqueSubfunnels.push(currentSubfunnel);
          return;
        }

        const existingSubfunnel = subfunnelByKey.get(compareKey);
        if (!existingSubfunnel) {
          subfunnelByKey.set(compareKey, currentSubfunnel);
          uniqueSubfunnels.push(currentSubfunnel);
          return;
        }

        const currentSignal = getSubfunnelSignal(currentSubfunnel.id);
        const existingSignal = getSubfunnelSignal(existingSubfunnel.id);
        const keepCurrent = currentSignal.score > existingSignal.score;
        const targetSubfunnel = keepCurrent ? currentSubfunnel : existingSubfunnel;
        const sourceSubfunnel = keepCurrent ? existingSubfunnel : currentSubfunnel;

        targetSubfunnel.name = getPreferredFunnelLabel(targetSubfunnel.name, sourceSubfunnel.name);
        duplicateMap.set(sourceSubfunnel.id, targetSubfunnel.id);

        if (keepCurrent) {
          const replaceIndex = uniqueSubfunnels.findIndex((item) => item.id === existingSubfunnel.id);
          if (replaceIndex >= 0) uniqueSubfunnels.splice(replaceIndex, 1, currentSubfunnel);
          subfunnelByKey.set(compareKey, currentSubfunnel);
        }
      });

      Object.keys(nextStageAssignments).forEach((stageId) => {
        const replacementId = duplicateMap.get(nextStageAssignments[stageId]);
        if (replacementId) nextStageAssignments[stageId] = replacementId;
      });

      Object.keys(nextLeadAssignments).forEach((leadId) => {
        const replacementId = duplicateMap.get(nextLeadAssignments[leadId]);
        if (replacementId) nextLeadAssignments[leadId] = replacementId;
      });

      return {
        ...funnel,
        name: getPreferredFunnelLabel(funnel.name || "") || String(funnel.name || "").trim(),
        subfunnels: uniqueSubfunnels
      };
    };

    const normalizedFunnels = (Array.isArray(funnels) ? funnels : []).map(dedupeSubfunnelsInFunnel);
    const groupedFunnels = new Map();
    const nextFunnels = [];

    normalizedFunnels.forEach((funnel) => {
      const compareKey = [
        String(funnel.category || "").trim(),
        String(funnel.group_id || "").trim(),
        getFunnelLabelCompareKey(funnel.name || "")
      ].join("|");

      const funnelSignal = (funnel.subfunnels || []).reduce((sum, subfunnel) => sum + getSubfunnelSignal(subfunnel.id).score, 0);
      const existing = groupedFunnels.get(compareKey);
      if (!existing) {
        groupedFunnels.set(compareKey, { funnel, score: funnelSignal });
        nextFunnels.push(funnel);
        return;
      }

      const keepIncoming = funnelSignal > existing.score;
      const targetFunnel = keepIncoming ? funnel : existing.funnel;
      const sourceFunnel = keepIncoming ? existing.funnel : funnel;

      const targetSubfunnelMap = new Map(
        (targetFunnel.subfunnels || []).map((subfunnel) => [getFunnelLabelCompareKey(subfunnel.name || ""), subfunnel])
      );

      (sourceFunnel.subfunnels || []).forEach((subfunnel) => {
        const key = getFunnelLabelCompareKey(subfunnel.name || "");
        const matchedTarget = targetSubfunnelMap.get(key);
        if (matchedTarget) {
          const matchedSignal = getSubfunnelSignal(matchedTarget.id);
          const sourceSignal = getSubfunnelSignal(subfunnel.id);
          const targetSubfunnel = sourceSignal.score > matchedSignal.score ? subfunnel : matchedTarget;
          const sourceSubfunnel = sourceSignal.score > matchedSignal.score ? matchedTarget : subfunnel;

          targetSubfunnel.name = getPreferredFunnelLabel(targetSubfunnel.name, sourceSubfunnel.name);
          Object.keys(nextStageAssignments).forEach((stageId) => {
            if (nextStageAssignments[stageId] === sourceSubfunnel.id) nextStageAssignments[stageId] = targetSubfunnel.id;
          });
          Object.keys(nextLeadAssignments).forEach((leadId) => {
            if (nextLeadAssignments[leadId] === sourceSubfunnel.id) nextLeadAssignments[leadId] = targetSubfunnel.id;
          });

          if (sourceSignal.score > matchedSignal.score && targetFunnel !== sourceFunnel) {
            const targetIndex = targetFunnel.subfunnels.findIndex((item) => item.id === matchedTarget.id);
            if (targetIndex >= 0) targetFunnel.subfunnels.splice(targetIndex, 1, subfunnel);
            targetSubfunnelMap.set(key, subfunnel);
          }
          return;
        }

        appendSubfunnelToFunnelLocally(targetFunnel, subfunnel);
        targetSubfunnelMap.set(key, subfunnel);
      });

      targetFunnel.name = getPreferredFunnelLabel(targetFunnel.name, sourceFunnel.name);
      targetFunnel.group_id = targetFunnel.group_id || sourceFunnel.group_id || null;

      if (keepIncoming) {
        const index = nextFunnels.findIndex((item) => item.id === existing.funnel.id);
        if (index >= 0) nextFunnels.splice(index, 1, targetFunnel);
        groupedFunnels.set(compareKey, { funnel: targetFunnel, score: funnelSignal });
      } else {
        groupedFunnels.set(compareKey, { funnel: targetFunnel, score: existing.score });
      }
    });

    return {
      funnels: nextFunnels,
      stageAssignments: nextStageAssignments,
      leadAssignments: nextLeadAssignments
    };
  }

  function findWorkspaceGroupByName(category, groupName) {
    const normalizedCategory = String(category || "").trim();
    const normalizedGroupName = getFunnelLabelCompareKey(groupName);
    return (state.funnelWorkspace?.groups || []).find((group) =>
      group.category === normalizedCategory
      && getFunnelLabelCompareKey(group.name || "") === normalizedGroupName
    ) || null;
  }

  function findWorkspaceFunnel(category, groupName, funnelName) {
    const normalizedCategory = String(category || "").trim();
    const normalizedFunnelName = getFunnelLabelCompareKey(funnelName);
    const normalizedGroupName = getFunnelLabelCompareKey(groupName);

    return (state.funnelWorkspace?.funnels || []).find((funnel) => {
      if (funnel.category !== normalizedCategory) return false;
      if (getFunnelLabelCompareKey(funnel.name || "") !== normalizedFunnelName) return false;
      const group = funnel.group_id ? getGroupById(funnel.group_id) : null;
      return getFunnelLabelCompareKey(group?.name || "") === normalizedGroupName;
    }) || null;
  }

  function findWorkspaceFunnelByName(category, funnelName) {
    const normalizedCategory = String(category || "").trim();
    const normalizedFunnelName = getFunnelLabelCompareKey(funnelName);
    return (state.funnelWorkspace?.funnels || []).find((funnel) =>
      funnel.category === normalizedCategory
      && getFunnelLabelCompareKey(funnel.name || "") === normalizedFunnelName
    ) || null;
  }

  function findSubfunnelInFunnelByName(funnel, subfunnelName) {
    const normalizedSubfunnelName = getFunnelLabelCompareKey(subfunnelName);
    return funnel?.subfunnels?.find((subfunnel) =>
      getFunnelLabelCompareKey(subfunnel.name || "") === normalizedSubfunnelName
    ) || null;
  }

  function findSourceFunnelRouteTemplate() {
    const candidates = (state.funnelWorkspace?.funnels || [])
      .filter((funnel) => normalizeComparisonText(funnel.name || "") === "redes sociais")
      .map((funnel) => {
        const subfunnel = (funnel.subfunnels || []).find((item) => normalizeComparisonText(item.name || "") === "apresentacao") || null;
        const group = funnel.group_id ? getGroupById(funnel.group_id) : null;
        return { funnel, subfunnel, group };
      })
      .filter((item) => item.subfunnel);

    if (!candidates.length) return null;

    candidates.sort((a, b) => {
      const aGroupScore = normalizeComparisonText(a.group?.name || "") === "vendas" ? 0 : 1;
      const bGroupScore = normalizeComparisonText(b.group?.name || "") === "vendas" ? 0 : 1;
      const aCategoryScore = a.funnel.category === "B2C" ? 0 : 1;
      const bCategoryScore = b.funnel.category === "B2C" ? 0 : 1;
      return aGroupScore - bGroupScore
        || aCategoryScore - bCategoryScore
        || String(a.funnel.name || "").localeCompare(String(b.funnel.name || ""), "pt-BR");
    });

    return candidates[0];
  }

  function ensureWorkspaceGroup(category, groupName, template = null) {
    const existingGroup = findWorkspaceGroupByName(category, groupName);
    if (existingGroup) return existingGroup;

    const ownerDepartmentId = String(
      template?.group?.owner_department_id
      || getFunnelOfficialDepartmentId(template?.funnel)
      || ""
    ).trim() || null;
    const departmentPermissions = normalizeFunnelDepartmentPermissions(
      template?.group?.department_permissions
      || template?.group?.department_ids
      || template?.funnel?.department_permissions
      || template?.funnel?.department_ids
      || []
    );

    const nextGroup = {
      id: createFunnelGroupId(),
      name: String(groupName || "").trim() || "Novo grupo",
      category: String(category || "B2C").trim(),
      owner_department_id: ownerDepartmentId,
      department_permissions: departmentPermissions,
      department_ids: departmentPermissions.map((item) => item.department_id),
      collapsed: false,
      created_by: template?.group?.created_by || template?.funnel?.created_by || state.currentUser?.id || null,
      created_at: new Date().toISOString()
    };

    return upsertFunnelGroupLocally(nextGroup);
  }

  function ensureWorkspaceFunnel(category, groupName, funnelName, template = null) {
    const existingFunnel = findWorkspaceFunnel(category, groupName, funnelName) || findWorkspaceFunnelByName(category, funnelName);
    if (existingFunnel) return existingFunnel;

    const group = ensureWorkspaceGroup(category, groupName, template);
    const ownerDepartmentId = String(
      template?.funnel?.owner_department_id
      || template?.funnel?.ownerDepartmentId
      || getFunnelOfficialDepartmentId(template?.funnel)
      || ""
    ).trim() || null;
    const departmentPermissions = normalizeFunnelDepartmentPermissions(
      template?.funnel?.department_permissions
      || template?.funnel?.department_ids
      || []
    );
    const nextFunnel = {
      id: createFunnelId(),
      name: String(funnelName || "").trim() || "Novo funil",
      category: String(category || "B2C").trim(),
      group_id: group?.id || null,
      owner_department_id: ownerDepartmentId,
      visibility_scope: String(template?.funnel?.visibility_scope || "all").trim() || "all",
      visibility_access_level: getFunnelGlobalAccessLevelValue(template?.funnel?.visibility_access_level || FUNNEL_ACCESS_LEVEL.VIEW),
      department_permissions: departmentPermissions,
      department_ids: departmentPermissions.map((item) => item.department_id),
      created_by: template?.funnel?.created_by || state.currentUser?.id || null,
      subfunnels: [],
      created_at: new Date().toISOString(),
      is_default: false
    };

    return upsertFunnelLocally(nextFunnel);
  }

  function ensureWorkspaceSubfunnel(funnel, subfunnelName) {
    const existingSubfunnel = findSubfunnelInFunnelByName(funnel, subfunnelName);
    if (existingSubfunnel) return existingSubfunnel;

    const nextSubfunnel = {
      id: createSubfunnelId(),
      name: getPreferredFunnelLabel(subfunnelName || "") || "Subfunil 1"
    };

    return appendSubfunnelToFunnelLocally(funnel, nextSubfunnel);
  }

  async function cloneStagesIntoSubfunnel(sourceSubfunnelId, targetSubfunnelId) {
    const existingTargetStages = getStagesForSubfunnel(targetSubfunnelId);
    if (existingTargetStages.length) return existingTargetStages;

    const sourceStages = getStagesForSubfunnel(sourceSubfunnelId);
    if (!sourceStages.length) {
      throw new Error("Não foi possível localizar as pipelines do subfunil fonte.");
    }

    const insertedStages = [];
    const basePosition = state.stages.length;

    for (let index = 0; index < sourceStages.length; index += 1) {
      const sourceStage = sourceStages[index];
      const payload = {
        name: sourceStage.name,
        color: sanitizeHexColor(sourceStage.color),
        stage_type: sourceStage.stage_type || "andamento",
        custom_stage_type: sourceStage.custom_stage_type || null,
        position: basePosition + index,
        created_by: state.currentUser?.id || sourceStage.created_by || null
      };

      const { data, error } = await state.supabase.from("stages").insert([payload]).select().single();
      if (error) {
        throw new Error(`Erro ao replicar pipeline "${sourceStage.name}": ${error.message}`);
      }

      const normalizedStage = upsertStageLocally(data);
      insertedStages.push(normalizedStage);
      state.funnelWorkspace.stageAssignments[normalizedStage.id] = targetSubfunnelId;
    }

    return insertedStages;
  }

  async function moveLeadsToTargetSubfunnel(leads, targetSubfunnelId, targetStages) {
    if (!Array.isArray(leads) || !leads.length || !targetSubfunnelId || !targetStages.length) return 0;

    const stageNameMap = new Map(
      targetStages.map((stage) => [normalizeComparisonText(stage.name || ""), stage])
    );
    const stageBuckets = new Map();

    leads.forEach((lead) => {
      const currentStage = state.stages.find((stage) => stage.id === lead.stage_id) || null;
      const targetStage = stageNameMap.get(normalizeComparisonText(currentStage?.name || "")) || targetStages[0];
      if (!targetStage?.id) return;

      if (!stageBuckets.has(targetStage.id)) stageBuckets.set(targetStage.id, []);
      stageBuckets.get(targetStage.id).push(lead.id);
      state.funnelWorkspace.leadAssignments[lead.id] = targetSubfunnelId;
    });

    for (const [stageId, leadIds] of stageBuckets.entries()) {
      for (const chunk of chunkArray(leadIds, 200)) {
        const { error } = await state.supabase
          .from("leads")
          .update({ stage_id: stageId })
          .in("id", chunk);

        if (error) {
          throw new Error(`Erro ao mover leads para a pipeline destino: ${error.message}`);
        }
      }
      updateLeadsLocallyByIds(leadIds, (lead) => ({
        ...lead,
        stage_id: stageId
      }));
    }

    return leads.length;
  }

  function isIndicacaoRouteLead(lead) {
    const trafficType = normalizeComparisonText(lead?.traffic_type || "");
    const socialSource = normalizeComparisonText(lead?.social_source || "");
    return trafficType === "indicacao"
      || socialSource === "indicacao"
      || socialSource === "indicacao colaborador";
  }

  function isB2BExternalEventLead(lead) {
    const socialSource = normalizeComparisonText(lead?.social_source || "");
    return ["acim", "cdl", "sudoexpo"].includes(socialSource);
  }

  function isB2CExternalEventLead(lead) {
    if (isIndicacaoRouteLead(lead) || isB2BExternalEventLead(lead)) return false;
    const trafficType = normalizeComparisonText(lead?.traffic_type || "");
    const socialSource = normalizeComparisonText(lead?.social_source || "");
    return trafficType === "acao externa" || trafficType === "evento externo" || socialSource.includes("otovive");
  }

  async function ensureFunnelRouteMigration() {
    if (readStoredFunnelRouteMigrationDone()) return false;
    if (!state.supabase || !state.funnelWorkspace?.funnels?.length) return false;

    const sourceTemplate = findSourceFunnelRouteTemplate();
    if (!sourceTemplate?.funnel || !sourceTemplate?.subfunnel) {
      console.warn("Migração de funis ignorada: origem Vendas > Redes Sociais > Apresentação não encontrada.");
      return false;
    }

    const sourceSubfunnelName = String(sourceTemplate.subfunnel.name || "").trim() || "Apresentação";
    const targets = [
      {
        category: "B2C",
        groupName: "Vendas",
        funnelName: "Indicação",
        subfunnelName: sourceSubfunnelName,
        leads: state.leads.filter((lead) => isIndicacaoRouteLead(lead))
      },
      {
        category: "B2B",
        groupName: "Vendas",
        funnelName: "Ações Externas",
        subfunnelName: sourceSubfunnelName,
        leads: state.leads.filter((lead) => isB2BExternalEventLead(lead))
      },
      {
        category: "B2B",
        groupName: "Vendas",
        funnelName: "Redes Sociais",
        subfunnelName: sourceSubfunnelName,
        leads: []
      },
      {
        category: "B2C",
        groupName: "Vendas",
        funnelName: "Ações Externas",
        subfunnelName: sourceSubfunnelName,
        leads: state.leads.filter((lead) => isB2CExternalEventLead(lead))
      }
    ];

    let workspaceChanged = false;
    let movedLeadCount = 0;

    for (const target of targets) {
      const funnelExistedBefore = Boolean(findWorkspaceFunnel(target.category, target.groupName, target.funnelName));
      const targetFunnel = ensureWorkspaceFunnel(target.category, target.groupName, target.funnelName, sourceTemplate);
      const subfunnelExistedBefore = Boolean(findSubfunnelInFunnelByName(targetFunnel, target.subfunnelName));
      const targetSubfunnel = ensureWorkspaceSubfunnel(targetFunnel, target.subfunnelName);
      const stagesExistedBefore = getStagesForSubfunnel(targetSubfunnel.id).length > 0;

      if (!funnelExistedBefore || !subfunnelExistedBefore) {
        workspaceChanged = true;
      }

      if (!stagesExistedBefore) {
        const clonedStages = await cloneStagesIntoSubfunnel(sourceTemplate.subfunnel.id, targetSubfunnel.id);
        if (clonedStages.length) workspaceChanged = true;
      }

      const targetStageIds = new Set(getStagesForSubfunnel(targetSubfunnel.id).map((stage) => stage.id));
      const leadsNeedingMove = target.leads.filter((lead) => {
        const assignedSubfunnelId = state.funnelWorkspace?.leadAssignments?.[lead.id]
          || state.funnelWorkspace?.stageAssignments?.[lead.stage_id]
          || null;
        return assignedSubfunnelId !== targetSubfunnel.id || !targetStageIds.has(lead.stage_id);
      });

      if (leadsNeedingMove.length) {
        movedLeadCount += await moveLeadsToTargetSubfunnel(leadsNeedingMove, targetSubfunnel.id, getStagesForSubfunnel(targetSubfunnel.id));
        workspaceChanged = true;
      }
    }

    if (!workspaceChanged) {
      writeStoredFunnelRouteMigrationDone(true);
      return false;
    }

    state.suppressFunnelSync = true;
    writeStoredFunnelWorkspace();
    try {
      await persistFunnelWorkspaceToSupabase();
    } catch (error) {
      if (/row-level security policy/i.test(String(error?.message || ""))) {
        console.warn("Sincronização remota do workspace bloqueada por RLS. Mantendo ajuste apenas no workspace local.");
        state.funnelDataLoadedFromSupabase = false;
      } else {
        throw error;
      }
    }
    writeStoredFunnelRouteMigrationDone(true);

    try {
      await logChange(
        "migrate_funnel_routes",
        "funnel_workspace",
        null,
        `Leads de origem "Indicação", "Evento Externo" e "Ação Externa" foram consolidados automaticamente por ${getUserDisplayName()}.`,
        {
          source_funnel: sourceTemplate.funnel.name,
          source_subfunnel: sourceTemplate.subfunnel.name,
          moved_leads: movedLeadCount,
          targets: targets.map((item) => ({
            category: item.category,
            group: item.groupName,
            funnel: item.funnelName,
            subfunnel: item.subfunnelName,
            matched_leads: item.leads.length
          }))
        }
      );
    } catch (error) {
      console.warn("Não foi possível registrar a migração no histórico:", error);
    }

    return true;
  }

  function hasExternalActionsFunnelMergeCandidate() {
    const externalActionsKey = getFunnelLabelCompareKey("Ações Externas");
    return (state.funnelWorkspace?.funnels || []).some((funnel) => (
      getFunnelLabelCompareKey(funnel?.name || "") === externalActionsKey
    ));
  }

  async function ensureExternalActionsFunnelMerge() {
    if (readStoredExternalActionsFunnelMergeDone()) return false;
    if (!state.supabase || !state.funnelWorkspace?.funnels?.length) return false;
    if (!canManageStages()) return false;
    if (!hasExternalActionsFunnelMergeCandidate()) {
      writeStoredExternalActionsFunnelMergeDone(true);
      return false;
    }

    // A consolidação já acontece no workspace local durante a normalização.
    // Não forçamos persistência aqui para evitar timeouts em workspaces grandes.
    state.suppressFunnelSync = true;
    writeStoredFunnelWorkspace();
    writeStoredExternalActionsFunnelMergeDone(true);

    return true;
  }

  async function ensureB2CExternalCaptureNormalization() {
    if (readStoredB2CExternalCaptureNormalizationDone()) return false;
    if (!state.supabase || !state.funnelWorkspace?.funnels?.length) return false;
    if (!canManageStages()) return false;

    const compareKey = (value) => getCanonicalValueKey(value);
    const expectedStages = [
      "Lead captado",
      "Ação, local e data registrados",
      "Nome e telefone pendentes",
      "Dados completos",
      "Autorização para contato confirmada",
      "Verificação na base",
      "Interesse classificado como alto, médio ou baixo",
      "Consultor responsável definido",
      "Lead liberado para atendimento"
    ];

    const funnel = (state.funnelWorkspace?.funnels || []).find((item) =>
      String(item?.category || "").trim() === "B2C"
      && compareKey(item?.name || "") === compareKey("Ações Externas")
    );
    if (!funnel) {
      writeStoredB2CExternalCaptureNormalizationDone(true);
      return false;
    }

    const findSubfunnel = (name) => (funnel.subfunnels || []).find((item) => compareKey(item?.name || "") === compareKey(name)) || null;
    const captureSubfunnel = findSubfunnel("Captura na ação");
    const recycleSubfunnel = findSubfunnel("Reciclagem e encerramento");
    if (!captureSubfunnel || !recycleSubfunnel) return false;

    const getLeadCountByStageId = () => {
      const counts = new Map();
      state.leads.forEach((lead) => {
        const stageId = String(lead?.stage_id || "").trim();
        counts.set(stageId, (counts.get(stageId) || 0) + 1);
      });
      return counts;
    };
    const leadCountByStageId = getLeadCountByStageId();
    const getStageLeadCount = (stageId) => leadCountByStageId.get(String(stageId || "").trim()) || 0;
    const captureStages = getStagesForSubfunnel(captureSubfunnel.id);
    if (!captureStages.length) {
      writeStoredB2CExternalCaptureNormalizationDone(true);
      return false;
    }

    const captureStagePool = [...captureStages];
    const usedCaptureStageIds = new Set();
    const selectCaptureStage = (preferredNames = [], { preferLeadStage = false } = {}) => {
      const nameKeys = preferredNames.map(compareKey);
      const candidates = captureStagePool.filter((stage) =>
        !usedCaptureStageIds.has(stage.id)
        && nameKeys.includes(compareKey(stage.name || ""))
      );
      if (!candidates.length) return null;
      candidates.sort((a, b) => {
        const exactA = compareKey(a.name || "") === nameKeys[0] ? 1 : 0;
        const exactB = compareKey(b.name || "") === nameKeys[0] ? 1 : 0;
        if (exactA !== exactB) return exactB - exactA;
        const leadDiff = getStageLeadCount(b.id) - getStageLeadCount(a.id);
        if (preferLeadStage && leadDiff !== 0) return leadDiff;
        if (!preferLeadStage && leadDiff !== 0) return leadDiff * -1;
        return Number(a.position || 0) - Number(b.position || 0);
      });
      const selected = candidates[0] || null;
      if (selected) usedCaptureStageIds.add(selected.id);
      return selected;
    };

    const captureStagePlan = [
      { name: "Lead captado", preferredNames: ["Lead captado", "Novo Lead/Prospecção"], preferLeadStage: true },
      { name: "Ação, local e data registrados", preferredNames: ["Ação, local e data registrados", "Novo Lead/Prospecção", "Apresentação/Negociação", "Follow-Up"] },
      { name: "Nome e telefone pendentes", preferredNames: ["Nome e telefone pendentes", "Abordagem/Qualificação", "Apresentação/Negociação", "Follow-Up"] },
      { name: "Dados completos", preferredNames: ["Dados completos"] },
      { name: "Autorização para contato confirmada", preferredNames: ["Autorização para contato confirmada"] },
      { name: "Verificação na base", preferredNames: ["Verificação na base"] },
      { name: "Interesse classificado como alto, médio ou baixo", preferredNames: ["Interesse classificado como alto, médio ou baixo"] },
      { name: "Consultor responsável definido", preferredNames: ["Consultor responsável definido", "Vendedor responsável definido"] },
      { name: "Lead liberado para atendimento", preferredNames: ["Lead liberado para atendimento"] }
    ];

    const selectedCaptureStages = [];
    for (const plan of captureStagePlan) {
      let stage = selectCaptureStage(plan.preferredNames, { preferLeadStage: plan.preferLeadStage === true });
      if (!stage) {
        stage = await createStageForSubfunnel({
          name: plan.name,
          color: DEFAULT_STAGE_COLOR,
          stage_type: "andamento",
          custom_stage_type: null,
          position: state.stages.length,
          created_by: state.currentUser?.id || null
        }, captureSubfunnel.id, { deferSync: true });
        usedCaptureStageIds.add(stage.id);
      }
      selectedCaptureStages.push({ ...plan, stage });
    }

    const moveLeadsBetweenStages = async (sourceStageId, targetStageId, targetSubfunnelId) => {
      if (!sourceStageId || !targetStageId || sourceStageId === targetStageId) return 0;
      const sourceLeadIds = state.leads
        .filter((lead) => String(lead?.stage_id || "").trim() === String(sourceStageId || "").trim())
        .map((lead) => String(lead?.id || "").trim())
        .filter(Boolean);
      if (!sourceLeadIds.length) return 0;

      const { error } = await state.supabase
        .from("leads")
        .update({ stage_id: targetStageId })
        .eq("stage_id", sourceStageId);
      if (error) throw error;

      await persistLeadAssignmentsToSupabase(sourceLeadIds, targetSubfunnelId);
      moveLeadsToStageLocally(sourceLeadIds, targetStageId);
      sourceLeadIds.forEach((leadId) => assignLeadToSubfunnel(leadId, targetSubfunnelId, { deferSync: true }));
      return sourceLeadIds.length;
    };

    const findStageByCompareNames = (subfunnelId, names = []) => getStagesForSubfunnel(subfunnelId).find((stage) =>
      names.some((name) => compareKey(stage?.name || "") === compareKey(name))
    ) || null;
    const recycleStageTargets = {
      naoResponde: findStageByCompareNames(recycleSubfunnel.id, ["Não respondeu", "Não respondeu.", "Não responde"]),
      jaAssociado: findStageByCompareNames(recycleSubfunnel.id, ["Já é associado", "Já é associado."]),
      naoInteresse: findStageByCompareNames(recycleSubfunnel.id, ["Não tem interesse", "Não tem interesse."])
    };

    const captureExtraStages = captureStagePool.filter((stage) => !usedCaptureStageIds.has(stage.id));
    const stagesToDelete = [];

    for (const stage of captureExtraStages) {
      const stageKey = compareKey(stage.name || "");
      const leadCount = getStageLeadCount(stage.id);
      let target = null;

      if (stageKey === compareKey("Não responde")) {
        target = recycleStageTargets.naoResponde;
      } else if (stageKey === compareKey("Já é associado")) {
        target = recycleStageTargets.jaAssociado;
      } else if (stageKey === compareKey("Não tem interesse") || stageKey === compareKey("Cancelados")) {
        target = recycleStageTargets.naoInteresse;
      }

      let movedLeads = 0;
      if (leadCount > 0 && target?.id) {
        movedLeads = await moveLeadsBetweenStages(stage.id, target.id, recycleSubfunnel.id);
      }

      if (leadCount === 0 || movedLeads === leadCount) {
        stagesToDelete.push(stage.id);
      }
    }

    for (const [index, entry] of selectedCaptureStages.entries()) {
      const nextStage = entry.stage;
      const nextName = entry.name;
      const nextPosition = index;
      const nextColor = sanitizeHexColor(nextStage.color);
      const nextType = nextStage.stage_type || "andamento";
      const nextCustomType = nextStage.custom_stage_type || null;

      const { error: updateError } = await state.supabase
        .from("stages")
        .update({
          name: nextName,
          position: nextPosition,
          color: nextColor,
          stage_type: nextType,
          custom_stage_type: nextCustomType
        })
        .eq("id", nextStage.id);
      if (updateError) throw updateError;

      assignStageToSubfunnel(nextStage.id, captureSubfunnel.id, { deferSync: true });
      const localStage = state.stages.find((stage) => stage.id === nextStage.id);
      if (localStage) {
        localStage.name = nextName;
        localStage.position = nextPosition;
      }
    }

    if (stagesToDelete.length) {
      await removeStagesByIds(stagesToDelete);
    }

    state.suppressFunnelSync = true;
    writeStoredFunnelWorkspace();
    writeStoredAppDataCache();
    writeStoredB2CExternalCaptureNormalizationDone(true);
    notifyLiveSyncChange("funnel-workspace");
    return true;
  }

  async function persistFunnelWorkspaceToSupabase() {
    if (!state.funnelDataLoadedFromSupabase || !state.funnelWorkspace || !state.currentUser) return;

    const workspace = state.funnelWorkspace;
    const leadRows = Object.entries(workspace.leadAssignments || {}).map(([leadId, subfunnelId]) => ({
      lead_id: leadId,
      subfunnel_id: subfunnelId
    }));

    if (!canManageStages()) {
      if (!leadRows.length) return;
      const { error } = await state.supabase.from("crm_lead_subfunnel_assignments").upsert(leadRows, { onConflict: "lead_id" });
      if (error) throw error;
      return;
    }

    const funnelRows = (workspace.funnels || []).map((funnel) => ({
      id: funnel.id,
      name: funnel.name,
      category: funnel.category,
      visibility_scope: funnel.visibility_scope || "all",
      visibility_access_level: getFunnelGlobalAccessLevelValue(funnel.visibility_access_level || FUNNEL_ACCESS_LEVEL.VIEW),
      created_by: funnel.created_by || state.currentUser.id,
      archived_at: null
    }));

    const subfunnelRows = (workspace.funnels || []).flatMap((funnel) =>
      (funnel.subfunnels || []).map((subfunnel, index) => ({
        id: subfunnel.id,
        funnel_id: funnel.id,
        name: subfunnel.name,
        position: index
      }))
    );

    const permissionRows = (workspace.funnels || []).flatMap((funnel) =>
      getFunnelDepartmentPermissions(funnel).map((permission) => ({
        funnel_id: funnel.id,
        department_id: permission.department_id,
        access_level: permission.access_level || FUNNEL_ACCESS_LEVEL.VIEW
      }))
    );

    const stageRows = Object.entries(workspace.stageAssignments || {}).map(([stageId, subfunnelId]) => ({
      stage_id: stageId,
      subfunnel_id: subfunnelId
    }));

    const stageReminderRows = Object.entries(workspace.stageReminderConfigs || {})
      .map(([stageId, config]) => {
        const normalizedConfig = normalizeStageReminderConfig(config);
        if (!normalizedConfig) return null;
        return {
          stage_id: stageId,
          days: normalizedConfig.days,
          message: normalizedConfig.message || "",
          created_by: state.currentUser.id
        };
      })
      .filter(Boolean);

    const existingFunnelsRes = await state.supabase.from("crm_funnels").select("id");
    if (existingFunnelsRes.error && !isMissingRelationError(existingFunnelsRes.error)) {
      throw existingFunnelsRes.error;
    }
    const existingSubfunnelsRes = await state.supabase.from("crm_subfunnels").select("id");
    if (existingSubfunnelsRes.error && !isMissingRelationError(existingSubfunnelsRes.error)) {
      throw existingSubfunnelsRes.error;
    }
    const existingStageRemindersRes = await state.supabase.from("crm_stage_reminder_configs").select("stage_id");
    const stageReminderTableAvailable = !isMissingRelationError(existingStageRemindersRes?.error);
    if (existingStageRemindersRes.error && stageReminderTableAvailable) {
      throw existingStageRemindersRes.error;
    }
    const existingFunnelIds = new Set((existingFunnelsRes.data || []).map((item) => String(item.id)));
    const existingSubfunnelIds = new Set((existingSubfunnelsRes.data || []).map((item) => String(item.id)));
    const existingStageReminderIds = new Set((existingStageRemindersRes.data || []).map((item) => String(item.stage_id)));
    const nextFunnelIds = new Set(funnelRows.map((item) => String(item.id)));
    const nextSubfunnelIds = new Set(subfunnelRows.map((item) => String(item.id)));
    const nextStageReminderIds = new Set(stageReminderRows.map((item) => String(item.stage_id)));
    const removedFunnelIds = [...existingFunnelIds].filter((id) => !nextFunnelIds.has(id));
    const removedSubfunnelIds = [...existingSubfunnelIds].filter((id) => !nextSubfunnelIds.has(id));
    const removedStageReminderIds = [...existingStageReminderIds].filter((id) => !nextStageReminderIds.has(id));

    if (funnelRows.length) {
      const { error } = await state.supabase.from("crm_funnels").upsert(funnelRows, { onConflict: "id" });
      if (error) throw error;
    }

    if (removedSubfunnelIds.length) {
      const { error } = await state.supabase.from("crm_subfunnels").delete().in("id", removedSubfunnelIds);
      if (error) throw error;
    }

    if (subfunnelRows.length) {
      // Evita conflito com unique (funnel_id, position) ao trocar a ordem
      // de subfunis já existentes dentro do mesmo funil.
      const tempSubfunnelRows = subfunnelRows.map((row, index) => ({
        ...row,
        position: 1000000 + index
      }));
      const tempResult = await state.supabase.from("crm_subfunnels").upsert(tempSubfunnelRows, { onConflict: "id" });
      if (tempResult.error) throw tempResult.error;

      const finalResult = await state.supabase.from("crm_subfunnels").upsert(subfunnelRows, { onConflict: "id" });
      if (finalResult.error) throw finalResult.error;
    }

    const funnelIds = funnelRows.map((item) => item.id);
    if (funnelIds.length) {
      const existingPermissionsRes = await state.supabase
        .from("crm_funnel_department_permissions")
        .select("funnel_id, department_id, access_level")
        .in("funnel_id", funnelIds);
      if (existingPermissionsRes.error) throw existingPermissionsRes.error;

      const existingPermissionsByFunnel = new Map();
      (existingPermissionsRes.data || []).forEach((row) => {
        const funnelId = String(row?.funnel_id || "").trim();
        const departmentId = String(row?.department_id || "").trim();
        if (!funnelId || !departmentId) return;
        if (!existingPermissionsByFunnel.has(funnelId)) existingPermissionsByFunnel.set(funnelId, []);
        existingPermissionsByFunnel.get(funnelId).push({
          funnel_id: funnelId,
          department_id: departmentId,
          access_level: String(row?.access_level || FUNNEL_ACCESS_LEVEL.VIEW).trim().toLowerCase()
        });
      });

      if (permissionRows.length) {
        const { error: permissionUpsertError } = await state.supabase
          .from("crm_funnel_department_permissions")
          .upsert(permissionRows, { onConflict: "funnel_id,department_id" });
        if (permissionUpsertError) throw permissionUpsertError;
      }

      for (const funnelId of funnelIds) {
        const nextDepartmentIds = new Set(
          permissionRows
            .filter((item) => String(item?.funnel_id || "").trim() === String(funnelId))
            .map((item) => String(item?.department_id || "").trim())
            .filter(Boolean)
        );
        const removedDepartmentIds = (existingPermissionsByFunnel.get(String(funnelId)) || [])
          .map((item) => String(item.department_id || "").trim())
          .filter((departmentId) => departmentId && !nextDepartmentIds.has(departmentId));

        if (!removedDepartmentIds.length) continue;
        const { error: deletePermissionError } = await state.supabase
          .from("crm_funnel_department_permissions")
          .delete()
          .eq("funnel_id", funnelId)
          .in("department_id", removedDepartmentIds);
        if (deletePermissionError) throw deletePermissionError;
      }
    }

    if (stageRows.length) {
      const { error } = await state.supabase.from("crm_stage_subfunnel_assignments").upsert(stageRows, { onConflict: "stage_id" });
      if (error) throw error;
    }

    if (leadRows.length) {
      const { error } = await state.supabase.from("crm_lead_subfunnel_assignments").upsert(leadRows, { onConflict: "lead_id" });
      if (error) throw error;
    }

    if (stageReminderTableAvailable) {
      if (removedStageReminderIds.length) {
        const { error } = await state.supabase.from("crm_stage_reminder_configs").delete().in("stage_id", removedStageReminderIds);
        if (error) throw error;
      }
      if (stageReminderRows.length) {
        const { error } = await state.supabase.from("crm_stage_reminder_configs").upsert(stageReminderRows, { onConflict: "stage_id" });
        if (error) throw error;
      }
    }

    if (removedFunnelIds.length) {
      const { error } = await state.supabase.from("crm_funnels").delete().in("id", removedFunnelIds);
      if (error) throw error;
    }

    await persistSharedFunnelWorkspaceMetaToSupabase(workspace);
  }

  function buildFunnelRowPayload(funnel) {
    if (!funnel?.id) return null;
    return {
      id: funnel.id,
      name: funnel.name,
      category: funnel.category,
      visibility_scope: funnel.visibility_scope || "all",
      visibility_access_level: getFunnelGlobalAccessLevelValue(funnel.visibility_access_level || FUNNEL_ACCESS_LEVEL.VIEW),
      created_by: funnel.created_by || state.currentUser?.id || null,
      archived_at: null
    };
  }

  function buildSubfunnelRowsForFunnels(funnels = []) {
    return (Array.isArray(funnels) ? funnels : []).flatMap((funnel) =>
      (funnel?.subfunnels || []).map((subfunnel, index) => ({
        id: subfunnel.id,
        funnel_id: funnel.id,
        name: subfunnel.name,
        position: index
      }))
    );
  }

  function buildPermissionRowsForFunnels(funnels = []) {
    return (Array.isArray(funnels) ? funnels : []).flatMap((funnel) =>
      getFunnelDepartmentPermissions(funnel).map((permission) => ({
        funnel_id: funnel.id,
        department_id: permission.department_id,
        access_level: permission.access_level || FUNNEL_ACCESS_LEVEL.VIEW
      }))
    );
  }

  async function persistFunnelPermissionRowsToSupabase(funnelIds = [], permissionRows = []) {
    const normalizedFunnelIds = normalizeIdList(funnelIds);
    if (!normalizedFunnelIds.length) return;

    const existingPermissionsRes = await state.supabase
      .from("crm_funnel_department_permissions")
      .select("funnel_id, department_id, access_level")
      .in("funnel_id", normalizedFunnelIds);
    if (existingPermissionsRes.error) throw existingPermissionsRes.error;

    const existingPermissionsByFunnel = new Map();
    (existingPermissionsRes.data || []).forEach((row) => {
      const funnelId = String(row?.funnel_id || "").trim();
      const departmentId = String(row?.department_id || "").trim();
      if (!funnelId || !departmentId) return;
      if (!existingPermissionsByFunnel.has(funnelId)) existingPermissionsByFunnel.set(funnelId, []);
      existingPermissionsByFunnel.get(funnelId).push({
        funnel_id: funnelId,
        department_id: departmentId,
        access_level: String(row?.access_level || FUNNEL_ACCESS_LEVEL.VIEW).trim().toLowerCase()
      });
    });

    if (permissionRows.length) {
      const { error: permissionUpsertError } = await state.supabase
        .from("crm_funnel_department_permissions")
        .upsert(permissionRows, { onConflict: "funnel_id,department_id" });
      if (permissionUpsertError) throw permissionUpsertError;
    }

    for (const funnelId of normalizedFunnelIds) {
      const nextDepartmentIds = new Set(
        permissionRows
          .filter((item) => String(item?.funnel_id || "").trim() === String(funnelId))
          .map((item) => String(item?.department_id || "").trim())
          .filter(Boolean)
      );
      const removedDepartmentIds = (existingPermissionsByFunnel.get(String(funnelId)) || [])
        .map((item) => String(item.department_id || "").trim())
        .filter((departmentId) => departmentId && !nextDepartmentIds.has(departmentId));

      if (!removedDepartmentIds.length) continue;
      const { error: deletePermissionError } = await state.supabase
        .from("crm_funnel_department_permissions")
        .delete()
        .eq("funnel_id", funnelId)
        .in("department_id", removedDepartmentIds);
      if (deletePermissionError) throw deletePermissionError;
    }
  }

  async function persistFunnelsSubsetToSupabase(funnels = [], options = {}) {
    if (!state.funnelDataLoadedFromSupabase || !state.currentUser || !state.supabase) return;

    const includeSubfunnels = options.includeSubfunnels !== false;
    const includePermissions = options.includePermissions !== false;
    const normalizedFunnels = (Array.isArray(funnels) ? funnels : []).filter((item) => item?.id);
    if (!normalizedFunnels.length) return;

    const funnelRows = normalizedFunnels
      .map((funnel) => buildFunnelRowPayload(funnel))
      .filter(Boolean);
    if (funnelRows.length) {
      const { error } = await state.supabase.from("crm_funnels").upsert(funnelRows, { onConflict: "id" });
      if (error) throw error;
    }

    const funnelIds = funnelRows.map((item) => String(item.id || "").trim()).filter(Boolean);
    if (!funnelIds.length) return;

    if (includeSubfunnels) {
      const subfunnelRows = buildSubfunnelRowsForFunnels(normalizedFunnels);
      const existingSubfunnelsRes = await state.supabase
        .from("crm_subfunnels")
        .select("id, funnel_id")
        .in("funnel_id", funnelIds);
      if (existingSubfunnelsRes.error && !isMissingRelationError(existingSubfunnelsRes.error)) {
        throw existingSubfunnelsRes.error;
      }

      const nextSubfunnelIds = new Set(subfunnelRows.map((item) => String(item.id || "").trim()).filter(Boolean));
      const removedSubfunnelIds = (existingSubfunnelsRes.data || [])
        .filter((item) => funnelIds.includes(String(item?.funnel_id || "").trim()))
        .map((item) => String(item?.id || "").trim())
        .filter((id) => id && !nextSubfunnelIds.has(id));

      if (removedSubfunnelIds.length) {
        const { error } = await state.supabase.from("crm_subfunnels").delete().in("id", removedSubfunnelIds);
        if (error) throw error;
      }

      if (subfunnelRows.length) {
        const tempSubfunnelRows = subfunnelRows.map((row, index) => ({
          ...row,
          position: 1000000 + index
        }));
        const tempResult = await state.supabase.from("crm_subfunnels").upsert(tempSubfunnelRows, { onConflict: "id" });
        if (tempResult.error) throw tempResult.error;

        const finalResult = await state.supabase.from("crm_subfunnels").upsert(subfunnelRows, { onConflict: "id" });
        if (finalResult.error) throw finalResult.error;
      }
    }

    if (includePermissions) {
      const permissionRows = buildPermissionRowsForFunnels(normalizedFunnels);
      await persistFunnelPermissionRowsToSupabase(funnelIds, permissionRows);
    }
  }

  async function persistStageReminderConfigToSupabase(stageId, nextReminder) {
    const normalizedStageId = String(stageId || "").trim();
    if (!normalizedStageId || !state.supabase) return false;

    if (!nextReminder) {
      const { error } = await state.supabase
        .from("crm_stage_reminder_configs")
        .delete()
        .eq("stage_id", normalizedStageId);
      if (error && !isMissingRelationError(error)) throw error;
      return !error || isMissingRelationError(error);
    }

    const payload = {
      stage_id: normalizedStageId,
      days: Number(nextReminder.days || 0) || 0,
      message: String(nextReminder.message || "").trim(),
      created_by: state.currentUser?.id || null
    };

    const { error } = await state.supabase
      .from("crm_stage_reminder_configs")
      .upsert(payload, { onConflict: "stage_id" });
    if (error && !isMissingRelationError(error)) throw error;
    return !error || isMissingRelationError(error);
  }

  async function persistStageAssignmentToSupabase(stageId, subfunnelId) {
    const normalizedStageId = String(stageId || "").trim();
    const normalizedSubfunnelId = String(subfunnelId || "").trim();
    if (!normalizedStageId || !normalizedSubfunnelId || !state.supabase) return;

    const { error } = await state.supabase
      .from("crm_stage_subfunnel_assignments")
      .upsert({
        stage_id: normalizedStageId,
        subfunnel_id: normalizedSubfunnelId
      }, { onConflict: "stage_id" });
    if (error) throw error;
  }

  async function persistLeadAssignmentsToSupabase(leadIds = [], subfunnelId) {
    const normalizedSubfunnelId = String(subfunnelId || "").trim();
    const normalizedLeadIds = [...new Set((Array.isArray(leadIds) ? leadIds : []).map((id) => String(id || "").trim()).filter(Boolean))];
    if (!normalizedLeadIds.length || !normalizedSubfunnelId || !state.supabase) return;

    const rows = normalizedLeadIds.map((leadId) => ({
      lead_id: leadId,
      subfunnel_id: normalizedSubfunnelId
    }));

    const { error } = await state.supabase
      .from("crm_lead_subfunnel_assignments")
      .upsert(rows, { onConflict: "lead_id" });
    if (error) throw error;
  }

  async function persistSubfunnelOrderToSupabase(funnelId) {
    if (!state.funnelDataLoadedFromSupabase || !state.funnelWorkspace || !state.currentUser) return;

    const funnel = getFunnelById(funnelId);
    if (!funnel || !canManageStages(funnel)) return;

    const subfunnelRows = (funnel.subfunnels || []).map((subfunnel, index) => ({
      id: subfunnel.id,
      funnel_id: funnel.id,
      name: subfunnel.name,
      position: index
    }));

    if (!subfunnelRows.length) return;

    const tempSubfunnelRows = subfunnelRows.map((row, index) => ({
      ...row,
      position: 1000000 + index
    }));
    const tempResult = await state.supabase.from("crm_subfunnels").upsert(tempSubfunnelRows, { onConflict: "id" });
    if (tempResult.error) throw tempResult.error;

    const finalResult = await state.supabase.from("crm_subfunnels").upsert(subfunnelRows, { onConflict: "id" });
    if (finalResult.error) throw finalResult.error;
  }

  function queueFunnelWorkspaceSync() {
    if (!state.funnelDataLoadedFromSupabase) return;
    if (state.funnelSyncInFlight) {
      state.funnelSyncQueued = true;
      return;
    }

    state.funnelSyncInFlight = true;
    window.setTimeout(async () => {
      try {
        await persistFunnelWorkspaceToSupabase();
        notifyLiveSyncChange("funnel-workspace");
      } catch (error) {
        console.error("Erro ao sincronizar funis com Supabase:", error);
        if (/row-level security policy/i.test(String(error?.message || ""))) {
          state.funnelDataLoadedFromSupabase = false;
        }
      } finally {
        state.funnelSyncInFlight = false;
        if (state.funnelSyncQueued) {
          state.funnelSyncQueued = false;
          queueFunnelWorkspaceSync();
        }
      }
    }, 40);
  }

  function queueSubfunnelOrderSync(funnelId) {
    if (!state.funnelDataLoadedFromSupabase || !funnelId) return;

    const queue = new Set(Array.isArray(state.subfunnelOrderSyncQueue) ? state.subfunnelOrderSyncQueue : []);
    queue.add(String(funnelId));
    state.subfunnelOrderSyncQueue = [...queue];

    if (state.subfunnelOrderSyncInFlight) return;

    state.subfunnelOrderSyncInFlight = true;
    window.setTimeout(async () => {
      const pendingFunnelIds = [...new Set(state.subfunnelOrderSyncQueue || [])];
      state.subfunnelOrderSyncQueue = [];

      try {
        for (const pendingFunnelId of pendingFunnelIds) {
          await persistSubfunnelOrderToSupabase(pendingFunnelId);
        }
        notifyLiveSyncChange("funnel-workspace");
      } catch (error) {
        console.error("Erro ao sincronizar ordem dos subfunis com Supabase:", error);
        if (/row-level security policy/i.test(String(error?.message || ""))) {
          state.funnelDataLoadedFromSupabase = false;
        }
      } finally {
        state.subfunnelOrderSyncInFlight = false;
        if ((state.subfunnelOrderSyncQueue || []).length) {
          queueSubfunnelOrderSync(state.subfunnelOrderSyncQueue[0]);
        }
      }
    }, 20);
  }

  function mergeRemoteSubfunnelsWithStored(localSubfunnels = [], remoteSubfunnels = [], deletedSubfunnelIds = new Set()) {
    return (Array.isArray(remoteSubfunnels) ? remoteSubfunnels : [])
      .filter((item) => !deletedSubfunnelIds.has(String(item?.id || "")))
      .map((remoteSubfunnel) => {
        const localSubfunnel = (Array.isArray(localSubfunnels) ? localSubfunnels : []).find((item) => (
          !deletedSubfunnelIds.has(String(item?.id || ""))
          && (
            (item?.id && remoteSubfunnel?.id && String(item.id) === String(remoteSubfunnel.id))
            || getFunnelLabelCompareKey(item?.name || "") === getFunnelLabelCompareKey(remoteSubfunnel?.name || "")
          )
        )) || null;

        return {
          ...(localSubfunnel || {}),
          ...remoteSubfunnel
        };
      });
  }

  function syncFunnelWorkspaceWithData(workspaceInput = null) {
    const storedWorkspace = readStoredFunnelWorkspace();
    const deletedWorkspaceIds = readDeletedFunnelWorkspaceIds();
    const deletedFunnelIds = new Set(deletedWorkspaceIds.funnels);
    const deletedSubfunnelIds = new Set(deletedWorkspaceIds.subfunnels);
    const remoteHasContent = Boolean(
      workspaceInput
      && (
        (Array.isArray(workspaceInput.funnels) && workspaceInput.funnels.length)
        || Object.keys(workspaceInput.stageAssignments || {}).length
        || Object.keys(workspaceInput.leadAssignments || {}).length
      )
    );
    const mergeWorkspaceWithStored = (remoteWorkspace, localWorkspace) => {
      if (!remoteWorkspace) return localWorkspace || null;
      if (!localWorkspace) return remoteWorkspace;

      const mergedFunnels = (Array.isArray(remoteWorkspace.funnels) ? remoteWorkspace.funnels : [])
        .filter((item) => !deletedFunnelIds.has(String(item?.id || "")))
        .map((remoteFunnel) => {
        const localFunnel = (Array.isArray(localWorkspace.funnels) ? localWorkspace.funnels : []).find((item) => (
          !deletedFunnelIds.has(String(item?.id || ""))
          && (
            (item?.id && remoteFunnel?.id && String(item.id) === String(remoteFunnel.id))
            || (
              getFunnelLabelCompareKey(item?.name || "") === getFunnelLabelCompareKey(remoteFunnel?.name || "")
              && String(item?.category || "").trim() === String(remoteFunnel?.category || "").trim()
            )
          )
        )) || null;

        return {
          ...(localFunnel || {}),
          ...remoteFunnel,
          group_id: remoteFunnel?.group_id || remoteFunnel?.groupId || localFunnel?.group_id || localFunnel?.groupId || null,
          owner_department_id: remoteFunnel?.owner_department_id || remoteFunnel?.ownerDepartmentId || localFunnel?.owner_department_id || localFunnel?.ownerDepartmentId || null,
          subfunnels: mergeRemoteSubfunnelsWithStored(localFunnel?.subfunnels || [], remoteFunnel?.subfunnels || [], deletedSubfunnelIds)
        };
      });

      return {
        groups: (Array.isArray(remoteWorkspace.groups) ? remoteWorkspace.groups : [])
          .filter((item) => !normalizeIdList(deletedWorkspaceIds.groups).includes(String(item?.id || "")))
          .map((remoteGroup) => {
            const localGroup = (Array.isArray(localWorkspace.groups) ? localWorkspace.groups : []).find((item) => (
              String(item?.id || "").trim() === String(remoteGroup?.id || "").trim()
            )) || null;

            return {
              ...(localGroup || {}),
              ...remoteGroup
            };
        }),
        funnels: mergedFunnels,
        stageAssignments: { ...(remoteWorkspace.stageAssignments || {}) },
        leadAssignments: { ...(remoteWorkspace.leadAssignments || {}) },
        stageReminderConfigs: {
          ...(localWorkspace?.stageReminderConfigs || {}),
          ...(remoteWorkspace.stageReminderConfigs || {})
        }
      };
    };
    const existingWorkspace = remoteHasContent
      ? mergeWorkspaceWithStored(workspaceInput, storedWorkspace)
      : (storedWorkspace || workspaceInput || null);
    const workspace = existingWorkspace || getDefaultFunnelWorkspace();
    const normalizedGroups = normalizeStoredFunnelGroups((remoteHasContent ? workspace.groups : (storedWorkspace?.groups || workspace.groups)) || []);
    const storedFunnels = Array.isArray(remoteHasContent ? workspace.funnels : storedWorkspace?.funnels) ? (remoteHasContent ? workspace.funnels : storedWorkspace.funnels) : [];
    const legacySubfunnelIdMap = new Map();
    const normalizedFunnels = (workspace.funnels || [])
      .filter((item) => !isLegacyPlaceholderFunnel(item))
      .map((item) => {
      const storedMatch = storedFunnels.find((storedFunnel) => (
        (storedFunnel?.id && item?.id && String(storedFunnel.id) === String(item.id))
        || (
          getFunnelLabelCompareKey(storedFunnel?.name || "") === getFunnelLabelCompareKey(item?.name || "")
          && String(storedFunnel?.category || "").trim() === String(item?.category || "").trim()
        )
      )) || null;
      const normalizedSubfunnels = normalizeStoredSubfunnels(item.subfunnels || []).length
        ? normalizeStoredSubfunnels(item.subfunnels || [])
        : [{ id: createSubfunnelId(), name: "Subfunil 1" }];
      const normalizedFunnelId = isUuid(item.id) ? String(item.id).trim() : createFunnelId();
      const nextSubfunnels = normalizedSubfunnels.map((subfunnel) => {
        const normalizedSubfunnelId = isUuid(subfunnel.id) ? String(subfunnel.id).trim() : createSubfunnelId();
        const legacyId = String(subfunnel.id || "").trim();
        if (legacyId && legacyId !== normalizedSubfunnelId) {
          legacySubfunnelIdMap.set(legacyId, normalizedSubfunnelId);
        }
        return {
          id: normalizedSubfunnelId,
          name: subfunnel.name
        };
      });

      return {
        id: normalizedFunnelId,
        name: String(item.name || "Novo funil").trim(),
        category: FUNNEL_CATEGORIES.includes(item.category) ? item.category : "B2C",
        group_id: String(item.group_id || item.groupId || storedMatch?.group_id || storedMatch?.groupId || "").trim() || null,
        owner_department_id: String(
          item.owner_department_id
          || item.ownerDepartmentId
          || storedMatch?.owner_department_id
          || storedMatch?.ownerDepartmentId
          || getFunnelOfficialDepartmentId(item)
          || ""
        ).trim() || null,
        visibility_scope: String(item.visibility_scope || "all"),
        visibility_access_level: getFunnelGlobalAccessLevelValue(item.visibility_access_level || FUNNEL_ACCESS_LEVEL.VIEW),
        department_permissions: normalizeFunnelDepartmentPermissions(item.department_permissions || item.department_ids || []),
        department_ids: normalizeFunnelDepartmentPermissions(item.department_permissions || item.department_ids || []).map((value) => String(value.department_id)),
        created_by: item.created_by || state.currentUser?.id || null,
        subfunnels: nextSubfunnels,
        created_at: item.created_at || new Date().toISOString(),
        is_default: Boolean(item.is_default)
      };
    });

    const validGroupIds = new Set(normalizedGroups.map((item) => item.id));
    normalizedFunnels.forEach((item) => {
      if (item.group_id && !validGroupIds.has(item.group_id)) {
        item.group_id = null;
      }
    });

    const validSubfunnelIds = new Set(
      normalizedFunnels.flatMap((item) => item.subfunnels.map((subfunnel) => subfunnel.id))
    );
    const fallbackSubfunnelId = getFallbackSubfunnelId({ funnels: normalizedFunnels });
    const shouldUseFallbackAssignments = !remoteHasContent;

    const nextStageAssignments = {};
    state.stages.forEach((stage) => {
      const assignedId = workspace.stageAssignments?.[stage.id];
      const normalizedAssignedId = legacySubfunnelIdMap.get(String(assignedId || "").trim()) || assignedId;
      nextStageAssignments[stage.id] = validSubfunnelIds.has(normalizedAssignedId)
        ? normalizedAssignedId
        : (shouldUseFallbackAssignments ? fallbackSubfunnelId : null);
    });

    const nextLeadAssignments = {};
    state.leads.forEach((lead) => {
      const assignedId = workspace.leadAssignments?.[lead.id];
      const normalizedAssignedId = legacySubfunnelIdMap.get(String(assignedId || "").trim()) || assignedId;
      const stageAssignedId = nextStageAssignments[lead.stage_id]
        || (shouldUseFallbackAssignments ? fallbackSubfunnelId : null);
      nextLeadAssignments[lead.id] = validSubfunnelIds.has(normalizedAssignedId)
        ? normalizedAssignedId
        : stageAssignedId;
    });
    const validStageIds = new Set(state.stages.map((stage) => String(stage.id || "").trim()).filter(Boolean));
    const nextStageReminderConfigs = {};
    Object.entries(workspace.stageReminderConfigs || {}).forEach(([stageId, config]) => {
      const normalizedStageId = String(stageId || "").trim();
      const normalizedConfig = normalizeStageReminderConfig(config);
      if (!normalizedStageId || !validStageIds.has(normalizedStageId) || !normalizedConfig) return;
      nextStageReminderConfigs[normalizedStageId] = normalizedConfig;
    });

    const dedupedWorkspace = dedupeFunnelWorkspace(normalizedFunnels, nextStageAssignments, nextLeadAssignments);
    const groupedWorkspace = ensureDerivedDefaultGroups(normalizedGroups, dedupedWorkspace.funnels);
    state.funnelWorkspace = {
      groups: groupedWorkspace.groups,
      funnels: groupedWorkspace.funnels,
      stageAssignments: dedupedWorkspace.stageAssignments,
      leadAssignments: dedupedWorkspace.leadAssignments,
      stageReminderConfigs: nextStageReminderConfigs
    };
    if (state.lastSharedFunnelMetaSignature) {
      state.lastSharedFunnelMetaSignature = getSharedFunnelWorkspaceMetaSignature(state.funnelWorkspace);
      state.lastSharedFunnelGroupsSignature = getSharedFunnelGroupsMetaSignature(state.funnelWorkspace);
      state.lastSharedFunnelLinksSignature = getSharedFunnelLinksMetaSignature(state.funnelWorkspace);
    }

    if (!getFunnelById(state.activeFunnelId) || !canViewFunnelItem(getFunnelById(state.activeFunnelId))) {
      state.activeFunnelId = null;
    }
    if (!getSubfunnelById(state.activeSubfunnelId) || !canViewFunnelItem(getFunnelById(getSubfunnelById(state.activeSubfunnelId)?.funnel_id))) {
      state.activeSubfunnelId = null;
    }

    state.suppressFunnelSync = remoteHasContent;
    writeStoredFunnelWorkspace();
  }

  function restoreStoredFunnelUiState() {
    const storedState = readStoredFunnelUiState();
    const rawStoredFunnel = getFunnelById(storedState?.activeFunnelId);
    const rawStoredSubfunnel = getSubfunnelById(storedState?.activeSubfunnelId);
    const storedFunnel = rawStoredFunnel && canViewFunnelItem(rawStoredFunnel) ? rawStoredFunnel : null;
    const storedSubfunnel = rawStoredSubfunnel && canViewFunnelItem(getFunnelById(rawStoredSubfunnel.funnel_id)) ? rawStoredSubfunnel : null;
    const storedView = storedState && isViewAllowed(storedState.activeView) ? storedState.activeView : null;

    state.activeFunnelId = null;
    state.activeSubfunnelId = null;
    state.funnelSidebarOpen = false;
    state.activeView = storedView || getDefaultAllowedView();

    if (storedFunnel) {
      state.activeFunnelId = storedFunnel.id;
    }
    if (storedSubfunnel && storedFunnel && storedSubfunnel.funnel_id === storedFunnel.id) {
      state.activeSubfunnelId = storedSubfunnel.id;
    }

    if (state.activeView === "funil") {
      if (storedSubfunnel && storedFunnel && storedSubfunnel.funnel_id === storedFunnel.id) {
        return;
      }
      if (storedFunnel) return;
      state.activeView = getDefaultAllowedView();
    }

  }

  function getPreservedFunnelSidebarState() {
    return shouldAutoCloseFunnelSidebarOnSelection() ? false : Boolean(state.funnelSidebarOpen);
  }

  function bindFunnelViewPreservingSidebar() {
    bindView("funil", {
      resetFunnelDetail: false,
      preserveFunnelSidebarState: true,
      keepFunnelSidebarOpen: state.funnelSidebarOpen
    });
  }

  function assignStageToSubfunnel(stageId, subfunnelId, options = {}) {
    if (!stageId || !subfunnelId || !state.funnelWorkspace) return;
    state.funnelWorkspace.stageAssignments[stageId] = subfunnelId;
    if (options.deferSync === true) return;
    writeStoredFunnelWorkspace();
  }

  function assignLeadToSubfunnel(leadId, subfunnelId, options = {}) {
    if (!leadId || !subfunnelId || !state.funnelWorkspace) return;
    state.funnelWorkspace.leadAssignments[leadId] = subfunnelId;
    if (options.deferSync === true) return;
    writeStoredFunnelWorkspace();
  }

  function applyStageAssignmentsLocally(stageIds = [], subfunnelId) {
    const normalizedSubfunnelId = String(subfunnelId || "").trim();
    const normalizedStageIds = normalizeIdList(stageIds);
    if (!normalizedStageIds.length || !normalizedSubfunnelId || !state.funnelWorkspace) return new Map();

    const previousAssignments = new Map();
    normalizedStageIds.forEach((stageId) => {
      previousAssignments.set(stageId, String(state.funnelWorkspace?.stageAssignments?.[stageId] || "").trim() || null);
      assignStageToSubfunnel(stageId, normalizedSubfunnelId, { deferSync: true });
    });
    state.suppressFunnelSync = true;
    writeStoredFunnelWorkspace();
    return previousAssignments;
  }

  function restoreStageAssignmentsLocally(previousAssignments = new Map()) {
    if (!(previousAssignments instanceof Map) || !state.funnelWorkspace) return;

    previousAssignments.forEach((subfunnelId, stageId) => {
      const normalizedStageId = String(stageId || "").trim();
      const normalizedSubfunnelId = String(subfunnelId || "").trim();
      if (!normalizedStageId) return;
      if (normalizedSubfunnelId) {
        assignStageToSubfunnel(normalizedStageId, normalizedSubfunnelId, { deferSync: true });
      } else if (state.funnelWorkspace?.stageAssignments) {
        delete state.funnelWorkspace.stageAssignments[normalizedStageId];
      }
    });

    state.suppressFunnelSync = true;
    writeStoredFunnelWorkspace();
  }

  function applyLeadAssignmentsLocally(leadIds = [], subfunnelId) {
    const normalizedSubfunnelId = String(subfunnelId || "").trim();
    const normalizedLeadIds = normalizeIdList(leadIds);
    if (!normalizedLeadIds.length || !normalizedSubfunnelId || !state.funnelWorkspace) return new Map();

    const previousAssignments = new Map();
    normalizedLeadIds.forEach((leadId) => {
      previousAssignments.set(leadId, String(state.funnelWorkspace?.leadAssignments?.[leadId] || "").trim() || null);
      assignLeadToSubfunnel(leadId, normalizedSubfunnelId, { deferSync: true });
    });
    state.suppressFunnelSync = true;
    writeStoredFunnelWorkspace();
    return previousAssignments;
  }

  function restoreLeadAssignmentsLocally(previousAssignments = new Map()) {
    if (!(previousAssignments instanceof Map) || !state.funnelWorkspace) return;

    previousAssignments.forEach((subfunnelId, leadId) => {
      const normalizedLeadId = String(leadId || "").trim();
      const normalizedSubfunnelId = String(subfunnelId || "").trim();
      if (!normalizedLeadId) return;
      if (normalizedSubfunnelId) {
        assignLeadToSubfunnel(normalizedLeadId, normalizedSubfunnelId, { deferSync: true });
      } else if (state.funnelWorkspace?.leadAssignments) {
        delete state.funnelWorkspace.leadAssignments[normalizedLeadId];
      }
    });

    state.suppressFunnelSync = true;
    writeStoredFunnelWorkspace();
  }

  async function persistWorkspaceAssignmentsSafely({
    stageIds = [],
    leadIds = [],
    subfunnelId,
    notify = true,
    notifyScope = "funnel-workspace"
  } = {}) {
    const normalizedSubfunnelId = String(subfunnelId || "").trim();
    const normalizedStageIds = normalizeIdList(stageIds);
    const normalizedLeadIds = normalizeIdList(leadIds);
    if ((!normalizedStageIds.length && !normalizedLeadIds.length) || !normalizedSubfunnelId) return false;

    const previousStageAssignments = applyStageAssignmentsLocally(normalizedStageIds, normalizedSubfunnelId);
    const previousLeadAssignments = applyLeadAssignmentsLocally(normalizedLeadIds, normalizedSubfunnelId);

    if (!state.funnelDataLoadedFromSupabase) return true;

    try {
      for (const stageId of normalizedStageIds) {
        await persistStageAssignmentToSupabase(stageId, normalizedSubfunnelId);
      }
      if (normalizedLeadIds.length) {
        await persistLeadAssignmentsToSupabase(normalizedLeadIds, normalizedSubfunnelId);
      }
      if (notify) {
        notifyLiveSyncChange(notifyScope);
      }
      return true;
    } catch (error) {
      restoreStageAssignmentsLocally(previousStageAssignments);
      restoreLeadAssignmentsLocally(previousLeadAssignments);
      throw error;
    }
  }

  async function persistLeadAssignmentsSafely(leadIds = [], subfunnelId, options = {}) {
    return persistWorkspaceAssignmentsSafely({
      stageIds: [],
      leadIds,
      subfunnelId,
      notify: options.notify !== false,
      notifyScope: options.notifyScope || "funnel-workspace"
    });
  }

  function openFunnelHub(funnelId) {
    const funnel = getFunnelById(funnelId);
    if (!funnel) return;
    state.funnelSidebarOpen = getPreservedFunnelSidebarState();
    state.activeFunnelId = funnel.id;
    state.activeSubfunnelId = null;
    bindFunnelViewPreservingSidebar();
    renderAll();
  }

  function openSubfunnelEditModal(funnelId, subfunnelId) {
    const funnel = getFunnelById(funnelId);
    const subfunnel = getSubfunnelById(subfunnelId);
    if (!funnel || !subfunnel) return;
    openFunnelModal({ mode: "edit-subfunnel", funnel, subfunnel });
  }

  function openCreateSubfunnelModal(funnelId) {
    const funnel = getFunnelById(funnelId);
    if (!funnel) return;
    openFunnelModal({ mode: "create-subfunnel", funnel });
  }

  async function deleteSubfunnel(funnelId, subfunnelId) {
    const funnel = getFunnelById(funnelId);
    const subfunnel = getSubfunnelById(subfunnelId);
    if (!funnel || !subfunnel) return;

    if (!confirm(`Tem certeza que deseja excluir o subfunil "${subfunnel.name}"?`)) return;

    if (!canManageStages()) {
      requestAdminAuthorization({
        requestType: "delete_subfunnel",
        title: "Solicitar exclusao de subfunil",
        description: `Voce nao tem permissao para excluir o subfunil "${subfunnel.name}". Sua solicitacao sera enviada para o administrador.`,
        entityType: "subfunnel",
        entityId: subfunnel.id,
        payload: {
          funnel_id: funnel.id,
          funnel_name: funnel.name,
          subfunnel_id: subfunnel.id,
          subfunnel_name: subfunnel.name
        }
      });
      return;
    }

    const currentSubfunnels = [...(funnel.subfunnels || [])];
    if (currentSubfunnels.length <= 1) {
      alert("Esse funil precisa manter ao menos um subfunil.");
      return;
    }
    const fallbackSubfunnel = currentSubfunnels.find((item) => item.id !== subfunnelId) || null;
    const previousStructureSubfunnelId = state.structureSubfunnelId;

    await executeFunnelWorkspaceMetaMutation({
      applyLocal: () => {
        const localFunnel = getFunnelById(funnelId);
        if (!localFunnel) throw new Error("Funil não encontrado para excluir o subfunil.");
        removeSubfunnelFromFunnelLocally(localFunnel, subfunnelId);
        rememberDeletedFunnelWorkspaceIds({ subfunnels: [subfunnelId] });

        Object.keys(state.funnelWorkspace?.stageAssignments || {}).forEach((stageId) => {
          if (state.funnelWorkspace.stageAssignments[stageId] === subfunnelId && fallbackSubfunnel?.id) {
            state.funnelWorkspace.stageAssignments[stageId] = fallbackSubfunnel.id;
          }
        });

        Object.keys(state.funnelWorkspace?.leadAssignments || {}).forEach((leadId) => {
          if (state.funnelWorkspace.leadAssignments[leadId] === subfunnelId && fallbackSubfunnel?.id) {
            state.funnelWorkspace.leadAssignments[leadId] = fallbackSubfunnel.id;
          }
        });

        if (state.activeSubfunnelId === subfunnelId) {
          state.activeSubfunnelId = null;
        }

        if (previousStructureSubfunnelId === subfunnelId) {
          state.structureSubfunnelId = fallbackSubfunnel?.id || null;
        }
      },
      persist: async () => {
        if (state.funnelDataLoadedFromSupabase) {
          await persistFunnelWorkspaceToSupabase();
        }
      },
      afterPersist: async () => {
        renderAll();
      }
    }).catch((error) => {
      alert(`Erro ao excluir subfunil: ${formatSupabaseError(error)}`);
    });
  }

  async function deleteFunnelByIdInternal(funnelId) {
    const funnel = getFunnelById(funnelId);
    if (!funnel) return false;
    const currentFunnels = [...(state.funnelWorkspace?.funnels || [])];
    if (currentFunnels.length <= 1) {
      alert("Mantenha ao menos um funil cadastrado.");
      return false;
    }

    const fallbackFunnel = currentFunnels.find((item) => item.id !== funnel.id) || null;
    const fallbackSubfunnelId = fallbackFunnel?.subfunnels?.[0]?.id || null;
    const removedSubfunnelIds = new Set((funnel.subfunnels || []).map((item) => item.id));
    const previousStructureFunnelId = state.structureFunnelId;

    await executeFunnelWorkspaceMetaMutation({
      applyLocal: () => {
        const localFunnel = getFunnelById(funnelId);
        if (!localFunnel) throw new Error("Funil não encontrado para exclusão.");
        const localRemovedSubfunnelIds = new Set((localFunnel.subfunnels || []).map((item) => item.id));
        rememberDeletedFunnelWorkspaceIds({
          funnels: [localFunnel.id],
          subfunnels: [...localRemovedSubfunnelIds]
        });

        removeFunnelLocally(localFunnel.id);

        Object.keys(state.funnelWorkspace?.stageAssignments || {}).forEach((stageId) => {
          if (localRemovedSubfunnelIds.has(state.funnelWorkspace.stageAssignments[stageId]) && fallbackSubfunnelId) {
            state.funnelWorkspace.stageAssignments[stageId] = fallbackSubfunnelId;
          }
        });

        Object.keys(state.funnelWorkspace?.leadAssignments || {}).forEach((leadId) => {
          if (localRemovedSubfunnelIds.has(state.funnelWorkspace.leadAssignments[leadId]) && fallbackSubfunnelId) {
            state.funnelWorkspace.leadAssignments[leadId] = fallbackSubfunnelId;
          }
        });

        if (state.activeFunnelId === localFunnel.id) {
          state.activeFunnelId = fallbackFunnel?.id || null;
          state.activeSubfunnelId = null;
        }

        if (previousStructureFunnelId === localFunnel.id) {
          state.structureFunnelId = fallbackFunnel?.id || null;
          state.structureSubfunnelId = fallbackSubfunnelId;
        }
      },
      persist: async () => {
        if (state.funnelDataLoadedFromSupabase) {
          await persistFunnelWorkspaceToSupabase();
        }
      },
      afterPersist: async () => {
        renderAll();
        if (state.activeView === "funil") {
          bindFunnelViewPreservingSidebar();
        }
      }
    });
    return true;
  }

  async function deleteFunnel(funnelId) {
    const funnel = getFunnelById(funnelId);
    if (!funnel) return;

    if (!confirm(`Tem certeza que deseja excluir o funil "${funnel.name}"?`)) return;

    if (!canManageStages(funnel)) {
      requestAdminAuthorization({
        requestType: "delete_funnel",
        title: "Solicitar exclusao de funil",
        description: `Voce nao tem permissao para excluir o funil "${funnel.name}". Sua solicitacao sera enviada para o administrador.`,
        entityType: "funnel",
        entityId: funnel.id,
        payload: {
          funnel_id: funnel.id,
          funnel_name: funnel.name
        }
      });
      return;
    }

    try {
      await deleteFunnelByIdInternal(funnelId);
    } catch (error) {
      alert(`Erro ao excluir funil: ${formatSupabaseError(error)}`);
    }
  }

  function moveSubfunnelToIndex(funnelId, subfunnelId, targetIndex) {
    const funnel = getFunnelById(funnelId);
    if (!funnel || !canManageStages(funnel)) return;
    const reordered = reorderSubfunnelsInFunnelLocally(funnelId, subfunnelId, targetIndex);
    if (!reordered) return;
    queueSubfunnelOrderSync(funnelId);
    finalizeLocalMutation({
      notifyScope: null,
      refresh: false,
      syncSelectedLeadIds: false,
      writeCache: false
    });
  }

  function clearSubfunnelDragIndicators() {
    els.funnelCardsGrid?.querySelectorAll("[data-subfunnel-card]").forEach((item) => {
      item.classList.remove("is-dragging", "drag-before", "drag-after", "dragging-target");
    });
  }

  function getSubfunnelCardDropTarget(target) {
    return target?.closest?.("[data-subfunnel-card]") || null;
  }

  function renderFunnelDiagram(funnel = null) {
    if (!els.funnelDiagramPanel) return;
    const subfunnels = funnel?.subfunnels || [];
    if (!funnel || !subfunnels.length) {
      els.funnelDiagramPanel.classList.add("hidden");
      els.funnelDiagramPanel.innerHTML = "";
      return;
    }

    const isDarkTheme = (
      document.documentElement.getAttribute("data-theme") === "dark"
      || document.body.getAttribute("data-theme") === "dark"
    );
    const palette = getFunnelFlowPalette(subfunnels.length, { dark: isDarkTheme });
    const total = subfunnels.length;
    const maxInset = Math.min(42, 18 + (total * 3.4));
    const columnsTemplate = subfunnels
      .map((_, index) => Math.max(0.46, 1.52 - (index * 0.3)).toFixed(2))
      .map((value) => `${value}fr`)
      .join(" ");
    const segmentsMarkup = subfunnels.map((subfunnel, index) => `
      <div
        class="funnel-diagram-segment${index === 0 ? " is-first" : ""}${index === total - 1 ? " is-last" : ""}"
        tabindex="0"
        aria-label="Subfunil ${index + 1}: ${escapeHtml(subfunnel.name)}"
        style="
          --segment-bg:${palette[index % palette.length]};
          --left-inset:${((index / total) * maxInset).toFixed(2)}%;
          --right-inset:${(((index + 1) / total) * maxInset).toFixed(2)}%;
          z-index:${total - index};
        "
      >
        <div class="funnel-diagram-segment-shape" aria-hidden="true"></div>
        <div class="funnel-diagram-segment-label">
          <span class="funnel-diagram-segment-index">${index + 1}</span>
          <strong>${escapeHtml(subfunnel.name)}</strong>
        </div>
      </div>
    `).join("");

    els.funnelDiagramPanel.classList.remove("hidden");
    els.funnelDiagramPanel.innerHTML = `
      <div class="funnel-diagram-shell">
        <div class="funnel-diagram-header">
          <span>Fluxo do funil</span>
        </div>
        <div class="funnel-diagram-body" style="grid-template-columns:${columnsTemplate};">
          ${segmentsMarkup}
        </div>
      </div>
    `;
  }

  function openSubfunnelDetail(funnelId, subfunnelId) {
    const funnel = getFunnelById(funnelId);
    const subfunnel = getSubfunnelById(subfunnelId);
    if (!funnel || !subfunnel) return;
    state.funnelSidebarOpen = getPreservedFunnelSidebarState();
    state.activeFunnelId = funnel.id;
    state.activeSubfunnelId = subfunnelId;
    bindFunnelViewPreservingSidebar();
    renderAll();
    requestAnimationFrame(() => {
      scrollFunnelDetailToTop();
    });
  }

  function handleSubfunnelCardDragStart(event) {
    const item = getSubfunnelCardDropTarget(event.target);
    if (!item) {
      event.preventDefault();
      return;
    }

    const funnelId = String(item.dataset.parentFunnelId || "").trim();
    const subfunnelId = String(item.dataset.subfunnelOpen || "").trim();
    if (!funnelId || !subfunnelId || !canManageStages(getFunnelById(funnelId))) {
      event.preventDefault();
      return;
    }

    state.subfunnelCardDrag = { funnelId, subfunnelId };
    clearSubfunnelDragIndicators();
    item.classList.add("is-dragging");
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", subfunnelId);
    }
  }

  function handleSubfunnelCardDragOver(event) {
    const dragged = state.subfunnelCardDrag;
    const item = getSubfunnelCardDropTarget(event.target);
    if (!dragged || !item || String(item.dataset.parentFunnelId || "") !== dragged.funnelId || item.dataset.subfunnelOpen === dragged.subfunnelId) return;

    event.preventDefault();
    clearSubfunnelDragIndicators();
    item.classList.add("dragging-target");

    const rect = item.getBoundingClientRect();
    const placeAfter = event.clientX > rect.left + (rect.width / 2);
    item.classList.add(placeAfter ? "drag-after" : "drag-before");
    els.funnelCardsGrid?.querySelector(`[data-subfunnel-open="${dragged.subfunnelId}"]`)?.classList.add("is-dragging");
  }

  function handleSubfunnelCardDrop(event) {
    const dragged = state.subfunnelCardDrag;
    const item = getSubfunnelCardDropTarget(event.target);
    clearSubfunnelDragIndicators();
    if (!dragged || !item || String(item.dataset.parentFunnelId || "") !== dragged.funnelId || item.dataset.subfunnelOpen === dragged.subfunnelId) {
      state.subfunnelCardDrag = null;
      return;
    }

    event.preventDefault();
    const funnel = getFunnelById(dragged.funnelId);
    const subfunnels = funnel?.subfunnels || [];
    const currentIndex = subfunnels.findIndex((subfunnel) => subfunnel.id === dragged.subfunnelId);
    const targetIndex = subfunnels.findIndex((subfunnel) => subfunnel.id === item.dataset.subfunnelOpen);
    if (currentIndex === -1 || targetIndex === -1) {
      state.subfunnelCardDrag = null;
      return;
    }

    const rect = item.getBoundingClientRect();
    const placeAfter = event.clientX > rect.left + (rect.width / 2);
    const nextIndex = placeAfter
      ? (currentIndex < targetIndex ? targetIndex : targetIndex + 1)
      : (currentIndex < targetIndex ? targetIndex - 1 : targetIndex);

    state.subfunnelCardDrag = { recentlyDroppedAt: Date.now() };
    moveSubfunnelToIndex(dragged.funnelId, dragged.subfunnelId, nextIndex);
  }

  function handleSubfunnelCardDragEnd() {
    if (!state.subfunnelCardDrag?.recentlyDroppedAt) {
      state.subfunnelCardDrag = null;
    }
    clearSubfunnelDragIndicators();
  }

  function closeFunnelDetail() {
    state.funnelSidebarOpen = getPreservedFunnelSidebarState();
    state.activeSubfunnelId = null;
    bindFunnelViewPreservingSidebar();
    renderAll();
  }

  function openFunnelSidebarOnly() {
    if (state.funnelSidebarOpen) {
      state.funnelSidebarOpen = false;
      syncPrimaryMenuState();
      writeStoredFunnelUiState();
      renderAll();
      return;
    }

    state.funnelSidebarOpen = true;
    if (state.activeView === "funil" && !state.activeFunnelId) {
      state.activeView = getDefaultAllowedView();
    }
    syncPrimaryMenuState();
    writeStoredFunnelUiState();
    renderAll();
  }

  function syncPrimaryMenuState() {
    document.querySelectorAll(".menu-item[data-view]").forEach((btn) => {
      const viewName = btn.dataset.view;
      const isFunil = viewName === "funil";
      const active = isFunil ? (state.funnelSidebarOpen || state.activeView === "funil") : state.activeView === viewName;
      btn.classList.toggle("active", active);
    });
  }

  function isAdminOverlayView(name) {
    return name === "equipe" || name === "configuracoes";
  }

  function captureAdminOverlayReturnState() {
    return {
      view: state.activeView,
      activeFunnelId: state.activeFunnelId,
      activeSubfunnelId: state.activeSubfunnelId,
      funnelSidebarOpen: state.funnelSidebarOpen
    };
  }

  function closeAdminOverlayView() {
    const fallbackState = state.adminOverlayReturnState || {
      view: getDefaultAllowedView(),
      activeFunnelId: null,
      activeSubfunnelId: null,
      funnelSidebarOpen: false
    };

    state.adminOverlayReturnState = null;
    state.activeFunnelId = fallbackState.activeFunnelId || null;
    state.activeSubfunnelId = fallbackState.activeSubfunnelId || null;
    state.funnelSidebarOpen = fallbackState.view === "funil"
      ? Boolean(fallbackState.funnelSidebarOpen)
      : false;

    bindView(fallbackState.view, {
      resetFunnelDetail: false,
      preserveFunnelSidebarState: true,
      keepFunnelSidebarOpen: state.funnelSidebarOpen
    });
    renderAll();
  }

  function syncFunnelSidebarVisibility() {
    const visible = state.funnelSidebarOpen && !isAdminOverlayView(state.activeView);
    els.app?.classList.toggle("funnel-sidebar-active", visible);
    els.crmFunnelSidebar?.classList.toggle("hidden", !visible);
  }

  function readStoredSidebarCollapsed() {
    try {
      const storedValue = window.localStorage.getItem(SIDEBAR_COLLAPSE_STORAGE_KEY);
      if (storedValue != null) return storedValue === "true";
      return window.localStorage.getItem(LEGACY_SIDEBAR_COLLAPSE_STORAGE_KEY) === "true";
    } catch (_error) {
      return false;
    }
  }

  function writeStoredSidebarCollapsed(value) {
    try {
      window.localStorage.setItem(SIDEBAR_COLLAPSE_STORAGE_KEY, value ? "true" : "false");
    } catch (_error) {
      // ignore local storage failures
    }
  }

  function applySidebarCollapsed(collapsed, options = {}) {
    const persist = options.persist !== false;
    const shouldCollapse = supportsCollapsibleCrmNavbar() && Boolean(collapsed);

    state.sidebarCollapsed = shouldCollapse;
    els.app?.classList.toggle("sidebar-collapsed", shouldCollapse);
    els.sidebarCollapseBtn?.setAttribute("aria-label", shouldCollapse ? "Menu lateral recolhido" : "Recolher menu lateral");
    els.sidebarExpandBtn?.setAttribute("aria-label", shouldCollapse ? "Expandir menu lateral" : "Menu lateral expandido");
    els.crmNavbarCollapseBtn?.setAttribute("aria-label", shouldCollapse ? "Menu lateral do CRM recolhido" : "Recolher menu lateral do CRM");
    els.crmNavbarExpandBtn?.setAttribute("aria-label", shouldCollapse ? "Expandir menu lateral do CRM" : "Menu lateral do CRM expandido");

    if (persist) {
      writeStoredSidebarCollapsed(shouldCollapse);
    }

    requestAnimationFrame(() => {
      updateStickyLayout();
      syncPipelineScrollBars();
    });
  }

  function toggleSidebarCollapsed(forceValue = null) {
    const nextValue = forceValue === null ? !state.sidebarCollapsed : Boolean(forceValue);
    applySidebarCollapsed(nextValue);
  }

  function syncSidebarCollapsedForViewport() {
    if (!supportsCollapsibleCrmNavbar()) {
      applySidebarCollapsed(false, { persist: false });
      return;
    }

    applySidebarCollapsed(readStoredSidebarCollapsed(), { persist: false });
  }

  function setMobileFiltersOpen(shouldOpen) {
    if (!els.mobileFiltersPanel || !els.mobileFiltersBtn) return;
    els.mobileFiltersPanel.classList.toggle("hidden", !shouldOpen);
    els.mobileFiltersBtn.classList.toggle("is-open", shouldOpen);
    els.mobileFiltersBtn.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    els.mobileFiltersBtn.setAttribute("aria-label", shouldOpen ? "Fechar filtros" : "Abrir filtros");
    requestAnimationFrame(() => {
      updateStickyLayout();
      syncPipelineScrollBars();
    });
  }

  function setDesktopFiltersOpen(shouldOpen) {
    if (!els.desktopFiltersPanel || !els.desktopFiltersBtn) return;
    els.desktopFiltersPanel.classList.toggle("hidden", !shouldOpen);
    els.desktopFiltersBtn.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    els.desktopFiltersBtn.classList.toggle("is-open", shouldOpen);
    requestAnimationFrame(() => {
      updateStickyLayout();
      syncPipelineScrollBars();
    });
  }

  const FILTER_SELECTION_KEYS = {
    category: "category",
    group: "group",
    funnel: "funnel",
    subfunnel: "subfunnel",
    owner: "owner",
    month: "month",
    stage: "stage",
    leadSource: "leadSource",
    socialSource: "socialSource",
    indicator: "indicator",
    indicatorSector: "indicatorSector"
  };

  function normalizeFilterValues(values) {
    return [...new Set(
      (Array.isArray(values) ? values : [values])
        .map((item) => String(item || "").trim())
        .filter(Boolean)
    )];
  }

  function getFilterValues(filterKey, selectEl = null) {
    const stateValues = normalizeFilterValues(state.filterSelections?.[filterKey] || []);
    if (stateValues.length) return stateValues;
    const fallbackValue = String(selectEl?.value || "").trim();
    return fallbackValue ? [fallbackValue] : [];
  }

  function setFilterValues(filterKey, values, selectEl = null) {
    const normalizedValues = normalizeFilterValues(values);
    state.filterSelections[filterKey] = normalizedValues;
    if (selectEl) {
      selectEl.value = normalizedValues[0] || "";
      selectEl.dataset.filterValues = JSON.stringify(normalizedValues);
    }
    return normalizedValues;
  }

  function clearFilterSelections(filterKeys = []) {
    const filterSelectMap = {
      category: [els.categoryFilter, els.mobileCategoryFilter],
      group: [els.groupFilter, els.mobileGroupFilter],
      funnel: [els.funnelFilter, els.mobileFunnelFilter],
      subfunnel: [els.subfunnelFilter, els.mobileSubfunnelFilter],
      owner: [els.ownerFilter, els.mobileOwnerFilter],
      month: [els.monthFilter, els.mobileMonthFilter],
      stage: [els.stageFilter, els.mobileStageFilter],
      leadSource: [els.leadSourceFilter, els.mobileLeadSourceFilter],
      socialSource: [els.socialSourceFilter, els.mobileSocialSourceFilter],
      indicator: [els.indicatorFilter, els.mobileIndicatorFilter],
      indicatorSector: [els.indicatorSectorFilter, els.mobileIndicatorSectorFilter]
    };

    (Array.isArray(filterKeys) ? filterKeys : []).forEach((filterKey) => {
      if (FILTER_SELECTION_KEYS[filterKey]) {
        state.filterSelections[filterKey] = [];
        (filterSelectMap[filterKey] || []).forEach((selectEl) => {
          if (!selectEl) return;
          selectEl.value = "";
          selectEl.dataset.filterValues = "[]";
        });
      }
    });
  }

  function intersectFilterValues(values, allowedValues = []) {
    const allowed = new Set(normalizeFilterValues(allowedValues));
    return normalizeFilterValues(values).filter((value) => allowed.has(value));
  }

  function matchesFilterSelection(filterValues, currentValue) {
    const normalizedValues = normalizeFilterValues(filterValues);
    if (!normalizedValues.length) return true;
    return normalizedValues.includes(String(currentValue || "").trim());
  }

  function getCanonicalFilterValues(values, map, kind = "generic") {
    return normalizeFilterValues(values)
      .map((value) => getCanonicalMappedValue(value, map, kind))
      .filter(Boolean);
  }

  function getMultiFilterButtonLabel(values, defaultLabel, formatLabel = (value) => value) {
    const normalizedValues = normalizeFilterValues(values);
    if (!normalizedValues.length) return defaultLabel;
    if (normalizedValues.length === 1) return formatLabel(normalizedValues[0]);
    return `${formatLabel(normalizedValues[0])} +${normalizedValues.length - 1}`;
  }

  function syncMobileFilterControls() {
    const setMobileValue = (mobileEl, filterKey, desktopEl) => {
      if (!mobileEl) return;
      const values = getFilterValues(filterKey, desktopEl);
      mobileEl.value = values.length === 1 ? values[0] : "";
    };

    setMobileValue(els.mobileCategoryFilter, "category", els.categoryFilter);
    setMobileValue(els.mobileGroupFilter, "group", els.groupFilter);
    setMobileValue(els.mobileFunnelFilter, "funnel", els.funnelFilter);
    setMobileValue(els.mobileSubfunnelFilter, "subfunnel", els.subfunnelFilter);
    setMobileValue(els.mobileOwnerFilter, "owner", els.ownerFilter);
    setMobileValue(els.mobileMonthFilter, "month", els.monthFilter);
    setMobileValue(els.mobileStageFilter, "stage", els.stageFilter);
    setMobileValue(els.mobileLeadSourceFilter, "leadSource", els.leadSourceFilter);
    setMobileValue(els.mobileSocialSourceFilter, "socialSource", els.socialSourceFilter);
    setMobileValue(els.mobileIndicatorFilter, "indicator", els.indicatorFilter);
    setMobileValue(els.mobileIndicatorSectorFilter, "indicatorSector", els.indicatorSectorFilter);
  }

  function getActiveFilterSummaryItems() {
    const items = [];
    const addItems = (label, rawValues, formatter = (value) => value) => {
      normalizeFilterValues(rawValues).forEach((rawValue) => {
        const displayValue = String(formatter(rawValue) || "").trim();
        if (!displayValue) return;
        items.push({ label, value: displayValue });
      });
    };

    addItems("Categoria", getFilterValues("category", els.categoryFilter));
    addItems("Grupo", getFilterValues("group", els.groupFilter), getGroupFilterDisplayLabel);
    addItems("Funil", getFilterValues("funnel", els.funnelFilter), (value) => getFunnelById(value)?.name || "");
    addItems("Subfunil", getFilterValues("subfunnel", els.subfunnelFilter), (value) => getSubfunnelById(value)?.name || "");
    addItems("Responsável", getFilterValues("owner", els.ownerFilter));
    addItems("Mês", getFilterValues("month", els.monthFilter), formatMonthLabel);
    addItems("Origem", getFilterValues("leadSource", els.leadSourceFilter));
    addItems("Pipeline", getFilterValues("stage", els.stageFilter), getStageName);
    addItems("Canal", getFilterValues("socialSource", els.socialSourceFilter));
    addItems("Indicado por", getFilterValues("indicator", els.indicatorFilter));
    addItems("Setor do indicado", getFilterValues("indicatorSector", els.indicatorSectorFilter));

    return items;
  }

  function renderDesktopFilterSummary() {
    const items = getActiveFilterSummaryItems();

    if (els.desktopFiltersCount) {
      els.desktopFiltersCount.textContent = String(items.length);
      els.desktopFiltersCount.classList.toggle("hidden", items.length === 0);
    }

    if (els.desktopFiltersBtn) {
      els.desktopFiltersBtn.classList.toggle("has-active-filters", items.length > 0);
    }

    if (els.desktopClearFiltersBtn) {
      els.desktopClearFiltersBtn.classList.toggle("filter-clear-active", items.length > 0);
    }
    if (els.mobileClearFiltersBtn) {
      els.mobileClearFiltersBtn.classList.toggle("filter-clear-active", items.length > 0);
    }

    if (!els.desktopFiltersSummary) return;

    els.desktopFiltersSummary.innerHTML = items.length
      ? items.map((item) => `<span class="filter-chip"><small>${escapeHtml(item.label)}</small>${escapeHtml(item.value)}</span>`).join("")
      : '<span class="filter-summary-empty">Nenhum filtro aplicado</span>';
  }

  function normalizeMobileFilterTexts() {
    const topPanel = document.querySelector('#appScreen > #mobileFiltersPanel');
    topPanel?.querySelector('label[for="mobileFunnelFilter"]')?.replaceChildren("Funil");
    topPanel?.querySelector('label[for="mobileSubfunnelFilter"]')?.replaceChildren("Subfunil");
    topPanel?.querySelector('label[for="mobileStageFilter"]')?.replaceChildren("Pipeline");
    topPanel?.querySelector('label[for="mobileOwnerFilter"]')?.replaceChildren("Responsável");
    topPanel?.querySelector('label[for="mobileMonthFilter"]')?.replaceChildren("Mês");

    const funnelDefault = topPanel?.querySelector('#mobileFunnelFilter option[value=""]');
    const subfunnelDefault = topPanel?.querySelector('#mobileSubfunnelFilter option[value=""]');
    const ownerDefault = topPanel?.querySelector('#mobileOwnerFilter option[value=""]');
    const monthDefault = topPanel?.querySelector('#mobileMonthFilter option[value=""]');
    const stageDefault = topPanel?.querySelector('#mobileStageFilter option[value=""]');
    topPanel?.querySelector('label[for="mobileLeadSourceFilter"]')?.replaceChildren("Origem do Lead");
    const leadSourceDefault = topPanel?.querySelector('#mobileLeadSourceFilter option[value=""]');
    if (funnelDefault) funnelDefault.textContent = "Todos os funis";
    if (subfunnelDefault) subfunnelDefault.textContent = "Todos os subfunis";
    if (ownerDefault) ownerDefault.textContent = "Todos os responsáveis";
    if (monthDefault) monthDefault.textContent = "Todos os meses";
    if (stageDefault) stageDefault.textContent = "Todos os pipelines";
    if (leadSourceDefault) leadSourceDefault.textContent = "Todas as origens";
  }

  function stageTypeLabel(type, customStageType = "") {
    const customLabel = String(customStageType || "").trim();
    if (type === "personalizado" && customLabel) return customLabel;

    const map = {
      andamento: "Andamento",
      fechado: "Fechado",
      cancelado: "Cancelado",
      espera: "Espera",
      personalizado: "Personalizado"
    };
    return map[type] || customLabel || "Andamento";
  }

  function updateStickyLayout() {
    const root = document.documentElement;
    if (!root) return;

    const mainRect = document.querySelector(".main")?.getBoundingClientRect?.();
    const shellHeaderHeight = document.querySelector(".shell-header")?.offsetHeight || 0;
    const mobileTopbarVisible = !!(els.mobileTopbar && window.getComputedStyle(els.mobileTopbar).display !== "none");
    const mobileTopbarHeight = mobileTopbarVisible ? els.mobileTopbar.offsetHeight : 0;
    const topbarHeight = els.topbar ? els.topbar.offsetHeight : 0;
    const metricsHeight = els.metricsSection ? els.metricsSection.offsetHeight : 0;
    const pipelineScrollbarHeight = els.pipelineScrollTop ? els.pipelineScrollTop.offsetHeight : 0;
    const funilStickyHeight = els.funilStickyHead ? els.funilStickyHead.offsetHeight : (metricsHeight + pipelineScrollbarHeight);
    const isFunilActive = state.activeView === "funil" && document.getElementById("view-funil")?.classList.contains("active-view");
    const pipelineViewportWidth = isFunilActive ? Math.max(0, Math.floor(mainRect?.width || 0)) : 0;
    const pipelineViewportLeft = isFunilActive ? Math.max(0, Math.floor(mainRect?.left || 0)) : 0;

    root.style.setProperty("--mobile-topbar-height", `${mobileTopbarHeight}px`);
    root.style.setProperty("--shell-header-height", `${shellHeaderHeight}px`);
    root.style.setProperty("--topbar-height", `${topbarHeight}px`);
    root.style.setProperty("--topbar-sticky-offset", `${mobileTopbarHeight}px`);
    root.style.setProperty("--metrics-sticky-offset", `${mobileTopbarHeight + topbarHeight}px`);
    root.style.setProperty("--pipeline-scrollbar-height", `${pipelineScrollbarHeight}px`);
    root.style.setProperty("--pipeline-scrollbar-sticky-offset", `${mobileTopbarHeight + topbarHeight + metricsHeight + 8}px`);
    root.style.setProperty("--funil-sticky-height", `${funilStickyHeight}px`);
    root.style.setProperty("--pipeline-scrollbar-fixed-left", `${pipelineViewportLeft}px`);
    root.style.setProperty("--pipeline-scrollbar-fixed-width", `${pipelineViewportWidth}px`);

    const topScrollbar = els.pipelineScrollTop;
    if (topScrollbar) {
      topScrollbar.style.left = `${pipelineViewportLeft}px`;
      topScrollbar.style.width = `${pipelineViewportWidth}px`;
      topScrollbar.style.bottom = "0px";
      topScrollbar.style.position = "fixed";
      topScrollbar.style.zIndex = "70";
    }
  }

  function bindOverlayDismiss(overlay, closeFn) {
    if (!overlay || typeof closeFn !== "function") return;

    let startedOnBackdrop = false;

    overlay.addEventListener("pointerdown", (event) => {
      startedOnBackdrop = event.target === overlay;
    });

    overlay.addEventListener("pointercancel", () => {
      startedOnBackdrop = false;
    });

    overlay.addEventListener("click", (event) => {
      if (startedOnBackdrop && event.target === overlay) {
        closeFn();
      }
      startedOnBackdrop = false;
    });
  }

  function isPresetStageType(value) {
    return PRESET_STAGE_TYPES.some((item) => item.value === value);
  }

  function getAvailablePresetStageTypes() {
    const hidden = new Set([
      ...state.hiddenPresetStageTypes,
      ...getStoredHiddenPresetStageTypes()
    ]);

    return PRESET_STAGE_TYPES.filter((item) => !hidden.has(item.value));
  }

  function getSelectableStageTypeOptions(includePersonalized = true) {
    const presetOptions = getAvailablePresetStageTypes().map((item) => ({
      value: item.value,
      label: item.label
    }));

    const customOptions = getCustomStageTypes().map((item) => ({
      value: `custom:${item}`,
      label: item
    }));

    const options = [...presetOptions, ...customOptions];
    if (includePersonalized) {
      options.push({ value: "personalizado", label: "Criar um novo" });
    }

    return options;
  }

  function getFallbackStageTypeSelection(excludedValue = "") {
    const nextOption = getSelectableStageTypeOptions(false).find((item) => item.value !== excludedValue);
    if (!nextOption) return { stage_type: "andamento", custom_stage_type: null };
    if (nextOption.value.startsWith("custom:")) {
      return {
        stage_type: "personalizado",
        custom_stage_type: nextOption.value.replace(/^custom:/, "")
      };
    }
    return { stage_type: nextOption.value, custom_stage_type: null };
  }

  function sortStageTypeNames(values) {
    return [...new Set(
      (Array.isArray(values) ? values : [])
        .map((item) => String(item || "").trim())
        .filter(Boolean)
    )].sort((a, b) => a.localeCompare(b, "pt-BR"));
  }

  function normalizeStageTypeNameKey(value) {
    return String(value || "").trim().toLowerCase();
  }

  function getCustomStageTypes() {
    return sortStageTypeNames([
      ...state.customStageTypes,
      ...getStoredCustomStageTypes(),
      ...state.stages.map((stage) => String(stage.custom_stage_type || "").trim())
    ]);
  }

  async function saveCustomStageType(name) {
    const normalized = String(name || "").trim();
    if (!normalized) return true;

    state.customStageTypes = persistCustomStageTypes([...state.customStageTypes, normalized]);

    const { error } = await state.supabase
      .from("stage_type_catalog")
      .upsert(
        { name: normalized, created_by: state.currentUser?.id || null },
        { onConflict: "name" }
      );

    if (error && !isMissingRelationError(error)) {
      console.error("Erro ao salvar tipo personalizado:", error);
      return false;
    }

    return true;
  }

  async function deleteCustomStageTypeFromCatalog(name) {
    const normalized = String(name || "").trim();
    if (!normalized) return true;

    state.customStageTypes = persistCustomStageTypes(
      state.customStageTypes.filter((item) => item !== normalized)
    );

    const { error } = await state.supabase
      .from("stage_type_catalog")
      .delete()
      .eq("name", normalized);

    if (error && !isMissingRelationError(error)) {
      console.error("Erro ao excluir tipo personalizado:", error);
      return false;
    }

    return true;
  }

  async function renameCustomStageType(oldName, nextName) {
    const previous = String(oldName || "").trim();
    const next = String(nextName || "").trim();
    if (!previous || !next || previous === next) return true;

    const { error: updateError } = await state.supabase
      .from("stages")
      .update({ custom_stage_type: next })
      .eq("custom_stage_type", previous);

    if (updateError) {
      console.error("Erro ao renomear tipo personalizado nas etapas:", updateError);
      return false;
    }

    const saved = await saveCustomStageType(next);
    if (!saved) return false;

    const removed = await deleteCustomStageTypeFromCatalog(previous);
    if (!removed) return false;

    state.customStageTypes = persistCustomStageTypes(
      state.customStageTypes.map((item) => (item === previous ? next : item))
    );

    return true;
  }

  function refreshStageTypeOptions(selectedValue = "", customValue = "") {
    if (!els.stageType) return;

    const finalOptions = getSelectableStageTypeOptions(true).map((item) => [item.value, item.label]);
    const fallbackValue = finalOptions[0]?.[0] || "personalizado";

    els.stageType.innerHTML = finalOptions.map(([value, label]) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`).join("");

    const resolvedValue = selectedValue || (customValue ? `custom:${customValue}` : fallbackValue);
    els.stageType.value = finalOptions.some(([value]) => value === resolvedValue) ? resolvedValue : (customValue ? "personalizado" : fallbackValue);
    if (els.customStageType) els.customStageType.value = els.stageType.value === "personalizado" ? (customValue || "") : "";
    renderCustomStageTypeList();
    toggleCustomStageTypeField();
  }

  function renderCustomStageTypeList() {
    if (!els.savedStageTypes || !els.savedStageTypesGroup) return;

    const types = getSelectableStageTypeOptions(false);
    els.savedStageTypesGroup.classList.remove("hidden");

    if (!types.length) {
      els.savedStageTypes.innerHTML = '<div class="saved-stage-types-empty">Nenhum tipo disponivel na lista. Use "Criar um novo" para adicionar outro.</div>';
      return;
    }

    const selected = String(els.stageType?.value || "");
    els.savedStageTypes.innerHTML = types.map((type) => {
      const active = selected === type.value;
      return `
        <div class="saved-stage-type ${active ? "active" : ""}">
          <button type="button" class="saved-stage-type-select" data-stage-type-value="${escapeHtml(type.value)}">${escapeHtml(type.label)}</button>
        </div>
      `;
    }).join("");
  }

  function toggleCustomStageTypeField() {
    if (!els.customStageTypeGroup) return;
    const selected = String(els.stageType?.value || "andamento");
    const isNewCustom = selected === "personalizado";
    const isExistingCustom = selected.startsWith("custom:");
    const selectedOption = getSelectableStageTypeOptions(false).find((item) => item.value === selected);
    const selectedLabel = selectedOption?.label || stageTypeLabel(selected);

    const canEditCustom = isNewCustom || isExistingCustom;

    els.customStageTypeGroup.classList.remove("hidden");
    if (els.customStageType) {
      els.customStageType.disabled = !canEditCustom;
      if (isNewCustom) {
        els.customStageType.placeholder = "Criar um novo tipo";
      } else if (isExistingCustom) {
        els.customStageType.placeholder = "Personalize o tipo selecionado";
      } else {
        els.customStageType.placeholder = "Este tipo padrao nao pode ser personalizado aqui";
      }

      if (isNewCustom) {
        els.customStageType.value = els.customStageType.value || "";
      } else if (isExistingCustom) {
        els.customStageType.value = selected.replace(/^custom:/, "");
      } else {
        els.customStageType.value = selectedLabel;
      }
    }
    const canRemoveSelected = selected && selected !== "personalizado";
    if (els.savedStageTypeActions) els.savedStageTypeActions.classList.toggle("hidden", !canRemoveSelected);
    if (els.removeSelectedStageTypeBtn) {
      els.removeSelectedStageTypeBtn.classList.toggle("hidden", !canRemoveSelected);
      if (canRemoveSelected) {
        els.removeSelectedStageTypeBtn.textContent = `Remover tipo "${selectedOption?.label || stageTypeLabel(selected)}"`;
      }
    }
    if (els.removeCustomTypeBtn) els.removeCustomTypeBtn.classList.toggle("hidden", true);
    renderCustomStageTypeList();
  }

  async function removeCurrentCustomStageType() {
    const selected = String(els.stageType?.value || "");
    if (!selected || selected === "personalizado") {
      els.stageType.value = getSelectableStageTypeOptions(true)[0]?.value || "personalizado";
      if (els.customStageType) els.customStageType.value = "";
      toggleCustomStageTypeField();
      return;
    }

    const selectedOption = getSelectableStageTypeOptions(false).find((item) => item.value === selected);
    const selectedLabel = selectedOption?.label || stageTypeLabel(selected);
    if (!confirm(`Remover o tipo "${selectedLabel}" da lista? Os pipelines com esse tipo serao movidos para outro tipo disponivel.`)) return;

    if (!canManageStages()) {
      requestAdminAuthorization({
        requestType: "delete_stage_type",
        title: "Solicitar exclusao de tipo de pipeline",
        description: `Voce nao tem permissao para excluir o tipo "${selectedLabel}". Sua solicitacao sera enviada para o administrador.`,
        entityType: "stage_type",
        entityId: selected,
        payload: {
          stage_type_value: selected,
          stage_type_label: selectedLabel
        }
      });
      return;
    }

    let affected = [];
    if (selected.startsWith("custom:")) {
      const customValue = selected.replace(/^custom:/, "");
      if (!customValue) return;
      affected = state.stages.filter((stage) => String(stage.custom_stage_type || "").trim() === customValue);
    } else if (isPresetStageType(selected)) {
      affected = state.stages.filter((stage) => stage.stage_type === selected && !String(stage.custom_stage_type || "").trim());
    }

    const fallback = getFallbackStageTypeSelection(selected);
    if (affected.length) {
      const { error } = await state.supabase
        .from("stages")
        .update(fallback)
        .in("id", affected.map((stage) => stage.id));
      if (error) return alert(`Erro no Supabase: ${error.message}`);
    }

    if (selected.startsWith("custom:")) {
      const removed = await deleteCustomStageTypeFromCatalog(selected.replace(/^custom:/, ""));
      if (!removed) return alert("Nao foi possivel excluir o tipo personalizado da lista.");
    } else if (isPresetStageType(selected)) {
      state.hiddenPresetStageTypes = persistHiddenPresetStageTypes([
        ...state.hiddenPresetStageTypes,
        selected
      ]);
    }

    els.stageType.value = getSelectableStageTypeOptions(true).find((item) => item.value !== selected)?.value || "personalizado";
    if (els.customStageType) els.customStageType.value = "";
    toggleCustomStageTypeField();
    await loadAppData({ includeProfiles: state.profilesLoaded });
  }

  function getPlanCatalogWithDefault() {
    return [
      { name: "Sem plano", value: 0 },
      ...getPlanCatalog().filter((item) => String(item.name || "").trim().toLowerCase() !== "sem plano")
    ];
  }

  function getPlanSelectValue(name) {
    const normalized = String(name || "").trim().toLowerCase();
    if (!normalized) return "Sem plano";
    const knownPlan = getPlanCatalogWithDefault().find((item) => item.name.trim().toLowerCase() === normalized);
    return knownPlan ? knownPlan.name : "__custom__";
  }

  function applyPlanSelection(index, selectedName) {
    const draft = state.modalPlans[index];
    if (!draft) return;

    const normalized = String(selectedName || "").trim();
    if (!normalized || normalized === "__custom__") {
      if (!draft.name) draft.name = getDefaultPlanName(index);
      return;
    }

    const knownPlan = getPlanCatalogWithDefault().find((item) => item.name === normalized);
    if (!knownPlan) return;

    draft.name = knownPlan.name;
    draft.value = Number(knownPlan.value || 0);
  }

  function getLeadPlanValueText(lead) {
    const plans = getLeadPlans(lead).filter((item) => !isNoPlanName(item.name));
    if (!plans.length) {
      const rawValue = Number(lead?.value || 0);
      return rawValue > 0 ? formatPlanValue(rawValue) : "Não fechou ainda";
    }

    return plans.map((item) => `${item.name}: ${formatPlanValue(item.value || 0)}`).join(" | ");
  }

  async function syncPlanValuesAcrossLeads(referencePlans, excludeLeadId = null) {
    const targetPlans = cleanPlanList(referencePlans).filter((item) => !isNoPlanName(item.name));
    if (!targetPlans.length) return 0;

    const targetMap = new Map(
      targetPlans.map((item) => [normalizePlanNameKey(item.name), Number(item.value || 0)])
    );

    const pendingUpdates = state.leads.reduce((acc, lead) => {
      if (lead.id === excludeLeadId) return acc;

      const currentPlans = getLeadPlans(lead);
      if (!currentPlans.length) return acc;

      let changed = false;
      const nextPlans = currentPlans.map((item) => {
        const key = normalizePlanNameKey(item.name);
        if (!targetMap.has(key)) return item;

        const nextValue = targetMap.get(key);
        if (Number(item.value || 0) === nextValue) return item;

        changed = true;
        return { ...item, value: nextValue };
      });

      if (!changed) return acc;

      const leadMeta = getLeadMeta(lead?.notes || "", lead?.value || 0);
      acc.push({
        id: lead.id,
        name: lead.name,
        payload: {
          value: getPlansTotalValue(nextPlans),
          notes: serializeLeadMeta({
            ...leadMeta,
            plans: nextPlans,
            plan: nextPlans[0]?.name || leadMeta.plan || "",
            legacyText: leadMeta.legacyText,
            observations: leadMeta.observations
          })
        }
      });
      return acc;
    }, []);

    if (!pendingUpdates.length) return 0;

    const results = await Promise.all(
      pendingUpdates.map((item) =>
        state.supabase
          .from("leads")
          .update(item.payload)
          .eq("id", item.id)
      )
    );

    const failed = results.find((result) => result.error);
    if (failed?.error) throw failed.error;

    await logChange(
      "sync",
      "lead",
      excludeLeadId,
      `${pendingUpdates.length} lead(s) tiveram o valor do plano sincronizado por ${getUserDisplayName()}.`,
      {
        plans: targetPlans,
        affected_leads: pendingUpdates.map((item) => ({ id: item.id, name: item.name }))
      }
    );

    return pendingUpdates.length;
  }

  function renderPlanItems() {
    if (!els.plansList) return;
    renderPlanSuggestions();

    if (!state.modalPlans.length) {
      els.plansList.innerHTML = '<div class="plan-empty">Nenhum plano adicionado ainda.</div>';
      return;
    }

    els.plansList.innerHTML = state.modalPlans.map((item, index) => `
      <div class="plan-item" data-index="${index}">
        <div class="plan-item-grid">
          <select id="planSelectInput-${index}" class="plan-select-input">
            ${getPlanCatalogWithDefault().map((plan) => `<option value="${escapeHtml(plan.name)}" ${getPlanSelectValue(item.name) === plan.name ? "selected" : ""}>${escapeHtml(plan.name)}</option>`).join("")}
            <option value="__custom__" ${getPlanSelectValue(item.name) === "__custom__" ? "selected" : ""}>Personalizar nome</option>
          </select>
          <input type="text" class="plan-name-input" placeholder="Nome do plano" list="planSuggestions" value="${escapeHtml(item.name || "")}" />
          <input type="text" class="plan-value-input" placeholder="Valor do plano" inputmode="decimal" value="${escapeHtml(formatPlanInputValue(item.value))}" />
        </div>
        ${planSupportsClosingDetails(item) ? `
          <div class="plan-item-extra">
            <div class="plan-item-extra-title">Dados do fechamento</div>
            <div class="plan-item-extra-grid">
              <input type="text" class="plan-contract-input" placeholder="Numero do contrato" value="${escapeHtml(item.contract_number || "")}" />
              <input type="date" class="plan-closed-date-input" value="${escapeHtml(item.closed_at || "")}" />
            </div>
          </div>
        ` : ""}
        <div class="plan-item-actions">
          <button type="button" class="btn btn-danger plan-remove-btn">Excluir</button>
        </div>
      </div>
    `).join("");

    syncBrandedSelects();
  }

  function addPlanFromDraft() {
    const nextPlanName = isClosedStageId(els.stage?.value) ? getDefaultPlanName(state.modalPlans.length) : "Sem plano";
    state.modalPlans.push({ name: nextPlanName, value: isClosedStageId(els.stage?.value) ? "" : 0 });
    applyPlanSelection(state.modalPlans.length - 1, nextPlanName);
    renderPlanItems();
  }

  function setupPlanListEvents() {
    const handlePlanDraftInput = (event) => {
      const item = event.target.closest(".plan-item");
      if (!item) return;
      const index = Number(item.dataset.index);
      if (Number.isNaN(index) || !state.modalPlans[index]) return;
      if (event.target.classList.contains("plan-select-input")) {
        applyPlanSelection(index, event.target.value);
        if (state.modalPlans[index]) state.modalPlans[index]._autoCreatedClosing = false;
        renderPlanItems();
        return;
      }
      if (event.target.classList.contains("plan-name-input")) {
        const hadClosingDetails = planSupportsClosingDetails(state.modalPlans[index]);
        state.modalPlans[index]._autoCreatedClosing = false;
        state.modalPlans[index].name = event.target.value;
        if (hadClosingDetails !== planSupportsClosingDetails(state.modalPlans[index])) {
          renderPlanItems();
        }
        return;
      }
      if (event.target.classList.contains("plan-value-input")) {
        const hadClosingDetails = planSupportsClosingDetails(state.modalPlans[index]);
        state.modalPlans[index]._autoCreatedClosing = false;
        state.modalPlans[index].value = event.target.value;
        if (hadClosingDetails !== planSupportsClosingDetails(state.modalPlans[index])) {
          renderPlanItems();
          return;
        }
        return;
      }
      if (event.target.classList.contains("plan-contract-input")) {
        state.modalPlans[index]._autoCreatedClosing = false;
        state.modalPlans[index].contract_number = event.target.value;
        return;
      }
      if (event.target.classList.contains("plan-closed-date-input")) {
        state.modalPlans[index]._autoCreatedClosing = false;
        state.modalPlans[index].closed_at = normalizeDateInput(event.target.value);
      }
    };

    els.plansList?.addEventListener("input", handlePlanDraftInput);
    els.plansList?.addEventListener("change", handlePlanDraftInput);

    els.plansList?.addEventListener("click", (event) => {
      const button = event.target.closest(".plan-remove-btn");
      if (!button) return;
      const item = button.closest(".plan-item");
      const index = Number(item?.dataset.index);
      if (Number.isNaN(index)) return;
      state.modalPlans.splice(index, 1);
      renderPlanItems();
    });
  }

  function renderObservationItems() {
    if (!els.observationsList) return;

    if (!state.modalObservations.length) {
      els.observationsList.innerHTML = '<div class="observation-empty">Nenhuma observação adicionada ainda.</div>';
      return;
    }

    const observationsForDisplay = state.modalObservations
      .map((item, index) => ({ item, index }))
      .reverse();

    els.observationsList.innerHTML = observationsForDisplay.map(({ item, index }) => `
      <div class="observation-item" data-index="${index}">
        <div class="observation-item-header">
          <input type="date" class="observation-date-input" value="${escapeHtml(item.date || "")}" />
        </div>
        <textarea class="observation-text-input" rows="4" placeholder="Digite a observação">${escapeHtml(item.text || "")}</textarea>
        <div class="observation-item-actions">
          <button type="button" class="btn btn-danger observation-remove-btn">Excluir</button>
        </div>
      </div>
    `).join("");
  }

  function addObservationFromDraft() {
    state.modalObservations.push({ date: "", text: "", _persisted: false, _originalDate: "", _originalText: "" });
    renderObservationItems();
  }

  function setupObservationListEvents() {
    els.observationsList?.addEventListener("input", (event) => {
      const item = event.target.closest(".observation-item");
      if (!item) return;
      const index = Number(item.dataset.index);
      if (Number.isNaN(index) || !state.modalObservations[index]) return;
      if (event.target.classList.contains("observation-date-input")) {
        state.modalObservations[index].date = normalizeDateInput(event.target.value);
      }
      if (event.target.classList.contains("observation-text-input")) {
        state.modalObservations[index].text = event.target.value;
      }
    });

    els.observationsList?.addEventListener("click", (event) => {
      const button = event.target.closest(".observation-remove-btn");
      if (!button) return;
      const item = button.closest(".observation-item");
      const index = Number(item?.dataset.index);
      if (Number.isNaN(index) || !state.modalObservations[index]) return;
      const observation = state.modalObservations[index];
      const existingLead = state.leads.find((lead) => lead.id === els.leadId.value) || null;
      if (!confirm("Tem certeza que deseja excluir esta observacao?")) return;

      if (existingLead && !canDeleteLeads(existingLead) && observation._persisted) {
        requestAdminAuthorization({
          requestType: "delete_observation",
          title: "Solicitar exclusao de observacao",
          description: `Voce nao tem permissao para excluir uma observacao do lead "${existingLead.name}". Sua solicitacao sera enviada para o administrador.`,
          entityType: "lead",
          entityId: existingLead.id,
          payload: buildObservationRequestPayload(existingLead, observation)
        });
        return;
      }

      state.modalObservations.splice(index, 1);
      renderObservationItems();
    });
  }

  function getPipelineScrollMetrics() {
    const area = els.pipelineScrollArea;
    const top = els.pipelineScrollTop;
    const isFunilActive = state.activeView === "funil" && document.getElementById("view-funil")?.classList.contains("active-view");
    const contentWidth = Math.max(
      area?.scrollWidth || 0,
      els.pipeline?.scrollWidth || 0
    );
    const viewportWidth = Math.floor(area?.getBoundingClientRect().width || area?.clientWidth || 0);
    const maxScrollLeft = Math.max(0, contentWidth - viewportWidth);
    const hasHorizontalOverflow = maxScrollLeft > 4;
    const shouldShowTop = hasHorizontalOverflow && isFunilActive;
    const trackWidth = Math.floor(els.pipelineScrollTopTrack?.getBoundingClientRect().width || top?.clientWidth || 0);

    return {
      area,
      top,
      contentWidth,
      viewportWidth,
      maxScrollLeft,
      hasHorizontalOverflow,
      shouldShowTop,
      trackWidth
    };
  }

  function updatePipelineScrollThumb(metrics = getPipelineScrollMetrics()) {
    const thumb = els.pipelineScrollTopThumb;
    if (!thumb) return;

    if (!metrics.shouldShowTop || !metrics.trackWidth || !metrics.viewportWidth || metrics.contentWidth <= metrics.viewportWidth) {
      thumb.style.width = "0px";
      thumb.style.transform = "translate(0, -50%)";
      return;
    }

    const area = metrics.area;
    const scrollLeft = Math.min(metrics.maxScrollLeft, Math.max(0, area?.scrollLeft || 0));
    const thumbWidth = Math.max(48, Math.round((metrics.viewportWidth / metrics.contentWidth) * metrics.trackWidth));
    const maxThumbOffset = Math.max(0, metrics.trackWidth - thumbWidth);
    const thumbOffset = metrics.maxScrollLeft > 0
      ? Math.round((scrollLeft / metrics.maxScrollLeft) * maxThumbOffset)
      : 0;

    thumb.style.width = `${thumbWidth}px`;
    thumb.style.transform = `translate(${thumbOffset}px, -50%)`;
  }

  function syncPipelineScrollBars(source = null) {
    let metrics = getPipelineScrollMetrics();
    const area = metrics.area;
    const top = metrics.top;
    const stageStrip = els.pipelineStageStrip;
    const stageStripWrap = stageStrip?.parentElement;

    if (top) top.style.display = metrics.shouldShowTop ? "flex" : "none";
    if (!area) return;

    if (typeof source === "number") {
      area.scrollLeft = Math.min(metrics.maxScrollLeft, Math.max(0, source));
    }

    // The custom scrollbar track has no measurable width while hidden.
    // Re-read metrics after making the bar visible so the thumb can be sized.
    if (metrics.shouldShowTop && !metrics.trackWidth) {
      metrics = getPipelineScrollMetrics();
    }

    if (stageStripWrap) {
      const scrollLeft = Math.min(metrics.maxScrollLeft, Math.max(0, area?.scrollLeft || 0));
      stageStripWrap.scrollLeft = scrollLeft;
    }

    updatePipelineScrollThumb(metrics);
  }

  function setPipelineScrollFromPointer(clientX) {
    const metrics = getPipelineScrollMetrics();
    const track = els.pipelineScrollTopTrack;
    const thumb = els.pipelineScrollTopThumb;
    if (!metrics.area || !track || !thumb || !metrics.maxScrollLeft || !metrics.trackWidth) return;

    const rect = track.getBoundingClientRect();
    const thumbWidth = Math.max(thumb.offsetWidth || 0, 48);
    const maxThumbOffset = Math.max(0, rect.width - thumbWidth);
    const targetOffset = Math.min(
      maxThumbOffset,
      Math.max(0, (clientX - rect.left) - (thumbWidth / 2))
    );
    const nextScrollLeft = maxThumbOffset > 0
      ? (targetOffset / maxThumbOffset) * metrics.maxScrollLeft
      : 0;

    syncPipelineScrollBars(nextScrollLeft);
  }

  function startPipelineScrollbarDrag(event) {
    if (event.button !== 0) return;

    const metrics = getPipelineScrollMetrics();
    if (!metrics.shouldShowTop || !metrics.maxScrollLeft) return;

    state.pipelineScrollbarDrag = {
      pointerId: event.pointerId,
      startClientX: event.clientX,
      startScrollLeft: metrics.area?.scrollLeft || 0
    };

    els.pipelineScrollTopThumb?.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  }

  function stopPipelineScrollbarDrag(event) {
    const drag = state.pipelineScrollbarDrag;
    if (!drag) return;
    if (event?.pointerId !== undefined && drag.pointerId !== event.pointerId) return;

    try {
      els.pipelineScrollTopThumb?.releasePointerCapture?.(drag.pointerId);
    } catch (_error) {
      // Ignore release failures when capture was already lost.
    }

    state.pipelineScrollbarDrag = null;
  }

  function handlePipelineScrollbarDrag(event) {
    const drag = state.pipelineScrollbarDrag;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const metrics = getPipelineScrollMetrics();
    const track = els.pipelineScrollTopTrack;
    const thumb = els.pipelineScrollTopThumb;
    if (!metrics.maxScrollLeft || !track || !thumb) return;

    const thumbWidth = Math.max(thumb.offsetWidth || 0, 48);
    const maxThumbOffset = Math.max(1, track.clientWidth - thumbWidth);
    const deltaX = event.clientX - drag.startClientX;
    const scrollDelta = (deltaX / maxThumbOffset) * metrics.maxScrollLeft;

    syncPipelineScrollBars(drag.startScrollLeft + scrollDelta);
    event.preventDefault();
  }

  function attachPipelineScrollEvents() {
    const area = els.pipelineScrollArea;
    const track = els.pipelineScrollTopTrack;
    const thumb = els.pipelineScrollTopThumb;
    if (!area) return;

    area.addEventListener("scroll", () => syncPipelineScrollBars());
    area.addEventListener("dragover", (event) => {
      updatePipelineDragAutoScroll(event.clientX);
    });
    area.addEventListener("drop", () => stopPipelineDragAutoScroll());
    area.addEventListener("dragend", () => stopPipelineDragAutoScroll());
    window.addEventListener("resize", () => {
      syncPipelineColumnHeights();
      syncPipelineScrollBars();
    });
    track?.addEventListener("pointerdown", (event) => {
      if (event.target === thumb) return;
      if (event.button !== 0) return;
      setPipelineScrollFromPointer(event.clientX);
      event.preventDefault();
    });
    thumb?.addEventListener("pointerdown", startPipelineScrollbarDrag);
    thumb?.addEventListener("pointermove", handlePipelineScrollbarDrag);
    thumb?.addEventListener("pointerup", stopPipelineScrollbarDrag);
    thumb?.addEventListener("pointercancel", stopPipelineScrollbarDrag);

    if (typeof ResizeObserver === "function" && !state.pipelineScrollObserver) {
      state.pipelineScrollObserver = new ResizeObserver(() => {
        syncPipelineScrollBars();
        requestAnimationFrame(updateStickyLayout);
      });
      state.pipelineScrollObserver.observe(area);
      if (els.pipeline) state.pipelineScrollObserver.observe(els.pipeline);
    }
  }

  function startPipelineCardPan(event) {
    const card = event.target.closest(".card");
    if (!card || event.button !== 0) return;
    if (!els.pipeline?.contains(card)) return;
    if (event.target.closest("button, input, select, textarea, a, label")) return;
    if (!els.pipelineScrollArea) return;

    state.pipelineCardPan = {
      card,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startScrollLeft: els.pipelineScrollArea.scrollLeft,
      originalDraggable: card.draggable,
      isPanning: false
    };
  }

  function handlePipelineCardPan(event) {
    const pan = state.pipelineCardPan;
    if (!pan) return;

    const deltaX = event.clientX - pan.startClientX;
    const deltaY = event.clientY - pan.startClientY;
    const horizontalDistance = Math.abs(deltaX);
    const verticalDistance = Math.abs(deltaY);

    if (!pan.isPanning) {
      if (horizontalDistance < 12 || horizontalDistance <= verticalDistance) return;
      pan.isPanning = true;
      pan.card.draggable = false;
      pan.card.classList.add("card-panning");
    }

    syncPipelineScrollBars(pan.startScrollLeft - deltaX);
    event.preventDefault();
  }

  function stopPipelineCardPan(event) {
    const pan = state.pipelineCardPan;
    if (!pan) return;

    pan.card.draggable = pan.originalDraggable;
    pan.card.classList.remove("card-panning");
    state.pipelineCardPan = null;
  }

  function handlePipelineCardDoubleClick(event) {
    const card = event.target.closest(".card");
    if (!card || !els.pipeline?.contains(card)) return;
    const lead = state.leads.find((item) => item.id === card.dataset.leadId);
    if (!canEditLeads(lead)) return;
    if (event.target.closest(".card-actions")) return;
    if (state.pipelineCardPan?.isPanning) return;
    openLeadEditorById(card.dataset.leadId);
  }

  function attachPipelineCardInteractionEvents() {
    if (state.pipelineCardInteractionsBound || !els.pipeline) return;

    els.pipeline.addEventListener("mousedown", startPipelineCardPan);
    els.pipeline.addEventListener("dblclick", handlePipelineCardDoubleClick);
    document.addEventListener("mousemove", handlePipelineCardPan);
    document.addEventListener("mouseup", stopPipelineCardPan);
    window.addEventListener("blur", stopPipelineCardPan);

    state.pipelineCardInteractionsBound = true;
  }

  function scrollFunnelDetailToTop() {
    const scrollingElement = document.scrollingElement || document.documentElement || document.body;
    if (scrollingElement) {
      scrollingElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (els.main) {
      els.main.scrollTop = 0;
    }
  }

  function isTouchPipelinePointerEvent(event) {
    return isCompactViewport() && (event?.pointerType === "touch" || event?.pointerType === "pen");
  }

  function clearTouchPipelineDragState() {
    const dragState = state.touchPipelineDrag;
    if (dragState?.timerId) {
      clearTimeout(dragState.timerId);
    }
    document.body.classList.remove("touch-drag-lock");
    document.querySelectorAll(".column.drag-over").forEach((item) => item.classList.remove("drag-over"));
    if (dragState?.sourceEl) {
      if (Number.isFinite(dragState.pointerId) && typeof dragState.sourceEl.releasePointerCapture === "function") {
        try {
          dragState.sourceEl.releasePointerCapture(dragState.pointerId);
        } catch {}
      }
      dragState.sourceEl.style.pointerEvents = dragState.originalPointerEvents || "";
      dragState.sourceEl.style.transform = "";
      dragState.sourceEl.style.transition = "";
      dragState.sourceEl.style.zIndex = "";
      dragState.sourceEl.style.userSelect = dragState.originalUserSelect || "";
      dragState.sourceEl.style.webkitUserSelect = dragState.originalWebkitUserSelect || "";
      dragState.sourceEl.style.touchAction = dragState.originalTouchAction || "";
      dragState.sourceEl.classList.remove("touch-drag-active");
    }
    if (dragState?.kind === "lead") {
      dragState.sourceEl?.classList.remove("dragging", "card-panning");
      stopPipelineDragAutoScroll();
    }
    if (dragState?.kind === "stage") {
      clearPipelineStageDragIndicators();
      stopPipelineDragAutoScroll();
      state.pipelineStageDrag = null;
    }
    state.touchPipelineDrag = null;
  }

  function beginTouchPipelineDrag(kind, id, sourceEl, event) {
    if (!isTouchPipelinePointerEvent(event) || !sourceEl) return;

    clearTouchPipelineDragState();
    event.preventDefault();
    event.stopPropagation();
    const pointerId = Number(event.pointerId);
    const startX = Number(event.clientX);
    const startY = Number(event.clientY);
    const timerId = window.setTimeout(() => {
      const activeDrag = state.touchPipelineDrag;
      if (!activeDrag || activeDrag.pointerId !== pointerId) return;
      activeDrag.activated = true;
      document.body.classList.add("touch-drag-lock");
      sourceEl.style.pointerEvents = "none";
      sourceEl.style.transition = "none";
      sourceEl.style.zIndex = "999";
      sourceEl.style.userSelect = "none";
      sourceEl.style.webkitUserSelect = "none";
      sourceEl.style.touchAction = "none";
      sourceEl.classList.add("touch-drag-active");
      if (kind === "lead") {
        sourceEl.classList.add("dragging");
      } else if (kind === "stage") {
        state.pipelineStageDrag = { stageId: id };
        clearPipelineStageDragIndicators();
        markPipelineStageElements(id, "is-dragging");
      }
    }, 130);

    state.touchPipelineDrag = {
      kind,
      id,
      sourceEl,
      pointerId,
      startX,
      startY,
      lastX: startX,
      lastY: startY,
      activated: false,
      timerId,
      originalPointerEvents: sourceEl.style.pointerEvents || "",
      originalUserSelect: sourceEl.style.userSelect || "",
      originalWebkitUserSelect: sourceEl.style.webkitUserSelect || "",
      originalTouchAction: sourceEl.style.touchAction || ""
    };
    if (Number.isFinite(pointerId) && typeof sourceEl.setPointerCapture === "function") {
      try {
        sourceEl.setPointerCapture(pointerId);
      } catch {}
    }
  }

  function updateTouchPipelineLeadDrag(clientX, clientY) {
    document.querySelectorAll(".column.drag-over").forEach((item) => item.classList.remove("drag-over"));
    const targetColumn = getPipelineColumnAtPoint(clientX, clientY);
    if (targetColumn) {
      targetColumn.classList.add("drag-over");
    }
    updatePipelineDragAutoScroll(clientX);
  }

  function updateTouchPipelineStageDrag(clientX, clientY) {
    const dropTarget = getPipelineStageDropTargetAtPoint(clientX, clientY);
    const draggedStageId = String(state.touchPipelineDrag?.id || "").trim();
    clearPipelineStageDragIndicators();
    if (!draggedStageId) return;
    markPipelineStageElements(draggedStageId, "is-dragging");
    updatePipelineDragAutoScroll(clientX);
    if (!dropTarget) return;

    const targetStageId = String(dropTarget.dataset.stageId || "").trim();
    if (!targetStageId || targetStageId === draggedStageId) return;

    markPipelineStageElements(targetStageId, "dragging-target");
    const rect = dropTarget.getBoundingClientRect();
    const placeAfter = clientX > rect.left + (rect.width / 2);
    markPipelineStageElements(targetStageId, placeAfter ? "drag-after" : "drag-before");
  }

  function handleTouchPipelinePointerMove(event) {
    const dragState = state.touchPipelineDrag;
    if (!dragState || Number(event.pointerId) !== dragState.pointerId) return;

    dragState.lastX = Number(event.clientX);
    dragState.lastY = Number(event.clientY);

    if (!dragState.activated) {
      const deltaX = Math.abs(dragState.lastX - dragState.startX);
      const deltaY = Math.abs(dragState.lastY - dragState.startY);
      if (deltaX > 28 || deltaY > 28) {
        clearTouchPipelineDragState();
      }
      return;
    }

    event.preventDefault();
    const translateX = dragState.lastX - dragState.startX;
    const translateY = dragState.lastY - dragState.startY;
    dragState.sourceEl.style.transform = `translate(${translateX}px, ${translateY}px)`;
    if (dragState.kind === "lead") {
      updateTouchPipelineLeadDrag(dragState.lastX, dragState.lastY);
      return;
    }
    if (dragState.kind === "stage") {
      updateTouchPipelineStageDrag(dragState.lastX, dragState.lastY);
    }
  }

  async function handleTouchPipelinePointerUp(event) {
    const dragState = state.touchPipelineDrag;
    if (!dragState || Number(event.pointerId) !== dragState.pointerId) return;

    const wasActivated = dragState.activated;
    const dropX = Number(event.clientX);
    const dropY = Number(event.clientY);

    if (!wasActivated) {
      clearTouchPipelineDragState();
      return;
    }

    event.preventDefault();
    state.touchPipelineDragSuppressContextUntil = Date.now() + 400;

    if (dragState.kind === "lead") {
      const targetColumn = getPipelineColumnAtPoint(dropX, dropY);
      const targetStageId = String(targetColumn?.dataset?.stageId || "").trim();
      clearTouchPipelineDragState();
      if (targetStageId) {
        await moveLeadToStage(dragState.id, targetStageId);
      }
      return;
    }

    if (dragState.kind === "stage") {
      const dropTarget = getPipelineStageDropTargetAtPoint(dropX, dropY);
      if (dropTarget) {
        if (dragState.timerId) {
          clearTimeout(dragState.timerId);
        }
        if (dragState.sourceEl) {
          if (Number.isFinite(dragState.pointerId) && typeof dragState.sourceEl.releasePointerCapture === "function") {
            try {
              dragState.sourceEl.releasePointerCapture(dragState.pointerId);
            } catch {}
          }
          dragState.sourceEl.style.pointerEvents = dragState.originalPointerEvents || "";
          dragState.sourceEl.style.transform = "";
          dragState.sourceEl.style.transition = "";
          dragState.sourceEl.style.zIndex = "";
          dragState.sourceEl.style.userSelect = dragState.originalUserSelect || "";
          dragState.sourceEl.style.webkitUserSelect = dragState.originalWebkitUserSelect || "";
          dragState.sourceEl.style.touchAction = dragState.originalTouchAction || "";
          dragState.sourceEl.classList.remove("touch-drag-active");
        }
        document.body.classList.remove("touch-drag-lock");
        await handlePipelineStageDrop({
          target: dropTarget,
          clientX: dropX,
          preventDefault() {}
        });
        state.touchPipelineDrag = null;
      } else {
        clearTouchPipelineDragState();
      }
    }
  }

  function clearPipelineStageDragIndicators() {
    document.querySelectorAll(".pipeline-stage-tab, .column").forEach((item) => {
      item.classList.remove("is-dragging", "drag-before", "drag-after", "dragging-target");
    });
  }

  function getPipelineColumnAtPoint(clientX, clientY) {
    const elements = typeof document.elementsFromPoint === "function"
      ? document.elementsFromPoint(clientX, clientY)
      : [document.elementFromPoint(clientX, clientY)].filter(Boolean);
    for (const element of elements) {
      const column = element?.closest?.(".column[data-stage-id]");
      if (column) return column;
    }
    return null;
  }

  function getPipelineStageDropTarget(target) {
    return target?.closest?.(".pipeline-stage-tab[data-stage-id], .column[data-stage-id]") || null;
  }

  function getPipelineStageDropTargetAtPoint(clientX, clientY) {
    const elements = typeof document.elementsFromPoint === "function"
      ? document.elementsFromPoint(clientX, clientY)
      : [document.elementFromPoint(clientX, clientY)].filter(Boolean);
    for (const element of elements) {
      const target = getPipelineStageDropTarget(element);
      if (target) return target;
    }
    return null;
  }

  function markPipelineStageElements(stageId, ...classNames) {
    const normalizedStageId = String(stageId || "").trim();
    if (!normalizedStageId || !classNames.length) return;
    document.querySelectorAll(`.pipeline-stage-tab[data-stage-id="${normalizedStageId}"], .column[data-stage-id="${normalizedStageId}"]`).forEach((item) => {
      item.classList.add(...classNames);
    });
  }

  function handlePipelineStageDragStart(event) {
    const item = getPipelineStageDropTarget(event.target);
    if (!item || !canManageStages()) {
      event.preventDefault();
      return;
    }

    if (!els.pipeline?.contains(item) && !els.pipelineStageStrip?.contains(item)) {
      event.preventDefault();
      return;
    }

    if (event.target.closest("button, input, select, textarea, a, label")) {
      event.preventDefault();
      return;
    }

    if (event.target.closest(".card")) return;

    const stageId = String(item.dataset.stageId || "").trim();
    if (!stageId) {
      event.preventDefault();
      return;
    }

    stopPipelineDragAutoScroll();
    state.pipelineStageDrag = { stageId };
    clearPipelineStageDragIndicators();
    markPipelineStageElements(stageId, "is-dragging");

    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", stageId);
    }
  }

  function handlePipelineStageDragOver(event) {
    const draggedStageId = state.pipelineStageDrag?.stageId;
    const item = getPipelineStageDropTarget(event.target);
    if (!draggedStageId || !item) return;

    const targetStageId = String(item.dataset.stageId || "").trim();
    if (!targetStageId || targetStageId === draggedStageId) return;

    event.preventDefault();
    clearPipelineStageDragIndicators();
    markPipelineStageElements(draggedStageId, "is-dragging");
    markPipelineStageElements(targetStageId, "dragging-target");

    const rect = item.getBoundingClientRect();
    const placeAfter = event.clientX > rect.left + (rect.width / 2);
    markPipelineStageElements(targetStageId, placeAfter ? "drag-after" : "drag-before");

    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "move";
    }
  }

  async function handlePipelineStageDrop(event) {
    const draggedStageId = state.pipelineStageDrag?.stageId;
    const item = getPipelineStageDropTarget(event.target);
    clearPipelineStageDragIndicators();

    if (!draggedStageId || !item) {
      state.pipelineStageDrag = null;
      return;
    }

    const targetStageId = String(item.dataset.stageId || "").trim();
    if (!targetStageId || targetStageId === draggedStageId) {
      state.pipelineStageDrag = null;
      return;
    }

    event.preventDefault();

    const scopedStages = getScopedStages();
    const currentIndex = scopedStages.findIndex((stage) => stage.id === draggedStageId);
    const targetIndex = scopedStages.findIndex((stage) => stage.id === targetStageId);
    if (currentIndex === -1 || targetIndex === -1) {
      state.pipelineStageDrag = null;
      return;
    }

    const rect = item.getBoundingClientRect();
    const placeAfter = event.clientX > rect.left + (rect.width / 2);
    const nextIndex = placeAfter
      ? (currentIndex < targetIndex ? targetIndex : targetIndex + 1)
      : (currentIndex < targetIndex ? targetIndex - 1 : targetIndex);

    state.pipelineStageDrag = null;
    await moveStageToIndex(draggedStageId, nextIndex, state.activeSubfunnelId);
  }

  function handlePipelineStageDragEnd() {
    state.pipelineStageDrag = null;
    clearPipelineStageDragIndicators();
    stopPipelineDragAutoScroll();
  }

  function attachPipelineStageInteractionEvents() {
    if (state.pipelineStageInteractionsBound) return;
    window.addEventListener("blur", handlePipelineStageDragEnd);
    state.pipelineStageInteractionsBound = true;
  }

  function stopPipelineDragAutoScroll() {
    const autoScroll = state.pipelineDragAutoScroll;
    if (autoScroll.frameId) {
      cancelAnimationFrame(autoScroll.frameId);
      autoScroll.frameId = null;
    }
    autoScroll.speed = 0;
  }

  function hasActivePipelineAutoScrollDrag() {
    if (document.querySelector(".card.dragging")) return true;
    if (state.pipelineStageDrag?.stageId) return true;
    if (state.touchPipelineDrag?.activated) return true;
    return false;
  }

  function stepPipelineDragAutoScroll() {
    const area = els.pipelineScrollArea;
    const autoScroll = state.pipelineDragAutoScroll;

    if (!area || !hasActivePipelineAutoScrollDrag() || !autoScroll.speed) {
      stopPipelineDragAutoScroll();
      return;
    }

    const previousScrollLeft = area.scrollLeft;
    const nextScrollLeft = previousScrollLeft + autoScroll.speed;
    syncPipelineScrollBars(nextScrollLeft);

    if (Math.abs(area.scrollLeft - previousScrollLeft) < 1) {
      stopPipelineDragAutoScroll();
      return;
    }

    autoScroll.frameId = requestAnimationFrame(stepPipelineDragAutoScroll);
  }

  function updatePipelineDragAutoScroll(clientX) {
    const area = els.pipelineScrollArea;
    if (!area || !hasActivePipelineAutoScrollDrag()) {
      stopPipelineDragAutoScroll();
      return;
    }

    const rect = area.getBoundingClientRect();
    const threshold = Math.min(180, Math.max(72, rect.width * 0.22));
    const maxSpeed = 34;
    let speed = 0;

    if (clientX <= rect.left + threshold) {
      const intensity = 1 - ((clientX - rect.left) / threshold);
      speed = -Math.max(8, Math.round(maxSpeed * intensity));
    } else if (clientX >= rect.right - threshold) {
      const intensity = 1 - ((rect.right - clientX) / threshold);
      speed = Math.max(8, Math.round(maxSpeed * intensity));
    }

    state.pipelineDragAutoScroll.speed = speed;

    if (!speed) {
      stopPipelineDragAutoScroll();
      return;
    }

    if (!state.pipelineDragAutoScroll.frameId) {
      state.pipelineDragAutoScroll.frameId = requestAnimationFrame(stepPipelineDragAutoScroll);
    }
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function getUserDisplayName() {
    return (
      state.profile?.full_name ||
      state.currentUser?.user_metadata?.full_name ||
      state.currentUser?.email ||
      "Usuário"
    );
  }

  function isTransientRemotePosition(value) {
    return Number.isFinite(Number(value)) && Number(value) >= TRANSIENT_POSITION_BASE;
  }

  function pruneExpiredPendingStagePositionCommits() {
    const now = Date.now();
    for (const [stageId, commit] of state.pendingStagePositionCommits.entries()) {
      if (!commit || Number(commit.expiresAt || 0) <= now) {
        state.pendingStagePositionCommits.delete(stageId);
      }
    }
  }

  function registerPendingStagePositionCommits(positionRows = [], ttlMs = 10000) {
    const expiresAt = Date.now() + Math.max(2000, Number(ttlMs) || 10000);
    (Array.isArray(positionRows) ? positionRows : []).forEach((row) => {
      const stageId = String(row?.id || "").trim();
      const position = Number(row?.position);
      if (!stageId || !Number.isFinite(position)) return;
      state.pendingStagePositionCommits.set(stageId, { position, expiresAt });
    });
  }

  function clearPendingStagePositionCommits(stageIds = []) {
    normalizeIdList(stageIds).forEach((stageId) => {
      state.pendingStagePositionCommits.delete(stageId);
    });
  }

  function reconcileStageRowsWithPendingCommits(stageRows = []) {
    pruneExpiredPendingStagePositionCommits();
    if (!state.pendingStagePositionCommits.size) {
      return Array.isArray(stageRows) ? stageRows : [];
    }

    const unresolvedStageIds = [];
    const nextRows = (Array.isArray(stageRows) ? stageRows : []).map((row) => {
      const stageId = String(row?.id || "").trim();
      const pendingCommit = state.pendingStagePositionCommits.get(stageId);
      if (!pendingCommit) return row;
      const remotePosition = Number(row?.position);
      if (Number.isFinite(remotePosition) && remotePosition === Number(pendingCommit.position)) {
        state.pendingStagePositionCommits.delete(stageId);
        return row;
      }
      unresolvedStageIds.push(stageId);
      return {
        ...row,
        position: pendingCommit.position
      };
    });

    if (unresolvedStageIds.length) {
      console.warn("Snapshot remoto de pipelines estabilizado com posições locais pendentes.", unresolvedStageIds);
    }

    return nextRows;
  }

  function pruneExpiredPendingLeadMoveCommits() {
    const now = Date.now();
    for (const [leadId, commit] of state.pendingLeadMoveCommits.entries()) {
      if (!commit || Number(commit.expiresAt || 0) <= now) {
        state.pendingLeadMoveCommits.delete(leadId);
      }
    }
  }

  function registerPendingLeadMoveCommit(leadId, payload = {}, ttlMs = 10000) {
    const normalizedLeadId = String(leadId || "").trim();
    const stageId = String(payload.stageId || "").trim();
    if (!normalizedLeadId || !stageId) return;
    state.pendingLeadMoveCommits.set(normalizedLeadId, {
      stageId,
      subfunnelId: String(payload.subfunnelId || "").trim() || null,
      notes: String(payload.notes || ""),
      expiresAt: Date.now() + Math.max(2000, Number(ttlMs) || 10000)
    });
  }

  function clearPendingLeadMoveCommits(leadIds = []) {
    normalizeIdList(leadIds).forEach((leadId) => {
      state.pendingLeadMoveCommits.delete(leadId);
    });
  }

  function reconcileLeadRowsWithPendingCommits(leadRows = []) {
    pruneExpiredPendingLeadMoveCommits();
    if (!state.pendingLeadMoveCommits.size) {
      return Array.isArray(leadRows) ? leadRows : [];
    }

    const unresolvedLeadIds = [];
    const nextRows = (Array.isArray(leadRows) ? leadRows : []).map((row) => {
      const leadId = String(row?.id || "").trim();
      const pendingCommit = state.pendingLeadMoveCommits.get(leadId);
      if (!pendingCommit) return row;

      const remoteStageId = String(row?.stage_id || "").trim();
      const remoteNotes = String(row?.notes || "");
      const stageMatches = remoteStageId === pendingCommit.stageId;
      const notesMatch = !pendingCommit.notes || remoteNotes === pendingCommit.notes;

      if (stageMatches && notesMatch) {
        state.pendingLeadMoveCommits.delete(leadId);
        return row;
      }

      unresolvedLeadIds.push(leadId);
      return {
        ...row,
        stage_id: pendingCommit.stageId,
        notes: pendingCommit.notes || row?.notes || ""
      };
    });

    if (unresolvedLeadIds.length) {
      console.warn("Snapshot remoto de leads estabilizado com movimentações locais pendentes.", unresolvedLeadIds);
    }

    return nextRows;
  }

  function reconcileWorkspaceLeadAssignmentsWithPendingCommits(workspace = null) {
    pruneExpiredPendingLeadMoveCommits();
    if (!workspace || !state.pendingLeadMoveCommits.size) return workspace;

    const nextLeadAssignments = {
      ...(workspace.leadAssignments || {})
    };
    let changed = false;

    for (const [leadId, commit] of state.pendingLeadMoveCommits.entries()) {
      if (!commit?.subfunnelId) continue;
      const remoteSubfunnelId = String(nextLeadAssignments[leadId] || "").trim();
      if (remoteSubfunnelId === String(commit.subfunnelId || "").trim()) {
        continue;
      }
      nextLeadAssignments[leadId] = commit.subfunnelId;
      changed = true;
    }

    if (!changed) return workspace;
    return {
      ...workspace,
      leadAssignments: nextLeadAssignments
    };
  }

  function buildStagePositionFallbackMap(stageItems = []) {
    const map = new Map();
    sortStagesByStablePosition(stageItems).forEach((stage, index) => {
      const stageId = String(stage?.id || "").trim();
      if (!stageId) return;
      const position = Number(stage?.position);
      map.set(stageId, Number.isFinite(position) ? position : index);
    });
    return map;
  }

  function buildSubfunnelPositionFallbackMap(workspace = null) {
    const map = new Map();
    (workspace?.funnels || []).forEach((funnel) => {
      const funnelId = String(funnel?.id || "").trim();
      if (!funnelId) return;
      (funnel?.subfunnels || []).forEach((subfunnel, index) => {
        const subfunnelId = String(subfunnel?.id || "").trim();
        if (!subfunnelId) return;
        map.set(`${funnelId}:${subfunnelId}`, index);
      });
    });
    return map;
  }

  function stabilizeTransientStageRows(stageRows = []) {
    const rows = Array.isArray(stageRows) ? stageRows : [];
    if (!rows.some((row) => isTransientRemotePosition(row?.position))) {
      return rows;
    }

    const fallbackMap = new Map([
      ...buildStagePositionFallbackMap(readStoredAppDataCache()?.stages || []),
      ...buildStagePositionFallbackMap(state.stages || [])
    ]);
    let fallbackCursor = Math.max(
      rows.reduce((max, row) => {
        const position = Number(row?.position);
        return !isTransientRemotePosition(position) && Number.isFinite(position) ? Math.max(max, position) : max;
      }, -1),
      ...fallbackMap.values(),
      -1
    ) + 1;

    console.warn("Snapshot remoto de pipelines estabilizado durante persistência temporária.");
    return rows.map((row) => {
      if (!isTransientRemotePosition(row?.position)) return row;
      const stageId = String(row?.id || "").trim();
      const fallbackPosition = fallbackMap.get(stageId);
      return {
        ...row,
        position: Number.isFinite(fallbackPosition) ? fallbackPosition : fallbackCursor++
      };
    });
  }

  function stabilizeTransientSubfunnelRows(subfunnelRows = []) {
    const rows = Array.isArray(subfunnelRows) ? subfunnelRows : [];
    if (!rows.some((row) => isTransientRemotePosition(row?.position))) {
      return rows;
    }

    const fallbackMap = new Map([
      ...buildSubfunnelPositionFallbackMap(readStoredFunnelWorkspace()),
      ...buildSubfunnelPositionFallbackMap(state.funnelWorkspace)
    ]);
    const fallbackCursorByFunnel = new Map();

    rows.forEach((row) => {
      const funnelId = String(row?.funnel_id || "").trim();
      if (!funnelId || isTransientRemotePosition(row?.position)) return;
      const position = Number(row?.position);
      const nextCursor = Math.max(fallbackCursorByFunnel.get(funnelId) ?? -1, Number.isFinite(position) ? position : -1) + 1;
      fallbackCursorByFunnel.set(funnelId, nextCursor);
    });

    console.warn("Snapshot remoto de subfunis estabilizado durante persistência temporária.");
    return rows.map((row) => {
      if (!isTransientRemotePosition(row?.position)) return row;
      const funnelId = String(row?.funnel_id || "").trim();
      const subfunnelId = String(row?.id || "").trim();
      const fallbackKey = `${funnelId}:${subfunnelId}`;
      const fallbackPosition = fallbackMap.get(fallbackKey);
      if (Number.isFinite(fallbackPosition)) {
        return {
          ...row,
          position: fallbackPosition
        };
      }

      const nextCursor = fallbackCursorByFunnel.get(funnelId) ?? 0;
      fallbackCursorByFunnel.set(funnelId, nextCursor + 1);
      return {
        ...row,
        position: nextCursor
      };
    });
  }

  function hasTransientRemoteStagePositions(stageRows = []) {
    return (Array.isArray(stageRows) ? stageRows : []).some((row) => isTransientRemotePosition(row?.position));
  }

  function hasTransientRemoteSubfunnelPositions(subfunnelRows = []) {
    return (Array.isArray(subfunnelRows) ? subfunnelRows : []).some((row) => isTransientRemotePosition(row?.position));
  }

  function updateStageColorPreview(value) {
    const color = sanitizeHexColor(value);
    if (els.stageColor && els.stageColor.value !== color) {
      els.stageColor.value = color;
    }
    if (els.stageColorPreview) {
      els.stageColorPreview.textContent = color;
      els.stageColorPreview.style.borderColor = `${color}55`;
      els.stageColorPreview.style.background = `${color}22`;
      els.stageColorPreview.style.color = color;
    }
  }

  function getStageById(id) {
    return state.stages.find((stage) => stage.id === id) || null;
  }

  function openLeadEditorById(leadId) {
    const lead = state.leads.find((item) => item.id === leadId);
    if (!canEditLeads(lead)) return;
    if (lead) openLeadModal(lead);
  }

  async function persistStagePositions(positionRows = []) {
    const normalizedRows = (Array.isArray(positionRows) ? positionRows : [])
      .map((row) => ({
        id: String(row?.id || "").trim(),
        position: Number(row?.position)
      }))
      .filter((row) => row.id && Number.isFinite(row.position));

    if (!normalizedRows.length) return;

    const tempRows = normalizedRows.map((row, index) => ({
      id: row.id,
      position: 1000000 + index
    }));

    const tempUpdates = tempRows.map((row) =>
      state.supabase.from("stages").update({ position: row.position }).eq("id", row.id)
    );
    const tempResults = await Promise.all(tempUpdates);
    const tempFailed = tempResults.find((result) => result.error);
    if (tempFailed?.error) {
      throw tempFailed.error;
    }

    const finalUpdates = normalizedRows.map((row) =>
      state.supabase.from("stages").update({ position: row.position }).eq("id", row.id)
    );
    const finalResults = await Promise.all(finalUpdates);
    const finalFailed = finalResults.find((result) => result.error);
    if (finalFailed?.error) {
      throw finalFailed.error;
    }
  }

  function collectStageMoveContext(stageId, targetIndex, subfunnelId = null) {
    const scopeSubfunnelId = subfunnelId || state.structureSubfunnelId;
    const useVisibleScopedStages = Boolean(
      scopeSubfunnelId
      && isFunnelDetailActive()
      && scopeSubfunnelId === state.activeSubfunnelId
    );
    const scopedAllStages = sortStagesByStablePosition(scopeSubfunnelId
      ? state.stages.filter((stage) => state.funnelWorkspace?.stageAssignments?.[stage.id] === scopeSubfunnelId)
      : state.stages);
    const scopedVisibleStages = sortStagesByStablePosition(useVisibleScopedStages ? getScopedStages() : scopedAllStages);
    const currentIndex = scopedVisibleStages.findIndex((stage) => stage.id === stageId);
    const movedStage = currentIndex >= 0
      ? (scopedVisibleStages[currentIndex] || getStageById(stageId) || null)
      : null;
    const normalizedTargetIndex = Math.max(0, Math.min(Number(targetIndex), scopedVisibleStages.length - 1));
    const previousStages = state.stages.map((item) => normalizeStage(item));
    const scopedOrderedPositions = scopedAllStages
      .map((item) => Number(item.position))
      .filter((value) => Number.isFinite(value))
      .sort((a, b) => a - b);

    return {
      stageId,
      scopeSubfunnelId,
      useVisibleScopedStages,
      scopedAllStages,
      scopedVisibleStages,
      currentIndex,
      movedStage,
      normalizedTargetIndex,
      previousStages,
      scopedOrderedPositions
    };
  }

  function buildNextScopedStagesForMove(context = {}) {
    if (context.useVisibleScopedStages) {
      const groupKeyForStage = (stage) => normalizeComparisonText(stage?.name || "") || `stage:${stage?.id || ""}`;
      const groupMap = new Map();

      context.scopedAllStages.forEach((stage) => {
        const key = groupKeyForStage(stage);
        if (!groupMap.has(key)) {
          groupMap.set(key, { key, stages: [] });
        }
        groupMap.get(key).stages.push(stage);
      });

      const visibleGroupKeys = context.scopedVisibleStages.map((stage) => groupKeyForStage(stage));
      const reorderedGroupKeys = [...visibleGroupKeys];
      const [draggedGroupKey] = reorderedGroupKeys.splice(context.currentIndex, 1);
      if (!draggedGroupKey) return [];
      reorderedGroupKeys.splice(context.normalizedTargetIndex, 0, draggedGroupKey);

      return reorderedGroupKeys.flatMap((groupKey) => {
        const group = groupMap.get(groupKey);
        return Array.isArray(group?.stages) ? group.stages : [];
      }).map((item, index) => normalizeStage({
        ...item,
        position: context.scopedOrderedPositions[index] ?? Number(item.position) ?? index
      }));
    }

    return reorderListByIndex(context.scopedAllStages, context.currentIndex, context.normalizedTargetIndex).map((item, index) => normalizeStage({
      ...item,
      position: context.scopedOrderedPositions[index] ?? Number(item.position) ?? index
    }));
  }

  function buildStageMoveMutationContext(context = {}) {
    const nextScopedStages = buildNextScopedStagesForMove(context);
    const nextScopedById = new Map(nextScopedStages.map((item) => [item.id, item]));
    const optimisticStages = context.previousStages
      .map((item) => nextScopedById.get(item.id) || item)
      .sort((a, b) => Number(a.position) - Number(b.position));
    const previousPositions = new Map(context.previousStages.map((item) => [item.id, Number(item.position)]));
    const changedPositionRows = nextScopedStages
      .filter((item) => previousPositions.get(item.id) !== Number(item.position))
      .map((item) => ({
        id: item.id,
        position: Number(item.position)
      }));

    return {
      ...context,
      nextScopedStages,
      optimisticStages,
      changedPositionRows
    };
  }

  async function persistStageMoveMutation(context = {}) {
    registerPendingStagePositionCommits(context.changedPositionRows);

    try {
      await executeCriticalMutation({
        snapshot: {
          stages: true
        },
        optimisticSyncSelectedLeadIds: false,
        optimisticWriteCache: false,
        applyOptimistic: () => {
          state.stages = context.optimisticStages;
        },
        persist: async () => {
          await persistStagePositions(context.changedPositionRows);
        },
        afterPersist: async () => {
          scheduleAppDataCacheWrite(160);
          notifyLiveSyncChange("stage-order");
          queueLocalConsistencyRefresh("stage-order", 900);
          void logChange(
            "reorder",
            "stage",
            context.stageId,
            `A ordem do funil foi alterada por ${getUserDisplayName()}.`,
            {
              stage_id: context.stageId,
              stage_name: context.movedStage?.name || "",
              from_position: context.currentIndex,
              to_position: context.normalizedTargetIndex
            }
          ).catch((error) => console.error("Erro ao registrar reordenação da pipeline:", error));
        }
      });
    } catch (error) {
      clearPendingStagePositionCommits((context.changedPositionRows || []).map((row) => row?.id));
      throw error;
    }
  }

  async function moveStageToIndex(stageId, targetIndex, subfunnelId = null) {
    if (!canManageStages()) {
      alert("Somente administradores podem reordenar pipelines.");
      return;
    }

    const moveContext = collectStageMoveContext(stageId, targetIndex, subfunnelId);
    if (moveContext.currentIndex === -1) return;
    if (!Number.isFinite(moveContext.normalizedTargetIndex) || moveContext.normalizedTargetIndex === moveContext.currentIndex) return;
    const mutationContext = buildStageMoveMutationContext(moveContext);

    try {
      await persistStageMoveMutation(mutationContext);
    } catch (error) {
      alert(formatSupabaseError(error, "Não foi possível reordenar o pipeline."));
    }
  }

  async function moveStagePosition(stageId, direction) {
    const scopedStages = getStructureFilteredStages();
    const currentIndex = scopedStages.findIndex((stage) => stage.id === stageId);
    if (currentIndex === -1) return;
    const targetIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
    await moveStageToIndex(stageId, targetIndex, state.structureSubfunnelId);
  }

  async function bootstrap() {
    if (isPasswordRecoveryFlow()) {
      showPasswordRecoveryScreen();
      return;
    }

    const { data, error } = await state.supabase.auth.getSession();
    if (error) console.error(error);

    state.currentUser = data?.session?.user || null;

    if (state.currentUser) {
      await ensureProfile();
      const accessAllowed = await enforceApprovedSession();
      if (!accessAllowed) return;
      await enterApp();
      return;
    }

    showScreen("authScreen");
  }

  async function handleAuthStateChange(event, session) {
    if (event === "PASSWORD_RECOVERY") {
      showPasswordRecoveryScreen();
      return;
    }

    if (event === "SIGNED_OUT") {
      resetAppState();
      showScreen("authScreen");
      return;
    }

    if (event !== "SIGNED_IN" || !session?.user) return;

    state.currentUser = session.user;
    await ensureProfile();
    const accessAllowed = await enforceApprovedSession();
    if (!accessAllowed) return;
    if (els.appScreen.classList.contains("hidden")) {
      await enterApp();
    } else {
      await loadAppData({ includeProfiles: state.profilesLoaded });
    }
  }

  async function ensureProfile() {
    if (!state.currentUser) return;

    const defaultName =
      state.currentUser.user_metadata?.full_name ||
      state.currentUser.email?.split("@")[0] ||
      "Usuário";

    const payload = {
      id: state.currentUser.id,
      full_name: defaultName,
      email: state.currentUser.email
    };

    const { data: existingProfile, error: profileFetchError } = await state.supabase
      .from("profiles")
      .select("*")
      .eq("id", state.currentUser.id)
      .maybeSingle();

    if (profileFetchError && !isMissingRelationError(profileFetchError)) {
      console.error("Erro ao consultar profile:", profileFetchError);
    }

    if (existingProfile) {
      state.profile = {
        ...payload,
        ...existingProfile,
        role: existingProfile?.role || USER_ROLE.USER,
        access_status: existingProfile?.access_status || ACCESS_STATUS.PENDING
      };
      applyRoleBasedUi();

      const shouldRefreshProfile =
        String(existingProfile.full_name || "").trim() !== String(payload.full_name || "").trim()
        || String(existingProfile.email || "").trim() !== String(payload.email || "").trim();

      if (shouldRefreshProfile) {
        void state.supabase
          .from("profiles")
          .upsert(payload, { onConflict: "id" })
          .then(({ error }) => {
            if (error) {
              console.error("Erro ao atualizar profile em segundo plano:", error);
            }
          });
      }
      return;
    }

    const { data: profile, error: upsertError } = await state.supabase
      .from("profiles")
      .upsert(payload, { onConflict: "id" })
      .select("*")
      .maybeSingle();

    if (upsertError) {
      console.error("Erro ao garantir profile:", upsertError);
    }

    state.profile = {
      ...payload,
      ...profile,
      role: profile?.role || USER_ROLE.USER,
      access_status: profile?.access_status || ACCESS_STATUS.PENDING
    };
    applyRoleBasedUi();
  }

  async function enforceApprovedSession() {
    if (!state.currentUser) return false;

    const status = getAccessStatus();
    if (status === ACCESS_STATUS.APPROVED) return true;

    if (status === ACCESS_STATUS.REJECTED) {
      await forceSignOutWithMessage("Seu acesso foi recusado. Solicite nova analise com o administrador.");
      return false;
    }

    await forceSignOutWithMessage("Seu acesso ainda esta pendente de aprovacao administrativa.");
    return false;
  }

  function prepareAppShellEntry() {
    els.bootScreen.textContent = "Carregando sistema...";
    els.bootScreen.classList.remove("hidden");
    els.authScreen.classList.add("hidden");
    els.appScreen.classList.add("hidden");
    els.orgNameLabel.textContent = "Pax Insights";
    els.mobileOrgName.textContent = "Pax Insights";
    els.userWelcome.textContent = getUserDisplayName();
    applyRoleBasedUi();
    setShellTab("crm");
    syncStickyChrome();
  }

  function finalizePrimaryAppRender({ rebindView = true, revealScreen = true } = {}) {
    if (rebindView) {
      bindView(state.activeView, { resetFunnelDetail: false, keepFunnelSidebarOpen: state.funnelSidebarOpen });
    }
    renderAll();
    startLiveSync();
    if (revealScreen) {
      showScreen("appScreen");
    }
  }

  function runEnterAppSecondaryLoads() {
    void (async () => {
      await waitForNextPaint();
      try {
        const results = await Promise.allSettled([
          loadProfilesIfNeeded(false, { silent: true }),
          loadAdminDataIfNeeded(false, { silent: true }),
          runDeferredFunnelRouteMigration({ silent: true })
        ]);
        const shouldRerender = results.some((result) => result.status === "fulfilled" && result.value === true);
        if (shouldRerender) {
          renderAll();
        }
      } catch (error) {
        console.error("Erro ao finalizar o carregamento secundário:", error);
      }
    })();
  }

  async function hydrateEnterAppFromCache() {
    restoreStoredFunnelUiState();
    finalizePrimaryAppRender();
    await loadAppData({
      includeProfiles: false,
      includeAdminData: false,
      runRouteMigration: false,
      restoreUiState: false,
      silentRender: true
    });
    finalizePrimaryAppRender({ rebindView: false, revealScreen: false });
    runEnterAppSecondaryLoads();
  }

  async function loadEnterAppFreshData() {
    await loadAppData({
      includeProfiles: false,
      includeAdminData: false,
      runRouteMigration: false,
      restoreUiState: true,
      silentRender: true
    });
    finalizePrimaryAppRender();
    runEnterAppSecondaryLoads();
  }

  async function enterApp() {
    prepareAppShellEntry();

    const hydratedFromCache = hydrateAppDataFromCache();
    if (hydratedFromCache) {
      void hydrateEnterAppFromCache();
      return;
    }

    await loadEnterAppFreshData();
  }

  function applyLoadedAppDataSnapshot({
    stageRows = [],
    leadRows = [],
    profileRows = [],
    stageTypeRows = [],
    leadSourceRows = [],
    accessRequestRows = [],
    adminRequestRows = [],
    departmentRows = [],
    remoteFunnelWorkspace = null,
    includeProfiles = false,
    includeAdminData = false,
    silentRender = false
  } = {}) {
    const stabilizedStageRows = reconcileStageRowsWithPendingCommits(
      stabilizeTransientStageRows(stageRows)
    );
    state.stages = stabilizedStageRows.map(normalizeStage);

    const rawLeads = reconcileLeadRowsWithPendingCommits(Array.isArray(leadRows) ? leadRows : []);
    const missingSocialSourceLeadIds = rawLeads
      .filter((lead) => !normalizeSpacing(lead?.social_source || ""))
      .map((lead) => lead.id);
    const profileOwnerNames = includeProfiles ? (profileRows || []) : state.profiles;

    state.ownerCanonicalMap = buildOwnerCanonicalMap(rawLeads.map((lead) => lead?.owner), profileOwnerNames);
    state.socialSourceCanonicalMap = buildCanonicalValueMap(rawLeads.map((lead) => lead?.social_source), "social_source");
    state.leads = rawLeads.map((lead) => normalizeLead(lead, {
      ownerMap: state.ownerCanonicalMap,
      socialSourceMap: state.socialSourceCanonicalMap
    }));
    state.leadSources = normalizeLeadSources(leadSourceRows || []);
    state.socialSources = normalizeSocialSources([
      ...readStoredSocialSources(),
      DEFAULT_SOCIAL_SOURCE,
      ...rawLeads.map((lead) => lead?.social_source || "")
    ]);
    writeStoredSocialSources();

    state.customStageTypes = persistCustomStageTypes([
      ...getStoredCustomStageTypes(),
      ...(stageTypeRows || []).map((item) => item?.name)
    ]);
    state.hiddenPresetStageTypes = persistHiddenPresetStageTypes(getStoredHiddenPresetStageTypes());
    state.departments = departmentRows || [];

    if (includeProfiles) {
      state.profiles = profileRows || [];
      state.profilesLoaded = true;
    }
    if (includeAdminData) {
      state.accessRequests = accessRequestRows || [];
      state.adminRequests = adminRequestRows || [];
      state.adminDataLoaded = true;
    }

    renderDepartmentSelects();
    syncFunnelWorkspaceWithData(reconcileWorkspaceLeadAssignmentsWithPendingCommits(remoteFunnelWorkspace));
    if (silentRender) {
      scheduleAppDataCacheWrite(220);
    } else {
      writeStoredAppDataCache();
    }
    void ensureStageNamesWithoutTrailingPeriods({ silent: silentRender });
    void ensureDefaultSocialSourceForMissingLeads(missingSocialSourceLeadIds, { silent: silentRender });
  }

  async function runLoadAppDataRouteMigration({
    includeProfiles = false,
    includeAdminData = false
  } = {}) {
    const migratedRoutes = await ensureFunnelRouteMigration();
    if (!migratedRoutes) return false;
    return loadAppData({
      includeProfiles,
      includeAdminData,
      runRouteMigration: false
    });
  }

  async function runLoadAppDataCaptureNormalization({
    includeProfiles = false,
    includeAdminData = false,
    restoreUiState = false,
    silentRender = false
  } = {}) {
    const normalizedCapture = await ensureB2CExternalCaptureNormalization();
    if (!normalizedCapture) return false;
    return loadAppData({
      includeProfiles,
      includeAdminData,
      runRouteMigration: false,
      restoreUiState,
      silentRender
    });
  }

  async function runLoadAppDataFollowUps({
    includeProfiles = false,
    includeAdminData = false,
    runRouteMigration = true,
    restoreUiState = false,
    silentRender = false
  } = {}) {
    if (runRouteMigration) {
      try {
        const routeMigrationResult = await runLoadAppDataRouteMigration({
          includeProfiles,
          includeAdminData
        });
        if (routeMigrationResult) {
          return routeMigrationResult;
        }
      } catch (migrationError) {
        console.error("Erro ao executar migração automática de funis:", migrationError);
        const message = String(migrationError?.message || "");
        if (!/row-level security policy/i.test(message)) {
          alert(`Não foi possível concluir a migração automática dos funis: ${message}`);
        }
      }
    }

    try {
      await ensureExternalActionsFunnelMerge();
    } catch (mergeError) {
      console.warn("Erro ao consolidar funis de Ações Externas:", mergeError);
    }

    try {
      const captureNormalizationResult = await runLoadAppDataCaptureNormalization({
        includeProfiles,
        includeAdminData,
        restoreUiState,
        silentRender
      });
      if (captureNormalizationResult) {
        return captureNormalizationResult;
      }
    } catch (captureNormalizationError) {
      console.warn("Erro ao normalizar Captura na ação do B2C:", captureNormalizationError);
      const message = String(captureNormalizationError?.message || "");
      if (!/row-level security policy/i.test(message)) {
        alert(`Não foi possível normalizar o subfunil Captura na ação: ${message}`);
      }
    }

    return null;
  }

  async function loadAppData(options = {}) {
    const includeProfiles = options.includeProfiles === true;
    const includeAdminData = options.includeAdminData === true || (options.includeAdminData !== false && canManageAdminAreas());
    const runRouteMigration = options.runRouteMigration === true || (options.runRouteMigration !== false);
    const runFollowUps = options.runFollowUps !== false;
    const restoreUiState = options.restoreUiState === true;
    const silentRender = options.silentRender === true;
    const leadsPromise = fetchAllLeads();
    const funnelWorkspacePromise = loadFunnelWorkspaceFromSupabase();
    const [stagesRes, leadsRes, profilesRes, stageTypesRes, leadSourcesRes, accessRequestsRes, adminRequestsRes, departmentsRes, remoteFunnelWorkspace] = await Promise.all([
      state.supabase.from("stages").select("*").order("position", { ascending: true }),
      leadsPromise,
      includeProfiles
        ? state.supabase.from("profiles").select("*").order("full_name", { ascending: true })
        : Promise.resolve({ data: state.profiles, error: null }),
      state.supabase.from("stage_type_catalog").select("name").order("name", { ascending: true }),
      state.supabase.from("lead_source_catalog").select("*").order("name", { ascending: true }),
      includeAdminData
        ? state.supabase.from("access_requests").select("*").order("created_at", { ascending: false })
        : Promise.resolve({ data: [], error: null }),
      includeAdminData
        ? state.supabase.from("admin_requests").select("*").order("created_at", { ascending: false })
        : Promise.resolve({ data: [], error: null }),
      state.supabase.from("departments").select("*").order("name", { ascending: true }),
      funnelWorkspacePromise
    ]);

    if (stagesRes.error) console.error(stagesRes.error);
    if (leadsRes.error) console.error(leadsRes.error);
    if (includeProfiles && profilesRes.error) console.error(profilesRes.error);
    if (stageTypesRes.error && !isMissingRelationError(stageTypesRes.error)) console.error(stageTypesRes.error);
    if (leadSourcesRes.error && !isMissingRelationError(leadSourcesRes.error)) console.error(leadSourcesRes.error);
    if (includeAdminData && accessRequestsRes.error && !isMissingRelationError(accessRequestsRes.error)) console.error(accessRequestsRes.error);
    if (includeAdminData && adminRequestsRes.error && !isMissingRelationError(adminRequestsRes.error)) console.error(adminRequestsRes.error);
    if (departmentsRes.error && !isMissingRelationError(departmentsRes.error)) console.error(departmentsRes.error);

    const firstError =
      stagesRes.error ||
      leadsRes.error ||
      profilesRes.error ||
      (stageTypesRes.error && !isMissingRelationError(stageTypesRes.error) ? stageTypesRes.error : null) ||
      (leadSourcesRes.error && !isMissingRelationError(leadSourcesRes.error) ? leadSourcesRes.error : null) ||
      (accessRequestsRes.error && !isMissingRelationError(accessRequestsRes.error) ? accessRequestsRes.error : null) ||
      (adminRequestsRes.error && !isMissingRelationError(adminRequestsRes.error) ? adminRequestsRes.error : null) ||
      (departmentsRes.error && !isMissingRelationError(departmentsRes.error) ? departmentsRes.error : null);
    if (firstError) {
      alert(`Erro ao carregar dados do Supabase: ${firstError.message}`);
      return;
    }

    applyLoadedAppDataSnapshot({
      stageRows: stagesRes.data || [],
      leadRows: leadsRes.data || [],
      profileRows: profilesRes.data || [],
      stageTypeRows: stageTypesRes.data || [],
      leadSourceRows: leadSourcesRes.data || [],
      accessRequestRows: accessRequestsRes.data || [],
      adminRequestRows: adminRequestsRes.data || [],
      departmentRows: departmentsRes.data || [],
      remoteFunnelWorkspace,
      includeProfiles,
      includeAdminData,
      silentRender
    });

    if (runFollowUps) {
      const followUpResult = await runLoadAppDataFollowUps({
        includeProfiles,
        includeAdminData,
        runRouteMigration,
        restoreUiState,
        silentRender
      });
      if (followUpResult) {
        return followUpResult;
      }
    }

    if (restoreUiState) {
      restoreStoredFunnelUiState();
    }
    syncSelectedLeadIds();

    if (includeProfiles) {
      const reconciled = await reconcileLeadOwnersWithProfilesOnce();
      if (reconciled) return;
    }

    if (state.stages.length === 0) {
      await seedDefaultStages();
      return loadAppData({ includeProfiles, includeAdminData, runRouteMigration });
    }

    if (!silentRender) {
      renderAll();
    }
    return true;
  }

  async function loadProfilesIfNeeded(force = false, options = {}) {
    const silent = options.silent === true;
    if (!force && state.profilesLoaded) return false;

    const { data, error } = await state.supabase
      .from("profiles")
      .select("*")
      .order("full_name", { ascending: true });

    if (error) {
      console.error(error);
      return false;
    }

    state.profiles = data || [];
    state.profilesLoaded = true;
    state.ownerCanonicalMap = buildOwnerCanonicalMap(state.leads.map((lead) => lead?.owner), state.profiles);
    normalizeAllLeadsLocally();
    if (!silent) {
      renderAll();
      if (!els.historyModalOverlay.classList.contains("hidden")) renderHistoryText();
    }
    return true;
  }

  async function loadAdminDataIfNeeded(force = false, options = {}) {
    const silent = options.silent === true;
    if (!canManageAdminAreas()) {
      state.accessRequests = [];
      state.adminRequests = [];
      state.adminDataLoaded = true;
      return true;
    }

    if (!force && state.adminDataLoaded) return false;

    const [accessRequestsRes, adminRequestsRes] = await Promise.all([
      state.supabase.from("access_requests").select("*").order("created_at", { ascending: false }),
      state.supabase.from("admin_requests").select("*").order("created_at", { ascending: false })
    ]);

    if (accessRequestsRes.error && !isMissingRelationError(accessRequestsRes.error)) {
      console.error(accessRequestsRes.error);
      return false;
    }

    if (adminRequestsRes.error && !isMissingRelationError(adminRequestsRes.error)) {
      console.error(adminRequestsRes.error);
      return false;
    }

    state.accessRequests = accessRequestsRes.data || [];
    state.adminRequests = adminRequestsRes.data || [];
    state.adminDataLoaded = true;

    if (!silent && state.activeView === "equipe") {
      renderTeam();
    }
    return true;
  }

  async function runDeferredFunnelRouteMigration(options = {}) {
    const silent = options.silent === true;
    if (readStoredFunnelRouteMigrationDone()) return false;
    if (!canManageStages()) return false;

    try {
      const migratedRoutes = await ensureFunnelRouteMigration();
      if (!migratedRoutes) return false;

      await loadAppData({
        includeProfiles: state.profilesLoaded,
        includeAdminData: state.adminDataLoaded,
        runRouteMigration: false,
        restoreUiState: false,
        silentRender: true
      });
      if (!silent) {
        bindView(state.activeView, {
          resetFunnelDetail: false,
          keepFunnelSidebarOpen: state.funnelSidebarOpen,
          preserveFunnelSidebarState: true
        });
        renderAll();
      }
      return true;
    } catch (error) {
      console.error("Erro ao executar migração adiada dos funis:", error);
      return false;
    }
  }

  async function loadHistory(force = false) {
    if (!canViewHistory()) {
      state.history = [];
      state.historyLoaded = true;
      renderHistoryText();
      return;
    }

    if (!force && state.historyLoaded) return;

    const { data, error } = await state.supabase
      .from("change_history")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(300);

    if (error) {
      console.error(error);
      if (force) alert(`Erro ao carregar histórico: ${error.message}`);
      return;
    }

    state.history = (data || []).filter((item) => canViewHistoryItem(item));
    state.historyLoaded = true;
    renderHistoryText();
  }
  
  async function seedDefaultStages() {
    const defaults = [
      { name: "Novos Leads", color: "#3b82f6", stage_type: "andamento", position: 0, created_by: state.currentUser.id },
      { name: "Em Contato", color: "#f59e0b", stage_type: "andamento", position: 1, created_by: state.currentUser.id },
      { name: "Proposta", color: "#8b5cf6", stage_type: "andamento", position: 2, created_by: state.currentUser.id },
      { name: "Fechado", color: "#22c55e", stage_type: "fechado", position: 3, created_by: state.currentUser.id },
      { name: "Cancelado", color: "#ef4444", stage_type: "cancelado", position: 4, created_by: state.currentUser.id }
    ];

    const { error } = await state.supabase.from("stages").insert(defaults);
    if (error) alert(error.message);
  }

  function getStageName(stageId) {
    return state.stages.find((s) => s.id === stageId)?.name || "-";
  }

  function getProfileNameById(userId) {
    return state.profiles.find((p) => p.id === userId)?.full_name || "-";
  }

  function getFilteredLeads(options = {}) {
    const search = els.searchInput.value.trim().toLowerCase();
    const categories = getFilterValues("category", els.categoryFilter);
    const groupIds = getFilterValues("group", els.groupFilter);
    const funnelIds = getFilterValues("funnel", els.funnelFilter);
    const subfunnelIds = getFilterValues("subfunnel", els.subfunnelFilter);
    const owners = getFilterValues("owner", els.ownerFilter);
    const months = options.ignoreMonth ? [] : getFilterValues("month", els.monthFilter);
    const stageIds = getFilterValues("stage", els.stageFilter);
    const leadSources = getFilterValues("leadSource", els.leadSourceFilter);
    const socialSources = getFilterValues("socialSource", els.socialSourceFilter);
    const indicators = getFilterValues("indicator", els.indicatorFilter);
    const indicatorSectors = getFilterValues("indicatorSector", els.indicatorSectorFilter);
    const baseLeads = isFunnelDetailActive() ? getScopedLeads() : getScopedLeads();
    const cache = getRenderComputationCache();
    const cacheKey = JSON.stringify({
      ignoreMonth: options.ignoreMonth === true,
      search,
      categories,
      groupIds,
      funnelIds,
      subfunnelIds,
      owners,
      months,
      stageIds,
      leadSources,
      socialSources,
      indicators,
      indicatorSectors,
      activeFunnelId: state.activeFunnelId || "",
      activeSubfunnelId: state.activeSubfunnelId || "",
      detail: isFunnelDetailActive(),
      leadCount: baseLeads.length
    });

    if (cache.filteredLeads.has(cacheKey)) {
      return cache.filteredLeads.get(cacheKey);
    }

    const result = baseLeads.filter((lead) => {
      const leadSubfunnelId = getLeadSubfunnelId(lead);
      const leadFunnelId = getLeadFunnelId(lead);
      const leadFunnel = getFunnelById(leadFunnelId);
      const leadGroupId = String(leadFunnel?.group_id || "").trim();
      const matchesSearch = !search || getLeadSearchText(lead).includes(search);
      const matchesCategory = matchesFilterSelection(categories, String(leadFunnel?.category || ""));
      const matchesGroup = !groupIds.length || groupIds.some((groupId) => groupId === GROUP_FILTER_UNGROUPED_VALUE ? !leadGroupId : leadGroupId === groupId);
      const matchesFunnel = matchesFilterSelection(funnelIds, leadFunnelId);
      const matchesSubfunnel = matchesFilterSelection(subfunnelIds, leadSubfunnelId);
      const matchesOwner = matchesFilterSelection(owners, lead.owner);
      const matchesMonth = matchesFilterSelection(months, getLeadMonthKey(lead));
      const matchesStage = matchesFilterSelection(stageIds, lead.stage_id);
      const matchesLeadSource = matchesFilterSelection(leadSources, String(lead.traffic_type || ""));
      const matchesSocialSource = matchesFilterSelection(socialSources, String(lead.social_source || ""));
      const matchesIndicator = matchesFilterSelection(indicators, getLeadReferralName(lead));
      const matchesIndicatorSector = matchesFilterSelection(indicatorSectors, getLeadReferralSector(lead));

      return matchesSearch && matchesCategory && matchesGroup && matchesFunnel && matchesSubfunnel && matchesOwner && matchesMonth && matchesStage && matchesLeadSource && matchesSocialSource && matchesIndicator && matchesIndicatorSector;
    });

    cache.filteredLeads.set(cacheKey, result);
    return result;
  }

  function getGroupFilterDisplayLabel(groupId) {
    if (!groupId) return "";
    if (groupId === GROUP_FILTER_UNGROUPED_VALUE) return "Sem grupo";
    const group = getGroupById(groupId);
    if (!group) return "";
    return `${String(group.category || "B2C").trim()} • Grupo: ${group.name}`;
  }

  function getFunnelFilterOptionLabel(funnel) {
    if (!funnel) return "";
    const group = funnel.group_id ? getGroupById(funnel.group_id) : null;
    const category = String(funnel.category || group?.category || "B2C").trim();
    return group?.name
      ? `${category} • Grupo: ${group.name} • Funil: ${funnel.name}`
      : `${category} • Sem grupo • Funil: ${funnel.name}`;
  }

  function getSubfunnelFilterOptionLabel(subfunnel) {
    if (!subfunnel) return "";
    const funnel = getFunnelById(subfunnel.funnel_id);
    const group = funnel?.group_id ? getGroupById(funnel.group_id) : null;
    const category = String(funnel?.category || group?.category || "B2C").trim();
    const parts = [category, group?.name ? `Grupo: ${group.name}` : "Sem grupo"];
    if (funnel?.name) parts.push(`Funil: ${funnel.name}`);
    parts.push(`Subfunil: ${subfunnel.name}`);
    return parts.join(" • ");
  }

  function populateFilters() {
    rebuildReferralCanonicalMaps();

    const sourceLeads = isFunnelDetailActive() ? getScopedLeads() : getScopedLeads();
    const sourceStages = isFunnelDetailActive() ? getScopedStages() : getScopedStages();
    const currentCategories = getFilterValues("category", els.categoryFilter);
    const currentGroups = getFilterValues("group", els.groupFilter);
    const currentFunnels = getFilterValues("funnel", els.funnelFilter);
    const currentSubfunnels = getFilterValues("subfunnel", els.subfunnelFilter);
    const currentOwners = getFilterValues("owner", els.ownerFilter);
    const currentMonths = getFilterValues("month", els.monthFilter);
    const currentStages = getFilterValues("stage", els.stageFilter);
    const currentLeadSources = getFilterValues("leadSource", els.leadSourceFilter);
    const currentSocialSources = getFilterValues("socialSource", els.socialSourceFilter);
    const currentIndicators = getFilterValues("indicator", els.indicatorFilter);
    const currentIndicatorSectors = getFilterValues("indicatorSector", els.indicatorSectorFilter);

    const categoryOptions = FUNNEL_CATEGORIES.filter((category) => sourceLeads.some((lead) => getFunnelById(getLeadFunnelId(lead))?.category === category));
    const validCategories = intersectFilterValues(currentCategories, categoryOptions);

    const groupSourceLeads = validCategories.length
      ? sourceLeads.filter((lead) => validCategories.includes(String(getFunnelById(getLeadFunnelId(lead))?.category || "")))
      : sourceLeads;

    const groupOptions = [];
    if (groupSourceLeads.some((lead) => !String(getFunnelById(getLeadFunnelId(lead))?.group_id || "").trim())) {
      groupOptions.push({ id: GROUP_FILTER_UNGROUPED_VALUE, name: "Sem grupo" });
    }
    [...new Set(groupSourceLeads
      .map((lead) => String(getFunnelById(getLeadFunnelId(lead))?.group_id || "").trim())
      .filter(Boolean))]
      .map((groupId) => getGroupById(groupId))
      .filter(Boolean)
      .sort((a, b) => String(a.name || "").localeCompare(String(b.name || ""), "pt-BR"))
      .forEach((group) => groupOptions.push(group));

    const validGroupIds = intersectFilterValues(currentGroups, groupOptions.map((group) => String(group.id || "")));

    const funnelSourceLeads = sourceLeads.filter((lead) => {
      const leadFunnel = getFunnelById(getLeadFunnelId(lead));
      const leadGroupId = String(leadFunnel?.group_id || "").trim();
      if (validCategories.length && !validCategories.includes(String(leadFunnel?.category || ""))) return false;
      if (!validGroupIds.length) return true;
      return validGroupIds.some((groupId) => groupId === GROUP_FILTER_UNGROUPED_VALUE ? !leadGroupId : leadGroupId === groupId);
    });

    const funnelOptions = [...new Set(funnelSourceLeads.map((lead) => getLeadFunnelId(lead)).filter(Boolean))]
      .map((funnelId) => getFunnelById(funnelId))
      .filter(Boolean)
      .sort((a, b) => String(a.name || "").localeCompare(String(b.name || ""), "pt-BR"));

    const validFunnelIds = intersectFilterValues(currentFunnels, funnelOptions.map((funnel) => funnel.id));

    const subfunnelSourceLeads = validFunnelIds.length
      ? funnelSourceLeads.filter((lead) => validFunnelIds.includes(getLeadFunnelId(lead)))
      : funnelSourceLeads;

    const subfunnelOptions = [...new Set(subfunnelSourceLeads.map((lead) => getLeadSubfunnelId(lead)).filter(Boolean))]
      .map((subfunnelId) => getSubfunnelById(subfunnelId))
      .filter(Boolean)
      .sort((a, b) => String(a.name || "").localeCompare(String(b.name || ""), "pt-BR"));

    const validSubfunnelIds = intersectFilterValues(currentSubfunnels, subfunnelOptions.map((subfunnel) => subfunnel.id));

    const scopedStages = sourceStages.filter((stage) => {
      const assignedSubfunnelId = state.funnelWorkspace?.stageAssignments?.[stage.id] || null;
      const assignedFunnelId = getSubfunnelById(assignedSubfunnelId)?.funnel_id || null;
      const assignedFunnel = getFunnelById(assignedFunnelId);
      const assignedGroupId = String(assignedFunnel?.group_id || "").trim();
      if (validCategories.length && !validCategories.includes(String(assignedFunnel?.category || ""))) return false;
      if (validGroupIds.length && !validGroupIds.some((groupId) => groupId === GROUP_FILTER_UNGROUPED_VALUE ? !assignedGroupId : assignedGroupId === groupId)) return false;
      if (validSubfunnelIds.length) return validSubfunnelIds.includes(assignedSubfunnelId);
      if (validFunnelIds.length) return validFunnelIds.includes(assignedFunnelId);
      return true;
    });

    const hierarchyScopedLeads = sourceLeads.filter((lead) => {
      const leadFunnel = getFunnelById(getLeadFunnelId(lead));
      const leadGroupId = String(leadFunnel?.group_id || "").trim();
      if (validCategories.length && !validCategories.includes(String(leadFunnel?.category || ""))) return false;
      if (validGroupIds.length && !validGroupIds.some((groupId) => groupId === GROUP_FILTER_UNGROUPED_VALUE ? !leadGroupId : leadGroupId === groupId)) return false;
      if (validSubfunnelIds.length) return validSubfunnelIds.includes(getLeadSubfunnelId(lead));
      if (validFunnelIds.length) return validFunnelIds.includes(getLeadFunnelId(lead));
      return true;
    });

    const owners = [...new Set(hierarchyScopedLeads.map((x) => x.owner).filter(Boolean))].sort();
    const months = [...new Set(hierarchyScopedLeads.map((lead) => getLeadMonthKey(lead)).filter(Boolean))]
      .sort((a, b) => String(b).localeCompare(String(a), "pt-BR"));
    const stageOptions = scopedStages.map((stage) => ({ id: stage.id, name: stage.name }));
    const leadSources = getLeadSourceNames();
    const socialSources = [...new Set(hierarchyScopedLeads.map((lead) => String(lead.social_source || "").trim()).filter(Boolean))]
      .sort((a, b) => a.localeCompare(b, "pt-BR"));
    const referralNames = [...new Set(hierarchyScopedLeads.map((lead) => getLeadReferralName(lead)).filter(Boolean))]
      .sort((a, b) => a.localeCompare(b, "pt-BR"));
    const referralSectors = [...new Set(hierarchyScopedLeads.map((lead) => getLeadReferralSector(lead)).filter(Boolean))]
      .sort((a, b) => a.localeCompare(b, "pt-BR"));
    const indicatorOptions = getIndicatorFilterOptions(referralNames);

    if (els.categoryFilter) {
      els.categoryFilter.innerHTML =
        '<option value="">B2B e B2C</option>' +
        categoryOptions.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join("");
    }

    if (els.groupFilter) {
      els.groupFilter.innerHTML =
        '<option value="">Todos os grupos</option>' +
        groupOptions.map((group) => `<option value="${escapeHtml(group.id)}">${escapeHtml(getGroupFilterDisplayLabel(group.id))}</option>`).join("");
    }

    if (els.funnelFilter) {
      els.funnelFilter.innerHTML =
        '<option value="">Todos os funis</option>' +
        funnelOptions.map((funnel) => `<option value="${escapeHtml(funnel.id)}">${escapeHtml(getFunnelFilterOptionLabel(funnel))}</option>`).join("");
    }

    if (els.subfunnelFilter) {
      els.subfunnelFilter.innerHTML =
        '<option value="">Todos os subfunis</option>' +
        subfunnelOptions.map((subfunnel) => `<option value="${escapeHtml(subfunnel.id)}">${escapeHtml(getSubfunnelFilterOptionLabel(subfunnel))}</option>`).join("");
    }

    els.ownerFilter.innerHTML =
      '<option value="">Todos os responsáveis</option>' +
      owners.map((o) => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join("");

    els.monthFilter.innerHTML =
      '<option value="">Todos os meses</option>' +
      months.map((m) => `<option value="${m}">${formatMonthLabel(m)}</option>`).join("");

    if (els.stageFilter) {
      els.stageFilter.innerHTML =
        '<option value="">Todos os pipelines</option>' +
        stageOptions.map((stage) => `<option value="${escapeHtml(stage.id)}">${escapeHtml(stage.name)}</option>`).join("");
    }

    if (els.leadSourceFilter) {
      els.leadSourceFilter.innerHTML =
        '<option value="">Todas as origens</option>' +
        leadSources.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join("");
    }

    if (els.socialSourceFilter) {
      els.socialSourceFilter.innerHTML =
        '<option value="">Todos os canais</option>' +
        socialSources.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join("");
    }

    if (els.mobileOwnerFilter) {
      els.mobileOwnerFilter.innerHTML =
        '<option value="">Todos os responsáveis</option>' +
        owners.map((o) => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join("");
    }

    if (els.mobileCategoryFilter) {
      els.mobileCategoryFilter.innerHTML =
        '<option value="">B2B e B2C</option>' +
        categoryOptions.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join("");
    }

    if (els.mobileGroupFilter) {
      els.mobileGroupFilter.innerHTML =
        '<option value="">Todos os grupos</option>' +
        groupOptions.map((group) => `<option value="${escapeHtml(group.id)}">${escapeHtml(getGroupFilterDisplayLabel(group.id))}</option>`).join("");
    }

    if (els.mobileFunnelFilter) {
      els.mobileFunnelFilter.innerHTML =
        '<option value="">Todos os funis</option>' +
        funnelOptions.map((funnel) => `<option value="${escapeHtml(funnel.id)}">${escapeHtml(getFunnelFilterOptionLabel(funnel))}</option>`).join("");
    }

    if (els.mobileSubfunnelFilter) {
      els.mobileSubfunnelFilter.innerHTML =
        '<option value="">Todos os subfunis</option>' +
        subfunnelOptions.map((subfunnel) => `<option value="${escapeHtml(subfunnel.id)}">${escapeHtml(getSubfunnelFilterOptionLabel(subfunnel))}</option>`).join("");
    }

    if (els.mobileMonthFilter) {
      els.mobileMonthFilter.innerHTML =
        '<option value="">Todos os meses</option>' +
        months.map((m) => `<option value="${m}">${formatMonthLabel(m)}</option>`).join("");
    }

    if (els.mobileStageFilter) {
      els.mobileStageFilter.innerHTML =
        '<option value="">Todos os pipelines</option>' +
        stageOptions.map((stage) => `<option value="${escapeHtml(stage.id)}">${escapeHtml(stage.name)}</option>`).join("");
    }

    if (els.mobileLeadSourceFilter) {
      els.mobileLeadSourceFilter.innerHTML =
        '<option value="">Todas as origens</option>' +
        leadSources.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join("");
    }

    if (els.mobileSocialSourceFilter) {
      els.mobileSocialSourceFilter.innerHTML =
        '<option value="">Todos os canais</option>' +
        socialSources.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join("");
    }

    if (els.indicatorFilter) {
      els.indicatorFilter.innerHTML = indicatorOptions
        .map((item) => `<option value="${escapeHtml(item.value)}">${escapeHtml(item.label)}</option>`)
        .join("");
    }

    if (els.mobileIndicatorFilter) {
      els.mobileIndicatorFilter.innerHTML = indicatorOptions
        .map((item) => `<option value="${escapeHtml(item.value)}">${escapeHtml(item.label)}</option>`)
        .join("");
    }

    if (els.indicatorSectorFilter) {
      els.indicatorSectorFilter.innerHTML =
        '<option value="">Todos os setores</option>' +
        referralSectors.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join("");
    }

    if (els.mobileIndicatorSectorFilter) {
      els.mobileIndicatorSectorFilter.innerHTML =
        '<option value="">Todos os setores</option>' +
        referralSectors.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join("");
    }

    els.stage.innerHTML = sourceStages
      .map((s) => `<option value="${s.id}">${escapeHtml(s.name)}</option>`)
      .join("");

    if (els.trafficType) {
      els.trafficType.innerHTML =
        '<option value="">Selecione</option>' +
        leadSources.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join("");
    }

    refreshStageTypeOptions(els.stageType?.value || "andamento");

    setFilterValues("category", validCategories, els.categoryFilter);
    setFilterValues("group", validGroupIds, els.groupFilter);
    setFilterValues("funnel", validFunnelIds, els.funnelFilter);
    setFilterValues("subfunnel", validSubfunnelIds, els.subfunnelFilter);
    setFilterValues("owner", intersectFilterValues(currentOwners, owners), els.ownerFilter);
    setFilterValues("month", intersectFilterValues(currentMonths, months), els.monthFilter);
    setFilterValues("stage", intersectFilterValues(currentStages, stageOptions.map((stage) => stage.id)), els.stageFilter);
    setFilterValues("leadSource", intersectFilterValues(currentLeadSources, leadSources), els.leadSourceFilter);
    setFilterValues("socialSource", intersectFilterValues(currentSocialSources, socialSources), els.socialSourceFilter);
    setFilterValues(
      "indicator",
      intersectFilterValues(getCanonicalFilterValues(currentIndicators, state.indicatorCanonicalMap, "indicator_name"), referralNames),
      els.indicatorFilter
    );
    setFilterValues(
      "indicatorSector",
      intersectFilterValues(getCanonicalFilterValues(currentIndicatorSectors, state.indicatorSectorCanonicalMap, "indicator_sector"), referralSectors),
      els.indicatorSectorFilter
    );
    syncMobileFilterControls();

    renderFilterOptions(
      els.categoryFilter,
      els.categoryFilterMenu,
      els.categoryFilterLabel,
      "B2B e B2C",
      (_value, text) => text,
      "category"
    );

    renderFilterOptions(
      els.groupFilter,
      els.groupFilterMenu,
      els.groupFilterLabel,
      "Todos os grupos",
      (_value, text) => text,
      "group"
    );

    renderFilterOptions(
      els.funnelFilter,
      els.funnelFilterMenu,
      els.funnelFilterLabel,
      "Todos os funis",
      (_value, text) => text,
      "funnel"
    );

    renderFilterOptions(
      els.subfunnelFilter,
      els.subfunnelFilterMenu,
      els.subfunnelFilterLabel,
      "Todos os subfunis",
      (_value, text) => text,
      "subfunnel"
    );

    renderFilterOptions(
      els.ownerFilter,
      els.ownerFilterMenu,
      els.ownerFilterLabel,
      "Todos os responsáveis",
      (_value, text) => text,
      "owner"
    );

    renderFilterOptions(
      els.monthFilter,
      els.monthFilterMenu,
      els.monthFilterLabel,
      "Todos os meses",
      (value) => formatMonthLabel(value),
      "month"
    );

    renderFilterOptions(
      els.stageFilter,
      els.stageFilterMenu,
      els.stageFilterLabel,
      "Todos os pipelines",
      (_value, text) => text,
      "stage"
    );

    renderFilterOptions(
      els.leadSourceFilter,
      els.leadSourceFilterMenu,
      els.leadSourceFilterLabel,
      "Todas as origens",
      (_value, text) => text,
      "leadSource"
    );

    renderFilterOptions(
      els.socialSourceFilter,
      els.socialSourceFilterMenu,
      els.socialSourceFilterLabel,
      "Todos os canais",
      (_value, text) => text,
      "socialSource"
    );

    renderFilterOptions(
      els.indicatorFilter,
      els.indicatorFilterMenu,
      els.indicatorFilterLabel,
      "Todas as indicações",
      (_value, text) => text,
      "indicator"
    );

    renderFilterOptions(
      els.indicatorSectorFilter,
      els.indicatorSectorFilterMenu,
      els.indicatorSectorFilterLabel,
      "Todos os setores",
      (_value, text) => text,
      "indicatorSector"
    );
  }

  function getDashboardMetrics(filtered = getFilteredLeads()) {
    const cache = getRenderComputationCache();
    if (Array.isArray(filtered) && cache.dashboardMetrics.has(filtered)) {
      return cache.dashboardMetrics.get(filtered);
    }

    const total = filtered.length;
    const closedLeads = getClosedLeads(filtered);
    const qualifiedClosed = getQualifiedClosedLeads(filtered);
    const closed = closedLeads.length;
    const conversion = total ? ((closed / total) * 100) : 0;
    const totalValue = qualifiedClosed.reduce((sum, item) => sum + Number(item.value || 0), 0);
    const avgTicket = qualifiedClosed.length ? totalValue / qualifiedClosed.length : 0;
    const paidCount = filtered.filter((lead) => String(lead.traffic_type || "").toLowerCase() === "pago").length;
    const organicCount = filtered.filter((lead) => String(lead.traffic_type || "").toLowerCase() === "organico").length;
    const referralCount = filtered.filter((lead) => !!getLeadReferralName(lead)).length;
    const waitingStageIds = new Set(
      state.stages
        .filter((stage) => String(stage.stage_type || "").toLowerCase() === "espera")
        .map((stage) => stage.id)
    );
    const waitingCount = filtered.filter((lead) => waitingStageIds.has(lead.stage_id)).length;

    const byStage = state.stages.map((stage) => ({
      id: stage.id,
      name: stage.name,
      color: stage.color,
      count: filtered.filter((lead) => lead.stage_id === stage.id).length
    }));
    const topStage = [...byStage].sort((a, b) => b.count - a.count)[0];

    const ownerTotals = closedLeads.reduce((acc, lead) => {
      const key = lead.owner || "Sem responsável";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const topOwner = Object.entries(ownerTotals).sort((a, b) => (b[1] - a[1]) || String(a[0]).localeCompare(String(b[0]), "pt-BR"))[0];

    const referralTotals = filtered.reduce((acc, lead) => {
      const key = getLeadReferralName(lead);
      if (!key) return acc;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const topReferral = Object.entries(referralTotals).sort((a, b) => (b[1] - a[1]) || String(a[0]).localeCompare(String(b[0]), "pt-BR"))[0];

    const monthTotals = filtered.reduce((acc, lead) => {
      const key = getLeadMonthKey(lead);
      if (!key) return acc;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const bestMonth = Object.entries(monthTotals).sort((a, b) => b[1] - a[1])[0];

    const planSummaryMap = qualifiedClosed.reduce((acc, lead) => {
      const leadPlans = getLeadPlans(lead);
      const fallbackPlans = leadPlans.length ? leadPlans : (getLeadPlan(lead) ? [{ name: getLeadPlan(lead), value: Number(lead.value || 0) }] : []);
      fallbackPlans.forEach((planItem) => {
        const plan = planItem.name || "Sem plano";
        const unitValue = Number(planItem.value || 0);
        const key = `${plan}__${unitValue}`;
        if (!acc[key]) acc[key] = { plan, unitValue, count: 0, totalValue: 0 };
        acc[key].count += 1;
        acc[key].totalValue += unitValue;
      });
      return acc;
    }, {});

    const planSummary = Object.values(planSummaryMap)
      .sort((a, b) => (b.totalValue - a.totalValue) || a.plan.localeCompare(b.plan, "pt-BR"));

    const result = { total, totalValue, closed, conversion, avgTicket, paidCount, organicCount, referralCount, waitingCount, byStage, topStage, topOwner, topReferral, bestMonth, planSummary };
    if (Array.isArray(filtered)) {
      cache.dashboardMetrics.set(filtered, result);
    }
    return result;
  }

  function buildDashboardMetricsSignature(metrics = {}) {
    return JSON.stringify({
      total: metrics.total,
      totalValue: Number(metrics.totalValue || 0).toFixed(2),
      closed: metrics.closed,
      conversion: Number(metrics.conversion || 0).toFixed(1),
      avgTicket: Number(metrics.avgTicket || 0).toFixed(2),
      topStage: metrics.topStage?.name || "-",
      paidCount: metrics.paidCount,
      organicCount: metrics.organicCount,
      referralCount: metrics.referralCount,
      waitingCount: metrics.waitingCount,
      topOwner: metrics.topOwner?.[0] || "-",
      topReferral: metrics.topReferral?.[0] || "-",
      bestMonth: metrics.bestMonth?.[0] || "-",
      closedPlans: (metrics.planSummary || []).reduce((sum, item) => sum + item.count, 0),
      planSummary: (metrics.planSummary || []).map((item) => [item.plan, item.unitValue, item.count, item.totalValue])
    });
  }

  function applyHeaderDashboardMetrics(metrics = {}) {
    if (els.totalLeads) els.totalLeads.textContent = metrics.total;
    if (els.totalValue) els.totalValue.textContent = brMoney(metrics.totalValue);
    if (els.closedDeals) els.closedDeals.textContent = metrics.closed;
    if (els.conversionRate) els.conversionRate.textContent = `${metrics.conversion.toFixed(1)}%`;
    if (els.avgTicket) els.avgTicket.textContent = brMoney(metrics.avgTicket);
    if (els.topStage) els.topStage.textContent = metrics.topStage?.name || "-";
    if (els.paidRate) els.paidRate.textContent = metrics.paidCount;
    if (els.organicLeads) els.organicLeads.textContent = metrics.organicCount;
  }

  function applyReportDashboardMetrics(metrics = {}) {
    if (els.reportTotalLeads) els.reportTotalLeads.textContent = metrics.total;
    if (els.reportClosedValue) els.reportClosedValue.textContent = brMoney(metrics.totalValue);
    if (els.reportClosedDeals) els.reportClosedDeals.textContent = metrics.closed;
    if (els.reportReferralCount) els.reportReferralCount.textContent = metrics.referralCount;
    if (els.reportWaitingCount) els.reportWaitingCount.textContent = metrics.waitingCount;
    if (els.reportAvgTicket) els.reportAvgTicket.textContent = brMoney(metrics.avgTicket);
    if (els.reportConversionRate) els.reportConversionRate.textContent = `${metrics.conversion.toFixed(1)}%`;
    if (els.reportTopOwner) els.reportTopOwner.textContent = metrics.topOwner?.[0] || "-";
    if (els.reportTopReferral) els.reportTopReferral.textContent = metrics.topReferral?.[0] || "-";
    if (els.reportTopStage) els.reportTopStage.textContent = metrics.topStage?.name || "-";
    if (els.reportBestMonth) els.reportBestMonth.textContent = metrics.bestMonth?.[0] ? formatMonthLabel(metrics.bestMonth[0]) : "-";
    if (els.reportClosedPlans) els.reportClosedPlans.textContent = (metrics.planSummary || []).reduce((sum, item) => sum + item.count, 0);
  }

  function renderPlanSummaryTable(metrics = {}) {
    if (!els.planSummaryBody) return;
    els.planSummaryBody.innerHTML = (metrics.planSummary || []).length
      ? metrics.planSummary.map((item) => `
          <tr>
            <td>${escapeHtml(item.plan)}</td>
            <td>${formatPlanValue(item.unitValue)}</td>
            <td>${item.count}</td>
            <td>${formatPlanValue(item.totalValue)}</td>
          </tr>
        `).join("")
      : '<tr><td colspan="4" class="empty-state">Nenhum fechamento com valor encontrado.</td></tr>';
  }

  function renderStats() {
    const metrics = getDashboardMetrics();
    const nextSignature = buildDashboardMetricsSignature(metrics);
    if (state.reportStatsSignature === nextSignature) {
      return;
    }
    state.reportStatsSignature = nextSignature;

    applyHeaderDashboardMetrics(metrics);
    applyReportDashboardMetrics(metrics);
    renderPlanSummaryTable(metrics);
  }

  function buildPipelineStageLeadMap(leads = []) {
    const leadsByStageId = new Map();
    const stageLeadCounts = new Map();

    (Array.isArray(leads) ? leads : []).forEach((lead) => {
      const stageId = String(lead?.stage_id || "").trim();
      if (!stageId) return;
      if (!leadsByStageId.has(stageId)) {
        leadsByStageId.set(stageId, []);
      }
      leadsByStageId.get(stageId).push(lead);
      stageLeadCounts.set(stageId, Number(stageLeadCounts.get(stageId) || 0) + 1);
    });

    return {
      leadsByStageId,
      stageLeadCounts
    };
  }

  function renderPipelineStageStrip(filtered = getFilteredLeads(), stageLeadCounts = null) {
    if (!els.pipelineStageStrip) return;
    const stages = getScopedStages();
    const canReorderPipelineStages = canManageStages();
    const resolvedStageLeadCounts = stageLeadCounts instanceof Map
      ? stageLeadCounts
      : buildPipelineStageLeadMap(filtered).stageLeadCounts;

    els.pipelineStageStrip.innerHTML = stages.map((stage) => {
      const count = Number(resolvedStageLeadCounts.get(stage.id) || 0);
      return `
        <article class="pipeline-stage-tab" data-stage-id="${stage.id}" draggable="${canReorderPipelineStages ? "true" : "false"}">
          <div class="pipeline-stage-tab-main">
            <div class="pipeline-stage-tab-title">
              <span class="pipeline-stage-tab-accent" style="background:${stage.color}"></span>
              <div>
                <strong>${escapeHtml(stage.name)}</strong>
                <span>${escapeHtml(stageTypeLabel(stage.stage_type, stage.custom_stage_type))}</span>
              </div>
            </div>
          </div>
          <span class="pipeline-stage-tab-badge">${count}</span>
        </article>
      `;
    }).join("");
  }

  function syncPipelineColumnHeights() {
    const columns = [...document.querySelectorAll("#pipeline .column")];
    if (!columns.length) return;

    columns.forEach((column) => {
      column.style.height = "";
      column.style.minHeight = "";
    });

    if (isCompactViewport()) return;

    const tallestHeight = Math.max(...columns.map((column) => Math.ceil(column.getBoundingClientRect().height || 0)));
    if (!tallestHeight) return;

    columns.forEach((column) => {
      column.style.height = `${tallestHeight}px`;
      column.style.minHeight = `${tallestHeight}px`;
    });
  }

  function renderPipeline() {
    const filtered = getFilteredLeads();
    const canReorderPipelineLeads = canMoveLeads();
    const canReorderPipelineStages = canManageStages();
    const stages = getScopedStages();
    const pipelineStageLeadMap = buildPipelineStageLeadMap(filtered);
    renderPipelineStageStrip(filtered, pipelineStageLeadMap.stageLeadCounts);

    els.pipeline.innerHTML = stages.map((stage, index) => {
      const leads = pipelineStageLeadMap.leadsByStageId.get(stage.id) || [];

      const cards = leads.length
        ? leads.map((lead) => {
          const canEditLead = canEditLeads(lead);
          const canDeleteLeadItem = canDeleteLeads(lead);
          const latestObservation = getLeadLatestObservation(lead);
          const referralName = getLeadReferralName(lead);
          const referralSector = getLeadReferralSector(lead);
          const contractNumbers = getLeadContractNumbers(lead);
          return `
          <article class="card" draggable="${canReorderPipelineLeads ? "true" : "false"}" data-lead-id="${lead.id}">
            <div class="card-top">
              <div>
                <div class="card-title">${escapeHtml(lead.name)}</div>
                <div class="card-value" style="--card-value-bg:${stage.color}22;--card-value-color:${stage.color};--card-value-border:${stage.color}55">${escapeHtml(getLeadPlanValueText(lead))}</div>
              </div>
              <span class="status-pill" style="--status-bg:${stage.color}22;--status-color:${stage.color};--status-border:${stage.color}55">
                ${escapeHtml(stageTypeLabel(stage.stage_type, stage.custom_stage_type))}
              </span>
            </div>

            <div class="card-meta">
              <span><strong>Contato:</strong> ${escapeHtml(lead.contact || "-")}</span>
              <span><strong>Responsável:</strong> ${escapeHtml(lead.owner || "-")}</span>
              <span><strong>Início:</strong> ${formatDate(lead.start_date)}</span>
              <span><strong>Origem:</strong> ${escapeHtml(lead.traffic_type || "-")}</span>
              ${referralName ? `<span><strong>Indicou:</strong> ${escapeHtml(referralName)}</span>` : ""}
              ${referralSector ? `<span><strong>Setor do indicado:</strong> ${escapeHtml(referralSector)}</span>` : ""}
              <span><strong>Canal de origem:</strong> ${escapeHtml(lead.social_source || "-")}</span>
              ${contractNumbers ? `<span><strong>Contrato:</strong> ${escapeHtml(contractNumbers)}</span>` : ""}
            </div>

            ${latestObservation ? `<div class="card-notes"><strong>Ultima observacao:</strong> ${escapeHtml(latestObservation.text)}${latestObservation.date ? `<small>${formatDate(latestObservation.date)}</small>` : ""}</div>` : ""}

            ${canEditLead || canDeleteLeadItem ? `
              <div class="card-actions">
                ${canEditLead ? `<button type="button" class="edit-btn" data-action="edit-lead" data-id="${lead.id}">Editar</button>` : ""}
                ${canDeleteLeadItem ? `<button type="button" class="delete-btn" data-action="delete-lead" data-id="${lead.id}">Excluir</button>` : ""}
              </div>
            ` : ""}
          </article>
        `;
        }).join("")
        : '<div class="empty-state">Nenhum lead nesta etapa.</div>';

      return `
        <section class="column" data-stage-id="${stage.id}" draggable="${canReorderPipelineStages ? "true" : "false"}">
          <div class="column-body">${cards}</div>
        </section>
      `;
    }).join("");

    bindPipelineEvents();
    requestAnimationFrame(() => {
      syncPipelineColumnHeights();
      syncPipelineScrollBars();
      updateStickyLayout();
    });
  }

  function updateBulkDeleteButton() {
    if (!els.deleteSelectedBtn) return;

    const count = state.selectedLeadIds.size;
    if (state.bulkDeleteInProgress) {
      const total = state.bulkDeleteTotal || count;
      const completed = Math.min(state.bulkDeleteCompleted || 0, total);
      els.deleteSelectedBtn.textContent = `Excluindo ${completed}/${total}...`;
      els.deleteSelectedBtn.disabled = true;
      els.deleteSelectedBtn.classList.remove("hidden");
      return;
    }

    els.deleteSelectedBtn.textContent = count ? `Excluir selecionados (${count})` : "Excluir selecionados";
    els.deleteSelectedBtn.disabled = false;
    els.deleteSelectedBtn.classList.toggle("hidden", count === 0);
  }

  function syncSelectAllCheckbox(filtered) {
    if (!els.selectAllLeads) return;

    const visibleIds = filtered.map((lead) => lead.id);

    if (!visibleIds.length) {
      els.selectAllLeads.checked = false;
      els.selectAllLeads.indeterminate = false;
      return;
    }

    const selectedVisibleCount = visibleIds.filter((id) => state.selectedLeadIds.has(id)).length;
    els.selectAllLeads.checked = selectedVisibleCount === visibleIds.length;
    els.selectAllLeads.indeterminate = selectedVisibleCount > 0 && selectedVisibleCount < visibleIds.length;
  }

  async function deleteLeadsByIds(leadIds, options = {}) {
    const ids = normalizeIdList(leadIds);
    if (!ids.length) return { data: [], error: null };
    const onProgress = typeof options.onProgress === "function" ? options.onProgress : null;

    const invalidIds = ids.filter((id) => !isUuid(id));
    if (invalidIds.length) {
      return {
        data: [],
        error: {
          message: "Foram encontrados IDs de leads invalidos para exclusao.",
          details: invalidIds.join(", ")
        }
      };
    }

    const { data, error } = await state.supabase.rpc("delete_leads_by_ids", { target_ids: ids });
    if (!error) {
      onProgress?.(ids.length, ids.length);
      return { data: Array.isArray(data) ? data : [], error: null };
    }

    if (String(error.code || "").trim() !== "PGRST202") {
      return { data: [], error };
    }

    const deletedIds = [];
    const batches = chunkArray(ids, 100);

    for (const batch of batches) {
      const { error: deleteError } = await state.supabase
        .from("leads")
        .delete()
        .in("id", batch);

      if (deleteError) {
        return { data: deletedIds.map((deletedId) => ({ deleted_id: deletedId })), error: deleteError };
      }

      deletedIds.push(...batch);
      onProgress?.(deletedIds.length, ids.length);
      await waitForNextPaint();
    }

    return {
      data: deletedIds.map((deletedId) => ({ deleted_id: deletedId })),
      error: null
    };
  }

  function requestLeadDeleteAuthorization(lead) {
    if (!lead) return;
    requestAdminAuthorization({
      requestType: "delete_lead",
      title: "Solicitar exclusao de lead",
      description: `Voce nao tem permissao para excluir o lead "${lead.name}". Sua solicitacao sera enviada para o administrador.`,
      entityType: "lead",
      entityId: lead.id,
      payload: {
        lead_id: lead.id,
        lead_name: lead.name,
        lead_owner: lead.owner || null
      }
    });
  }

  function requestBulkLeadDeleteAuthorization(ids = []) {
    requestAdminAuthorization({
      requestType: "bulk_delete_leads",
      title: "Solicitar exclusao em lote",
      description: "Voce nao tem permissao para excluir leads em lote. Envie uma solicitacao para o administrador.",
      entityType: "lead",
      entityId: null,
      payload: {
        lead_ids: ids,
        lead_names: state.leads.filter((lead) => ids.includes(lead.id)).map((lead) => lead.name)
      }
    });
  }

  async function finalizeDeletedLeadsLocally(ids = [], options = {}) {
    const normalizedIds = normalizeIdList(ids);
    if (!normalizedIds.length) return true;

    try {
      await executeCriticalMutation({
        snapshot: {
          leads: true,
          funnelWorkspace: true,
          selectedLeadIds: true
        },
        applyOptimistic: () => {
          removeLeadsLocally(normalizedIds);
          if (options.clearSelection === true) {
            state.selectedLeadIds.clear();
          }
        },
        persist: async () => null,
        afterPersist: async () => {
          if (typeof options.afterPersist === "function") {
            await options.afterPersist();
          }
          finalizeLocalMutation({
            notifyScope: "workspace",
            refreshReason: options.refreshReason || "lead-delete",
            cooldownMs: Number(options.cooldownMs || 1200)
          });
        }
      });
    } catch (mutationError) {
      const errorPrefix = String(options.localErrorPrefix || "Erro ao finalizar exclusão local dos leads").trim();
      alert(`${errorPrefix}: ${formatSupabaseError(mutationError)}`);
      return false;
    }

    return true;
  }

  function collectSingleLeadDeleteContext(id) {
    const normalizedId = normalizeIdList([id])[0] || "";
    const lead = state.leads.find((item) => item.id === normalizedId) || null;
    return {
      normalizedId,
      lead
    };
  }

  function validateSingleLeadDeleteContext(context = {}) {
    if (!context.lead) return false;
    if (deletingLeadIds.has(context.normalizedId)) return false;
    if (!confirm(`Excluir o lead "${context.lead.name}"?`)) return false;
    if (!canDeleteLeads(context.lead)) {
      requestLeadDeleteAuthorization(context.lead);
      return false;
    }
    return true;
  }

  async function executeLeadDeleteRequest(ids = [], options = {}) {
    const normalizedIds = normalizeIdList(ids);
    if (!normalizedIds.length) {
      return { data: [], error: null };
    }
    return deleteLeadsByIds(normalizedIds, options);
  }

  async function deleteSelectedLeads() {
    if (state.bulkDeleteInProgress) return;

    const ids = normalizeIdList([...state.selectedLeadIds]);
    if (!ids.length) return;
    if (!confirm(`Tem certeza que deseja excluir ${ids.length} lead(s)?`)) return;

    if (!canDeleteLeads()) {
      requestBulkLeadDeleteAuthorization(ids);
      return;
    }

    const selectedLeads = state.leads.filter((lead) => ids.includes(lead.id));

    state.bulkDeleteInProgress = true;
    state.bulkDeleteTotal = ids.length;
    state.bulkDeleteCompleted = 0;
    updateBulkDeleteButton();
    await waitForNextPaint();

    let data = [];
    let error = null;

    try {
      ({ data, error } = await executeLeadDeleteRequest(ids, {
        onProgress(completed) {
          state.bulkDeleteCompleted = completed;
          updateBulkDeleteButton();
        }
      }));
    } finally {
      state.bulkDeleteInProgress = false;
      state.bulkDeleteTotal = 0;
      state.bulkDeleteCompleted = 0;
      updateBulkDeleteButton();
    }

    if (error) return alert(`Erro no Supabase: ${formatSupabaseError(error)}`);

    await finalizeDeletedLeadsLocally(ids, {
      clearSelection: true,
      refreshReason: "bulk-lead-delete",
      cooldownMs: 1400,
      localErrorPrefix: "Erro ao finalizar exclusão local dos leads",
      afterPersist: async () => {
        await logChange(
          "bulk_delete",
          "lead",
          null,
          `${ids.length} lead(s) foram excluídos por ${getUserDisplayName()}.`,
          {
            deleted_ids: data.map((item) => item?.deleted_id).filter(Boolean),
            deleted_names: selectedLeads.map((lead) => lead.name)
          }
        );
      }
    });
  }

  function renderLeadTable() {
    if (!canViewLeadsList()) {
      els.leadsTableBody.innerHTML = `
        <tr>
          <td colspan="11" class="empty-state">Visualizacao da lista de leads indisponivel para este perfil.</td>
        </tr>
      `;
      return;
    }

    const filtered = getFilteredLeads();

    if (!filtered.length) {
      els.leadsTableBody.innerHTML = `
        <tr>
          <td colspan="11" class="empty-state">Nenhum lead encontrado.</td>
        </tr>
      `;
      updateBulkDeleteButton();
      syncSelectAllCheckbox(filtered);
      return;
    }

    els.leadsTableBody.innerHTML = filtered.map((lead) => {
      const canEditLead = canEditLeads(lead);
      const canDeleteLeadItem = canDeleteLeads(lead);
      return `
      <tr class="${state.selectedLeadIds.has(lead.id) ? "is-selected" : ""}">
        <td class="select-col">
          <input
            type="checkbox"
            class="lead-check"
            data-id="${lead.id}"
            ${state.selectedLeadIds.has(lead.id) ? "checked" : ""}
            aria-label="Selecionar ${escapeHtml(lead.name)}"
          />
        </td>
        <td>${escapeHtml(lead.name)}</td>
        <td>${escapeHtml(lead.contact || "-")}</td>
        <td>${escapeHtml(lead.owner || "-")}</td>
        <td>${escapeHtml(getLeadPlanValueText(lead))}</td>
        <td>${formatDate(lead.start_date)}</td>
        <td>${escapeHtml(lead.traffic_type || "-")}${getLeadReferralName(lead) ? `<br><small>Indicou: ${escapeHtml(getLeadReferralName(lead))}</small>` : ""}${getLeadReferralSector(lead) ? `<br><small>Setor: ${escapeHtml(getLeadReferralSector(lead))}</small>` : ""}</td>
        <td>${escapeHtml(lead.social_source || "-")}</td>
        <td>${escapeHtml(getLeadPlanDisplayText(lead))}${getLeadContractNumbers(lead) ? `<br><small>Contrato: ${escapeHtml(getLeadContractNumbers(lead))}</small>` : ""}</td>
        <td>${escapeHtml(getStageName(lead.stage_id))}</td>
        <td>
          ${canEditLead || canDeleteLeadItem ? `
            <div class="table-actions">
              ${canEditLead ? `<button type="button" class="edit-btn" data-action="edit-lead" data-id="${lead.id}">Editar</button>` : ""}
              ${canDeleteLeadItem ? `<button type="button" class="delete-btn" data-action="delete-lead" data-id="${lead.id}">Excluir</button>` : ""}
            </div>
          ` : ""}
        </td>
      </tr>
    `;
    }).join("");

    document.querySelectorAll(".lead-check").forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const id = checkbox.dataset.id;
        if (!id) return;

        if (checkbox.checked) {
          state.selectedLeadIds.add(id);
        } else {
          state.selectedLeadIds.delete(id);
        }

        checkbox.closest("tr")?.classList.toggle("is-selected", checkbox.checked);
        updateBulkDeleteButton();
        syncSelectAllCheckbox(filtered);
      });
    });

    updateBulkDeleteButton();
    syncSelectAllCheckbox(filtered);
  }

  function renderTeam() {
    if (!canViewTeam()) {
      els.teamList.innerHTML = '<div class="team-item">Visualizacao da equipe indisponivel para este perfil.</div>';
      return;
    }

    const activeIds = new Set([
      ...state.leads.map((l) => l.created_by).filter(Boolean),
      ...state.leads.map((l) => l.assigned_to).filter(Boolean),
      ...state.stages.map((s) => s.created_by).filter(Boolean),
      state.currentUser?.id
    ]);

    const people = (canManageAdminAreas()
      ? state.profiles.filter((profile) => canSeeManagedProfile(profile))
      : state.profiles.filter((p) => activeIds.has(p.id)))
      .sort((a, b) => String(a.full_name || "").localeCompare(String(b.full_name || "")));

    els.teamList.innerHTML = people.map((profile) => `
      <div class="team-item">
        <div class="team-item-head">
          <strong>${escapeHtml(profile.full_name || "Usuario")}</strong>
          <span class="status-chip ${escapeHtml(String(profile.access_status || ACCESS_STATUS.PENDING).toLowerCase())}">${escapeHtml(getAccessStatusLabel(String(profile.access_status || ACCESS_STATUS.PENDING).toLowerCase()))}</span>
        </div>
        <div class="team-item-meta">E-mail: ${escapeHtml(profile.email || "-")}</div>
        <div class="team-item-meta">Nivel: ${escapeHtml(getRoleLabel(String(profile.role || USER_ROLE.USER).toLowerCase(), profile.email || ""))}</div>
        <div class="team-item-meta">Departamento: ${escapeHtml(getDepartmentAccessLabel(profile.department_id, profile.department_id_secondary))}</div>
        ${canManageAdminAreas() ? `
          <div class="team-item-actions">
            <select class="team-role-select" data-profile-id="${profile.id}" ${canManageProfile(profile, { action: "role", nextRole: profile.role }) ? "" : "disabled"}>
              ${getRoleOptionsMarkup(profile.role || USER_ROLE.USER, profile.email || "")}
            </select>
            <select class="team-department-select department-select" data-profile-id="${profile.id}" ${canManageProfile(profile, { action: "department" }) ? "" : "disabled"}>
              ${getDepartmentOptionsMarkup(
                hasUnrestrictedDepartmentAccess(profile) && hasUnrestrictedDepartmentAccess(state.profile)
                  ? DEPARTMENT_ACCESS_ALL_VALUE
                  : (profile.department_id || ""),
                true,
                "Sem departamento",
                hasUnrestrictedDepartmentAccess(state.profile)
              )}
            </select>
            <select class="team-department-secondary-select department-select" data-profile-id="${profile.id}" ${canManageProfile(profile, { action: "department" }) ? "" : "disabled"}>
              ${getDepartmentOptionsMarkup(profile.department_id_secondary || "", true, "Segundo departamento")}
            </select>
            <button
              type="button"
              class="delete-btn"
              data-team-action="delete"
              data-profile-id="${profile.id}"
              ${canManageProfile(profile, { action: "delete" }) ? "" : "disabled"}
            >
              Excluir
            </button>
          </div>
        ` : ""}
      </div>
    `).join("") || '<div class="team-item">Nenhum usuario encontrado.</div>';

    syncBrandedSelects();
  }

  function renderStagesConfig() {
    if (!els.stagesConfigList) return;
    if (!canManageStages()) {
      els.stagesConfigList.innerHTML = '<div class="stage-config-item">Somente administradores podem gerenciar pipelines.</div>';
      return;
    }

    renderStructureSelectors();
    const scopedStages = getStructureFilteredStages();

    if (!scopedStages.length) {
      els.stagesConfigList.innerHTML = '<div class="stage-config-item">Nenhuma pipeline vinculada a este subfunil.</div>';
      return;
    }

    els.stagesConfigList.innerHTML = scopedStages.map((stage, index) => `
      <div class="stage-config-item" draggable="true" data-stage-id="${stage.id}">
        <div class="stage-config-main">
          <div class="stage-config-content">
          <span class="stage-position-label" aria-label="Posição ${index + 1}">${index + 1}</span>
          <strong>${escapeHtml(stage.name)}</strong><br>
          <div class="stage-meta-row">
            <span class="status-pill" style="--status-bg:${stage.color}22;--status-color:${stage.color};--status-border:${stage.color}55">
              ${escapeHtml(stageTypeLabel(stage.stage_type, stage.custom_stage_type))}
            </span>
            <span class="color-chip" title="${escapeHtml(stage.color)}" style="background:${stage.color}"></span>
          </div>
          </div>
        </div>

        <div class="stage-config-actions">
          <button type="button" class="edit-btn" data-stage-action="edit" data-id="${stage.id}">Editar</button>
          <button type="button" class="delete-btn" data-stage-action="delete" data-id="${stage.id}">Excluir</button>
        </div>
      </div>
    `).join("");
  }

  function renderLeadSourcesConfig() {
    if (!els.leadSourcesConfigList) return;

    if (!canManageLeadSources()) {
      els.leadSourcesConfigList.innerHTML = '<div class="saved-stage-types-empty">Somente administradores podem gerenciar origens do lead.</div>';
      return;
    }

    const items = getLeadSourceItems();
    if (!items.length) {
      els.leadSourcesConfigList.innerHTML = '<div class="saved-stage-types-empty">Nenhuma origem cadastrada.</div>';
      return;
    }

    els.leadSourcesConfigList.innerHTML = items.map((item) => `
      <div class="saved-stage-type">
        <button type="button" class="saved-stage-type-select" ${item.is_builtin ? 'disabled title="Origem padrao do sistema"' : `data-source-action="edit" data-source-name="${escapeHtml(item.name)}"`}>${escapeHtml(item.name)}${item.is_builtin ? ' <small>(padrao)</small>' : ""}</button>
        ${item.is_builtin ? "" : `<button type="button" class="saved-stage-type-delete" data-source-action="delete" data-source-name="${escapeHtml(item.name)}">Excluir</button>`}
      </div>
    `).join("");
  }

  function renderSocialSourcesConfig() {
    if (!els.socialSourcesConfigList) return;

    if (!canManageLeadSources()) {
      els.socialSourcesConfigList.innerHTML = '<div class="saved-stage-types-empty">Somente administradores podem gerenciar canais de origem.</div>';
      return;
    }

    const items = getSocialSourceItems();
    if (!items.length) {
      els.socialSourcesConfigList.innerHTML = '<div class="saved-stage-types-empty">Nenhum canal cadastrado.</div>';
      return;
    }

    els.socialSourcesConfigList.innerHTML = items.map((item) => `
      <div class="saved-stage-type">
        <button type="button" class="saved-stage-type-select" data-social-source-action="edit" data-social-source-name="${escapeHtml(item.name)}">${escapeHtml(item.name)}</button>
        <button type="button" class="saved-stage-type-delete" data-social-source-action="delete" data-social-source-name="${escapeHtml(item.name)}">Excluir</button>
      </div>
    `).join("");
  }

  function renderDepartmentsConfig() {
    if (!els.departmentsConfigList) return;

    if (!canManageDepartments()) {
      els.departmentsConfigList.innerHTML = '<div class="saved-stage-types-empty">Somente administradores podem gerenciar departamentos.</div>';
      return;
    }

    if (!state.departments.length) {
      els.departmentsConfigList.innerHTML = '<div class="saved-stage-types-empty">Nenhum departamento cadastrado.</div>';
      return;
    }

    els.departmentsConfigList.innerHTML = state.departments.map((department) => `
      <div class="saved-stage-type">
        <button type="button" class="saved-stage-type-select" disabled>${escapeHtml(department.name)}${department.is_system ? ' <small>(padrão)</small>' : ""}</button>
        <button type="button" class="saved-stage-type-delete" data-department-action="delete" data-department-id="${escapeHtml(department.id)}">Excluir</button>
      </div>
    `).join("");
  }

  function clearStageConfigDragIndicators() {
    els.stagesConfigList?.querySelectorAll(".stage-config-item").forEach((item) => {
      item.classList.remove("is-dragging", "drag-before", "drag-after");
    });
  }

  function getStageConfigDropTarget(target) {
    return target?.closest?.(".stage-config-item[data-stage-id]") || null;
  }

  function handleStageConfigDragStart(event) {
    const item = getStageConfigDropTarget(event.target);
    if (!item || !canManageStages()) {
      event.preventDefault();
      return;
    }

    state.stageConfigDrag = { stageId: item.dataset.stageId };
    clearStageConfigDragIndicators();
    item.classList.add("is-dragging");

    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", item.dataset.stageId || "");
    }
  }

  function handleStageConfigDragOver(event) {
    const draggedStageId = state.stageConfigDrag?.stageId;
    const item = getStageConfigDropTarget(event.target);
    if (!draggedStageId || !item || item.dataset.stageId === draggedStageId) return;

    event.preventDefault();
    clearStageConfigDragIndicators();
    item.classList.add("dragging-target");

    const rect = item.getBoundingClientRect();
    const placeAfter = event.clientY > rect.top + (rect.height / 2);
    item.classList.add(placeAfter ? "drag-after" : "drag-before");

    const draggedItem = els.stagesConfigList?.querySelector(`.stage-config-item[data-stage-id="${draggedStageId}"]`);
    draggedItem?.classList.add("is-dragging");
  }

  async function handleStageConfigDrop(event) {
    const draggedStageId = state.stageConfigDrag?.stageId;
    const item = getStageConfigDropTarget(event.target);
    clearStageConfigDragIndicators();

    if (!draggedStageId || !item || item.dataset.stageId === draggedStageId) {
      state.stageConfigDrag = null;
      return;
    }

    event.preventDefault();

    const scopedStages = getStructureFilteredStages();
    const currentIndex = scopedStages.findIndex((stage) => stage.id === draggedStageId);
    const targetIndex = scopedStages.findIndex((stage) => stage.id === item.dataset.stageId);
    if (currentIndex === -1 || targetIndex === -1) {
      state.stageConfigDrag = null;
      return;
    }

    const rect = item.getBoundingClientRect();
    const placeAfter = event.clientY > rect.top + (rect.height / 2);
    const nextIndex = placeAfter
      ? (currentIndex < targetIndex ? targetIndex : targetIndex + 1)
      : (currentIndex < targetIndex ? targetIndex - 1 : targetIndex);

    state.stageConfigDrag = null;
    await moveStageToIndex(draggedStageId, nextIndex, state.structureSubfunnelId);
  }

  function handleStageConfigDragEnd() {
    state.stageConfigDrag = null;
    clearStageConfigDragIndicators();
  }

  function buildPendingAccessRequests() {
    const pendingAccessRequests = state.accessRequests
      .filter((request) => String(request.status || ACCESS_STATUS.PENDING).toLowerCase() === ACCESS_STATUS.PENDING)
      .map((request) => ({ ...request, _requestSource: "access_request" }));

    const existingKeys = new Set();
    pendingAccessRequests.forEach((request) => {
      const authUserId = String(request.auth_user_id || "").trim().toLowerCase();
      const email = String(request.email || "").trim().toLowerCase();
      if (authUserId) existingKeys.add(`id:${authUserId}`);
      if (email) existingKeys.add(`email:${email}`);
    });

    const pendingProfiles = state.profiles
      .filter((profile) => String(profile.access_status || ACCESS_STATUS.PENDING).toLowerCase() === ACCESS_STATUS.PENDING)
      .filter((profile) => {
        const profileId = String(profile.id || "").trim().toLowerCase();
        const email = String(profile.email || "").trim().toLowerCase();
        return !existingKeys.has(`id:${profileId}`) && !existingKeys.has(`email:${email}`);
      })
      .map((profile) => ({
        id: `profile:${profile.id}`,
        auth_user_id: profile.id,
        full_name: profile.full_name,
        email: profile.email,
        department_id: profile.department_id || null,
        requested_department_id_secondary: null,
        status: ACCESS_STATUS.PENDING,
        created_at: profile.created_at || null,
        _requestSource: "profile"
      }));

    return [...pendingAccessRequests, ...pendingProfiles].sort((left, right) => {
      const leftTime = left.created_at ? new Date(left.created_at).getTime() : 0;
      const rightTime = right.created_at ? new Date(right.created_at).getTime() : 0;
      return rightTime - leftTime;
    });
  }

  function renderRequests() {
    if (!els.accessRequestsList || !els.adminRequestsList) return;

    if (!canManageAdminAreas()) {
      els.accessRequestsList.innerHTML = "";
      els.adminRequestsList.innerHTML = "";
      return;
    }

    const pendingAccessRequests = buildPendingAccessRequests().filter((request) => canManageAccessRequest(request));
    const pendingAdminRequests = state.adminRequests
      .filter((request) => String(request.status || ACCESS_STATUS.PENDING).toLowerCase() === ACCESS_STATUS.PENDING)
      .filter((request) => canManageAdminRequest(request));

    const getRequestedDepartmentLabel = (request) => getDepartmentAccessLabel(
      request.requested_department_id || request.department_id,
      request.requested_department_id_secondary
    );

    const accessCards = pendingAccessRequests.length
      ? pendingAccessRequests.map((request) => `
        <article class="request-card">
          <div class="request-card-head">
            <div>
              <strong>${escapeHtml(request.full_name || request.email || "Solicitacao de acesso")}</strong>
              <div class="request-card-meta">${escapeHtml(request.email || "-")}</div>
            </div>
            <span class="status-chip ${escapeHtml(String(request.status || ACCESS_STATUS.PENDING).toLowerCase())}">${escapeHtml(getAccessStatusLabel(String(request.status || ACCESS_STATUS.PENDING).toLowerCase()))}</span>
          </div>
          <div class="request-card-meta">Solicitado em: ${request.created_at ? new Date(request.created_at).toLocaleString("pt-BR") : "-"}</div>
          <div class="request-card-meta">Departamento solicitado: ${escapeHtml(getRequestedDepartmentLabel(request))}</div>
          <div class="request-card-actions">
            <select data-access-role="${request.id}">
              ${getRoleOptionsMarkup(USER_ROLE.USER, request.email || "")}
            </select>
            <select data-access-department="${request.id}" class="department-select">
              ${getDepartmentOptionsMarkup(
                hasUnrestrictedDepartmentAccess(state.profile) && (!request.requested_department_id && !request.requested_department_id_secondary)
                  ? DEPARTMENT_ACCESS_ALL_VALUE
                  : (request.requested_department_id || request.department_id || ""),
                true,
                "Sem departamento",
                hasUnrestrictedDepartmentAccess(state.profile)
              )}
            </select>
            <select data-access-department-secondary="${request.id}" class="department-select">
              ${getDepartmentOptionsMarkup(request.requested_department_id_secondary || "", true, "Segundo departamento")}
            </select>
            <button type="button" class="btn btn-primary" data-access-action="approve" data-id="${request.id}">Aprovar</button>
            <button type="button" class="btn btn-secondary" data-access-action="reject" data-id="${request.id}">Recusar</button>
          </div>
        </article>
      `).join("")
      : '<div class="request-card request-card-empty">Nenhuma solicitacao de acesso pendente.</div>';

    const adminCards = pendingAdminRequests.length
      ? pendingAdminRequests.map((request) => `
        <article class="request-card">
          <div class="request-card-head">
            <div>
              <strong>${escapeHtml(request.title || request.request_type || "Solicitacao operacional")}</strong>
              <div class="request-card-meta">${escapeHtml(request.requested_by_name || request.requested_by_email || "-")}</div>
            </div>
            <span class="status-chip ${escapeHtml(String(request.status || ACCESS_STATUS.PENDING).toLowerCase())}">${escapeHtml(getAccessStatusLabel(String(request.status || ACCESS_STATUS.PENDING).toLowerCase()))}</span>
          </div>
          <div class="request-card-meta">${escapeHtml(request.description || "")}</div>
          ${request.reason ? `<div class="request-card-reason">${escapeHtml(request.reason)}</div>` : ""}
          <div class="request-card-actions">
            <button type="button" class="btn btn-primary" data-admin-request-action="approve" data-id="${request.id}">Aprovar</button>
            <button type="button" class="btn btn-secondary" data-admin-request-action="reject" data-id="${request.id}">Recusar</button>
          </div>
        </article>
      `).join("")
      : '<div class="request-card request-card-empty">Nenhuma solicitacao operacional registrada.</div>';

    els.accessRequestsList.innerHTML = accessCards;
    els.adminRequestsList.innerHTML = adminCards;
    syncBrandedSelects();
  }

  function renderHistoryText() {
    if (!canViewHistory()) {
      els.historyText.textContent = "Historico disponivel apenas para administradores.";
      return;
    }
    if (!state.history.length) {
      els.historyText.textContent = "Nenhum registro de alteração ainda.";
      return;
    }

    els.historyText.textContent = state.history.map((item) => {
      const when = item.created_at ? new Date(item.created_at).toLocaleString("pt-BR") : "-";
      const who = item.user_name || item.user_email || getProfileNameById(item.user_id) || "Usuário";
      return `[${when}] ${who}\n${item.description || item.action || "Alteração registrada"}\n`;
    }).join("\n");
  }

  function destroyChart(key) {
    if (state.charts[key]) {
      state.charts[key].destroy();
      state.charts[key] = null;
    }
  }

  function makeChartConfig(type, labels, datasets, extraOptions = {}) {
    const textColor = isDarkTheme() ? "#dce8e0" : "#31453b";
    const gridColor = isDarkTheme() ? "rgba(220,232,224,0.14)" : "rgba(19,33,28,0.10)";
    const isHorizontalBar = type === "bar" && extraOptions?.indexAxis === "y";
    return {
      type,
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        interaction: isHorizontalBar
          ? { mode: "nearest", axis: "y", intersect: true }
          : { mode: "index", intersect: false },
        plugins: {
          legend: { labels: { color: textColor } },
          tooltip: isHorizontalBar
            ? { mode: "nearest", axis: "y", intersect: true }
            : { mode: "index", intersect: false }
        },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor } },
          y: { ticks: { color: textColor }, grid: { color: gridColor }, beginAtZero: true }
        },
        ...extraOptions
      }
    };
  }

  function syncReferralSectorChartHeight(entryCount = 0) {
    const referralSectorCanvas = $("referralSectorChart");
    if (!referralSectorCanvas) return;

    const normalizedCount = Math.max(0, Number(entryCount) || 0);
    const nextHeight = Math.max(250, 24 + (normalizedCount * 26));
    referralSectorCanvas.style.height = `${nextHeight}px`;
  }

  function stageColors() {
    return getChartPalette(state.stages.length);
  }

  function queueReportChartsRenderFrame(callback) {
    if (state.reportChartsRenderFrame) {
      cancelAnimationFrame(state.reportChartsRenderFrame);
    }

    state.reportChartsRenderFrame = requestAnimationFrame(() => {
      state.reportChartsRenderFrame = null;
      callback?.();
    });
  }

  function scheduleReportChartsRender() {
    queueReportChartsRenderFrame(() => {
      if (state.activeView !== "relatorios") return;
      renderCharts();
    });
  }

  function isActiveReportViewMounted() {
    const reportView = $("view-relatorios");
    return Boolean(reportView && reportView.classList.contains("active-view"));
  }

  function cancelPendingReportChartBatch() {
    if (state.reportChartsBatchFrame) {
      cancelAnimationFrame(state.reportChartsBatchFrame);
      state.reportChartsBatchFrame = null;
    }
  }

  function renderCharts() {
    if (typeof Chart === "undefined") return;
    const reportChartKeys = ["pipeline", "traffic", "owner", "yearlyDaily", "monthly", "social", "ownerMonthlyAverage", "referralSector", "planCount", "planRevenue"];

    cancelPendingReportChartBatch();

    if (!isActiveReportViewMounted()) return;

    const filtered = getFilteredLeads();
    const metrics = getDashboardMetrics(filtered);
    const filteredAllMonths = getFilteredLeads({ ignoreMonth: true });
    const closedLeads = getClosedLeads(filtered);
    const qualifiedClosed = getQualifiedClosedLeads(filtered);
    const closedLeadsAllMonths = getClosedLeads(filteredAllMonths);

    const trafficMap = filtered.reduce((acc, lead) => {
      const key = lead.traffic_type || "Não informado";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const ownerRevenueMap = qualifiedClosed.reduce((acc, lead) => {
      const key = lead.owner || "Sem responsável";
      acc[key] = (acc[key] || 0) + Number(lead.value || 0);
      return acc;
    }, {});
    const ownerCountMap = closedLeads.reduce((acc, lead) => {
      const key = lead.owner || "Sem responsável";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const shouldUseOwnerRevenue = Object.values(ownerRevenueMap).some((value) => Number(value || 0) > 0);
    const ownerMap = shouldUseOwnerRevenue ? ownerRevenueMap : ownerCountMap;

    const monthMap = filteredAllMonths.reduce((acc, lead) => {
      const key = getLeadMonthKey(lead);
      if (!key) return acc;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const reportYear = getReportYear(filteredAllMonths);
    const yearDateKeys = buildYearDateKeys(reportYear);
    const yearDayMap = filteredAllMonths.reduce((acc, lead) => {
      const key = getLeadDateKey(lead);
      if (!key || !key.startsWith(`${reportYear}-`)) return acc;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const socialMap = filtered.reduce((acc, lead) => {
      const key = lead.social_source || "Não informado";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const averageMonthKeys = [...new Set(filteredAllMonths.map((lead) => getLeadMonthKey(lead)).filter(Boolean))];
    const averageMonthCount = Math.max(averageMonthKeys.length, 1);
    const ownerMonthlyAverageMap = closedLeadsAllMonths.reduce((acc, lead) => {
      const key = lead.owner || "Sem responsável";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const ownerMonthlyAverageEntries = Object.entries(ownerMonthlyAverageMap)
      .map(([key, value]) => [key, Number((value / averageMonthCount).toFixed(2))])
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12);

    const referralSectorMap = filtered.reduce((acc, lead) => {
      const referralName = getLeadReferralName(lead);
      if (!referralName) return acc;
      const referralSector = getLeadReferralSector(lead) || "Sem setor";
      const key = `${referralName} - ${referralSector}`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const referralSectorEntries = Object.entries(referralSectorMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15);
    syncReferralSectorChartHeight(referralSectorEntries.length);

    const planLabels = metrics.planSummary.map((item) => `${item.plan} - ${formatPlanValue(item.unitValue)}`);
    const yearChartTitle = $("yearlyChartTitle");
    if (yearChartTitle) yearChartTitle.textContent = `Contatos diários de ${reportYear} (dia a dia)`;
    const create = (key, id, config) => {
      if (batchToken !== state.reportChartsBatchToken) return;
      const canvas = $(id);
      if (!canvas) return;
      state.charts[key] = new Chart(canvas, config);
    };

    const yearLabels = yearDateKeys.map((key) => formatDayMonthLabel(key));
    const monthStartIndexes = new Set(yearDateKeys.reduce((acc, key, index) => {
      if (key.endsWith("-01")) acc.push(index);
      return acc;
    }, []));
    const pipelinePalette = stageColors();
    const trafficPalette = getChartPalette(Object.keys(trafficMap).length);
    const ownerPalette = getChartPalette(Object.keys(ownerMap).length);
    const yearlyPalette = getSingleSeriesColors(4, { fillAlpha: 0.22, borderAlpha: 1 });
    const chartTextColor = isDarkTheme() ? "#dce8e0" : "#31453b";
    const chartGridColor = isDarkTheme() ? "rgba(220,232,224,0.14)" : "rgba(19,33,28,0.10)";

    const monthLabels = Object.keys(monthMap).sort();
    const monthlyPalette = getSingleSeriesColors(2, { fillAlpha: 0.16, borderAlpha: 1 });
    const socialEntries = Object.entries(socialMap).sort((a, b) => b[1] - a[1]).slice(0, 8);
    const socialPalette = getChartPalette(socialEntries.length);
    const ownerMonthlyAveragePalette = getChartPalette(ownerMonthlyAverageEntries.length);
    const referralSectorPalette = getChartPalette(referralSectorEntries.length);
    const planCountPalette = getChartPalette(planLabels.length);
    const planRevenuePalette = getChartPalette(planLabels.length, { fillAlpha: 0.62, borderAlpha: 1 });
    const nextChartsSignature = JSON.stringify({
      theme: isDarkTheme() ? "dark" : "light",
      year: reportYear,
      byStage: metrics.byStage.map((item) => [item.name, item.count]),
      traffic: Object.entries(trafficMap),
      owner: Object.entries(ownerMap),
      yearDay: yearDateKeys.map((key) => yearDayMap[key] || 0),
      month: monthLabels.map((key) => [key, monthMap[key]]),
      social: socialEntries,
      ownerMonthlyAverage: ownerMonthlyAverageEntries,
      referralSector: referralSectorEntries,
      planCount: metrics.planSummary.map((item) => [item.plan, item.unitValue, item.count]),
      planRevenue: metrics.planSummary.map((item) => [item.plan, item.unitValue, item.totalValue])
    });
    const hasAllRenderedCharts = reportChartKeys.every((key) => Boolean(state.charts[key]));
    if (hasAllRenderedCharts && state.reportChartsSignature === nextChartsSignature) {
      requestAnimationFrame(() => {
        Object.values(state.charts).forEach((chart) => chart?.resize?.());
      });
      return;
    }

    state.reportChartsBatchToken += 1;
    const batchToken = state.reportChartsBatchToken;

    reportChartKeys.forEach(destroyChart);
    const chartJobs = [
      () => create("pipeline", "pipelineChart", makeChartConfig("bar", metrics.byStage.map((item) => item.name), [{ label: "Leads", data: metrics.byStage.map((item) => item.count), backgroundColor: pipelinePalette.fills, borderColor: pipelinePalette.borders, borderWidth: 1.5 }])),
      () => create("traffic", "trafficChart", makeChartConfig("doughnut", Object.keys(trafficMap), [{ label: "Origem", data: Object.values(trafficMap), backgroundColor: trafficPalette.fills, borderColor: trafficPalette.borders, borderWidth: 1.5 }], { scales: {} })),
      () => create("owner", "ownerChart", makeChartConfig("bar", Object.keys(ownerMap), [{ label: shouldUseOwnerRevenue ? "Receita fechada" : "Fechamentos", data: Object.values(ownerMap), backgroundColor: ownerPalette.fills, borderColor: ownerPalette.borders, borderWidth: 1.5 }], { indexAxis: "y" })),
      () => create("yearlyDaily", "yearlyDailyChart", makeChartConfig("line", yearLabels, [{
        label: "Contatos diários",
        data: yearDateKeys.map((key) => yearDayMap[key] || 0),
        tension: 0.2,
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 4,
        borderWidth: 2,
        backgroundColor: yearlyPalette.fill,
        borderColor: yearlyPalette.border,
        pointBackgroundColor: yearlyPalette.border,
        pointBorderColor: yearlyPalette.border
      }], {
        scales: {
          x: {
            ticks: {
              color: chartTextColor,
              maxRotation: 0,
              autoSkip: false,
              callback: (value, index) => (monthStartIndexes.has(index) ? yearLabels[index] : "")
            },
            grid: { color: chartGridColor }
          },
          y: {
            ticks: { color: chartTextColor, precision: 0 },
            grid: { color: chartGridColor },
            beginAtZero: true
          }
        }
      })),
      () => create("monthly", "monthlyChart", makeChartConfig("line", monthLabels, [{ label: "Leads por mês", data: monthLabels.map((key) => monthMap[key]), tension: 0.3, fill: true, backgroundColor: monthlyPalette.fill, borderColor: monthlyPalette.border, pointBackgroundColor: monthlyPalette.border, pointBorderColor: monthlyPalette.border, borderWidth: 2 }])),
      () => create("social", "socialChart", makeChartConfig("bar", socialEntries.map(([key]) => key), [{ label: "Leads", data: socialEntries.map(([, value]) => value), backgroundColor: socialPalette.fills, borderColor: socialPalette.borders, borderWidth: 1.5 }])),
      () => create("ownerMonthlyAverage", "ownerMonthlyAverageChart", makeChartConfig("bar", ownerMonthlyAverageEntries.map(([key]) => key), [{ label: "Média mensal", data: ownerMonthlyAverageEntries.map(([, value]) => value), backgroundColor: ownerMonthlyAveragePalette.fills, borderColor: ownerMonthlyAveragePalette.borders, borderWidth: 1.5 }], { indexAxis: "y" })),
      () => create("referralSector", "referralSectorChart", makeChartConfig("bar", referralSectorEntries.map(([key]) => key), [{ label: "Indicações", data: referralSectorEntries.map(([, value]) => value), backgroundColor: referralSectorPalette.fills, borderColor: referralSectorPalette.borders, borderWidth: 1.5 }], {
      indexAxis: "y",
      layout: {
        padding: {
          left: 8,
          right: 8
        }
      },
      scales: {
        x: {
          ticks: { color: chartTextColor, precision: 0 },
          grid: { color: chartGridColor },
          beginAtZero: true
        },
        y: {
          ticks: {
            color: chartTextColor,
            autoSkip: false,
            font: { size: 11 }
          },
          grid: { color: chartGridColor },
          afterFit(scale) {
            scale.width = Math.max(scale.width, 188);
          }
        }
      }
      })),
      () => create("planCount", "planCountChart", makeChartConfig("bar", planLabels, [{ label: "Fechamentos", data: metrics.planSummary.map((item) => item.count), backgroundColor: planCountPalette.fills, borderColor: planCountPalette.borders, borderWidth: 1.5 }])),
      () => create("planRevenue", "planRevenueChart", makeChartConfig("bar", planLabels, [{ label: "Receita", data: metrics.planSummary.map((item) => item.totalValue), backgroundColor: planRevenuePalette.fills, borderColor: planRevenuePalette.borders, borderWidth: 1.5 }]))
    ];

    const renderChartBatch = (startIndex = 0) => {
      if (batchToken !== state.reportChartsBatchToken) return;
      const batchSize = 2;
      chartJobs.slice(startIndex, startIndex + batchSize).forEach((job) => job());
      const nextIndex = startIndex + batchSize;
      if (nextIndex < chartJobs.length) {
        state.reportChartsBatchFrame = requestAnimationFrame(() => renderChartBatch(nextIndex));
        return;
      }
      state.reportChartsBatchFrame = null;
      state.reportChartsSignature = nextChartsSignature;
      window.setTimeout(() => {
        if (batchToken !== state.reportChartsBatchToken) return;
        Object.values(state.charts).forEach((chart) => chart?.resize?.());
      }, 40);
    };

    renderChartBatch(0);
  }


  function normalizeCsvHeader(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
  }

  function parseCsvLine(line, delimiter) {
    const values = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i += 1) {
      const char = line[i];
      const next = line[i + 1];

      if (char === '"') {
        if (inQuotes && next === '"') {
          current += '"';
          i += 1;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === delimiter && !inQuotes) {
        values.push(current);
        current = "";
      } else {
        current += char;
      }
    }

    values.push(current);
    return values.map((value) => value.trim());
  }

  function parseCsv(content) {
    const text = String(content || "").replace(/^\uFEFF/, "").trim();
    if (!text) return { headers: [], rows: [] };

    const lines = text.split(/\r?\n/).filter((line) => line.trim());
    const sample = lines.slice(0, 5).join("\n");
    const delimiterScores = [
      { value: ";", score: (sample.match(/;/g) || []).length },
      { value: ",", score: (sample.match(/,/g) || []).length },
      { value: "\t", score: (sample.match(/\t/g) || []).length }
    ].sort((a, b) => b.score - a.score);
    const delimiter = delimiterScores[0]?.score ? delimiterScores[0].value : ";";

    const rawHeaders = parseCsvLine(lines[0], delimiter);
    const headers = rawHeaders.map(normalizeCsvHeader);
    const rows = lines.slice(1).map((line) => {
      const values = parseCsvLine(line, delimiter);
      const row = {};
      headers.forEach((header, index) => {
        row[header] = values[index] || "";
      });
      return row;
    });

    return { headers, rows };
  }

  async function readFileAsText(file) {
    const buffer = await file.arrayBuffer();
    const decoders = [
      new TextDecoder("utf-8", { fatal: false }),
      new TextDecoder("windows-1252", { fatal: false }),
      new TextDecoder("iso-8859-1", { fatal: false })
    ];

    for (const decoder of decoders) {
      const text = decoder.decode(buffer);
      if (/[A-Za-z0-9]/.test(text)) return text;
    }

    return new TextDecoder("utf-8", { fatal: false }).decode(buffer);
  }

  async function parseImportedRows(file) {
    const filename = String(file?.name || "").toLowerCase();

    if (filename.endsWith(".xlsx") || filename.endsWith(".xls")) {
      const buffer = await file.arrayBuffer();
      const workbook = window.XLSX?.read(buffer, { type: "array" });
      const firstSheetName = workbook?.SheetNames?.[0];
      const firstSheet = firstSheetName ? workbook.Sheets[firstSheetName] : null;
      const rows = firstSheet ? window.XLSX.utils.sheet_to_json(firstSheet, { defval: "" }) : [];
      const normalizedRows = rows.map((row) => {
        const next = {};
        Object.entries(row || {}).forEach(([key, value]) => {
          next[normalizeCsvHeader(key)] = value;
        });
        return next;
      });
      return { headers: Object.keys(normalizedRows[0] || {}), rows: normalizedRows };
    }

    const content = await readFileAsText(file);
    return parseCsv(content);
  }

  function csvEscape(value) {
    const text = String(value ?? "");
    if (/[",\n;]/.test(text)) {
      return `"${text.replaceAll('"', '""')}"`;
    }
    return text;
  }

  function stageIdByName(name) {
    const normalized = String(name || "").trim().toLowerCase();
    return state.stages.find((stage) => String(stage.name || "").trim().toLowerCase() === normalized)?.id || null;
  }

  function inferStageId(row) {
    return (
      row.stage_id ||
      stageIdByName(row.pipeline) ||
      stageIdByName(row.status) ||
      stageIdByName(row.etapa) ||
      stageIdByName(row.stage) ||
      state.stages[0]?.id ||
      null
    );
  }

  function parseMoney(value) {
    return parseMonetaryValue(value);
  }

  function downloadTextFile(filename, content, mimeType = "text/plain;charset=utf-8") {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function exportLeadsToCsv() {
    if (!canExportLeads()) {
      alert("Perfil Gest\u00e3o possui acesso somente leitura.");
      return;
    }

    const rows = getFilteredLeads();
    const headers = [
      "nome",
      "contato",
      "responsavel",
      "valor",
      "data_inicio",
      "rede_social",
      "origem",
      "indicado_por",
      "setor_indicado",
      "plano",
      "numero_contrato",
      "pipeline",
      "observacoes"
    ];

    const csvRows = [
      headers.join(";"),
      ...rows.map((lead) => [
        csvEscape(lead.name || ""),
        csvEscape(lead.contact || ""),
        csvEscape(lead.owner || ""),
        csvEscape(hasLeadValue(lead) ? Number(lead.value || 0).toFixed(2).replace(".", ",") : ""),
        csvEscape(lead.start_date || ""),
        csvEscape(lead.social_source || ""),
        csvEscape(lead.traffic_type || ""),
        csvEscape(getLeadReferralName(lead) || ""),
        csvEscape(getLeadReferralSector(lead) || ""),
        csvEscape(getLeadPlan(lead) || ""),
        csvEscape(getLeadContractNumbers(lead) || ""),
        csvEscape(getStageName(lead.stage_id)),
        csvEscape(lead._meta?.legacyText || "")
      ].join(";"))
    ];

    downloadTextFile("leads.csv", `\uFEFF${csvRows.join("\n")}`, "text/csv;charset=utf-8");
  }

  async function importLeadsFromCsv(file) {
    if (!canImportLeads()) {
      alert("Seu perfil não tem permissão de edição neste funil.");
      return;
    }

    if (!file) return;

    const { rows } = await parseImportedRows(file);

    if (!rows.length) {
      alert("O CSV está vazio ou inválido.");
      return;
    }

    const payload = rows
      .map((row, index) => {
        const name = row.nome || row.name || "";
        const contact = row.contato || row.contact || "";
        const owner = canAssignLeadOwner()
          ? (row.responsavel || row.vendedor || row.owner || getCurrentLeadOwnerName())
          : getCurrentLeadOwnerName();
        const startDate = row.data_inicio || row.start_date || row.data || "";
        const normalizedStartDate = normalizeDateInput(startDate) || null;
        const trafficType = row.origem || row.traffic_type || getLeadSourceNames()[0] || "Organico";
        const referralName = String(row.indicado_por || row.quem_indicou || row.referral_name || "").trim();
        const referralSector = String(row.setor_indicado || row.setor_do_indicado || row.referral_sector || "").trim();
        const legacyText = String(row.observacoes || row.notes || "").trim();
        const importedValue = parseMoney(row.quantidade || row.valor || row.value || 0);
        const importedContractNumber = String(row.ct || row.contrato || row.numero_contrato || row.contract_number || "").trim();
        const importedClosedAt = normalizeDateInput(row.data_fechamento || row.fechado_em || row.data || "") || "";
        const plan = String(row.plano || row.plan || "").trim();
        const planName = plan || (importedValue > 0 ? getDefaultPlanName(0) : "");
        const socialSource = getCanonicalMappedValue(row.rede_social || row.social_source || "", state.socialSourceCanonicalMap, "social_source");
        const plans = planName
          ? [{
              name: planName,
              value: importedValue,
              contract_number: importedContractNumber,
              closed_at: importedClosedAt
            }]
          : [];

        return {
          stage_id: inferStageId(row),
          assigned_to: state.currentUser?.id || null,
          created_by: state.currentUser?.id || null,
          name: String(name).trim(),
          contact: String(contact).trim(),
          owner: resolveLeadOwnerForPersistence({ requestedOwner: owner }),
          value: importedValue,
          start_date: normalizedStartDate,
          social_source: socialSource,
          traffic_type: String(trafficType).trim(),
          _importRowNumber: index + 2,
          notes: serializeLeadMeta({
            plan: planName,
            plans,
            legacyText,
            observations: legacyText ? [{ date: "", text: legacyText }] : [],
            contract_number: importedContractNumber,
            referral_name: isReferralLeadSource(trafficType) ? referralName : "",
            referral_sector: isReferralLeadSource(trafficType) ? referralSector : ""
          })
        };
      })
      .filter((lead) => lead.name && lead.contact && lead.stage_id && lead.traffic_type && lead.social_source);

    if (!payload.length) {
      alert("Nenhuma linha válida encontrada. Use colunas como nome, contato, data_inicio, origem, canal de origem e pipeline.");
      return;
    }

    const rowsWithoutSocialSource = rows
      .map((row, index) => ({
        rowNumber: index + 2,
        socialSource: getCanonicalMappedValue(row.rede_social || row.social_source || "", state.socialSourceCanonicalMap, "social_source")
      }))
      .filter((item) => !item.socialSource);

    if (rowsWithoutSocialSource.length) {
      const preview = rowsWithoutSocialSource.slice(0, 8).map((item) => item.rowNumber).join(", ");
      alert(`Preencha o canal de origem no CSV. Linhas sem canal: ${preview}${rowsWithoutSocialSource.length > 8 ? "..." : ""}.`);
      return;
    }

    const importedRows = [];

    for (const batch of chunkArray(payload, 500)) {
      const { data, error } = await state.supabase
        .from("leads")
        .insert(batch)
        .select("id,name");

      if (error) {
        alert(error.message);
        return;
      }

      importedRows.push(...(Array.isArray(data) ? data : []));
    }

    await logChange(
      "import_csv",
      "lead",
      null,
      `${payload.length} lead(s) foram importados via CSV por ${getUserDisplayName()}.`,
      { imported_count: payload.length, imported_ids: importedRows.map((item) => item.id) }
    );

    if (isFunnelDetailActive()) {
      const importedLeadIds = importedRows.map((item) => item?.id).filter(Boolean);
      if (importedLeadIds.length) {
        try {
          await persistLeadAssignmentsSafely(importedLeadIds, state.activeSubfunnelId, {
            notifyScope: "funnel-workspace"
          });
        } catch (assignmentError) {
          alert(`Os leads foram importados, mas não foi possível vincular ao subfunil atual: ${formatSupabaseError(assignmentError)}`);
        }
      }
    }

    alert(`${payload.length} lead(s) importado(s) com sucesso.`);
    els.csvFileInput.value = "";
    await loadAppData({ includeProfiles: state.profilesLoaded });
  }

  function closeFunnelContextMenu() {
    clearTouchContextTap();
    state.funnelContextMenuState = null;
    els.funnelContextMenu?.classList.add("hidden");
    els.funnelContextMenu?.setAttribute("aria-hidden", "true");
    if (els.funnelContextMenu) {
      els.funnelContextMenu.innerHTML = "";
      els.funnelContextMenu.style.left = "";
      els.funnelContextMenu.style.top = "";
    }
  }

  function isFunnelContextMenuOpen() {
    return Boolean(els.funnelContextMenu && !els.funnelContextMenu.classList.contains("hidden"));
  }

  function openFunnelContextMenu({ x = 0, y = 0, actions = [], scope = "generic" } = {}) {
    if (!els.funnelContextMenu) return;
    if (!actions.length) {
      closeFunnelContextMenu();
      return;
    }

    els.funnelContextMenu.innerHTML = actions.map((action) => `
      <button
        type="button"
        class="funnel-context-menu-item${action.danger ? " danger" : ""}"
        data-funnel-context-action="${escapeHtml(action.id)}"
      >
        ${escapeHtml(action.label)}
      </button>
    `).join("");

    state.funnelContextMenuState = { actions, scope };
    els.funnelContextMenu.classList.remove("hidden");
    els.funnelContextMenu.setAttribute("aria-hidden", "false");

    const rect = els.funnelContextMenu.getBoundingClientRect();
    const maxLeft = Math.max(12, window.innerWidth - rect.width - 12);
    const maxTop = Math.max(12, window.innerHeight - rect.height - 12);
    els.funnelContextMenu.style.left = `${Math.min(x, maxLeft)}px`;
    els.funnelContextMenu.style.top = `${Math.min(y, maxTop)}px`;
  }

  function populateFunnelGroupCategoryOptions(selectedCategory = "B2C") {
    if (!els.funnelGroupCategory) return;
    els.funnelGroupCategory.innerHTML = FUNNEL_CATEGORIES.map((category) => `
      <option value="${category}" ${selectedCategory === category ? "selected" : ""}>${category}</option>
    `).join("");
  }

  function openFunnelGroupModal({ mode = "create", category = "B2C", group = null } = {}) {
    if (!canManageAdminAreas()) return;

    closeAllModals();
    closeFunnelContextMenu();
    state.funnelGroupModalContext = {
      mode,
      groupId: group?.id || null
    };

    if (els.funnelGroupForm) els.funnelGroupForm.reset();
    if (els.funnelGroupId) els.funnelGroupId.value = group?.id || "";
    if (els.funnelGroupName) els.funnelGroupName.value = group?.name || "";
    if (els.funnelGroupModalTitle) els.funnelGroupModalTitle.textContent = mode === "edit" ? "Editar grupo" : "Criar grupo";

    const selectedOwnerDepartmentId = group?.owner_department_id || getCurrentUserDefaultDepartmentId() || "";
    const selectedDepartmentPermissions = group
      ? (group?.department_permissions || [])
      : getDefaultDepartmentPermissions(selectedOwnerDepartmentId);

    populateFunnelGroupCategoryOptions(group?.category || category);
    renderGroupOwnerDepartmentOptions(selectedOwnerDepartmentId);
    renderGroupDepartmentChecklist(selectedDepartmentPermissions, {
      omitDepartmentIds: selectedOwnerDepartmentId ? [selectedOwnerDepartmentId] : []
    });
    syncBrandedSelects();
    els.funnelGroupModalOverlay?.classList.remove("hidden");
    document.body.classList.add("modal-open");
  }

  function closeFunnelGroupModal() {
    state.funnelGroupModalContext = null;
    els.funnelGroupModalOverlay?.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }

  function collectFunnelGroupFormSubmissionContext() {
    const name = normalizeSpacing(els.funnelGroupName?.value || "");
    const category = FUNNEL_CATEGORIES.includes(String(els.funnelGroupCategory?.value || "").trim())
      ? String(els.funnelGroupCategory.value).trim()
      : "B2C";
    const ownerDepartmentId = String(els.funnelGroupOwnerDepartment?.value || "").trim() || null;
    const departmentPermissions = normalizeFunnelDepartmentPermissions([
      ...(ownerDepartmentId ? [{ department_id: ownerDepartmentId, access_level: FUNNEL_ACCESS_LEVEL.EDIT }] : []),
      ...getSelectedGroupDepartmentPermissions()
    ]);

    const existingGroup = getGroupById(els.funnelGroupId?.value || "");
    const categoryChanged = Boolean(existingGroup) && String(existingGroup.category || "") !== String(category || "");
    return {
      name,
      category,
      ownerDepartmentId,
      departmentPermissions,
      existingGroup,
      categoryChanged,
      nextGroup: {
      id: existingGroup?.id || createFunnelGroupId(),
      name,
      category,
      owner_department_id: ownerDepartmentId,
      department_permissions: departmentPermissions,
      department_ids: departmentPermissions.map((item) => item.department_id),
      collapsed: Boolean(existingGroup?.collapsed),
      created_by: existingGroup?.created_by || state.currentUser?.id || null,
      created_at: existingGroup?.created_at || new Date().toISOString()
      }
    };
  }

  function validateFunnelGroupFormSubmissionContext(context = {}) {
    if (!context.name) {
      alert("Informe o nome do grupo.");
      return false;
    }
    return true;
  }

  function applyFunnelGroupSubmissionLocally(context = {}) {
    if (context.existingGroup) {
      upsertFunnelGroupLocally(context.nextGroup);
      updateFunnelsInGroupLocally(context.existingGroup.id, (funnel) => ({
        ...funnel,
        category: context.category
      }));
      return;
    }
    upsertFunnelGroupLocally(context.nextGroup);
  }

  async function persistFunnelGroupSubmission(context = {}) {
    const affectedFunnels = context.categoryChanged
      ? (state.funnelWorkspace?.funnels || []).filter((funnel) => (
          String(funnel?.group_id || "").trim() === String(context.nextGroup.id || "").trim()
        ))
      : [];
    if (affectedFunnels.length) {
      await persistFunnelsSubsetToSupabase(affectedFunnels, {
        includeSubfunnels: false,
        includePermissions: false
      });
    }
    await persistSharedFunnelGroupsMetaToSupabase(state.funnelWorkspace);
  }

  function finalizeFunnelGroupMutation() {
    closeFunnelGroupModal();
    finalizeLocalMutation({
      notifyScope: "funnel-workspace",
      refreshReason: "group-save",
      cooldownMs: 1800
    });
  }

  async function submitFunnelGroupForm(event) {
    event.preventDefault();
    if (!canManageAdminAreas() || !state.funnelWorkspace) return;

    const context = collectFunnelGroupFormSubmissionContext();
    if (!validateFunnelGroupFormSubmissionContext(context)) return;

    try {
      await executeFunnelWorkspaceMetaMutation({
        applyLocal: () => applyFunnelGroupSubmissionLocally(context),
        persist: async () => persistFunnelGroupSubmission(context)
      });
    } catch (error) {
      alert(`Erro ao salvar grupo: ${formatSupabaseError(error)}`);
      return;
    }

    finalizeFunnelGroupMutation();
  }

  function toggleFunnelGroup(groupId) {
    if (!state.funnelWorkspace || !groupId) return;
    updateFunnelGroupLocally(groupId, (group) => ({
      ...group,
      collapsed: !group.collapsed
    }));
    writeStoredFunnelWorkspace();
    renderFunnelNav();
  }

  function assignFunnelToGroup(funnelId, groupId = null) {
    if (!state.funnelWorkspace || !funnelId) return;
    const funnel = getFunnelById(funnelId);
    if (!funnel || !canManageStages(funnel)) return;

    const targetGroup = groupId ? getGroupById(groupId) : null;
    updateFunnelLocally(funnelId, (item) => ({
      ...item,
      category: targetGroup?.category || item.category,
      group_id: targetGroup?.id || null
    }));
    writeStoredFunnelWorkspace();
    renderAll();
    if (state.activeView === "funil" && String(state.activeFunnelId || "") === String(funnelId)) {
      bindFunnelViewPreservingSidebar();
    }
  }

  async function deleteFunnelGroup(groupId) {
    const group = getGroupById(groupId);
    if (!group || !canEditGroupItem(group)) return;
    if (!confirm(`Excluir o grupo "${group.name}"? Os funis continuarão existindo fora do grupo.`)) return;

    await executeFunnelWorkspaceMetaMutation({
      applyLocal: () => {
        removeFunnelGroupLocally(groupId);
        clearFunnelsGroupLocally(groupId);
        rememberDeletedFunnelWorkspaceIds({ groups: [groupId] });
      },
      persist: async () => {
        if (state.funnelDataLoadedFromSupabase) {
          await persistFunnelWorkspaceToSupabase();
        }
      },
      afterPersist: async () => {
        closeFunnelContextMenu();
        renderAll();
        if (state.activeView === "funil") {
          bindFunnelViewPreservingSidebar();
        }
      }
    }).catch((error) => {
      alert(`Erro ao excluir grupo: ${formatSupabaseError(error)}`);
    });
  }

  function getGroupAccessSummary(group) {
    const ownerDepartment = state.departments.find((item) => item.id === group?.owner_department_id);
    if (ownerDepartment) return ownerDepartment.name;
    const permissionCount = getGroupDepartmentPermissions(group).length;
    if (permissionCount) return `${permissionCount} departamentos`;
    return "Visível conforme acesso";
  }

  function renderFunnelNav() {
    if (!els.crmFunnelNav || !els.crmFunnelSidebar) return;
    const visible = state.funnelSidebarOpen;
    syncFunnelSidebarVisibility();

    if (!visible) {
      if (state.funnelContextMenuState?.scope === "nav") {
        closeFunnelContextMenu();
      }
      return;
    }

    const renderFunnelButton = (funnel) => `
      <div
        class="crm-funnel-item ${state.activeFunnelId === funnel.id ? "active" : ""}"
        data-funnel-open="${funnel.id}"
        draggable="${canManageStages(funnel) ? "true" : "false"}"
        data-funnel-nav-item="${funnel.id}"
        role="button"
        tabindex="0"
      >
        <span class="crm-funnel-item-label">${escapeHtml(funnel.name)}</span>
      </div>
    `;

    const renderGroup = (group) => {
      const visibleFunnels = getFunnelsForGroup(group.id).filter((funnel) => canViewFunnelItem(funnel));
      const collapsed = Boolean(group.collapsed);
      return `
        <section class="crm-funnel-group ${collapsed ? "is-collapsed" : ""}" data-funnel-group="${group.id}" data-funnel-group-drop="${group.id}">
          <div class="crm-funnel-group-head" data-funnel-group-head="${group.id}" data-funnel-group-drop="${group.id}">
            <button type="button" class="crm-funnel-group-toggle" data-funnel-group-toggle="${group.id}" aria-label="${collapsed ? "Expandir" : "Recolher"} grupo">
              <span class="crm-funnel-group-toggle-icon" aria-hidden="true">${collapsed ? ICONS.chevronRight : ICONS.chevronDown}</span>
            </button>
            <div class="crm-funnel-group-copy">
              <strong>${escapeHtml(group.name)}</strong>
              <span>${escapeHtml(getGroupAccessSummary(group))}</span>
            </div>
          </div>
          <div class="crm-funnel-group-body" data-funnel-group-drop="${group.id}">
            ${visibleFunnels.length
              ? visibleFunnels.map(renderFunnelButton).join("")
              : '<div class="crm-funnel-empty crm-funnel-empty-group">Grupo sem funis visíveis.</div>'}
          </div>
        </section>
      `;
    };

    const renderSectionList = (category, container) => {
      if (!container) return;
      const groups = getFunnelGroupsByCategory(category);
      const ungroupedFunnels = getUngroupedFunnelsByCategory(category);
      const parts = [];

      if (groups.length) {
        parts.push(groups.map(renderGroup).join(""));
      }

      parts.push(`
        <div class="crm-funnel-ungrouped" data-funnel-group-drop="">
          <div class="crm-funnel-ungrouped-label">Sem grupo</div>
          ${ungroupedFunnels.length ? ungroupedFunnels.map(renderFunnelButton).join("") : ""}
        </div>
      `);

      container.innerHTML = parts.length
        ? parts.join("")
        : '<div class="crm-funnel-empty">Nenhum funil ainda.</div>';
    };

    renderSectionList("B2B", els.funnelCategoryB2BList);
    renderSectionList("B2C", els.funnelCategoryB2CList);
  }

  function renderFunnelHub() {
    if (!els.funnelHubPanel || !els.funnelDetailPanel || !els.funnelCardsGrid) return;

    const detailActive = isFunnelDetailActive();
    const activeFunnel = getFunnelById(state.activeFunnelId);
    const activeSubfunnel = getSubfunnelById(state.activeSubfunnelId);
    els.funnelHubPanel.classList.toggle("hidden", detailActive || !activeFunnel);
    els.funnelDetailPanel.classList.toggle("hidden", !detailActive);
    els.funnelBackBtn?.classList.toggle("hidden", !detailActive);
    els.pipelineScrollTop?.classList.toggle("hidden", !detailActive);
    els.editCurrentFunnelBtn?.classList.toggle("hidden", state.activeView !== "funil" || !activeFunnel || detailActive);
    els.deleteCurrentFunnelBtn?.classList.toggle("hidden", state.activeView !== "funil" || !activeFunnel || detailActive);
    if (detailActive && activeFunnel && activeSubfunnel) {
      renderFunnelDiagram(null);
      return;
    }

    if (!activeFunnel) {
      els.funnelCardsGrid.innerHTML = "";
      renderFunnelDiagram(null);
      return;
    }

    const subfunnels = activeFunnel.subfunnels || [];
    const cards = subfunnels.map((subfunnel, index) => {
      const stageCount = getPipelineCountForSubfunnel(subfunnel.id);
      const leadCount = getLeadCountForSubfunnel(subfunnel.id);
      return `
        <article
          class="funnel-card"
          data-subfunnel-card="true"
          data-subfunnel-open="${subfunnel.id}"
          data-parent-funnel-id="${activeFunnel.id}"
          draggable="${canManageStages(activeFunnel) ? "true" : "false"}"
        >
          <div class="funnel-card-head">
            <div class="funnel-card-order-wrap">
              <span class="funnel-card-order">${index + 1}</span>
              <span class="funnel-card-category">${escapeHtml(activeFunnel.category)}</span>
            </div>
            <div class="funnel-card-head-actions">
              ${canManageStages(activeFunnel) ? `<button type="button" class="funnel-card-edit" data-subfunnel-edit="${subfunnel.id}" data-parent-funnel-id="${activeFunnel.id}" aria-label="Editar subfunil ${escapeHtml(subfunnel.name)}">✎</button>` : ""}
            </div>
          </div>
          <div class="funnel-card-body">
            <h4>${escapeHtml(subfunnel.name)}</h4>
          </div>
          <div class="funnel-card-footer">
            <div class="funnel-card-meta">
              <span>${stageCount} pipelines</span>
              <span>${leadCount} leads</span>
            </div>
            <div class="funnel-card-actions">
              <button type="button" class="funnel-card-delete" data-subfunnel-delete="${subfunnel.id}" data-parent-funnel-id="${activeFunnel.id}" aria-label="Excluir subfunil ${escapeHtml(subfunnel.name)}">
                <span class="funnel-card-delete-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M9 3.75h6m-8.25 3h10.5m-9.75 0 .6 11.1a1.5 1.5 0 0 0 1.5 1.4h4.8a1.5 1.5 0 0 0 1.5-1.4l.6-11.1m-6 2.55v6.75m3-6.75v6.75" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </article>
      `;
    });

    if (canManageStages(activeFunnel)) {
      cards.push(`
        <button type="button" class="funnel-card funnel-card-create" data-subfunnel-create="${activeFunnel.id}" aria-label="Adicionar subfunil">
          <span class="funnel-card-plus">+</span>
          <span class="funnel-card-create-label">Novo subfunil</span>
        </button>
      `);
    }

    if (!cards.length) {
      els.funnelCardsGrid.innerHTML = `
        <div class="panel empty-funnel-panel">
          <h4>Nenhum subfunil ainda</h4>
          <p>Crie o primeiro subfunil para organizar pipelines e leads separados dentro deste funil.</p>
        </div>
      `;
      renderFunnelDiagram(null);
      return;
    }

    els.funnelCardsGrid.innerHTML = cards.join("");
    renderFunnelDiagram(activeFunnel);
  }

  function setNotificationsPanelOpen(open) {
    state.notificationPanelOpen = Boolean(open);
    els.notificationsPanel?.classList.toggle("hidden", !state.notificationPanelOpen);
    if (els.notificationsBtn) {
      els.notificationsBtn.setAttribute("aria-expanded", state.notificationPanelOpen ? "true" : "false");
    }
  }

  function openLeadFromNotification(leadId) {
    const lead = state.leads.find((item) => item.id === leadId);
    if (!lead) return;
    const subfunnelId = getLeadSubfunnelId(lead);
    const funnelId = getLeadFunnelId(lead);
    if (!subfunnelId || !funnelId) return;

    state.highlightedLeadId = lead.id;
    state.activeFunnelId = funnelId;
    state.activeSubfunnelId = subfunnelId;
    state.funnelSidebarOpen = shouldAutoCloseFunnelSidebarOnSelection() ? false : state.funnelSidebarOpen;
    setNotificationsPanelOpen(false);
    setShellTab("crm");
    bindView("funil", {
      resetFunnelDetail: false,
      keepFunnelSidebarOpen: state.funnelSidebarOpen,
      preserveFunnelSidebarState: false
    });
    renderAll();
    requestAnimationFrame(() => {
      scrollFunnelDetailToTop();
    });
  }

  function renderNotifications() {
    ensureDemoPipelineReminderSeed();
    const notifications = getActiveLeadNotifications();
    if (els.notificationsCount) {
      els.notificationsCount.textContent = String(notifications.length);
      els.notificationsCount.classList.toggle("hidden", notifications.length === 0);
    }
    els.notificationsBtn?.classList.toggle("has-alert", notifications.length > 0);
    if (els.profileNotificationsCount) {
      els.profileNotificationsCount.textContent = String(notifications.length);
      els.profileNotificationsCount.classList.toggle("hidden", notifications.length === 0);
    }
    if (els.notificationsPanelMeta) {
      els.notificationsPanelMeta.textContent = notifications.length
        ? `${notifications.length} pendência(s)`
        : "Nenhuma pendência";
    }
    if (!els.notificationsList) return;
    if (!notifications.length) {
      els.notificationsList.innerHTML = '<div class="notifications-empty">Nenhuma notificação pendente.</div>';
      return;
    }

    els.notificationsList.innerHTML = notifications.map((item) => `
      <div class="notifications-item-shell">
        <button type="button" class="notifications-item" data-notification-lead-id="${escapeHtml(item.leadId)}">
          <div class="notifications-item-head">
            <span class="notifications-item-title">${escapeHtml(item.lead?.name || "Lead")}</span>
            <span class="notifications-item-badge">${escapeHtml(item.dueLabel)}</span>
          </div>
          <div class="notifications-item-copy">${escapeHtml(item.message)}</div>
          <div class="notifications-item-meta">
            ${escapeHtml(item.funnel?.name || "-")} / ${escapeHtml(item.subfunnel?.name || "-")} / ${escapeHtml(item.stage?.name || "-")}
          </div>
        </button>
        <button type="button" class="notifications-item-dismiss" data-dismiss-notification="${escapeHtml(item.dismissKey)}" aria-label="Dispensar notificação">×</button>
      </div>
    `).join("");
  }

  function renderFunnelSubfields(names = []) {
    if (!els.funnelSubfields || !els.funnelSubCount) return;
    const total = Math.max(1, Math.min(12, Number(els.funnelSubCount.value || names.length || 1)));
    els.funnelSubCount.value = total;
    els.funnelSubfields.innerHTML = Array.from({ length: total }, (_, index) => `
      <div class="form-group">
        <label for="funnelSubfield${index + 1}">Subfunil ${index + 1}</label>
        <input type="text" id="funnelSubfield${index + 1}" data-funnel-subfield="true" value="${escapeHtml(names[index] || "")}" placeholder="Nome do subfunil ${index + 1}" required />
      </div>
    `).join("");
  }

  function getFunnelModalModeConfig({ mode = "create", funnel = null, subfunnel = null } = {}) {
    let subfunnelNames = funnel?.subfunnels?.map((item) => item.name) || ["Entrada", "Fechamento"];
    let modalTitle = mode === "edit" ? "Editar funil" : "Criar funil";
    let saveLabel = mode === "edit" ? "Salvar alterações" : "Criar funil";
    let subLabel = "Nome de cada subfunil";
    let focusSelector = "#funnelName";
    let useCompactSubfunnelMode = false;

    if (mode === "edit-subfunnel") {
      modalTitle = "Editar subfunil";
      saveLabel = "Salvar subfunil";
      subLabel = "Nome do subfunil";
      subfunnelNames = [subfunnel?.name || ""];
      focusSelector = "#funnelSubfield1";
      useCompactSubfunnelMode = true;
    } else if (mode === "create-subfunnel") {
      modalTitle = "Adicionar subfunil";
      saveLabel = "Adicionar subfunil";
      subLabel = "Nome do subfunil";
      subfunnelNames = [""];
      focusSelector = "#funnelSubfield1";
      useCompactSubfunnelMode = true;
    }

    return {
      subfunnelNames,
      modalTitle,
      saveLabel,
      subLabel,
      focusSelector,
      useCompactSubfunnelMode
    };
  }

  function applyFunnelModalModeUiState({
    modeConfig,
    nameGroup,
    categoryGroup,
    countGroup
  } = {}) {
    if (!modeConfig) return;

    if (modeConfig.useCompactSubfunnelMode) {
      if (nameGroup) nameGroup.classList.add("hidden");
      if (categoryGroup) categoryGroup.classList.add("hidden");
      if (countGroup) countGroup.classList.add("hidden");
      if (els.funnelName) {
        els.funnelName.disabled = true;
        els.funnelName.required = false;
      }
      if (els.funnelCategory) els.funnelCategory.disabled = true;
      if (els.funnelVisibilityScope) els.funnelVisibilityScope.disabled = true;
      if (els.funnelGlobalAccessLevel) els.funnelGlobalAccessLevel.disabled = true;
      if (els.funnelOfficialDepartmentSelect) els.funnelOfficialDepartmentSelect.disabled = true;
      els.funnelGlobalAccessGroup?.classList.add("hidden");
      els.funnelOfficialDepartmentGroup?.classList.add("hidden");
      els.funnelDepartmentsGroup?.classList.add("hidden");
      if (els.funnelSubCount) els.funnelSubCount.disabled = true;
      return;
    }

    els.funnelGlobalAccessGroup?.classList.remove("hidden");
    els.funnelOfficialDepartmentGroup?.classList.remove("hidden");
    els.funnelDepartmentsGroup?.classList.remove("hidden");
  }

  function openFunnelModal(options = {}) {
    const mode = options.mode || "create";
    const funnel = options.funnel || null;
    const subfunnel = options.subfunnel || null;
    const presetCategory = options.category || funnel?.category || "B2C";
    const nameGroup = els.funnelName?.closest(".form-group");
    const categoryGroup = els.funnelCategory?.closest(".form-group");
    const countGroup = els.funnelSubCount?.closest(".form-group");
    const subfieldsGroup = els.funnelSubfields?.closest(".form-group");
    const subfieldsLabel = subfieldsGroup?.querySelector("label");

    if (!canManageStages()) {
      alert(`Somente administradores podem ${mode === "edit" ? "editar" : "criar"} funis.`);
      return;
    }
    closeAllModals();
    state.funnelModalContext = {
      mode,
      funnelId: funnel?.id || null,
      subfunnelId: subfunnel?.id || null
    };
    els.funnelForm?.reset();
    if (els.funnelEditId) els.funnelEditId.value = funnel?.id || "";
    if (nameGroup) nameGroup.classList.remove("hidden");
    if (categoryGroup) categoryGroup.classList.remove("hidden");
    if (countGroup) countGroup.classList.remove("hidden");
    if (subfieldsGroup) subfieldsGroup.classList.remove("hidden");
    if (els.funnelName) {
      els.funnelName.disabled = false;
      els.funnelName.required = true;
      els.funnelName.value = funnel?.name || "";
    }
    if (els.funnelCategory) {
      els.funnelCategory.disabled = false;
      els.funnelCategory.value = presetCategory;
    }
    if (els.funnelVisibilityScope) {
      els.funnelVisibilityScope.disabled = false;
      els.funnelVisibilityScope.value = funnel?.visibility_scope || "all";
    }
    if (els.funnelGlobalAccessLevel) {
      els.funnelGlobalAccessLevel.disabled = false;
      els.funnelGlobalAccessLevel.value = getFunnelGlobalAccessLevelValue(funnel?.visibility_access_level || FUNNEL_ACCESS_LEVEL.VIEW);
    }
    const selectedOwnerDepartmentId = getFunnelOfficialDepartmentId(funnel) || getCurrentUserDefaultDepartmentId() || "";
    const selectedDepartmentPermissions = funnel
      ? (funnel?.department_permissions || funnel?.department_ids || [])
      : getDefaultDepartmentPermissions(selectedOwnerDepartmentId);
    renderFunnelOfficialDepartmentOptions(selectedOwnerDepartmentId);
    if (els.funnelOfficialDepartmentSelect) {
      els.funnelOfficialDepartmentSelect.disabled = false;
    }
    if (els.funnelSubCount) {
      els.funnelSubCount.disabled = false;
    }
    renderDepartmentChecklist(
      selectedDepartmentPermissions,
      { omitDepartmentIds: (funnel?.visibility_scope || "all") === "departments" ? [selectedOwnerDepartmentId] : [] }
    );
    toggleFunnelDepartmentsVisibility(funnel?.visibility_scope || "all");

    const modeConfig = getFunnelModalModeConfig({ mode, funnel, subfunnel });
    applyFunnelModalModeUiState({
      modeConfig,
      nameGroup,
      categoryGroup,
      countGroup
    });

    if (els.funnelModalTitle) els.funnelModalTitle.textContent = modeConfig.modalTitle;
    if (els.saveFunnelBtn) els.saveFunnelBtn.textContent = modeConfig.saveLabel;
    if (subfieldsLabel) subfieldsLabel.textContent = modeConfig.subLabel;
    if (els.funnelSubCount) els.funnelSubCount.value = String(modeConfig.subfunnelNames.length || 1);
    renderFunnelSubfields(modeConfig.subfunnelNames);
    syncBrandedSelects();
    openModalOverlay(els.funnelModalOverlay, modeConfig.focusSelector);
  }

  function closeFunnelModal() {
    state.funnelModalContext = null;
    closeModalOverlay(els.funnelModalOverlay);
  }

  function finalizeFunnelModalMutation({
    refreshReason,
    cooldownMs = 1800,
    bindFunnelHub = false
  } = {}) {
    closeFunnelModal();
    if (bindFunnelHub) {
      bindView("funil", { resetFunnelDetail: false });
    }
    finalizeLocalMutation({
      notifyScope: "funnel-workspace",
      refreshReason,
      cooldownMs
    });
  }

  function collectFunnelFormSubmissionContext() {
    const modalContext = state.funnelModalContext || { mode: "create" };
    const name = String(els.funnelName?.value || "").trim();
    const category = FUNNEL_CATEGORIES.includes(String(els.funnelCategory?.value || "").trim())
      ? String(els.funnelCategory.value).trim()
      : "B2C";
    const visibilityScope = ["all", "owner", "departments"].includes(String(els.funnelVisibilityScope?.value || "").trim())
      ? String(els.funnelVisibilityScope.value).trim()
      : "all";
    const visibilityAccessLevel = getFunnelGlobalAccessLevelValue();
    const officialDepartmentId = (visibilityScope === "all" || visibilityScope === "departments")
      ? String(els.funnelOfficialDepartmentSelect?.value || "").trim()
      : "";
    const selectedDepartmentPermissions = visibilityScope === "owner"
      ? []
      : normalizeFunnelDepartmentPermissions([
          ...(officialDepartmentId ? [{ department_id: officialDepartmentId, access_level: FUNNEL_ACCESS_LEVEL.EDIT }] : []),
          ...getSelectedFunnelDepartmentPermissions()
        ]);
    const selectedDepartmentIds = selectedDepartmentPermissions.map((item) => item.department_id);
    const editingId = String(els.funnelEditId?.value || "").trim();
    const existingFunnel = editingId ? getFunnelById(editingId) : null;
    const previousSubfunnels = existingFunnel?.subfunnels || [];
    const subfunnelNames = [...document.querySelectorAll("[data-funnel-subfield='true']")]
      .map((input) => String(input.value || "").trim())
      .filter(Boolean);

    return {
      modalContext,
      name,
      category,
      visibilityScope,
      visibilityAccessLevel,
      officialDepartmentId,
      selectedDepartmentPermissions,
      selectedDepartmentIds,
      editingId,
      existingFunnel,
      previousSubfunnels,
      subfunnelNames
    };
  }

  function validateFunnelFormSubmissionContext(context = {}) {
    const modalMode = String(context.modalContext?.mode || "create").trim();
    const isSubfunnelOnlyMode = modalMode === "create-subfunnel" || modalMode === "edit-subfunnel";

    if (!isSubfunnelOnlyMode && !String(context.name || "").trim()) {
      alert("Informe o nome do funil.");
      return false;
    }

    if (!isSubfunnelOnlyMode && context.visibilityScope === "departments" && !String(context.officialDepartmentId || "").trim()) {
      alert("Selecione o departamento dono do funil.");
      return false;
    }

    if (!isSubfunnelOnlyMode && context.visibilityScope === "departments" && !(context.selectedDepartmentIds || []).length) {
      alert("Selecione ao menos um departamento para esse funil.");
      return false;
    }

    if (!(context.subfunnelNames || []).length) {
      alert("Informe ao menos um subfunil.");
      return false;
    }

    return true;
  }

  function getFunnelFormSubmissionRoute(context = {}) {
    const modalMode = String(context.modalContext?.mode || "create").trim().toLowerCase();
    if (modalMode === "create-subfunnel") return "create-subfunnel";
    if (modalMode === "edit-subfunnel") return "edit-subfunnel";
    return "funnel";
  }

  async function submitSingleSubfunnelFormChange(context = {}, mode = "create") {
    const normalizedMode = String(mode || "").trim().toLowerCase();
    const isEditMode = normalizedMode === "edit";
    const targetFunnel = getFunnelById(context.modalContext?.funnelId);
    const targetSubfunnel = isEditMode ? getSubfunnelById(context.modalContext?.subfunnelId) : null;

    if (!targetFunnel || (isEditMode && !targetSubfunnel)) {
      alert(isEditMode ? "Subfunil não encontrado para edição." : "Funil não encontrado para adicionar o subfunil.");
      return false;
    }

    try {
      await saveSingleSubfunnelModalChange({
        funnelId: context.modalContext?.funnelId,
        subfunnelId: context.modalContext?.subfunnelId,
        subfunnelName: context.subfunnelNames?.[0] || "",
        mode: normalizedMode
      });
    } catch (error) {
      alert(`Erro ao salvar subfunil: ${formatSupabaseError(error)}`);
      return false;
    }

    finalizeFunnelModalMutation({
      refreshReason: isEditMode ? "subfunnel-edit" : "subfunnel-create",
      cooldownMs: 1800
    });
    return true;
  }

  function buildFullFunnelSubmissionSubfunnels(context = {}) {
    return buildFunnelSubfunnels(context.subfunnelNames, context.previousSubfunnels);
  }

  function applyFullFunnelSubmissionLocally(context = {}, nextSubfunnels = []) {
    if (context.existingFunnel) {
      applyExistingFunnelWorkspaceUpdate(context.existingFunnel.id, {
        name: context.name,
        category: context.category,
        ownerDepartmentId: context.officialDepartmentId,
        visibilityScope: context.visibilityScope,
        visibilityAccessLevel: context.visibilityAccessLevel,
        departmentPermissions: context.selectedDepartmentPermissions,
        departmentIds: context.selectedDepartmentIds,
        previousSubfunnels: context.previousSubfunnels,
        nextSubfunnels
      });
      return;
    }

    createFunnelInWorkspace({
      name: context.name,
      category: context.category,
      ownerDepartmentId: context.officialDepartmentId,
      visibilityScope: context.visibilityScope,
      visibilityAccessLevel: context.visibilityAccessLevel,
      departmentPermissions: context.selectedDepartmentPermissions,
      departmentIds: context.selectedDepartmentIds,
      subfunnels: nextSubfunnels
    });
  }

  async function persistFullFunnelSubmission(context = {}) {
    const targetFunnelId = context.existingFunnel?.id || state.activeFunnelId;
    await persistSingleFunnelSubsetByIdOrThrow(targetFunnelId, {
      includeSubfunnels: true,
      includePermissions: true
    });
    await persistSharedFunnelLinksMetaToSupabase(state.funnelWorkspace);
  }

  function finalizeFullFunnelSubmission() {
    finalizeFunnelModalMutation({
      refreshReason: "funnel-save",
      cooldownMs: 1800,
      bindFunnelHub: true
    });
  }

  async function submitFullFunnelFormChange(context = {}) {
    const nextSubfunnels = buildFullFunnelSubmissionSubfunnels(context);

    try {
      await executeFunnelWorkspaceMetaMutation({
        applyLocal: () => applyFullFunnelSubmissionLocally(context, nextSubfunnels),
        persist: async () => persistFullFunnelSubmission(context)
      });
    } catch (error) {
      alert(`Erro ao salvar funil: ${formatSupabaseError(error)}`);
      return false;
    }

    finalizeFullFunnelSubmission();
    return true;
  }

  async function submitFunnelForm(event) {
    event.preventDefault();
    const context = collectFunnelFormSubmissionContext();
    if (!validateFunnelFormSubmissionContext(context)) {
      return;
    }
    const route = getFunnelFormSubmissionRoute(context);

    if (route === "create-subfunnel") {
      await submitSingleSubfunnelFormChange(context, "create");
      return;
    }

    if (route === "edit-subfunnel") {
      await submitSingleSubfunnelFormChange(context, "edit");
      return;
    }

    await submitFullFunnelFormChange(context);
  }

  function renderActiveViewContent() {
    if (state.activeView === "funil") {
      renderFunnelHub();
      if (isFunnelDetailActive()) {
        renderPipeline();
      } else if (els.pipeline) {
        els.pipeline.innerHTML = "";
        if (els.pipelineStageStrip) els.pipelineStageStrip.innerHTML = "";
      }
      return;
    }

    if (state.activeView === "leads") {
      renderLeadTable();
      return;
    }

    if (state.activeView === "equipe") {
      renderTeam();
      renderRequests();
      return;
    }

    if (state.activeView === "estrutura") {
      renderStagesConfig();
      renderLeadSourcesConfig();
      renderSocialSourcesConfig();
      renderDepartmentsConfig();
      return;
    }

    if (state.activeView === "configuracoes") {
      renderHistoryText();
    }
  }

  function renderReportChartsIfNeeded() {
    if (state.activeView !== "relatorios") return;

    if (typeof window.Chart !== "undefined") {
      scheduleReportChartsRender();
      return;
    }

    void ensureChartLibrary()
      .then(() => {
        if (state.activeView !== "relatorios") return;
        scheduleReportChartsRender();
      })
      .catch((error) => {
        console.error("Erro ao carregar biblioteca de gráficos:", error);
      });
  }

  function highlightPendingLeadCardIfNeeded() {
    if (!state.highlightedLeadId || !isFunnelDetailActive()) return;

    const highlightedCard = document.querySelector(`#pipeline [data-lead-id="${CSS.escape(state.highlightedLeadId)}"]`);
    if (!highlightedCard) return;

    highlightedCard.classList.add("card-highlighted");
    highlightedCard.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" });
    window.setTimeout(() => highlightedCard.classList.remove("card-highlighted"), 2600);
    state.highlightedLeadId = null;
  }

  function runPostRenderLayoutEffects({ highlightLead = false } = {}) {
    requestAnimationFrame(() => {
      updateStickyLayout();
      if (highlightLead) {
        highlightPendingLeadCardIfNeeded();
      }
    });
  }

  function renderAll() {
    resetRenderComputationCache();
    syncSelectedLeadIds();
    applyRoleBasedUi();
    syncResponsiveHeaderState();
    if (!isViewAllowed(state.activeView)) {
      bindView(getDefaultAllowedView(), { resetFunnelDetail: false });
    }
    populateFilters();
    renderDesktopFilterSummary();
    renderStats();

    const shouldRenderFunnelNav = state.activeView === "funil" || state.funnelSidebarOpen;
    if (shouldRenderFunnelNav) {
      renderFunnelNav();
    }

    renderActiveViewContent();

    renderNotifications();
    renderReportChartsIfNeeded();
    bindGeneralActionEvents();
    runPostRenderLayoutEffects({ highlightLead: true });
  }

  function renderPipelineInteractionFrame() {
    if (state.activeView !== "funil" || !isFunnelDetailActive()) return false;
    resetRenderComputationCache();
    renderPipeline();
    bindGeneralActionEvents();
    runPostRenderLayoutEffects();
    return true;
  }

  function openLeadModal(lead = null) {
    if (!canEditLeads(lead)) {
      alert("Seu perfil não tem permissão de edição neste funil.");
      return;
    }

    const availableStages = isFunnelDetailActive() ? getScopedStages() : state.stages;

    closeAllModals();
    els.leadForm.reset();
    els.leadId.value = lead?.id || "";
    els.modalTitle.textContent = lead ? "Editar Lead" : "Novo Lead";
    els.ownerGroup?.classList.toggle("hidden", !canAssignLeadOwner(lead));

    els.name.value = lead?.name || "";
    els.contact.value = lead?.contact || "";
    renderLeadOwnerOptions(canAssignLeadOwner(lead) ? (lead?.owner || getUserDisplayName()) : getUserDisplayName());
    toggleLeadOwnerCreateBox(false);
    if (els.value) els.value.value = "";
    els.startDate.value = lead?.start_date || "";
    els.stage.value = lead?.stage_id || availableStages[0]?.id || "";
    if (!availableStages.length) {
      alert("Nenhuma etapa encontrada no CRM. Crie uma etapa primeiro.");
      closeLeadModal();
      return;
    }
    renderSocialSourceOptions(lead?.social_source || "");
    toggleSocialSourceCreateBox(false);
    els.trafficType.value = lead?.traffic_type || getLeadSourceNames()[0] || "";
    if (els.contractNumber) els.contractNumber.value = getLeadPrimaryContractNumber(lead);
    els.referralName.value = getLeadReferralName(lead);
    els.referralSector.value = getLeadReferralSector(lead);
    renderLeadReminderSummary(lead);
    toggleReferralNameField();
    state.modalPlans = getLeadPlans(lead).map((item) => ({ ...item }));
    if (lead && !state.modalPlans.length && Number(lead?.value || 0) > 0) {
      state.modalPlans = [{ name: getDefaultPlanName(0), value: Number(lead.value || 0) }];
    } else if (lead && !state.modalPlans.length) {
      state.modalPlans = [{ name: "Sem plano", value: 0 }];
    }
    state.modalObservations = markPersistedObservations(getLeadObservations(lead));
    renderPlanItems();
    syncLeadPlanSection();
    renderObservationItems();
    renderLeadTargetSelectors({
      lead,
      selectedFunnelId: getLeadFunnelId(lead) || state.activeFunnelId || "",
      selectedSubfunnelId: getLeadSubfunnelId(lead) || state.activeSubfunnelId || "",
      selectedStageId: lead?.stage_id || ""
    });
    if (!els.stage.options.length) {
      alert("Nenhuma pipeline encontrada para o funil selecionado.");
      closeLeadModal();
      return;
    }
    syncBrandedSelects();

    openModalOverlay(els.modalOverlay, "#name");
  }

  function prepareNotificationModal({
    targetType,
    targetId,
    title,
    description,
    showLeadEditor = false,
    showStageEditor = false,
    hasReminder = false,
    focusSelector = "#leadNotificationEnabled"
  } = {}) {
    closeAllModals();
    els.notificationForm?.reset();
    if (els.notificationTargetType) els.notificationTargetType.value = targetType || "";
    if (els.notificationTargetId) els.notificationTargetId.value = targetId || "";
    if (els.notificationModalTitle) els.notificationModalTitle.textContent = title || "Notificação";
    if (els.notificationModalDescription) els.notificationModalDescription.textContent = description || "";
    els.leadNotificationEditor?.classList.toggle("hidden", !showLeadEditor);
    els.stageNotificationEditor?.classList.toggle("hidden", !showStageEditor);
    toggleNotificationDeleteButton(Boolean(hasReminder));
    openModalOverlay(els.notificationModalOverlay, focusSelector);
  }

  function openLeadNotificationEditor(lead) {
    if (!lead) return;
    if (leadHasStageNotification(lead)) {
      alert("Esta pipeline já possui uma notificação ativa. Neste lead só ficam disponíveis Editar e Excluir.");
      return;
    }
    const reminder = getLeadReminder(lead);
    prepareNotificationModal({
      targetType: "lead",
      targetId: lead.id || "",
      title: "Notificação do lead",
      description: `Configure a notificação do lead ${lead.name || "sem nome"}.`,
      showLeadEditor: true,
      hasReminder: reminder,
      focusSelector: "#leadNotificationEnabled"
    });
    if (els.leadNotificationEnabled) els.leadNotificationEnabled.checked = Boolean(reminder);
    if (els.leadNotificationDate) els.leadNotificationDate.min = getLocalIsoDate();
    if (els.leadNotificationDate) els.leadNotificationDate.value = reminder?.type === "date" ? (reminder.due_date || "") : "";
    if (els.leadNotificationMessage) els.leadNotificationMessage.value = reminder?.message || "";
    toggleLeadReminderFields({ clearWhenHidden: !reminder });
  }

  function closeLeadModal() {
    closeModalOverlay(els.modalOverlay);
  }

  function getStageModalContext(stage = null) {
    const assignedSubfunnelId = stage
      ? state.funnelWorkspace?.stageAssignments?.[stage.id]
      : (state.activeSubfunnelId || state.structureSubfunnelId);
    const assignedSubfunnel = getSubfunnelById(assignedSubfunnelId);
    return {
      assignedSubfunnelId,
      assignedSubfunnel,
      modalTitle: stage ? "Editar pipeline" : "Adicionar pipeline",
      saveLabel: stage ? "Salvar alterações" : "Adicionar",
      stageTypeValue: stage?.custom_stage_type ? `custom:${stage.custom_stage_type}` : (stage?.stage_type || "andamento")
    };
  }

  function populateStageModalFields(stage = null, modalContext = {}) {
    els.stageId.value = stage?.id || "";
    els.stageModalTitle.textContent = modalContext.modalTitle;
    els.saveStageBtn.textContent = modalContext.saveLabel;
    els.stageName.value = stage?.name || "";
    renderStageModalScopeSelectors(modalContext.assignedSubfunnelId);
    if (modalContext.assignedSubfunnel?.funnel_id && els.stageFunnelSelect) {
      els.stageFunnelSelect.value = modalContext.assignedSubfunnel.funnel_id;
    }
    if (modalContext.assignedSubfunnelId && els.stageSubfunnelSelect) {
      els.stageSubfunnelSelect.value = modalContext.assignedSubfunnelId;
    }
    els.stageColor.value = sanitizeHexColor(stage?.color);
    refreshStageTypeOptions(modalContext.stageTypeValue, stage?.custom_stage_type || "");
  }

  function openStageModal(stage = null) {
    const modalContext = getStageModalContext(stage);
    closeAllModals();
    els.stageForm.reset();
    populateStageModalFields(stage, modalContext);
    renderStageReminderSummary(stage);
    updateStageColorPreview(els.stageColor.value);
    syncBrandedSelects();
    openModalOverlay(els.stageModalOverlay, "#stageName");
  }

  function openStageNotificationEditor(stage) {
    if (!stage) return;
    const reminder = getStageReminderConfig(stage.id);
    prepareNotificationModal({
      targetType: "stage",
      targetId: stage.id || "",
      title: "Notificação da pipeline",
      description: `Configure a notificação da pipeline ${stage.name || "sem nome"}.`,
      showStageEditor: true,
      hasReminder: reminder,
      focusSelector: "#stageNotificationEnabled"
    });
    if (els.stageNotificationEnabled) els.stageNotificationEnabled.checked = Boolean(reminder);
    if (els.stageNotificationDays) els.stageNotificationDays.value = reminder?.days ? String(reminder.days) : "";
    if (els.stageNotificationMessage) els.stageNotificationMessage.value = reminder?.message || "";
    toggleStageReminderFields({ clearWhenHidden: !reminder });
  }

  function closeStageModal() {
    closeModalOverlay(els.stageModalOverlay);
  }

  function closeStageDuplicateModal() {
    closeModalOverlay(els.stageDuplicateModalOverlay);
  }

  function closeStageDeleteModal() {
    closeModalOverlay(els.stageDeleteModalOverlay);
  }

  function getNextStageDuplicateName(baseName, targetSubfunnelId) {
    const normalizedBase = String(baseName || "").trim() || "Pipeline";
    const targetStages = getStagesForSubfunnel(targetSubfunnelId);
    const hasExactName = targetStages.some((stage) => normalizeComparisonText(stage.name || "") === normalizeComparisonText(normalizedBase));
    if (!hasExactName) return normalizedBase;

    const baseCopyName = `${normalizedBase} (Cópia)`;
    const hasBaseCopy = targetStages.some((stage) => normalizeComparisonText(stage.name || "") === normalizeComparisonText(baseCopyName));
    if (!hasBaseCopy) return baseCopyName;

    let index = 2;
    while (targetStages.some((stage) => normalizeComparisonText(stage.name || "") === normalizeComparisonText(`${normalizedBase} (Cópia ${index})`))) {
      index += 1;
    }
    return `${normalizedBase} (Cópia ${index})`;
  }

  function renderStageDuplicateCategoryOptions(selectedCategory) {
    if (!els.stageDuplicateCategory) return;
    const categories = FUNNEL_CATEGORIES.filter((category) => getFunnelsByCategory(category).length);
    els.stageDuplicateCategory.innerHTML = categories.map((category) => `
      <option value="${category}">${category}</option>
    `).join("");
    if (selectedCategory && categories.includes(selectedCategory)) {
      els.stageDuplicateCategory.value = selectedCategory;
    } else if (categories[0]) {
      els.stageDuplicateCategory.value = categories[0];
    }
  }

  function syncStageDuplicateDestination(options = {}) {
    const preferredGroupId = String(options.groupId || "").trim() || null;
    const preferredFunnelId = String(options.funnelId || "").trim() || null;
    const preferredSubfunnelId = String(options.subfunnelId || "").trim() || null;
    const selectedCategory = String(els.stageDuplicateCategory?.value || "").trim();
    const groupOptions = getStageDuplicateGroupOptions(selectedCategory);

    if (els.stageDuplicateGroup) {
      els.stageDuplicateGroup.innerHTML = groupOptions.map((group) => `
        <option value="${group.id}">${escapeHtml(group.name)}</option>
      `).join("");
      const nextGroupId = groupOptions.some((group) => String(group.id) === preferredGroupId)
        ? preferredGroupId
        : String(groupOptions[0]?.id || "");
      if (nextGroupId) els.stageDuplicateGroup.value = nextGroupId;
    }

    const selectedGroupId = String(els.stageDuplicateGroup?.value || "").trim();
    const funnels = getFunnelsByDuplicateGroup(selectedCategory, selectedGroupId);
    if (els.stageDuplicateFunnel) {
      els.stageDuplicateFunnel.innerHTML = funnels.map((funnel) => `
        <option value="${funnel.id}">${escapeHtml(funnel.name)}</option>
      `).join("");
      const nextFunnelId = funnels.some((funnel) => String(funnel.id) === preferredFunnelId)
        ? preferredFunnelId
        : String(funnels[0]?.id || "");
      if (nextFunnelId) els.stageDuplicateFunnel.value = nextFunnelId;
    }

    const selectedFunnelId = String(els.stageDuplicateFunnel?.value || "").trim();
    const subfunnels = getSubfunnelsForFunnel(selectedFunnelId);
    if (els.stageDuplicateSubfunnel) {
      els.stageDuplicateSubfunnel.innerHTML = subfunnels.map((subfunnel) => `
        <option value="${subfunnel.id}">${escapeHtml(subfunnel.name)}</option>
      `).join("");
      const nextSubfunnelId = subfunnels.some((subfunnel) => String(subfunnel.id) === preferredSubfunnelId)
        ? preferredSubfunnelId
        : String(subfunnels[0]?.id || "");
      if (nextSubfunnelId) els.stageDuplicateSubfunnel.value = nextSubfunnelId;
    }

    syncBrandedSelects();
  }

  function getStageDuplicateModalContext(stage) {
    const scope = getStageScope(stage?.id);
    return {
      scope,
      category: String(scope.funnel?.category || FUNNEL_CATEGORIES[0] || "B2C"),
      groupId: String(scope.group?.id || (scope.funnel?.group_id ? scope.funnel.group_id : FUNNEL_UNGROUPED_OPTION)).trim() || FUNNEL_UNGROUPED_OPTION
    };
  }

  function openStageDuplicateModal(stage) {
    if (!stage || !canManageStages()) return;
    const modalContext = getStageDuplicateModalContext(stage);
    closeAllModals();
    els.stageDuplicateForm?.reset();
    if (els.stageDuplicateSourceId) els.stageDuplicateSourceId.value = stage.id || "";
    if (els.stageDuplicateModalTitle) els.stageDuplicateModalTitle.textContent = `Duplicar pipeline ${stage.name || ""}`.trim();
    renderStageDuplicateCategoryOptions(modalContext.category);
    syncStageDuplicateDestination({
      groupId: modalContext.groupId,
      funnelId: modalContext.scope.funnel?.id || "",
      subfunnelId: modalContext.scope.subfunnelId || ""
    });
    syncBrandedSelects();
    openModalOverlay(els.stageDuplicateModalOverlay, "#stageDuplicateCategory");
    requestAnimationFrame(syncBrandedSelects);
  }

  function getNearestStageForDeletion(stageId) {
    const scope = getStageScope(stageId);
    const scopedStages = getStagesForSubfunnel(scope.subfunnelId);
    const currentIndex = scopedStages.findIndex((stage) => stage.id === stageId);
    if (currentIndex < 0) return null;
    return scopedStages[currentIndex + 1] || scopedStages[currentIndex - 1] || null;
  }

  function toggleStageDeleteTargetField() {
    if (!els.stageDeleteTargetGroup) return;
    const mode = document.querySelector('input[name="stageDeleteMode"]:checked')?.value || "move_leads";
    els.stageDeleteTargetGroup.classList.toggle("hidden", mode !== "move_leads");
  }

  function renderStageDeleteTargets(stage) {
    if (!els.stageDeleteTargetStage || !els.stageDeleteTargetHint) return;
    const scope = getStageScope(stage.id);
    const equivalentStageIds = new Set(getEquivalentStagesInSubfunnel(stage).map((item) => item.id));
    const currentStages = getStagesForSubfunnel(scope.subfunnelId).filter((item) => !equivalentStageIds.has(item.id));
    const nearestStage = getNearestStageForDeletion(stage.id);

    if (!currentStages.length) {
      els.stageDeleteTargetStage.innerHTML = "";
      els.stageDeleteTargetHint.textContent = "Não existe outra pipeline nesse subfunil. Se mantiver os leads, o sistema criará uma pipeline padrão automaticamente.";
      syncBrandedSelects();
      return;
    }

    els.stageDeleteTargetStage.innerHTML = currentStages.map((item) => `
      <option value="${item.id}">${escapeHtml(item.name)}</option>
    `).join("");
    if (nearestStage?.id && currentStages.some((item) => item.id === nearestStage.id)) {
      els.stageDeleteTargetStage.value = nearestStage.id;
    } else if (currentStages[0]?.id) {
      els.stageDeleteTargetStage.value = currentStages[0].id;
    }
    const duplicateCount = Math.max(0, equivalentStageIds.size - 1);
    els.stageDeleteTargetHint.textContent = duplicateCount > 0
      ? `Existem ${duplicateCount + 1} pipelines com esse mesmo nome neste subfunil. Ao excluir, o sistema removerá todas elas e moverá os leads para a pipeline selecionada.`
      : "Os leads serão movidos para a pipeline selecionada.";
    syncBrandedSelects();
  }

  function openStageDeleteModal(stage) {
    if (!stage || !canManageStages()) return;
    closeAllModals();
    els.stageDeleteForm?.reset();
    if (els.stageDeleteSourceId) els.stageDeleteSourceId.value = stage.id || "";
    if (els.stageDeleteModalTitle) els.stageDeleteModalTitle.textContent = `Excluir pipeline ${stage.name || ""}`.trim();
    const moveRadio = document.querySelector('input[name="stageDeleteMode"][value="move_leads"]');
    if (moveRadio) moveRadio.checked = true;
    renderStageDeleteTargets(stage);
    toggleStageDeleteTargetField();
    syncBrandedSelects();
    openModalOverlay(els.stageDeleteModalOverlay, 'input[name="stageDeleteMode"][value="move_leads"]');
    requestAnimationFrame(syncBrandedSelects);
  }

  function closeNotificationModal() {
    toggleNotificationDeleteButton(false);
    closeModalOverlay(els.notificationModalOverlay);
  }

  async function openHistoryModal() {
    if (!canViewHistory()) {
      alert("Somente administradores podem visualizar o historico completo.");
      return;
    }
    closeAllModals();
    els.historyText.textContent = state.historyLoaded ? els.historyText.textContent : "Carregando histórico...";
    renderHistoryText();
    openModalOverlay(els.historyModalOverlay);
    await loadHistory();
  }

  function closeHistoryModal() {
    closeModalOverlay(els.historyModalOverlay);
  }

  function requestAdminAuthorization(context) {
    state.permissionRequestContext = context || null;
    if (!state.permissionRequestContext) return;

    els.permissionModalTitle.textContent = state.permissionRequestContext.title || "Solicitar autorizacao";
    els.permissionModalText.textContent = state.permissionRequestContext.description || "Esta acao exige aprovacao de um administrador.";
    if (els.permissionRequestReason) els.permissionRequestReason.value = "";
    openModalOverlay(els.permissionModalOverlay, "#permissionRequestReason");
  }

  function closePermissionRequestModal() {
    state.permissionRequestContext = null;
    closeModalOverlay(els.permissionModalOverlay);
  }

  function collectStageDuplicateSubmissionContext() {
    const sourceStageId = String(els.stageDuplicateSourceId?.value || "").trim();
    const targetSubfunnelId = String(els.stageDuplicateSubfunnel?.value || "").trim();
    const duplicateMode = document.querySelector('input[name="stageDuplicateMode"]:checked')?.value || "stage_only";
    const sourceStage = state.stages.find((stage) => stage.id === sourceStageId) || null;
    return {
      sourceStageId,
      targetSubfunnelId,
      duplicateMode,
      sourceStage
    };
  }

  function validateStageDuplicateSubmissionContext(context = {}) {
    if (!context.sourceStage) {
      alert("Pipeline de origem não encontrada.");
      return false;
    }
    if (!context.targetSubfunnelId) {
      alert("Selecione o subfunil de destino.");
      return false;
    }
    return true;
  }

  async function submitPermissionRequest() {
    if (!state.permissionRequestContext || !state.currentUser) return;

    const reason = String(els.permissionRequestReason?.value || "").trim();
    const targetFunnel = getRequestTargetFunnel(state.permissionRequestContext);
    const targetDepartmentIds = getFunnelDepartmentIds(targetFunnel);
    const payload = {
      request_type: state.permissionRequestContext.requestType || "manual_authorization",
      entity_type: state.permissionRequestContext.entityType || null,
      entity_id: state.permissionRequestContext.entityId ? String(state.permissionRequestContext.entityId) : null,
      title: state.permissionRequestContext.title || "Solicitacao operacional",
      description: state.permissionRequestContext.description || "",
      reason,
      status: ACCESS_STATUS.PENDING,
      payload: {
        ...(state.permissionRequestContext.payload || {}),
        target_funnel_id: targetFunnel?.id || null,
        target_department_ids: targetDepartmentIds
      },
      requested_by_id: state.currentUser.id,
      requested_by_name: getUserDisplayName(),
      requested_by_email: state.currentUser.email
    };

    const { error } = await state.supabase.from("admin_requests").insert([payload]);
    if (error) {
      alert(`Erro ao registrar solicitacao: ${error.message}`);
      return;
    }

    closePermissionRequestModal();
    alert("Solicitacao enviada para a aba Solicitacoes.");
    await loadAppData({ includeProfiles: state.profilesLoaded });
  }

  function resolveManageableProfile(profileId, options = {}) {
    if (!canManageAdminAreas() || !profileId) return null;
    const profile = state.profiles.find((item) => item.id === profileId) || null;
    if (!profile || !canManageProfile(profile, options)) {
      alert("Você só pode alterar usuários do seu departamento.");
      return null;
    }
    return profile;
  }

  async function updateProfileRole(profileId, nextRole) {
    const profile = resolveManageableProfile(profileId, { action: "role", nextRole });
    if (!profile) return;

    const role = normalizeUserRole(nextRole, USER_ROLE.USER);
    if (!canAssignRoleToProfile(profile, role)) {
      alert("Você não pode alterar esse cargo.");
      return;
    }
    const persistedRole = getPersistedRoleValue(role, profile.email || "");

    const { error } = await state.supabase
      .from("profiles")
      .update({ role: persistedRole })
      .eq("id", profileId);

    if (error) {
      alert(`Erro ao atualizar perfil: ${error.message}`);
      return;
    }

    if (state.profile?.id === profileId) {
      state.profile = { ...state.profile, role };
      applyRoleBasedUi();
    }

    await loadAppData({ includeProfiles: true });
  }

  async function updateProfileDepartment(profileId, departmentId, secondaryDepartmentId = null) {
    const profile = resolveManageableProfile(profileId, { action: "department" });
    if (!profile) return;

    const normalizedSelection = normalizeDepartmentSelectionValues(departmentId, secondaryDepartmentId);
    const nextDepartmentId = normalizedSelection.primaryDepartmentId;
    const nextSecondaryDepartmentId = normalizedSelection.secondaryDepartmentId;
    if (nextDepartmentId && nextSecondaryDepartmentId && nextDepartmentId === nextSecondaryDepartmentId) {
      alert("Os dois departamentos precisam ser diferentes.");
      return;
    }
    if (!canAssignDepartmentScope(nextDepartmentId, nextSecondaryDepartmentId)) {
      alert("Esse administrador só pode definir departamentos dentro do próprio escopo.");
      return;
    }
    const { error } = await state.supabase
      .from("profiles")
      .update({
        department_id: nextDepartmentId,
        department_id_secondary: nextSecondaryDepartmentId
      })
      .eq("id", profileId);

    if (error) {
      alert(`Erro ao atualizar departamento: ${error.message}`);
      return;
    }

    if (state.profile?.id === profileId) {
      state.profile = {
        ...state.profile,
        department_id: nextDepartmentId,
        department_id_secondary: nextSecondaryDepartmentId
      };
    }

    await loadAppData({ includeProfiles: true });
  }

  function collectTeamMemberDeleteContext(profileId) {
    const profile = state.profiles.find((item) => item.id === profileId) || null;
    const label = profile?.full_name || profile?.email || "este usuario";
    return {
      profile,
      label
    };
  }

  function validateTeamMemberDeleteContext(profileId, context = {}) {
    if (!profileId) return false;
    if (!context.profile) {
      alert("Usuario nao encontrado.");
      return false;
    }
    if (state.currentUser?.id === profileId) {
      alert("Voce nao pode excluir o proprio usuario.");
      return false;
    }
    if (!window.confirm(`Excluir ${context.label}? Esta acao remove o acesso ao CRM permanentemente.`)) {
      return false;
    }
    if (!canManageAdminAreas()) {
      requestAdminAuthorization({
        requestType: "delete_user",
        title: "Solicitar exclusao de usuario",
        description: `Voce nao tem permissao para excluir ${context.label}. Sua solicitacao sera enviada para o administrador.`,
        entityType: "profile",
        entityId: profileId,
        payload: {
          profile_id: profileId,
          profile_name: context.profile.full_name || null,
          profile_email: context.profile.email || null
        }
      });
      return false;
    }
    if (!canManageProfile(context.profile, { action: "delete" })) {
      alert("Você só pode excluir usuários do seu departamento.");
      return false;
    }
    return true;
  }

  async function addDepartment() {
    const context = collectDepartmentFormContext();
    if (!validateDepartmentFormContext(context)) return;

    const { error } = await state.supabase
      .from("departments")
      .insert([{ name: context.name, is_system: false, created_by: state.currentUser?.id || null }]);

    if (error) {
      alert(`Erro ao adicionar departamento: ${error.message}`);
      return;
    }

    if (els.departmentName) els.departmentName.value = "";
    await loadAppData({ includeProfiles: true });
  }

  function collectDepartmentDeleteContext(departmentId) {
    const department = state.departments.find((item) => String(item.id) === String(departmentId)) || null;
    return { department };
  }

  function validateDepartmentDeleteContext(departmentId, context = {}) {
    if (!canManageDepartments() || !departmentId) return false;
    if (!context.department) return false;
    if (!window.confirm(`Tem certeza que deseja excluir o departamento "${context.department.name}"?`)) {
      return false;
    }
    return true;
  }

  async function deleteDepartment(departmentId) {
    const context = collectDepartmentDeleteContext(departmentId);
    if (!validateDepartmentDeleteContext(departmentId, context)) return;

    const { error } = await state.supabase
      .from("departments")
      .delete()
      .eq("id", departmentId);

    if (error) {
      alert(`Erro ao excluir departamento: ${error.message}`);
      return;
    }

    await loadAppData({ includeProfiles: true });
  }

  async function deleteTeamMember(profileId) {
    const context = collectTeamMemberDeleteContext(profileId);
    if (!validateTeamMemberDeleteContext(profileId, context)) return;

    const { data, error } = await state.supabase.functions.invoke("admin-delete-user", {
      body: { profileId }
    });

    const message = data?.error || error?.message;
    if (error || data?.error) {
      alert(`Erro ao excluir usuario: ${message || "Falha desconhecida."}`);
      return;
    }

    await logChange(
      "delete_user",
      "profile",
      profileId,
      `Usuario removido: ${context.profile.full_name || context.profile.email || profileId}`,
      { email: context.profile.email || null, role: context.profile.role || null }
    );

    await loadAppData({ includeProfiles: true });
    alert("Usuario excluido com sucesso.");
  }

  async function updateSyntheticAccessRequest(profile, payload) {
    if (!profile) return;

    const updatePayload = { ...payload };
    const filters = [];
    if (profile.id) filters.push({ column: "auth_user_id", value: profile.id });
    if (profile.email) filters.push({ column: "email", value: profile.email });

    for (const filter of filters) {
      const { error } = await state.supabase
        .from("access_requests")
        .update(updatePayload)
        .eq(filter.column, filter.value);

      if (error && !isMissingRelationError(error)) {
        console.error("Erro ao sincronizar access_requests:", error);
        break;
      }
    }
  }

  function validateApprovedDepartmentSelection(primaryDepartmentId, secondaryDepartmentId) {
    if (primaryDepartmentId && secondaryDepartmentId && primaryDepartmentId === secondaryDepartmentId) {
      alert("Os dois departamentos precisam ser diferentes.");
      return false;
    }
    if (!canAssignDepartmentScope(primaryDepartmentId, secondaryDepartmentId)) {
      alert("Esse administrador só pode aprovar acessos dentro do próprio departamento.");
      return false;
    }
    return true;
  }

  function buildApprovedProfilePayload(approvedRole, approvedDepartmentId, approvedSecondaryDepartmentId) {
    return {
      access_status: ACCESS_STATUS.APPROVED,
      role: approvedRole,
      department_id: approvedDepartmentId,
      department_id_secondary: approvedSecondaryDepartmentId,
      approved_at: new Date().toISOString(),
      approved_by: state.currentUser.id
    };
  }

  function buildApprovedAccessRequestPayload(approvedRole, approvedDepartmentId, approvedSecondaryDepartmentId) {
    return {
      status: ACCESS_STATUS.APPROVED,
      reviewed_at: new Date().toISOString(),
      reviewed_by: state.currentUser.id,
      approved_role: approvedRole,
      approved_department_id: approvedDepartmentId,
      approved_department_id_secondary: approvedSecondaryDepartmentId
    };
  }

  async function approveProfileAccessRequest(profileId, role, approvedDepartmentId, approvedSecondaryDepartmentId) {
    const profile = state.profiles.find((item) => item.id === profileId) || null;
    if (!profile) return;
    if (!canManageProfile(profile, { action: "role", nextRole: role })) {
      alert("Esse usuário não está dentro do seu escopo de departamento.");
      return;
    }

    const approvedRole = normalizeUserRole(role, USER_ROLE.USER);
    if (!canAssignRoleToProfile(profile, approvedRole)) {
      alert("Você não pode aprovar esse cargo para esse usuário.");
      return;
    }
    const persistedApprovedRole = getPersistedRoleValue(approvedRole, profile.email || "");

    const { error: profileError } = await state.supabase
      .from("profiles")
      .update(buildApprovedProfilePayload(
        persistedApprovedRole,
        approvedDepartmentId,
        approvedSecondaryDepartmentId
      ))
      .eq("id", profileId);

    if (profileError) {
      alert(`Erro ao aprovar acesso: ${profileError.message}`);
      return;
    }

    await updateSyntheticAccessRequest(profile, buildApprovedAccessRequestPayload(
      approvedRole,
      approvedDepartmentId,
      approvedSecondaryDepartmentId
    ));

    await loadAppData({ includeProfiles: true });
  }

  async function approvePendingAccessRequest(requestId, role, approvedDepartmentId, approvedSecondaryDepartmentId) {
    const request = state.accessRequests.find((item) => item.id === requestId) || null;
    if (!request) return;
    if (!canManageAccessRequest(request)) {
      alert("Essa solicitação não está dentro do seu escopo de departamento.");
      return;
    }

    const approvedRole = normalizeUserRole(role, USER_ROLE.USER);
    if (!canAssignRoleToRequest(request, approvedRole)) {
      alert("Você não pode aprovar esse cargo para essa solicitação.");
      return;
    }
    const persistedApprovedRole = getPersistedRoleValue(approvedRole, request.email || "");
    const approvedProfilePayload = buildApprovedProfilePayload(
      persistedApprovedRole,
      approvedDepartmentId,
      approvedSecondaryDepartmentId
    );

    const profileFilter = request.auth_user_id
      ? state.supabase.from("profiles").update(approvedProfilePayload).eq("id", request.auth_user_id)
      : state.supabase.from("profiles").update(approvedProfilePayload).eq("email", request.email);

    const { error: profileError } = await profileFilter;
    if (profileError) {
      alert(`Erro ao aprovar acesso: ${profileError.message}`);
      return;
    }

    const { error } = await state.supabase
      .from("access_requests")
      .update(buildApprovedAccessRequestPayload(
        approvedRole,
        approvedDepartmentId,
        approvedSecondaryDepartmentId
      ))
      .eq("id", requestId);

    if (error) {
      alert(`Erro ao atualizar solicitacao: ${error.message}`);
      return;
    }

    await loadAppData({ includeProfiles: true });
  }

  async function approveAccessRequest(requestId, role, departmentId = null, secondaryDepartmentId = null) {
    if (!canManageAdminAreas()) return;
    const normalizedSelection = normalizeDepartmentSelectionValues(departmentId, secondaryDepartmentId);
    const approvedDepartmentId = normalizedSelection.primaryDepartmentId;
    const approvedSecondaryDepartmentId = normalizedSelection.secondaryDepartmentId;
    if (!validateApprovedDepartmentSelection(approvedDepartmentId, approvedSecondaryDepartmentId)) return;

    if (String(requestId || "").startsWith("profile:")) {
      const profileId = String(requestId).slice("profile:".length);
      await approveProfileAccessRequest(
        profileId,
        role,
        approvedDepartmentId,
        approvedSecondaryDepartmentId
      );
      return;
    }

    await approvePendingAccessRequest(
      requestId,
      role,
      approvedDepartmentId,
      approvedSecondaryDepartmentId
    );
  }

  function buildRejectedProfilePayload() {
    return {
      access_status: ACCESS_STATUS.REJECTED,
      approved_by: state.currentUser.id,
      denied_at: new Date().toISOString()
    };
  }

  function buildRejectedAccessRequestPayload() {
    return {
      status: ACCESS_STATUS.REJECTED,
      reviewed_at: new Date().toISOString(),
      reviewed_by: state.currentUser.id
    };
  }

  async function rejectProfileAccessRequest(profileId) {
    const profile = state.profiles.find((item) => item.id === profileId) || null;
    if (!profile) return;
    if (!canManageProfile(profile, { action: "role", nextRole: profile.role })) {
      alert("Esse usuário não está dentro do seu escopo de departamento.");
      return;
    }

    const { error: profileError } = await state.supabase
      .from("profiles")
      .update(buildRejectedProfilePayload())
      .eq("id", profileId);

    if (profileError) {
      alert(`Erro ao recusar acesso: ${profileError.message}`);
      return;
    }

    await updateSyntheticAccessRequest(profile, buildRejectedAccessRequestPayload());
    await loadAppData({ includeProfiles: true });
  }

  async function rejectPendingAccessRequest(requestId) {
    const request = state.accessRequests.find((item) => item.id === requestId) || null;
    if (!request) return;
    if (!canManageAccessRequest(request)) {
      alert("Essa solicitação não está dentro do seu escopo de departamento.");
      return;
    }

    const rejectedProfilePayload = {
      access_status: ACCESS_STATUS.REJECTED,
      approved_by: state.currentUser.id
    };
    const profileFilter = request.auth_user_id
      ? state.supabase.from("profiles").update(rejectedProfilePayload).eq("id", request.auth_user_id)
      : state.supabase.from("profiles").update(rejectedProfilePayload).eq("email", request.email);

    const { error: profileError } = await profileFilter;
    if (profileError) {
      alert(`Erro ao recusar acesso: ${profileError.message}`);
      return;
    }

    const { error } = await state.supabase
      .from("access_requests")
      .update(buildRejectedAccessRequestPayload())
      .eq("id", requestId);

    if (error) {
      alert(`Erro ao atualizar solicitacao: ${error.message}`);
      return;
    }

    await loadAppData({ includeProfiles: true });
  }

  async function rejectAccessRequest(requestId) {
    if (!canManageAdminAreas()) return;

    if (String(requestId || "").startsWith("profile:")) {
      const profileId = String(requestId).slice("profile:".length);
      await rejectProfileAccessRequest(profileId);
      return;
    }

    await rejectPendingAccessRequest(requestId);
  }

  async function deleteObservationFromLead(payload = {}) {
    const leadId = String(payload.lead_id || "").trim();
    if (!leadId) return null;

    const lead = state.leads.find((item) => item.id === leadId);
    if (!lead) throw new Error("Lead da observacao nao encontrado.");

    const leadMeta = getLeadMeta(lead?.notes || "", lead?.value || 0);
    const observations = cleanObservationList(leadMeta.observations || []);
    const target = {
      date: normalizeDateInput(payload.observation_date || ""),
      text: String(payload.observation_text || "").trim()
    };
    const targetIndex = observations.findIndex((item) => isSameObservationItem(item, target));

    if (targetIndex < 0) return lead;

    observations.splice(targetIndex, 1);

    const { error } = await state.supabase
      .from("leads")
      .update({
        notes: serializeLeadMeta({
          ...leadMeta,
          observations
        })
      })
      .eq("id", leadId);

    if (error) throw error;

    await logChange(
      "delete_observation",
      "lead",
      leadId,
      `Uma observacao do lead "${lead.name}" foi excluida por ${getUserDisplayName()} apos aprovacao administrativa.`,
      {
        lead_id: leadId,
        lead_name: lead.name,
        removed_observation: target
      }
    );

    return lead;
  }

  async function applyApprovedDeleteFunnelRequest(request) {
    try {
      const deleted = await deleteFunnelByIdInternal(request.payload.funnel_id);
      return Boolean(deleted);
    } catch (deleteError) {
      alert(`Erro ao excluir funil aprovado: ${formatSupabaseError(deleteError)}`);
      return false;
    }
  }

  async function applyApprovedDeleteLeadRequest(request) {
    const { error: deleteError } = await deleteLeadsByIds([request.payload.lead_id]);
    if (deleteError) {
      alert(`Erro ao excluir lead aprovado: ${formatSupabaseError(deleteError)}`);
      return false;
    }
    return true;
  }

  async function applyApprovedBulkDeleteLeadsRequest(request) {
    const { error: deleteError } = await deleteLeadsByIds(request.payload.lead_ids);
    if (deleteError) {
      alert(`Erro ao excluir leads aprovados: ${formatSupabaseError(deleteError)}`);
      return false;
    }
    return true;
  }

  async function applyApprovedDeleteObservationRequest(request) {
    try {
      await deleteObservationFromLead(request.payload || {});
    } catch (deleteError) {
      alert(`Erro ao excluir observacao aprovada: ${formatSupabaseError(deleteError)}`);
      return false;
    }
    return true;
  }

  async function applyApprovedAdminRequest(request) {
    if (!request) return true;

    if (request.request_type === "delete_funnel" && request.payload?.funnel_id) {
      return applyApprovedDeleteFunnelRequest(request);
    }

    if (request.request_type === "delete_lead" && request.payload?.lead_id) {
      return applyApprovedDeleteLeadRequest(request);
    }

    if (request.request_type === "bulk_delete_leads" && Array.isArray(request.payload?.lead_ids) && request.payload.lead_ids.length) {
      return applyApprovedBulkDeleteLeadsRequest(request);
    }

    if (request.request_type === "delete_observation") {
      return applyApprovedDeleteObservationRequest(request);
    }

    return true;
  }

  function resolveAdminRequestContext(requestId) {
    const request = state.adminRequests.find((item) => item.id === requestId) || null;
    return { request };
  }

  function validateAdminRequestResolutionContext(context = {}) {
    if (!canManageAdminAreas()) return false;
    if (!context.request) return false;
    if (!canManageAdminRequest(context.request)) {
      alert("Essa solicitação operacional não está dentro do seu escopo de departamento.");
      return false;
    }
    return true;
  }

  async function persistAdminRequestResolution(requestId, action) {
    const nextStatus = action === "approve" ? ACCESS_STATUS.APPROVED : ACCESS_STATUS.REJECTED;
    const { error } = await state.supabase
      .from("admin_requests")
      .update({
        status: nextStatus,
        reviewed_at: new Date().toISOString(),
        reviewed_by: state.currentUser.id
      })
      .eq("id", requestId);

    if (error) {
      alert(`Erro ao atualizar solicitacao operacional: ${error.message}`);
      return false;
    }

    return true;
  }

  async function resolveAdminRequest(requestId, action) {
    const context = resolveAdminRequestContext(requestId);
    if (!validateAdminRequestResolutionContext(context)) return;

    if (action === "approve") {
      const approved = await applyApprovedAdminRequest(context.request);
      if (!approved) {
        return;
      }
    }

    const resolved = await persistAdminRequestResolution(requestId, action);
    if (!resolved) return;

    await loadAppData({ includeProfiles: true });
  }

  function collectDepartmentFormContext() {
    const name = normalizeDepartmentName(els.departmentName?.value || "");
    return { name };
  }

  function validateDepartmentFormContext(context = {}) {
    if (!canManageDepartments()) return false;
    if (!context.name) {
      alert("Informe o nome do departamento.");
      return false;
    }
    return true;
  }

  function collectLeadSourceFormContext() {
    const name = String(els.leadSourceName?.value || "").trim();
    return { name };
  }

  function validateLeadSourceFormContext(context = {}) {
    if (!canManageLeadSources()) return false;
    if (!context.name) {
      alert("Informe o nome da origem do lead.");
      return false;
    }
    return true;
  }

  async function addLeadSource() {
    const context = collectLeadSourceFormContext();
    if (!validateLeadSourceFormContext(context)) return;

    const { error } = await state.supabase
      .from("lead_source_catalog")
      .upsert({ name: context.name, created_by: state.currentUser?.id || null }, { onConflict: "name" });

    if (error && !isMissingRelationError(error)) {
      alert(`Erro ao salvar origem: ${error.message}`);
      return;
    }

    if (els.leadSourceName) els.leadSourceName.value = "";
    await loadAppData({ includeProfiles: state.profilesLoaded });
  }

  function collectSocialSourceFormContext() {
    const name = normalizeSpacing(els.socialSourceName?.value || "");
    return { name };
  }

  function validateSocialSourceFormContext(context = {}) {
    if (!canManageLeadSources()) return false;
    if (!context.name) {
      alert("Informe o nome do canal de origem.");
      return false;
    }
    return true;
  }

  async function addSocialSource() {
    const context = collectSocialSourceFormContext();
    if (!validateSocialSourceFormContext(context)) return;

    const canonicalSource = getCanonicalDisplayLabel(context.name, "social_source");
    state.socialSources = normalizeSocialSources([...(state.socialSources || []), canonicalSource]);
    writeStoredSocialSources();
    if (els.socialSourceName) els.socialSourceName.value = "";
    renderSocialSourcesConfig();
    renderSocialSourceOptions(canonicalSource);
  }

  function collectLeadSourceEditContext(sourceName) {
    const currentName = String(sourceName || "").trim();
    const nextName = window.prompt("Novo nome para a origem do lead:", currentName);
    return {
      currentName,
      nextName: String(nextName || "").trim()
    };
  }

  function validateLeadSourceEditContext(context = {}) {
    if (!canManageLeadSources()) return false;
    if (!context.currentName) return false;
    if (isDefaultLeadSourceName(context.currentName)) {
      alert("As origens padrao do sistema nao podem ser renomeadas.");
      return false;
    }
    if (!context.nextName || context.nextName === context.currentName) return false;
    return true;
  }

  async function editLeadSource(sourceName) {
    const context = collectLeadSourceEditContext(sourceName);
    if (!validateLeadSourceEditContext(context)) return;

    const { error: leadError } = await state.supabase
      .from("leads")
      .update({ traffic_type: context.nextName })
      .eq("traffic_type", context.currentName);

    if (leadError) {
      alert(`Erro ao atualizar leads: ${leadError.message}`);
      return;
    }

    const { error: updateError } = await state.supabase
      .from("lead_source_catalog")
      .update({ name: context.nextName })
      .eq("name", context.currentName);

    if (updateError && !isMissingRelationError(updateError)) {
      alert(`Erro ao atualizar origem: ${updateError.message}`);
      return;
    }

    await loadAppData({ includeProfiles: state.profilesLoaded });
  }

  function collectLeadSourceDeleteContext(sourceName) {
    const currentName = String(sourceName || "").trim();
    const fallbackName = getLeadSourceNames().find((item) => item !== currentName) || DEFAULT_LEAD_SOURCES[0];
    return {
      currentName,
      fallbackName
    };
  }

  function validateLeadSourceDeleteContext(context = {}) {
    if (!context.currentName) return false;
    if (isDefaultLeadSourceName(context.currentName)) {
      alert("As origens padrao do sistema nao podem ser excluidas.");
      return false;
    }
    if (!context.fallbackName) {
      alert("Mantenha ao menos uma origem do lead disponivel.");
      return false;
    }
    if (!confirm(`Excluir a origem "${context.currentName}"? Leads existentes serao migrados para "${context.fallbackName}".`)) return false;
    if (!canManageLeadSources()) {
      requestAdminAuthorization({
        requestType: "delete_lead_source",
        title: "Solicitar exclusao de origem do lead",
        description: `Voce nao tem permissao para excluir a origem "${context.currentName}". Sua solicitacao sera enviada para o administrador.`,
        entityType: "lead_source",
        entityId: context.currentName,
        payload: {
          source_name: context.currentName,
          fallback_name: context.fallbackName
        }
      });
      return false;
    }
    return true;
  }

  async function deleteLeadSource(sourceName) {
    const context = collectLeadSourceDeleteContext(sourceName);
    if (!validateLeadSourceDeleteContext(context)) return;

    const { error: leadError } = await state.supabase
      .from("leads")
      .update({ traffic_type: context.fallbackName })
      .eq("traffic_type", context.currentName);

    if (leadError) {
      alert(`Erro ao atualizar leads vinculados: ${leadError.message}`);
      return;
    }

    const { error } = await state.supabase
      .from("lead_source_catalog")
      .delete()
      .eq("name", context.currentName);

    if (error && !isMissingRelationError(error)) {
      alert(`Erro ao excluir origem: ${error.message}`);
      return;
    }

    await loadAppData({ includeProfiles: state.profilesLoaded });
  }

  function collectSocialSourceEditContext(sourceName) {
    const currentName = normalizeSpacing(sourceName);
    const nextName = window.prompt("Novo nome para o canal de origem:", currentName);
    const normalizedNextName = normalizeSpacing(nextName);
    return {
      currentName,
      normalizedNextName,
      canonicalNextName: getCanonicalDisplayLabel(normalizedNextName, "social_source")
    };
  }

  function validateSocialSourceEditContext(context = {}) {
    if (!canManageLeadSources()) return false;
    if (!context.currentName) return false;
    if (!context.normalizedNextName || context.normalizedNextName === context.currentName) return false;
    return true;
  }

  async function editSocialSource(sourceName) {
    const context = collectSocialSourceEditContext(sourceName);
    if (!validateSocialSourceEditContext(context)) return;

    const { error } = await state.supabase
      .from("leads")
      .update({ social_source: context.canonicalNextName })
      .eq("social_source", context.currentName);

    if (error) {
      alert(`Erro ao atualizar leads: ${error.message}`);
      return;
    }

    state.socialSources = normalizeSocialSources(
      getSocialSourceItems()
        .map((item) => (item.name === context.currentName ? context.canonicalNextName : item.name))
    );
    writeStoredSocialSources();
    await loadAppData({ includeProfiles: state.profilesLoaded });
  }

  function collectSocialSourceDeleteContext(sourceName) {
    const currentName = normalizeSpacing(sourceName);
    const items = getSocialSourceItems().map((item) => item.name);
    const fallbackName = items.find((item) => item !== currentName) || "";
    return {
      currentName,
      fallbackName
    };
  }

  function validateSocialSourceDeleteContext(context = {}) {
    if (!context.currentName) return false;
    if (!context.fallbackName) {
      alert("Mantenha ao menos um canal de origem disponível.");
      return false;
    }
    if (!confirm(`Excluir o canal "${context.currentName}"? Leads existentes serão migrados para "${context.fallbackName}".`)) return false;
    if (!canManageLeadSources()) {
      requestAdminAuthorization({
        requestType: "delete_social_source",
        title: "Solicitar exclusão de canal de origem",
        description: `Você não tem permissão para excluir o canal "${context.currentName}". Sua solicitação será enviada para o administrador.`,
        entityType: "social_source",
        entityId: context.currentName,
        payload: {
          source_name: context.currentName,
          fallback_name: context.fallbackName
        }
      });
      return false;
    }
    return true;
  }

  async function deleteSocialSource(sourceName) {
    const context = collectSocialSourceDeleteContext(sourceName);
    if (!validateSocialSourceDeleteContext(context)) return;

    const { error } = await state.supabase
      .from("leads")
      .update({ social_source: context.fallbackName })
      .eq("social_source", context.currentName);

    if (error) {
      alert(`Erro ao atualizar leads vinculados: ${error.message}`);
      return;
    }

    state.socialSources = normalizeSocialSources(
      getSocialSourceItems().filter((item) => item.name !== context.currentName).map((item) => item.name)
    );
    writeStoredSocialSources();
    await loadAppData({ includeProfiles: state.profilesLoaded });
  }

  async function logChange(action, entityType, entityId, description, payload = null) {
    if (!state.currentUser) return;

    const row = {
      action,
      entity_type: entityType,
      entity_id: entityId ? String(entityId) : null,
      description,
      payload: payload || {},
      user_id: state.currentUser.id,
      user_name: getUserDisplayName(),
      user_email: state.currentUser.email
    };

    const { error } = await state.supabase.from("change_history").insert([row]);
    if (error) console.error("Erro ao gravar histórico:", error);
    state.historyLoaded = false;
  }

  async function submitLead(event) {
    event.preventDefault();

    const existingLead = state.leads.find((lead) => lead.id === els.leadId.value) || null;
    if (!canEditLeads(existingLead)) {
      alert("Seu perfil não tem permissão de edição neste funil.");
      return;
    }
    if (canAssignLeadOwner(existingLead) && String(els.owner?.value || "") === "__new__") {
      alert("Crie e selecione o novo responsável antes de salvar o lead.");
      return;
    }
    const existingMeta = getLeadMeta(existingLead?.notes || "");
    const normalizedModalPlans = state.modalPlans.map((item) => {
      const name = String(item?.name || "").trim();
      const rawValue = String(item?.value ?? "").trim();
      const supportsClosingDetails = !isNoPlanName(name) && Number(parseMonetaryValue(item?.value)) > 0;
      return {
        name,
        value: isNoPlanName(name) && rawValue === "" ? 0 : item?.value,
        contract_number: supportsClosingDetails ? String(item?.contract_number || "").trim() : "",
        closed_at: supportsClosingDetails ? (normalizeDateInput(item?.closed_at || "") || "") : ""
      };
    });
    const draftPlans = cleanPlanList(normalizedModalPlans.map((item) => ({
      name: item.name,
      value: item.value,
      contract_number: item.contract_number,
      closed_at: item.closed_at
    })));
    const leadValue = getPlansTotalValue(draftPlans);
    const draftObservations = cleanObservationList(state.modalObservations);
    const resolvedOwner = resolveLeadOwnerForPersistence({
      existingLead,
      requestedOwner: els.owner.value.trim()
    });
    const selectedFunnelId = String(els.leadFunnelSelect?.value || "").trim();
    const selectedSubfunnelId = String(els.leadSubfunnelSelect?.value || "").trim();
    const selectedStageId = String(els.stage?.value || "").trim();
    const selectedFunnel = getFunnelById(selectedFunnelId);

    const invalidPlan = normalizedModalPlans.find((item) => item.name && !isNoPlanName(item.name) && String(item?.value ?? "").trim() === "");
    if (existingLead && invalidPlan) return alert("Ao adicionar um plano, informe tambem o valor.");
    const referralName = isReferralLeadSource(els.trafficType.value) ? els.referralName.value.trim() : "";
    const referralSector = isReferralLeadSource(els.trafficType.value) ? els.referralSector.value.trim() : "";
    const selectedSocialSource = els.socialSource?.value === "__new__"
      ? normalizeSpacing(els.socialSourceCreateInput?.value || "")
      : String(els.socialSource?.value || "").trim();
    const contractNumber = isClosedStageId(selectedStageId)
      ? String(els.contractNumber?.value || "").trim()
      : String(existingMeta.contract_number || "").trim();

    if (contractNumber && draftPlans.length) {
      const targetPlan = draftPlans.find((item) => !isNoPlanName(item.name)) || draftPlans[0];
      if (targetPlan && !String(targetPlan.contract_number || "").trim()) {
        targetPlan.contract_number = contractNumber;
      }
    }

    const payload = {
      assigned_to: resolveLeadAssigneeForPersistence(existingLead),
      created_by: existingLead?.created_by || state.currentUser.id,
      stage_id: selectedStageId,
      name: els.name.value.trim(),
      contact: els.contact.value.trim(),
      owner: resolvedOwner,
      value: Number.isFinite(leadValue) ? leadValue : 0,
      start_date: normalizeDateInput(els.startDate.value) || els.startDate.value,
      social_source: getCanonicalMappedValue(selectedSocialSource, state.socialSourceCanonicalMap, "social_source"),
      traffic_type: els.trafficType.value,
      notes: serializeLeadMeta({
        ...existingMeta,
        plans: draftPlans,
        plan: draftPlans[0]?.name || "",
        legacyText: existingMeta.legacyText,
        observations: draftObservations,
        contract_number: contractNumber,
        referral_name: referralName,
        referral_sector: referralSector
      })
    };

    if (!selectedFunnelId) return alert("Selecione um funil.");
    if (!selectedSubfunnelId) return alert("Selecione um subfunil.");
    if (!selectedFunnel || !canRoleEditFunnelContent(selectedFunnel)) {
      return alert("Seu perfil nao pode editar leads nesse funil.");
    }
    if (!payload.stage_id) return alert("Selecione uma etapa.");
    const requiresOwner = canAssignLeadOwner(existingLead) || !existingLead;
    if (!payload.name || !payload.contact || !payload.start_date || !payload.traffic_type || !payload.social_source || (requiresOwner && !payload.owner)) {
      return alert("Preencha os campos obrigatorios.");
    }
    if (!payload.social_source) {
      return alert("Selecione o canal de origem.");
    }
    if (isReferralLeadSource(payload.traffic_type) && !referralName) {
      return alert("Informe o nome de quem indicou.");
    }

    const nextStageTracking = normalizeLeadStageTracking(existingMeta.stage_tracking || {});
    if (selectedStageId) {
      const stageStartDate = normalizeDateInput(payload.start_date || "") || getLocalIsoDate();
      const previousStageId = String(existingLead?.stage_id || "").trim();
      if (!nextStageTracking[selectedStageId] || previousStageId !== selectedStageId) {
        nextStageTracking[selectedStageId] = existingLead ? getLocalIsoDate() : stageStartDate;
      }
    }

    payload.notes = serializeLeadMeta({
      ...existingMeta,
      plans: draftPlans,
      plan: draftPlans[0]?.name || "",
      legacyText: existingMeta.legacyText,
      observations: draftObservations,
      contract_number: contractNumber,
      referral_name: referralName,
      referral_sector: referralSector,
      reminder: existingMeta.reminder || null,
      stage_tracking: nextStageTracking
    });

    let error;
    let savedLeadId = els.leadId.value || null;
    let savedLeadRecord = null;

    if (els.leadId.value) {
      const oldLead = state.leads.find((x) => x.id === els.leadId.value);

      ({ error } = await state.supabase
        .from("leads")
        .update(payload)
        .eq("id", els.leadId.value));

      if (error) return alert(`Erro no Supabase: ${error.message}`);

      await logChange(
        "update",
        "lead",
        els.leadId.value,
        `Lead "${payload.name}" foi atualizado por ${getUserDisplayName()}.`,
        { before: oldLead || null, after: payload }
      );
      savedLeadRecord = {
        ...(oldLead || {}),
        ...payload,
        id: els.leadId.value
      };
    } else {
      const { data, error: insertError } = await state.supabase
        .from("leads")
        .insert([payload])
        .select()
        .single();

      error = insertError;
      if (error) return alert(`Erro no Supabase: ${error.message}`);
      savedLeadId = data?.id || null;

      await logChange(
        "insert",
        "lead",
        data?.id,
        `Lead "${payload.name}" foi criado por ${getUserDisplayName()}.`,
        payload
      );
      savedLeadRecord = data ? { ...data, ...payload } : { ...payload, id: savedLeadId };
    }

    if (savedLeadRecord?.id) {
      upsertLeadLocally(savedLeadRecord);
      try {
        await persistLeadAssignmentsSafely([savedLeadRecord.id], selectedSubfunnelId, {
          notifyScope: "funnel-workspace"
        });
      } catch (assignmentError) {
        alert(`Lead salvo, mas não foi possível vincular o subfunil corretamente: ${formatSupabaseError(assignmentError)}`);
        return;
      }
    }

    closeLeadModal();
    finalizeLocalMutation({
      notifyScope: "workspace",
      refreshReason: "lead-save",
      cooldownMs: 1400
    });

    void syncPlanValuesAcrossLeads(draftPlans, savedLeadId)
      .then((updatedCount) => {
        if (updatedCount > 0) {
          scheduleLiveDataRefresh("lead-plan-sync", { immediate: true });
          notifyLiveSyncChange("workspace");
        }
      })
      .catch((syncError) => {
        alert(`Lead salvo, mas não foi possível sincronizar o valor do plano nos outros leads: ${syncError.message}`);
      });
  }

  function collectStageFormSubmissionContext() {
    const selectedType = String(els.stageType.value || "andamento").trim();
    const selectedSubfunnelId = String(els.stageSubfunnelSelect?.value || "").trim();
    const customStageTypeInput = String(els.customStageType?.value || "").trim();
    const existingCustomType = selectedType.startsWith("custom:") ? selectedType.replace(/^custom:/, "") : "";
    const isCreatingNewCustom = selectedType === "personalizado";
    const isEditingExistingCustom = !!existingCustomType;
    const desiredCustomType = isCreatingNewCustom
      ? customStageTypeInput
      : (isEditingExistingCustom ? (customStageTypeInput || existingCustomType) : "");
    const payload = {
      name: normalizeStageName(els.stageName.value),
      color: sanitizeHexColor(els.stageColor.value),
      stage_type: (isCreatingNewCustom || isEditingExistingCustom)
        ? "personalizado"
        : (["andamento", "fechado", "cancelado", "espera"].includes(selectedType) ? selectedType : "andamento"),
      custom_stage_type: (isCreatingNewCustom || isEditingExistingCustom) ? desiredCustomType : null,
      position: els.stageId.value ? (state.stages.find((s) => s.id === els.stageId.value)?.position ?? state.stages.length) : state.stages.length,
      created_by: state.currentUser.id
    };
    return {
      selectedType,
      selectedSubfunnelId,
      customStageTypeInput,
      existingCustomType,
      isCreatingNewCustom,
      isEditingExistingCustom,
      desiredCustomType,
      payload
    };
  }

  function validateStageFormSubmissionContext(context = {}) {
    if (!context.payload?.name) {
      alert("Informe o nome da etapa.");
      return false;
    }
    if (!context.selectedSubfunnelId) {
      alert("Selecione o subfunil desta pipeline.");
      return false;
    }
    if (context.payload.stage_type === "personalizado" && !context.payload.custom_stage_type) {
      alert("Informe o tipo personalizado.");
      return false;
    }
    return true;
  }

  function getDuplicateCustomStageType(context = {}) {
    const customTypes = getCustomStageTypes();
    return customTypes.find((item) =>
      normalizeStageTypeNameKey(item) === normalizeStageTypeNameKey(context.payload?.custom_stage_type) &&
      normalizeStageTypeNameKey(item) !== normalizeStageTypeNameKey(context.existingCustomType)
    ) || null;
  }

  async function persistCustomStageTypeChanges(context = {}) {
    const duplicateCustom = getDuplicateCustomStageType(context);

    if (context.isCreatingNewCustom && duplicateCustom) {
      alert("Esse tipo personalizado ja existe. Selecione-o na lista para editar.");
      return false;
    }

    if (context.isEditingExistingCustom && context.desiredCustomType !== context.existingCustomType) {
      if (duplicateCustom) {
        alert("Ja existe outro tipo com esse nome. Selecione-o na lista para editar.");
        return false;
      }
      const renamed = await renameCustomStageType(context.existingCustomType, context.desiredCustomType);
      if (!renamed) {
        alert("Nao foi possivel atualizar o tipo personalizado.");
        return false;
      }
      return true;
    }

    if (context.isCreatingNewCustom) {
      const savedType = await saveCustomStageType(context.payload?.custom_stage_type);
      if (!savedType) {
        alert("Nao foi possivel salvar o novo tipo personalizado.");
        return false;
      }
    }

    return true;
  }

  function collectStageUpdatePersistenceContext(context = {}) {
    const stageId = String(els.stageId.value || "").trim();
    const before = state.stages.find((stage) => stage.id === stageId) || null;
    const previousStageName = normalizeStageName(before?.name || context.payload?.name || "");
    const previousAssignedSubfunnelId = String(state.funnelWorkspace?.stageAssignments?.[stageId] || "").trim();
    const matchingTargetStage = findMatchingStageInSubfunnelByName(context.payload?.name, context.selectedSubfunnelId, stageId);
    const leadIdsInStage = state.leads
      .filter((lead) => String(lead.stage_id || "").trim() === stageId)
      .map((lead) => lead.id)
      .filter(Boolean);

    return {
      stageId,
      before,
      previousStageName,
      previousAssignedSubfunnelId,
      matchingTargetStage,
      leadIdsInStage
    };
  }

  async function persistStageRecordUpdate(updateContext = {}, context = {}) {
    const { error } = await state.supabase
      .from("stages")
      .update({
        name: context.payload.name,
        color: context.payload.color,
        stage_type: context.payload.stage_type,
        custom_stage_type: context.payload.custom_stage_type,
        position: context.payload.position
      })
      .eq("id", updateContext.stageId);
    if (error) throw error;
  }

  async function persistUpdatedStageAssignments(updateContext = {}, context = {}) {
    await persistWorkspaceAssignmentsSafely({
      stageIds: [updateContext.stageId],
      leadIds: updateContext.leadIdsInStage,
      subfunnelId: context.selectedSubfunnelId,
      notify: updateContext.previousAssignedSubfunnelId !== context.selectedSubfunnelId,
      notifyScope: "funnel-workspace"
    });
  }

  async function cleanupUpdatedStageDuplicates(updateContext = {}, context = {}) {
    if (updateContext.previousAssignedSubfunnelId && updateContext.previousAssignedSubfunnelId !== context.selectedSubfunnelId) {
      await cleanupDuplicateStagesInSubfunnel(updateContext.previousAssignedSubfunnelId, updateContext.previousStageName, {
        removeAllWhenNoLeads: true
      });
    }
    await cleanupDuplicateStagesInSubfunnel(context.selectedSubfunnelId, context.payload.name, {
      keepStageId: updateContext.stageId
    });
  }

  async function logUpdatedStageChange(updateContext = {}, context = {}) {
    await logChange("update", "stage", updateContext.stageId, `Etapa "${updateContext.before?.name || context.payload.name}" foi atualizada por ${getUserDisplayName()}.`, {
      before: updateContext.before,
      after: {
        ...context.payload,
        previous_subfunnel_id: updateContext.previousAssignedSubfunnelId || null,
        subfunnel_id: context.selectedSubfunnelId
      }
    });
  }

  function applyUpdatedStageLocally(updateContext = {}, context = {}) {
    upsertStageLocally({ ...updateContext.before, ...context.payload, id: updateContext.stageId });
  }

  async function persistUpdatedStage(context = {}) {
    const updateContext = collectStageUpdatePersistenceContext(context);

    if (updateContext.before && updateContext.matchingTargetStage) {
      await mergeStageIntoExistingTarget({
        sourceStage: updateContext.before,
        targetStage: updateContext.matchingTargetStage,
        targetSubfunnelId: context.selectedSubfunnelId,
        payload: context.payload
      });
      return;
    }

    await persistStageRecordUpdate(updateContext, context);
    await persistUpdatedStageAssignments(updateContext, context);
    await cleanupUpdatedStageDuplicates(updateContext, context);
    await logUpdatedStageChange(updateContext, context);
    applyUpdatedStageLocally(updateContext, context);
  }

  async function logCreatedStageChange(context = {}, createdStage = null) {
    await logChange("insert", "stage", createdStage?.id, `Etapa "${context.payload.name}" foi criada por ${getUserDisplayName()}.`, context.payload);
  }

  async function persistCreatedStageAssignments(createdStage = null, context = {}) {
    if (!createdStage?.id) return;
    upsertStageLocally(createdStage);
    await persistWorkspaceAssignmentsSafely({
      stageIds: [createdStage.id],
      subfunnelId: context.selectedSubfunnelId,
      notify: true,
      notifyScope: "funnel-workspace"
    });
  }

  async function persistNewStage(context = {}) {
    const { data, error } = await state.supabase.from("stages").insert([context.payload]).select().single();
    if (error) throw error;

    await logCreatedStageChange(context, data);
    await persistCreatedStageAssignments(data, context);
  }

  function isStageFormEditing() {
    return Boolean(String(els.stageId?.value || "").trim());
  }

  async function persistStageFormSubmission(context = {}) {
    if (isStageFormEditing()) {
      await persistUpdatedStage(context);
      return;
    }
    await persistNewStage(context);
  }

  function finalizeStageSaveMutation() {
    closeStageModal();
    finalizeLocalMutation({
      notifyScope: "funnel-workspace",
      refreshReason: "stage-save",
      cooldownMs: 1500
    });
  }

  async function submitStage(event) {
    event.preventDefault();

    if (!canManageStages()) {
      alert("Somente administradores podem alterar pipelines.");
      return;
    }

    const context = collectStageFormSubmissionContext();
    const {
      selectedType,
      selectedSubfunnelId,
      existingCustomType,
      isCreatingNewCustom,
      isEditingExistingCustom,
      desiredCustomType,
      payload
    } = context;
    if (!validateStageFormSubmissionContext(context)) return;

    if (false && payload.stage_type === "personalizado") {
      const savedType = await saveCustomStageType(payload.custom_stage_type);
      if (!savedType) return alert("Não foi possível salvar o novo tipo personalizado.");
    }

    const customTypePersisted = await persistCustomStageTypeChanges(context);
    if (!customTypePersisted) return;

    try {
      await persistStageFormSubmission(context);
    } catch (error) {
      return alert(`Erro ao salvar pipeline: ${formatSupabaseError(error)}`);
    }

    finalizeStageSaveMutation();
  }

  function collectNotificationSubmissionContext() {
    const targetType = String(els.notificationTargetType?.value || "").trim();
    const targetId = String(els.notificationTargetId?.value || "").trim();
    return {
      targetType,
      targetId
    };
  }

  function collectLeadNotificationContext(targetId) {
    const lead = state.leads.find((item) => item.id === targetId) || null;
    const existingMeta = getLeadMeta(lead?.notes || "", lead?.value || 0);
    const enabled = Boolean(els.leadNotificationEnabled?.checked);
    const nextReminder = enabled
      ? normalizeLeadReminder({
          type: "date",
          due_date: els.leadNotificationDate?.value || "",
          message: els.leadNotificationMessage?.value || ""
        })
      : null;
    return {
      lead,
      existingMeta,
      enabled,
      nextReminder
    };
  }

  function validateLeadNotificationContext(context = {}) {
    if (!context.lead || !canEditLeads(context.lead)) {
      alert("Seu perfil não tem permissão para alterar esta notificação.");
      return false;
    }
    if (leadHasStageNotification(context.lead)) {
      alert("Esta pipeline já possui uma notificação ativa. Neste lead não é possível manter outra notificação.");
      return false;
    }
    if (context.enabled && !context.nextReminder) {
      alert("Informe a data da notificação.");
      return false;
    }
    if (context.enabled && context.nextReminder?.due_date && context.nextReminder.due_date < getLocalIsoDate()) {
      alert(`A data da notificação do lead não pode ser anterior a ${formatDate(getLocalIsoDate())}.`);
      return false;
    }
    return true;
  }

  function buildLeadNotificationNotes(context = {}) {
    return serializeLeadMeta({
      ...context.existingMeta,
      reminder: context.nextReminder
    });
  }

  async function persistLeadNotificationChange(targetId, context = {}) {
    const nextNotes = buildLeadNotificationNotes(context);

    await executeCriticalMutation({
      snapshot: {
        leads: true
      },
      applyOptimistic: () => {
        applyLeadReminderLocally(targetId, context.nextReminder);
      },
      persist: async () => {
        const { error } = await state.supabase
          .from("leads")
          .update({ notes: nextNotes })
          .eq("id", targetId);
        if (error) throw error;
      },
      afterPersist: async () => {
        renderNotifications();
        notifyLiveSyncChange("workspace");
        await logChange(
          "update",
          "lead_notification",
          targetId,
          `Notificação do lead "${context.lead.name || "sem nome"}" foi ${context.nextReminder ? "atualizada" : "removida"} por ${getUserDisplayName()}.`,
          { before: context.existingMeta.reminder || null, after: context.nextReminder }
        );
      }
    });
  }

  async function submitLeadNotification(targetId) {
    const context = collectLeadNotificationContext(targetId);
    if (!validateLeadNotificationContext(context)) return false;

    try {
      await persistLeadNotificationChange(targetId, context);
    } catch (error) {
      alert(`Erro no Supabase: ${formatSupabaseError(error)}`);
      return false;
    }

    return true;
  }

  function collectStageNotificationContext(targetId) {
    const stage = getStageById(targetId);
    const previousReminder = getStageReminderConfig(targetId);
    const enabled = Boolean(els.stageNotificationEnabled?.checked);
    const nextReminder = enabled
      ? normalizeStageReminderConfig({
          days: els.stageNotificationDays?.value || 0,
          message: els.stageNotificationMessage?.value || ""
        })
      : null;
    const conflictingLeads = nextReminder
      ? state.leads.filter((lead) => String(lead?.stage_id || "").trim() === targetId && getLeadReminder(lead))
      : [];
    return {
      stage,
      previousReminder,
      enabled,
      nextReminder,
      conflictingLeads
    };
  }

  function validateStageNotificationContext(context = {}) {
    if (!context.stage || !canManageStages()) {
      alert("Somente administradores podem alterar esta notificação.");
      return false;
    }
    if (context.enabled && !context.nextReminder) {
      alert("Informe em quantos dias a notificação da pipeline deve aparecer.");
      return false;
    }
    return true;
  }

  async function persistConflictingLeadReminderCleanup(conflictingLeads = []) {
    for (const lead of conflictingLeads) {
      const meta = getLeadMeta(lead.notes || "", lead.value || 0);
      const { error } = await state.supabase
        .from("leads")
        .update({
          notes: serializeLeadMeta({
            ...meta,
            reminder: null
          })
        })
        .eq("id", lead.id);
      if (error) throw error;
    }
  }

  async function persistStageNotificationChange(targetId, context = {}) {
    await executeCriticalMutation({
      snapshot: {
        leads: true,
        funnelWorkspace: true,
        selectedLeadIds: true
      },
      applyOptimistic: () => {
        applyStageReminderConfigLocally(targetId, context.nextReminder);
        context.conflictingLeads.forEach((lead) => applyLeadReminderLocally(lead.id, null));
      },
      persist: async () => {
        if (state.funnelDataLoadedFromSupabase) {
          await persistStageReminderConfigToSupabase(targetId, context.nextReminder);
        }
        await persistConflictingLeadReminderCleanup(context.conflictingLeads);
      },
      afterPersist: async () => {
        renderNotifications();
        notifyLiveSyncChange("stage-reminder-config");
        await logChange(
          "update",
          "stage_notification",
          targetId,
          `Notificação da pipeline "${context.stage?.name || "sem nome"}" foi ${context.nextReminder ? "atualizada" : "removida"} por ${getUserDisplayName()}.`,
          { before: context.previousReminder, after: context.nextReminder }
        );
      }
    });
  }

  async function submitStageNotification(targetId) {
    const context = collectStageNotificationContext(targetId);
    if (!validateStageNotificationContext(context)) return false;

    try {
      await persistStageNotificationChange(targetId, context);
    } catch (error) {
      alert(`Erro ao salvar notificação da pipeline: ${formatSupabaseError(error)}`);
      return false;
    }

    return true;
  }

  function finalizeNotificationMutation() {
    closeNotificationModal();
    finalizeLocalMutation({
      notifyScope: null,
      refreshReason: "notification-save",
      cooldownMs: 1200
    });
  }

  async function submitNotification(event) {
    event.preventDefault();

    const { targetType, targetId } = collectNotificationSubmissionContext();
    if (!targetType || !targetId) return;

    if (targetType === "lead") {
      const savedLeadNotification = await submitLeadNotification(targetId);
      if (!savedLeadNotification) return;
    }

    if (targetType === "stage") {
      const savedStageNotification = await submitStageNotification(targetId);
      if (!savedStageNotification) return;
    }

    finalizeNotificationMutation();
  }

  function collectLeadMoveContext(leadId, stageId) {
    const lead = state.leads.find((item) => item.id === leadId) || null;
    const stage = state.stages.find((item) => item.id === stageId) || null;
    const fromStage = state.stages.find((item) => item.id === lead?.stage_id) || null;
    const leadMeta = getLeadMeta(lead?.notes || "", lead?.value || 0);
    const nextStageTracking = normalizeLeadStageTracking(leadMeta.stage_tracking || {});
    nextStageTracking[stageId] = getLocalIsoDate();
    const nextNotes = serializeLeadMeta({
      ...leadMeta,
      stage_tracking: nextStageTracking
    });
    const previousLead = lead ? { ...lead } : null;
    const previousAssignedSubfunnelId = String(state.funnelWorkspace?.leadAssignments?.[lead?.id] || "").trim();
    const targetSubfunnelId = String(state.funnelWorkspace?.stageAssignments?.[stageId] || "").trim() || previousAssignedSubfunnelId;
    const shouldPersistLeadSubfunnelChange = Boolean(
      targetSubfunnelId && targetSubfunnelId !== previousAssignedSubfunnelId
    );

    return {
      lead,
      stage,
      fromStage,
      leadMeta,
      nextStageTracking,
      nextNotes,
      previousLead,
      previousAssignedSubfunnelId,
      targetSubfunnelId,
      shouldPersistLeadSubfunnelChange
    };
  }

  function applyLeadMoveOptimistic(context = {}, stageId) {
    updateLeadsLocallyByIds([context.lead.id], (item) => ({
      ...item,
      stage_id: stageId,
      notes: context.nextNotes
    }));
    if (context.shouldPersistLeadSubfunnelChange) {
      assignLeadToSubfunnel(context.lead.id, context.targetSubfunnelId, { deferSync: true });
      state.suppressFunnelSync = true;
      writeStoredFunnelWorkspace();
    }
  }

  async function persistLeadMoveRecord(context = {}, stageId) {
    const { error } = await state.supabase
      .from("leads")
      .update({
        stage_id: stageId,
        notes: context.nextNotes
      })
      .eq("id", context.lead.id);
    if (error) throw error;

    if (context.shouldPersistLeadSubfunnelChange && state.funnelDataLoadedFromSupabase) {
      await persistLeadAssignmentsToSupabase([context.lead.id], context.targetSubfunnelId);
    }
  }

  async function finalizeLeadMovePersistence(context = {}) {
    if (context.shouldPersistLeadSubfunnelChange && state.funnelDataLoadedFromSupabase) {
      notifyLiveSyncChange("funnel-workspace");
    }
  }

  function validateLeadMoveContext(context = {}, stageId) {
    if (!context.lead || !context.stage || context.lead.stage_id === stageId) return false;
    if (!canMoveLeads(context.lead)) {
      alert("Seu perfil não tem permissão de edição neste funil.");
      return false;
    }
    return true;
  }

  async function persistLeadMove(context = {}, stageId) {
    registerPendingLeadMoveCommit(context.lead?.id, {
      stageId,
      subfunnelId: context.targetSubfunnelId,
      notes: context.nextNotes
    });

    try {
      await executeCriticalMutation({
        snapshot: {
          leads: true,
          funnelWorkspace: true,
          selectedLeadIds: true
        },
        optimisticSyncSelectedLeadIds: false,
        optimisticWriteCache: false,
        applyOptimistic: () => applyLeadMoveOptimistic(context, stageId),
        persist: async () => persistLeadMoveRecord(context, stageId),
        afterPersist: async () => {
          scheduleAppDataCacheWrite(160);
          await finalizeLeadMovePersistence(context);
        }
      });
    } catch (error) {
      clearPendingLeadMoveCommits([context.lead?.id]);
      throw error;
    }
  }

  async function logLeadMoveChange(context = {}) {
    await logChange(
      "move_stage",
      "lead",
      context.lead.id,
      `Lead "${context.lead.name}" foi movido de "${context.fromStage?.name || "-"}" para "${context.stage.name}" por ${getUserDisplayName()}.`,
      {
        lead_id: context.lead.id,
        from_stage_id: context.fromStage?.id || null,
        from_stage_name: context.fromStage?.name || null,
        to_stage_id: context.stage.id,
        to_stage_name: context.stage.name
      }
    );
  }

  async function moveLeadToStage(leadId, stageId) {
    const context = collectLeadMoveContext(leadId, stageId);
    if (!validateLeadMoveContext(context, stageId)) return;

    try {
      await persistLeadMove(context, stageId);
    } catch (error) {
      return alert(`Erro no Supabase: ${formatSupabaseError(error)}`);
    }

    queueLocalConsistencyRefresh("lead-move", 900);

    void logLeadMoveChange(context).catch((historyError) => {
      console.error("Erro ao registrar movimentação de lead:", historyError);
    });
  }

  async function deleteLead(id) {
    const context = collectSingleLeadDeleteContext(id);
    if (!validateSingleLeadDeleteContext(context)) return;

    deletingLeadIds.add(context.normalizedId);
    let error = null;
    try {
      ({ error } = await executeLeadDeleteRequest([context.normalizedId]));
    } finally {
      deletingLeadIds.delete(context.normalizedId);
    }

    if (error) return alert(`Erro no Supabase: ${formatSupabaseError(error)}`);

    await finalizeDeletedLeadsLocally([context.normalizedId], {
      refreshReason: "lead-delete",
      cooldownMs: 1200,
      localErrorPrefix: "Erro ao finalizar exclusão local do lead",
      afterPersist: async () => {
        await logChange(
          "delete",
          "lead",
          context.normalizedId,
          `Lead "${context.lead.name}" foi excluído por ${getUserDisplayName()}.`,
          context.lead
        );
      }
    });
  }

  async function editStage(id) {
    if (!canManageStages()) {
      alert("Somente administradores podem editar pipelines.");
      return;
    }
    const stage = state.stages.find((x) => x.id === id);
    if (!stage) return;
    openStageModal(stage);
  }

  function collectLegacyStageDeleteContext(id) {
    const availableStages = isFunnelDetailActive() ? getScopedStages() : state.stages;
    const stage = availableStages.find((item) => item.id === id) || null;
    const fallback = availableStages.find((item) => item.id !== id) || null;
    const affectedLeads = state.leads.filter((lead) => lead.stage_id === id);
    return {
      availableStages,
      stage,
      fallback,
      affectedLeads
    };
  }

  function validateLegacyStageDeleteContext(context = {}) {
    if (!context.stage) return false;
    if (!confirm(`Excluir a etapa "${context.stage.name}"?`)) return false;
    if (!canManageStages()) {
      requestAdminAuthorization({
        requestType: "delete_stage",
        title: "Solicitar exclusao de pipeline",
        description: `Voce nao tem permissao para excluir a etapa "${context.stage.name}". Sua solicitacao sera enviada para o administrador.`,
        entityType: "stage",
        entityId: context.stage.id,
        payload: {
          stage_id: context.stage.id,
          stage_name: context.stage.name
        }
      });
      return false;
    }
    if (!context.fallback) {
      alert("Você precisa manter ao menos uma etapa.");
      return false;
    }
    return true;
  }

  async function moveLegacyStageLeadsToFallback(context = {}) {
    if (!context.affectedLeads?.length) return true;

    const { error: leadError } = await state.supabase
      .from("leads")
      .update({ stage_id: context.fallback.id })
      .eq("stage_id", context.stage.id);

    if (leadError) {
      alert(leadError.message);
      return false;
    }

    await logChange(
      "bulk_move_stage",
      "lead",
      null,
      `${context.affectedLeads.length} lead(s) foram movidos automaticamente de "${context.stage.name}" para "${context.fallback.name}" porque a etapa foi excluída por ${getUserDisplayName()}.`,
      {
        from_stage_id: context.stage.id,
        from_stage_name: context.stage.name,
        to_stage_id: context.fallback.id,
        to_stage_name: context.fallback.name,
        affected_count: context.affectedLeads.length
      }
    );

    return true;
  }

  async function deleteStage(id) {
    const context = collectLegacyStageDeleteContext(id);
    if (!validateLegacyStageDeleteContext(context)) return;

    const leadsMoved = await moveLegacyStageLeadsToFallback(context);
    if (!leadsMoved) return;

    const { error } = await state.supabase
      .from("stages")
      .delete()
      .eq("id", id);

    if (error) return alert(`Erro no Supabase: ${error.message}`);
    moveLeadsToStageLocally([id], context.fallback.id);
    removeStagesLocally([id]);

    await logChange(
      "delete",
      "stage",
      context.stage.id,
      `Etapa "${context.stage.name}" foi excluída por ${getUserDisplayName()}.`,
      context.stage
    );

    finalizeLocalMutation({
      notifyScope: "funnel-workspace",
      refreshReason: "stage-delete-legacy",
      cooldownMs: 1500
    });
  }

  async function createStageForSubfunnel(payload, subfunnelId, options = {}) {
    const { data, error } = await state.supabase.from("stages").insert([payload]).select().single();
    if (error) throw error;
    const normalizedStage = upsertStageLocally(data);
    if (data?.id) assignStageToSubfunnel(data.id, subfunnelId, { deferSync: options.deferSync === true });
    return normalizedStage;
  }

  function findMatchingStageInSubfunnelByName(stageName, subfunnelId, excludeStageId = "") {
    const normalizedName = normalizeComparisonText(stageName || "");
    const normalizedSubfunnelId = String(subfunnelId || "").trim();
    const normalizedExcludeStageId = String(excludeStageId || "").trim();
    if (!normalizedName || !normalizedSubfunnelId) return null;

    return getStagesForSubfunnel(normalizedSubfunnelId).find((stage) =>
      String(stage?.id || "").trim() !== normalizedExcludeStageId
      && normalizeComparisonText(stage?.name || "") === normalizedName
    ) || null;
  }

  function getEquivalentStagesInSubfunnel(stageOrStageId) {
    const stage = typeof stageOrStageId === "string"
      ? state.stages.find((item) => item.id === stageOrStageId)
      : stageOrStageId;
    if (!stage?.id) return [];

    const scope = getStageScope(stage.id);
    const normalizedName = normalizeComparisonText(stage.name || "");
    if (!scope?.subfunnelId || !normalizedName) return stage ? [stage] : [];

    return getStagesForSubfunnel(scope.subfunnelId).filter((item) =>
      normalizeComparisonText(item?.name || "") === normalizedName
    );
  }

  async function removeStagesByIds(stageIds = []) {
    const normalizedStageIds = [...new Set((Array.isArray(stageIds) ? stageIds : [])
      .map((id) => String(id || "").trim())
      .filter(Boolean))];
    if (!normalizedStageIds.length) return 0;

    for (const stageId of normalizedStageIds) {
      const { error } = await state.supabase
        .from("stages")
        .delete()
        .eq("id", stageId);
      if (error) throw error;

      await deleteStageAssignmentFromSupabase(stageId);
      await persistStageReminderConfigToSupabase(stageId, null);
    }

    return removeStagesLocally(normalizedStageIds);
  }

  async function cleanupDuplicateStagesInSubfunnel(subfunnelId, stageName, options = {}) {
    const normalizedSubfunnelId = String(subfunnelId || "").trim();
    const normalizedStageName = normalizeComparisonText(stageName || "");
    const keepStageId = String(options.keepStageId || "").trim();
    const removeAllWhenNoLeads = options.removeAllWhenNoLeads === true;
    if (!normalizedSubfunnelId || !normalizedStageName || !state.supabase) return 0;

    const matchingStages = getStagesForSubfunnel(normalizedSubfunnelId).filter((stage) =>
      normalizeComparisonText(stage?.name || "") === normalizedStageName
    );
    if (!matchingStages.length) return 0;

    const leadCountByStageId = new Map();
    state.leads.forEach((lead) => {
      const stageId = String(lead?.stage_id || "").trim();
      leadCountByStageId.set(stageId, (leadCountByStageId.get(stageId) || 0) + 1);
    });

    const totalLeadCount = matchingStages.reduce((sum, stage) => sum + (leadCountByStageId.get(String(stage.id || "").trim()) || 0), 0);
    if (removeAllWhenNoLeads && totalLeadCount === 0) {
      return removeStagesByIds(matchingStages.map((stage) => stage.id));
    }
    if (matchingStages.length <= 1) return 0;

    const keeper = keepStageId
      ? matchingStages.find((stage) => String(stage?.id || "").trim() === keepStageId)
      : null;
    const sortedStages = [...matchingStages].sort((a, b) => {
      const leadDiff = (leadCountByStageId.get(String(b?.id || "").trim()) || 0) - (leadCountByStageId.get(String(a?.id || "").trim()) || 0);
      if (leadDiff !== 0) return leadDiff;
      const positionA = Number(a?.position);
      const positionB = Number(b?.position);
      if (positionA !== positionB) return positionA - positionB;
      return String(a?.id || "").localeCompare(String(b?.id || ""));
    });
    const effectiveKeeper = keeper || sortedStages[0] || null;
    if (!effectiveKeeper) return 0;

    const removableStageIds = matchingStages
      .filter((stage) => String(stage?.id || "").trim() !== String(effectiveKeeper.id || "").trim())
      .filter((stage) => (leadCountByStageId.get(String(stage?.id || "").trim()) || 0) === 0)
      .map((stage) => stage.id);

    if (!removableStageIds.length) return 0;
    return removeStagesByIds(removableStageIds);
  }

  async function deleteStageAssignmentFromSupabase(stageId) {
    const normalizedStageId = String(stageId || "").trim();
    if (!normalizedStageId || !state.supabase) return;
    const { error } = await state.supabase
      .from("crm_stage_subfunnel_assignments")
      .delete()
      .eq("stage_id", normalizedStageId);
    if (error && !isMissingRelationError(error)) throw error;
  }

  async function mergeStageIntoExistingTarget({
    sourceStage,
    targetStage,
    targetSubfunnelId,
    payload = null
  } = {}) {
    if (!sourceStage?.id || !targetStage?.id || !targetSubfunnelId) return false;

    const normalizedTargetSubfunnelId = String(targetSubfunnelId || "").trim();
    const sourceScope = getStageScope(sourceStage.id);
    const previousSourceSubfunnelId = String(sourceScope?.subfunnelId || "").trim();
    const nextTargetPayload = payload ? {
      name: normalizeStageName(payload.name || targetStage.name || sourceStage.name || "Pipeline"),
      color: sanitizeHexColor(payload.color || targetStage.color || sourceStage.color),
      stage_type: ["andamento", "fechado", "cancelado", "espera", "personalizado"].includes(payload.stage_type)
        ? payload.stage_type
        : (targetStage.stage_type || sourceStage.stage_type || "andamento"),
      custom_stage_type: payload.stage_type === "personalizado"
        ? (payload.custom_stage_type || targetStage.custom_stage_type || sourceStage.custom_stage_type || null)
        : null
    } : null;

    if (nextTargetPayload) {
      const { error: updateTargetError } = await state.supabase
        .from("stages")
        .update(nextTargetPayload)
        .eq("id", targetStage.id);
      if (updateTargetError) throw updateTargetError;
    }

    const sourceLeadIds = state.leads
      .filter((lead) => String(lead?.stage_id || "").trim() === String(sourceStage.id || "").trim())
      .map((lead) => String(lead?.id || "").trim())
      .filter(Boolean);

    for (const chunk of chunkArray(sourceLeadIds, 200)) {
      const { error: moveLeadError } = await state.supabase
        .from("leads")
        .update({ stage_id: targetStage.id })
        .in("id", chunk);
      if (moveLeadError) throw moveLeadError;
    }

    if (sourceLeadIds.length) {
      await persistLeadAssignmentsToSupabase(sourceLeadIds, normalizedTargetSubfunnelId);
    }

    const sourceReminder = getStageReminderConfig(sourceStage.id);
    const targetReminder = getStageReminderConfig(targetStage.id);
    const shouldCopyReminder = Boolean(sourceReminder && !targetReminder);
    if (shouldCopyReminder) {
      await persistStageReminderConfigToSupabase(targetStage.id, sourceReminder);
    }

    const { error: deleteStageError } = await state.supabase
      .from("stages")
      .delete()
      .eq("id", sourceStage.id);
    if (deleteStageError) throw deleteStageError;

    await deleteStageAssignmentFromSupabase(sourceStage.id);
    await persistStageReminderConfigToSupabase(sourceStage.id, null);

    const normalizedTargetStage = normalizeStage({
      ...targetStage,
      ...(nextTargetPayload || {})
    });

    moveLeadsToStageLocally([sourceStage.id], targetStage.id);
    removeStagesLocally([sourceStage.id]);
    upsertStageLocally(normalizedTargetStage);
    assignStageToSubfunnel(targetStage.id, normalizedTargetSubfunnelId, { deferSync: true });
    if (shouldCopyReminder) {
      applyStageReminderConfigLocally(targetStage.id, sourceReminder);
    }
    sourceLeadIds.forEach((leadId) => assignLeadToSubfunnel(leadId, normalizedTargetSubfunnelId, { deferSync: true }));
    if (previousSourceSubfunnelId && previousSourceSubfunnelId !== normalizedTargetSubfunnelId) {
      await cleanupDuplicateStagesInSubfunnel(previousSourceSubfunnelId, sourceStage.name || nextTargetPayload?.name || "", {
        removeAllWhenNoLeads: true
      });
    }
    await cleanupDuplicateStagesInSubfunnel(normalizedTargetSubfunnelId, nextTargetPayload?.name || targetStage.name || sourceStage.name || "", {
      keepStageId: targetStage.id
    });
    state.suppressFunnelSync = true;
    writeStoredFunnelWorkspace();

    await logChange(
      "merge",
      "stage",
      targetStage.id,
      `Pipeline "${sourceStage.name}" foi consolidada em "${normalizedTargetStage.name}" por ${getUserDisplayName()}.`,
      {
        source_stage_id: sourceStage.id,
        source_stage_name: sourceStage.name,
        target_stage_id: targetStage.id,
        target_stage_name: normalizedTargetStage.name,
        target_subfunnel_id: normalizedTargetSubfunnelId,
        moved_lead_count: sourceLeadIds.length
      }
    );

    notifyLiveSyncChange("funnel-workspace");
    return true;
  }

  async function ensureFallbackStageForStageDelete(stage) {
    const existingFallback = getNearestStageForDeletion(stage.id);
    if (existingFallback) return existingFallback;

    const scope = getStageScope(stage.id);
    const targetSubfunnelId = scope.subfunnelId;
    if (!targetSubfunnelId) return null;

    let name = "Pipeline padrão";
    const targetStages = getStagesForSubfunnel(targetSubfunnelId);
    let suffix = 2;
    while (targetStages.some((item) => normalizeComparisonText(item.name || "") === normalizeComparisonText(name))) {
      name = `Pipeline padrão ${suffix}`;
      suffix += 1;
    }

    const payload = {
      name,
      color: sanitizeHexColor(stage.color),
      stage_type: "andamento",
      custom_stage_type: null,
      position: Number(stage.position ?? state.stages.length),
      created_by: state.currentUser?.id || stage.created_by || null
    };

    const fallback = await createStageForSubfunnel(payload, targetSubfunnelId);
    await logChange(
      "insert",
      "stage",
      fallback.id,
      `Pipeline padrão "${fallback.name}" foi criada automaticamente por ${getUserDisplayName()} durante a exclusão de "${stage.name}".`,
      { source_stage_id: stage.id, source_stage_name: stage.name, fallback_stage: fallback }
    );
    return fallback;
  }

  async function duplicateStageLeads(sourceStage, targetStage, targetSubfunnelId, options = {}) {
    const sourceLeads = state.leads.filter((lead) => lead.stage_id === sourceStage.id);
    if (!sourceLeads.length) return 0;

    const insertRows = sourceLeads.map((lead) => {
      const meta = getLeadMeta(lead?.notes || "", lead?.value || 0);
      const nextTracking = normalizeLeadStageTracking(meta.stage_tracking || {});
      nextTracking[targetStage.id] = getLocalIsoDate();

      return {
        assigned_to: lead.assigned_to || null,
        created_by: lead.created_by || state.currentUser?.id || null,
        stage_id: targetStage.id,
        name: lead.name,
        contact: lead.contact,
        owner: lead.owner_raw || lead.owner || "",
        value: Number(lead.value || 0) || 0,
        start_date: normalizeDateInput(lead.start_date || "") || String(lead.start_date || "").trim(),
        social_source: lead.social_source || "",
        traffic_type: lead.traffic_type || "",
        notes: serializeLeadMeta({
          ...meta,
          reminder: meta.reminder || null,
          stage_tracking: nextTracking
        })
      };
    });

    const insertedIds = [];
    for (const chunk of chunkArray(insertRows, 50)) {
      const { data, error } = await state.supabase
        .from("leads")
        .insert(chunk)
        .select();

      if (error) throw error;

      (data || []).forEach((row) => {
        if (row?.id) {
          insertedIds.push(row.id);
          upsertLeadLocally(row);
          assignLeadToSubfunnel(row.id, targetSubfunnelId, { deferSync: options.deferSync === true });
        }
      });
    }

    await logChange(
      "duplicate_stage_leads",
      "stage",
      targetStage.id,
      `${insertRows.length} lead(s) da pipeline "${sourceStage.name}" foram duplicados por ${getUserDisplayName()} para "${targetStage.name}".`,
      {
        source_stage_id: sourceStage.id,
        source_stage_name: sourceStage.name,
        target_stage_id: targetStage.id,
        target_stage_name: targetStage.name,
        duplicated_lead_count: insertRows.length
      }
    );

    return insertedIds;
  }

  function buildStageDuplicatePayload(context = {}) {
    return {
      name: getNextStageDuplicateName(context.sourceStage?.name, context.targetSubfunnelId),
      color: sanitizeHexColor(context.sourceStage?.color),
      stage_type: context.sourceStage?.stage_type || "andamento",
      custom_stage_type: context.sourceStage?.custom_stage_type || null,
      position: state.stages.length,
      created_by: state.currentUser?.id || context.sourceStage?.created_by || null
    };
  }

  async function logStageDuplicateCreation(context = {}, createdStage = null) {
    if (!createdStage?.id) return;
    await logChange(
      "duplicate",
      "stage",
      createdStage.id,
      `Pipeline "${context.sourceStage.name}" foi duplicada por ${getUserDisplayName()} como "${createdStage.name}".`,
      {
        source_stage_id: context.sourceStage.id,
        source_stage_name: context.sourceStage.name,
        target_stage_id: createdStage.id,
        target_stage_name: createdStage.name,
        target_subfunnel_id: context.targetSubfunnelId,
        duplicate_mode: context.duplicateMode
      }
    );
  }

  async function duplicateStageWithOptionalLeads(context = {}) {
    const payload = buildStageDuplicatePayload(context);
    const createdStage = await createStageForSubfunnel(payload, context.targetSubfunnelId, { deferSync: true });
    await logStageDuplicateCreation(context, createdStage);

    let duplicatedLeadIds = [];
    if (context.duplicateMode === "stage_with_leads") {
      duplicatedLeadIds = await duplicateStageLeads(context.sourceStage, createdStage, context.targetSubfunnelId, { deferSync: true });
    }

    return {
      createdStage,
      duplicatedLeadIds
    };
  }

  async function persistStageDuplicateAssignments(context = {}, createdStage = null, duplicatedLeadIds = []) {
    return persistWorkspaceAssignmentsSafely({
      stageIds: createdStage?.id ? [createdStage.id] : [],
      leadIds: duplicatedLeadIds,
      subfunnelId: context.targetSubfunnelId,
      notify: true,
      notifyScope: "funnel-workspace"
    });
  }

  function finalizeStageDuplicateMutation() {
    closeStageDuplicateModal();
    finalizeLocalMutation({
      notifyScope: "funnel-workspace",
      refreshReason: "stage-duplicate",
      cooldownMs: 1500
    });
  }

  async function submitStageDuplicate(event) {
    event.preventDefault();
    if (!canManageStages()) {
      alert("Somente administradores podem duplicar pipelines.");
      return;
    }

    const context = collectStageDuplicateSubmissionContext();
    if (!validateStageDuplicateSubmissionContext(context)) return;

    try {
      const { createdStage, duplicatedLeadIds } = await duplicateStageWithOptionalLeads(context);
      await persistStageDuplicateAssignments(context, createdStage, duplicatedLeadIds);
      finalizeStageDuplicateMutation();
    } catch (error) {
      alert(`Erro ao duplicar pipeline: ${formatSupabaseError(error)}`);
    }
  }

  function getStageDeleteStrategyContext(stageId, options = {}) {
    const stage = state.stages.find((item) => item.id === stageId) || null;
    const deleteWithLeads = Boolean(options.deleteWithLeads);
    const requestedTargetStageId = String(options.targetStageId || "").trim();
    const equivalentStages = stage ? getEquivalentStagesInSubfunnel(stage) : [];
    const stageIdsToDelete = [...new Set(equivalentStages.map((item) => String(item.id || "").trim()).filter(Boolean))];
    const affectedLeads = state.leads.filter((lead) => stageIdsToDelete.includes(String(lead.stage_id || "").trim()));
    return {
      stage,
      deleteWithLeads,
      requestedTargetStageId,
      equivalentStages,
      stageIdsToDelete,
      affectedLeads
    };
  }

  function requestStageDeleteAuthorization(context = {}) {
    if (!context.stage) return;
    requestAdminAuthorization({
      requestType: "delete_stage",
      title: "Solicitar exclusao de pipeline",
      description: `Voce nao tem permissao para excluir a etapa "${context.stage.name}". Sua solicitacao sera enviada para o administrador.`,
      entityType: "stage",
      entityId: context.stage.id,
      payload: {
        stage_id: context.stage.id,
        stage_name: context.stage.name,
        delete_with_leads: context.deleteWithLeads,
        target_stage_id: context.requestedTargetStageId || null
      }
    });
  }

  async function resolveStageDeleteTarget(context = {}) {
    let targetStageId = context.requestedTargetStageId || "";
    if (!context.deleteWithLeads && context.affectedLeads?.length && !targetStageId) {
      const fallback = await ensureFallbackStageForStageDelete(context.stage);
      targetStageId = fallback?.id || "";
    }

    const targetStage = targetStageId
      ? state.stages.find((item) => item.id === targetStageId) || null
      : null;

    return {
      targetStageId,
      targetStage
    };
  }

  async function deleteStageLeadsWithStrategy(context = {}, targetStage = null) {
    if (!context.affectedLeads?.length) return true;

    if (context.deleteWithLeads) {
      return deleteStageLeadsAndLog(context);
    }

    return moveStageLeadsToDeleteTargetAndLog(context, targetStage);
  }

  async function deleteStageLeadsAndLog(context = {}) {
    const { error: deleteLeadError } = await deleteLeadsByIds(context.affectedLeads.map((lead) => lead.id));
    if (deleteLeadError) {
      alert(`Erro ao excluir leads da pipeline: ${formatSupabaseError(deleteLeadError)}`);
      return false;
    }

    await logChange(
      "bulk_delete_stage_leads",
      "lead",
      null,
      `${context.affectedLeads.length} lead(s) da pipeline "${context.stage.name}" foram excluídos por ${getUserDisplayName()}.`,
      {
        stage_id: context.stage.id,
        stage_name: context.stage.name,
        deleted_lead_count: context.affectedLeads.length
      }
    );
    return true;
  }

  async function moveStageLeadsToDeleteTargetAndLog(context = {}, targetStage = null) {
    for (const sourceStageId of context.stageIdsToDelete) {
      const stageLeadIds = context.affectedLeads
        .filter((lead) => String(lead.stage_id || "").trim() === sourceStageId)
        .map((lead) => String(lead.id || "").trim())
        .filter(Boolean);
      if (!stageLeadIds.length) continue;

      const { error: moveError } = await state.supabase
        .from("leads")
        .update({ stage_id: targetStage.id })
        .in("id", stageLeadIds);

      if (moveError) {
        alert(`Erro ao mover leads da pipeline: ${formatSupabaseError(moveError)}`);
        return false;
      }
    }

    await logChange(
      "bulk_move_stage",
      "lead",
      null,
      `${context.affectedLeads.length} lead(s) foram movidos automaticamente de "${context.stage.name}" para "${targetStage.name}" porque a pipeline foi excluída por ${getUserDisplayName()}.`,
      {
        from_stage_id: context.stage.id,
        from_stage_name: context.stage.name,
        to_stage_id: targetStage.id,
        to_stage_name: targetStage.name,
        affected_count: context.affectedLeads.length
      }
    );
    return true;
  }

  function applyStageDeleteLocalState(context = {}, targetStage = null) {
    if (context.deleteWithLeads && context.affectedLeads?.length) {
      removeLeadsLocally(context.affectedLeads.map((lead) => lead.id));
    }

    if (!context.deleteWithLeads && context.affectedLeads?.length && targetStage?.id) {
      moveLeadsToStageLocally(context.stageIdsToDelete, targetStage.id);
      context.affectedLeads.forEach((lead) => {
        const assignedSubfunnelId = state.funnelWorkspace?.leadAssignments?.[lead.id];
        if (assignedSubfunnelId) assignLeadToSubfunnel(lead.id, assignedSubfunnelId, { deferSync: true });
      });
    }
  }

  async function persistStageDeleteStages(context = {}) {
    await removeStagesByIds(context.stageIdsToDelete);
    state.suppressFunnelSync = true;
    writeStoredFunnelWorkspace();
  }

  function buildStageDeleteHistoryPayload(context = {}, targetStage = null) {
    return {
      ...context.stage,
      deleted_stage_ids: context.stageIdsToDelete,
      delete_with_leads: context.deleteWithLeads,
      moved_to_stage_id: targetStage?.id || null
    };
  }

  async function logStageDeleteCompletion(context = {}, targetStage = null) {
    await logChange(
      "delete",
      "stage",
      context.stage.id,
      `Etapa "${context.stage.name}" foi excluída por ${getUserDisplayName()}.`,
      buildStageDeleteHistoryPayload(context, targetStage)
    );
  }

  function finalizeStageDeleteMutation() {
    closeStageDeleteModal();
    finalizeLocalMutation({
      notifyScope: "funnel-workspace",
      refreshReason: "stage-delete",
      cooldownMs: 1500
    });
  }

  async function deleteStageWithStrategy(stageId, options = {}) {
    const context = getStageDeleteStrategyContext(stageId, options);
    if (!context.stage) return;

    if (!canManageStages()) {
      requestStageDeleteAuthorization(context);
      return;
    }

    const { targetStage } = await resolveStageDeleteTarget(context);

    if (!context.deleteWithLeads && context.affectedLeads.length && !targetStage) {
      alert("Não foi possível definir a pipeline de destino para os leads.");
      return;
    }

    const leadsHandled = await deleteStageLeadsWithStrategy(context, targetStage);
    if (!leadsHandled) {
      return;
    }

    try {
      await persistStageDeleteStages(context);
    } catch (error) {
      alert(`Erro ao excluir pipeline: ${formatSupabaseError(error)}`);
      return;
    }

    applyStageDeleteLocalState(context, targetStage);
    await logStageDeleteCompletion(context, targetStage);
    finalizeStageDeleteMutation();
  }

  function collectStageDeleteSubmissionContext() {
    const stageId = String(els.stageDeleteSourceId?.value || "").trim();
    const mode = document.querySelector('input[name="stageDeleteMode"]:checked')?.value || "move_leads";
    const targetStageId = String(els.stageDeleteTargetStage?.value || "").trim();
    const stage = state.stages.find((item) => item.id === stageId) || null;
    return {
      stageId,
      mode,
      targetStageId,
      stage
    };
  }

  function validateStageDeleteSubmissionContext(context = {}) {
    if (!context.stage) {
      alert("Pipeline não encontrada.");
      return false;
    }
    return true;
  }

  function confirmStageDeleteSubmission(context = {}) {
    const actionLabel = context.mode === "delete_with_leads"
      ? `excluir a pipeline "${context.stage.name}" com todos os leads`
      : `excluir a pipeline "${context.stage.name}" e mover os leads`;
    return confirm(`Tem certeza que deseja ${actionLabel}?`);
  }

  async function submitStageDelete(event) {
    event.preventDefault();
    const context = collectStageDeleteSubmissionContext();
    if (!validateStageDeleteSubmissionContext(context)) return;
    if (!confirmStageDeleteSubmission(context)) return;

    await deleteStageWithStrategy(context.stageId, {
      deleteWithLeads: context.mode === "delete_with_leads",
      targetStageId: context.targetStageId
    });
  }

  async function sendResetPasswordEmail() {
    const email = $("loginEmail").value.trim();
    if (!email) return setMessage(els.authMessage, "Digite seu e-mail para recuperar a senha.", true);

    const redirectTo = getAuthRedirectUrl("?type=recovery");

    if (!redirectTo) {
      return setMessage(
        els.authMessage,
        "Abra o CRM por uma URL http/https para usar e-mails de autenticacao. Arquivo local nao funciona com redirect de autenticacao.",
        true
      );
    }

    const { error } = await state.supabase.auth.resetPasswordForEmail(email, { redirectTo });
    if (error) return setMessage(els.authMessage, getAuthErrorMessage(error, "Nao foi possivel enviar o link de recuperacao."), true);

    setMessage(els.authMessage, "Enviamos o link de recuperação. Verifique seu e-mail.");
  }

  async function updateRecoveredPassword() {
    const newPassword = $("newPassword").value.trim();
    if (!newPassword) return setMessage(els.authMessage, "Digite a nova senha.", true);

    const { error } = await state.supabase.auth.updateUser({ password: newPassword });
    if (error) return setMessage(els.authMessage, getAuthErrorMessage(error, "Nao foi possivel atualizar a senha."), true);

    $("newPassword").value = "";
    clearAuthRedirectState();
    setPasswordRecoveryMode(false);
    setMessage(els.authMessage, "Senha atualizada com sucesso. Faca login.");
    await state.supabase.auth.signOut();
    showScreen("authScreen");
  }

  function bindView(name, options = {}) {
    if (name === "solicitacoes") {
      name = "equipe";
    }

    if (!isViewAllowed(name)) {
      name = getDefaultAllowedView();
    }

    const currentView = state.activeView;
    const enteringAdminOverlay = isAdminOverlayView(name);
    const leavingAdminOverlay = isAdminOverlayView(currentView) && !enteringAdminOverlay;

    if (enteringAdminOverlay && !isAdminOverlayView(currentView)) {
      state.adminOverlayReturnState = captureAdminOverlayReturnState();
    } else if (leavingAdminOverlay) {
      state.adminOverlayReturnState = null;
    }

    setShellTab("crm");
    if (name === "funil" && options.resetFunnelDetail !== false) {
      state.activeFunnelId = null;
      state.activeSubfunnelId = null;
    }
    if (name === "funil") {
      if (typeof options.keepFunnelSidebarOpen === "boolean") {
        state.funnelSidebarOpen = options.keepFunnelSidebarOpen;
      } else if (!options.preserveFunnelSidebarState) {
        state.funnelSidebarOpen = true;
      }
    } else if (!options.keepFunnelSidebarOpen) {
      state.funnelSidebarOpen = false;
    }
    state.activeView = name;
    els.app?.classList.toggle("admin-overlay-mode", enteringAdminOverlay);
    syncResponsiveHeaderState();
    syncPrimaryMenuState();

    document.querySelectorAll(".view").forEach((view) => {
      view.classList.toggle("active-view", view.id === `view-${name}`);
    });
    syncFunnelSidebarVisibility();

    const activeFunnel = getFunnelById(state.activeFunnelId);
    const activeSubfunnel = getSubfunnelById(state.activeSubfunnelId);
    const activeFunnelGroup = activeFunnel?.group_id ? getGroupById(activeFunnel.group_id) : null;
    const titles = {
      funil: isFunnelDetailActive()
        ? [
            activeSubfunnel?.name || "Pipeline de Vendas",
            activeFunnel ? `${activeFunnel.name}` : "Gerencie os leads por etapa compartilhada."
          ]
        : activeFunnel
          ? [activeFunnel.name, ""]
          : ["Funis", "Escolha um funil na lateral para visualizar os cards dos subfunis."],
      leads: ["Lista de Leads", "Visualize todos os leads cadastrados."],
      relatorios: ["Relatorios", "Acompanhe os resultados do CRM compartilhado."],
      equipe: ["Pessoas e Acessos", "Gerencie solicitacoes de acesso, alteracoes administrativas e a equipe ativa no CRM."],
      estrutura: ["Estrutura", "Edite pipelines e origens de lead usadas no CRM."],
      configuracoes: ["Configuracao", "Consulte o historico administrativo do CRM."]
    };
    const viewsWithTopbarControls = new Set(["funil", "leads", "relatorios"]);
    const shouldShowTopbarControls = viewsWithTopbarControls.has(name) && (name !== "funil" || isFunnelDetailActive());
    const shouldHideTopbar = enteringAdminOverlay || (name === "funil" && !state.activeFunnelId && !state.activeSubfunnelId);

    els.pageTitle.textContent = titles[name][0];
    if (name === "funil" && activeFunnelGroup) {
      const subtitleParts = [];
      if (titles[name][1]) {
        subtitleParts.push(`<span>${escapeHtml(titles[name][1])}</span>`);
      }
      subtitleParts.push(`<span class="topbar-funnel-group-note">Grupo: ${escapeHtml(activeFunnelGroup.name)}</span>`);
      els.pageSubtitle.innerHTML = subtitleParts.join("");
    } else {
      els.pageSubtitle.textContent = titles[name][1];
    }
    els.topbar?.classList.toggle("hidden", shouldHideTopbar);
    document.querySelector(".topbar-actions")?.classList.toggle("hidden", !shouldShowTopbarControls);
    els.editCurrentFunnelBtn?.classList.toggle("hidden", name !== "funil" || !activeFunnel || isFunnelDetailActive());
    els.deleteCurrentFunnelBtn?.classList.toggle("hidden", name !== "funil" || !activeFunnel || isFunnelDetailActive());
    if (!shouldShowTopbarControls) {
      setDesktopFiltersOpen(false);
    }
    els.sidebar.classList.remove("open");
    setMobileFiltersOpen(false);
    writeStoredFunnelUiState();
    requestAnimationFrame(updateStickyLayout);

    if (name === "relatorios") {
      setTimeout(async () => {
        try {
          await ensureChartLibrary();
          if (state.activeView === "relatorios") {
            scheduleReportChartsRender();
          }
        } catch (error) {
          console.error(error);
        }
      }, 80);
    }

    if (name === "equipe") {
      void loadProfilesIfNeeded();
      void loadAdminDataIfNeeded();
    }

    if (name === "configuracoes") {
      void loadAdminDataIfNeeded();
    }
  }

  function bindPipelineEvents() {
    const canReorderPipelineLeads = canMoveLeads();
    const canReorderPipelineStages = canManageStages();
    const buildLeadContextActions = (lead) => {
      if (!lead) return [];
      const actions = [];
      if (canEditLeads(lead)) {
        actions.push({ id: `edit-lead-${lead.id}`, label: "Editar", handler: () => openLeadModal(lead) });
        if (!leadHasStageNotification(lead)) {
          actions.push({ id: `notify-lead-${lead.id}`, label: "Notificação", handler: () => openLeadNotificationEditor(lead) });
        }
      }
      if (canDeleteLeads(lead)) {
        actions.push({ id: `delete-lead-${lead.id}`, label: "Excluir", danger: true, handler: () => deleteLead(lead.id) });
      }
      return actions;
    };
    const openStageContextMenu = ({ stageId, x = 0, y = 0 } = {}) => {
      const stage = state.stages.find((item) => item.id === stageId);
      if (!stage || !canManageStages()) return;
      openFunnelContextMenu({
        x,
        y,
        scope: "pipeline",
        actions: [
          { id: `edit-stage-${stage.id}`, label: "Editar", handler: () => openStageModal(stage) },
          { id: `duplicate-stage-${stage.id}`, label: "Duplicar", handler: () => openStageDuplicateModal(stage) },
          { id: `notify-stage-${stage.id}`, label: "Notificação", handler: () => openStageNotificationEditor(stage) },
          { id: `delete-stage-${stage.id}`, label: "Excluir", danger: true, handler: () => openStageDeleteModal(stage) }
        ]
      });
    };
    const openLeadContextMenu = ({ lead, x = 0, y = 0 } = {}) => {
      const actions = buildLeadContextActions(lead);
      if (!actions.length) return;
      openFunnelContextMenu({ x, y, actions, scope: "pipeline" });
    };

    document.querySelectorAll(".pipeline-stage-tab").forEach((tab) => {
      tab.draggable = canReorderPipelineStages;
      tab.oncontextmenu = (event) => {
        const stageId = String(tab.dataset.stageId || "").trim();
        if (!stageId) return;
        event.preventDefault();
        event.stopPropagation();
        openStageContextMenu({ stageId, x: event.clientX, y: event.clientY });
      };
      tab.ontouchend = (event) => {
        if (Date.now() < state.touchPipelineDragSuppressContextUntil || state.touchPipelineDrag?.activated) return;
        const stageId = String(tab.dataset.stageId || "").trim();
        if (!stageId || event.target.closest("button, input, select, textarea, a, label")) return;
        event.preventDefault();
        event.stopPropagation();
        registerTouchContextTap("pipeline-stage", stageId, tab, ({ x, y }) => {
          openStageContextMenu({ stageId, x, y });
        });
      };
      tab.onpointerdown = (event) => {
        if (!canReorderPipelineStages || event.target.closest("button, input, select, textarea, a, label")) return;
        beginTouchPipelineDrag("stage", String(tab.dataset.stageId || "").trim(), tab, event);
      };
      tab.ondragstart = (event) => {
        if (!canReorderPipelineStages) {
          event.preventDefault();
          return false;
        }
        handlePipelineStageDragStart(event);
        return true;
      };
      tab.ondragover = handlePipelineStageDragOver;
      tab.ondrop = async (event) => {
        await handlePipelineStageDrop(event);
      };
      tab.ondragend = handlePipelineStageDragEnd;
    });

    document.querySelectorAll(".card").forEach((card) => {
      card.draggable = canReorderPipelineLeads;
      card.oncontextmenu = (event) => {
        const lead = state.leads.find((item) => item.id === card.dataset.leadId);
        if (!lead) return;
        event.preventDefault();
        event.stopPropagation();
        openLeadContextMenu({ lead, x: event.clientX, y: event.clientY });
      };
      card.ontouchend = (event) => {
        if (Date.now() < state.touchPipelineDragSuppressContextUntil || state.touchPipelineDrag?.activated) return;
        if (event.target.closest(".card-actions, button, input, select, textarea, a, label")) return;
        const lead = state.leads.find((item) => item.id === card.dataset.leadId);
        if (!lead) return;
        event.preventDefault();
        event.stopPropagation();
        registerTouchContextTap("pipeline-lead", lead.id, card, ({ x, y }) => {
          openLeadContextMenu({ lead, x, y });
        });
      };
      card.onpointerdown = (event) => {
        if (!canReorderPipelineLeads || event.target.closest(".card-actions, button, input, select, textarea, a, label")) return;
        beginTouchPipelineDrag("lead", String(card.dataset.leadId || "").trim(), card, event);
      };
      card.ondragstart = (event) => {
        if (!canReorderPipelineLeads) {
          event.preventDefault();
          return false;
        }
        const pan = state.pipelineCardPan;
        if (pan?.card === card && pan.isPanning) {
          event.preventDefault();
          return false;
        }
        state.pipelineCardPan = null;
        card.classList.add("dragging");
        return true;
      };
      card.ondragend = () => {
        card.classList.remove("dragging");
        card.classList.remove("card-panning");
        card.draggable = true;
        stopPipelineDragAutoScroll();
      };
    });

    document.querySelectorAll(".column").forEach((column) => {
      column.draggable = canReorderPipelineStages;
      column.oncontextmenu = (event) => {
        if (event.target.closest(".card")) return;
        const stageId = String(column.dataset.stageId || "").trim();
        if (!stageId) return;
        event.preventDefault();
        event.stopPropagation();
        openStageContextMenu({ stageId, x: event.clientX, y: event.clientY });
      };
      column.ontouchend = (event) => {
        if (Date.now() < state.touchPipelineDragSuppressContextUntil || state.touchPipelineDrag?.activated) return;
        if (event.target.closest(".card, button, input, select, textarea, a, label")) return;
        const stageId = String(column.dataset.stageId || "").trim();
        if (!stageId) return;
        event.preventDefault();
        event.stopPropagation();
        registerTouchContextTap("pipeline-stage-column", stageId, column, ({ x, y }) => {
          openStageContextMenu({ stageId, x, y });
        });
      };
      column.onpointerdown = (event) => {
        if (!canReorderPipelineStages || event.target.closest(".card, button, input, select, textarea, a, label")) return;
        beginTouchPipelineDrag("stage", String(column.dataset.stageId || "").trim(), column, event);
      };
      column.ondragstart = (event) => {
        if (!canReorderPipelineStages || event.target.closest("button, input, select, textarea, a, label")) {
          event.preventDefault();
          return false;
        }
        if (event.target.closest(".card")) return true;
        handlePipelineStageDragStart(event);
        return true;
      };

      column.ondragover = (e) => {
        if (state.pipelineStageDrag?.stageId) {
          handlePipelineStageDragOver(e);
          return;
        }
        if (!canReorderPipelineLeads) return;
        e.preventDefault();
        column.classList.add("drag-over");
        updatePipelineDragAutoScroll(e.clientX);
      };

      column.ondragleave = () => {
        if (state.pipelineStageDrag?.stageId) return;
        column.classList.remove("drag-over");
      };

      column.ondrop = async (e) => {
        if (state.pipelineStageDrag?.stageId) {
          await handlePipelineStageDrop(e);
          return;
        }
        if (!canReorderPipelineLeads) return;
        e.preventDefault();
        column.classList.remove("drag-over");
        stopPipelineDragAutoScroll();
        const dragged = document.querySelector(".card.dragging");
        const leadId = dragged?.dataset?.leadId;
        const stageId = column.dataset.stageId;
        if (leadId && stageId) await moveLeadToStage(leadId, stageId);
      };
      column.ondragend = handlePipelineStageDragEnd;
    });

  }

  function bindGeneralActionEvents() {
    document.querySelectorAll('[data-stage-action="edit"]').forEach((btn) => {
      btn.onclick = () => editStage(btn.dataset.id);
    });

    document.querySelectorAll('[data-stage-action="delete"]').forEach((btn) => {
      btn.onclick = () => deleteStage(btn.dataset.id);
    });
  }

  function bindEvents() {
    normalizeMobileFilterTexts();
    syncSidebarCollapsedForViewport();
    syncResponsiveHeaderState();
    window.addEventListener("scroll", syncStickyChrome, { passive: true });
    syncStickyChrome();

    els.shellTabCrm?.addEventListener("click", () => setShellTab("crm"));
    els.shellTabIntel?.addEventListener("click", () => setShellTab("intel"));

    els.profileMenuBtn?.addEventListener("click", (event) => {
      event.stopPropagation();
      setNotificationsPanelOpen(false);
      toggleProfileMenu();
    });

    els.notificationsBtn?.addEventListener("click", (event) => {
      event.stopPropagation();
      closeProfileMenu();
      setNotificationsPanelOpen(!state.notificationPanelOpen);
    });

    els.profileNotificationsBtn?.addEventListener("click", (event) => {
      event.stopPropagation();
      closeProfileMenu();
      setNotificationsPanelOpen(!state.notificationPanelOpen);
    });

    els.openAccountBtn?.addEventListener("click", openAccountModal);
    els.themeToggleBtn?.addEventListener("click", toggleTheme);
    els.closeAccountModalBtn?.addEventListener("click", closeAccountModal);
    els.cancelAccountBtn?.addEventListener("click", closeAccountModal);
    els.closeFunnelModalBtn?.addEventListener("click", closeFunnelModal);
    els.cancelFunnelBtn?.addEventListener("click", closeFunnelModal);
    els.funnelForm?.addEventListener("submit", submitFunnelForm);
    els.closeFunnelGroupModalBtn?.addEventListener("click", closeFunnelGroupModal);
    els.cancelFunnelGroupBtn?.addEventListener("click", closeFunnelGroupModal);
    els.funnelGroupForm?.addEventListener("submit", submitFunnelGroupForm);
    els.funnelGroupOwnerDepartment?.addEventListener("change", refreshGroupDepartmentChecklist);
    els.funnelSubCount?.addEventListener("input", () => renderFunnelSubfields());
    els.funnelVisibilityScope?.addEventListener("change", () => {
      toggleFunnelDepartmentsVisibility();
      refreshFunnelDepartmentChecklistForModal();
    });
    els.funnelOfficialDepartmentSelect?.addEventListener("change", () => {
      if (String(els.funnelVisibilityScope?.value || "").trim() === "departments") {
        refreshFunnelDepartmentChecklistForModal();
      }
    });
    els.funnelBackBtn?.addEventListener("click", closeFunnelDetail);
    els.editCurrentFunnelBtn?.addEventListener("click", () => {
      const activeFunnel = getFunnelById(state.activeFunnelId);
      if (activeFunnel) openFunnelModal({ mode: "edit", funnel: activeFunnel });
    });
    els.deleteCurrentFunnelBtn?.addEventListener("click", () => {
      const activeFunnel = getFunnelById(state.activeFunnelId);
      if (activeFunnel) deleteFunnel(activeFunnel.id);
    });
    els.accountAvatarFile?.addEventListener("change", handleAccountAvatarChange);
    els.removeAccountAvatarBtn?.addEventListener("click", removeAccountAvatar);
    els.accountFullName?.addEventListener("input", () => {
      if (!els.accountAvatarPreview) return;
      renderAccountAvatarPreview(state.accountAvatarDraft);
    });
    els.accountForm?.addEventListener("submit", saveAccountProfile);
    els.addDepartmentBtn?.addEventListener("click", addDepartment);
    els.departmentName?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addDepartment();
      }
    });
    els.stagesConfigList?.addEventListener("dragstart", handleStageConfigDragStart);
    els.stagesConfigList?.addEventListener("dragover", handleStageConfigDragOver);
    els.stagesConfigList?.addEventListener("drop", (event) => {
      event.preventDefault();
      void handleStageConfigDrop(event);
    });
    els.stagesConfigList?.addEventListener("dragend", handleStageConfigDragEnd);
    els.stagesConfigList?.addEventListener("dragleave", (event) => {
      const relatedTarget = event.relatedTarget;
      if (relatedTarget && els.stagesConfigList?.contains(relatedTarget)) return;
      clearStageConfigDragIndicators();
      const draggedStageId = state.stageConfigDrag?.stageId;
      const draggedItem = draggedStageId
        ? els.stagesConfigList?.querySelector(`.stage-config-item[data-stage-id="${draggedStageId}"]`)
        : null;
      draggedItem?.classList.add("is-dragging");
    });
    els.funnelCardsGrid?.addEventListener("dragstart", handleSubfunnelCardDragStart);
    els.funnelCardsGrid?.addEventListener("dragover", handleSubfunnelCardDragOver);
    els.funnelCardsGrid?.addEventListener("drop", handleSubfunnelCardDrop);
    els.funnelCardsGrid?.addEventListener("dragend", handleSubfunnelCardDragEnd);

    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.classList.contains("hidden")) return;
        const targetPanel = $(`${btn.dataset.tab}Form`);
        if (!targetPanel || targetPanel.classList.contains("hidden")) return;
        document.querySelectorAll(".tab-btn").forEach((b) => b.classList.toggle("active", b === btn));
        document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
        targetPanel.classList.add("active");
      });
    });

    els.loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      setMessage(els.authMessage, "");

      const { data, error } = await state.supabase.auth.signInWithPassword({
        email: $("loginEmail").value.trim(),
        password: $("loginPassword").value.trim()
      });

      if (error) return setMessage(els.authMessage, getAuthErrorMessage(error, "Nao foi possivel fazer login."), true);

      state.currentUser = data?.user || null;
      if (!state.currentUser) {
        return setMessage(els.authMessage, "Nao foi possivel iniciar a sessao. Tente novamente.", true);
      }

      await ensureProfile();
      if (!(await enforceApprovedSession())) return;
      await enterApp();
    });

    els.registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      setMessage(els.authMessage, "");

      if (!state.security.allowSelfRegistration) {
        return setMessage(els.authMessage, getSignupRestrictionMessage(), true);
      }

      const email = $("registerEmail").value.trim();
      if (!isSignupEmailAllowed(email)) {
        return setMessage(els.authMessage, getSignupRestrictionMessage(), true);
      }
      const password = $("registerPassword").value.trim();
      const full_name = $("registerName").value.trim();
      const emailRedirectTo = getAuthRedirectUrl();

      const { data, error } = await state.supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name },
          ...(emailRedirectTo ? { emailRedirectTo } : {})
        }
      });

      if (error) return setMessage(els.authMessage, getAuthErrorMessage(error), true);

      const createdUser = data.user || data.session?.user || null;
      const hasSession = Boolean(data.session?.access_token);
      state.currentUser = hasSession ? createdUser : null;

      if (createdUser) {
        if (hasSession) {
          await ensureProfile();
        }

        const requestPayload = {
          full_name,
          email,
          status: ACCESS_STATUS.PENDING
        };

        if (hasSession) {
          requestPayload.auth_user_id = createdUser.id;
        }

        const { error: requestError } = await state.supabase
          .from("access_requests")
          .insert([requestPayload]);

        if (requestError && !isMissingRelationError(requestError)) {
          if (isDuplicateKeyError(requestError)) {
            // The backend may create the access request automatically on signup.
          } else {
            return setMessage(els.authMessage, `Nao foi possivel registrar a solicitacao: ${requestError.message}`, true);
          }
        }

        try {
          await state.supabase.functions.invoke("notify-admin-access-request", {
            body: { email, full_name }
          });
        } catch (_error) {
          // Optional function: the request remains recorded even when notification is unavailable.
        }

        if (hasSession) {
          await state.supabase.auth.signOut();
        }
      }

      if (!createdUser) {
        return setMessage(els.authMessage, "O cadastro foi recebido, mas nao foi possivel confirmar a solicitacao de acesso. Tente novamente.", true);
      }

      state.currentUser = null;
      resetAppState();
      setMessage(els.authMessage, "Solicitacao enviada. Aguarde a aprovacao do administrador para acessar o CRM.");
      document.querySelector('[data-tab="login"]').click();
      $("loginEmail").value = email;
      $("loginPassword").value = "";
      $("registerForm").reset();
      renderDepartmentSelects();
    });

    els.forgotPasswordBtn.addEventListener("click", sendResetPasswordEmail);
    els.updatePasswordBtn.addEventListener("click", updateRecoveredPassword);

    const signOutHandler = async () => {
      await state.supabase.auth.signOut();
      resetAppState();
      showScreen("authScreen");
    };

    els.logoutBtn?.addEventListener("click", signOutHandler);
    els.headerLogoutBtn?.addEventListener("click", signOutHandler);
    els.closeTeamViewBtn?.addEventListener("click", closeAdminOverlayView);
    els.closeSettingsViewBtn?.addEventListener("click", closeAdminOverlayView);

    els.mobileMenuBtn?.addEventListener("click", () => {
      setMobileFiltersOpen(false);
      if (isCompactViewport()) {
        if (state.activeView !== "funil") {
          state.funnelSidebarOpen = true;
          bindView("funil", {
            resetFunnelDetail: false,
            preserveFunnelSidebarState: true,
            keepFunnelSidebarOpen: true
          });
          syncFunnelSidebarVisibility();
          renderAll();
          return;
        }

        state.funnelSidebarOpen = !state.funnelSidebarOpen;
        syncPrimaryMenuState();
        syncFunnelSidebarVisibility();
        writeStoredFunnelUiState();
        renderAll();
        return;
      }

      els.sidebar.classList.toggle("open");
    });
    els.sidebarCollapseBtn?.addEventListener("click", () => toggleSidebarCollapsed(true));
    els.sidebarExpandBtn?.addEventListener("click", () => toggleSidebarCollapsed(false));
    els.crmNavbarCollapseBtn?.addEventListener("click", () => toggleSidebarCollapsed(true));
    els.crmNavbarExpandBtn?.addEventListener("click", () => toggleSidebarCollapsed(false));

    document.querySelectorAll(".menu-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.dataset.view === "funil") {
          openFunnelSidebarOnly();
          return;
        }
        bindView(btn.dataset.view);
        renderAll();
      });
    });

    document.addEventListener("click", (event) => {
      if (!els.profileMenu || !els.profileMenuBtn) return;
      if (els.profileMenu.classList.contains("hidden")) return;
      const target = event.target;
      if (target instanceof Node && !els.profileMenu.contains(target) && !els.profileMenuBtn.contains(target)) {
        closeProfileMenu();
      }
    });

    els.searchInput.addEventListener("input", () => {
      renderAll();
    });

    els.mobileFiltersBtn?.addEventListener("click", () => {
      els.sidebar?.classList.remove("open");
      setMobileFiltersOpen(els.mobileFiltersPanel?.classList.contains("hidden"));
    });

    els.desktopFiltersBtn?.addEventListener("click", () => {
      setDesktopFiltersOpen(els.desktopFiltersPanel?.classList.contains("hidden"));
      closeFilterDropdowns();
    });

    els.desktopFiltersCloseBtn?.addEventListener("click", () => {
      closeFilterDropdowns();
      setDesktopFiltersOpen(false);
    });

    els.categoryFilter?.addEventListener("change", () => {
      clearFilterSelections(["group", "funnel", "subfunnel"]);
      syncMobileFilterControls();
      renderAll();
    });

    els.groupFilter?.addEventListener("change", () => {
      clearFilterSelections(["funnel", "subfunnel"]);
      syncMobileFilterControls();
      renderAll();
    });

    els.funnelFilter?.addEventListener("change", () => {
      clearFilterSelections(["subfunnel"]);
      syncMobileFilterControls();
      renderAll();
    });

    els.subfunnelFilter?.addEventListener("change", () => {
      syncMobileFilterControls();
      renderAll();
    });

    els.ownerFilter?.addEventListener("change", () => {
      syncMobileFilterControls();
      renderAll();
    });

    els.monthFilter?.addEventListener("change", () => {
      syncMobileFilterControls();
      renderAll();
    });

    els.stageFilter?.addEventListener("change", () => {
      syncMobileFilterControls();
      renderAll();
    });

    els.leadSourceFilter?.addEventListener("change", () => {
      syncMobileFilterControls();
      renderAll();
    });

    els.socialSourceFilter?.addEventListener("change", () => {
      syncMobileFilterControls();
      renderAll();
    });

    els.indicatorFilter?.addEventListener("change", () => {
      syncMobileFilterControls();
      renderAll();
    });

    els.indicatorSectorFilter?.addEventListener("change", () => {
      syncMobileFilterControls();
      renderAll();
    });

    els.mobileCategoryFilter?.addEventListener("change", () => {
      setFilterValues("category", els.mobileCategoryFilter.value ? [els.mobileCategoryFilter.value] : [], els.categoryFilter);
      clearFilterSelections(["group", "funnel", "subfunnel"]);
      renderAll();
    });

    els.mobileGroupFilter?.addEventListener("change", () => {
      setFilterValues("group", els.mobileGroupFilter.value ? [els.mobileGroupFilter.value] : [], els.groupFilter);
      clearFilterSelections(["funnel", "subfunnel"]);
      renderAll();
    });

    els.mobileOwnerFilter?.addEventListener("change", () => {
      setFilterValues("owner", els.mobileOwnerFilter.value ? [els.mobileOwnerFilter.value] : [], els.ownerFilter);
      renderAll();
    });

    els.mobileFunnelFilter?.addEventListener("change", () => {
      setFilterValues("funnel", els.mobileFunnelFilter.value ? [els.mobileFunnelFilter.value] : [], els.funnelFilter);
      clearFilterSelections(["subfunnel"]);
      renderAll();
    });

    els.mobileSubfunnelFilter?.addEventListener("change", () => {
      setFilterValues("subfunnel", els.mobileSubfunnelFilter.value ? [els.mobileSubfunnelFilter.value] : [], els.subfunnelFilter);
      renderAll();
    });

    els.mobileMonthFilter?.addEventListener("change", () => {
      setFilterValues("month", els.mobileMonthFilter.value ? [els.mobileMonthFilter.value] : [], els.monthFilter);
      renderAll();
    });

    els.mobileStageFilter?.addEventListener("change", () => {
      setFilterValues("stage", els.mobileStageFilter.value ? [els.mobileStageFilter.value] : [], els.stageFilter);
      renderAll();
    });

    els.mobileLeadSourceFilter?.addEventListener("change", () => {
      setFilterValues("leadSource", els.mobileLeadSourceFilter.value ? [els.mobileLeadSourceFilter.value] : [], els.leadSourceFilter);
      renderAll();
    });

    els.mobileSocialSourceFilter?.addEventListener("change", () => {
      setFilterValues("socialSource", els.mobileSocialSourceFilter.value ? [els.mobileSocialSourceFilter.value] : [], els.socialSourceFilter);
      renderAll();
    });

    els.mobileIndicatorFilter?.addEventListener("change", () => {
      setFilterValues("indicator", els.mobileIndicatorFilter.value ? [els.mobileIndicatorFilter.value] : [], els.indicatorFilter);
      renderAll();
    });

    els.mobileIndicatorSectorFilter?.addEventListener("change", () => {
      setFilterValues("indicatorSector", els.mobileIndicatorSectorFilter.value ? [els.mobileIndicatorSectorFilter.value] : [], els.indicatorSectorFilter);
      renderAll();
    });

    els.mobileClearFiltersBtn?.addEventListener("click", () => {
      clearFilterSelections(Object.keys(FILTER_SELECTION_KEYS));
      syncMobileFilterControls();
      renderAll();
    });

    els.desktopClearFiltersBtn?.addEventListener("click", () => {
      clearFilterSelections(Object.keys(FILTER_SELECTION_KEYS));
      syncMobileFilterControls();
      closeFilterDropdowns();
      renderAll();
    });

    els.categoryFilterBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = els.categoryFilterDropdown?.classList.contains("open");
      closeFilterDropdowns(els.categoryFilterDropdown);
      setFilterDropdownOpen(els.categoryFilterDropdown, els.categoryFilterBtn, els.categoryFilterMenu, !isOpen);
    });

    els.groupFilterBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = els.groupFilterDropdown?.classList.contains("open");
      closeFilterDropdowns(els.groupFilterDropdown);
      setFilterDropdownOpen(els.groupFilterDropdown, els.groupFilterBtn, els.groupFilterMenu, !isOpen);
    });

    els.funnelFilterBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = els.funnelFilterDropdown?.classList.contains("open");
      closeFilterDropdowns(els.funnelFilterDropdown);
      setFilterDropdownOpen(els.funnelFilterDropdown, els.funnelFilterBtn, els.funnelFilterMenu, !isOpen);
    });

    els.subfunnelFilterBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = els.subfunnelFilterDropdown?.classList.contains("open");
      closeFilterDropdowns(els.subfunnelFilterDropdown);
      setFilterDropdownOpen(els.subfunnelFilterDropdown, els.subfunnelFilterBtn, els.subfunnelFilterMenu, !isOpen);
    });

    els.ownerFilterBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = els.ownerFilterDropdown?.classList.contains("open");
      closeFilterDropdowns(els.ownerFilterDropdown);
      setFilterDropdownOpen(els.ownerFilterDropdown, els.ownerFilterBtn, els.ownerFilterMenu, !isOpen);
    });

    els.monthFilterBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = els.monthFilterDropdown?.classList.contains("open");
      closeFilterDropdowns(els.monthFilterDropdown);
      setFilterDropdownOpen(els.monthFilterDropdown, els.monthFilterBtn, els.monthFilterMenu, !isOpen);
    });

    els.stageFilterBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = els.stageFilterDropdown?.classList.contains("open");
      closeFilterDropdowns(els.stageFilterDropdown);
      setFilterDropdownOpen(els.stageFilterDropdown, els.stageFilterBtn, els.stageFilterMenu, !isOpen);
    });

    els.leadSourceFilterBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = els.leadSourceFilterDropdown?.classList.contains("open");
      closeFilterDropdowns(els.leadSourceFilterDropdown);
      setFilterDropdownOpen(els.leadSourceFilterDropdown, els.leadSourceFilterBtn, els.leadSourceFilterMenu, !isOpen);
    });

    els.socialSourceFilterBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = els.socialSourceFilterDropdown?.classList.contains("open");
      closeFilterDropdowns(els.socialSourceFilterDropdown);
      setFilterDropdownOpen(els.socialSourceFilterDropdown, els.socialSourceFilterBtn, els.socialSourceFilterMenu, !isOpen);
    });

    els.indicatorFilterBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = els.indicatorFilterDropdown?.classList.contains("open");
      closeFilterDropdowns(els.indicatorFilterDropdown);
      setFilterDropdownOpen(els.indicatorFilterDropdown, els.indicatorFilterBtn, els.indicatorFilterMenu, !isOpen);
    });

    els.indicatorSectorFilterBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = els.indicatorSectorFilterDropdown?.classList.contains("open");
      closeFilterDropdowns(els.indicatorSectorFilterDropdown);
      setFilterDropdownOpen(els.indicatorSectorFilterDropdown, els.indicatorSectorFilterBtn, els.indicatorSectorFilterMenu, !isOpen);
    });

    document.addEventListener("click", (e) => {
      if (els.categoryFilterDropdown?.contains(e.target) || els.groupFilterDropdown?.contains(e.target) || els.funnelFilterDropdown?.contains(e.target) || els.subfunnelFilterDropdown?.contains(e.target) || els.ownerFilterDropdown?.contains(e.target) || els.monthFilterDropdown?.contains(e.target) || els.stageFilterDropdown?.contains(e.target) || els.leadSourceFilterDropdown?.contains(e.target) || els.socialSourceFilterDropdown?.contains(e.target) || els.indicatorFilterDropdown?.contains(e.target) || els.indicatorSectorFilterDropdown?.contains(e.target)) return;
      if (els.mobileFiltersBtn?.contains(e.target) || els.mobileFiltersPanel?.contains(e.target)) return;
      if (els.desktopFiltersBtn?.contains(e.target) || els.desktopFiltersPanel?.contains(e.target)) return;
      closeFilterDropdowns();
      if (isCompactViewport()) setMobileFiltersOpen(false);
      setDesktopFiltersOpen(false);
    });

    els.deleteSelectedBtn?.addEventListener("click", deleteSelectedLeads);

    els.selectAllLeads?.addEventListener("change", () => {
      const filtered = getFilteredLeads();
      const visibleIds = filtered.map((lead) => lead.id);

      if (els.selectAllLeads.checked) {
        visibleIds.forEach((id) => state.selectedLeadIds.add(id));
      } else {
        visibleIds.forEach((id) => state.selectedLeadIds.delete(id));
      }

      renderLeadTable();
    });

    els.importCsvBtn.addEventListener("click", () => els.csvFileInput.click());
    els.exportCsvBtn.addEventListener("click", exportLeadsToCsv);
    els.csvFileInput.addEventListener("change", async (e) => {
      const file = e.target.files?.[0];
      await importLeadsFromCsv(file);
    });

    els.addLeadBtn.addEventListener("click", () => openLeadModal());
    els.mobileAddLeadBtn?.addEventListener("click", () => openLeadModal());
    els.addPlanBtn?.addEventListener("click", addPlanFromDraft);
    els.addObservationBtn?.addEventListener("click", addObservationFromDraft);
    els.addStageBtn?.addEventListener("click", openStageModal);
    els.historyBtn?.addEventListener("click", openHistoryModal);
    els.addLeadSourceBtn?.addEventListener("click", addLeadSource);
    els.addSocialSourceBtn?.addEventListener("click", addSocialSource);
    els.socialSourceName?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addSocialSource();
      }
    });

    els.closeModalBtn.addEventListener("click", closeLeadModal);
    els.cancelBtn.addEventListener("click", closeLeadModal);
    els.leadForm.addEventListener("submit", submitLead);
    els.leadFunnelSelect?.addEventListener("change", () => {
      renderLeadTargetSelectors({
        selectedFunnelId: els.leadFunnelSelect?.value || "",
        selectedSubfunnelId: "",
        selectedStageId: ""
      });
    });
    els.leadSubfunnelSelect?.addEventListener("change", () => {
      renderLeadTargetSelectors({
        selectedFunnelId: els.leadFunnelSelect?.value || "",
        selectedSubfunnelId: els.leadSubfunnelSelect?.value || "",
        selectedStageId: ""
      });
    });
    els.owner?.addEventListener("change", () => {
      toggleLeadOwnerCreateBox();
    });
    els.ownerCreateBtn?.addEventListener("click", createAndSelectLeadOwner);
    els.ownerCreateInput?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        createAndSelectLeadOwner();
      }
    });
    els.socialSource?.addEventListener("change", () => {
      toggleSocialSourceCreateBox();
    });
    els.socialSourceCreateBtn?.addEventListener("click", createAndSelectSocialSource);
    els.socialSourceCreateInput?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        createAndSelectSocialSource();
      }
    });
    els.stage?.addEventListener("change", syncLeadPlanSection);
    els.trafficType?.addEventListener("change", () => toggleReferralNameField({ clearWhenHidden: true }));

    els.closeStageModalBtn.addEventListener("click", closeStageModal);
    els.cancelStageBtn.addEventListener("click", closeStageModal);
    els.stageForm.addEventListener("submit", submitStage);
    els.stageColor.addEventListener("input", (e) => updateStageColorPreview(e.target.value));
    els.stageType.addEventListener("change", toggleCustomStageTypeField);
    els.closeStageDuplicateModalBtn?.addEventListener("click", closeStageDuplicateModal);
    els.cancelStageDuplicateBtn?.addEventListener("click", closeStageDuplicateModal);
    els.stageDuplicateForm?.addEventListener("submit", submitStageDuplicate);
    els.stageDuplicateCategory?.addEventListener("change", () => syncStageDuplicateDestination());
    els.stageDuplicateGroup?.addEventListener("change", () => syncStageDuplicateDestination({
      groupId: els.stageDuplicateGroup?.value || ""
    }));
    els.stageDuplicateFunnel?.addEventListener("change", () => syncStageDuplicateDestination({
      groupId: els.stageDuplicateGroup?.value || "",
      funnelId: els.stageDuplicateFunnel?.value || ""
    }));
    els.closeStageDeleteModalBtn?.addEventListener("click", closeStageDeleteModal);
    els.cancelStageDeleteBtn?.addEventListener("click", closeStageDeleteModal);
    els.stageDeleteForm?.addEventListener("submit", submitStageDelete);
    document.querySelectorAll('input[name="stageDeleteMode"]').forEach((input) => {
      input.addEventListener("change", toggleStageDeleteTargetField);
    });
    els.closeNotificationModalBtn?.addEventListener("click", closeNotificationModal);
    els.cancelNotificationBtn?.addEventListener("click", closeNotificationModal);
    els.notificationForm?.addEventListener("submit", submitNotification);
    els.leadNotificationEnabled?.addEventListener("change", () => toggleLeadReminderFields({ clearWhenHidden: !els.leadNotificationEnabled.checked }));
    els.stageNotificationEnabled?.addEventListener("change", () => toggleStageReminderFields({ clearWhenHidden: !els.stageNotificationEnabled.checked }));
    els.structureFunnelSelect?.addEventListener("change", () => {
      state.structureFunnelId = String(els.structureFunnelSelect.value || "").trim() || null;
      state.structureSubfunnelId = getSubfunnelsForFunnel(state.structureFunnelId)[0]?.id || null;
      renderStagesConfig();
    });
    els.structureSubfunnelSelect?.addEventListener("change", () => {
      state.structureSubfunnelId = String(els.structureSubfunnelSelect.value || "").trim() || null;
      renderStagesConfig();
    });
    els.stageFunnelSelect?.addEventListener("change", () => {
      const selectedFunnelId = String(els.stageFunnelSelect.value || "").trim();
      const subfunnels = getSubfunnelsForFunnel(selectedFunnelId);
      els.stageSubfunnelSelect.innerHTML = subfunnels.map((subfunnel) => `<option value="${subfunnel.id}">${escapeHtml(subfunnel.name)}</option>`).join("");
      if (subfunnels[0]?.id) {
        els.stageSubfunnelSelect.value = subfunnels[0].id;
      }
      syncBrandedSelects();
    });
    els.removeCustomTypeBtn.addEventListener("click", removeCurrentCustomStageType);
    els.removeSelectedStageTypeBtn?.addEventListener("click", removeCurrentCustomStageType);
    els.closePermissionModalBtn?.addEventListener("click", closePermissionRequestModal);
    els.cancelPermissionRequestBtn?.addEventListener("click", closePermissionRequestModal);
    els.submitPermissionRequestBtn?.addEventListener("click", submitPermissionRequest);
    els.savedStageTypes?.addEventListener("click", async (event) => {
      const selectBtn = event.target.closest("[data-stage-type-value]");
      if (selectBtn) {
        const type = String(selectBtn.dataset.stageTypeValue || "").trim();
        if (!type) return;
        els.stageType.value = type;
        toggleCustomStageTypeField();
      }
    });
    setupPlanListEvents();
    setupObservationListEvents();
    attachPipelineScrollEvents();
    attachPipelineCardInteractionEvents();
    attachPipelineStageInteractionEvents();
    window.addEventListener("resize", () => {
      if (!isCompactViewport()) setMobileFiltersOpen(false);
      syncSidebarCollapsedForViewport();
      syncResponsiveHeaderState();
      requestAnimationFrame(() => {
        syncPipelineColumnHeights();
        updateStickyLayout();
        syncPipelineScrollBars();
      });
    });
    document.addEventListener("pointermove", handleTouchPipelinePointerMove, { passive: false });
    document.addEventListener("pointerup", (event) => {
      void handleTouchPipelinePointerUp(event);
    }, { passive: false });
    document.addEventListener("pointercancel", clearTouchPipelineDragState, { passive: false });

    document.addEventListener("click", (event) => {
      if (!els.notificationsBtn?.contains(event.target) && !els.notificationsPanel?.contains(event.target)) {
        setNotificationsPanelOpen(false);
      }
      const departmentAccessBtn = event.target.closest("[data-department-access-toggle]");
      if (departmentAccessBtn) {
        const item = departmentAccessBtn.closest("[data-department-check-item]");
        if (!item) return;

        const currentLevel = String(item.dataset.accessLevel || "").trim().toLowerCase();
        setDepartmentChecklistAccessIn(item.closest(".department-checklist"), item.dataset.departmentId, getNextDepartmentAccessLevel(currentLevel));
        return;
      }

      const leadBtn = event.target.closest("[data-action]");
      if (leadBtn) {
        if (leadBtn.dataset.action === "edit-lead") {
          if (leadBtn.closest("#view-funil")) {
            openLeadEditorById(leadBtn.dataset.id);
          } else {
            const lead = state.leads.find((x) => x.id === leadBtn.dataset.id);
            if (lead) openLeadModal(lead);
          }
        }
        if (leadBtn.dataset.action === "delete-lead") deleteLead(leadBtn.dataset.id);
        return;
      }

      const dismissNotificationBtn = event.target.closest("[data-dismiss-notification]");
      if (dismissNotificationBtn) {
        dismissNotification(dismissNotificationBtn.dataset.dismissNotification);
        return;
      }

      const notificationBtn = event.target.closest("[data-notification-lead-id]");
      if (notificationBtn) {
        openLeadFromNotification(notificationBtn.dataset.notificationLeadId);
        return;
      }

      const stageBtn = event.target.closest("[data-stage-action]");
      if (!stageBtn) return;
      const stageId = stageBtn.dataset.id;
      if (stageBtn.dataset.stageAction === "edit") editStage(stageId);
      if (stageBtn.dataset.stageAction === "delete") deleteStage(stageId);
      if (stageBtn.dataset.stageAction === "move-left") moveStagePosition(stageId, "left");
      if (stageBtn.dataset.stageAction === "move-right") moveStagePosition(stageId, "right");
    });

    document.addEventListener("click", async (event) => {
      const accessActionBtn = event.target.closest("[data-access-action]");
      if (accessActionBtn) {
        const requestId = accessActionBtn.dataset.id;
        const roleSelect = document.querySelector(`[data-access-role="${requestId}"]`);
        const departmentSelect = document.querySelector(`[data-access-department="${requestId}"]`);
        const secondaryDepartmentSelect = document.querySelector(`[data-access-department-secondary="${requestId}"]`);
        if (accessActionBtn.dataset.accessAction === "approve") {
          if (departmentSelect?.value === DEPARTMENT_ACCESS_ALL_VALUE && secondaryDepartmentSelect) {
            secondaryDepartmentSelect.value = "";
            renderBrandedSelect(secondaryDepartmentSelect);
          }
          await approveAccessRequest(
            requestId,
            roleSelect?.value || USER_ROLE.USER,
            departmentSelect?.value || "",
            secondaryDepartmentSelect?.value || ""
          );
        }
        if (accessActionBtn.dataset.accessAction === "reject") {
          await rejectAccessRequest(requestId);
        }
        return;
      }

      const adminRequestBtn = event.target.closest("[data-admin-request-action]");
      if (adminRequestBtn) {
        await resolveAdminRequest(adminRequestBtn.dataset.id, adminRequestBtn.dataset.adminRequestAction);
        return;
      }

      const sourceBtn = event.target.closest("[data-source-action]");
      if (sourceBtn) {
        const sourceName = sourceBtn.dataset.sourceName;
        if (sourceBtn.dataset.sourceAction === "edit") await editLeadSource(sourceName);
        if (sourceBtn.dataset.sourceAction === "delete") await deleteLeadSource(sourceName);
        return;
      }

      const socialSourceBtn = event.target.closest("[data-social-source-action]");
      if (socialSourceBtn) {
        const sourceName = socialSourceBtn.dataset.socialSourceName;
        if (socialSourceBtn.dataset.socialSourceAction === "edit") await editSocialSource(sourceName);
        if (socialSourceBtn.dataset.socialSourceAction === "delete") await deleteSocialSource(sourceName);
        return;
      }

      const departmentBtn = event.target.closest("[data-department-action]");
      if (departmentBtn) {
        if (departmentBtn.dataset.departmentAction === "delete") {
          await deleteDepartment(departmentBtn.dataset.departmentId);
        }
        return;
      }

      const teamActionBtn = event.target.closest("[data-team-action]");
      if (teamActionBtn) {
        if (teamActionBtn.dataset.teamAction === "delete") {
          await deleteTeamMember(teamActionBtn.dataset.profileId);
        }
      }
    });

    document.addEventListener("change", async (event) => {
      const roleSelect = event.target.closest(".team-role-select");
      if (roleSelect) {
        await updateProfileRole(roleSelect.dataset.profileId, roleSelect.value);
        return;
      }

      const departmentSelect = event.target.closest(".team-department-select");
      if (departmentSelect) {
        const profileId = departmentSelect.dataset.profileId;
        const secondarySelect = document.querySelector(`.team-department-secondary-select[data-profile-id="${profileId}"]`);
        if (departmentSelect.value === DEPARTMENT_ACCESS_ALL_VALUE && secondarySelect) {
          secondarySelect.value = "";
          renderBrandedSelect(secondarySelect);
        }
        await updateProfileDepartment(profileId, departmentSelect.value, secondarySelect?.value || "");
        return;
      }

      const secondaryDepartmentSelect = event.target.closest(".team-department-secondary-select");
      if (secondaryDepartmentSelect) {
        const profileId = secondaryDepartmentSelect.dataset.profileId;
        const primarySelect = document.querySelector(`.team-department-select[data-profile-id="${profileId}"]`);
        await updateProfileDepartment(profileId, primarySelect?.value || "", secondaryDepartmentSelect.value);
      }
    });

    els.closeHistoryModalBtn.addEventListener("click", closeHistoryModal);
    els.refreshHistoryBtn.addEventListener("click", async () => {
      els.historyText.textContent = "Carregando histórico...";
      await loadHistory(true);
    });

    bindOverlayDismiss(els.modalOverlay, closeLeadModal);
    bindOverlayDismiss(els.stageModalOverlay, closeStageModal);
    bindOverlayDismiss(els.stageDuplicateModalOverlay, closeStageDuplicateModal);
    bindOverlayDismiss(els.stageDeleteModalOverlay, closeStageDeleteModal);
    bindOverlayDismiss(els.notificationModalOverlay, closeNotificationModal);
    bindOverlayDismiss(els.historyModalOverlay, closeHistoryModal);
    bindOverlayDismiss(els.permissionModalOverlay, closePermissionRequestModal);
    bindOverlayDismiss(els.accountModalOverlay, closeAccountModal);
    bindOverlayDismiss(els.funnelModalOverlay, closeFunnelModal);
    bindOverlayDismiss(els.funnelGroupModalOverlay, closeFunnelGroupModal);

    document.addEventListener("click", (event) => {
      const optionBtn = event.target.closest("[data-brand-select-option]");
      if (optionBtn) {
        const selectId = String(optionBtn.dataset.brandSelectOption || "").trim();
        const selectEl = $(selectId);
        if (!selectEl) return;

        selectEl.value = optionBtn.dataset.value || "";
        selectEl.dispatchEvent(new Event("change", { bubbles: true }));
        renderBrandedSelect(selectEl);
        closeBrandedSelects();
        return;
      }

      const controlBtn = event.target.closest("[data-brand-select-control]");
      if (controlBtn) {
        const wrapper = controlBtn.closest(".brand-select");
        if (!wrapper || controlBtn.disabled) return;

        const shouldOpen = !wrapper.classList.contains("open");
        closeBrandedSelects(shouldOpen ? wrapper : null);
        wrapper.classList.toggle("open", shouldOpen);
        controlBtn.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
        return;
      }

      closeBrandedSelects();
    });

    document.addEventListener("pointerdown", (event) => {
      if (!els.funnelContextMenu || els.funnelContextMenu.classList.contains("hidden")) return;
      if (els.funnelContextMenu.contains(event.target)) return;
      closeFunnelContextMenu();
    }, { passive: true });

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        scheduleLiveDataRefresh("visibility", { immediate: true });
      }
    });
    window.addEventListener("focus", () => {
      scheduleLiveDataRefresh("focus", { immediate: true });
    });

    document.addEventListener("click", (event) => {
      if (els.funnelContextMenu?.contains(event.target)) {
        const contextActionBtn = event.target.closest("[data-funnel-context-action]");
        if (contextActionBtn) {
          const action = state.funnelContextMenuState?.actions?.find((item) => item.id === contextActionBtn.dataset.funnelContextAction);
          closeFunnelContextMenu();
          action?.handler?.();
        }
        return;
      }

      closeFunnelContextMenu();

      const subfunnelEditBtn = event.target.closest("[data-subfunnel-edit]");
      if (subfunnelEditBtn) {
        openSubfunnelEditModal(subfunnelEditBtn.dataset.parentFunnelId, subfunnelEditBtn.dataset.subfunnelEdit);
        return;
      }

      const subfunnelDeleteBtn = event.target.closest("[data-subfunnel-delete]");
      if (subfunnelDeleteBtn) {
        deleteSubfunnel(subfunnelDeleteBtn.dataset.parentFunnelId, subfunnelDeleteBtn.dataset.subfunnelDelete);
        return;
      }

      const subfunnelCreateBtn = event.target.closest("[data-subfunnel-create]");
      if (subfunnelCreateBtn) {
        openCreateSubfunnelModal(subfunnelCreateBtn.dataset.subfunnelCreate);
        return;
      }

      const funnelItem = event.target.closest("[data-funnel-open]");
      if (funnelItem) {
        openFunnelHub(funnelItem.dataset.funnelOpen);
        return;
      }

      const subfunnelCard = event.target.closest("[data-subfunnel-open]");
      if (subfunnelCard) {
        if (state.subfunnelCardDrag?.recentlyDroppedAt && (Date.now() - state.subfunnelCardDrag.recentlyDroppedAt) < 250) {
          state.subfunnelCardDrag = null;
          return;
        }
        openSubfunnelDetail(subfunnelCard.dataset.parentFunnelId, subfunnelCard.dataset.subfunnelOpen);
        return;
      }

      const openCreateBtn = event.target.closest("[data-funnel-create-category]");
      if (openCreateBtn) {
        openFunnelModal({ category: openCreateBtn.dataset.funnelCreateCategory || "B2C" });
        return;
      }

      const toggleGroupBtn = event.target.closest("[data-funnel-group-toggle]");
      if (toggleGroupBtn) {
        toggleFunnelGroup(toggleGroupBtn.dataset.funnelGroupToggle);
      }
    });

    els.crmFunnelNav?.addEventListener("contextmenu", (event) => {
      const categoryHead = event.target.closest("[data-funnel-category-head]");
      if (categoryHead) {
        event.preventDefault();
        const category = String(categoryHead.dataset.funnelCategoryHead || "B2C").trim();
        openFunnelContextMenu({
          x: event.clientX,
          y: event.clientY,
          scope: "nav",
          actions: canManageAdminAreas()
            ? [{
                id: `create-group-${category}`,
                label: `Criar grupo em ${category}`,
                handler: () => openFunnelGroupModal({ mode: "create", category })
              }]
            : []
        });
        return;
      }

      const funnelItem = event.target.closest("[data-funnel-nav-item]");
      if (funnelItem) {
        event.preventDefault();
        const funnel = getFunnelById(funnelItem.dataset.funnelNavItem);
        if (!funnel) return;
        const actions = canManageStages(funnel)
          ? [
              { id: `edit-funnel-${funnel.id}`, label: "Editar funil", handler: () => openFunnelModal({ mode: "edit", funnel }) },
              { id: `delete-funnel-${funnel.id}`, label: "Excluir funil", danger: true, handler: () => deleteFunnel(funnel.id) }
            ]
          : [];
        openFunnelContextMenu({ x: event.clientX, y: event.clientY, actions, scope: "nav" });
        return;
      }

      const groupHead = event.target.closest("[data-funnel-group-head]");
      if (groupHead) {
        event.preventDefault();
        const group = getGroupById(groupHead.dataset.funnelGroupHead);
        if (!group) return;
        const actions = canEditGroupItem(group)
          ? [
              { id: `edit-group-${group.id}`, label: "Editar grupo", handler: () => openFunnelGroupModal({ mode: "edit", group }) },
              { id: `toggle-group-${group.id}`, label: group.collapsed ? "Expandir grupo" : "Minimizar grupo", handler: () => toggleFunnelGroup(group.id) },
              { id: `delete-group-${group.id}`, label: "Excluir grupo", danger: true, handler: () => deleteFunnelGroup(group.id) }
            ]
          : [];
        openFunnelContextMenu({ x: event.clientX, y: event.clientY, actions, scope: "nav" });
      }
    });

    els.crmFunnelNav?.addEventListener("dragstart", (event) => {
      const funnelItem = event.target.closest("[data-funnel-nav-item]");
      if (!funnelItem) return;
      const funnel = getFunnelById(funnelItem.dataset.funnelNavItem);
      if (!funnel || !canManageStages(funnel)) {
        event.preventDefault();
        return;
      }

      state.funnelNavDrag = { funnelId: funnel.id };
      funnelItem.classList.add("is-dragging");
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", funnel.id);
      }
    });

    els.crmFunnelNav?.addEventListener("dragover", (event) => {
      const groupDrop = event.target.closest("[data-funnel-group-drop]");
      if (!state.funnelNavDrag?.funnelId || !groupDrop) return;
      event.preventDefault();
      els.crmFunnelNav.querySelectorAll(".crm-funnel-group.is-drop-target, .crm-funnel-ungrouped.is-drop-target").forEach((item) => item.classList.remove("is-drop-target"));
      (groupDrop.closest(".crm-funnel-group") || groupDrop).classList.add("is-drop-target");
    });

    els.crmFunnelNav?.addEventListener("drop", (event) => {
      const groupDrop = event.target.closest("[data-funnel-group-drop]");
      const funnelId = state.funnelNavDrag?.funnelId;
      els.crmFunnelNav.querySelectorAll(".crm-funnel-group.is-drop-target, .crm-funnel-ungrouped.is-drop-target, .crm-funnel-item.is-dragging").forEach((item) => item.classList.remove("is-drop-target", "is-dragging"));
      if (!groupDrop || !funnelId) return;
      event.preventDefault();
      assignFunnelToGroup(funnelId, String(groupDrop.dataset.funnelGroupDrop || "").trim() || null);
      state.funnelNavDrag = null;
    });

    els.crmFunnelNav?.addEventListener("dragend", () => {
      state.funnelNavDrag = null;
      els.crmFunnelNav.querySelectorAll(".crm-funnel-group.is-drop-target, .crm-funnel-ungrouped.is-drop-target, .crm-funnel-item.is-dragging").forEach((item) => item.classList.remove("is-drop-target", "is-dragging"));
    });

    state.supabase.auth.onAuthStateChange((event, session) => {
      window.setTimeout(() => {
        handleAuthStateChange(event, session).catch((error) => {
          console.error("Erro ao processar evento de autenticação:", error);
        });
      }, 0);
    });
  }

  async function init() {
    try {
      runPeriodicStorageCleanup();
      applyTheme(readStoredTheme(), { persist: false, rerender: false });
      state.security = getSecurityConfig();
      applySecurityConfigToUi();
      createClient();
      bindEvents();
      requestAnimationFrame(updateStickyLayout);
      void loadDepartments(true);
      await bootstrap();
    } catch (error) {
      console.error(error);
      els.bootScreen.textContent = `Erro ao iniciar o sistema: ${error?.message || "falha desconhecida"}`;
    }
  }

  init();
})();

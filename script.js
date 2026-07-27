(() => {
  const THEME_KEY = "pax-insights-current.theme";
  const SIDEBAR_KEY = "pax-insights-demo.sidebar-collapsed";

  const $ = (id) => document.getElementById(id);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const els = {
    bootScreen: $("bootScreen"),
    authScreen: $("authScreen"),
    appScreen: $("appScreen"),
    authMessage: $("authMessage"),
    loginForm: $("loginForm"),
    registerForm: $("registerForm"),
    forgotPasswordBtn: $("forgotPasswordBtn"),
    mobileMenuBtn: $("mobileMenuBtn"),
    mobileFiltersBtn: $("mobileFiltersBtn"),
    mobileFiltersPanel: $("mobileFiltersPanel"),
    mobileTopbar: document.querySelector(".mobile-topbar"),
    app: $("app"),
    sidebar: $("sidebar"),
    sidebarCollapseBtn: $("sidebarCollapseBtn"),
    sidebarExpandBtn: $("sidebarExpandBtn"),
    crmNavbarCollapseBtn: $("crmNavbarCollapseBtn"),
    crmNavbarExpandBtn: $("crmNavbarExpandBtn"),
    crmFunnelSidebar: $("crmFunnelSidebar"),
    crmFunnelNav: $("crmFunnelNav"),
    funnelContextMenu: $("funnelContextMenu"),
    funnelCategoryB2BList: $("funnelCategoryB2BList"),
    funnelCategoryB2CList: $("funnelCategoryB2CList"),
    funnelBackBtn: $("funnelBackBtn"),
    pageTitle: $("pageTitle"),
    pageSubtitle: $("pageSubtitle"),
    topbar: document.querySelector(".topbar"),
    searchInput: $("searchInput"),
    desktopFiltersBtn: $("desktopFiltersBtn"),
    desktopFiltersCount: $("desktopFiltersCount"),
    desktopFiltersPanel: $("desktopFiltersPanel"),
    desktopFiltersCloseBtn: $("desktopFiltersCloseBtn"),
    desktopFiltersSummary: $("desktopFiltersSummary"),
    desktopClearFiltersBtn: $("desktopClearFiltersBtn"),
    mobileClearFiltersBtn: $("mobileClearFiltersBtn"),
    funnelCardsGrid: $("funnelCardsGrid"),
    funnelDiagramPanel: $("funnelDiagramPanel"),
    funnelHubPanel: $("funnelHubPanel"),
    funnelDetailPanel: $("funnelDetailPanel"),
    pipelineStageStrip: $("pipelineStageStrip"),
    pipelineScrollTop: $("pipelineScrollTop"),
    pipeline: $("pipeline"),
    leadsTableBody: $("leadsTableBody"),
    selectAllLeads: $("selectAllLeads"),
    deleteSelectedBtn: $("deleteSelectedBtn"),
    totalLeads: $("totalLeads"),
    totalValue: $("totalValue"),
    closedDeals: $("closedDeals"),
    conversionRate: $("conversionRate"),
    avgTicket: $("avgTicket"),
    topStage: $("topStage"),
    paidRate: $("paidRate"),
    organicLeads: $("organicLeads"),
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
    accessRequestsList: $("accessRequestsList"),
    adminRequestsList: $("adminRequestsList"),
    closeTeamViewBtn: $("closeTeamViewBtn"),
    closeSettingsViewBtn: $("closeSettingsViewBtn"),
    structureFunnelSelect: $("structureFunnelSelect"),
    structureSubfunnelSelect: $("structureSubfunnelSelect"),
    stagesConfigList: $("stagesConfigList"),
    leadSourcesConfigList: $("leadSourcesConfigList"),
    socialSourcesConfigList: $("socialSourcesConfigList"),
    departmentsConfigList: $("departmentsConfigList"),
    shellTabCrm: $("shellTabCrm"),
    shellTabIntel: $("shellTabIntel"),
    shellViewCrm: $("shellViewCrm"),
    shellViewIntel: $("shellViewIntel"),
    profileMenuBtn: $("profileMenuBtn"),
    profileMenu: $("profileMenu"),
    profileMenuAvatar: $("profileMenuAvatar"),
    profileMenuName: $("profileMenuName"),
    profileMenuRole: $("profileMenuRole"),
    openAccountBtn: $("openAccountBtn"),
    profileTeamBtn: $("profileTeamBtn"),
    profileSettingsBtn: $("profileSettingsBtn"),
    headerLogoutBtn: $("headerLogoutBtn"),
    logoutBtn: $("logoutBtn"),
    userWelcome: $("userWelcome"),
    userAccessLevel: $("userAccessLevel"),
    orgNameLabel: $("orgNameLabel"),
    mobileOrgName: $("mobileOrgName"),
    themeToggleBtn: $("themeToggleBtn"),
    themeToggleThumbIcon: $("themeToggleThumbIcon"),
    accountModalOverlay: $("accountModalOverlay"),
    closeAccountModalBtn: $("closeAccountModalBtn"),
    cancelAccountBtn: $("cancelAccountBtn"),
    accountForm: $("accountForm"),
    accountAvatarInitials: $("accountAvatarInitials"),
    accountFullName: $("accountFullName"),
    accountEmail: $("accountEmail"),
    accountRole: $("accountRole"),
    monthlyChart: $("monthlyChart"),
    ownerChart: $("ownerChart"),
    ownerMonthlyAverageChart: $("ownerMonthlyAverageChart"),
    pipelineChart: $("pipelineChart"),
    trafficChart: $("trafficChart"),
    socialChart: $("socialChart"),
    referralSectorChart: $("referralSectorChart"),
    planCountChart: $("planCountChart"),
    planRevenueChart: $("planRevenueChart"),
    yearlyDailyChart: $("yearlyDailyChart"),
  };

  const filterConfigs = [
    { key: "category", defaultLabel: "B2B e B2C", selectId: "categoryFilter", menuId: "categoryFilterMenu", labelId: "categoryFilterLabel", btnId: "categoryFilterBtn", dropdownId: "categoryFilterDropdown", mobileId: "mobileCategoryFilter" },
    { key: "group", defaultLabel: "Todos os grupos", selectId: "groupFilter", menuId: "groupFilterMenu", labelId: "groupFilterLabel", btnId: "groupFilterBtn", dropdownId: "groupFilterDropdown", mobileId: "mobileGroupFilter" },
    { key: "funnel", defaultLabel: "Todos os funis", selectId: "funnelFilter", menuId: "funnelFilterMenu", labelId: "funnelFilterLabel", btnId: "funnelFilterBtn", dropdownId: "funnelFilterDropdown", mobileId: "mobileFunnelFilter" },
    { key: "subfunnel", defaultLabel: "Todos os subfunis", selectId: "subfunnelFilter", menuId: "subfunnelFilterMenu", labelId: "subfunnelFilterLabel", btnId: "subfunnelFilterBtn", dropdownId: "subfunnelFilterDropdown", mobileId: "mobileSubfunnelFilter" },
    { key: "owner", defaultLabel: "Todos os responsaveis", selectId: "ownerFilter", menuId: "ownerFilterMenu", labelId: "ownerFilterLabel", btnId: "ownerFilterBtn", dropdownId: "ownerFilterDropdown", mobileId: "mobileOwnerFilter" },
    { key: "month", defaultLabel: "Todos os meses", selectId: "monthFilter", menuId: "monthFilterMenu", labelId: "monthFilterLabel", btnId: "monthFilterBtn", dropdownId: "monthFilterDropdown", mobileId: "mobileMonthFilter" },
    { key: "stage", defaultLabel: "Todos os pipelines", selectId: "stageFilter", menuId: "stageFilterMenu", labelId: "stageFilterLabel", btnId: "stageFilterBtn", dropdownId: "stageFilterDropdown", mobileId: "mobileStageFilter" },
    { key: "leadSource", defaultLabel: "Todas as origens", selectId: "leadSourceFilter", menuId: "leadSourceFilterMenu", labelId: "leadSourceFilterLabel", btnId: "leadSourceFilterBtn", dropdownId: "leadSourceFilterDropdown", mobileId: "mobileLeadSourceFilter" },
    { key: "socialSource", defaultLabel: "Todos os canais", selectId: "socialSourceFilter", menuId: "socialSourceFilterMenu", labelId: "socialSourceFilterLabel", btnId: "socialSourceFilterBtn", dropdownId: "socialSourceFilterDropdown", mobileId: "mobileSocialSourceFilter" },
    { key: "indicator", defaultLabel: "Todas as indicacoes", selectId: "indicatorFilter", menuId: "indicatorFilterMenu", labelId: "indicatorFilterLabel", btnId: "indicatorFilterBtn", dropdownId: "indicatorFilterDropdown", mobileId: "mobileIndicatorFilter" },
    { key: "indicatorSector", defaultLabel: "Todos os setores", selectId: "indicatorSectorFilter", menuId: "indicatorSectorFilterMenu", labelId: "indicatorSectorFilterLabel", btnId: "indicatorSectorFilterBtn", dropdownId: "indicatorSectorFilterDropdown", mobileId: "mobileIndicatorSectorFilter" },
  ];

  const stageTemplates = [
    { suffix: "novo", name: "Novo Lead/Prospeccao", type: "andamento", color: "#6ea45d" },
    { suffix: "apresentacao", name: "Apresentacao/Negociacao", type: "andamento", color: "#5b9e4b" },
    { suffix: "espera", name: "Nao responde", type: "espera", color: "#a98432" },
    { suffix: "fechado", name: "Fechado", type: "fechado", color: "#3e7d93" },
  ];

  const funnels = [
    {
      id: "funnel-b2b-acao",
      name: "Acao Externos",
      category: "B2B",
      groupId: "group-b2b-vendas",
      subfunnels: [
        { id: "sub-b2b-acao-apresentacao", name: "Apresentacao" },
        { id: "sub-b2b-acao-qualificacao", name: "Qualificacao" },
        { id: "sub-b2b-acao-fechamento", name: "Fechamento" },
      ],
    },
    {
      id: "funnel-b2b-redes",
      name: "Redes Sociais",
      category: "B2B",
      groupId: "group-b2b-vendas",
      subfunnels: [
        { id: "sub-b2b-redes-captacao", name: "Captacao" },
        { id: "sub-b2b-redes-negociacao", name: "Negociacao" },
        { id: "sub-b2b-redes-fechamento", name: "Fechamento" },
      ],
    },
    {
      id: "funnel-b2c-indicacao",
      name: "Indicacao",
      category: "B2C",
      groupId: "group-b2c-vendas",
      subfunnels: [
        { id: "sub-b2c-indicacao-apresentacao", name: "Apresentacao" },
        { id: "sub-b2c-indicacao-continuar", name: "Continuar" },
        { id: "sub-b2c-indicacao-fechamento", name: "Fechamento" },
      ],
    },
    {
      id: "funnel-b2c-redes",
      name: "Redes Sociais",
      category: "B2C",
      groupId: "group-b2c-vendas",
      subfunnels: [
        { id: "sub-b2c-redes-captacao", name: "Captacao" },
        { id: "sub-b2c-redes-negociacao", name: "Negociacao" },
        { id: "sub-b2c-redes-fechamento", name: "Fechamento" },
      ],
    },
    {
      id: "funnel-b2c-acao",
      name: "Acao Externos",
      category: "B2C",
      groupId: "group-b2c-vendas",
      subfunnels: [
        { id: "sub-b2c-acao-contato", name: "Contato Inicial" },
        { id: "sub-b2c-acao-qualificacao", name: "Qualificacao" },
        { id: "sub-b2c-acao-fechamento", name: "Fechamento" },
      ],
    },
  ];

  const groups = [
    { id: "group-b2b-vendas", category: "B2B", name: "Vendas", summary: "Vendas", collapsed: false },
    { id: "group-b2c-vendas", category: "B2C", name: "Vendas", summary: "Vendas", collapsed: false },
  ];

  const stages = funnels.flatMap((funnel) => funnel.subfunnels.flatMap((subfunnel) => (
    stageTemplates.map((template) => ({
      id: `${subfunnel.id}-${template.suffix}`,
      name: template.name,
      stage_type: template.type,
      color: template.color,
      funnel_id: funnel.id,
      subfunnel_id: subfunnel.id,
    }))
  )));

  const leads = [
    { id: "lead-1", name: "Marliene Magalhaes Soares", contact: "64 99967-3937", owner: "Elvislania Alves da Silva", start_date: "2026-07-21", traffic_type: "Indicacao", social_source: "Prospeccao", plan_name: "Nao fechou ainda", value: 0, contract: "", funnel_id: "funnel-b2c-indicacao", subfunnel_id: "sub-b2c-indicacao-apresentacao", stage_id: "sub-b2c-indicacao-apresentacao-novo", referral_name: "Eleone", referral_sector: "LOGISTICA", observations: [{ text: "Contato inicial realizado.", date: "2026-07-21" }] },
    { id: "lead-2", name: "Sara Jessica", contact: "64 99246-3059", owner: "Maria Clara Nicacio Martins", start_date: "2026-07-20", traffic_type: "Indicacao", social_source: "Prospeccao", plan_name: "Nao fechou ainda", value: 0, contract: "", funnel_id: "funnel-b2c-indicacao", subfunnel_id: "sub-b2c-indicacao-continuar", stage_id: "sub-b2c-indicacao-continuar-novo", referral_name: "Eduarda", referral_sector: "CONVENIOS", observations: [{ text: "Aguardando retorno da familia.", date: "2026-07-20" }] },
    { id: "lead-3", name: "Joana", contact: "64 98127-0417", owner: "Elvislania Alves da Silva", start_date: "2026-07-14", traffic_type: "Indicacao", social_source: "Indicacao", plan_name: "Nao fechou ainda", value: 0, contract: "", funnel_id: "funnel-b2c-indicacao", subfunnel_id: "sub-b2c-indicacao-apresentacao", stage_id: "sub-b2c-indicacao-apresentacao-apresentacao", referral_name: "Nathalia", referral_sector: "BANCARIO", observations: [{ text: "Apresentacao realizada.", date: "2026-07-15" }] },
    { id: "lead-4", name: "Wellington", contact: "64 98429-1633", owner: "Leidimar Correa Martins", start_date: "2026-07-14", traffic_type: "Acao Externa", social_source: "Prospeccao", plan_name: "Nao fechou ainda", value: 0, contract: "", funnel_id: "funnel-b2c-acao", subfunnel_id: "sub-b2c-acao-contato", stage_id: "sub-b2c-acao-contato-espera", referral_name: "", referral_sector: "", observations: [{ text: "Sem resposta no ultimo follow-up.", date: "2026-07-18" }] },
    { id: "lead-5", name: "Gabriel", contact: "64 98439-5957", owner: "Leidimar Correa Martins", start_date: "2026-07-14", traffic_type: "Acao Externa", social_source: "Prospeccao", plan_name: "Nao fechou ainda", value: 0, contract: "", funnel_id: "funnel-b2c-acao", subfunnel_id: "sub-b2c-acao-qualificacao", stage_id: "sub-b2c-acao-qualificacao-apresentacao", referral_name: "", referral_sector: "", observations: [{ text: "Interesse inicial confirmado.", date: "2026-07-16" }] },
    { id: "lead-6", name: "Cibele Guimaraes", contact: "64 99602-3273", owner: "Elvislania Alves da Silva", start_date: "2026-07-20", traffic_type: "Pago", social_source: "Instagram", plan_name: "Nao fechou ainda", value: 0, contract: "", funnel_id: "funnel-b2c-redes", subfunnel_id: "sub-b2c-redes-captacao", stage_id: "sub-b2c-redes-captacao-novo", referral_name: "", referral_sector: "", observations: [{ text: "Lead vindo de campanha social.", date: "2026-07-20" }] },
    { id: "lead-7", name: "Carla Vanessa Lenz Dutra", contact: "64 99994-0835", owner: "Willyan Kayke Borges dos Santos", start_date: "2026-07-20", traffic_type: "Pago", social_source: "Instagram", plan_name: "Premium II", value: 150, contract: "43508", funnel_id: "funnel-b2c-redes", subfunnel_id: "sub-b2c-redes-fechamento", stage_id: "sub-b2c-redes-fechamento-fechado", referral_name: "", referral_sector: "", observations: [{ text: "Contrato aprovado.", date: "2026-07-22" }] },
    { id: "lead-8", name: "Devanil Lima Mendes", contact: "64 99315-2777", owner: "Elvislania Alves da Silva", start_date: "2026-07-06", traffic_type: "Indicacao", social_source: "Indicacao", plan_name: "CRISTAL", value: 90, contract: "43604", funnel_id: "funnel-b2c-indicacao", subfunnel_id: "sub-b2c-indicacao-fechamento", stage_id: "sub-b2c-indicacao-fechamento-fechado", referral_name: "Andre", referral_sector: "FUNERARIA", observations: [{ text: "Venda concluida com indicacao direta.", date: "2026-07-06" }] },
    { id: "lead-9", name: "Maria das Gracas", contact: "64 99257-4090", owner: "Willyan Kayke Borges dos Santos", start_date: "2026-07-13", traffic_type: "Pago", social_source: "Indicacao", plan_name: "Premium II", value: 150, contract: "43299", funnel_id: "funnel-b2c-indicacao", subfunnel_id: "sub-b2c-indicacao-fechamento", stage_id: "sub-b2c-indicacao-fechamento-fechado", referral_name: "", referral_sector: "", observations: [{ text: "Fechamento registrado na mesma semana.", date: "2026-07-13" }] },
    { id: "lead-10", name: "Renan", contact: "64 99279-0513", owner: "Leidimar Correa Martins", start_date: "2026-07-14", traffic_type: "Acao Externa", social_source: "Prospeccao", plan_name: "Nao fechou ainda", value: 0, contract: "", funnel_id: "funnel-b2b-acao", subfunnel_id: "sub-b2b-acao-apresentacao", stage_id: "sub-b2b-acao-apresentacao-novo", referral_name: "", referral_sector: "", observations: [{ text: "Primeiro contato pendente.", date: "2026-07-14" }] },
    { id: "lead-11", name: "Ana", contact: "64 99331-6258", owner: "Willyan Kayke Borges dos Santos", start_date: "2026-07-20", traffic_type: "Indicacao", social_source: "Prospeccao", plan_name: "Nao fechou ainda", value: 0, contract: "", funnel_id: "funnel-b2b-acao", subfunnel_id: "sub-b2b-acao-qualificacao", stage_id: "sub-b2b-acao-qualificacao-apresentacao", referral_name: "Henrique Daniel", referral_sector: "COBRANCA", observations: [{ text: "Apresentacao enviada.", date: "2026-07-20" }] },
    { id: "lead-12", name: "Daniel Borges", contact: "64 99283-8345", owner: "Elvislania Alves da Silva", start_date: "2026-06-30", traffic_type: "Indicacao", social_source: "Indicacao", plan_name: "CRISTAL", value: 90, contract: "43509", funnel_id: "funnel-b2b-redes", subfunnel_id: "sub-b2b-redes-fechamento", stage_id: "sub-b2b-redes-fechamento-fechado", referral_name: "Diene", referral_sector: "FUNERARIA", observations: [{ text: "Cliente convertido apos reuniao.", date: "2026-07-01" }] },
    { id: "lead-13", name: "Rafael", contact: "64 99279-3382", owner: "Leidimar Correa Martins", start_date: "2026-07-14", traffic_type: "Acao Externa", social_source: "Prospeccao", plan_name: "Nao fechou ainda", value: 0, contract: "", funnel_id: "funnel-b2c-acao", subfunnel_id: "sub-b2c-acao-contato", stage_id: "sub-b2c-acao-contato-novo", referral_name: "", referral_sector: "", observations: [{ text: "Lead novo em abordagem externa.", date: "2026-07-14" }] },
    { id: "lead-14", name: "Silvio", contact: "64 98401-5058", owner: "Leidimar Correa Martins", start_date: "2026-07-14", traffic_type: "Acao Externa", social_source: "Prospeccao", plan_name: "Nao fechou ainda", value: 0, contract: "", funnel_id: "funnel-b2c-acao", subfunnel_id: "sub-b2c-acao-qualificacao", stage_id: "sub-b2c-acao-qualificacao-novo", referral_name: "", referral_sector: "", observations: [{ text: "Aguardando segunda tentativa.", date: "2026-07-17" }] },
    { id: "lead-15", name: "Geraldo Nelore", contact: "64 9232-1024", owner: "Leidimar Correa Martins", start_date: "2026-07-21", traffic_type: "Acao Externa", social_source: "Prospeccao", plan_name: "Nao fechou ainda", value: 0, contract: "", funnel_id: "funnel-b2b-acao", subfunnel_id: "sub-b2b-acao-apresentacao", stage_id: "sub-b2b-acao-apresentacao-apresentacao", referral_name: "", referral_sector: "", observations: [{ text: "Contato evoluiu para apresentacao.", date: "2026-07-22" }] },
    { id: "lead-16", name: "Maria Tereza", contact: "64 99321-6279", owner: "Elvislania Alves da Silva", start_date: "2026-07-20", traffic_type: "Indicacao", social_source: "Prospeccao", plan_name: "Nao fechou ainda", value: 0, contract: "", funnel_id: "funnel-b2c-indicacao", subfunnel_id: "sub-b2c-indicacao-apresentacao", stage_id: "sub-b2c-indicacao-apresentacao-apresentacao", referral_name: "Eduarda", referral_sector: "CONVENIOS", observations: [{ text: "Negociacao em andamento.", date: "2026-07-20" }] },
    { id: "lead-17", name: "Maria das Dores", contact: "64 99915-4408", owner: "Willyan Kayke Borges dos Santos", start_date: "2026-07-11", traffic_type: "Pago", social_source: "Facebook", plan_name: "Premium I", value: 120, contract: "43112", funnel_id: "funnel-b2c-redes", subfunnel_id: "sub-b2c-redes-fechamento", stage_id: "sub-b2c-redes-fechamento-fechado", referral_name: "", referral_sector: "", observations: [{ text: "Conversao via campanha digital.", date: "2026-07-12" }] },
    { id: "lead-18", name: "Jose Correia", contact: "64 99812-8801", owner: "Elvislania Alves da Silva", start_date: "2026-07-10", traffic_type: "Indicacao", social_source: "Indicacao", plan_name: "CRISTAL", value: 90, contract: "43010", funnel_id: "funnel-b2c-indicacao", subfunnel_id: "sub-b2c-indicacao-fechamento", stage_id: "sub-b2c-indicacao-fechamento-fechado", referral_name: "Natalia Arantes", referral_sector: "MARKETING", observations: [{ text: "Indicacao convertida sem objecoes.", date: "2026-07-10" }] },
    { id: "lead-19", name: "Bruna Nathiely", contact: "64 99911-8732", owner: "Maria Clara Nicacio Martins", start_date: "2026-07-18", traffic_type: "Indicacao", social_source: "Prospeccao", plan_name: "Nao fechou ainda", value: 0, contract: "", funnel_id: "funnel-b2c-indicacao", subfunnel_id: "sub-b2c-indicacao-continuar", stage_id: "sub-b2c-indicacao-continuar-apresentacao", referral_name: "Bruna Nathiely", referral_sector: "MARKETING", observations: [{ text: "Em acompanhamento para retorno.", date: "2026-07-19" }] },
    { id: "lead-20", name: "Luiz Carlos", contact: "64 99410-7105", owner: "Elvislania Alves da Silva", start_date: "2026-07-09", traffic_type: "Pago", social_source: "Instagram", plan_name: "Nao fechou ainda", value: 0, contract: "", funnel_id: "funnel-b2b-redes", subfunnel_id: "sub-b2b-redes-captacao", stage_id: "sub-b2b-redes-captacao-novo", referral_name: "", referral_sector: "", observations: [{ text: "Lead B2B de campanha social.", date: "2026-07-09" }] },
  ];

  const teamMembers = [
    { name: "Wendller", email: "wendller@paxinsights.com", role: "Administrador", department: "Gestao", status: "Aprovado" },
    { name: "Elvislania Alves da Silva", email: "elvislania@paxinsights.com", role: "Gestao", department: "Vendas", status: "Aprovado" },
    { name: "Leidimar Correa Martins", email: "leidimar@paxinsights.com", role: "Usuario", department: "Relacionamento", status: "Aprovado" },
    { name: "Willyan Kayke Borges dos Santos", email: "willyan@paxinsights.com", role: "Usuario", department: "Comercial", status: "Aprovado" },
  ];

  const state = {
    shellView: "crm",
    activeView: "funil",
    activeFunnelId: "funnel-b2c-indicacao",
    activeSubfunnelId: null,
    sidebarCollapsed: false,
    funnelSidebarOpen: true,
    desktopFiltersOpen: false,
    mobileFiltersOpen: false,
    openFilterKey: null,
    funnelContextMenuState: null,
    selectedLeadIds: new Set(),
    search: "",
    filters: Object.fromEntries(filterConfigs.map((item) => [item.key, ""])),
    lastWorkspaceView: "funil",
  };

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function brMoney(value) {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Number(value || 0));
  }

  function formatDate(value) {
    if (!value) return "-";
    const [year, month, day] = String(value).split("-");
    if (!year || !month || !day) return String(value);
    return `${day}/${month}/${year}`;
  }

  function formatMonthLabel(value) {
    if (!value) return "-";
    const [year, month] = value.split("-");
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    return `${months[Math.max(0, Number(month) - 1)] || month}/${year}`;
  }

  function getCurrentUser() {
    return {
      name: "Wendller",
      email: "wendller@paxinsights.com",
      role: "Administrador",
      accessLevel: "Administrador",
      initials: "W",
    };
  }

  function getFunnelById(id) {
    return funnels.find((item) => item.id === id) || null;
  }

  function getGroupById(id) {
    return groups.find((item) => item.id === id) || null;
  }

  function getFunnelsForGroup(groupId) {
    return funnels.filter((item) => item.groupId === groupId);
  }

  function getSubfunnelById(id) {
    for (const funnel of funnels) {
      const subfunnel = funnel.subfunnels.find((item) => item.id === id);
      if (subfunnel) return { ...subfunnel, funnel_id: funnel.id, category: funnel.category };
    }
    return null;
  }

  function getStagesForSubfunnel(subfunnelId) {
    return stages.filter((item) => item.subfunnel_id === subfunnelId);
  }

  function getStageById(id) {
    return stages.find((item) => item.id === id) || null;
  }

  function getStageName(id) {
    return getStageById(id)?.name || "-";
  }

  function stageTypeLabel(type) {
    const labels = {
      andamento: "Andamento",
      fechado: "Fechado",
      espera: "Espera",
      cancelado: "Cancelado",
    };
    return labels[String(type || "").toLowerCase()] || "Pipeline";
  }

  function getLeadPlanValueText(lead) {
    if (Number(lead.value || 0) > 0 && lead.plan_name) {
      return `${lead.plan_name}: ${brMoney(lead.value)}`;
    }
    return "Nao fechou ainda";
  }

  function getLeadPlanDisplayText(lead) {
    return lead.plan_name || "Nao fechou ainda";
  }

  function getLeadLatestObservation(lead) {
    return Array.isArray(lead.observations) && lead.observations.length ? lead.observations[lead.observations.length - 1] : null;
  }

  function getScopedLeads() {
    if (!state.activeSubfunnelId) return [];
    return leads.filter((lead) => lead.subfunnel_id === state.activeSubfunnelId);
  }

  function getFilteredLeads(options = {}) {
    const respectSubfunnelScope = options.scope === "subfunnel";
    const normalizedSearch = normalizeText(state.search);
    let items = respectSubfunnelScope && state.activeSubfunnelId ? getScopedLeads() : [...leads];

    items = items.filter((lead) => {
      const funnel = getFunnelById(lead.funnel_id);
      const group = getGroupById(funnel?.groupId);
      const subfunnel = getSubfunnelById(lead.subfunnel_id);
      const stage = getStageById(lead.stage_id);
      const monthKey = String(lead.start_date || "").slice(0, 7);

      if (state.filters.category && funnel?.category !== state.filters.category) return false;
      if (state.filters.group && group?.name !== state.filters.group) return false;
      if (state.filters.funnel && funnel?.name !== state.filters.funnel) return false;
      if (state.filters.subfunnel && subfunnel?.name !== state.filters.subfunnel) return false;
      if (state.filters.owner && lead.owner !== state.filters.owner) return false;
      if (state.filters.month && monthKey !== state.filters.month) return false;
      if (state.filters.stage && stage?.name !== state.filters.stage) return false;
      if (state.filters.leadSource && lead.traffic_type !== state.filters.leadSource) return false;
      if (state.filters.socialSource && lead.social_source !== state.filters.socialSource) return false;
      if (state.filters.indicator && lead.referral_name !== state.filters.indicator) return false;
      if (state.filters.indicatorSector && lead.referral_sector !== state.filters.indicatorSector) return false;

      if (!normalizedSearch) return true;
      const haystack = normalizeText([
        lead.name,
        lead.contact,
        lead.owner,
        lead.traffic_type,
        lead.social_source,
        lead.plan_name,
        lead.referral_name,
        lead.referral_sector,
        funnel?.name,
        subfunnel?.name,
        stage?.name,
      ].join(" "));
      return haystack.includes(normalizedSearch);
    });

    return items;
  }

  function normalizeText(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function getDashboardMetrics() {
    const filtered = getFilteredLeads();
    const closedLeads = filtered.filter((lead) => getStageById(lead.stage_id)?.stage_type === "fechado");
    const total = filtered.length;
    const totalValue = closedLeads.reduce((sum, lead) => sum + Number(lead.value || 0), 0);
    const conversion = total ? (closedLeads.length / total) * 100 : 0;
    const avgTicket = closedLeads.length ? totalValue / closedLeads.length : 0;
    const waitingCount = filtered.filter((lead) => getStageById(lead.stage_id)?.stage_type === "espera").length;
    const referralCount = filtered.filter((lead) => lead.referral_name).length;
    const byStage = stages.reduce((acc, stage) => {
      if (acc.some((item) => item.name === stage.name)) return acc;
      acc.push({
        name: stage.name,
        color: stage.color,
        count: filtered.filter((lead) => getStageById(lead.stage_id)?.name === stage.name).length,
      });
      return acc;
    }, []);
    const topStage = [...byStage].sort((a, b) => b.count - a.count)[0];
    const ownerTotals = {};
    const referralTotals = {};
    const monthTotals = {};
    const planTotals = {};

    for (const lead of filtered) {
      ownerTotals[lead.owner || "Sem responsavel"] = (ownerTotals[lead.owner || "Sem responsavel"] || 0) + (getStageById(lead.stage_id)?.stage_type === "fechado" ? 1 : 0);
      if (lead.referral_name) {
        referralTotals[lead.referral_name] = (referralTotals[lead.referral_name] || 0) + 1;
      }
      const monthKey = String(lead.start_date || "").slice(0, 7);
      monthTotals[monthKey] = (monthTotals[monthKey] || 0) + 1;
      if (getStageById(lead.stage_id)?.stage_type === "fechado" && lead.plan_name) {
        const key = `${lead.plan_name}__${lead.value || 0}`;
        if (!planTotals[key]) {
          planTotals[key] = { plan: lead.plan_name, unitValue: Number(lead.value || 0), count: 0, totalValue: 0 };
        }
        planTotals[key].count += 1;
        planTotals[key].totalValue += Number(lead.value || 0);
      }
    }

    return {
      total,
      totalValue,
      closed: closedLeads.length,
      conversion,
      avgTicket,
      paidCount: filtered.filter((lead) => normalizeText(lead.traffic_type) === "pago").length,
      organicCount: filtered.filter((lead) => normalizeText(lead.traffic_type) === "organico").length,
      referralCount,
      waitingCount,
      byStage,
      topStage,
      topOwner: Object.entries(ownerTotals).sort((a, b) => (b[1] - a[1]) || a[0].localeCompare(b[0], "pt-BR"))[0],
      topReferral: Object.entries(referralTotals).sort((a, b) => (b[1] - a[1]) || a[0].localeCompare(b[0], "pt-BR"))[0],
      bestMonth: Object.entries(monthTotals).sort((a, b) => b[1] - a[1])[0],
      planSummary: Object.values(planTotals).sort((a, b) => b.totalValue - a.totalValue),
    };
  }

  function getFilterOptions(key) {
    const unique = new Set();
    const push = (value) => {
      if (value) unique.add(String(value));
    };

    for (const lead of leads) {
      const funnel = getFunnelById(lead.funnel_id);
      const group = getGroupById(funnel?.groupId);
      const subfunnel = getSubfunnelById(lead.subfunnel_id);
      const stage = getStageById(lead.stage_id);
      if (key === "category") push(funnel?.category);
      if (key === "group") push(group?.name);
      if (key === "funnel") push(funnel?.name);
      if (key === "subfunnel") push(subfunnel?.name);
      if (key === "owner") push(lead.owner);
      if (key === "month") push(String(lead.start_date || "").slice(0, 7));
      if (key === "stage") push(stage?.name);
      if (key === "leadSource") push(lead.traffic_type);
      if (key === "socialSource") push(lead.social_source);
      if (key === "indicator") push(lead.referral_name);
      if (key === "indicatorSector") push(lead.referral_sector);
    }

    return [...unique].sort((a, b) => String(a).localeCompare(String(b), "pt-BR"));
  }

  function getFilterDisplayValue(key, value) {
    if (key === "month") return formatMonthLabel(value);
    return value;
  }

  function setDesktopFiltersOpen(open) {
    state.desktopFiltersOpen = Boolean(open);
    els.desktopFiltersPanel?.classList.toggle("hidden", !state.desktopFiltersOpen);
    els.desktopFiltersBtn?.setAttribute("aria-expanded", String(state.desktopFiltersOpen));
  }

  function setMobileFiltersOpen(open) {
    state.mobileFiltersOpen = Boolean(open);
    els.mobileFiltersPanel?.classList.toggle("hidden", !state.mobileFiltersOpen);
  }

  function setFilterMenuOpen(key) {
    state.openFilterKey = state.openFilterKey === key ? null : key;
    filterConfigs.forEach((config) => {
      const dropdown = $(config.dropdownId);
      const menu = $(config.menuId);
      const isOpen = state.openFilterKey === config.key;
      dropdown?.classList.toggle("open", isOpen);
      menu?.classList.toggle("hidden", !isOpen);
      $(config.btnId)?.setAttribute("aria-expanded", String(isOpen));
    });
  }

  function clearFilters() {
    state.filters = Object.fromEntries(filterConfigs.map((item) => [item.key, ""]));
    renderFilters();
    renderAll();
  }

  function countActiveFilters() {
    return Object.values(state.filters).filter(Boolean).length;
  }

  function renderFilterSummary() {
    if (!els.desktopFiltersSummary) return;
    const entries = filterConfigs.filter((item) => state.filters[item.key]).map((item) => (
      `<span class="filter-chip">${escapeHtml(getFilterDisplayValue(item.key, state.filters[item.key]))}</span>`
    ));
    els.desktopFiltersSummary.innerHTML = entries.length
      ? entries.join("")
      : '<span class="filter-summary-empty">Nenhum filtro aplicado</span>';
  }

  function renderFilters() {
    filterConfigs.forEach((config) => {
      const options = getFilterOptions(config.key);
      const label = $(config.labelId);
      const menu = $(config.menuId);
      const select = $(config.selectId);
      const mobileSelect = $(config.mobileId);
      const btn = $(config.btnId);
      const dropdown = $(config.dropdownId);
      const currentValue = state.filters[config.key];
      const currentLabel = currentValue ? getFilterDisplayValue(config.key, currentValue) : config.defaultLabel;

      if (label) label.textContent = currentLabel;
      if (select) {
        select.innerHTML = [`<option value="">${escapeHtml(config.defaultLabel)}</option>`]
          .concat(options.map((option) => `<option value="${escapeHtml(option)}" ${currentValue === option ? "selected" : ""}>${escapeHtml(getFilterDisplayValue(config.key, option))}</option>`))
          .join("");
      }
      if (mobileSelect) {
        mobileSelect.innerHTML = [`<option value="">${escapeHtml(config.defaultLabel)}</option>`]
          .concat(options.map((option) => `<option value="${escapeHtml(option)}" ${currentValue === option ? "selected" : ""}>${escapeHtml(getFilterDisplayValue(config.key, option))}</option>`))
          .join("");
      }
      if (menu) {
        menu.innerHTML = [
          `<button type="button" class="filter-option ${!currentValue ? "active" : ""}" data-filter-key="${config.key}" data-filter-value="">${escapeHtml(config.defaultLabel)}</button>`,
          ...options.map((option) => `<button type="button" class="filter-option ${currentValue === option ? "active" : ""}" data-filter-key="${config.key}" data-filter-value="${escapeHtml(option)}">${escapeHtml(getFilterDisplayValue(config.key, option))}</button>`),
        ].join("");
      }

      const disabled = options.length === 0;
      btn?.toggleAttribute("disabled", disabled);
      dropdown?.classList.toggle("is-disabled", disabled);
    });

    const activeCount = countActiveFilters();
    if (els.desktopFiltersCount) {
      els.desktopFiltersCount.textContent = String(activeCount);
      els.desktopFiltersCount.classList.toggle("hidden", activeCount === 0);
    }
    [els.desktopClearFiltersBtn, els.mobileClearFiltersBtn].forEach((button) => {
      if (!button) return;
      button.disabled = activeCount === 0;
      button.classList.toggle("filter-clear-active", activeCount > 0);
    });

    renderFilterSummary();
  }

  function renderFunnelNav() {
    const renderFunnelButton = (funnel) => `
      <div class="crm-funnel-item ${state.activeFunnelId === funnel.id ? "active" : ""}" data-funnel-open="${funnel.id}" role="button" tabindex="0">
        <span class="crm-funnel-item-label">${escapeHtml(funnel.name)}</span>
      </div>
    `;

    const renderGroup = (group) => {
      const groupFunnels = funnels.filter((item) => item.groupId === group.id);
      return `
        <section class="crm-funnel-group" data-funnel-group="${group.id}">
          <div class="crm-funnel-group-head" data-funnel-group-head="${group.id}">
            <button type="button" class="crm-funnel-group-toggle" data-funnel-group-toggle="${group.id}" aria-label="Expandir grupo">
              <span aria-hidden="true">▾</span>
            </button>
            <div class="crm-funnel-group-copy">
              <strong>${escapeHtml(group.name)}</strong>
              <span>${escapeHtml(group.summary)}</span>
            </div>
          </div>
          <div class="crm-funnel-group-body">
            ${groupFunnels.map(renderFunnelButton).join("")}
          </div>
        </section>
      `;
    };

    const renderSectionList = (category, container) => {
      if (!container) return;
      const categoryGroups = groups.filter((item) => item.category === category);
      const ungroupedFunnels = funnels.filter((item) => item.category === category && !item.groupId);
      container.innerHTML = `
        ${categoryGroups.map(renderGroup).join("")}
        <div class="crm-funnel-ungrouped">
          <div class="crm-funnel-ungrouped-label">Sem grupo</div>
          ${ungroupedFunnels.map(renderFunnelButton).join("")}
        </div>
      `;
    };

    renderSectionList("B2B", els.funnelCategoryB2BList);
    renderSectionList("B2C", els.funnelCategoryB2CList);
  }

  function renderFunnelDiagram(funnel) {
    if (!els.funnelDiagramPanel) return;
    const subfunnels = funnel?.subfunnels || [];
    if (!subfunnels.length) {
      els.funnelDiagramPanel.classList.add("hidden");
      els.funnelDiagramPanel.innerHTML = "";
      return;
    }

    const palette = ["#d4ebd8", "#c7e3cd", "#b9dbc1", "#acd3b6", "#9ecbaa", "#90c39f"];
    const total = subfunnels.length;
    const maxInset = Math.min(42, 18 + (total * 3.4));
    const columnsTemplate = subfunnels
      .map((_, index) => `${Math.max(0.46, 1.52 - (index * 0.3)).toFixed(2)}fr`)
      .join(" ");

    els.funnelDiagramPanel.classList.remove("hidden");
    els.funnelDiagramPanel.innerHTML = `
      <div class="funnel-diagram-shell">
        <div class="funnel-diagram-header"><span>Fluxo do funil</span></div>
        <div class="funnel-diagram-body" style="grid-template-columns:${columnsTemplate};">
          ${subfunnels.map((subfunnel, index) => `
            <div
              class="funnel-diagram-segment${index === 0 ? " is-first" : ""}${index === total - 1 ? " is-last" : ""}"
              style="--segment-bg:${palette[index % palette.length]};--left-inset:${((index / total) * maxInset).toFixed(2)}%;--right-inset:${(((index + 1) / total) * maxInset).toFixed(2)}%;z-index:${total - index};"
            >
              <span class="funnel-diagram-segment-index">${index + 1}</span>
              <strong>${escapeHtml(subfunnel.name)}</strong>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  function renderFunnelHub() {
    const funnel = getFunnelById(state.activeFunnelId);
    const detailActive = Boolean(state.activeSubfunnelId);

    els.funnelHubPanel?.classList.toggle("hidden", detailActive || !funnel);
    els.funnelDetailPanel?.classList.toggle("hidden", !detailActive);
    els.funnelBackBtn?.classList.toggle("hidden", !detailActive);
    els.pipelineScrollTop?.classList.toggle("hidden", !detailActive);

    if (!funnel || detailActive) {
      if (detailActive) {
        renderPipelineStageStrip();
        renderPipeline();
      }
      return;
    }

    els.funnelCardsGrid.innerHTML = funnel.subfunnels.map((subfunnel, index) => {
      const subStages = getStagesForSubfunnel(subfunnel.id);
      const stageCount = subStages.length;
      const leadCount = leads.filter((lead) => lead.subfunnel_id === subfunnel.id).length;
      return `
        <article class="funnel-card" data-subfunnel-open="${subfunnel.id}" data-parent-funnel-id="${funnel.id}">
          <div class="funnel-card-head">
            <div class="funnel-card-order-wrap">
              <span class="funnel-card-order">${index + 1}</span>
              <span class="funnel-card-category">${escapeHtml(funnel.category)}</span>
            </div>
            <div class="funnel-card-head-actions">
              <button type="button" class="funnel-card-edit" data-demo-action="edit-subfunnel">✎</button>
            </div>
          </div>
          <div class="funnel-card-body"><h4>${escapeHtml(subfunnel.name)}</h4></div>
          <div class="funnel-card-footer">
            <div class="funnel-card-meta">
              <span>${stageCount} pipelines</span>
              <span>${leadCount} leads</span>
            </div>
            <div class="funnel-card-actions">
              <button type="button" class="funnel-card-delete" data-demo-action="delete-subfunnel">
                <span class="funnel-card-delete-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false"><path d="M9 3.75h6m-8.25 3h10.5m-9.75 0 .6 11.1a1.5 1.5 0 0 0 1.5 1.4h4.8a1.5 1.5 0 0 0 1.5-1.4l.6-11.1m-6 2.55v6.75m3-6.75v6.75" /></svg>
                </span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("") + `
      <button type="button" class="funnel-card funnel-card-create" data-demo-action="create-subfunnel">
        <span class="funnel-card-plus">+</span>
        <span class="funnel-card-create-label">Novo subfunil</span>
      </button>
    `;

    renderFunnelDiagram(funnel);
  }

  function renderPipelineStageStrip() {
    if (!els.pipelineStageStrip) return;
    const filtered = getFilteredLeads({ scope: "subfunnel" });
    const subStages = getStagesForSubfunnel(state.activeSubfunnelId);
    els.pipelineStageStrip.innerHTML = subStages.map((stage) => {
      const count = filtered.filter((lead) => lead.stage_id === stage.id).length;
      return `
        <article class="pipeline-stage-tab">
          <div class="pipeline-stage-tab-main">
            <div class="pipeline-stage-tab-title">
              <span class="pipeline-stage-tab-accent" style="background:${stage.color}"></span>
              <div><strong>${escapeHtml(stage.name)}</strong><span>${escapeHtml(stageTypeLabel(stage.stage_type))}</span></div>
            </div>
          </div>
          <span class="pipeline-stage-tab-badge">${count}</span>
        </article>
      `;
    }).join("");
  }

  function renderPipeline() {
    if (!els.pipeline) return;
    const filtered = getFilteredLeads({ scope: "subfunnel" });
    const subStages = getStagesForSubfunnel(state.activeSubfunnelId);

    els.pipeline.innerHTML = subStages.map((stage) => {
      const stageLeads = filtered.filter((lead) => lead.stage_id === stage.id);
      const cards = stageLeads.length
        ? stageLeads.map((lead) => {
          const latestObservation = getLeadLatestObservation(lead);
          return `
            <article class="card" data-lead-id="${lead.id}">
              <div class="card-top">
                <div>
                  <div class="card-title">${escapeHtml(lead.name)}</div>
                  <div class="card-value" style="--card-value-bg:${stage.color}22;--card-value-color:${stage.color};--card-value-border:${stage.color}55">${escapeHtml(getLeadPlanValueText(lead))}</div>
                </div>
                <span class="status-pill" style="--status-bg:${stage.color}22;--status-color:${stage.color};--status-border:${stage.color}55">${escapeHtml(stageTypeLabel(stage.stage_type))}</span>
              </div>
              <div class="card-meta">
                <span><strong>Contato:</strong> ${escapeHtml(lead.contact || "-")}</span>
                <span><strong>Responsavel:</strong> ${escapeHtml(lead.owner || "-")}</span>
                <span><strong>Inicio:</strong> ${formatDate(lead.start_date)}</span>
                <span><strong>Origem:</strong> ${escapeHtml(lead.traffic_type || "-")}</span>
                ${lead.referral_name ? `<span><strong>Indicou:</strong> ${escapeHtml(lead.referral_name)}</span>` : ""}
                ${lead.referral_sector ? `<span><strong>Setor do indicado:</strong> ${escapeHtml(lead.referral_sector)}</span>` : ""}
                <span><strong>Canal de origem:</strong> ${escapeHtml(lead.social_source || "-")}</span>
                ${lead.contract ? `<span><strong>Contrato:</strong> ${escapeHtml(lead.contract)}</span>` : ""}
              </div>
              ${latestObservation ? `<div class="card-notes"><strong>Ultima observacao:</strong> ${escapeHtml(latestObservation.text)}<small>${formatDate(latestObservation.date)}</small></div>` : ""}
              <div class="card-actions">
                <button type="button" class="edit-btn" data-demo-action="edit-lead">Editar</button>
                <button type="button" class="delete-btn" data-demo-action="delete-lead">Excluir</button>
              </div>
            </article>
          `;
        }).join("")
        : '<div class="empty-state">Nenhum lead nesta etapa.</div>';

      return `<section class="column" data-stage-id="${stage.id}"><div class="column-body">${cards}</div></section>`;
    }).join("");
  }

  function renderLeadTable() {
    if (!els.leadsTableBody) return;
    const filtered = getFilteredLeads();
    if (!filtered.length) {
      els.leadsTableBody.innerHTML = '<tr><td colspan="11" class="empty-state">Nenhum lead encontrado.</td></tr>';
      return;
    }

    els.leadsTableBody.innerHTML = filtered.map((lead) => {
      const isSelected = state.selectedLeadIds.has(lead.id);
      return `
        <tr class="${isSelected ? "is-selected" : ""}">
          <td class="select-col">
            <input type="checkbox" class="lead-check" data-id="${lead.id}" ${isSelected ? "checked" : ""} aria-label="Selecionar ${escapeHtml(lead.name)}" />
          </td>
          <td>${escapeHtml(lead.name)}</td>
          <td>${escapeHtml(lead.contact || "-")}</td>
          <td>${escapeHtml(lead.owner || "-")}</td>
          <td>${escapeHtml(getLeadPlanValueText(lead))}</td>
          <td>${formatDate(lead.start_date)}</td>
          <td>${escapeHtml(lead.traffic_type || "-")}${lead.referral_name ? `<br><small>Indicou: ${escapeHtml(lead.referral_name)}</small>` : ""}${lead.referral_sector ? `<br><small>Setor: ${escapeHtml(lead.referral_sector)}</small>` : ""}</td>
          <td>${escapeHtml(lead.social_source || "-")}</td>
          <td>${escapeHtml(getLeadPlanDisplayText(lead))}${lead.contract ? `<br><small>Contrato: ${escapeHtml(lead.contract)}</small>` : ""}</td>
          <td>${escapeHtml(getStageName(lead.stage_id))}</td>
          <td>
            <div class="table-actions">
              <button type="button" class="edit-btn" data-demo-action="edit-lead">Editar</button>
              <button type="button" class="delete-btn" data-demo-action="delete-lead">Excluir</button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  function renderStats() {
    const metrics = getDashboardMetrics();
    if (els.totalLeads) els.totalLeads.textContent = String(metrics.total);
    if (els.totalValue) els.totalValue.textContent = brMoney(metrics.totalValue);
    if (els.closedDeals) els.closedDeals.textContent = String(metrics.closed);
    if (els.conversionRate) els.conversionRate.textContent = `${metrics.conversion.toFixed(1)}%`;
    if (els.avgTicket) els.avgTicket.textContent = brMoney(metrics.avgTicket);
    if (els.topStage) els.topStage.textContent = metrics.topStage?.name || "-";
    if (els.paidRate) els.paidRate.textContent = String(metrics.paidCount);
    if (els.organicLeads) els.organicLeads.textContent = String(metrics.organicCount);

    if (els.reportTotalLeads) els.reportTotalLeads.textContent = String(metrics.total);
    if (els.reportClosedValue) els.reportClosedValue.textContent = brMoney(metrics.totalValue);
    if (els.reportClosedDeals) els.reportClosedDeals.textContent = String(metrics.closed);
    if (els.reportConversionRate) els.reportConversionRate.textContent = `${metrics.conversion.toFixed(1)}%`;
    if (els.reportReferralCount) els.reportReferralCount.textContent = String(metrics.referralCount);
    if (els.reportWaitingCount) els.reportWaitingCount.textContent = String(metrics.waitingCount);
    if (els.reportAvgTicket) els.reportAvgTicket.textContent = brMoney(metrics.avgTicket);
    if (els.reportTopOwner) els.reportTopOwner.textContent = metrics.topOwner?.[0] || "-";
    if (els.reportTopReferral) els.reportTopReferral.textContent = metrics.topReferral?.[0] || "-";
    if (els.reportTopStage) els.reportTopStage.textContent = metrics.topStage?.name || "-";
    if (els.reportBestMonth) els.reportBestMonth.textContent = metrics.bestMonth?.[0] ? formatMonthLabel(metrics.bestMonth[0]) : "-";
    if (els.reportClosedPlans) els.reportClosedPlans.textContent = String(metrics.planSummary.reduce((sum, item) => sum + item.count, 0));

    if (els.planSummaryBody) {
      els.planSummaryBody.innerHTML = metrics.planSummary.length
        ? metrics.planSummary.map((item) => `
            <tr>
              <td>${escapeHtml(item.plan)}</td>
              <td>${brMoney(item.unitValue)}</td>
              <td>${item.count}</td>
              <td>${brMoney(item.totalValue)}</td>
            </tr>
          `).join("")
        : '<tr><td colspan="4" class="empty-state">Nenhum fechamento com valor encontrado.</td></tr>';
    }
  }

  function renderTeam() {
    if (!els.teamList) return;
    els.teamList.innerHTML = teamMembers.map((member) => `
      <div class="team-item">
        <div class="team-item-head">
          <strong>${escapeHtml(member.name)}</strong>
          <span class="status-chip approved">${escapeHtml(member.status)}</span>
        </div>
        <div class="team-item-meta">E-mail: ${escapeHtml(member.email)}</div>
        <div class="team-item-meta">Nivel: ${escapeHtml(member.role)}</div>
        <div class="team-item-meta">Departamento: ${escapeHtml(member.department)}</div>
        <div class="team-item-actions">
          <button type="button" class="btn btn-secondary" data-demo-action="change-access">Editar acesso</button>
          <button type="button" class="delete-btn" data-demo-action="delete-user">Excluir</button>
        </div>
      </div>
    `).join("");
  }

  function renderAdminPanels() {
    if (els.accessRequestsList) {
      els.accessRequestsList.innerHTML = '<div class="team-item">Nenhuma solicitacao de acesso pendente.</div>';
    }
    if (els.adminRequestsList) {
      els.adminRequestsList.innerHTML = '<div class="team-item">Nenhuma solicitacao operacional registrada.</div>';
    }
  }

  function renderStructure() {
    if (els.structureFunnelSelect) {
      els.structureFunnelSelect.innerHTML = funnels.map((funnel) => `<option value="${escapeHtml(funnel.id)}">${escapeHtml(`${funnel.category} - ${funnel.name}`)}</option>`).join("");
    }

    const activeStructureFunnel = getFunnelById(els.structureFunnelSelect?.value || state.activeFunnelId) || funnels[0];
    if (els.structureSubfunnelSelect) {
      els.structureSubfunnelSelect.innerHTML = activeStructureFunnel.subfunnels.map((subfunnel) => `<option value="${escapeHtml(subfunnel.id)}">${escapeHtml(subfunnel.name)}</option>`).join("");
    }

    const activeSubfunnelId = els.structureSubfunnelSelect?.value || activeStructureFunnel.subfunnels[0]?.id;
    const structureStages = getStagesForSubfunnel(activeSubfunnelId);
    if (els.stagesConfigList) {
      els.stagesConfigList.innerHTML = structureStages.map((stage, index) => `
        <div class="stage-config-item">
          <div class="stage-config-main">
            <div class="stage-config-content">
              <span class="stage-position-label">${index + 1}</span>
              <strong>${escapeHtml(stage.name)}</strong><br>
              <div class="stage-meta-row">
                <span>${escapeHtml(stageTypeLabel(stage.stage_type))}</span>
                <span>${escapeHtml(getSubfunnelById(stage.subfunnel_id)?.name || "-")}</span>
              </div>
            </div>
            <div class="stage-config-actions">
              <button type="button" class="btn btn-secondary" data-demo-action="edit-stage">Editar</button>
            </div>
          </div>
        </div>
      `).join("");
    }

    if (els.leadSourcesConfigList) {
      els.leadSourcesConfigList.innerHTML = [...new Set(leads.map((lead) => lead.traffic_type))].map((item) => `<div class="stage-config-item">${escapeHtml(item)}</div>`).join("");
    }
    if (els.socialSourcesConfigList) {
      els.socialSourcesConfigList.innerHTML = [...new Set(leads.map((lead) => lead.social_source))].map((item) => `<div class="stage-config-item">${escapeHtml(item)}</div>`).join("");
    }
    if (els.departmentsConfigList) {
      els.departmentsConfigList.innerHTML = ["Gestao", "Vendas", "Relacionamento", "Comercial"].map((item) => `<div class="stage-config-item">${escapeHtml(item)}</div>`).join("");
    }
  }

  function drawCanvasMessage(canvas, message) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = Math.max(280, Math.round(canvas.clientWidth || 320));
    const height = Math.max(180, Math.round(canvas.clientHeight || 220));
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = getComputedStyle(document.documentElement).dataset?.theme === "dark" ? "#eff2f0" : "#13211c";
    ctx.font = '600 14px "Segoe UI Variable","Aptos",sans-serif';
    ctx.fillText(message, 18, 28);
  }

  function drawBars(canvas, labels, values, color) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = Math.max(280, Math.round(canvas.clientWidth || 320));
    const height = Math.max(180, Math.round(canvas.clientHeight || 220));
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    const textColor = document.documentElement.dataset.theme === "dark" ? "#eff2f0" : "#13211c";
    const mutedColor = document.documentElement.dataset.theme === "dark" ? "#98a39f" : "#6a7871";
    const max = Math.max(...values, 1);
    const padding = 20;
    const chartHeight = height - 54;
    const barWidth = Math.max(16, (width - (padding * 2) - ((values.length - 1) * 10)) / Math.max(values.length, 1));

    ctx.strokeStyle = document.documentElement.dataset.theme === "dark" ? "rgba(255,255,255,.08)" : "rgba(19,33,28,.08)";
    ctx.beginPath();
    ctx.moveTo(padding, chartHeight);
    ctx.lineTo(width - padding, chartHeight);
    ctx.stroke();

    values.forEach((value, index) => {
      const x = padding + (index * (barWidth + 10));
      const barHeight = (value / max) * (chartHeight - 24);
      const y = chartHeight - barHeight;
      ctx.fillStyle = Array.isArray(color) ? color[index % color.length] : color;
      ctx.fillRect(x, y, barWidth, barHeight);
      ctx.fillStyle = mutedColor;
      ctx.font = '11px "Segoe UI Variable","Aptos",sans-serif';
      ctx.fillText(String(labels[index] || "").slice(0, 8), x, height - 12);
      ctx.fillStyle = textColor;
      ctx.font = '600 11px "Segoe UI Variable","Aptos",sans-serif';
      ctx.fillText(String(value), x, Math.max(14, y - 8));
    });
  }

  function drawLine(canvas, values, color) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = Math.max(280, Math.round(canvas.clientWidth || 320));
    const height = Math.max(180, Math.round(canvas.clientHeight || 220));
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    const max = Math.max(...values, 1);
    const padding = 20;
    const chartWidth = width - (padding * 2);
    const chartHeight = height - (padding * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    values.forEach((value, index) => {
      const x = padding + (chartWidth / Math.max(values.length - 1, 1)) * index;
      const y = padding + chartHeight - ((value / max) * (chartHeight - 8));
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
  }

  function renderCharts() {
    const filtered = getFilteredLeads();
    const monthMap = {};
    const ownerMap = {};
    const stageMap = {};
    const trafficMap = {};
    const socialMap = {};
    const referralMap = {};
    const planCountMap = {};
    const planRevenueMap = {};
    const dayMap = {};

    filtered.forEach((lead) => {
      const monthKey = String(lead.start_date || "").slice(0, 7);
      monthMap[monthKey] = (monthMap[monthKey] || 0) + 1;
      ownerMap[lead.owner || "Sem resp."] = (ownerMap[lead.owner || "Sem resp."] || 0) + 1;
      const stageName = getStageById(lead.stage_id)?.name || "Sem etapa";
      stageMap[stageName] = (stageMap[stageName] || 0) + 1;
      trafficMap[lead.traffic_type || "Sem origem"] = (trafficMap[lead.traffic_type || "Sem origem"] || 0) + 1;
      socialMap[lead.social_source || "Sem canal"] = (socialMap[lead.social_source || "Sem canal"] || 0) + 1;
      if (lead.referral_name) {
        const referralKey = `${lead.referral_name}${lead.referral_sector ? ` / ${lead.referral_sector}` : ""}`;
        referralMap[referralKey] = (referralMap[referralKey] || 0) + 1;
      }
      if (lead.plan_name && Number(lead.value || 0) > 0) {
        planCountMap[lead.plan_name] = (planCountMap[lead.plan_name] || 0) + 1;
        planRevenueMap[lead.plan_name] = (planRevenueMap[lead.plan_name] || 0) + Number(lead.value || 0);
      }
      const dayKey = Number(String(lead.start_date || "").slice(8, 10));
      if (dayKey) dayMap[dayKey] = (dayMap[dayKey] || 0) + 1;
    });

    drawBars(els.monthlyChart, Object.keys(monthMap).map(formatMonthLabel), Object.values(monthMap), "#6fad2b");
    drawBars(els.ownerChart, Object.keys(ownerMap), Object.values(ownerMap), "#5ea14b");
    drawBars(els.ownerMonthlyAverageChart, Object.keys(ownerMap), Object.values(ownerMap).map((value) => Number((value / 3).toFixed(1))), "#7eaa6e");
    drawBars(els.pipelineChart, Object.keys(stageMap), Object.values(stageMap), "#4d879d");
    drawBars(els.trafficChart, Object.keys(trafficMap), Object.values(trafficMap), "#9d7a3e");
    drawBars(els.socialChart, Object.keys(socialMap), Object.values(socialMap), "#5e8b73");
    if (Object.keys(referralMap).length) {
      drawBars(els.referralSectorChart, Object.keys(referralMap), Object.values(referralMap), "#648e50");
    } else {
      drawCanvasMessage(els.referralSectorChart, "Sem indicacoes para exibir.");
    }
    if (Object.keys(planCountMap).length) {
      drawBars(els.planCountChart, Object.keys(planCountMap), Object.values(planCountMap), "#7a9650");
      drawBars(els.planRevenueChart, Object.keys(planRevenueMap), Object.values(planRevenueMap), "#4d7f5a");
    } else {
      drawCanvasMessage(els.planCountChart, "Sem planos fechados.");
      drawCanvasMessage(els.planRevenueChart, "Sem receita por plano.");
    }
    drawLine(els.yearlyDailyChart, Array.from({ length: 31 }, (_, index) => dayMap[index + 1] || 0), "#6fad2b");
  }

  function syncPrimaryMenuState() {
    $$("[data-view]").forEach((button) => {
      button.classList.toggle("active", button.dataset.view === state.activeView && button.closest(".profile-menu") == null);
    });
  }

  function bindView(name) {
    const enteringAdminOverlay = name === "equipe" || name === "configuracoes";
    if (!enteringAdminOverlay) {
      state.lastWorkspaceView = name;
    }

    state.activeView = name;
    if (name === "funil") {
      state.funnelSidebarOpen = true;
    } else {
      state.funnelSidebarOpen = false;
    }

    document.querySelectorAll(".view").forEach((view) => {
      const isActive = view.id === `view-${name}`;
      view.classList.toggle("active-view", isActive);
      view.classList.toggle("hidden", !isActive);
    });

    els.app?.classList.toggle("admin-overlay-mode", enteringAdminOverlay);
    syncFunnelSidebarVisibility();
    syncPrimaryMenuState();
    setMobileFiltersOpen(false);

    const activeFunnel = getFunnelById(state.activeFunnelId);
    const activeSubfunnel = getSubfunnelById(state.activeSubfunnelId);
    const activeGroup = getGroupById(activeFunnel?.groupId);
    const titles = {
      funil: state.activeSubfunnelId
        ? [activeSubfunnel?.name || "Pipeline", activeFunnel?.name || "Visualizacao do funil"]
        : [activeFunnel?.name || "Funis", activeGroup ? `Grupo: ${activeGroup.name}` : "Escolha um funil na lateral para visualizar os cards dos subfunis."],
      leads: ["Lista de Leads", "Visualize todos os leads cadastrados."],
      relatorios: ["Relatorios", "Acompanhe os resultados do CRM compartilhado."],
      equipe: ["Pessoas e Acessos", "Gerencie solicitacoes de acesso, alteracoes administrativas e a equipe ativa no CRM."],
      estrutura: ["Estrutura do CRM", "Gerencie pipelines e a lista de origens de lead usadas no CRM."],
      configuracoes: ["Configuracao", "Consulte o historico administrativo do CRM."],
    };
    const controlsVisible = name === "leads" || name === "relatorios" || (name === "funil" && Boolean(state.activeSubfunnelId));
    if (els.pageTitle) els.pageTitle.textContent = titles[name][0];
    if (els.pageSubtitle) els.pageSubtitle.textContent = titles[name][1];
    els.topbar?.classList.toggle("hidden", false);
    document.querySelector(".topbar-actions")?.classList.toggle("hidden", !controlsVisible);

    renderAll();
  }

  function syncFunnelSidebarVisibility() {
    const visible = state.funnelSidebarOpen && state.activeView === "funil";
    els.app?.classList.toggle("funnel-sidebar-active", visible);
    els.crmFunnelSidebar?.classList.toggle("hidden", !visible);
  }

  function applySidebarCollapsed(collapsed, options = {}) {
    state.sidebarCollapsed = Boolean(collapsed);
    els.app?.classList.toggle("sidebar-collapsed", state.sidebarCollapsed);
    if (options.persist !== false) {
      try {
        window.localStorage.setItem(SIDEBAR_KEY, state.sidebarCollapsed ? "true" : "false");
      } catch (_error) {
        // ignore
      }
    }
    requestAnimationFrame(updateStickyLayout);
  }

  function readSidebarCollapsed() {
    try {
      return window.localStorage.getItem(SIDEBAR_KEY) === "true";
    } catch (_error) {
      return false;
    }
  }

  function updateStickyLayout() {
    const root = document.documentElement;
    const mobileTopbarHeight = els.mobileTopbar?.offsetHeight || 0;
    const shellHeaderHeight = document.querySelector(".shell-header")?.offsetHeight || 0;
    const topbarHeight = els.topbar?.offsetHeight || 0;
    root.style.setProperty("--mobile-topbar-height", `${mobileTopbarHeight}px`);
    root.style.setProperty("--shell-header-height", `${shellHeaderHeight}px`);
    root.style.setProperty("--topbar-height", `${topbarHeight}px`);
    root.style.setProperty("--topbar-sticky-offset", `${mobileTopbarHeight}px`);
    root.style.setProperty("--metrics-sticky-offset", `${mobileTopbarHeight + topbarHeight}px`);
  }

  function openAccountModal() {
    const user = getCurrentUser();
    if (els.accountAvatarInitials) els.accountAvatarInitials.textContent = user.initials;
    if (els.accountFullName) els.accountFullName.value = user.name;
    if (els.accountEmail) els.accountEmail.value = user.email;
    if (els.accountRole) els.accountRole.value = user.role;
    els.accountModalOverlay?.classList.remove("hidden");
  }

  function closeAccountModal() {
    els.accountModalOverlay?.classList.add("hidden");
  }

  function setTheme(theme) {
    const normalized = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = normalized;
    try {
      window.localStorage.setItem(THEME_KEY, normalized);
    } catch (_error) {
      // ignore
    }
    if (els.themeToggleThumbIcon) {
      els.themeToggleThumbIcon.textContent = normalized === "dark" ? "☾" : "☼";
    }
    requestAnimationFrame(renderCharts);
  }

  function showAuth(message = "") {
    els.bootScreen?.classList.add("hidden");
    els.appScreen?.classList.add("hidden");
    els.authScreen?.classList.remove("hidden");
    if (els.authMessage) els.authMessage.textContent = message;
  }

  function showApp() {
    els.bootScreen?.classList.add("hidden");
    els.authScreen?.classList.add("hidden");
    els.appScreen?.classList.remove("hidden");
    renderAll();
  }

  function renderAll() {
    const user = getCurrentUser();
    if (els.userWelcome) els.userWelcome.textContent = user.name;
    if (els.userAccessLevel) els.userAccessLevel.textContent = user.accessLevel;
    if (els.orgNameLabel) els.orgNameLabel.textContent = "Pax Insights";
    if (els.mobileOrgName) els.mobileOrgName.textContent = "CRM Pax";
    if (els.profileMenuAvatar) els.profileMenuAvatar.textContent = user.initials;
    if (els.profileMenuName) els.profileMenuName.textContent = user.name;
    if (els.profileMenuRole) els.profileMenuRole.textContent = `${user.role} liberado`;

    renderFilters();
    renderFunnelNav();
    renderFunnelHub();
    renderLeadTable();
    renderStats();
    renderTeam();
    renderAdminPanels();
    renderStructure();
    if (state.activeView === "relatorios") {
      requestAnimationFrame(renderCharts);
    }
    updateBulkDeleteButton();
    updateStickyLayout();
  }

  function updateBulkDeleteButton() {
    if (!els.deleteSelectedBtn) return;
    const count = state.selectedLeadIds.size;
    els.deleteSelectedBtn.textContent = count ? `Excluir selecionados (${count})` : "Excluir selecionados";
    els.deleteSelectedBtn.classList.toggle("hidden", count === 0);
  }

  function openSubfunnelDetail(subfunnelId) {
    state.activeSubfunnelId = subfunnelId;
    bindView("funil");
  }

  function leaveSubfunnelDetail() {
    state.activeSubfunnelId = null;
    bindView("funil");
  }

  function bindEvents() {
    document.querySelectorAll('[data-admin-only="true"]').forEach((node) => node.classList.remove("hidden"));
    document.querySelectorAll(".tab-btn").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach((item) => item.classList.toggle("active", item === button));
        document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
        const target = button.dataset.tab === "register" ? els.registerForm : els.loginForm;
        target?.classList.add("active");
        if (els.authMessage) els.authMessage.textContent = "";
      });
    });

    els.loginForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      showApp();
    });

    els.registerForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      showApp();
    });

    els.forgotPasswordBtn?.addEventListener("click", () => {
      if (els.authMessage) {
        els.authMessage.textContent = "Modo demonstrativo: a recuperacao de senha continua no ambiente privado.";
      }
    });

    els.profileMenuBtn?.addEventListener("click", () => {
      const isHidden = els.profileMenu?.classList.toggle("hidden");
      els.profileMenuBtn?.setAttribute("aria-expanded", String(!isHidden));
    });

    document.addEventListener("click", (event) => {
      if (els.profileMenu && !els.profileMenu.contains(event.target) && !els.profileMenuBtn?.contains(event.target)) {
        els.profileMenu.classList.add("hidden");
        els.profileMenuBtn?.setAttribute("aria-expanded", "false");
      }
      if (!String(event.target?.className || "").includes("filter-btn") && !event.target?.closest?.(".filter-dropdown")) {
        state.openFilterKey = null;
        setFilterMenuOpen(null);
      }
    });

    els.openAccountBtn?.addEventListener("click", openAccountModal);
    els.closeAccountModalBtn?.addEventListener("click", closeAccountModal);
    els.cancelAccountBtn?.addEventListener("click", closeAccountModal);
    els.accountForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      closeAccountModal();
    });

    els.headerLogoutBtn?.addEventListener("click", () => showAuth("Visual demonstrativo publico."));
    els.logoutBtn?.addEventListener("click", () => showAuth("Visual demonstrativo publico."));

    els.themeToggleBtn?.addEventListener("click", () => {
      setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
    });

    els.shellTabCrm?.addEventListener("click", () => {
      state.shellView = "crm";
      els.shellTabCrm?.classList.add("active");
      els.shellTabIntel?.classList.remove("active");
      els.shellViewCrm?.classList.add("shell-view-active");
      els.shellViewCrm?.classList.remove("hidden");
      els.shellViewIntel?.classList.remove("shell-view-active");
      els.shellViewIntel?.classList.add("hidden");
    });

    els.shellTabIntel?.addEventListener("click", () => {
      state.shellView = "intel";
      els.shellTabIntel?.classList.add("active");
      els.shellTabCrm?.classList.remove("active");
      els.shellViewIntel?.classList.add("shell-view-active");
      els.shellViewIntel?.classList.remove("hidden");
      els.shellViewCrm?.classList.add("hidden");
      els.shellViewCrm?.classList.remove("shell-view-active");
    });

    els.closeTeamViewBtn?.addEventListener("click", () => {
      bindView(state.lastWorkspaceView || "funil");
    });

    els.closeSettingsViewBtn?.addEventListener("click", () => {
      bindView(state.lastWorkspaceView || "funil");
    });

    $$("[data-view]").forEach((button) => {
      button.addEventListener("click", () => {
        if (!button.dataset.view) return;
        bindView(button.dataset.view);
      });
    });

    els.mobileMenuBtn?.addEventListener("click", () => {
      els.sidebar?.classList.toggle("open");
    });

    els.sidebarCollapseBtn?.addEventListener("click", () => applySidebarCollapsed(true));
    els.crmNavbarCollapseBtn?.addEventListener("click", () => applySidebarCollapsed(true));
    els.sidebarExpandBtn?.addEventListener("click", () => applySidebarCollapsed(false));
    els.crmNavbarExpandBtn?.addEventListener("click", () => applySidebarCollapsed(false));

    els.funnelBackBtn?.addEventListener("click", leaveSubfunnelDetail);

    els.searchInput?.addEventListener("input", () => {
      state.search = els.searchInput.value || "";
      renderAll();
    });

    els.desktopFiltersBtn?.addEventListener("click", () => setDesktopFiltersOpen(!state.desktopFiltersOpen));
    els.desktopFiltersCloseBtn?.addEventListener("click", () => setDesktopFiltersOpen(false));
    els.mobileFiltersBtn?.addEventListener("click", () => setMobileFiltersOpen(!state.mobileFiltersOpen));
    els.desktopClearFiltersBtn?.addEventListener("click", clearFilters);
    els.mobileClearFiltersBtn?.addEventListener("click", clearFilters);

    filterConfigs.forEach((config) => {
      $(config.btnId)?.addEventListener("click", () => {
        if ($(config.btnId)?.disabled) return;
        setFilterMenuOpen(config.key);
      });
      $(config.menuId)?.addEventListener("click", (event) => {
        const option = event.target.closest("[data-filter-key]");
        if (!option) return;
        state.filters[config.key] = option.dataset.filterValue || "";
        state.openFilterKey = null;
        renderFilters();
        renderAll();
      });
      $(config.mobileId)?.addEventListener("change", (event) => {
        state.filters[config.key] = event.target.value || "";
        renderFilters();
        renderAll();
      });
    });

    els.selectAllLeads?.addEventListener("change", () => {
      const filteredIds = getFilteredLeads().map((lead) => lead.id);
      if (els.selectAllLeads.checked) {
        filteredIds.forEach((id) => state.selectedLeadIds.add(id));
      } else {
        filteredIds.forEach((id) => state.selectedLeadIds.delete(id));
      }
      renderLeadTable();
      updateBulkDeleteButton();
    });

    els.deleteSelectedBtn?.addEventListener("click", () => {
      window.alert("Modo demonstrativo: a exclusao real permanece apenas no ambiente privado.");
      state.selectedLeadIds.clear();
      renderLeadTable();
      updateBulkDeleteButton();
    });

    els.structureFunnelSelect?.addEventListener("change", renderStructure);
    els.structureSubfunnelSelect?.addEventListener("change", renderStructure);

    document.addEventListener("click", (event) => {
      const funnelItem = event.target.closest("[data-funnel-open]");
      if (funnelItem) {
        state.activeFunnelId = funnelItem.dataset.funnelOpen;
        state.activeSubfunnelId = null;
        bindView("funil");
        return;
      }

      const subfunnelCard = event.target.closest("[data-subfunnel-open]");
      if (subfunnelCard) {
        openSubfunnelDetail(subfunnelCard.dataset.subfunnelOpen);
        return;
      }

      const leadCheck = event.target.closest(".lead-check");
      if (leadCheck && leadCheck.dataset.id) {
        if (leadCheck.checked) {
          state.selectedLeadIds.add(leadCheck.dataset.id);
        } else {
          state.selectedLeadIds.delete(leadCheck.dataset.id);
        }
        updateBulkDeleteButton();
        return;
      }

      const demoButton = event.target.closest("[data-demo-action]");
      if (demoButton) {
        window.alert("Visual demonstrativo: a acao operacional continua somente no repositorio privado.");
      }
    });

    window.addEventListener("resize", () => {
      updateStickyLayout();
      if (state.activeView === "relatorios") {
        renderCharts();
      }
    });
  }

  function init() {
    const user = getCurrentUser();
    if (els.accountAvatarInitials) els.accountAvatarInitials.textContent = user.initials;
    applySidebarCollapsed(readSidebarCollapsed(), { persist: false });
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
    bindEvents();
    showApp();
    bindView("funil");
  }

  init();
})();

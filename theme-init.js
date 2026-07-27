(() => {
  const THEME_KEY = "pax-insights-current.theme";

  try {
    const storedTheme = window.localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = storedTheme;
  } catch (_error) {
    document.documentElement.dataset.theme = "light";
  }
})();

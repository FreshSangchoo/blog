const STORAGE_KEY = "theme";

export function getStoredTheme(): "light" | "dark" | null {
  const theme = localStorage.getItem(STORAGE_KEY);
  return theme === "light" || theme === "dark" ? theme : null;
}

export function getSystemPrefersDark(): boolean {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

export function applyTheme(theme: "light" | "dark") {
  document.documentElement.setAttribute("data-theme", theme);
}

export function initTheme() {
  const stored = getStoredTheme();
  const initial = stored ?? (getSystemPrefersDark() ? "dark" : "light");
  applyTheme(initial);
}

export function toggleTheme(): "light" | "dark" {
  const current =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light";
  const next: "light" | "dark" = current === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem(STORAGE_KEY, next);
  return next;
}

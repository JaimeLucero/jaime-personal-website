export type ColorTheme = 'dark' | 'light';

export const DEFAULT_COLOR_THEME: ColorTheme = 'dark';
export const COLOR_THEME_STORAGE_KEY = 'color-theme';
export const DARK_THEME_CLASS_NAME = 'dark';

// Runs inline in <head> before paint so the stored theme applies without a flash of the wrong colors.
export const APPLY_STORED_THEME_SCRIPT = `(function () {
  try {
    var storedTheme = localStorage.getItem('${COLOR_THEME_STORAGE_KEY}');
    var isDark = storedTheme ? storedTheme === 'dark' : ${JSON.stringify(DEFAULT_COLOR_THEME === 'dark')};
    document.documentElement.classList.toggle('${DARK_THEME_CLASS_NAME}', isDark);
  } catch (error) {}
})();`;

export function readAppliedColorTheme(): ColorTheme {
  return document.documentElement.classList.contains(DARK_THEME_CLASS_NAME) ? 'dark' : 'light';
}

export function applyColorTheme(colorTheme: ColorTheme): void {
  document.documentElement.classList.toggle(DARK_THEME_CLASS_NAME, colorTheme === 'dark');
  try {
    localStorage.setItem(COLOR_THEME_STORAGE_KEY, colorTheme);
  } catch {
    // Private browsing or blocked storage: theme still applies for this page view.
  }
}

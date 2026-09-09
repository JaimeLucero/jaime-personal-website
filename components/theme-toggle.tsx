'use client';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { applyColorTheme, readAppliedColorTheme, DEFAULT_COLOR_THEME, type ColorTheme } from '../src/theme/color-theme';

const ICON_SIZE_IN_PIXELS = 16;

export default function ThemeToggle(props: { className?: string }) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>(DEFAULT_COLOR_THEME);

  useEffect(() => {
    setColorTheme(readAppliedColorTheme());
  }, []);

  const nextColorTheme: ColorTheme = colorTheme === 'dark' ? 'light' : 'dark';

  const handleToggle = () => {
    applyColorTheme(nextColorTheme);
    setColorTheme(nextColorTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={`Switch to ${nextColorTheme} mode`}
      data-testid="theme-toggle"
      data-color-theme={colorTheme}
      className={`inline-flex h-10 w-10 items-center justify-center border border-rule text-muted transition-colors hover:border-accent hover:text-accent ${props.className ?? ''}`}>
      {colorTheme === 'dark' ? <Sun size={ICON_SIZE_IN_PIXELS} /> : <Moon size={ICON_SIZE_IN_PIXELS} />}
    </button>
  );
}

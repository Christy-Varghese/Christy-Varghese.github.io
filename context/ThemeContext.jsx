/**
 * @file ThemeContext.jsx — Theme State Management
 * @description React Context that provides a global theme mode to the app.
 *   Two modes inspired by Kobe Bryant's jersey numbers:
 *     - 'mamba'  (#24) — Black Mamba dark theme (default)
 *     - 'rookie' (#8)  — Purple & Gold lighter variant
 *   Sets `data-mode` attribute on <html> so CSS can style both themes.
 *
 * @exports ThemeProvider — Wrap around app in layout.js
 * @exports useTheme     — Hook returning { mode, toggleMode }
 */

'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('mamba'); // 'mamba' = Black Mamba (#24), 'rookie' = Purple & Gold (#8)

  const toggleMode = () => {
    setMode(prev => (prev === 'mamba' ? 'rookie' : 'mamba'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}

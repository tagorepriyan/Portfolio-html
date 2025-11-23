import React from 'react';
import { useTheme } from '../hooks/useTheme.jsx';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="btn-outline rounded-full w-11 h-11 flex items-center justify-center"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;

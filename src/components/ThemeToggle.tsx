import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const ThemeToggle = ({ className = '' }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`p-2 rounded-lg border border-primary/30 text-primary bg-primary/10 hover:bg-primary/20 hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)] transition-all duration-300 ${className}`}
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;

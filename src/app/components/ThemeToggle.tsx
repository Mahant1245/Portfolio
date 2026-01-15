import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '@/app/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-blue-600" />
        )}
      </motion.div>
    </motion.button>
  );
}

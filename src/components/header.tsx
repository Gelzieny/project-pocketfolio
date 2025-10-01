import { useTheme } from "../contexts/theme-context";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between px-6 py-4 ">
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}
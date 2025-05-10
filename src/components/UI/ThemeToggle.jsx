import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-sm"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"} Mode
    </button>
  );
}
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Menu() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex items-center sm:justify-center space-x-2 md:space-x-4 text-sm">
      {[
        // ["Home", "/"],
        ["Projects", "/#projects"],
        ["Contact", "/#contact"],
      ].map(([title, url]) => (
        <Link href={url} key={url}>
          <a className="rounded-lg px-2 md:px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 dark:text-white dark:hover:bg-slate-700">
            {title}
          </a>
        </Link>
      ))}
      <button
        id="theme-toggle"
        type="button"
        className="text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <svg
          id="theme-toggle-dark-icon"
          className={(theme === "light" ? "" : "hidden") + " w-5 h-5"}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg
          id="theme-toggle-light-icon"
          className={(theme === "light" ? "hidden" : "") + " w-5 h-5"}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </nav>
  );
}

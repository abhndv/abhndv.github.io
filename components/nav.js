import Link from "next/link";

export default function Menu() {
  return (
    <nav className="flex sm:justify-center space-x-4">
      {[
        ["Home", "/"],
        ["About", "/about"],
        ["Projects", "/projects"],
        ["Contact", "/contact"],
      ].map(([title, url]) => (
        <Link href={url} key={url}>
          <a className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 dark:text-white dark:hover:bg-slate-700">
            {title}
          </a>
        </Link>
      ))}
    </nav>
  );
}

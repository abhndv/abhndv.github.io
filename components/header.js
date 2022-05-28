import Menu from "./nav";

export default function Header() {
  return (
    <header className="flex align-center justify-between fixed top-0 left-0 right-0 mx-auto w-[70%] py-8 bg-white text-slate-800 dark:bg-slate-900 dark:text-white">
      <h1 className="text-xl font-semibold ">Abhinandu</h1>
      <Menu></Menu>
    </header>
  );
}

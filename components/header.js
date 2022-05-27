import Menu from "./nav";

export default function Header() {
  return (
    <div className="flex align-center justify-between">
      <h1 className="text-xl font-semibold ">Abhinandu</h1>
      <Menu></Menu>
    </div>
  );
}

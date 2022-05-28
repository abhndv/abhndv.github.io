import Link from "next/link";
import Menu from "./nav";
import { mediaWidth, bgLightDark } from "../data/common-classes";

export default function Header() {
  return (
    <header
      className={
        "flex items-center justify-between fixed top-0 left-0 right-0 mx-auto py-6 md:py-8" +
        mediaWidth +
        bgLightDark
      }
    >
      <Link href={"/"}>
        <h1 className="cursor-pointer text-lg md:text-xl font-bold ">Abhinandu</h1>
      </Link>
      <Menu></Menu>
    </header>
  );
}

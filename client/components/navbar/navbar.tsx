import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  return (
    <nav
      className="bg-indigo-400 fixed w-screen p-10 justifycontent-between flex-row"
      style={{ top: 0, left: 0, zIndex: 1000 }}
    >
      <Link href="/[...user]" as={`/phl3bas`}>
        <a role="button">login</a>
      </Link>

      <Link href="/">
        <a className="mr-15 h-10" role="button">
          Home
        </a>
      </Link>
    </nav>
  );
};

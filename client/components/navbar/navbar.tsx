import Link from "next/link";

const routes = [
  {
    href: "/phl3bas",
    text: "Dashboard",
  },
];

export const Navbar = () => {
  return (
    <nav
      className="bg-teal-400 fixed w-screen h-15 flex-row alignitems-center px-20"
      style={{ top: 0, left: 0, zIndex: 1000 }}
    >
      {routes.map((route, i) => (
        <Link key={i} href={route.href}>
          <a role="button">{route.text}</a>
        </Link>
      ))}
    </nav>
  );
};

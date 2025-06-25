"use client";

import Link from "next/link";
const links = [
  {
    name: "homepage",
    path: "/",
  },
  {
    name: "checkout",
    path: "/checkout",
  },
];

const Routing = () => {
  return (
    <nav>
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Routing;

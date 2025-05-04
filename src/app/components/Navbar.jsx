import Link from "next/link";
import React from "react";

const Navbar = () => {
  const routes = [
    { href: "/", label: "Home" },
    { href: "/pages/products", label: "Products" },
    { href: "/pages/cart", label: "Cart" },
    { href: "/pages/signin", label: "Signin" },
  ];

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center h-[56px] mt-4 mx-4 sm:mx-20">
      <h1 className="flex items-center volkhov-regular logo">Fasco</h1>
      <nav className="mt-2 sm:mt-0">
        <ul className="flex flex-wrap justify-center sm:justify-around">
          {routes.map(({ href, label }) => (
            <li key={href} className="p-2 sm:p-4">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

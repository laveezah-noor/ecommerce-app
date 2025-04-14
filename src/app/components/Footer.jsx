import React from "react";

const Footer = () => {
  const footerRoutes = [
    { href: "/pages", label: "Support Center" },
    { href: "/pages/1", label: "Invoicing" },
    { href: "/pages/2", label: "Contract" },
    { href: "/pages/3", label: "Careers" },
    { href: "/pages/4", label: "Blog" },
    { href: "/pages/signin", label: "FAQs" },
  ];
  return (
    <>
      <div className="separator border-t"></div>
      <footer className="flex h-auto sm:h-[138px] flex-col w-full items-center justify-around py-4 sm:py-0">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-20 h-auto sm:h-[32px]">
          <h1 className="flex items-center volkhov-regular uppercase text-2xl sm:text-[32px]">
            Fasco
          </h1>
          <ul className="flex flex-wrap justify-center">
            {footerRoutes.map(({ href, label }) => (
              <li key={href} className="p-2 sm:p-4">
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 sm:mt-0 text-xs">
          © 2025 Xpro . All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;

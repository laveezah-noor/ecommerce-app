import Image from "next/image";
import React from "react";

const PartnerSection = () => {
  const brandSection = [
    {
      name: "Prada",
      image: "/assets/brands/brand-logo-1.webp",
    },
    {
      name: "Adidas",
      image: "/assets/brands/brand-logo-2.webp",
    },
    {
      name: "Puma",
      image: "/assets/brands/brand-logo-3.webp",
    },
    {
      name: "Reebok",
      image: "/assets/brands/brand-logo-4.webp",
    },
    {
      name: "Vans",
      image: "/assets/brands/brand-logo-5.webp",
    },
  ];
  return (
    <section className="container flex flex-row mx-auto py-12 justify-between">
      {brandSection.map((brand) => (
        <div key={brand.name} className="flex items-center justify-center mx-2">
          <Image
            src={brand.image}
            alt={brand.name}
            width={200}
            height={40}
            loading="lazy"
          />
        </div>
      ))}
    </section>
  );
};

export default PartnerSection;

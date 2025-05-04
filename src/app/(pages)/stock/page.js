import React from "react";
import Card from "@/app/components/Card/Card";
import { products } from "@/app/data/dummyData";

function Stock() {
  return (
    <div className="my-6">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 my-6">
        Featured
      </h2>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-10">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Stock;

"use client";

import React from "react";

import { HoverEffect } from "@/components/ui/card-hover-effect";

function Products() {
  const products = [
    {
      title: "bencv2 go",
      link: "https://github.com/bencv2/go-runtime",
      description: "A benc schema",
    },
    {
      title: "bencc",
      link: "https://github.com/bencv2/bencc",
      description:
        "The compiler of bencv2 - generated and check broken bencv2 code in seconds. Don't let broken compatibility stop you.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        items={products}
      />
    </div>
  );
}

export default Products;

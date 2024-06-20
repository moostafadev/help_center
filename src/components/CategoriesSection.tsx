"use client";

import { fetchProducts } from "@/api/products";
import { IProduct } from "@/interfaces";
import React, { useState, useEffect } from "react";

const CategoriesSection = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    fetchProducts("https://dummyjson.com/products").then((data) =>
      setProducts(data.products)
    );
  }, [products]);

  return (
    <section>
      <div className="container">
        <div>CategoriesSection</div>
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </section>
  );
};

export default CategoriesSection;

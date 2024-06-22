"use client";

import { fetchProducts } from "@/api/products";
import { IProduct } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const CategoriesSection = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    fetchProducts("https://dummyjson.com/products").then((data) =>
      setProducts(data.products)
    );
  }, []);

  return (
    <section className="py-10">
      <div className="container">
        <div>
          {products?.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`artical/${product.id}-${product.title}`}
                    className="block shadow-sm p-6 border-gray-200 border-[1px] rounded-md hover:border-second duration-300 group hover:text-second"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="p-3 rounded-md bg-secondAlt">
                        {/* For Test */}
                        <Image
                          src={product.thumbnail}
                          alt={product.title}
                          width={50}
                          height={50}
                          className="rounded-md"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2>{product.title}</h2>
                        <p className="text-sm text-gray-500">
                          {product.reviews.length} - Review
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

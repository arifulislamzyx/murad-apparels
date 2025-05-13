"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { IAProduct } from "@/type/product";
import Image from "next/image";

const CategoryProductsPage = () => {
  const { category } = useParams(); // category is the dynamic segment
  const [product, setProducts] = useState<IAProduct[]>([]);
  console.log("params category", category);

  useEffect(() => {
    if (category) {
      axios
        .get(`/api/product/categories/${category}`)
        .then((res) => {
          console.log("Fetched Products:", res.data); // Log API response
          setProducts(res.data);
        })
        .catch((err) => console.error("Fetch error:", err));
    }
  }, [category]);

  console.log("Filtered Product with Categories", product);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-28">
      {product.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        product.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow">
            <Image
              src={product.productImage}
              alt={product.productName}
              width={300}
              height={200}
              className="rounded object-cover w-full h-40"
            />
            <h2 className="text-lg font-bold mt-2">{product.productName}</h2>
            <p>{product.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryProductsPage;

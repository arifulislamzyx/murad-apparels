"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { IAProduct } from "@/type/product";

const CategoryProductsPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState<IAProduct[]>([]);

  useEffect(() => {
    if (categoryId) {
      axios
        .get(`/api/product/categories/${categoryId}`)
        .then((res) => setProducts(res.data))
        .catch((err) => console.error("Fetch error:", err));
    }
  }, [categoryId]);

  console.log("Categories", products);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 pt-20">
      {products.map((product) => (
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
      ))}
    </div>
  );
};

export default CategoryProductsPage;

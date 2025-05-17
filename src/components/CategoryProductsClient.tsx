"use client";
import Image from "next/image";
import { IAProduct } from "@/type/product";

const CategoryProductsClient = ({
  category,
  products,
}: {
  category: string;
  products: IAProduct[];
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-28">
      {products.length === 0 ? (
        <p>No products found in category: {category}</p>
      ) : (
        products.map((product) => (
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

export default CategoryProductsClient;

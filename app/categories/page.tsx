"use client";

import { fetchProductList } from "@/Redux/Slice/product-slice";
import { AppDispatch, RootState } from "@/Redux/Store/Store";
import CategorySkeleton from "@/skeleton/categories";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { isLoading, products } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  // Extract unique categories
  const categories = Array.from(
    new Map(products.map((product) => [product.categoryId, product])).values()
  );

  if (isLoading) return <CategorySkeleton />;

  return (
    <div className="bg-slate-300">
      <div className="container py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Apparel That We Manufacture
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {categories.map((category) => (
            <div
              key={category.categoryId}
              className="w-full max-w-xs cursor-pointer shadow-lg p-4 rounded bg-white hover:scale-105 transition-transform"
              onClick={() => router.push(`/categories/${category.categoryId}`)}
            >
              <Image
                src={category.productImage}
                alt={category.category}
                width={400}
                height={300}
                className="rounded object-cover w-full h-44"
              />
              <h2 className="text-center mt-4 font-semibold text-gray-800">
                {category.category}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

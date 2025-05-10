"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/Store/Store";
import { fetchProductList } from "@/Redux/Slice/product-slice";
import SidebarFilter from "@/components/sidebar-filter";
import ProductCard from "@/components/product-card";
import Pagination from "@/components/pagination";
import { IAProduct } from "@/type/product";
import ProductPageSkeleton from "@/skeleton/product-page";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, isLoading } = useSelector(
    (state: RootState) => state.products
  );

  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  const filteredProducts = categoryFilter.length
    ? products.filter((product) => categoryFilter.includes(product.category))
    : products;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  if (isLoading) return <ProductPageSkeleton />;

  return (
    <div className="w-full px-4 md:px-8 py-6 mt-28">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <SidebarFilter
            selected={categoryFilter}
            onChange={setCategoryFilter}
          />
        </div>

        {/* Products Section */}
        <div className="w-full md:w-3/4 flex flex-col">
          {isLoading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {currentProducts.map((product: IAProduct) => (
                  <ProductCard key={product.productCode} product={product} />
                ))}
              </div>
              {/* Pagination below grid */}
              <div className="mt-6">
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(
                    filteredProducts.length / productsPerPage
                  )}
                  onPageChange={setCurrentPage}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

const ProductPageSkeleton = () => {
  return (
    <div className="flex gap-6 p-6 animate-pulse mt-5">
      {/* Sidebar Skeleton */}
      <div className="w-64 space-y-4">
        <div className="h-6 w-3/4 bg-gray-300 rounded" />
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="h-4 w-5/6 bg-gray-200 rounded" />
        ))}
      </div>

      {/* Product Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {Array.from({ length: 9 }).map((_, idx) => (
          <div key={idx} className="border p-4 rounded shadow bg-white">
            <div className="w-full h-48 bg-gray-300 rounded" />
            <div className="mt-3 h-4 w-3/4 bg-gray-300 rounded mx-auto" />
            <div className="mt-2 h-3 w-1/2 bg-gray-200 rounded mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPageSkeleton;

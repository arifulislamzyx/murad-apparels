// components/Pagination.tsx
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => (
  <div className="w-full flex justify-center mt-6">
    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index}
        className={`mx-1 px-3 py-1 rounded ${
          currentPage === index + 1 ? "bg-black text-white" : "bg-gray-200"
        }`}
        onClick={() => onPageChange(index + 1)}
      >
        {index + 1}
      </button>
    ))}
  </div>
);

export default Pagination;

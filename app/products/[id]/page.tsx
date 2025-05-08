import ProductModal from "@/components/product-modal";
import Image from "next/image";
import { notFound } from "next/navigation";

// ✅ Use fetch (Next.js handles this correctly on server)
async function getProduct(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${id}`,
    {
      cache: "no-store", // disable caching if data may change
    }
  );

  if (!res.ok) return null;

  return await res.json();
}

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);
  if (!product) return notFound();

  return (
    <div className="w-full px-4 md:px-8 py-20 bg-slate-100">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={product.productImage}
            alt={product.productName}
            width={400}
            height={500}
            className="object-contain rounded-xl shadow-md"
            priority
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">
            {product.productName}
          </h1>
          <p className="text-lg text-gray-500">
            Fabric Type: {product.fabricType}
          </p>
          <p className="text-lg text-gray-500">
            Origin: {product.fabricOrigin}
          </p>
          <p className="text-lg text-red-600 font-medium">
            Product Code: {product.productCode}
          </p>

          <div className="pt-4">
            <ProductModal product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

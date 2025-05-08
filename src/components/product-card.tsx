// components/ProductCard.tsx
import Link from "next/link";
import Image from "next/image";
import { IAProduct } from "@/type/product";

const ProductCard = ({ product }: { product: IAProduct }) => (
  <div className="container">
    <div className=" border p-2 text-center mx-auto hover:scale-105 transition-all">
      <Link href={`/products/${product.productCode}`}>
        <Image
          src={product.productImage}
          alt={product.productName}
          width={200}
          height={200}
        />
        <p className="mt-2 text-gray-800 font-medium truncate">
          {product.productName.slice(0, 20)}...
        </p>

        <p className="text-sm text-gray-500">{product.productCode}</p>
      </Link>
    </div>
  </div>
);

export default ProductCard;

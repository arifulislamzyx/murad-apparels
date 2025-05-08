import mongoose from "mongoose";
import { NextResponse } from "next/server";
import connectionDb from "@/libs/db.connection";
import { Product } from "../../../../server/modals/product";

// GET /api/products/[id]
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(connectionDb);
    }

    const product = await Product.findOne({
      productCode: params.id, // or use _id: params.id if you're querying by MongoDB _id
    });

    console.log("signle Product Found");

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Product Fetch Error:", error);
    return NextResponse.json(
      { message: "Server error while fetching product" },
      { status: 500 }
    );
  }
}

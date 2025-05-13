import mongoose from "mongoose";
import { NextResponse } from "next/server";
import connectionDb from "@/libs/db.connection";
import { Product } from "../../../../../server/modals/product";

export async function GET(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(connectionDb);
    }

    const products = await Product.find({ categoryId: params.categoryId });

    console.log("categories in api", products);

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching category products:", error);
    return NextResponse.json(
      { message: "Server error while fetching category products" },
      { status: 500 }
    );
  }
}

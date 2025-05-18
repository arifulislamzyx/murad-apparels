// import mongoose from "mongoose";
// import connectionDb from "@/libs/db.connection";
// import { NextResponse } from "next/server";
// import { Product } from "../../../server/modals/product";

// export const GET = async () => {
//   await mongoose.connect(connectionDb);

//   try {
//     console.log("Mongodb Connected", connectionDb);

//     const items = await Product.find();

//     console.log("Items API", items);

//     // items.find((data) => data._id === data._id);

//     return NextResponse.json(items);
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Error while getting items" },
//       { status: 500 }
//     );
//   }
// };

import connectDB from "@/db/connection";
import connectionDb from "@/libs/db.connection";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Product } from "../../../server/modals/product";

export const GET = async () => {
  try {
    await connectDB();

    const items = await Product.find();

    return NextResponse.json(items);
  } catch (error) {
    console.error("MongoDB Error:", error);

    return NextResponse.json(
      { message: "Error while getting items" },
      { status: 500 }
    );
  }
};

export async function POST(req: Request) {
  try {
    await mongoose.connect(connectionDb);
    const body = await req.json();

    const newProduct = new Product(body);
    await newProduct.save();

    return NextResponse.json({
      message: "Product created",
      product: newProduct,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating product", error },
      { status: 500 }
    );
  }
}

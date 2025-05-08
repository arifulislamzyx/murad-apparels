// // app/api/upload/route.ts
// import { v2 as cloudinary } from "cloudinary";
// import { NextResponse } from "next/server";

// // Cloudinary config
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
//   api_key: process.env.CLOUDINARY_API_KEY!,
//   api_secret: process.env.CLOUDINARY_API_SECRET!,
// });

// export async function POST(req: Request) {
//   const formData = await req.formData();
//   const file = formData.get("image") as File;

//   if (!file) {
//     return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
//   }

//   // Convert File -> Buffer
//   const arrayBuffer = await file.arrayBuffer();
//   const buffer = Buffer.from(arrayBuffer);

//   try {
//     const result = await new Promise((resolve, reject) => {
//       cloudinary.uploader
//         .upload_stream({ folder: "products" }, (error, result) => {
//           if (error) return reject(error);
//           resolve(result);
//         })
//         .end(buffer);
//     });

//     return NextResponse.json({ url: (result as any).secure_url });
//   } catch (err) {
//     console.error("Upload failed", err);
//     return NextResponse.json({ error: "Upload failed" }, { status: 500 });
//   }
// }

// app/api/upload/route.ts

import {
  v2 as cloudinary,
  UploadApiResponse,
  UploadApiErrorResponse,
} from "cloudinary";
import { NextResponse } from "next/server";

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("image") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  try {
    const result: UploadApiResponse = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder: "products" },
          (
            error: UploadApiErrorResponse | undefined,
            result: UploadApiResponse | undefined
          ) => {
            if (error || !result) return reject(error);
            resolve(result);
          }
        )
        .end(buffer);
    });

    return NextResponse.json({ url: result.secure_url });
  } catch (err) {
    console.error("Upload failed", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

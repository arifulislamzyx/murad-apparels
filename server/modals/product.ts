import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: { type: String },
  fabricType: { type: String },
  productCategory: { type: String },
  productImage: { type: String },
  fabricOrigin: { type: String },
  description: { type: String },
  productCode: { type: String },
  category: { type: String },
  categoryId: { type: String },
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/Store/Store";
import { createProduct } from "@/Redux/Slice/product-slice";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddProductForm = () => {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isError, error } = useSelector(
    (state: RootState) => state.products
  );

  const [product, setProduct] = useState({
    productName: "",
    fabricType: "",
    productCategory: "",
    fabricOrigin: "",
    productCode: "",
    description: "",
    category: "",
    categoryId: "",
    productImage: "", // image URL will be stored here
  });

  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let imageUrl = "";

    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);

      try {
        const res = await axios.post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (res.data.url) {
          imageUrl = res.data.url;
          console.log("Image uploaded to:", imageUrl);
        } else {
          console.error("Failed to upload image:", res);
        }
      } catch (err) {
        console.error("Image upload failed:", err);
      }
    }

    dispatch(createProduct({ ...product, productImage: imageUrl }));
  };

  const handleLogout = async () => {
    // Optional: call backend to destroy session/cookie
    await fetch("/api/logOut", {
      method: "POST",
    });

    // Redirect to login page
    router.push("/login");
  };

  return (
    <section>
      <button onClick={handleLogout}>Log Out</button>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(product).map(
          (key) =>
            key !== "productImage" && (
              <div key={key}>
                <input
                  name={key}
                  placeholder={key}
                  onChange={handleChange}
                  className="block w-full border px-2 py-1"
                />
              </div>
            )
        )}
        <input
          type="file"
          onChange={handleImageChange}
          className="block w-full"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white px-4 py-2"
        >
          {isLoading ? "Adding..." : "Add Product"}
        </button>

        {isError && <p className="text-red-500">{error}</p>}
      </form>
    </section>
  );
};

export default AddProductForm;

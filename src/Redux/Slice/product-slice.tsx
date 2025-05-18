import { IAProduct } from "@/type/product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductSlice {
  products: IAProduct[];
  isLoading: boolean;
  isError: boolean;
  error: string | null | undefined;
}

const initialState: ProductSlice = {
  products: [],
  isLoading: true,
  isError: false,
  error: null,
};

export const fetchProductList = createAsyncThunk("product/fetchProductList", async () => {
  try {
    const response = await axios.get<IAProduct[]>("/api/product");
    console.log("Product", response);

    return response.data;
  } catch (error) {
    console.error("Product list fetch failed for ==>", error);
    throw new Error("Failed to fetch product list");
  }
});

export const fetchProductById = createAsyncThunk("product/fetchProductById", async (id: string) => {
  try {
    const response = await axios.get<IAProduct>(`/api/product/${id}`);
    return response.data;
  } catch (error) {
    console.error("Product fetch by ID failed:", error);
    throw new Error("Failed to fetch hotel details");
  }
});

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (newProduct: Omit<IAProduct, "_id">) => {
    try {
      const response = await axios.post<IAProduct>("/api/product", newProduct);
      console.log(response, "product Created");

      return response.data;
    } catch (error) {
      console.error("Product creation failed:", error);
      throw new Error("Failed to create product");
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (updateProduct: IAProduct) => {
    try {
      const response = await axios.put<IAProduct>(
        `/api/product/${updateProduct._id}`,
        updateProduct
      );
      return response.data;
    } catch (error) {
      console.error("Product update failed:", error);
      throw new Error("Failed to update product");
    }
  }
);

export const deleteProduct = createAsyncThunk("product/deleteProduct", async (id: string) => {
  try {
    await axios.delete(`/api/product/${id}`);
    return id;
  } catch (error) {
    console.error("Product deletion failed:", error);
    throw new Error("Failed to delete product");
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })

      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;

        const existingProductIndex = state.products.findIndex(
          (product) => product._id === action.payload._id
        );

        if (existingProductIndex !== -1) {
          state.products[existingProductIndex] = action.payload;
        } else {
          state.products.push(action.payload);
        }
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message || "Failed to fetch products details";
      })
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        const index = state.products.findIndex((product) => product._id === action.payload._id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.products = state.products.filter((product) => product._id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

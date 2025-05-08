import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../Slice/product-slice";

export const RootState = combineReducers({
  products: ProductSlice,
});

const store = configureStore({
  reducer: RootState,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductData = createAsyncThunk(
  "fetchProductData",
  async () => {
    const response = await fetch(
      "https://localhost:3000/product_and_category/product/"
    );
    return response.json();
  }
);

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    productData: [],
    error: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.loading = false;
      state.productData = action.payload;
    });
    builder.addCase(fetchProductData.rejected, (state) => {
      state.error = true;
    });
  },
});

export default ProductSlice.reducer;

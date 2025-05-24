// src/features/products/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("/products.json"); 
  return response.data;
});

const initialState = {
  items: [],
  filteredItems: [],
  searchTerm: "",
  selectedCategory: "All",
  status: "idle", 
};

const filterProducts = (state) => {
  return state.items.filter((prod) => {
    const matchSearch = prod.title
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase());
    const matchCategory =
      state.selectedCategory === "All" ||
      prod.category === state.selectedCategory;
    return matchSearch && matchCategory;
  });
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, actions) => {
      state.searchTerm = actions.payload;
      state.filteredItems = filterProducts(state);
    },
    setSelectedCategory: (state, actions) => {
      state.selectedCategory = actions.payload;
      state.filteredItems = filterProducts(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.filteredItems = filterProducts({
          ...state,
          items: action.payload,
        });
        state.status = "succeeded";
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setSearchTerm, setSelectedCategory } = productSlice.actions;
export default productSlice.reducer;

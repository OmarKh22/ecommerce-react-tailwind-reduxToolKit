import { createSlice } from "@reduxjs/toolkit";
import products from "../../../products";

const initialState = {
  items: products,
  filteredItems: products,
  searchTerm: "",
  selectedCategory: "All",
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
    setSelectedCategory:(state, actions)=>{
      state.selectedCategory = actions.payload
      state.filteredItems = filterProducts(state);

    }
  },
});

export const { setSearchTerm , setSelectedCategory } = productSlice.actions;
export default productSlice.reducer;

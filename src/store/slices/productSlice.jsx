import { createSlice, nanoid } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    addProduct(state, action) {
      state.data.push({
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        id: nanoid(),
      });
    },
    removeProduct(state, action) {
      state.data = state.data.filter((product) => {
        return product.id !== action.payload;
      });
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { addProduct, removeProduct, changeSearchTerm } =
  productSlice.actions;

export const productReducer = productSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { addProduct } from "./productSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    description: "",
    price: 0,
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeDescription: (state, action) => {
      state.description = action.payload;
    },
    changePrice: (state, action) => {
      state.price = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addProduct, (state, action) => {
      state.name = "";
      state.description = "";
      state.price = 0;
    });
  },
});

export const { changeName, changeDescription, changePrice } = formSlice.actions;
export const formReducer = formSlice.reducer;

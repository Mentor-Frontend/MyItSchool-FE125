
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../../actions/reducer/index";

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
});
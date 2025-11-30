import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../redux/slices/userSlice.js";
import adminReducer from "../redux/slices/adminSlice.js";
import bookingreducer from "../redux/slices/bookingSlice.js";

export const store = configureStore({
  reducer: {
    user: useReducer,
    admin: adminReducer,
    booking: bookingreducer,
  },
});
import { createSlice } from "@reduxjs/toolkit";

const saveBooking = JSON.parse(localStorage.getItem("booking"));

const initialState = {
  booking: saveBooking || null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state?.booking?.push(action.payload);

      localStorage.setItem("booking", JSON.stringify(state.booking));
    },
  },
});

export const { addBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
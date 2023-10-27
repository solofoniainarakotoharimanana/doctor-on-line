import { createSlice } from "@reduxjs/toolkit";

export const doctorSlice = createSlice({
  name: "DoctorSlice",
  initialState: {
    doctorList: [],
  },
  reducers: {
    setDoctors: (currentSlice, action) => {
      currentSlice.doctorList = action.payload;
    },
  },
});

export const doctorReducer = doctorSlice.reducer;
export const { setDoctors } = doctorSlice.actions;

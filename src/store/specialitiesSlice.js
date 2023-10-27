import { createSlice } from "@reduxjs/toolkit";

export const specialitiesSlice = createSlice({
  name: "specialitiesSlice",
  initialState: {
    specialityList: [],
  },
  reducers: {
    setSpecialities: (currentList, action) => {
      currentList.specialityList = action.payload;
    },
  },
});

export const { setSpecialities } = specialitiesSlice.actions;
export const specialitiesReducer = specialitiesSlice.reducer;

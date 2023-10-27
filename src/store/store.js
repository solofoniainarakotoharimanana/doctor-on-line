import { configureStore } from "@reduxjs/toolkit";
import { doctorReducer } from "./doctorSlice";
import { specialitiesReducer } from "./specialitiesSlice";

export const store = configureStore({
  reducer: {
    DOCTORS: doctorReducer,
    SPECIALITIES: specialitiesReducer,
  },
});

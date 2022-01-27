import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/car/carSlice";
import userReducer from "../features/userSlice";
export const store = configureStore({
  reducer: {
    car: carReducer,
    user:userReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import rideReducer from "../features/rides/rideSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    rides: rideReducer,
  },
});

export default store;

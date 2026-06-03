import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../features/Login/model/authSlice/authSlice"
export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../../../shared/axiosAuth/axiosAuth";
import { beckendRoutes } from "../../../../app/routes/beckendRoutes/beckendRoutes";

export const login =  createAsyncThunk(
    "users/login",

    async (credentials, {rejectWithValue})=> {
        try {
            const response = await authApi.post(beckendRoutes.loginRoute, credentials)
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error?.response?.data)
        }
        
    }
)
export const refresh = createAsyncThunk (
    "users/refresh", async (_, {rejectWithValue})=> {
        try {
            const response = await authApi.post(beckendRoutes.refreshRouta)
            return response.data
        }
     catch (error) {
        return rejectWithValue(error?.response?.data)
    }
})



export const logout = createAsyncThunk (
    "users/logout", async (_, {rejectWithValue})=> {
        try {
            await authApi.post(beckendRoutes.logoutRoute)
            return
        }
     catch (error) {
        return rejectWithValue(error?.response?.data)
    }
})

import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../../../shared/axiosAuth/axiosAuth";
import { beckendRoutes } from "../../../../app/routes/beckendRoutes/beckendRoutes";

export const login =  createAsyncThunk(
    "users/login",

    async (credentials, {rejectWithValue})=> {
        try {
            const response = await authApi.post(beckendRoutes.loginRoute, credentials)
        } catch (error) {
            return rejectWithValue ('ой щось пішло не так');
        }
        
    }
)
export const refresh = createAsyncThunk (
    "users/refresh", async (_, {rejectWithValue})=> {
        try {
            const result = await authApi.post(beckendRoutes.refreshRouta)
            return result.data
        }
     catch (error) {
        return rejectWithValue("ой щось пішло не так")
    }
})



export const logout = createAsyncThunk (
    "users/logout", async (_, {rejectWithValue})=> {
        try {
            const result = await authApi.post(beckendRoutes.logoutRoute)
            return result.data
        }
     catch (error) {
        return rejectWithValue("ой щось пішло не так")
    }
})

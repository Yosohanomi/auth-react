import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../../../shared/axiosAuth/axiosAuth";
import { beckendRoutes } from "../../../../app/routes/beckendRoutes/beckendRoutes";

export const login =  createAsyncThunk(
    "users/login",

    async (credentials, {rejectWithValue})=> {
        try {
            const response = await authApi.post(beckendRoutes.loginRoute, credentials)
        } catch {

        }
        
    }
)
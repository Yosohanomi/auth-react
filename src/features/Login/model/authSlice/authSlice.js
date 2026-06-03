import { createSlice } from "@reduxjs/toolkit";
import { logout, refresh } from "../authThunks/authThunks";
import { appRoles } from "../../../../app/roles/appRoles";

 const authSlice = createSlice({
    name: "users/auth",
    initialState: {
        user: null,
        accessToken: null,
        role: null,
        loading: false,
        isError: false,
        isInit:false,
    },
    reducers: {},
    extraReducers: 
        (builder) => {
            builder

            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.email;
                state.accessToken = action.payload.accessToken;
                state.role = action.payload.user.role;
            })

            .addCase(refresh.fulfilled, (state, action) => {
                state.loading = false;
                state.accessToken = action.payload.accessToken;
                state.user = action.payload.user.email;
                state.role = action.payload.user.role
                state.isInit = true
            })

            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.role = null;
                state.loading = false;
                state.accessToken = null;
            })
            .addMatcher(isAnyOf(login.pending, refresh.pending, logout.pending), (state) => {
                state.loading = true
                state.isError = null
            })


            .addMatcher(isAnyOf(login.pending, refresh.pending, logout.pending), (state, action) => {
                state.loading = false
                state.user = action.payload.email
                state.accessToken = action.payload.accessToken
            })

            .addMatcher(isAnyOf(login.rejected, refresh.rejected, logout.rejected), (state, action) => {
                state.loading = false
                state.isError = action.payload.error
            })
        }
    
})

export default authSlice
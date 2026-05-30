import { createSlice } from "@reduxjs/toolkit";
import { logout, refresh } from "../authThunks/authThunks";
import { appRoles } from "../../../../app/roles/appRoles";

const authSlice = createSlice({
    name: "users/auth",
    initialState: {
        user: null,
        accessToken: null,
        role: appRoles.client,
        isLoading: false,
        isError: false
    },
    reducers: {},
    extraReducers: 
        (builder) => {
            builder

            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.email;
                state.accessToken = action.payload.accessToken;
                state.role = action.payload.user.role;
            })

            .addCase(refresh.fulfilled, (state, action) => {
                state.isLoading = false;
                state.accessToken = action.payload.accessToken;
            })

            .addCase(logout.fulfilled, (state, action) => {
                state.user = null;
                state.role = null;
                state.isLoading = false;
                state.accessToken = null;
            })
            .addMatcher(isAnyOf(login.pending, refresh.pending, logout.pending), (state) => {
                state.isLoading = true
            })


            .addMatcher(isAnyOf(login.pending, refresh.pending, logout.pending), (state, action) => {
                state.isLoading = false
                state.user = action.payload.email
                state.accessToken = action.payload.accessToken
            })

            .addMatcher(isAnyOf(login.pending, refresh.pending, logout.pending), (state, action) => {
                state.isLoading = false
                state.isError = action.payload.error
            })
        }
    
})
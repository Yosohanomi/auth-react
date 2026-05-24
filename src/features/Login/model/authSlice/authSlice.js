import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "users/auth",
    initialState: {
        user: null,
        accessToken: null,
        isLoading: false,
        isError: false
    },
    reducers: {},
    extraReducers: 
        (builder) => {
            builder
            .addMatcher(login.pending, (state) => {
                state.isLoading = true
            })

            .addMatcher(login.fulfilled, (state, actions) => {
                state.isLoading = false
                state.user = actions.payload.user
                state.accessToken = actions.payload.accessToken
            })

            .addMatcher(login.rejected, (state, actions) => {
                state.isLoading = false
                state.isError = actions.payload.error
            })
        }
    
})
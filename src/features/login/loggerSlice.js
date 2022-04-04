import { createSlice } from "@reduxjs/toolkit";

const loggerSlice = createSlice({
    name:'logger',
    initialState: false,
    reducers: {
        login: () => true,
        logout: () => false
    }
})

export const { login,logout } =  loggerSlice.actions

export const selectLogger = (state) => state.logger


export default loggerSlice.reducer


import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = []

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        addUser: {
            reducer: (state,action) => {
                state.push(action.payload)
            },
            prepare: (text) => {
                const id = nanoid()
                return { payload: { id, text } }
            }
        }
    }
})


export const { userLoggedIn, userLoggedOut, setName} = userSlice.actions

export default userSlice.reducer


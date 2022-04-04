import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = []
let userId = 0

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        addUser: (state,action) => { 
            let user = {
                id: ++userId,
                name: action.payload.name
            }
            state.push(user) }
        }
    })


export const { addUser } = userSlice.actions

export default userSlice.reducer


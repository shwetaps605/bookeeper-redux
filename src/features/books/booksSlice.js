import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'books',
    initialState:[],
    reducers:{
        addBook: (state,action ) => state.push(action.payload),

    }
})

export const booksSelector = state => state.books

export const { addBook} = bookSlice.actions

export default bookSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = []
let bookId = 0

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers:{
        addBook: (state,action ) => {
            console.log(action.payload)
            let book = {
                id: ++bookId,
                title: action.payload.title,
                author:action.payload.author
            }
            state.push(book)
        },

    }
})

export const booksSelector = state => state.books

export const { addBook} = bookSlice.actions

export default bookSlice.reducer
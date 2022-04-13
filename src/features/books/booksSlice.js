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
        removeBook: (state,action) => {
            console.log(action.payload)
            return state.filter( book => book.id !== action.payload)
        }

    }
})

export const booksSelector = state => state.books

export const { addBook, removeBook} = bookSlice.actions

export default bookSlice.reducer
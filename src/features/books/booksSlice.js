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
                author:action.payload.author,
                isRead:false
            }
            state.push(book)
        },
        removeBook: (state,action) => {
            console.log(action.payload)
            return state.filter( book => book.id !== action.payload)
        },
        markAsRead: (state,action) => {
            console.log("Marking this book as read",action.payload)
            const book = state.find( book => book.id === action.payload)
            console.log("bOOK FOUND", book)

        }

    }
})

export const booksSelector = state => state.books

export const { addBook, removeBook, markAsRead} = bookSlice.actions

export default bookSlice.reducer
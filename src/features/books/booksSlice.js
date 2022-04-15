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
            // const book = state.find( book => book.id === action.payload)
            return state.map( book => book.id !== action.payload ? book : {...book, isRead:true})

        }

    }
})

export const booksSelector = state => state.books

export const { addBook, removeBook, markAsRead} = bookSlice.actions

export default bookSlice.reducer
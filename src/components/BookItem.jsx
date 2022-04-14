import React from 'react'
import { removeBook, markAsRead } from '../features/books/booksSlice'
import { useDispatch } from 'react-redux'

const BookItem = ({book}) => {
    const {id,title,author, isRead} = book
    const dispatch = useDispatch()
  return (
    <div className='book-item'>
        <header>
            <h2>{title}</h2>
            <p>{ isRead ? "Read" : "Not Read" }</p>
        </header>
        <p>By: {author}</p>
        <button onClick = { () => dispatch(removeBook(id))}>Remove</button>
        <button onClick = { () => dispatch(markAsRead(id))}  >Mark as Read</button>
    </div>
  )
}

export default BookItem
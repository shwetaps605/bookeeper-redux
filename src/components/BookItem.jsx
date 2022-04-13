import React from 'react'
import { removeBook } from '../features/books/booksSlice'
import { useDispatch } from 'react-redux'

const BookItem = ({book}) => {
    const {id,title,author} = book
    const dispatch = useDispatch()
  return (
    <div className='book-item'>
        <header>
            <h2>{title}</h2>
        </header>
        <p>By: {author}</p>
        <button onClick = { () => dispatch(removeBook(id))}>Remove</button>
    </div>
  )
}

export default BookItem
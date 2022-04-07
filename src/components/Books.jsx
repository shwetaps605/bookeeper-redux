import React, { useState } from 'react'
import { addBook, booksSelector } from '../features/books/booksSlice'
import BookItem from './BookItem'
import { useDispatch,useSelector } from 'react-redux'

const Books = () => {

    const [bookTitle, setBookTitle] = useState('')
    const [author, setAuthor] = useState('')
    const books = useSelector(booksSelector)
    const dispatch = useDispatch()

    console.log("BOOKS are", books)


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addBook({ title: bookTitle, author: author }))
    }
    return (
        <div className='book-container' >
            <header>
                <h2>Books</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, iste.</p>
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder=' book title'
                        value={bookTitle}
                        onChange={(e) => setBookTitle(e.target.value)}
                    />

                    <input type="text"
                        placeholder='author name'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />

                    <input type='submit' value="Add"/>
                </form>
            </main>
            <div className="book-items-container">
                
            </div>
        </div>

    )

}

export default Books
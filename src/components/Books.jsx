import React, { useState } from 'react'
import { addBook, booksSelector } from '../features/books/booksSlice'
import BookItem from './BookItem'
import { useDispatch,useSelector } from 'react-redux'

const Books = () => {

    const [bookTitle, setBookTitle] = useState('')
    const [author, setAuthor] = useState('')
    const books = useSelector(booksSelector)
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addBook({ title: bookTitle, author: author }))
        clear()
    }

    const clear = () => {
        setBookTitle("")
        setAuthor("")
    }


    return (
        <div className='book-container' >
            <header>
                <h2>Books</h2>
                <p>
                    {books.length} books added
                </p>
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
                {
                    books.map( book => <BookItem key={book.id} title={book.title} author={book.author}></BookItem>)
                }
                
            </div>
        </div>

    )

}

export default Books
import React, { useState } from 'react'
import { addBook } from '../features/books/booksSlice'

const Books = () => {

    const [bookTitle, setBookTitle] = useState('')
    const [author, setAuthor] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        addBook({ title: bookTitle, author: author })
    }
    return (
        <>
            <header>
                <h2>Books</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, iste.</p>
            </header>
            <main>
                <form className='book-form' onSubmit={handleSubmit}>
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
                </form>
            </main>
        </>

    )

}

export default Books
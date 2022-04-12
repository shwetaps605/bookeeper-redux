import React from 'react'

const BookItem = ({title, author}) => {
  return (
    <div className='book-item'>
        <header>
            <h2>{title}</h2>
        </header>
        <p>By: {author}</p>
    </div>
  )
}

export default BookItem
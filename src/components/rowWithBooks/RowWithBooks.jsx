import React from "react";
import BookCard from "../bookCard/BookCard";
import "./RowWithBooks.scss";

const RowWithBooks = ({ title, allBooksArr, ...props }) => {
    let test = [
        {
            book_id: 1,
            name: 'Pipka-book',
            rating: 4.9,
            cover: 'https://i.pinimg.com/474x/cb/34/b2/cb34b207c7643521b5504f8c3e0bf35c--a-well-kiss.jpg'
        },
        {
            book_id: 2,
            name: 'Carry',
            rating: 4.8,
            cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1381972494l/6360296.jpg'
        },
        {
            book_id: 3,
            name: 'Martians chronicles',
            rating: 3.9,
            cover: 'http://cdn.shopify.com/s/files/1/0016/9325/3689/products/themartianchronicles_bradbury_1200x1200.jpg?v=1526468577'
        },
        {
            book_id: 4,
            name: 'Invisible Monsters',
            rating: 4.9,
            cover: 'https://m.media-amazon.com/images/I/61Fl6EDDLHL.jpg'
        }
    ]

    let booksArr = allBooksArr
        ? allBooksArr.map(book => <BookCard

            book_id={book.book_id}
            key={book.book_id}
            name={book.name}
            rating={book.rating}
            cover={book.cover}

            shelfItems={allBooksArr}
            finishedBooks={allBooksArr}

            {...props}
        />)
        : null
    // console.log(allBooksArr)

    // console.log(allBooksArr)
    // console.log(booksArr)

    // let booksArr2 = test.map(book => <BookCard

    //         book_id={book.book_id}
    //         // key={book.book_id + 1}
    //         name={book.name}
    //         rating={book.rating}
    //         cover={book.cover}

    //         {...props}
    //     />)

    // console.log(booksArr)
    return (
        <div className="books-row">
            <div className="books-row__title">{title ? title : 'Shelf'}</div>
            <div className="books-row__all-books">
                {allBooksArr
                    ? allBooksArr.length > 0
                        ? booksArr
                        : <div className="empty-row-text">Empty shelf...</div>
                    : <div className="empty-row-text">Empty shelf...</div>}
            </div>

        </div>
    )
}

export default RowWithBooks
import React from "react";
import BookCard from "../bookCard/BookCard";
import "./RowWithBooks.scss";

const RowWithBooks = ({ title, allBooksArr, ...props }) => {
// console.log(props)
    // let unReadBook = props.shelfItems
    //     ? props.shelfItems.map(book => <BookCard

    //         key={book.id}
    //         name={book.name}
    //         rating={book.rating}
    //         imageURL={book.imageURL}
    //         id={book.id}
    //     />)
    //     : null
    let booksArr = allBooksArr
        ? allBooksArr.map(book => <BookCard

            book_id={book.book_id}
            // key={book.book_id + 1}
            name={book.name}
            rating={book.rating}
            cover={book.cover}

            {...props}
        />)
        : null

// console.log(booksArr)
    return (
        <div className="books-row">
            <div className="books-row__title">{title ? title : 'Shelf'}</div>
            <div className="books-row__all-books">
                {booksArr ? booksArr : <div className="empty-row-text">Empty shelf...</div>}
            </div>

        </div>
    )
}

export default RowWithBooks
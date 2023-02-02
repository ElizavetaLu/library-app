import React from "react";
import BookCard from "../bookCard/BookCard";
import { defaultList } from "../../defaultBooksList"
import "./RowWithBooks.scss";

const RowWithBooks = ({ title, allBooksArr, ...props }) => {

    return (
        <div className="books-row">
            <div className="title">{title ? title : 'Shelf'}</div>
            <div className="books-list">

                {allBooksArr?.length > 0 ?
                    allBooksArr.map(book => <BookCard

                        book_id={book.book_id}
                        key={book.book_id}
                        name={book.name}
                        rating={book.rating}
                        cover={book.cover}

                        shelfItems={allBooksArr}
                        finishedBooks={allBooksArr}

                        {...props}
                    />)
                    : defaultList.map(book => <BookCard

                        book_id={book.book_id}
                        key={book.book_id}
                        name={book.name}
                        rating={book.rating}
                        cover={book.cover}

                        shelfItems={defaultList}
                        finishedBooks={defaultList}

                        {...props}
                    />)
                }
            </div>

        </div>
    )
}

export default RowWithBooks
import React from "react";
import BookCard from "../bookCard/BookCard";
import "./BlockWithBooks.scss";

const BlockWithBooks = (props) => {

    return (
        <div className="block">
            <div className="title">{props.title}:</div>
            <div className="allBooksBlock">
                {
                    props.allBooksArr?.length > 0 &&
                         props.awardedBooks?.map(book => <BookCard
                            book_id={book.book_id}
                            key={book.book_id}
                            name={book.name}
                            rating={book.rating}
                            cover={book.cover}

                            {...props}
                        />)
                }
            </div>
        </div>
    )
}

export default BlockWithBooks
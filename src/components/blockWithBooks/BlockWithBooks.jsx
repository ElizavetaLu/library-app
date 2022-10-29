import React from "react";
import BookCard from "../bookCard/BookCard";
import "./BlockWithBooks.scss";

const BlockWithBooks = (props) => {

    let allBooks = props.genreBooks ? props.genreBooks.map(book => <BookCard
        book_id={book.book_id}
        // key={book.book_id + 1}
        name={book.name}
        rating={book.rating}
        cover={book.cover}

        {...props}

    />) : null

    return (
        <div className="block">
            <div className="text">{props.title}:</div>
            <div className="allBooksBlock">
                {allBooks}
            </div>
        </div>
    )
}

export default BlockWithBooks
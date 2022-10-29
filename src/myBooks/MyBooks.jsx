import React from "react";
import BookCard from "../components/bookCard/BookCard";
import HorizontalLine from "../components/horizontalLine/HorizontalLine";
import RowWithBooks from "../components/rowWithBooks/RowWithBooks";
import "./MyBooks.scss"

const MyBooks = (props) => {


    return (
        <div className="myBooksWrapper" >
            <div className="MyBooksContainer">
                <RowWithBooks title={'Just started:'} />
                <HorizontalLine />

                <RowWithBooks title={'Unread:'} allBooksArr={props.shelfItems}/>
                <HorizontalLine />

                <RowWithBooks title={'Read:'} allBooksArr={props.finishedBooks}/>
                <HorizontalLine />
            </div>
        </div>
    )
}

export default MyBooks



import React from "react";
import HorizontalLine from "../components/horizontalLine/HorizontalLine";
import RowWithBooks from "../components/rowWithBooks/RowWithBooks";
import "./MyBooks.scss"

const MyBooks = (props) => {

    return (
        <div className="myBooksWrapper" >
            <div className="MyBooksContainer">
                <RowWithBooks title={'Just started:'} />
                <HorizontalLine />

                <RowWithBooks
                    title={'Unread:'}
                    shelfItems={props.shelfItems}
                    allBooksArr={props.shelfItems}
                    onAdd={props.onAdd}
                    onMarkAsRead={props.onMarkAsRead} />
                <HorizontalLine />

                <RowWithBooks
                    title={'Read:'}
                    shelfItems={props.shelfItems}
                    allBooksArr={props.finishedBooks}
                    onAdd={props.onAdd}
                    onMarkAsRead={props.onMarkAsRead} />
                <HorizontalLine />
            </div>
        </div>
    )
}

export default MyBooks



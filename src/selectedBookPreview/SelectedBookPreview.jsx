import React from "react";
import { useLocation } from "react-router-dom";
import BookCard from "../components/bookCard/BookCard";
import Button from "../components/button/Button";
import HorizontalLine from "../components/horizontalLine/HorizontalLine";
import "./SelectedBookPreview.scss"

const SelectedBookPreview = (props) => {
console.log(props)



const bookData = props.specificBook
const bookDataObj = {
    name: bookData.name,
    cover: bookData.cover,
    id: bookData.book_id,
    rating: bookData.rating,
}
    return (
        <div className="previewContent">
            <div className="previewWrapper"
                style={
                    bookData.cover
                        ? { backgroundImage: `url(${bookData.cover})` }
                        : { backgroundImage: "url('/boy-1528150__480.jpg')" }}>

                <div className="previewContainer">
                    <div className="bookImage">
                        {bookData.cover ? <img src={bookData.cover} alt="book cover" /> : <img src="/boy-1528150__480.jpg" alt="" />}
                    </div>
                    <div className="fullInfo">
                        <div className="info">
                            <div className="name">{bookData.name}</div>
                            <div className="year"> {bookData.published_date}</div>
                            <div className="author"> {bookData.authors}</div>
                            <div className="createdEditions">
                                <div className="text">Pages:</div>
                                <div className="amount">{bookData.pages}</div>
                            </div>
                            <div className="raiting">
                                <div className="rate">{bookData.rating}/5</div>
                                <div className="icon">
                                    <img src="/icons/star.png" alt="" />
                                </div>
                            </div>
                            <div className="description">{bookData.synopsis}</div>
                        </div>
                        <div className="buttons">
                            <Button content={'Add on shelf'} action={()=>props.onAdd(bookDataObj)} />
                            <Button content={'Read now'} />
                            <Button content={'Mark as read'} action={()=>props.onMarkAsRead(bookDataObj)}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="recent">
                <div className="text">Recents:</div>
                <div className="recentView">
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </div>
        </div>

    )
}

export default SelectedBookPreview
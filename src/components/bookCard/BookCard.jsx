import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./BookCard.scss"


const BookCard = ({ name, rating, cover, book_id, shelfItems, onAdd }) => {

    const [status, setStatus] = useState(false);

    const clickedBookData = { name, rating, cover, book_id };

    const exist = shelfItems ? shelfItems.find(item => item.book_id === book_id) : false;

    useEffect(() => {
        exist ? setStatus(true) : setStatus(false)
    }, [exist])


    return (
        <div className="book-card">
            <div className="image-container">
                <img src={cover ? cover : "/library-app/build//boy-1528150__480.jpg"} alt="book" className="book-img" />
            </div>

            <div className="show-more">
                <div className="container">
                    <div onClick={() => onAdd(clickedBookData)} className="shelf">
                        <img
                            src={`/library-app/build//icons/${status ? 'fullShelf' : 'emtShelf'}.png`}
                            title={status ? "Remove from shelf" : "Add on shelf"}
                            alt="shelf"
                            className="shelf-img"
                        />
                    </div>
                    <Link to={`/library-app/build/preview/${name}`} className="link" state={{ clickedBookData }}>
                        <Button content={'Show more'} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BookCard
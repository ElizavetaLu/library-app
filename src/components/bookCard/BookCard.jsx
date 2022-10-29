import React, { useEffect, useState } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import Button from "../button/Button";
import "./BookCard.scss"


const BookCard = (props) => {
    // console.log(props)

    let clickedBookData = { name: props.name, rating: props.rating, cover: props.cover, book_id: props.book_id }

    let exist = props.shelfItems ? props.shelfItems.find(item => item.book_id === props.book_id) : false;

    const [status, setStatus] = useState(false)

    useEffect(() => {
        exist ? setStatus(true) : setStatus(false)
    },[exist])


    return (
        <div className="bookCardWrapper" >
            <div onClick={() => { props.onAdd(clickedBookData) }} >
                {status
                    ? <img src="/icons/fullShelf.png" alt="shelf" title="Remove from shelf" className="shelf" />
                    : <img src="/icons/emtShelf.png" alt="shelf" title="Add on shelf" className="shelf" />
                }
            </div>
            <div className="container">
                <div className="bookImage">
                    {props.cover ? <img src={props.cover} alt="book" className="book" /> : <img src="/boy-1528150__480.jpg" alt="book" className="book" />}

                </div>

                <div className="about">
                    <div className="raiting">
                        <div className="bookrRate">{props.rating}/5</div>
                        <div className="icon">
                            <img src="/icons/star.png" alt="rate" />
                        </div>
                    </div>
                    <div className="bookName" title={props.name}>{props.name}</div>

                </div>
                <div className="cta">
                    <NavLink to={`/preview/${props.name}`} className="link" state={{ book_id: props.book_id }}>
                        <Button content={'Show more'} />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default BookCard
import React, { useEffect, useState } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import Button from "../button/Button";
import "./BookCard.scss"


const BookCard = (props) => {
    // console.log(props)
    const [status, setStatus] = useState(false)

    let clickedBookData = { name: props.name, rating: props.rating, cover: props.cover, book_id: props.book_id }


    
    let exist = props.shelfItems ? props.shelfItems.find(item => item.book_id === props.book_id) : false;

    useEffect(() => {
        exist ? setStatus(true) : setStatus(false)
    }, [exist])




//     let test = props.finishedBooks.find(book => {
//         let match = props.shelfItems.find(item => item.book_id === book.book_id)
//         return book.book_id === match.book_id
//     })
// // console.log(test)
//     if(test){()=>props.onAdd(clickedBookData)}


    return (
        <div className="bookCardWrapper" >
            <div onClick={() => { props.onAdd(clickedBookData) }} >
                {status
                    ? <img src="/library-app/build/icons/fullShelf.png" alt="shelf" title="Remove from shelf" className="shelf" />
                    : <img src="/library-app/build/icons/emtShelf.png" alt="shelf" title="Add on shelf" className="shelf" />
                }
            </div>
            <div className="container">
                <div className="bookImage">
                    {props.cover ? <img src={props.cover} alt="book" className="book" /> : <img src="/library-app/build/boy-1528150__480.jpg" alt="book" className="book" />}

                </div>

                <div className="about">
                    <div className="raiting">
                        <div className="bookrRate">{props.rating}/5</div>
                        <div className="icon">
                            <img src="/library-app/build/icons/star.png" alt="rate" />
                        </div>
                    </div>
                    <div className="bookName" title={props.name}>{props.name}</div>

                </div>
                <div className="cta">
                    <NavLink to={`/library-app/build/preview/${props.name}`} className="link" state={{ clickedBookData }}>
                        <Button content={'Show more'} />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default BookCard
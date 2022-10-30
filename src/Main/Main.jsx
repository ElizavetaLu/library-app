import React from "react";
import BlockWithBooks from "../components/blockWithBooks/BlockWithBooks";
import BookCard from "../components/bookCard/BookCard";
import RowWithBooks from "../components/rowWithBooks/RowWithBooks";
import "./Main.scss"



const Main = (props) => {
    // let test = [
    //     {
    //         book_id: 1,
    //         name: 'Pipka-book',
    //         rating: 4.9,
    //         cover: 'https://i.pinimg.com/474x/cb/34/b2/cb34b207c7643521b5504f8c3e0bf35c--a-well-kiss.jpg'
    //     },
    //     {
    //         book_id: 2,
    //         name: 'Carry',
    //         rating: 4.8,
    //         cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1381972494l/6360296.jpg'
    //     },
    //     {
    //         book_id: 3,
    //         name: 'Martians chronicles',
    //         rating: 3.9,
    //         cover: 'http://cdn.shopify.com/s/files/1/0016/9325/3689/products/themartianchronicles_bradbury_1200x1200.jpg?v=1526468577'
    //     },
    //     {
    //         book_id: 4,
    //         name: 'Invisible Monsters',
    //         rating: 4.9,
    //         cover: 'https://m.media-amazon.com/images/I/61Fl6EDDLHL.jpg'
    //     }
    // ]
    return (
        <div className="main">
            <div className="introduction" style={{ backgroundImage: `url("/cup-791072_1920.jpg")` }}>
                <div className="text">
                    <div className="row">
                        <div className="darkText">Read</div>
                        <div className="lightText">your</div>
                    </div>
                    <div className="row">
                        <div className="darkText">favorite</div>
                        <div className="lightText" style={{ marginRight: '10px' }}>Books</div>
                        <div className="darkText">online</div>
                    </div>
                    <div className="row">
                        <div className="darkText">for absolutely</div>
                        <div className="lightText">free</div>
                    </div>
                </div>
            </div>

            {/* {test.map(book => <BookCard

                book_id={book.book_id}
                key={book.book_id}
                name={book.name}
                rating={book.rating}
                cover={book.cover}

                {...props}
            />)} */}


            <RowWithBooks allBooksArr={props.monthPopBooks} title={'Top 15 most popular books in current month:'} {...props} />

            <div className="introduction narrow" style={{ backgroundImage: `url("/scott-webb-C6oPXOatFD8-unsplash.jpg")` }}>
                <div className="text">
                    <div className="row">
                        <div className="darkText">Put </div>
                        <div className="lightText" style={{ marginRight: '10px' }}> any Book</div>
                        <div className="darkText">on shelf</div>
                    </div>
                    <div className="row">
                        <div className="darkText">and read</div>
                        <div className="lightText" style={{ marginRight: '10px' }}>it</div>
                        <div className="darkText">later</div>
                    </div>
                </div>
            </div>


            <BlockWithBooks title={`The Awarded Books of ${props.currentYear}`} {...props}/>
        </div>
    )
}

export default Main
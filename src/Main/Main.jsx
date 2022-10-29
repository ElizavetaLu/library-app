import React from "react";
import BlockWithBooks from "../components/blockWithBooks/BlockWithBooks";
import RowWithBooks from "../components/rowWithBooks/RowWithBooks";
import "./Main.scss"



const Main = (props) => {

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


            <BlockWithBooks title={`The Awarded Books of ${props.currentYear}`}/>
        </div>
    )
}

export default Main
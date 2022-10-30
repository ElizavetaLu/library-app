import React from "react";
import BlockWithBooks from "../components/blockWithBooks/BlockWithBooks";
import "./SelectedGenre.scss"

const SelectedGenre = ({ name, genreBooks, props }) => {


    return (
        <div className="genreWrapper">
            <BlockWithBooks title={name} genreBooks={genreBooks} {...props}/>
        </div>
    )
}

export default SelectedGenre
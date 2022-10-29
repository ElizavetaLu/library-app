import React from "react";
import BlockWithBooks from "../components/blockWithBooks/BlockWithBooks";
import "./SelectedGenre.scss"

const SelectedGenre = ({ name, genreBooks }) => {


    return (
        <div className="genreWrapper">
            <BlockWithBooks title={name} genreBooks={genreBooks}/>
        </div>
    )
}

export default SelectedGenre
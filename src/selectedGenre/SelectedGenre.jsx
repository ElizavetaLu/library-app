import BlockWithBooks from "../components/blockWithBooks/BlockWithBooks";
import "./SelectedGenre.scss"

const SelectedGenre = ({ name, allBooksArr, props }) => {

    return (
        <div className="genreWrapper">
            <BlockWithBooks title={name} allBooksArr={allBooksArr} {...props}/>
        </div>
    )
}

export default SelectedGenre
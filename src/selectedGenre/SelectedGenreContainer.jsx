import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SelectedGenre from "./SelectedGenre"
import { fetchData, options } from "../fetch";


const SelectedGenreContainer = (props) => {
    const { name } = useParams()

    const opt = options(`nominees/${name.toLocaleLowerCase()}/2020`);
    const [genreBooks, setGenreBooks] = useState([]);
    
    useEffect(() => {
        async function getData() {
            await fetchData(opt)
                .then(response => setGenreBooks(response.data))
                .catch(error => console.error(error));
        }
        getData()
    }, [])

    return <SelectedGenre name={name} allBooksArr={genreBooks} {...props} />
}

export default SelectedGenreContainer
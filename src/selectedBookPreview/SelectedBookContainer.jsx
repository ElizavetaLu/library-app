import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SelectedBookPreview from "./SelectedBookPreview";
import { fetchData, options } from "../fetch";
import "./SelectedBookPreview.scss"

const SelectedBookContainer = (props) => {

    const {state} = useLocation();
    const bookId = state.clickedBookData.book_id;

    const opt = options(`book/${bookId}`);
    const [specificBook, setSpecificBook] = useState({});

    useEffect(() => {
        async function getData() {
            await fetchData(opt)
                .then(response => setSpecificBook(response.data))
                .catch(error => console.error(error));
        };
        getData()
    }, [])


    return <SelectedBookPreview specificBook={specificBook} {...props} bookData={state.clickedBookData} />
}

export default SelectedBookContainer











import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SelectedBookPreview from "./SelectedBookPreview";
import "./SelectedBookPreview.scss"


const SelectedBookContainer = (props) => {
    
    let location = useLocation()
    let bookId = location.state.clickedBookData.book_id
    const options = {
        method: 'GET',
        url: `https://hapi-books.p.rapidapi.com/book/${bookId}`,
        headers: {
            'X-RapidAPI-Key': '794aa797f4msh0d4e2c284c4c4f3p1a8f0bjsnd03998d95072',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
    };


    let bookData = location.state.clickedBookData
    const [specificBook, setSpecificBook] = useState({})
    // useEffect(() => {
    //     async function getData() {
    //         await axios.request(options).then(response => {
    //             setSpecificBook(response.data);
    //         }).catch(function (error) {
    //             console.error(error);
    //         });
    //     }
    //     getData()
    // },[])


    return <SelectedBookPreview specificBook={specificBook} {...props} bookData={bookData}/>
}

export default SelectedBookContainer











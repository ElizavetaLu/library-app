import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SelectedGenre from "./SelectedGenre"



const SelectedGenreContainer = (props) => {
    let { name } = useParams()
    // console.log(name)
    // const data = new Date
    // const currentYear = data.getFullYear()

    const options = {
        method: 'GET',
        url: `https://hapi-books.p.rapidapi.com/nominees/${name.toLocaleLowerCase}/2020`,
        headers: {
            'X-RapidAPI-Key': '794aa797f4msh0d4e2c284c4c4f3p1a8f0bjsnd03998d95072',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
    };


    const [genreBooks, setGenreBooks] = useState([])

    useEffect(() => {
        async function getData() {
            await axios.request(options).then(response => {
                console.log(response)
                return setGenreBooks(response.data);
            }).catch(error => console.error(error));
        }
        getData()
    }, [])

    return <SelectedGenre name={name} genreBooks={genreBooks} {...props}/>
}

export default SelectedGenreContainer
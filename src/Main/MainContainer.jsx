import React from "react";
import axios from "axios";
import "./Main.scss"
import { useState } from "react";
import { useEffect } from "react";
import Main from "./Main";



const MainContainer = (props) => {
    const data = new Date
    const currentYear = data.getFullYear()
    const currentMonth = data.getMonth() + 1

    const monthOptions = {
        method: 'GET',
        url: `https://hapi-books.p.rapidapi.com/month/${currentYear}/${currentMonth}`,
        headers: {
            'X-RapidAPI-Key': '794aa797f4msh0d4e2c284c4c4f3p1a8f0bjsnd03998d95072',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
    };

    const [monthPopBooks, setMonthPopBooks] = useState([])

    useEffect(() => {
        async function getData() {
            await axios.request(monthOptions).then(response => setMonthPopBooks(response.data))
                .catch(error => {
                    console.error(error);
                });
        }
        getData()
    }, [true])




    const options = {
        method: 'GET',
        url: `https://hapi-books.p.rapidapi.com/top/${currentYear}`,
        headers: {
            'X-RapidAPI-Key': '794aa797f4msh0d4e2c284c4c4f3p1a8f0bjsnd03998d95072',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
    };

    const [ awardedBooks, setawardedBooks] = useState([])

    useEffect(() => {
        async function getData() {
            await axios.request(options).then(response => setawardedBooks(response.data))
                .catch(error => {
                    console.error(error);
                });
        }
        getData()
    }, [true])


    return <Main monthPopBooks={monthPopBooks} allBooksArr={awardedBooks} currentYear={currentYear} {...props} />
}

export default MainContainer
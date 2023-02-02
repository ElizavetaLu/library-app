import { useState, useEffect } from "react";
import { fetchData, options } from "../fetch";
import Main from "./Main";
import "./Main.scss"


const MainContainer = (props) => {
    const data = new Date();
    const currentYear = data.getFullYear();
    const currentMonth = data.getMonth() + 1;


    const optMonth = options(`month/${currentYear}/${currentMonth}`);
    const [monthPopBooks, setMonthPopBooks] = useState([]);

    useEffect(() => {
        async function getData() {
            await fetchData(optMonth)
                .then(response => setMonthPopBooks(response.data))
                .catch(error => console.error(error));
        }
        getData()
    }, [])


    const optYear = options(`top/${currentYear}`);
    const [awardedBooks, setawardedBooks] = useState([]);

    useEffect(() => {
        async function getData() {
            await fetchData(optYear)
                .then(response => setawardedBooks(response.data))
                .catch(error => console.error(error));
        }
        getData()
    }, [])


    return <Main monthPopBooks={monthPopBooks} awardedBooks={awardedBooks} currentYear={currentYear} {...props} />
}

export default MainContainer
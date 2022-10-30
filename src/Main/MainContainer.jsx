import React from "react";
import "./Main.scss"
import { req} from "../api";
import { useState } from "react";
import { useEffect } from "react";
import Main from "./Main";



const MainContainer = (props) => {
// console.log(props)

    const [monthPopBooks, setMonthPopBooks] = useState([])

    // useEffect(() => {
    //     async function getData(){
    //        await req.then(elm => setMonthPopBooks(elm))
    //     }
    //     getData()
    // },[])

    const data = new Date
    const currentYear = data.getFullYear()


    return <Main monthPopBooks={monthPopBooks} currentYear={currentYear} {...props}/>
}

export default MainContainer
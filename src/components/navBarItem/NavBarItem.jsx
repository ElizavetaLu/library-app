import React from "react";
import { Link } from "react-router-dom";
import "./NavBarItem.scss";

const NavBarItem = ({title}) => {

    return (
        <Link to={`/library-app/build/genre/${title}`} target="_blank">
            <div className="genIcon">
                <img src="/library-app/build/icons/icons8-open-book-50.png" alt="" />
            </div>
            <div className="genreName">{title}</div>
        </Link>
    )
}

export default NavBarItem
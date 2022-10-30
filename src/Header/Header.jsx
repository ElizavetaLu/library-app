import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavBarItem from "../components/navBarItem/NavBarItem";
import "./Header.scss"

const Header = (props) => {

    const [genre, setGenre] = useState(false);
    const openGenre = () => genre ? setGenre(false) : setGenre(true);


    return (
        <div className="header" >
            <div className="container">
                <Link to={'/'}>
                    <div className="logo">
                        <div className="icon">
                            <img src="/icons/book-svgrepo-com.svg" alt="logo" />
                        </div>
                        <div className="logoText">
                            PipkaBook
                        </div>
                    </div>
                </Link>

                <div className="navBar">
                    <div className="genre" >
                        <div className="genreLink" onMouseEnter={openGenre}>Genre</div>
                        {genre
                            ? <div className="navbarDropDown" onMouseLeave={openGenre}>
                                <div className="navbarDropDownList">
                                    <NavBarItem title={'Literary Fiction'} />
                                    <NavBarItem title={'Mystery'} />
                                    <NavBarItem title={'Ramance'} />
                                    <NavBarItem title={'Thriller'} />
                                    <NavBarItem title={'Horror'} />
                                    <NavBarItem title={'Historical'} />
                                    <NavBarItem title={'Science Fiction'} />
                                    <NavBarItem title={'Fantasy'} />
                                </div>
                            </div>
                            : null}
                    </div>
                    <div className="genre">
                        <div className="genreLink">Text</div>
                    </div>
                    <div className="genre">
                        <div className="genreLink">Text</div>
                    </div>
                    <div className="genre">
                        <div className="genreLink">Text</div>
                    </div>
                </div>

                <div className="search">
                    <input type="text" className="search-txt-input" name="q" maxLength="100" placeholder="What are you looking for?" />
                    <input type="submit" value="search" className="search-button" />
                </div>

                <Link to={'/bookshelf'}>
                    <div className="myBooks">
                        <div className="text">My books</div>
                        {props.shelfItems.length === 0
                            ? <img src="/icons/empHeaderShelf.png" alt="" />
                            : <div className="icon">
                                <img src="/icons/fullHeaderShelf.png" alt="" />
                                <div className="new">New</div>
                            </div>
                        }
                    </div>
                </Link>

            </div>


        </div>
    )
}

export default Header
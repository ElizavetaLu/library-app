import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HorizontalLine from "../components/horizontalLine/HorizontalLine";
import NavBarItem from "../components/navBarItem/NavBarItem";
import "./Header.scss"

const Header = (props) => {

    const [genre, setGenre] = useState(false);
    const [menu, setMenu] = useState(false)
    const openGenre = () => genre ? setGenre(false) : setGenre(true);
    const openMenu = () => menu ? setMenu(false) : setMenu(true);


    return (
        <div className="header" >
            <div className="container">
                <Link to={'/'} className="logoLink">
                    <div className="logo">
                        <div className="icon">
                            <img src="/library-app/build/icons/book-svgrepo-com.svg" alt="logo" />
                        </div>
                        <div className="logoText">
                            PipkaBook
                        </div>
                    </div>
                </Link>

                <div className="navBar">
                    <div className="itemText">
                        <div className="itemTextLink">About</div>
                    </div>

                    <div className="itemText" >
                        <div className="itemTextLink" onMouseEnter={openGenre}>Genre</div>
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

                    <div className="itemText">
                        <div className="itemTextLink">Contacts</div>
                    </div>
                    <div className="itemText">
                        <div className="itemTextLink">Settings</div>
                    </div>
                </div>

                <div className="search">
                    <input type="text" className="search-txt-input" name="q" maxLength="100" placeholder="What are you looking for?" />
                    <input type="submit" value="search" className="search-button" />
                </div>

                <Link to={'/bookshelf'} className="myBooksLink">
                    <div className="myBooks">
                        <div className="text">My books</div>
                        {props.shelfItems.length === 0
                            ? <img src="/library-app/build/icons/empHeaderShelf.png" alt="" />
                            : <div className="icon">
                                <img src="/library-app/build/icons/fullHeaderShelf.png" alt="" />
                                <div className="new">New</div>
                            </div>
                        }
                    </div>
                </Link>

                <div className="menu" onClick={openMenu}>
                    <img src="/library-app/build/icons/menu.png" alt="" />

                    {menu
                        ?
                        <div className="menuDropDown" onMouseLeave={openMenu}>
                            <div className="items">
                                <div className="row">
                                    <div className="itemIcon">
                                        <img src="/library-app/build/icons/icons8-pencil-drawing-material-outlined-32.png" alt="" />
                                    </div>
                                    <Link className="singleItem">About</Link>
                                </div>
                                <div className="row">
                                    <div className="itemIcon">
                                        <img src="/library-app/build/icons/icons8-storytelling-50.png" alt="" />
                                    </div>
                                    <Link className="singleItem">Genre</Link>
                                </div>
                                <div className="row">
                                    <div className="itemIcon">
                                        <img src="/library-app/build/icons/icons8-phone-book-64.png" alt="" />
                                    </div>
                                    <Link className="singleItem">Contacts</Link>
                                </div>
                                <div className="row">
                                    <div className="itemIcon">
                                        <img src="/library-app/build/icons/icons8-services-50.png" alt="" />
                                    </div>
                                    <Link className="singleItem">Settings</Link>
                                </div>
                            </div>

                            <div className="search">
                                <input type="text" className="searchTxt" maxLength="100" placeholder="What are you looking for?" />
                            </div>
                        </div>
                        : null}
                </div>

            </div>


        </div>
    )
}

export default Header

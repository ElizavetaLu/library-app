import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBarItem from "../components/navBarItem/NavBarItem";
import "./Header.scss"

const Header = (props) => {

    const [genre, setGenre] = useState(false);
    const [menu, setMenu] = useState(false);

    return (
        <div className="header" >
            <div className="container">
                <Link to={'/library-app/build/'} className="logoLink">
                    <div className="logo">
                        <img src="/icons/logo.png" alt="logo" className="logo-img" />
                    </div>
                </Link>

                <div className="navBar">
                    <div className="itemText">
                        <div className="itemTextLink">About</div>
                    </div>

                    <div className="itemText" >
                        <div className="itemTextLink" onMouseEnter={() => setGenre(!genre)}>Genre</div>
                        {genre
                            ? <div className="navbarDropDown" onMouseLeave={() => setGenre(!genre)}>
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
                    <input type="submit" value="Search" className="search-button" />
                </div>

                <Link to={'/library-app/build/bookshelf'} className="myBooksLink">
                    <div className="myBooks">
                        <div className="text">My books</div>
                        <div className="icon">
                            <img src={`/library-app/build//icons/${props.shelfItems.length === 0 ? 'emp' : 'full'}HeaderShelf.png`} alt="" />
                        </div>
                    </div>
                </Link>

                <div className="menu" onClick={() => setMenu(!menu)}>
                    <img src="/icons/menu.png" alt="" />

                    {menu
                        ?
                        <div className="menuDropDown" onMouseLeave={() => setMenu(!menu)}>
                            <div className="items">
                                <div className="row">
                                    <Link className="singleItem">About</Link>
                                </div>
                                <div className="row">
                                    <Link className="singleItem">Genre</Link>
                                </div>
                                <div className="row">
                                    <Link className="singleItem">Contacts</Link>
                                </div>
                                <div className="row">
                                    <Link className="singleItem">Settings</Link>
                                </div>
                                <div className="row">
                                    <input type="text" className="searchTxt" maxLength="100" placeholder="Search..." />
                                </div>
                            </div>

                        </div>
                        : null}
                </div>

            </div>


        </div>
    )
}

export default Header

import React from "react";
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer" style={{ backgroundImage: `url("/books-1281581__480.jpg")` }}>
            <div className="footerContainer">
            <div className="footerLogo">
                    <div className="footerIcon">
                        <img src="/library-app/build/icons/book-svgrepo-com.svg" alt="logo" />
                    </div>
                    <div className="logoText">
                        PipkaBook
                    </div>
                </div>

                <div className="text">
                Ⓒ 2022 PipkaBook. All rights reserved.
                </div>

                <div className="socials">
                    <div className="title">Our socials:</div>
                    <div className="allIcons">
                        <div className="media">
                            <img src="/library-app/build/socials/icons8-instagram-100.png" alt="" />
                        </div>
                        <div className="media">
                            <img src="/library-app/build/socials/icons8-телеграмма-app-96.png" alt="" />
                        </div>
                        <div className="media">
                            <img src="/library-app/build/socials/icons8-твиттер-96.png" alt="" />
                        </div>
                        <div className="media">
                            <img src="/library-app/build/socials/icons8-pinterest-96.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
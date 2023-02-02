import React from "react";
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContainer">
                <div className="logo">
                    <img src="/icons/logo-light.png" alt="logo" className="logo-img" />
                </div>

                <div className="text">
                    Ⓒ 2022 PipkaBook. All rights reserved.
                </div>

                <div className="socials">
                    <div className="title">Our socials:</div>
                    <div className="allIcons">
                        <div className="media">
                            <img src="/socials/icons8-instagram-100.png" alt="" />
                        </div>
                        <div className="media">
                            <img src="/socials/icons8-телеграмма-app-96.png" alt="" />
                        </div>
                        <div className="media">
                            <img src="/socials/icons8-твиттер-96.png" alt="" />
                        </div>
                        <div className="media">
                            <img src="/socials/icons8-pinterest-96.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Web Development and Website Promotions</h1>
                <Typed
                className="typed-text"
                strings={["Web Development","Web Design","Facebook Ads","Google Ads"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>
        </div>
    )
}

export default Header

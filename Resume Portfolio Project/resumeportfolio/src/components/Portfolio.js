import React from 'react';
import Resume from '../Images/Resume_portfolio.PNG';
import HotelBooking from '../Images/Hotel_Bookings.PNG';

//FontAwesome Imports:
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearchPlus } from '@fortawesome/free-solid-svg-icons';

//react PopUP Box:

import {PopupboxManager,PopupboxContainer} from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';


const Portfolio = () => {
    //Resume Portfolio App
    const openPopupboxResumePortfolio=()=>{
        const content=(
        <>
        <img className="portfolio-image-popupbox" src={Resume} alt="Resume Portfolio"/>
        <p>
            The following is a Resume Portfolio that showcases the various skill set that I possess and the different projects that I have worked on. It also displays the various works that I do as services and if someone wnats to contact me regarding these services he/she can do so if they click the contanct me button which directs them to a page which asks them to fill in their request and forward it to my mail.     
        </p>
        <b>Demo:</b><a className="hyper-link" onClick={()=>window.open("https://github.com/attainu/mokshith-sharma-au9/tree/dev/coding-challenges","_blank")}> Resume Portfolio DemoApp</a>
        <br/>
        <b>GitHub:</b><a className="hyper-link" onClick={()=>window.open("https://github.com/attainu/mokshith-sharma-au9/tree/dev/coding-challenges","_blank")}>Resume Portfolio Project Code </a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigResumePortfolio={
        titleBar:{
            enable:true,
            text: "Resume Portfolio Project."
        },
        fadeIn:true,
        fadeInSpeed:500

    }

    //Hotel Booking App
    const openPopupboxHotelBooking=()=>{
        const content=(
        <>
        <img className="portfolio-image-popupbox" src={HotelBooking} alt="Hotel Booking"/>
        <p>
            The following is an Hotel booking app(For India) that constitutes of different components such as fitering of prices, or finding the best hotel possible with a single click and additional add on functionalities which are yet to be added. The App allows the user to select his/her choice of hotels and segregate according to which Hotel has the best amenities and also can view the hotels based on their ratings.
        </p>
        <b>Demo:</b><a className="hyper-link" onClick={()=>window.open("https://github.com/attainu/mokshith-sharma-au9/tree/dev/coding-challenges","_blank")}>Hotel Booking Demo App</a>
        <br/>
        <b>GitHub:</b><a className="hyper-link" onClick={()=>window.open("https://github.com/attainu/mokshith-sharma-au9/tree/dev/coding-challenges","_blank")}>Hotel Booking Project Code</a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigHotelBooking={
        titleBar:{
            enable:true,
            text: "Hotel Booking Project"
        },
        fadeIn:true,
        fadeInSpeed:500

    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">projects portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxResumePortfolio}>
                        <img className="portfolio-image" src={Resume} alt="Resume Portfolio.."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>                
                    {/*--*/}
                    <div className="portfolio-image-box" onClick={openPopupboxHotelBooking}>
                        <img className="portfolio-image" src={HotelBooking} alt="Hotel _Bookings.."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>                
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigResumePortfolio} />
            <PopupboxContainer {...popupboxConfigHotelBooking}/>
        </div>
    )
}

export default Portfolio

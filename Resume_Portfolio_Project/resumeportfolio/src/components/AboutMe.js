import React from "react";
import author from "../me2.jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..."/>
                    </div>
                    
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>

                    Looking for good opportunities where I can invest my skill set and also develop and learn new skill from the work offered to me by the organization. 
                    My strengths are related to full stack development. Some of the softwares that I have previously worked as an intern are: HTML/CSS ,Python,C,C++,Java,Javascript,React,SQL,AWS. 
                    And Also I have knowledge in testing the softwares and have worked with some testing software's such as IBM Rational Performance Tester, Selenium. 
                    I'd Like to work in a mission-driven ,product and new technology development organization that offers experience and new oppoertunities to learn something new with each and every software.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe

import React from 'react';
import CertificationsCarousel from "./CertificationsCarousel";

const Certifications = () => {
    return (
        <div id="certificates" className="testimonials">
            <h1>My Trainings and Certificates</h1>
            <div className="container">
                <div className="testmonials-content">
                    <CertificationsCarousel/>

                </div>
            </div>
            
        </div>
    )
}

export default Certifications

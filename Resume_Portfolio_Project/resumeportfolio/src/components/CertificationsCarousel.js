import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Certificates Imported
import certificate1 from "../Certificate/advanced_cpp_certificate.JPG";
import certificate2 from "../Certificate/AWS_Certificate.PNG"
import certificate3 from "../Certificate/cpp_certificate.PNG";
import certificate4 from "../Certificate/php_mysql_certificate.PNG";
import certificate5 from "../Certificate/scilab_certificate.PNG"; 

const CertificationsCarousel = () => {
    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}>
            <>
                <img src={certificate1} alt="Advanced C++ Certificate"/>
                <div className="myCarousel">
                    <h3>Advanced C++ Certification</h3>
                    <p>Following is an Advanced Certification done in C++ Programming</p>
                </div>
                
            </>
            <>
                <img src={certificate2} alt="AWS Certificate"/>
                    <div className="myCarousel">
                        <h3>AWS Certification</h3>
                        <p>Following is an AWS Certification done.</p>
                    </div>
            </>

            <>
                <img src={certificate3} alt="C++ Certificate"/>
                    <div className="myCarousel">
                        <h3>C++ Certification</h3>
                        <p>Following is a Certification done in C++ Programming</p>
                    </div>
            </>
            <>
                <img src={certificate4} alt="PHP_SQL Certificate"/>
                    <div className="myCarousel">
                        <h3>Advanced PHP SQL Certification</h3>
                        <p>Following is an Advanced Certification done in PHP_SQL Programming</p>
                    </div>
            </>

            <>
                <img src={certificate5} alt="SCILAB Certificate"/>
                <div className="myCarousel">
                    <h3>SCILAB Certification</h3>
                    <p>Following is a Certification done in SCILAB Programming</p>
                </div>       
            </>
        </Carousel>
    )
}

export default CertificationsCarousel

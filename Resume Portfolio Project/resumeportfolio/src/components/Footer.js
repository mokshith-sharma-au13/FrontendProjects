import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Country India</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:9650083492">+91 9650083492</a>
                        </div>
                        <div className="d-flex">
                            <p>mokshithvsharma@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About me</a>
                                <br/>
                                <a className="footer-nav">Services</a>
                                <br/>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br/>
                                <a className="footer-nav">Portfolio</a>
                                <br/>
                                <a className="footer-nav">Contacts</a>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                            url={""}
                            quote={"FullStack Developer"}
                            hashtag="#javascript">
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <TwitterShareButton
                            url={""}
                            quote={"FullStack Developer"}
                            hashtag="#javascript">
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                            <LinkedinShareButton
                            url={"www.linkedin.com/in/mokshithvsharma29"}
                            quote={"FullStack Developer"}
                            hashtag="#javascript">
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                        </div>
                        <div>
                            <p className="pt-3 text-center">
                                Copyright&copy;
                                {new Date().getFullYear()}&nbsp;India | All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
import React,{useState} from 'react'
import emailjs from "emailjs-com";
import {useForm} from 'react-hook-form';
import validator from 'validator';

const Contact = () => {

    const [successMessage,setSuccessMessage]=useState("");

    const {register, handleSubmit, errors}=useForm();

    const serviceID="service_ID";
    const templateID="template_ID";
    const userID="user_JNr7IOV1BZKibqwMfwsh5";

    const onSubmit=(data,r)=>{
        sendEmail(
            serviceID,
            templateID,
            {
                name:data.name,
                phone:data.phone,
                email:data.email,
                subject:data.subject,
                description:data.description
            },
            userID
        )
        r.target.reset();

    }
    

    const sendEmail=(serviceID,templateID,variables,userID) =>{


        emailjs.send(serviceID,templateID,variables,userID)
            .then(()=>{
                setSuccessMessage("Form sent sucessfully!. I'll contact you as soon as possible.");
            }).catch(err=>console.error(`Something went wront ${err}`));
    }
    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill out the form and let me know your needs.I'll contact you as soon as possible.</p>
                <span className="success-message">{successMessage}</span>
            </div>

            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-x2-12">
                        {/*Name Input*/}
                        <div className="text-center">
                            <input
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            ref={
                                register({
                                    required:"Please enter your name",
                                    maxLength:{
                                        value:20,
                                        message:"Please enter a name with fewer than 20 characters"
                                    }
                                })
                            }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        {/*Phone Input*/}
                        <div className="text-center">
                            <input
                            id="phone"
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                            ref={
                                register({
                                    required:"Please enter your phone number",     
                            })
                            }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>
                        {/*Email Input*/}
                        <div className="text-center">
                            <input
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            ref={
                                register({
                                    required:"Please enter your email",
                                    pattern:{
                                        value:/[A-Za-z0-9]{3}/,
                                        // value:/^[A-Z0-9.-%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message:"invalid Email"
                                    }     
                            })
                            }/>
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                        {/*Subject Input*/}
                        <div className="text-center">
                            <input
                            id="subject"
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                            ref={
                                register({
                                    required:"Add your subject",     
                            })
                            }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                    </div>
                    

                    <div className="col-md-6 col-xs-12">

                        <div className="text-center">
                        {/*Description*/}
                        <textarea
                        id="description"
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        name="description"
                        ref={
                            register({
                                required:"Please describe your query",     
                        })
                        }
                        ></textarea>
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.description && errors.description.message}
                        </span>
                        <button className="btn-main-offer contact-btn" type="submit">contact me</button>

                    </div>

                </div>
                </form>

            </div>
        </div>
    )
}

export default Contact

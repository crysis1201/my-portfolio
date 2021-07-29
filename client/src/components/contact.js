import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import profile from "../Images/20210320_173043-01.jpeg"
import { db } from "../components/firebase"
import React, { useState } from "react";
import Axios from "axios";

const Contact = () => {

    const [formInput, setFormInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        loader: false
    });

    const {firstName, lastName, email, message, loader} = formInput

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormInput({loader: true})
        Axios.post('/api/email', formInput)
            .then(res => {
                if(res.data.success) {
                    console.log('email Sent')
                    db.collection('contacts')
                        .add({
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            message: message
                        })
                        .then(() => {
                            alert('message has been submitted')
                        })   
                }
            })
            .catch(res => {
                if((res) => res.status(401)) {
                    alert("Please fill the form before submitting")
                }
            })
            .then(() => {
                setFormInput({
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: "",
                    loader: false
                });
            })
};
    const handleChange = (event) => {
        const { name, value } = event.target;
  
        setFormInput({ ...formInput, [name]: value });
};


    return (
        <div id="ContactMe" className="max-w-screen-lg mx-auto pt-12">
            <p className="text-white text-center text-3xl" >Contact Us</p>
            <div className="max-w-screen-sm pt-12 mx-auto ">        
                <form onSubmit={handleSubmit} className="w-full mx-auto max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-white" >
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-grey text-white border border-grey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-focusgrey" id="grid-first-name" type="text" name="firstName" value={firstName} onChange={handleChange} placeholder="First Name"></input>
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-white" >
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-grey text-white  border border-grey rounded py-3 px-4 leading-tight focus:outline-none focus:bg-focusgrey focus:border-gray-500" id="grid-last-name" name="lastName" value={lastName} onChange={handleChange} type="text" placeholder="Last Name"></input>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" >
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-grey text-white  border border-grey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-focusgrey focus:border-gray-500" id="grid-Email" name="email" value={email} onChange={handleChange} type="Email" placeholder="Email"></input>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 " >
                            Message
                        </label>
                        <textarea className="appearance-none block w-full h-36 bg-grey text-white  border border-grey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-focusgrey focus:border-gray-500" id="grid-message" name="message" value={message} onChange={handleChange} type="Message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <button type="submit" className={`${loader ? "bg-grey" : "bg-submit"} mt-6 hover:bg-hover rounded mx-auto appearance-none focus:outline-none flex flex-wrap`} >
                         <p  className='rounded mx-auto text-xl font-semibold text-white w-52 text-center pt-4 pb-4 '>Submit</p>
                    </button>
                </form>
            </div>
            <div className="">
                <div className="w-52 shadow-lg h-52 mt-10 overflow-hidden rounded-full mx-auto ">
                    <img src={profile} alt="" />
                </div>
                <div className="text-white max-w-sm mt-10 mx-auto flex justify-around items-center" >
                    <a href="https://www.instagram.com/eazhilamuthan/" ><InstagramIcon fontSize="large"></InstagramIcon></a>
                    <a href="https://twitter.com/eazhilamuthan"><TwitterIcon  fontSize="large"></TwitterIcon></a>
                    <a href="https://github.com/crysis1201"><GitHubIcon  fontSize="large"></GitHubIcon></a>
                    <a href="mailto:eazhilamuthan12@gmail.com"><MailIcon  fontSize="large"></MailIcon></a>
                </div>
            </div> 
        </div>
      );
};
 
export default Contact;
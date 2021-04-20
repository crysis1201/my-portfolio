import profile from "../Images/20210320_173043-01.jpeg"
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { db } from "./firebase.js"
import { useState } from "react";
import { motion } from 'framer-motion'

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
        })
        .then(() => {
            alert("Message has been submitted");
            setLoader(false);
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
        });

        setName("");
        setEmail("");
        setMessage("");

    };

    return (
        <div className="max-w-screen-lg mx-auto pt-12">
            <p className="text-white text-center text-3xl" >Contact Us</p>
            <div className="max-w-screen-sm pt-12 mx-auto ">        
                <form onSubmit={handleSubmit} class="w-full mx-auto max-w-lg">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-white" for="grid-first-name">
                            First Name
                        </label>
                        <input class="appearance-none block w-full bg-grey text-white border border-grey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-focusgrey" id="grid-first-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="First Name"></input>
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-white" for="grid-last-name">
                            Last Name
                        </label>
                        <input class="appearance-none block w-full bg-grey text-white border border-grey rounded py-3 px-4 leading-tight focus:outline-none focus:bg-focusgrey focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name"></input>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Email
                        </label>
                        <input class="appearance-none block w-full bg-grey text-white border border-grey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-focusgrey focus:border-gray-500" id="grid-Email" value={email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder="Email"></input>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2 " for="grid-message">
                            Message
                        </label>
                        <textarea class="appearance-none block w-full h-36 bg-grey text-white border border-grey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-focusgrey focus:border-gray-500" id="grid-message" value={message} onChange={(e) => setMessage(e.target.value)} type="Message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="mt-6 mx-auto appearance-none focus:outline-none flex flex-wrap" >
                         <p style={{ background: loader ? "#2e2e2e" : "#E63462" }} className='bg-submit rounded mx-auto text-xl font-semibold text-white w-52 text-center pt-4 pb-4 hover:bg-hover'>Submit</p>
                    </button>
                </form>
            </div>
            <div className="">
                <motion.div drag dragConstraints={{ left: 30, right: 30, top: 10, bottom: 10 }} className="w-52 shadow-lg h-52 mt-10 overflow-hidden rounded-full mx-auto ">
                    <motion.img 
                     dragConstraints={{ left: 30, right: 30 }}
                     src={profile} ></motion.img>
                </motion.div>
                <div className="text-white max-w-sm mt-10 mx-auto flex justify-around items-center" >
                    <InstagramIcon  fontSize="large"></InstagramIcon>
                    <TwitterIcon  fontSize="large"></TwitterIcon>
                    <GitHubIcon  fontSize="large"></GitHubIcon>
                    <MailIcon  fontSize="large"></MailIcon>
                </div>
            </div> 
        </div>
      );
}
 
export default Contact;
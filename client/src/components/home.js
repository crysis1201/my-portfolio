import profile from '../Images/IMG_7243.png'
import './hamburger.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import "./animation.css"
import { useState } from 'react'
const Home = () => {

  const [toggleOpen, setToggleOpen] = useState(true)

  const handleClick = () => {
    setToggleOpen(!toggleOpen)
  }

  return (
    <div className=" bg-black">
       <div id="Home" className="max-w-screen-lg mx-auto pt-12" >
            <header className="flex justify-between items-center">
                <div>
                  <p id="logo" className="lg:text-6xl text-5xl tracking-wider text-white" >
                    Eazhil amuthan
                  </p>
                </div>
                <div className=" lg:flex hidden justify-between items-center ">
                  <a href="#Skills" className="text-xl mr-7 uppercase text-white" >
                    Skills
                  </a>
                  <a href="#Works" className="text-xl mr-7 uppercase text-white" >
                    Works
                  </a>
                  <a href="#ContactMe" className="text-xl mr-7 uppercase text-white" >
                    Contact 
                  </a>
                </div>
                <div onClick={handleClick} className="lg:hidden inline-flex font-semibold items-center">
                  <button className={`${toggleOpen ? '' : "is-active"} hamburger hamburger--slider focus:outline-none`} type="button">
                      <span className="hamburger-box ">
                        <span className="hamburger-inner"></span>
                      </span>
                  </button>
                  <p className="text-sm text-white -mt-2 -ml-1" >Menu</p>
                </div>
            </header>
            <motion.div layout className={`${toggleOpen ? 'hidden fadeOut' : "fadeIn"} animated faster lg:hidden m-auto left-0 right-0 z-10 absolute w-11/12 h-auto mt-4 blur`}>
                  <a href="#Skills" className=" block text-center  text-xl pt-10 uppercase text-white" >
                    Skills
                  </a>
                  <a href="#Works" className="block text-center  text-xl pt-10 uppercase text-white" >
                    Works
                  </a>
                  <a href="#ContactMe" className="block text-center text-xl pt-10 pb-10 uppercase text-white" >
                    Contact Me
                  </a>
            </motion.div>
          
          <div className="lg:pt-40 pt-20 lg:flex items-center">
              <div className="text-white lg:max-w-lg max-w-xl lg:mx-0 mx-auto lg:text-left text-center leading-loose text-2xl ">
                <p className="font-extralight" >
                   Hi, I'm Eazhilamuthan, Co-Founder of Tweak Enterprises, a Front End Web Developer. I enjoy creating designs and making them real-life. 
                </p>
                <Link to="/Resume.pdf" target="_blank" download><div className="text-lg lg:mx-0 mx-auto bg-submit w-32 mt-8 hover:bg-grey rounded-md font-semibold text-center py-2 px-1">My Resume</div></Link>
              </div>
              <div className="Rectangle-2 p-1 lg:pt-1 mt-12 max-w-xs mx-auto lg:max-w-none">
                  <motion.img drag dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }} dragElastic={0.2} className=" mx-auto" src={profile} alt=""></motion.img>
              </div>
          </div>
       </div>
    </div>

      );
}
 
export default Home;
import profile from '../Images/IMG_7243.png'
const Home = () => {
    return (
    <div className=" bg-black">
       <div id="Home" className="max-w-screen-lg mx-auto pt-12" >
          <header className="flex justify-between">
              <div>
                <p id="logo" className="lg:text-6xl text-5xl tracking-wider text-white" >
                  Eazhil amuthan
                </p>
              </div>
              <div className=" lg:flex hidden justify-between items-center ">
                <a href="#Home" className="text-xl mr-7 uppercase text-white" >
                  Home
                </a>
                <a href="#Skills" className="text-xl mr-7 uppercase text-white" >
                  Skills
                </a>
                <a href="Works" className="text-xl mr-7 uppercase text-white" >
                  Works
                </a>
                <p className="text-xl mr-7 uppercase text-white" >
                  Contact 
                </p>
              </div>
          </header>
          <div className="pt-40 lg:flex items-center">
              <div className="text-white lg:max-w-lg max-w-xl lg:mx-0 mx-auto lg:text-left text-center leading-loose text-2xl ">
                <p className="font-extralight" >
                   Hi, I'm Eazhilamuthan, Co-Founder of Tweak Enterprises, a Front End Web Developer. I enjoy creating designs and making them real-life. 
                </p>
              </div>
              <div className="Rectangle-2 p-1 lg:pt-1 mt-12 max-w-xs mx-auto lg:max-w-none">
                  <img className="profile mx-auto" src={profile} alt=""></img>
              </div>
          </div>
       </div>
    </div>

      );
}
 
export default Home;
import Home from "./components/home.js"
import Progress from "./components/progress.js"
import Work from './components/works.js'
import SinglePage from './components/singlepage.js'
import { useEffect, useState } from "react";
import  Homepage2x  from "./Images/Homepage@2x.jpg";
import { BrowserRouter, Route,  Switch } from "react-router-dom";
import useFetch from "./components/useFetch.js";
import Contact from "./components/contact.js";
import { motion } from "framer-motion"

function App() {
  const { data: Works, isPending, error} = useFetch('http://localhost:8000/blogs')

  return (
    <div id="body" className=" bg-black pb-12 px-6">
      <div className="absolute w-1/2 max-w-screen-lg mx-auto h-full left-0 right-0  " >
        <div className="absolute left-2/4 top-1/2" >
        <motion.div drag
        dragConstraints={{ left: 0, right: 300 }}
        dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
        </div>
        <div className="absolute bottom 2/3 left-3/4" >
       <motion.div drag
        dragConstraints={{ left: 20, right: 300 }}
        dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
        </div>
        <div className="absolute bottom-full left-1/4" >
         <motion.div drag
        dragConstraints={{ left: 30, right: 300 }}
        dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
        </div>
        <div className="absolute bottom-1/4 left-1/3" >
        <motion.div drag
        dragConstraints={{ left: 50, right: 300 }}
        dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
        </div>
        <div className="absolute top-1/3 left-2/3" >
        <motion.div drag
        dragConstraints={{ left: 100, right: 300 }}
        dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
        </div>
        <div className="absolute top-2/3 left-32" >
         <motion.div drag
        dragConstraints={{ left: 70, right: 300 }}
        dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
        </div>
        <div className="absolute top-2/4 left-96" >
         <motion.div drag
        dragConstraints={{ left: 90, right: 300 }}
        dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
        </div>
        <div className="absolute top-3/4 left-2" >
         <motion.div drag
        dragConstraints={{ left: 200, right: 300 }}
        dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
        </div>
        <div className="absolute top-1/2 left-72" >
         <motion.div drag
        dragConstraints={{ left: 300, right: 300 }}
        dragElastic={0.2} absolute><div className="bg-gray opacity-30 rounded-lg w-10 h-10"></div> </motion.div>
        </div>
      </div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact >
            <Home />
            <Progress />
            { error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {Works && <Work Works={Works} />}
            <Contact></Contact>
          </Route>
          <Route path='/blogs/:id'>
            { error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <SinglePage />
          </Route>      
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import Home from "./components/home.js"
import Progress from "./components/progress.js"
import Work from './components/works.js'
import SinglePage from './components/singlepage.js'
import { useEffect, useState } from "react";
import  Homepage2x  from "./Images/Homepage@2x.jpg";
import { BrowserRouter, Route,  Switch } from "react-router-dom";
import useFetch from "./components/useFetch.js";
import Contact from "./components/contact.js";


function App() {
  const { data: Works, isPending, error} = useFetch('http://localhost:8000/blogs')

  return (
    <div id="body" className=" bg-black pb-12 px-6">
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

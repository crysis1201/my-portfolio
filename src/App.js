import Home from "./components/home.js"
import Progress from "./components/progress.js"
import Work from './components/works.js'
import SinglePage from './components/singlepage.js'
import { useState } from "react";
import  Homepage2x  from "./Images/Homepage@2x.jpg";
import { BrowserRouter, Route,  Switch } from "react-router-dom";


function App() {
const [Works] = useState ([
  { title: 'Html, Css & JavaScript', descripition: 'Worked on this website called ', website: ' uxtroupe.com', descripitionLg: 'This site is a guide to non-designer to get into User Experience. This site is created by Mr.Balamurugan, I worked as a intern here and done some Html, Css and Javascript works for this website.', alt: 'Homepage Of UXTROUPE', image1: Homepage2x, image2: '' },
])
  return (
    <div id="body" className=" bg-black pb-12 px-6">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact >
            <Home />
            <Progress />
            <Work Works={Works} />
          </Route>
          <Route path='/aa'><SinglePage Works={Works} /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

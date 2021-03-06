import Home from "./components/home.js"
import Progress from "./components/progress.js"
import Work from './components/works.js'
import SinglePage from './components/singlepage.js'
import { useState } from "react";
import  Homepage2x  from "./Images/Homepage@2x.jpg";
import { BrowserRouter, Route,  Switch } from "react-router-dom";


function App() {
const [Works] = useState ([
  { title: 'React', descripition: 'Worked on this website called ', website: ' uxtroupe.com', descripitionLg: 'Worked on this website called uxtroupe.com Worked on this website called uxtroupe.com Worked on this website called uxtroupe.com Worked on this website called uxtroupe.com Worked on this website called uxtroupe.com Worked on this website called uxtroupe.com Worked on this website called uxtroupe.com', alt: 'Homepage Of UXTROUPE', image1: Homepage2x, image2: '' },
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

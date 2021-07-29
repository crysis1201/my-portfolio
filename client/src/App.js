import Home from "./components/home.js"
import Progress from "./components/progress.js"
import Work from './components/works.js'
import SinglePage from './components/singlepage.js'
import { BrowserRouter, Route,  Switch } from "react-router-dom";
import useFetch from "./components/useFetch.js";
import Contact from "./components/contact";

function App() {
  const { data: Works, isPending, error} = useFetch(`${window.location.hostname}:8000/blogs`)

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

import './App.css';
import {
  Route,
} from "react-router-dom";

import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Sc1 from './Components/Solutions/Act-1/Sc1';
import Sc2 from './Components/Solutions/Act-1/Sc2';

import NavBar from './Components/NavBar';
import Acts from './Components/Solutions/Acts'
function App() {
  return (
    <div className="App">
          {/*Navbar*/}
          <NavBar/>

          {/*Home*/}
          <Route exact path="/">
          <Home/>
          </Route>

          <Route exact path="/about" >
          <AboutUs />
          </Route >
   { /*ROUTES */}
          <Route exact path="/Acts" >
          <Acts />
          </Route >

          <Route exact path="/sc1" >
          <Sc1 />
          </Route>

          <Route exact path="/sc2" >
          <Sc2 />
          </Route>


         


         

    </div>
  );
}

export default App;

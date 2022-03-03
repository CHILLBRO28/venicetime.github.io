/* eslint-disable react/jsx-pascal-case */
import './App.css';
import {
  Route,
  Switch,
} from "react-router-dom";

import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import A1_Sc1 from './Components/Solutions/Act-1/A1_Sc1';
import A1_Sc2 from './Components/Solutions/Act-1/A1_Sc2';
import A1_Sc3 from './Components/Solutions/Act-1/A1_Sc3';
import A2_Sc1 from './Components/Solutions/Act-2/A2_Sc1'
import A2_Sc2 from './Components/Solutions/Act-2/A2_Sc2';
import A2_Sc3 from './Components/Solutions/Act-2/A2_Sc3';
import A2_Sc4 from './Components/Solutions/Act-2/A2_Sc4';
import A2_Sc5 from './Components/Solutions/Act-2/A2_Sc5';
import { Footer } from './Components/Footer';
import NoPage from './Components/NoPage';
import NavBar from './Components/NavBar';
import Acts from './Components/Solutions/Acts'
function App() {
  return (
    <div className="App">
          {/*Navbar*/}
          <NavBar/>
          {/*Home*/}
          <Switch>
          <Route exact path="/" basename="/">
          <Home/>
          </Route>

          <Route exact path="/about" >
          <AboutUs />
          </Route >
   { /*ROUTES */}
          <Route exact path="/Acts" >
          <Acts />
          </Route >

          <Route exact path="/A1_sc1" >
          <A1_Sc1 />
          </Route>

          <Route exact path="/A1_sc2" >
          <A1_Sc2 />
          </Route>

          <Route exact path="/A1_sc3" >
          <A1_Sc3 />
          </Route>

          <Route exact path="/A2_sc1" >
          <A2_Sc1 />
          </Route>

          <Route exact path="/A2_sc2" >
          <A2_Sc2 />
          </Route>

          <Route exact path="/A2_sc3" >
          <A2_Sc3 />
          </Route>

          <Route exact path="/A2_sc4" >
          <A2_Sc4 />
          </Route>

          
          <Route exact path="/A2_sc5" >
          <A2_Sc5 />
          </Route>

         
          <Route exact path="*" >
          <NoPage />
          </Route>
          </Switch>
         
         {/**<Footer /> */} 
       
    </div> 
  );
}

export default App;

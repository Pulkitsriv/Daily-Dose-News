
import './App.css';
import React from 'react'
import Navbar from './myComponent/Navbar';
import News from './myComponent/News';
import Footer from './myComponent/Footer';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

const App=()=> {
  const [progress, setProgress] = useState(0)
    return (
         <div>
       <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key="general" size={12} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} key="business" size={12} country="in" category="business"/></Route> 
          <Route exact path="/General"><News setProgress={setProgress} key="General" size={12} country="in" category="General"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} key="health" size={12} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} key="science" size={12} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} key="sports" size={12} country="in" category="sports"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" size={12} country="in" category="entertainment"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} key="technology" size={12} country="in" category="technology"/></Route> 
        </Switch>
        <Footer/>
        </Router>
      </div>  
    )
}
export default App;

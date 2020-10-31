//Packages
import React from 'react';
import './App.css';


//pages
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Code from "./pages/Code"
import Error from "./pages/Error"
import MemeGen from "./pages/MemeGen"

import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about/" component={About}/>
        <Route exact path="/code/" component={Code}/>
        <Route exact path="/meme/" component={MemeGen}/>
        <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;

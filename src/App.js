//Packages
import React from 'react';
import './App.css';


//pages
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"

import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about/" component={About}/>
        <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;

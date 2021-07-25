import React from 'react';
import MapView from './components/home/MapView';
import './App.css';
import Nosotros from './components/nosotros/Nosotros'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import AdminLayout from "layouts/Admin.js";

function App() {
  return (
    <Switch>
      <Route path="/map">
        <MapView />;
      </Route>
      <Route path="/nosotros">
        <Nosotros />
      </Route>
      
    </Switch>
  );
}

export default App;

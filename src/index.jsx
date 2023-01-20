import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import "./style/index.css";

import Home from './pages/Home'
import About from './pages/About/About'
import Logement from './pages/Logement'
import NotFound from './pages/NotFound'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
       <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/a-propos">à propos</Link></li>
            <li><Link to="/logement">Logement</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/a-propos" element={<About/>}/>
          <Route exact path="/logement" element={<Logement/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
  );

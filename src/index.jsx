import React from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import GlobalStyle from './utils/style/GlobalStyle'

import Home from './pages/Home'
import About from './pages/About/About'
import Logement from './pages/Logement'
import NotFound from './pages/NotFound'
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route exact path="/kasa" element={<Home />} />
      <Route exact path="/kasa/a-propos" element={<About />} />
      <Route exact path="/kasa/logement/:logementId" element={<Logement />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

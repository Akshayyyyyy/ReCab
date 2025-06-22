import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Navbar.jsx";
import Landing from "./pages/Landing.jsx";


function App() {
  return (
    <Router>
      <Nav />
      <Landing />
    </Router>
  );
}

export default App;

//import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import components
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
    // write javascript here
    // examples of the use of props
    const name = "Trent Ward";
    const age = 22;
    return (
        <Router>
            <div className="App">
                <NavBar me={name} myAge={age} />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Skills" element={<Skills />} />
                        <Route path="/Experience" element={<Experience />} />
                        <Route path="/Services" element={<Services />} />
                        <Route path="/Contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

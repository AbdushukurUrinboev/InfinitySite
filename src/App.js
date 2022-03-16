import React from "react";
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Ielts from "./components/Ielts/Ielts";
import Web from "./components/Web Dasturlash/Web";
import Registration from "./components/Registration/Registration";

function App() {
    return (
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route exact path='/' element = {< Home />}></Route>
            <Route exact path='/Ielts' element = {< Ielts />}></Route>
            <Route exact path='/Web' element = {< Web />}></Route>
            <Route exact path='/About' element = {< About />}></Route>
            <Route exact path='/Contact' element = {< Contact />}></Route>
            <Route exact path='/Registration' element = {<Registration />}></Route>
        </Routes>
        <Footer />
        </BrowserRouter>


    )
}

export default App;
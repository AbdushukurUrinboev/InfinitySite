import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AsosiyYunalishlar from "./components/AsosiyYunalish/AsosiyYunalishlar";
import NegaAynanBiz from "./components/NegaAynanBiz/NegaAynanBiz";
import Gallereya from "./components/Gallereya/Gallereya";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <Navbar/>
            <Header />
            <AsosiyYunalishlar />
            <NegaAynanBiz />
            <Gallereya />
            <Footer />
        </div>


    )
}

export default App;
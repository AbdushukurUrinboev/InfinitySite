import React from "react";
import './Footer.css';
import grouplogo from '../../assets/logo.svg'
import pin from '../../assets/pin.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import telegram from '../../assets/telegram.svg'


function Footer() {
    return (
        <div className="containerWrapper">
            <footer>

                <div className="container">


                    <div className="row row-cols-2 ">
                        <div className="col-12  col-lg-12 ">
                            <div className="row rowContainer">
                                <div className="col-4 col-lg-3">
                                    <p className='headLine'>DASTURLASH</p>
                                    <p className='smallTexts'>Frontend</p>
                                    <p className='smallTexts'>Backend</p>
                                    <p className='smallTexts'>Foundation</p>
                                    <p className='smallTexts'>UI and UX designer</p>
                                    <p className='smallTexts'>Web designer</p>
                                </div>
                                <div className="col-4 col-lg-3">
                                    <p className='headLine'>ENGLISH</p>
                                    <p className='smallTexts'>English for kids</p>
                                    <p className='smallTexts'>General English</p>
                                    <p className='smallTexts'>English for IT</p>
                                    <p className='smallTexts'>IELTS</p>

                                </div>
                                <div className="col-4 col-lg-3">
                                    <p className='headLine'>MATEMATIKA</p>
                                    <p className='smallTexts'>Mental arifmetika</p>
                                    <p className='smallTexts'>Maths for kids</p>
                                    <p className='smallTexts'>Maths for students</p>


                                </div>
                                <div className="col-12 col-lg-1">


                                </div>
                                <div className="col-12 col-lg-2">
                                   
                                        <div className="col-12">
                                            <img className='logoImage' src={grouplogo} alt="Bu joyda rasm bor!" />
                                        </div>
                                       
                                    
                                    <i className="fas fa-map-marker-alt "></i>
                                     <a href="#"><img src={pin} className="footerIcons" alt="Buyerda rasim bor"  /></a><p>Farg'ona, Uzbekistan</p>
                                    <a href="#"><img src={facebook} className="footerIcons" alt="Buyerda rasim bor"  /></a>
                                    <a href="#"><img src={instagram} className="footerIcons" alt="Buyerda rasim bor" /></a>
                                    <a href="#"><img src={twitter} className="footerIcons" alt="Buyerda rasim bor" /></a>
                                    <a href="#"><img src={telegram} className="footerIcons" alt="Buyerda rasim bor" /></a>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>
                   <hr />
                    <div className="container">
                    <span className='footerWords'>2022. All Rights reserved</span>
                    <span className='footerNumber'>+9989 633 55 99</span>
                    </div>
                    
            </footer>
        </div>

    )
}

export default Footer;
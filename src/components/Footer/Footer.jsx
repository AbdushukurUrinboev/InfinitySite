import React from "react";
import './Footer.css';
import grouplogo from '../../assets/logo.svg';
import pin from '../../assets/pin.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import telegram from '../../assets/telegram.svg';
import imgggg from '../../assets/footerVector.svg'


function Footer() {
    return (
        <div className="containerWrapper">
            <div className="footerWrapper">
            <div className="innerFooter">
            <div className="imgg">
                <img className="bgImggg" src={imgggg} alt="" />
            </div>

            <div className="container">


                <div className="row row-cols-2 ">
                    <div className="col-12  col-lg-12 ">
                        <div className="row rowContainer container">
                            <div className="col-9" >
                                <div className="row rowFooterText">
                                <div className="col-2 col-lg-3 colFooter">
                                <p className='headLine'>DASTURLASH</p>
                                <p className='smallTexts footerP'>Frontend</p>
                                <p className='smallTexts footerP'>Backend</p>
                                <p className='smallTexts footerP'>Foundation</p>
                                <p className='smallTexts footerP'>UI and UX designer</p>
                                <p className='smallTexts footerP'>Web designer</p>
                            </div>
                            <div className="col-2 col-lg-3 colFooter">
                                <p className='headLine headLineEnglish'>ENGLISH</p>
                                <p className='smallTexts footerP'>English for kids</p>
                                <p className='smallTexts footerP'>General English</p>
                                <p className='smallTexts footerP'>English for IT</p>
                                <p className='smallTexts footerP'>IELTS</p>

                            </div>
                            <div className="col-2 col-lg-3 colFooter">
                                <p className='headLine '>MATEMATIKA</p>
                                <p className='smallTexts footerP'>Mental arifmetika</p>
                                <p className='smallTexts footerP'>Maths for kids</p>
                                <p className='smallTexts footerP'>Maths for students</p>
                                
                            </div>
                                </div>
                            
                            </div>

                            <div className="col-12 col-lg-2">
                                
                                    <div className="col-12 logoFooterImg">
                                        <img className='logoImageFooter' src={grouplogo} alt="Bu joyda rasm bor!" />
                                    </div>
                                    
                                
                                <i className="fas fa-map-marker-alt "></i>
                                <div className="fooeterFerganaTxDiv">
                                    <img src={pin} className="footerIcons locationLogoFooter" alt="Buyerda rasim bor"  />
                                    <p className="footerFerganaTx">Farg'ona, Uzbekistan</p>
                                </div>
                                <div className="networksFooter">
                                    <a href="#"><img src={facebook} className="footerIcons" alt="Buyerda rasim bor"  /></a>
                                    <a href="#"><img src={instagram} className="footerIcons" alt="Buyerda rasim bor" /></a>
                                    <a href="#"><img src={twitter} className="footerIcons" alt="Buyerda rasim bor" /></a>
                                    <a href="#"><img src={telegram} className="footerIcons" alt="Buyerda rasim bor" /></a>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>

            </div>
                <hr className="footerHr" />
                <div className="container">
                    <span className='footerWords'>© 2022. All rights reserved</span>
                    <span className='footerNumber'>+9989 633 55 99</span>
                </div>
                
            </div>
            </div>
            
        </div>

    )
}

export default Footer;
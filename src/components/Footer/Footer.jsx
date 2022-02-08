import react from "react";
import './Footer.css';
import grouplogo from '../../public/Img/Footer/logoInfinity.png'
import logotip from '../../public/Img/Footer/logotip.png'

function Footer() {
    return(
            <div className='backSite'>
              <img className='rotatedLogo' src={logotip} />         
            <div className="container">

            <div className="row row-cols-2 styleToPosition">
            <div className="col-12  col-lg-6 ">
            <div className="row ">
            <div className="col-12 col-lg-4">
                <h6 className='headLine'>DASTURLASH</h6>
                <p className='smallTexts'>Frontend</p>
                <p className='smallTexts'>Backend</p>
                <p className='smallTexts'>Foundation</p>
                <p className='smallTexts'>UI and UX designer</p>
                <p className='smallTexts'>Web designer</p>
            </div>
            <div className="col-12 col-lg-4">
            <h6 className='headLine'>ENGLISH</h6>
                <p className='smallTexts'>English for kids</p>
                <p className='smallTexts'>General English</p>
                <p className='smallTexts'>English for IT</p>
                <p className='smallTexts'>IELTS</p>
                
            </div>
            <div className="col-12 col-lg-4">
            <h6 className='headLine'>MATEMATIKA</h6>
                <p className='smallTexts'>Mental arifmetika</p>
                <p className='smallTexts'>Maths for kids</p>
                <p className='smallTexts'>Maths for students</p>
                

            </div>

            </div>
            </div>
            <div className="row ">
            <div className="col-12 col-lg-6">
                
            </div>
            <div className="col-12 col-lg-6">

            <div className="row ">
                <div className="col-6 toFindBorder">
                <img  src={grouplogo} />
                </div>
                <div className="col-6">
                    <p className='footerInfinity'>Infinity</p>
                </div>
            </div>
                <div className='row'>
                    <div className='col'>
                    <i className="fas fa-map-marker-alt firstIcon"></i>
                    <p>Farg'ona, Uzbekistan</p>
                    </div>
                    <div className="">
                    <a href="#"><i className="fab fa-facebook-f firstInlinedIcons "></i></a>
                    <a href="#"><i className="fab fa-instagram inlinedIcons"></i></a>
                    <a href="#"><i className="fab fa-twitter inlinedIcons"></i></a>
                    <a href="#"><i className="fab fa-telegram-plane inlinedIcons"></i></a>
                    </div>
                </div>
                
            </div>
            </div>             

            </div>
            </div>
            <div className='footerLine'></div>

            <div className="container">
            <div className="row lastFooterRow">
            <div className="col">
            <p>2020. All rights reserved</p>
            </div>
            <div className="col">
            <p className='telNumber'>+99895 485 70 70</p>
            </div>
            </div>

            </div>
            
        </div>
    )
}

export default Footer;
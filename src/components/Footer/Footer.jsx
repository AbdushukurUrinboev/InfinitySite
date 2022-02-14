import react from "react";
import './Footer.css';
import grouplogo from '../../assets/logotip.png'


function Footer() {
    return(
        <footer>
        <div className="container">
            
        <div className="row row-cols-2 ">
            <div className="col-12  col-lg-12 ">
                <div className="row rowContainer">
                <div className="col-12 col-lg-2">
                    <p className='headLine'>DASTURLASH</p>
                    <p className='smallTexts'>Frontend</p>
                    <p className='smallTexts'>Backend</p>
                    <p className='smallTexts'>Foundation</p>
                    <p className='smallTexts'>UI and UX designer</p>
                    <p className='smallTexts'>Web designer</p>
                </div>
                <div className="col-12 col-lg-2">
                <p className='headLine'>ENGLISH</p>
                    <p className='smallTexts'>English for kids</p>
                    <p className='smallTexts'>General English</p>
                    <p className='smallTexts'>English for IT</p>
                    <p className='smallTexts'>IELTS</p>
                    
                </div>
                <div className="col-12 col-lg-2">
                <p className='headLine'>MATEMATIKA</p>
                    <p className='smallTexts'>Mental arifmetika</p>
                    <p className='smallTexts'>Maths for kids</p>
                    <p className='smallTexts'>Maths for students</p>
                    
 
                </div>
                <div className="col-12 col-lg-3">
               
 
                </div>     
                <div className="col-12 col-lg-3">
                    <div className="row">
                     <div className="col-4 footerLine">
                      <img className='logoImage' src={grouplogo} />
                      </div>
                      <div className="col-4">
                       <p className='footerInfinity'>Infinity</p>
                   </div>
                </div>   
                        <i className="fas fa-map-marker-alt firstIcon"></i>
                        <p>Farg'ona, Uzbekistan</p>
                        <a href="#"><i className="fab fa-facebook-f firstInlinedIcons "></i></a>
                        <a href="#"><i className="fab fa-instagram inlinedIcons"></i></a>
                        <a href="#"><i className="fab fa-twitter inlinedIcons"></i></a>
                        <a href="#"><i className="fab fa-telegram-plane inlinedIcons"></i></a>
                                   
                </div>
                
            </div>
            
            
        </div>
                        
        
        </div>
        </div>
       <hr />
           <span className='footerWords'>2022. All Rights reserved</span>  
            <span  className='footerNumber'>+9989 633 55 99</span> 
     </footer>
    )
}

export default Footer;
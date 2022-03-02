import './Header.css';
import InfinityLogo from '../../assets/logo.svg';
import undrowInterface from '../../assets/undraw_voice_interface_eckp1.svg';

import AOS from 'aos';
import "aos/dist/aos.css";



function Header () {

  AOS.init({
    duration:1200
  });

return(
  <>

    <div className="homePage ">
        <div className="container ">
          <div className="menu" >
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container-fluid navbarHeader">
                <div className="col-5">
                    <div className='group10472'>
                        <div className="infinitySymbol1">
                          <div className="group"> 
                              <img src={InfinityLogo} alt="" className="infinityLogo"/>
                          </div>
                        </div>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbarMedia" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarMain">
                    <li className="nav-item active dropdown">
                      <a className="nav-link dropdown-toggle headerText coursesHeader" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Kurslar
                      </a>
                      <ul className="dropdown-menu headerDropUl" aria-labelledby="navbarDropdown">
                          <li><a className="dropdown-item headerText dropdownText" href="#">IELTS</a></li>
                          <li><a className="dropdown-item headerText dropdownText" href="#">General English</a></li>
                          <li><a className="dropdown-item headerText dropdownText" href="#">English for IT</a></li>
                          <li><a className="dropdown-item headerText dropdownText" href="#">Kids English</a></li>
                          <li><a className="dropdown-item headerText dropdownText" href="#">Komputer Savodxonligi</a></li>
                          <li><a className="dropdown-item headerText dropdownText" href="#">Web Dasturlash</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link headerText aboutUsHeader" href="#">Biz haqimizda</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link headerText contactUsHeader" href="#">Aloqa</a>
                    </li>

                    <li className='applyBtnLi'><button className='applyBtn ' type='submit'>Ro'yxatdan o'tish</button></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <div className="mainPageHeader">
            <div  className="col-6 headerCarousel ">
              <div  id="carouselExampleDark" className="carousel carousel-dark slide carouselHeaderText" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                      
                      <li>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="dot active carouselDot" aria-current="true" aria-label="Slide 1"></button>
                      </li>

                      <li>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="dot carouselDot" aria-label="Slide 2"></button>
                      </li>

                      <li>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="dot carouselDot" aria-label="Slide 3"></button>
                      </li>

                      <li>
                      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" className="dot carouselDot" aria-label="Slide 4"></button>
                      </li>
                    
                  </div>
                 
                 <div  className="carousel-inner carouselInner ">
                   <div className="carousel-item active carousell" data-bs-interval="10000">
                     <div className="carousel-caption d-none d-md-block">
                       <p className="pHeader sec" id="home">Zamonaviy kasblarni biz bilan o'rganing</p>
                     </div>
                   </div>
                   <div className="carousel-item carousell" data-bs-interval="2000">
                     <div className="carousel-caption d-none d-md-block">
                       <p className="pHeader sec" id="home2" >We change lives thorugh education</p>
                     </div>
                   </div>
                   <div className="carousel-item carousell">
                     <div className="carousel-caption d-none d-md-block">
                       <p className="pHeader sec" id="home3">Hayotingizni ta'lim orqali o'zgartiramiz</p>
                     </div>
                   </div>
                   <div className="carousel-item carousell">
                     <div className="carousel-caption d-none d-md-block">
                       <p className="pHeader sec" id="home4">Study modern subjects <br /> with us</p>
                     </div>
                   </div>
                   <button className='mainPageBtnHeader'>Batafsil</button>
                 </div>
               </div>
            </div>

            <div  className="col-6 mainPageImage">
              <div className="imgBgVector">
                <img src={undrowInterface} alt="" className='imgHomePage'/>
              </div>
            </div>
          </div>
        </div>

        

    </div>
      
  </>
)
}

export default Header;
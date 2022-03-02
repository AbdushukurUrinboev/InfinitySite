import React from "react";
import './Gallereya.css';

import firstPic from '../../assets/image397.jpg'
import secondPic from '../../assets/img2.png'
import thirdPic from '../../assets/image400.jpg'
import fourthPic from '../../assets/image401.jpg'
import fifthPic from '../../assets/image402.jpg'

import AOS from 'aos';
import "aos/dist/aos.css";

function Gallereya() {

  AOS.init();

  return (

    <div className="ourGallery">
        <div className="container">
        <p className='toGallerySize'>Bizning Gallery</p>
        <div className="row row-cols-2 row-cols-lg-3">

          <div data-aos="fade-down" className="col-12 col-lg-8 exraPadding cardGallery" >
              <img className='firstPicture' src={firstPic} alt="Bu joyda rasm bor!" />
              <div class="infoGallery">
                <p>Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit. Blanditiis sequi laudantium
                fugiat modi dignissimos quis. welcome to out site</p>
            </div>
          </div>

          <div data-aos="fade-down" className="col-6 col-lg-4 exraPadding cardGallery">
            <img className='secondPic' src={secondPic} alt="Bu joyda rasm bor!" />
            <div class="infoGallery">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet consectetur </p>
            </div>
          </div>

          <div data-aos="fade-up" className="col-6 col-lg-4 exraPadding cardGallery">
            <img className='thirdPic ' src={thirdPic} alt="Bu joyda rasm bor!" />
            <div class="infoGallery">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet consectetur </p>
            </div>
          </div>

          <div data-aos="fade-up" className="col-6 col-lg-4 exraPadding cardGallery">
            <img className='fourthPic ' src={fourthPic} alt="Bu joyda rasm bor!" />
            <div class="infoGallery">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet consectetur </p>
            </div>
          </div>

          <div data-aos="fade-up" className="col-6 col-lg-4 exraPadding cardGallery">
            <img className='fifthPic ' src={fifthPic} alt="Bu joyda rasm bor!" />
            <div class="infoGallery">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet consectetur </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Gallereya;
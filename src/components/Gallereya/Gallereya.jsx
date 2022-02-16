import React from "react";
import './Gallereya.css';
import firstPic from '../../assets/image397.jpg'
import secondPic from '../../assets/img2.png'
import thirdPic from '../../assets/image400.jpg'
import fourthPic from '../../assets/image401.jpg'
import fifthPic from '../../assets/image402.jpg'

function Gallereya() {
  return (

    <div className="container">
      <p className='toGallerySize'>Bizning Gallery</p>
      <div className="row row-cols-2 row-cols-lg-3">
        <div className="col-12 col-lg-8 exraPadding" >
          <div className=''>
            <img className='firstPicture' src={firstPic} alt="Bu joyda rasm bor!" />
          </div>
        </div>
        <div className="col-6 col-lg-4">

          <img className='secondPic' src={secondPic} alt="Bu joyda rasm bor!" />

        </div>
        <div className="col-6 col-lg-4 ">

          <img className='thirdPic ' src={thirdPic} alt="Bu joyda rasm bor!" />

        </div>
        <div className="col-6 col-lg-4 ">

          <img className='fourthPic ' src={fourthPic} alt="Bu joyda rasm bor!" />

        </div>
        <div className="col-6 col-lg-4 ">

          <img className='fifthPic ' src={fifthPic} alt="Bu joyda rasm bor!" />

        </div>
      </div>
    </div>
  )
}

export default Gallereya;
import react from "react";
import './Gallereya.css';

function Gallereya () {
    return(
      
        <div className="container">
  <p className='toGallerySize'>Bizning Gallery</p>
  <div className="row row-cols-2 row-cols-lg-3">
    <div className="col-12 col-lg-8 " >
        <div className='firstPicture'>
             <p className='cardText'>Welcome to our outstanding Infinity center. This is your place, feel here as your home sit, amet consectetur adipisicing elit!</p>
        </div>
      </div>
    <div className="col-6 col-lg-4 ">
        <div className='secondCard'>

        </div>
    </div>
    <div className="col-6 col-lg-4">
        <div className="thirdCard">

        </div>
    </div>
    <div className="col-6 col-lg-4 ">
        <div className="fourthCard">

        </div>
    </div>
    <div className="col-6 col-lg-4">
        <div className="fifthCard">

        </div>
    </div>
  </div>
</div>
    )
}

export default Gallereya;
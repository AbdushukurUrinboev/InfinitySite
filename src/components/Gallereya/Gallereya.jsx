import react from "react";
import './Gallereya.css';
import firstPic from '../../assets/image397.jpg'
import secondPic from '../../assets/img2.png'
import thirdPic from '../../assets/image400.jpg'
import fourthPic from '../../assets/image401.jpg'
import fifthPic from '../../assets/image402.jpg'

function Gallereya () {
    return(
      
        <div className="container">
        <p className='toGallerySize'>Bizning Gallery</p>
        <div className="row row-cols-2 row-cols-lg-3 colntrolContainer">
          <div className="col-12 col-lg-8 exraPadding" >
              <div className=''>
                 <img  className='firstPicture ' src={firstPic} />
              </div>
            </div>
          <div className="col-6 col-lg-4 exraPadding">
             
              <img  className='secondPic forColor ' src={secondPic} />
              
          </div>
          <div className="col-6 col-lg-4 exraPadding">
            
              <img  className='thirdPic forColor' src={thirdPic} />
             
          </div>
          <div className="col-6 col-lg-4 exraPadding">
             
              <img  className='fourthPic forColor' src={fourthPic} />
              
          </div>
          <div className="col-6 col-lg-4 exraPadding">
              
              <img  className='fifthPic forColor' src={fifthPic} />
            
          </div>
        </div>
      </div>
      
    )
}

export default Gallereya;
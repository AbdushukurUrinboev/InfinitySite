import React from 'react';
import Card from '../../assets/cup.svg';
import Like from '../../assets/like.svg';
import Stars from '../../assets/stars.svg';
import ImageGirle from '../../assets/imageGirle.svg';
import './NegaAynanBiz.css'


function NegaAynanBiz() {
    return (
        <>
            <div className="wrapperForWhyExactlyUs">
                <div className="container">
                    <h1 className="basicNameForWhyExactlyUsFile">Nega aynan biz?</h1>

                    <div className="row colForWhyExactlyUs">
                        <div className="col-sm-4 col-md-12 col-lg-4 ">
                            <div>
                                <span>
                                    <img src={Card} alt="Bu joyda rasm bor!" /> <span className="whyExactlyUsCup">Trusted methods</span>
                                </span>
                            </div>

                            <div className="whyExactlyUsIcons">
                                <span>
                                    <img src={Like} alt="Bu joyda rasm bor!" /> <span className="whyExactlyUsCup">Malakali o'qituvchilar</span>
                                </span>
                            </div>
                            <div className="whyExactlyUsIcons">
                                <span>
                                    <img src={Stars} alt="Bu joyda rasm bor!" /> <span className="whyExactlyUsCup">Qo'shimcha darslar</span>
                                </span>
                            </div>

                            <div className="whyExactlyUsIcons">
                                <button type="button" className="btn btn-outline-warning whyExactlyUsButton">Batafsil</button>
                            </div>

                        </div>
                        <div className="col-sm-4 col-md-12 col-lg-4 seconGridWgyExactlyUs">
                            <div>
                                <span>
                                    <img src={Card} alt="Bu joyda rasm bor!" /> <span className="whyExactlyUsCup">Shahar markazida</span>
                                </span>
                            </div>

                            <div className="whyExactlyUsIcons">
                                <span>
                                    <img src={Like} alt="Bu joyda rasm bor!" /> <span className="whyExactlyUsCup">Experienced teachers</span>
                                </span>
                            </div>
                            <div className="whyExactlyUsIcons">
                                <span>
                                    <img src={Stars} alt="Bu joyda rasm bor!" /> <span className="whyExactlyUsCup">Extra lessons</span>
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-12 col-lg-4 circleOutWhyExactlyUsWrapperForResponsive">
                            <div className="circ circleOutWhyExactlyUsForResponsive">
                                <img className="imgGirlWhyExactlyUs imgGirlWhyExactlyUsResponsive" src={ImageGirle} alt="Bu joyda rasm bor!" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NegaAynanBiz;
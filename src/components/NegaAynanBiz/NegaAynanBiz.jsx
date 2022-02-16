import React from 'react';
import Card from '../../assets/cup.png';
import Like from '../../assets/like.png';
import Stars from '../../assets/stars.png';
import ImageGirle from '../../assets/imageGirle.png';
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
                                    <img src={Like} alt="Bu joyda rasm bor!" /> <span className="whyExactlyUsCup">Experienced teachers</span>
                                </span>
                            </div>
                            <div className="whyExactlyUsIcons">
                                <span>
                                    <img src={Stars} alt="Bu joyda rasm bor!" /> <span className="whyExactlyUsCup">Extra lessons</span>
                                </span>
                            </div>

                            <div className="whyExactlyUsIcons">
                                <button type="button" className="btn btn-outline-warning whyExactlyUsButton">Batafsil</button>
                            </div>

                        </div>
                        <div className="col-sm-4 col-md-12 col-lg-4">
                            <div>
                                <span>
                                    <img src={Card} alt="Bu joyda rasm bor!" /> <span className="whyExactlyUsCup">Comfortable location</span>
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
                            <div className="circleOutWhyExactlyUs circleOutWhyExactlyUsForResponsive">
                                <div className="circleIntoWhyExactlyUs">
                                    <img src={ImageGirle} alt="Bu joyda rasm bor!" />
                                </div>
                                <div className="whyExactlyUsDotsAll">
                                    <div className="row whyExactlyUsDotsAllInto">
                                        <span className="whyExactlyUsDotsAllIntoFirst">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                        <span className="whyExactlyUsDotsAllIntoOthers">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                        <span className="whyExactlyUsDotsAllIntoOthers">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                        <span className="whyExactlyUsDotsAllIntoOthers">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="row whyExactlyUsDotsAllIntoSecond">
                                        <span className="whyExactlyUsDotsAllIntoFirst">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                        <span className="whyExactlyUsDotsAllIntoOthers">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                        <span className="whyExactlyUsDotsAllIntoOthers">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                        <span className="whyExactlyUsDotsAllIntoOthers">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                    </div>

                                    <div className="row whyExactlyUsDotsAllIntoSecond1">
                                        <span className="whyExactlyUsDotsAllIntoFirst">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                        <span className="whyExactlyUsDotsAllIntoOthers">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                        <span className="whyExactlyUsDotsAllIntoOthers">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                        <span className="whyExactlyUsDotsAllIntoOthers">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                    </div>

                                    <div className="row whyExactlyUsDotsAllIntoSecond2">
                                        <span className="whyExactlyUsDotsAllIntoFirst">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                        <span className="whyExactlyUsDotsAllIntoOthers">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                        <span className="whyExactlyUsDotsAllIntoOthers">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                        <span className="whyExactlyUsDotsAllIntoOthers">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                    </div>

                                    <div className="row whyExactlyUsDotsAllIntoSecond3">
                                        <span className="whyExactlyUsDotsAllIntoFirst">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                        <span className="whyExactlyUsDotsAllIntoOthers">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                        <span className="whyExactlyUsDotsAllIntoOthers">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                        <span className="whyExactlyUsDotsAllIntoOthers">
                                            <img src="../images/dots.png" alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NegaAynanBiz;
import React from "react";
import './AsosiyYunalishlar.css';

function AsosiyYunalishlar() {
    return (
        <>
            <div className="container wrapperForMainLine">
                <h1 className="mainLineBasicTheme">Asosiy yo'nalishlar</h1>

                <div className="mainLineCardSection">

                    <div className="row">
                        <div className="col-sm-4 col-md-12 col-lg-4 noneBorderMainLine mainLineFirstCard">
                            <div className="mainLineFirstCard">
                                <p className="mainLineProgramming">Dasturlash</p>
                                <p className="mainLineCourses">More than 12 courses</p> <br />
                                <p className="mainLineView">view</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 noneBorderMainLine mainLineFirstCard">
                            <div className="mainLineFirstCard">
                                <p className="mainLineProgramming">Ingiliz tili</p>
                                <p className="mainLineCourses">More than 12 courses</p> <br />
                                <p className="mainLineView">view</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 noneBorderMainLine mainLineFirstCard">
                            <div className="mainLineFirstCard">
                                <p className="mainLineProgramming">Matematika</p>
                                <p className="mainLineCourses">More than 12 courses</p> <br />
                                <p className="mainLineView">view</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AsosiyYunalishlar;
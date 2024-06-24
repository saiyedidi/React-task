import React from "react";
import { Link } from 'react-router-dom';
import './index.css'
const GivenInformation = () => {
    return (
        <div className="given-ifi">
            <div className="backtoarrow">
                <div>
                    <i className="fa fa-angle-right"></i>
                </div>
                <div>
                <Link to="/"><button> back to home</button></Link>
                </div>

            </div>
            <h3>given information</h3>
            <h4>text enetered</h4>
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
            <div className="upload-file">
                <h2>uploads</h2>
                <div className="uploaded-names">
                    <h3>uploaded file <span>5/5</span></h3>
                    <div className="">
                        <p><i className="fa fa-file"></i>case document.pfd</p>
                    </div>
                    <div className="">
                        <p><i className="fa fa-file"></i>case document.pfd</p>
                    </div>
                    <div className="">
                        <p><i className="fa fa-file"></i>case document.pfd</p>
                    </div>
                    <div className="">
                        <p><i className="fa fa-file"></i>case document.pfd</p>
                    </div>
                    <div className="">
                        <p><i className="fa fa-file"></i>case document.pfd</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GivenInformation;
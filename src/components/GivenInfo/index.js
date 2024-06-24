import React from "react";
import { Link } from 'react-router-dom';
import './index.css'

const GivenInfo = () => {
    return (
        <div className="given-ifo">
            <div className="backtoarrow">
                <div>
                    <i className="fa fa-angle-right"></i>
                </div>
                <div>
                <Link to="/"><button> back to home</button></Link>
                </div>

            </div>
            <h3>given information</h3>
            <h4 className="your-search">your search</h4>
            <h5 className="text">Lorem Ipsum is </h5>
            <div className="upload-file">
                <h2>recents</h2>
            </div>
            <div className="recents-section">
                <div className='status-update'>
                    <div className='flex-status'>
                        <div className="time-day">
                            Deeds
                        </div>
                        <div className="status">
                            <i className="fa fa-check"></i> completed
                        </div>
                    </div>
                    <h3>"the cyberbullying consp..."</h3>
                    <div className="time-day">
                          10 mins
                        </div>

                </div>
                <div className='status-update'>
                    <div className='flex-status'>
                        <div className="time-day">
                            Deeds
                        </div>
                        <div className="status-progress">
                        <i className="fa fa-adjust"></i> In progress
                        </div>
                    </div>
                    <h3>"the data breach dilemma"</h3>
                    <div className="time-day">
                          10 mins
                        </div>

                </div>
                <div className='status-update'>
                    <div className='flex-status'>
                        <div className="time-day">
                            Deeds
                        </div>
                        <div className="fail">
                        <i className="fa fa-dot-circle-o"></i> Fail
                        </div>
                    </div>
                    <h3>"the green tech scandal"</h3>
                    <div className="time-day">
                          10 mins
                        </div>

                </div>
                <div className='status-update'>
                    <div className='flex-status'>
                        <div className="time-day">
                            Deeds
                        </div>
                        <div className="status">
                            <i className="fa fa-check"></i> completed
                        </div>
                    </div>
                    <h3>"the cyberbullying consp..."</h3>
                    <div className="time-day">
                          10 mins
                        </div>

                </div>
                
            </div>
        </div>
    )
}

export default GivenInfo;
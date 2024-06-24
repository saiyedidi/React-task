import React from "react";

import './index.css'

const Progress = ()=>{
    return(
        <div className="progress">
            {/* <p>test</p> */}
            <ul>
                <li><i className="fa fa-check"></i>start</li>
                <li><i className="fa fa-check"></i>continue</li>
                <li><i className="fa fa-check"></i>analysis</li>
                <li><i className="fa fa-check"></i>additional documents</li>
                <li><i className="fa fa-check"></i>suggestions</li>
                <li><i className="fa fa-check"></i>first draft</li>
                <li><i className="fa fa-check"></i>O & A</li>
                <li><i className="fa fa-check"></i>final draft</li>
            </ul>
            <div className='start-btn'>
                    <button>continue</button>
                </div>
        </div>
    )
}

export default Progress;
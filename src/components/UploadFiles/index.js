import React from "react";

import './index.css'

const UploadFiles = () => {
    return (
        <div>
            <h3 className="count">uploaded Files <span>3/5</span></h3>
            <div className="upload-cls">
                <p><i className="fa fa-file"></i>case document.pfd</p>
                <p><i className="fa fa-close"></i></p>
            </div>
            <div className="upload-cls">
                <p><i className="fa fa-file blue"></i>case document.pfd</p>
                <p><i className="fa fa-close"></i></p>
            </div>
            <div className="upload-cls">
                <p><i className="fa fa-file blue"></i>case document.pfd</p>
                <p><i className="fa fa-close"></i></p>
            </div>
            
            
        </div>
    )
}
export default UploadFiles
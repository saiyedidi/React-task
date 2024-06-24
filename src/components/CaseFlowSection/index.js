import React from "react";

import './index.css'
const CaseFlowSection = ()=>{
    return(
        <div className="case-flow-section">
            <h4>case flow</h4>
            <p className="cont">select the document for drafting</p>
            <div className="section">
                <div className="dot"></div>
                <p className="sub-heading">Pre litigation</p>
                <div className="section-progress">
                <div className="boder-dev">
                    <h4><i className="fa fa-home"></i>legal notice</h4>
                    <p>notifies the opposing party of the disputeand demands resolution</p>
                </div>
                <div className="boder-dev">
                    <h4><i className="fa fa-home"></i>reply to legal notice</h4>
                    <p>a response to a legal notice received from the oppposing party</p>
                </div>
                </div>

            </div>
            <div className="section">
            <div className="dot"></div>
                <p className="sub-heading">Litigation</p>
                <div className="section-progress">
                <div className="boder-dev">
                    <h4><i className="fa fa-home"></i>plaint/complaint</h4>
                    <p>initiates the lawsuit, detailing the palintiff's claims</p>
                </div>
                <div className="boder-dev">
                    <h4><i className="fa fa-home"></i>legal notice</h4>
                    <p>notifies the opposing party of the disputeand demands resolution</p>
                </div>
                <div className="boder-dev">
                    <h4><i className="fa fa-home"></i>written statement/answer</h4>
                    <p>the defendants formal response to the plaint</p>
                </div>
                <div className="boder-dev">
                    <h4><i className="fa fa-home"></i>reply to written statement</h4>
                    <p>Addresses points raised in the defendants written statement</p>
                </div>
                </div>

            </div>
            <div className="section">
            <div className="dot"></div>
                <p className="sub-heading">Interlocutary Applications</p>
              <div className="section-progress">
              <div className="boder-dev">
                    <h4><i className="fa fa-home"></i>application for temporary injuction</h4>
                    <p>seeks immediate court intervation to preserve status quo</p>
                </div>
                <div className="boder-dev">
                    <h4><i className="fa fa-home"></i>legal notice</h4>
                    <p>notifies the opposing party of the disputeand demands resolution</p>
                </div>
              </div>

            </div>
        </div>
    )
}

export default CaseFlowSection;
import React from "react";
import './CaseFlow.css'
import GivenInfo from '../GivenInfo/index'
import CaseFlowSection from '../CaseFlowSection/index'
import Progress from '../Processing/index'
const CaseFlow = ()=>{
    return(
      <div className="bg">
          <div className="caseflow-flex">
            <GivenInfo/>
            <CaseFlowSection/>
            <Progress/>
        </div>
      </div>
    )
}

export default CaseFlow;
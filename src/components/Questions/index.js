import React from "react";

import './index.css'
import GivenInformation from '../GivenInformation/index'
import QuestionsAndAnswers from '../QuestionAndAnswers/index'
const Questions = ()=>{
return(
   <div className="questions-bg">
     <div className="question-flex">
        <GivenInformation/>
        <QuestionsAndAnswers/>
    </div>
   </div>
)
}

export default Questions;
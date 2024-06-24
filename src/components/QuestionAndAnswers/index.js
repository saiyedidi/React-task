import React from "react";
import { Link } from 'react-router-dom';
import './index.css'

const QuestionsAndAnswers = () => {
    return (
        <div className="question-ans">
            <ul>
                <li>case desc</li>
                <li>acts & laws</li>
                <li>judegement</li>
                <li>templates</li>
                <li className="Question">question</li>
                <li>supports</li>
            </ul>
            <div className="question-section">
                <h3>Questions</h3>
                <button className="petitioner">by petitioner</button>
                <button>by respondant</button>
            </div>
            <div className="question-cnt">
                <div className="question-answer">
                    <h3 className="question">1.Was the dog on a leash or under the control of the owner at the time of the incident?</h3>
                    <h3 className="question">Reason:-</h3>
                    <p className="answer">This question aims to establish whether the owner was negligent is controlling the dog ,which is crucial for providing liability.</p>
                </div>
                <div className="question-answer">
                    <h3 className="question">2.Did the dog show any signs of aggression or previous violent behaviour before the incident</h3>
                    <h3 className="question">Reason:-</h3>
                    <p className="answer">This question is important to demonstrate the owner's knowledge of the dog's aggresive tendencies ,which can support the claim of negligence.</p>
                </div>
                <div className="question-answer">
                    <h3 className="question">3.Were there any warning signs or notices indicates the presence of a dangerous dog on the owner's property?</h3>
                    <h3 className="question">Reason:-</h3>
                    <p className="answer">This question seeks to determine if the owner took reasonable precautions to warn others about the potential danger posed by the dog</p>
                </div>
                <div className="question-answer">
                    <h3 className="question">4.Was the dog on a leash or under the control of the owner at the time of the incident?</h3>
                    <h3 className="question">Reason:-</h3>
                    <p className="answer">This question aims to establish whether the owner was negligent is controlling the dog ,which is crucial for providing liability.</p>
                </div>
                <div className="question-answer">
                    <h3 className="question">5.Did the dog show any signs of aggression or previous violent behaviour before the incident</h3>
                    <h3 className="question">Reason:-</h3>
                    <p className="answer">This question is important to demonstrate the owner's knowledge of the dog's aggresive tendencies ,which can support the claim of negligence.</p>
                </div>
                <div className='start-btn'>
                <Link to="/caseflow"><button> continue</button></Link>
                </div>
            </div>
        </div>
    )
}

export default QuestionsAndAnswers;
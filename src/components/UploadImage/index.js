import './index.css'
import { Link } from 'react-router-dom';
import UploadFiles from '../UploadFiles';
const UploadImage = () => {
    return (

        <div className="upload-image">
            <h3><i className='fa fa-address-book-o'></i>get complete info about any case from AI-driven research assistance</h3>
            <div className='input-text'>
            <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="EX: Land dispute,mumbai,recent judgements.">
            </textarea>
            <p className='text-length'>0/80</p>
            </div>
            <div className='drag-drop-upload'>
                <i className='fa fa-upload'></i>
                <p>drag and drop or click here to <a>upload a file</a></p>
                <h4>maximum uploads :1 </h4>
                <h4>file formate: jpg, png ect...</h4>
            </div>
            <UploadFiles/>
           <div className='start-btn'>
           <Link to="/questions"><button> start</button></Link>
           </div>
        </div>
    )
}
export default UploadImage
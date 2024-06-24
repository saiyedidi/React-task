import React from 'react'
import './Home.css';
import RecectStudies from '../RecentStudies'
import UploadImage from '../UploadImage'
import UploadFiles from '../UploadFiles';

const Home = ()=>{
    return(
      <div className="bg-class">
          <div className="home-flex-cls">
            <RecectStudies/>
            <UploadImage/>
        </div>

      </div>


    )
}
export default Home
import React from 'react'
import './nav.css';


const Navbar = ()=>{
    return(
        
        <div className="flex-cls">
            <div className="logo">
                <h2>ADVOCASE</h2>
            </div>
            <div className="nav">
                <ul>
                    <li><i className="fa fa-feed"></i>News Feed</li>
                    <li> <i className="fa fa-layer"></i>Find Lawyers</li>
                    <li><span><i className="fa fa-home"></i>Home</span></li>
                    <li><i className="fa fa-link"></i>Connections</li>
                    <li><i className="fa fa-comments-o"></i>Chats</li>
                </ul>
            </div>
            <div className="profile">
                <ul>
                    <li><i className="fa fa-gear"></i></li>
                    <li><i className="fa fa-bell"></i></li>
                    <li><img src="https://cdn.vectorstock.com/i/500p/17/61/male-avatar-profile-picture-vector-10211761.jpg"/></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
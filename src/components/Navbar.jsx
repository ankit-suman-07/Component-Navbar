import React from 'react';
import "../css/Navbar.css";

import Searchicon from "../assets/search.png";
import Notificationicon from "../assets/bell.png";
import Profileicon from "../assets/profile.jpg";

export const Navbar = () => {
  return (
    <div className='navbar' >
        <div className='navbar-logo' >
            Social
        </div>
        <div className='navbar-functions' >
            <div className='navbar-search' >
                <input  type='text' placeholder='Search' />
                <img src={Searchicon} />
            </div>
            <div className='navbar-notification' >
                <img  src={Notificationicon} />
            </div>
            <div className='navbar-user' >
                <img  src={Profileicon} />
            </div>
        </div>
    </div>
  )
}

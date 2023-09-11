import React, { useState, useEffect, useRef  } from 'react';
import "../css/Navbar.css";

import { SearchBox } from './navbar-components/SearchBox';
import { NotificationBox } from './navbar-components/NotificationBox';
import { ProfileBox } from './navbar-components/ProfileBox';

import Searchicon from "../assets/search.png";
import Notificationicon from "../assets/bell.png";
import Profileicon from "../assets/profile.jpg";

export const Navbar = () => {
    const [profileDisplay, setProfileDisplay] = useState(false);
    const [notificationDisplay, setNotificationDisplay] = useState(false);
    const [searchDisplay, setSearchDisplay] = useState(false);
    const [searchVal, setSearchVal] = useState("");

    const handleSearch = (e) => {
        const inputValue = e.target.value;
        setSearchVal(inputValue);
        
        if (inputValue === "") {
            setSearchDisplay(false);
        } else {
            setSearchDisplay(true);
        }
    }

  return (
    <>
    <div className='navbar' >
        <div className='navbar-logo' >
            Social
        </div>
        <div className='navbar-functions' >
            <div className='navbar-search' >
                <input  type='text' placeholder='Search' onChange={handleSearch} />
                <img src={Searchicon} />
            </div>
            <div className='navbar-notification' >
                <img  src={Notificationicon} onClick={() => {setNotificationDisplay(prev => !prev)}} />
            </div>
            <div className='navbar-user' >
                <img  src={Profileicon} onClick={() => {setProfileDisplay(prev => !prev)}} />
            </div>
        </div>
        
    </div>
        
        {
            profileDisplay && <ProfileBox />
        }
        {
            notificationDisplay && <NotificationBox />
        }
        {
            searchDisplay && <SearchBox  searchVal={searchVal} />
        }
    </>
  )
}

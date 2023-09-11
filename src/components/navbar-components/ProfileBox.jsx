import React from 'react';
import "../../css/ProfileBox.css";

export const ProfileBox = () => {
  return (
    <div className='profile-box' >
        <span className='profile-list' >Profile</span>
        <span className='profile-list' >Settings</span>
        <span className='profile-list' >Log Out</span>
    </div>
  )
}

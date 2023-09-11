import React from 'react';
import "../../css/SearchBox.css";

import ProfileImage from "../../assets/profile.jpg";

const users = ["Amy", "Jackson", "Samuel", "Bryan", "Ashton", "Yin", "Zachery", "Lily", "John", "Fin", "Sarah", "Liam"];

export const SearchBox = ({searchVal}) => {
  return (
    <div className='search-box' >
        {
            users.map((user) => {
                const target = user.substring(0, searchVal.length);
                if(target.toLowerCase() === searchVal.toLowerCase()) {
                    return(
                        <div className='search-row' >
                            <div className='search-photo' >
                                <img  src={ProfileImage} />
                            </div>
                            <div className='search-name' >
                                {user}
                            </div>
                        </div>
                    );
                }
            })
        }
    </div>
  )
}

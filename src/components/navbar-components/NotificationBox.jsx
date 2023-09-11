import React from 'react';
import "../../css/NotificationBox.css";

const notifications = ["Notification 1", "Notification 2", "Notification 3", "Notification 4", "Notification 5", "Notification 6"];

export const NotificationBox = () => {
  return (
    <div className='notification-box' >
      {
        notifications.map((notification) => {
          return(
            <div className='notification-row' >
              <div className='notification-dot' ></div>
              <div className='notification-text' >
                {notification}
              </div>
            </div>
          );
        })
      }
      
    </div>
  )
}

import React from 'react';
import logo from "../../img/Banner1.png";
import './notification.scss';


const NotificationWrapper = () => {
  return (
    <div className="notification-wrapper">
      <div>
       <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default NotificationWrapper;
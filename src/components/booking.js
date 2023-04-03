import React from "react";
import { Link } from "react-router-dom";

export default function booking() {
    return (
        <div className="container">
          <div className="mainBlock">
            <div>
            <Link to="/booking"><img className="bookingMark" alt="booking" src={require('./media/booking1.jpg')} /></Link>
            <Link to="/bookCheck"><img className="bookingMark" alt="bookCheck" src={require('./media/booking2.jpg')} /></Link>
            </div>
          </div>
        </div> 
    )   
}
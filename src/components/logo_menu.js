import React from "react";
import { Link } from "react-router-dom";

export default function logo_menu() {
    return (
        <div className="container">
          <div className="mainBlock">
            <div className="title_logo"><Link to="/">
              <img className="logo" alt="logo" src={require('./media/logo.jpg')} /></Link>
              <br></br>
              <div><span className="title">마블 영화 전용관<br></br>ㅇㅇ극장</span></div>
              </div>
            <div className="menu">
              <Link to="/">홈&nbsp;</Link><Link to="/introduction">극장소개&nbsp;</Link><Link to="/schedule">상영시간표&nbsp;</Link><Link to="/soon">개봉예정작</Link>
            </div>
          </div>
        </div> 
    )   
}
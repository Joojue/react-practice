import React from "react";

export default function logo_menu() {
    return (
        <div className="container">
          <div className="mainBlock">
            <a href="/" onClick={event=>{
              event.preventDefault();
            }}><div className="title_logo">
              <img className="logo" alt="logo" src={require('./media/logo.jpg')} />
              <br></br>
              <span className="title">마블 영화 전용관<br></br>ㅇㅇ극장</span>
            </div></a>
            <div className="menu">
              <a>홈&nbsp;</a><a>극장소개&nbsp;</a><a>상영시간표&nbsp;</a><a>개봉예정작</a>
            </div>
          </div>
        </div> 
    )   
}
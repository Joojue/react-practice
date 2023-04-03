import React from "react";
import Logo from "../components/logo_menu"
import Info from "../components/info"

export default function Schedule() {


    return ( 
        <div className="container">
            <div className="mainBlock">
                <Logo />
                <span className="menu_title">상영시간표</span>
                <hr/><br/><br/><br/>
            <Info />
        </div>
    </div>
    );
};
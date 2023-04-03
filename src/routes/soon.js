import React from "react";
import Logo from "../components/logo_menu"
import Info from "../components/info"

export default function Soon() {
    return ( 
        <div className="container">
            <div className="mainBlock">
                <Logo />
                <span className="menu_title">개봉예정작</span>
                <hr/><br/><br/><br/>
            
            <Info />
        </div>
    </div>
    );
};
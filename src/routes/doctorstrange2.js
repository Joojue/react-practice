import React from "react";
import Logo from "../components/logo_menu"
import Info from "../components/info"
import Booking from "../components/booking";


export default function Thor4() {
    return (
        <div className="container">
        <div className="mainBlock">
            <Logo />
            <span className="menu_title">닥터스트레인지2: 대혼돈의 멀티버스</span>
            <hr/><br/><br/><br/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/awyG1-xvqFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/><br/>
            <div>
            지금껏 본 적 없는 마블의 극한 상상력!<br/><br/>
            5월, 광기의 멀티버스가 깨어난다!<br/><br/>
            끝없이 균열되는 차원과 뒤엉킨 시공간의 멀티버스가 열리며<br/><br/>
            오랜 동료들, 그리고 차원을 넘어 들어온 새로운 존재들을 맞닥뜨리게 된 ‘닥터 스트레인지’.<br/><br/>
            대혼돈 속, 그는 예상치 못한 극한의 적과 맞서 싸워야만 하는데….<br/><br/>
            </div>
            <Booking />
            <Info />
        </div>
    </div>
    );
};
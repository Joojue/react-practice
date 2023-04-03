import React from "react";
import Logo from "../components/logo_menu"
import Info from "../components/info"
import Booking from "../components/booking";


export default function Thor4() {
    return (
        <div className="container">
        <div className="mainBlock">
            <Logo />
            <span className="menu_title">스파이더맨3: 노웨이 홈</span>
            <hr/><br/><br/><br/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/W7edvITC9g4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/><br/>
            <div>
            ‘미스테리오’의 계략으로 세상에 정체가 탄로난 스파이더맨 ‘피터 파커’는<br/><br/>
            하루 아침에 평범한 일상을 잃게 된다.<br/><br/>
            문제를 해결하기 위해 ‘닥터 스트레인지’를 찾아가 도움을 청하지만<br/><br/>
            뜻하지 않게 멀티버스가 열리면서 각기 다른 차원의 불청객들이 나타난다.<br/><br/>
            ‘닥터 옥토퍼스’를 비롯해 스파이더맨에게 깊은 원한을 가진<br/><br/>
            숙적들의 강력한 공격에 ‘피터 파커’는 사상 최악의 위기를 맞게 되는데…<br/><br/>
            </div>
            <Booking />
            <Info />
        </div>
    </div>
    );
};
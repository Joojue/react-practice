import React from "react";
import Logo from "../components/logo_menu"
import Info from "../components/info"
import Booking from "../components/booking";


export default function Thor4() {
    return (
        <div className="container">
        <div className="mainBlock">
            <Logo />
            <span className="menu_title">토르4: 러브앤썬더</span>
            <hr/><br/><br/><br/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Dlfp3K11C_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/><br/>
            <div>
            슈퍼 히어로 시절이여, 안녕!<br/><br/>
            이너피스를 위해 자아 찾기 여정을 떠난 천둥의 신 ‘토르’<br/><br/>
            그러나, 우주의 모든 신들을 몰살하려는 신 도살자 ‘고르’의 등장으로 ‘토르’의 안식년 계획은 산산조각 나버린다.<br/><br/>
            ‘토르’는 새로운 위협에 맞서기 위해, ‘킹 발키리’, ‘코르그’, 그리고 전 여자친구 ‘제인’과 재회하게 되는데,<br/><br/>
            그녀가 묠니르를 휘두르는 ‘마이티 토르’가 되어 나타나 모두를 놀라게 한다.<br/><br/>
            이제, 팀 토르는 ‘고르’의 복수에 얽힌 미스터리를 밝히고 더 큰 전쟁을 막기 위한 전 우주적 스케일의 모험을 시작하는데...<br/><br/>
            우주 최고의 ‘갓’ 매치가 시작된다!
            </div>
            <Booking />
            <Info />
        </div>
    </div>
    );
};
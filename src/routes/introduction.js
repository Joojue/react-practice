import React from "react";
import "../Main.css";
import Logo from "../components/logo_menu"
import Info from "../components/info"

export default function Introduce() {

    return ( 
        <div className="container">
            <div className="mainBlock">
                <Logo />
                <span className="menu_title">극장소개</span>
                <hr></hr>
                <table className="intro_table" border="0">
                    <tr><th colspan="4"><span className="merit_font">ㅇㅇ극장만의 장점 8가지!</span></th></tr>
                    <tr><th width="25%"><img className="merit" src={require("../media/snack.jpg")} alt="snack" /><br></br><br></br>
                    무제한 무료 스낵!</th><th width="25%"><img className="merit" src={require("../media/thermometer.jpg")} alt="thermometer" /><br></br><br></br>
                    매우 적절한 온도!</th><th><img className="merit" src={require("../media/twenty.jpg")} alt="twenty" /><br></br><br></br>
                    한 관에 20명 이하!</th><th width="25%"><img className="merit" src={require("../media/toilet.jpg")} alt="toilet" /><br /><br />쾌적한 화장실!</th></tr>
                    <tr><th><img className="merit" src={require("../media/nokids.jpg")} alt="nokids" /><br /><br />
                    노키즈존!</th><th><img className="merit" src={require("../media/recliner.jpg")} alt="recliner" /><br /><br />
                    전 좌석 리클라이너석!</th><th><img className="merit" src={require("../media/ticket.jpg")} alt="ticket" /><br /><br />
                    포토티켓 무료 제공!</th><th width="25%"><img className="merit" src={require("../media/discount.jpg")} alt="discount" /><br /><br />
                    단체, 생일 등 여러 할인 제공!</th></tr>
                </table>
                <hr />
                <br /><br /><br />
                <span class="menu_title">ㅇㅇ극장</span>
                <br /><br />
                <p>
                    저희 ㅇㅇ극장은 2022년 설립되어 국내 마블 팬들을 위한 영화를 제공하고 있습니다.<br/><br/>
                    히어로물은 더이상 어린이들만의 전유물이 아닙니다!<br/><br/>
                    히어로물을 좋아하고 사랑하는 어른들 위한 극장! ㅇㅇ극장!<br/><br/><br/><br/><br/>
                    1. 무제한 스낵<br/><br/>
                    영화관의 주목적은 영화입니다. 부수적인 것에 신경쓰지 마세요. 저희가 제공합니다!<br/><br/><br/><br/>
                    2. 철저한 온도 관리<br/><br/>
                    영화를 볼 때 춥거나 더운 감정이 드는 것은 사치입니다.<br/><br/><br/><br/>
                    3. 한 관에 20명 이하<br/><br/>
                    인원수 제한으로 쾌적한 환경을 조성합니다.<br/><br/><br/><br/>
                    4. 쾌적한 화장실<br/><br/>
                    영화를 본 후에 화장실은 필수로 가야합니다. 깨끗한 화장실 역시 필수입니다.<br/><br/><br/><br/>
                    5. 노키즈존<br/><br/>
                    이하 생략<br/><br/><br/><br/>
                    6. 전 좌석 리클라이너석<br/><br/>
                    편안한 영화 감상 환경을 제공해드립니다.<br/><br/><br/><br/>
                    7. 포토티켓 무료 제공<br/><br/>
                    저희 ㅇㅇ극장 방문을 평생의 추억으로 선물드립니다.<br/><br/><br/><br/>
                    8. 단체, 생일 등 여러 할인 제공<br/><br/>
                    더욱 저렴한 가격으로 ㅇㅇ극장을 방문해주세요!<br/><br/><br/>
                </p>
                <Info />
            </div>
        </div>
    );
};

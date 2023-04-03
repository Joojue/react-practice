import React from "react";

export default function info() {

  const Subscribe = (em,nm,tel) => {
  if (nm.value===" ") {
    nm.focus();
    alert("성명을 입력하여 주십시오.")
    return false;
  }
  if (em.value===" ") {
    em.focus();
    alert("이메일을 입력하여 주십시오.")
    return false;
  }
  if (tel.value===" ") {
    tel.focus();
    alert("전화번호를 입력하여 주십시오.")
    return false;
  }
  else {
    alert("구독완료!")
    return true;
  }
    
}

    return (
        <div className="container">
          <div className="mainBlock">
          <table className="sub_table" border="0">
            <tbody>
                  <tr><th className="info"><span className="info_title">INFO</span></th>
                  <th className="info"><span className="info_title">MAILING</span></th></tr>
                  <tr><th className="info">
                    사업자등록번호 000-00-000<br></br>
                    대표 김지우<br></br>
                    경기도 용인시 처인구 모현면 백옥대로 2384번길 21-13<br></br>
                    금빛원룸 202호<br></br>
                    T.010-3959-9794<br></br><br></br>
                    <iframe title="map" src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.1377422292035!2d127.26035961530522!3d37.33924757984113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b557cb236a449%3A0xae050b2ce766e1e9!2z7ZWc6rWt7Jm46rWt7Ja064yA7ZWZ6rWQIOq4gOuhnOuyjOy6oO2NvOyKpA!5e0!3m2!1sko!2skr!4v1652103112203!5m2!1sko!2skr"} width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                    </th><th className="info">
                      <form>
                        ㅇㅇ극장 정보 정기구독 신청<br></br><br></br><br></br>
                        이름<br></br>
                        <input id="nm" type="text" size="35" /><br></br><br></br><br></br>
                        이메일<br></br>
                        <input id="em" type="email" size="35" /><br></br><br></br><br></br>
                        전화번호<br></br>
                        <input id="tel" type="tel" size="35" /><br></br><br></br><br></br>
                        <button className="button" type="button" onClick={() => Subscribe()}>구독하기</button></form><br></br><br></br><br></br><br></br>
                    </th>
                    </tr>
                    </tbody>
              </table>
          </div>
        </div> 
    )   
}
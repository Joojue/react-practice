import React from "react";
import "./Main.css";
import Logo from "./components/logo_menu";
import Booking from "./components/booking";
import Info from "./components/info";
import { Link } from "react-router-dom";

function Movie (props) {
  const lis=[]

  for(let i=0; i<props.movies.length; i++){
    let t = props.movies[i];
    lis.push(<Link to={t.url}><tr><th className={t.class} colSpan="2"><span className="movie_title"><br></br>
    {t.title}<br></br>{t.sub_title}</span><br></br><br></br><span className="movie_p">{t.show}</span></th></tr></Link>)
  }
  
  return <movie>
    {lis}
  </movie>
}

export default function Main() {
    const movies = [
      {
        id: 1,
        title: "토르:",
        sub_title: "러브앤썬더",
        show: "NOW SHOWING",
        class: "thor4",
        url: "thor4",
        time: 149
      },

      {
        id: 2,
        title: "닥터 스트레인지2:",
        sub_title: "대혼돈의 멀티버스",
        show: "NOW SHOWING",
        class: "doctorstrange2",
        url: "doctorstrange2",
        time: 156
      },
      
      {
        id: 3,
        title: "스파이더맨3:",
        sub_title: "노웨이 홈",
        show: "NOW SHOWING",
        class: "spiderman3",
        url: "spiderman3",
        time: 178
      },

      {
        id: 4,
        title: "아이언맨3",
        sub_title: "",
        show: "CLOSED",
        class: "ironman3",
        url: "",
        time: 0
      }
    ]

    return(
        <div className="container">
          <div className="mainBlock">
            <Logo />
            <div>
              <a href={"https://ko-kr.facebook.com/Marvel/"}> <img className="sns" alt="facebook" src={require('./media/facebook.jpg')} /></a>
              <a href={"https://www.instagram.com/marvelstudios/"}> <img className="sns" alt="instagram" src={require('./media/instagram.jpg')} /></a>
              <a href={"https://www.youtube.com/MarvelKorea"}> <img className="sns" alt="youtube" src={require('./media/youtube.jpg')} /></a>
            </div>
            <Booking />
              <table className="main_table" border="0">
                <tbody>
                <Movie movies={movies}></Movie>
                </tbody>
              </table>
              <br></br><br></br><br></br>
              <Info />
          </div>
        </div>
    )
}

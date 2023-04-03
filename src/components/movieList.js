import React from "react";
import "./Main.css";

function Movie1 (props) {
    const lis=[]
  
    for(let i=0; i<props.movies1.length; i++){
      let t = props.movies1[i];
      lis.push(<a><tr><th className={t.class} colSpan="2"><span className="movie_title"><br></br>
      {t.title}<br></br>{t.sub_title}</span><br></br><br></br><span className="movie_p">{t.show}</span></th></tr></a>)
  
    }
    return <movie1>
      {lis}
    </movie1>
  }
  
  function Movie2 (props) {
    const lis=[]
  
    for(let i=0; i<props.movies2.length; i++){
      let t = props.movies2[i];
      lis.push(<a><div><tr><th className={t.class}><span className="movie_title"><br></br>
          {t.title}<br></br>{t.sub_title}</span><br></br><br></br><span className="movie_p">{t.show}</span></th>
          <th className={t.class2}><span className="movie_title"><br></br>{t.title2}</span><br></br><br></br>
          <span className="movie_p">{t.show2}</span></th></tr>
      </div></a>)
  
    }
    return <movie2>
      {lis}
    </movie2>
  }
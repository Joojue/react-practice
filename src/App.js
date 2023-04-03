import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./routes/introduction";
import Schedule from "./routes/schedule";
import Soon from "./routes/soon";
import Main from "./Main";
import Booking from "./routes/booking";
import BookCheck from "./routes/bookCheck";
import DoctorStrange2 from "./routes/doctorstrange2";
import Thor4 from "./routes/thor4";
import Spiderman3 from "./routes/spiderman3";
import Ironman3 from "./routes/ironman3";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  
  return(
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/introduction" element={<Introduction />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/soon" element={<Soon />}></Route>
        <Route path="/booking" element={< Booking />}></Route>
        <Route path="/bookCheck" element={< BookCheck />}></Route>
        <Route path="/thor4" element={< Thor4 />}></Route>
        <Route path="/doctorstrange2" element={< DoctorStrange2 />}></Route>
        <Route path="/spiderman3" element={< Spiderman3 />}></Route>
        <Route path="/ironman3" element={< Ironman3 />}></Route>
      </Routes>
      </BrowserRouter>
    </div>

    )
}
import React from "react";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import "./style.css";

function App() {
  return (
    <div className="wrapper">
      <div className="d-flex align-items-stretch">
        <Sidebar />
        <div className="w-100">
          <div className="content-container">
            <div className="content-page">
            content Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Ad, dolor cum nam quidem corrupti atque error repellat aspernatur
              possimus harum quo consectetur nemo ut sed assumenda praesentium
              id et alias qui hic nulla! Numquam doloremque beatae voluptas
              possimus eligendi molestias eum a enim velit placeat, repudiandae
              repellat quo tempora vitae maxime iusto rem minima maiores iure
              corporis fugit totam. Sapiente sequi ipsa placeat temporibus optio
              esse quam quasi amet delectus dolorem. Nemo labore ab fuga tempore
              exercitationem pariatur sed ad, doloribus error possimus obcaecati
            
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

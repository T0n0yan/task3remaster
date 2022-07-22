import React from "react";
import FirstPage from "../../Components/FirstPage/index";
import SecondPage from "../../Components/SecondPage";
import Footer from "../../Components/Footer";
import "./styel.scss";

const Stories = () => {
  return (
    <div className="G_Container ">
      <div className="mainTitle">
        <span className="firstTitle">Mediumish</span>
        <span className="secondTitle">
          Bootstrap theme, medium style, simply perfect for bloggers
        </span>
      </div>

      <div className="G_Container">
        <div className="posTtitle">
          <div className="spanContent">
            <span>Featured</span>
          </div>
        </div>
      </div>

      <FirstPage className="G_Container G-flexImg " />


      <div className="G_Container">
        <div className="posTtitle">
          <div className="spanContent">
            <span>All Stories</span>
          </div>
        </div>
      </div>

      <SecondPage className="G_Container G-flexImg " />
      <Footer />
    </div>
  );
};

export default Stories;

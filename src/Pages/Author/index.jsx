import React from "react";
import Footer from "../../Components/Footer";
import "./style.scss";
import AuthorFirstPage from "./../../Components/Author/FirstPage/index";
import SecondPageContainer from './../../Components/Author/SecondPage/index';
import { secondPageData } from "../../Components/Author/SecondPage/secondPageData";

const Author = () => {
  return (
    <div className="authorGLobal">
      <div className="avatarPage">
        <div className="avatarContainer">
          <div className=" leftSideAvatar">
            <h2>Sal</h2>
            <span>
              Founder of
              <a href="https://www.wowthemes.net/" target={"_blank"}>
                WowThemes.net
              </a>
              and creator of <span className="innertext">"Mediumish"</span>
              theme that you're currently previewing. I professionally develop
              premium themes, templates & scripts since the Apocalypse (2012).
              You can reach me out on the social links below.
            </span>
            <div className="avatarProfiles">
            <div className="icon-facebook"></div>
            </div>
            <button> Follow </button>
          </div>
          <div className="mainImg" />
        </div>
      </div>

      <AuthorFirstPage />

      <div className="G_Container">
        <div className="secondPageTitle">
          <h2>National Park Tweets</h2>
          <span className="span1">
            Curated Tweets by{" "}
            <a href="https://twitter.com/" target="_blank">
              @TwitterDev
            </a>
          </span>
          <span className="span2">
            A collection of Tweets about National Parks in the United States.
          </span>
        </div>
      </div>

    <div>
    {secondPageData.map((el,id) => {
      return <SecondPageContainer posts={el} />
    })}
    </div>
      

      <Footer />
    </div>
  );
};

export default Author;

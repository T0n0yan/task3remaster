import React from "react";
import { authorFirs } from "./author";
import "./style.scss";
import { useState } from "react";

const AuthorFirstPage = () => {
  const [autorFirstData, setAutorFirstData] = useState(authorFirs);
  return (
    <div className="firstPageContainer G_Container">
      {autorFirstData.map((el, id) => {
        return (
          <div className="cont" key={id}>
            <div
              className="contIMG"
              style={{ backgroundImage: `url('${el.img}')` }}
            ></div>
            <div className="contName">
              <h2>{el.h2}</h2>
              <span>{el.span}</span>
            </div>
            <div className="footerCont">
              <div className="avatarAndDesc">
                <div
                  className="G-backgroundPosition avatarIcon"
                  style={{ backgroundImage: `url('${el.avatar}')` }}
                ></div>

                <div className="profileInfo">
                  <span>{el.name}</span>
                  <br />
                  <span>{el.status}</span>
                </div>
              </div>

              <div
                className="G-backgroundPosition saveIcon"
                style={{ backgroundImage: `url('${el.bookmark}')` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AuthorFirstPage;

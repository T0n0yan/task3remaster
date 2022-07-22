import React, { useState } from "react";
import data from "./data";
import "./style.scss";

const FirstPage = () => {
  const [list, setList] = useState(data);

  return (
    <div className="G_Container ">
      <div className="firstPage G-flexImg">
        {list
          .filter((el) => el.id <= 4)
          .map((el) => {
            return (
              <div className="container" key={el.id}>
                <div className="leftSide">
                  <img className="generalImg" src={el.img} alt="img" />
                </div>
                <div className="rightSide">
                  <span className="title">{el.title}</span>
                  <span className="desc">{el.desc}</span>
                  <div className="footer">
                    <img src={el.avatar} alt="Steve" className="avatar" />
                    <div className="personInfo">
                      <span className="personName">{el.name}</span>
                      <span className="personStatus">{el.status}</span>
                    </div>
                    <img src={el.bookmark} alt="BookMark" className="save" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FirstPage;

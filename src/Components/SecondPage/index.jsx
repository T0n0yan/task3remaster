import React, { useState } from "react";
import data from "../FirstPage/data";
import "./style.scss";

const SecondPage = () => {
  const [list, setList] = useState(data);

  return (
    <div className="G_Container secondPage">
      {list
        .filter((el) => el.id >= 5 && el.id <= 10)
        .map((el) => {
          return (
            <div className="containerSecond" key={el.id}>
              <div className="top">
                <img className="generalImg" src={el.img} alt="img" />
              </div>
              <div className="button">
                <div className="descriptionItems">
                  <span className="title">{el.title}</span> <br />
                  <span className="desc">{el.desc}</span>
                </div>
                <div className="footer">
                  <div className="personInfo">
                    <img className="avatar" src={el.avatar} alt="Steve" />
                    <div className="author">
                      <span className="personName">{el.name}</span>
                      <span className="personStatus">{el.status}</span>
                    </div>
                    <img className="save" src={el.bookmark} alt="BookMark" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SecondPage;

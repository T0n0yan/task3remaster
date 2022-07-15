import React from "react";
import "./style.scss";
import Images from "../assets/Images";

const Nav = () => {
  return (
    <div className=" navContainer">
      <div className="G_Container">
        <img src={Images.logo} alt="logo" className="logo" />
        <div className="nav">
          <div className="links">
            <a href="#">Stories</a>
            <a href="#">Post</a>
            <a href="#">Author</a>
          </div>
          <div className="input">
            <input type="text" placeholder="Search" className="navInput" />
            <img src={Images.search} alt='search' className='inpImg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

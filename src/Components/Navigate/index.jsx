import React from "react";
import "./style.scss";
import Images from "../assets/Images";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Container">
    <div className="navContainer">
    <div className="logo">
        <img src={Images.logo} alt="logo" className="logo" />
      </div>

      <div className="link-input">
        <div className="links">
          <Link to="/stories">Stories</Link>
          <Link to="/posts">Post</Link>
          <Link to="/author">Author</Link>
        </div>

        <div className="input">
          <input type="text" placeholder="Search" className="navInput" />
          <div  className='inpImg'/>
          {/* <img src={Images.search} alt="search" className="inpImg" /> */}
        </div>
      </div>

    </div>
     
    </div>
  );
};

export default Nav;

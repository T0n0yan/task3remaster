import React from "react";
import "./style.scss";
import { TwitterImages } from "../../assets/Images/ThierdPageImages";
import { secondPageData } from "./secondPageData";

const SecondPageContainer = (props) => {
  const posts = props.posts;
  return (
    <div className="G_Container">
      <div className="secondPageContainer">
        <div className="headerPart">
          <div
            className="headerLogo"
            style={{ backgroundImage: `url("${TwitterImages.logo}")` }}
          />
          <div className="a">
            <div className="headerContainer">
              <div className="titleAndDescription">
                <div className="titlePosition">
                  <a
                    href="https://twitter.com/Interior?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Ecollection%3A539487832448843776%7Ctwgr%5EeyJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9mZiIsInZlcnNpb24iOm51bGx9LCJ0ZndfcmVmc3JjX3Nlc3Npb24iOnsiYnVja2V0Ijoib2ZmIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJpbnRlcnN0aXRpYWwiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2V4cGVyaW1lbnRzX2Nvb2tpZV9leHBpcmF0aW9uIjp7ImJ1Y2tldCI6MTIwOTYwMCwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvZmYiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3VzZXJfZm9sbG93X2ludGVudF8xNDQwNiI6eyJidWNrZXQiOiJmb2xsb3ciLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3R3ZWV0X2VkaXRfZnJvbnRlbmQiOnsiYnVja2V0Ijoib2ZmIiwidmVyc2lvbiI6bnVsbH19&ref_url=http%3A%2F%2F127.0.0.1%3A5500%2Fmediumish-html%2Fauthor.html"
                    target="_blank"
                  >
                    <h3>US Department of the Interior</h3>
                  </a>

                  <div
                    className="titleLogo"
                    style={{
                      backgroundImage: `url("${TwitterImages.logoArrow}")`,
                    }}
                  />
                </div>

                <div className="bird">
                  <div
                    className="icon-twitter"
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>
              </div>
              <span
                style={{
                  fontSize: " 14px",
                  lineHeight: " 18px",
                  color: "#657786",
                }}
              >
                @Interior
              </span>
            </div>

            <div className="containerTitle">
              <span>{posts.title}</span>
            </div>
          </div>
        </div>

        <div
          className="generalImgCont"
          style={{ backgroundImage: `url('${posts.img}')` }}
        ></div>
        <div />
        <div className="ImgBottomDesc">
          <span>{}</span>
        </div>
        <div className="footerType">
          <div className="footerIcons">
            <div className="bottomLogos" style={{backgroundImage:`url('${TwitterImages.love}')`}} />  
            <div className="bottomLogos" style={{backgroundImage:`url('${TwitterImages.exit}')`}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPageContainer;

import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            earum beatae distinctio sequi quisquam nobis deserunt inventore
            similique dolor id eos sint facilis, amet ducimus tempore. Accusamus
            exercitationem facere labore. Lorem, ipsum dolor sit amet
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At blanditiis velit debitis sapiente eaque. Eaiure minima quibusdam molestiae unde pariatur? Possimus fuga ad hic quae dolor id, provident odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Joycestore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

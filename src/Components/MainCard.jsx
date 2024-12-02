import React, { useState } from 'react';
import profile from '../assets/profile.jpg';
import './maincard.css';

const MainCard = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive); // Toggle the "active" state
  };

  return (
    <div className="main">
      <div className="container">
        <div className="wrapper">
          <img
            src={profile}
            alt="Clickable Profile"
            className={isActive ? "active" : ""}
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          />

          <div className="title">Soban Khan</div>
          <div className="place">Freelancer</div>

          <div className="content">
            <p>Video Editor and <br /> Front-end developer</p>
            <div className="buttons" role="group">
              <div className="btn">
                <a href="https://www.youtube.com/channel/UCdZsiyVhcb_S2xyESHm3gBw">
                  <button>Youtube</button>
                </a>
              </div>
              <div className="btn">
                <a href="https://soban-khan-portfolio.vercel.app/">
                  <button>Main Website</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="icons">
          <li>
            <a href="https://www.instagram.com/mohammad.soban10?igsh=ZWVvYnI4a3F2ZHdi&utm_source=qr">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/share/124B6kiYGDG/?mibextid=LQQJ4d ">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/soban-khan-6b571b242/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default MainCard;

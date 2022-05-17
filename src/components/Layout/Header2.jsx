import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaTelegram,
  FaDiscord
  
} from "react-icons/fa";

const headerData = {
  name: "CartelDAO",
  designation: "",
  imageThumb: "/images/cartel.png",
  social: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    telegram: "https://t.me/carteldao",
    discord: "https://discord.gg/"
   
  },
};

function Header({ toggleHeader, toggleHandler }) {
  return (
    <>
      <div
        className={
          toggleHeader
            ? "mobile-header py-2 px-3 mt-4 push"
            : "mobile-header py-2 px-3 mt-4"
        }
      >
        <button className="menu-icon mr-2" onClick={toggleHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/multipage" className="logo">
          <img src={headerData.imageThumb} alt={headerData.name} />
        </Link>
        <Link to="/" className="site-title dot ml-2">
          {headerData.name}
        </Link>
      </div>

      <header
        className={
          toggleHeader
            ? "left float-left shadow-dark open"
            : "left float-left shadow-dark"
        }
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={toggleHandler}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="header-inner d-flex align-items-center flex-column">
          <Link to="/multipage">
            <img src={headerData.imageThumb} alt={headerData.name} />
          </Link>
          <Link to="/multipage" className="site-title dot mt-3">
            {headerData.name}
          </Link>

          <span className="site-slogan">{headerData.designation}</span>

          <nav>
            <ul className="vertical-menu scrollspy">
              <li>
                <Link to="/multipage">
                  <i className="icon-home"></i>Dashboard
                </Link>
              </li>
              <li>
                <Link href="https://www.pancakeswap.finance">
                  <i className="icon-user"></i>Swap
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <i className="icon-bulb"></i>Account
                </Link>
              </li>
              <li>
                <Link to="/resume">
                  <i className="icon-graduation"></i>Calculator
                </Link>
              </li>
             </ul>
          </nav>

          <div className="footer mt-auto">
            <ul className="social-icons list-inline">
              {!headerData.social.discord ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.discord}>
                    <FaDiscord />
                  </a>
                </li>
              )}
              {!headerData.social.twitter ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.twitter}>
                    <FaTwitter />
                  </a>
                </li>
              )}
              {!headerData.social.telegram ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.telegram}>
                    <FaTelegram />
                  </a>
                </li>
              )}
             
            </ul>

          
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

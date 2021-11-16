import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header__normal">
      <div className="header__normal__wrapper">
        <nav className="header__normal__navbar">
          <div className="header__normal__navbar-logo__box">
            <div className="header__normal__logo hide-on-mobile">
             
              <Link
                to='/'
                className='header__normal__logo-link'
              
              >
                <img src="../images/logo.png" alt="" className="logo" />
              </Link>
            </div>
           
          </div>

          <div className="header__normal__select hide-on-mobile-tablet">
            <ul className="header__normal__list">
              <li className="header__normal__item">
                <a href="#" className="header__normal__item-link">
                  Guide
                </a>
              </li>
              <li className="header__normal__item">
               
                <Link to="/tour" className="header__normal__item-link header__normal__item-link--notify">Tour</Link>
              </li>
              <li className="header__normal__item">
                <Link to="/sign-up" className="header__normal__item-link">
                  Đăng ký
                </Link>
              </li>
              <li className="header__normal__item">
                <Link to="/login" className="header__normal__item-link">
                  Đăng nhập
                </Link>
                {/* <a href="#" className="header__normal__item-link">
                  Đăng nhập
                </a> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;

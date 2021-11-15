import React from "react";
import { Link } from "react-router-dom";
import "./head.css";

function Head() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <nav className="header__navbar">
          <div className="header__navbar-logo__box">
            <div className="header__logo hide-on-mobile">
             
              <Link
                to='/'
                className='header__logo-link'
              
              >
                <img src="./images/logo.png" alt="" className="logo" />
              </Link>
            </div>
            <div className="header__search-box">
              <div className="header__input">
                <i className="fa fa-search"></i>

                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  className="header__input-search"
                />
              </div>

              <button className="btn header__search-box-btn">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>

          <div className="header__select hide-on-mobile-tablet">
            <ul className="header__list">
              <li className="header__item">
                <a href="#" className="header__item-link">
                  Guide
                </a>
              </li>
              <li className="header__item">
               
                <Link to="/tour" className="header__item-link header__item-link--notify">Tour</Link>
              </li>
              <li className="header__item">
                <Link to="/sign-up" className="header__item-link">
                  Đăng ký
                </Link>
              </li>
              <li className="header__item">
                <Link to="/login" className="header__item-link">
                  Đăng nhập
                </Link>
                {/* <a href="#" className="header__item-link">
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

export default Head;

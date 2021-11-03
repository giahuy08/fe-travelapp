import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

 
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
      <>
         <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img
            src='images/logo.png'
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />
          <span className="navbar-logo__text">Travel</span>
          </Link>
         
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
           
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Trang chủ
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/tour'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tour
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Đăng nhập
              </Link>
            </li>

            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {button && <Button buttonStyle='btn--primary-outline' >Đăng ký</Button>}
        </div>
      </nav>
      </>
  );
}

export default Header;

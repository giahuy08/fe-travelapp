import React, {useEffect, useState } from "react";
import { Link,useHistory } from "react-router-dom";
import "./Header.css";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import FlightIcon from "@mui/icons-material/Flight";
function Header() {
  const [user, setUser] = useState("");
  const history = useHistory()
  let defaultUrl = "http://localhost:5000/user/findUserByToken";
  useEffect(() => {
    (async () => {
      const response = await fetch(defaultUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });

      const content = await response.json();
      console.log(content.data.name);
      setUser(content.data.name);
    })();
  }, []);

  const logout = () => {
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("avatar");
    history.push("/login")
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl1, setAnchorEl1] = React.useState(null);
 
  if (!user) {
    return (
      <div className="header__normal">
        <div className="header__normal__wrapper">
          <nav className="header__normal__navbar">
            <div className="header__normal__navbar-logo__box">
              <div className="header__normal__logo hide-on-mobile">
                <Link to="/" className="header__normal__logo-link">
                  <img src="../images/logo.png" alt="" className="logo" />
                </Link>
              </div>
            </div>

            <div className="header__normal__select hide-on-mobile-tablet">
              <ul className="header__normal__list">
                <li className="header__normal__item">
                  <Link to="/" className="header__normal__item-link">
                    Trang chủ
                  </Link> 
                </li>
                <li className="header__normal__item">
                  <Link
                    to="/alltour"
                    className="header__normal__item-link header__normal__item-link--notify"
                  >
                    Tour
                  </Link>
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
                  {/* <Link to="#" className="header__normal__item-link">
                  Đăng nhập
                </Link>  */}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <div className="header__wrapper">
          <nav className="header__navbar">
            <div className="header__navbar-logo__box">
              <div className="header__logo hide-on-mobile">
                <Link to="/" className="header__logo-link">
                  <img src="../images/logo.png" alt="" className="logo" />
                </Link>
              </div>
            </div>

            <div className="header__select hide-on-mobile-tablet">
              <ul className="header__list">
                <li className="header__item">
                  <Link to="/" className="header__item-link">
                    Trang chủ
                  </Link> 
                </li>
                <li className="header__item">
                  <Link
                    to="/alltour"
                    className="header__item-link header__item-link--notify"
                  >
                    Tour
                  </Link>
                </li>

                <React.Fragment>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    
                  >
                    <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                      >
                       
                        {localStorage.getItem("avatar") === null && (
                          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                        )}

                        {localStorage.getItem("avatar") !== null && (
                           <img src={localStorage.getItem("avatar")} alt="" style={{width:32,height:32,borderRadius:'50%'}} />
                        )}
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem style={{width:226}}>
                      <Avatar />
                      <Link
                        style={{ textDecoration: "none", color: "#4A4A4A" }}
                        to="/user/profile"
                      >
                        Profile
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <FlightIcon />
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "#4A4A4A",
                          marginLeft: "14px",
                        }}
                        to="/booktour"
                      >
                        Đặt Tour
                      </Link>
                    </MenuItem>
                    <Divider />
                    {/* <MenuItem>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      Add another account
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem> */}
                    <MenuItem  onClick={logout}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      {/* <Link
                        style={{ textDecoration: "none", color: "#4A4A4A" }}
                  
                        onClick={logout}
                      > */}
                        Logout
                      {/* </Link>  */}
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;

import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import LockClockIcon from "@mui/icons-material/LockClock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useHistory,useLocation } from "react-router";
import callApi from "../../api/apiService";
import Header from "../../components/Header/Header";
import './style.css';
import Message from "../../components/Message/Message"
const Otp = (props) => {
  const [notify,setNotify] = useState({isOpen:false, message:'',type:''})
  const [values, setValues] = useState({
    oldPassword: "",
    newPassword: "",
    otp:"",
    confirmNewPassword: "",
    showoldPassword: false,
    shownewPassword: false,
  });
  const location = useLocation()
  const email = location.state.email
  const [user, setUser] = useState({
    activeStep: 0,
    labelWidth: 0,
    error: false, //<---- here
    errorMessage: {}, //<-----here
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleClickShowOldPassword = () => {
    setValues({
      ...values,
      showoldPassword: !values.showoldPassword,
    });
  };

  const handleClickShowNewPassword = () => {
    setValues({
      ...values,
      shownewPassword: !values.shownewPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleNext = (e) => {
    const data = new FormData(e.currentTarget);
    let isError = false;
   

    if (data.get("newPassword") === "") {
      isError = true;
      setUser((prev) => ({
        ...prev,
        error: true,
        errorMessage: {
          ...prev.errorMessage,
          newPassword: "Nhập mật khẩu mới",
        },
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, newPassword: "" },
      }));
    }
    if (data.get("confirmNewPassword") === "") {
      isError = true;
      setUser((prev) => ({
        ...prev,
        error: true,
        errorMessage: {
          ...prev.errorMessage,
          confirmNewPassword: "Xác nhận lại mật khẩu",
        },
      }));
    } else if (data.get("confirmNewPassword") !== data.get("newPassword")) {
      isError = true;
      setUser((prev) => ({
        ...prev,
        error: true,
        errorMessage: {
          ...prev.errorMessage,
          confirmpassword: "Xác nhận lại mật khẩu không đúng",
        },
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, confirmpassword: "" },
      }));
    }

    if (!isError) {
      //add else if for validating other fields (if any)
      setUser((prevState) => ({
        activeStep: prevState.activeStep + 1,
        error: false,
        errorMessage: {},
      }));
    }
  };
  const history = useHistory();
  const handleSubmit = (e) => {
    const data = new FormData(e.currentTarget);
    handleNext(e);
    e.preventDefault();
    console.log(data.get("oldPassword"));
    if (data.get("newPassword")) {
      let user = {
        otp: data.get("otp"),
        email:email,
        password: data.get("newPassword"),
      };
      console.log(user);
      callApi(`user/resetPassword`, "POST", user)
        .then((res) => {
          setNotify({isOpen:true, message:'Cập nhật mật khẩu thành công', type:'success'})
          setTimeout(function() {

            history.push("/");
          }, 3000);
        })
        .catch((err) => {
            if(err.response.data.message==="OTP invalid")
            {
              setNotify({isOpen:true, message:'Sai OTP', type:'error'})
            }
        });
    }
  };
  return (
    <>
    <Header/>
    <div className="otp-wrapper">

      <form
        autoComplete="off"
       
        {...props}
        style={{ marginTop: "60px",width:'700px',height:'800px',padding:'10px' }}
        onSubmit={handleSubmit}
      >
        <Card>
          <CardHeader
            subheader="Nhập OTP và mật khẩu mới"
            title="Quên mật khẩu"
          />
          <Divider />

          <CardContent>

          <TextField
          fullWidth
             
              style={{marginBottom:'30px',display:'block'}}
              label="Mã xác nhận"
              name="otp"
              id="otp"
              onChange={handleChange}
              value={values.otp}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyIcon />
                  </InputAdornment>
                ),
               
              }}
            />
              
            <TextField
            fullWidth
              error={!!user.errorMessage.newPassword}
              helperText={
                user.errorMessage.newPassword && user.errorMessage.newPassword
              }
              style={{marginBottom:'30px',display:'block'}}
              label="Mật khẩu mới"
              name="newPassword"
              id="newPassword"
              onChange={handleChange}
              type={values.shownewPassword ? "text" : "password"}
              value={values.newPassword}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowNewPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.shownewPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
            fullWidth
              error={!!user.errorMessage.confirmNewPassword}
              helperText={
                user.errorMessage.confirmNewPassword &&
                user.errorMessage.confirmNewPassword
              }
              label="Xác nhận lại mật khẩu mới"
              name="confirmNewPassword"
              id="confirmNewPassword"
              onChange={handleChange}
              type={values.shownewPassword ? "text" : "password"}
              value={values.confirmNewPassword}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockClockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowNewPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.shownewPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          <Divider />
        
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#F1786a",marginTop:'20px' }}
            >
              Cập nhật mật khẩu
            </Button>
          </CardContent>
         
        </Card>
      </form>
    </div>
    <Message notify ={notify} setNotify={setNotify}/>
    </>
   
  );
};

export default Otp;

import React, { useState } from 'react';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import callApi from "../../api/apiService";
import { useHistory,useLocation} from "react-router-dom";
import { Link,Redirect } from "react-router-dom";
import Message from "../../components/Message/Message"

function Copyright(props) {
    
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function CodeSignUp() {
  const [notify,setNotify] = useState({isOpen:false, message:'',type:''})
  const location = useLocation()
  const email = location.state.email
  const [user, setUser] = useState({
    activeStep: 0,
    labelWidth: 0,
    error: false, //<---- here
    errorMessage: {} //<-----here
  });

  const handleNext = (e) => {
    const data = new FormData(e.currentTarget);
    let isError = false;
    if (data.get("otp") === '') {
      isError = true;
      setUser(prev => ({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, otp: "Nhập OTP của bạn" }
      }));
    }
    
    if (!isError) {
      //add else if for validating other fields (if any)
      setUser(prevState => ({
        activeStep: prevState.activeStep + 1,
        error: false,
        errorMessage: {}
      }));
    }
  }
  const history = useHistory()
  const handleSubmit = (e) => {
  
    const data = new FormData(e.currentTarget);
    handleNext(e)
    e.preventDefault();
    if (data.get("otp") !== "") {
      const otp = data.get("otp")
      const otpForm = {
          "otp":otp,
          "email":email
      }
      callApi(`user/verifyUser`, "POST",otpForm)
        .then((res) => {
          console.log(res);
         
          setNotify({isOpen:true, message:'Tài khoản được tạo thành công', type:'success'})
          setTimeout(function() {

            history.push({pathname:"/login"});
          }, 3000);
        })
        .catch((err) => {
          if(err.response.data.message==="Do not otp")
          {
            setNotify({isOpen:true, message:'otp không tồn tại', type:'error'})
          }
         
          
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img
              src="./images/logo.png"
              alt=""
              style={{ width: 50, height: 50 }}
            />
          </Link>
          <Typography component="h1" variant="h5">
            OTP
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Typography component="h3" variant="subtitle1">
                Mã OTP đã được gửi đến email của bạn
              </Typography>
              <Grid item xs={12}>
                <TextField
                  error={!!user.errorMessage.otp}
                  helperText={
                    user.errorMessage.otp &&
                    user.errorMessage.otp
                  }
                  required
                  fullWidth
                  id="otp"
                  label="otp"
                  name="otp"
                  autoComplete="otp"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#F1786a" }}
              sx={{ mt: 3, mb: 2 }}
            >
              Xác nhận mã otp
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
        <Message notify ={notify} setNotify={setNotify}/>
      </Container>

    </ThemeProvider>
  );
}

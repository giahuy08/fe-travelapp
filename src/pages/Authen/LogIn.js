import React, { useState } from 'react';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import callApi from "../../api/apiService";
import { useHistory } from "react-router";
import Message from "../../components/Message/Message"


const theme = createTheme();

export default function LogIn() {
  const [notify,setNotify] = useState({isOpen:false, message:'',type:''})
  const [user, setUser] = useState({
    activeStep: 0,
    labelWidth: 0,
    error: false, //<---- here
    errorMessage: {} //<-----here
  })
  const handleNext = (e) => {
    const data = new FormData(e.currentTarget);
    let isError = false;
    if (data.get("email") === '') {
      isError = true;
      setUser(prev => ({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, email: "Nhập địa chỉ Email của bạn" }
      }));
    }
    else  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.get("email"))) {
      isError = true;
      setUser(prev => ({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, email: "Email không hợp lệ" }
      }));
    } else {
      setUser(prev => ({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, email: "" }
      }));
    }

    if (data.get('password') === '') {
      isError = true;
      setUser(prev => ({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, password: "Nhập mật khẩu" }
      }));
    } else {
      setUser(prev => ({
        ...prev,
        error: true,
        errorMessage: { ...prev.errorMessage, password: "" }
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
    if (data.get("email") !== "" && data.get("password") !== "") {
      let user = {
        email: data.get("email"),
        password: data.get("password"),
      };
      console.log(user);
      callApi(`user/login`, "POST", user)
        .then((res) => {
          console.log(res);
          console.log(res.data.data.token)
          localStorage.setItem("accessToken", res.data.data.token)
          localStorage.setItem("avatar",res.data.data.user.avatar)
       

          console.log(localStorage.getItem("avatar"))
          history.push("/");

        })
        .catch((err) => {
          console.log(err);
          setNotify({isOpen:true, message:'Tài khoản hoặc mật khẩu không đúng', type:'error'})
          
        });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(../../images/bg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link href="/">

              <img
                src="./images/logo.png"
                alt=""
                style={{ width: 50, height: 50 }}
              />
            </Link>

            <Typography component="h1" variant="h5">
              Đăng nhập
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                error={!!user.errorMessage.email}
                helperText={
                  user.errorMessage.email &&
                  user.errorMessage.email
                }
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                error={!!user.errorMessage.password}
                helperText={
                  user.errorMessage.password &&
                  user.errorMessage.password
                }
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Lưu thông tin"
              />
              <Button
                // onClick={btnSubmit}
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: "#F1786a" }}
                sx={{ mt: 3, mb: 2 }}
              >
                Đăng Nhập
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/forgetpassword" variant="body2">
                    Quên mật khẩu?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/sign-up" variant="body2">
                    {"Bạn chưa có tài khoản? Đăng ký"}
                  </Link>
                </Grid>
              </Grid>

            </Box>
          </Box>
        </Grid>
      </Grid>
      <Message notify ={notify} setNotify={setNotify}/>
    </ThemeProvider>
  );
}

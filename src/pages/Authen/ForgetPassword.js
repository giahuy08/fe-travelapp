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
import { useHistory} from "react-router-dom";
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

export default function ForgetPassword() {
  const [notify,setNotify] = useState({isOpen:false, message:'',type:''})
 
  const [user, setUser] = useState({
    activeStep: 0,
    labelWidth: 0,
    error: false, //<---- here
    errorMessage: {} //<-----here
  });

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
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.get("email"))) {
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
    if (data.get("email") !== "") {
      const email = data.get("email")
      console.log(user);
      callApi(`user/forgotPassword?email=` + email.toString(), "GET")
        .then((res) => {
          console.log(res);
          history.push({pathname:"/otp",state:{email:email}});
          // if(res)
          // {

          //   <Redirect
          //   to={{
          //    pathname: `/otp`,
          //    state: {
          //      id: email,
          //    },
          //  }}/>
           
          // }
        })
        .catch((err) => {
          if(err.response.data.message==="Do not email")
          {
            setNotify({isOpen:true, message:'Email không tồn tại', type:'error'})
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
          <Link href="/">
            <img
              src="./images/logo.png"
              alt=""
              style={{ width: 50, height: 50 }}
            />
          </Link>
          <Typography component="h1" variant="h5">
            Quên mật khẩu
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Typography component="h3" variant="subtitle1">
                Quên mật khẩu? Vui lòng nhập địa chỉ Email của bạn. Bạn sẽ nhận
                được một liên kết để cập nhật mật khẩu mới qua Email, hãy kiểm
                tra hộp thư đến của bạn.
              </Typography>
              <Grid item xs={12}>
                <TextField
                  error={!!user.errorMessage.email}
                  helperText={
                    user.errorMessage.email &&
                    user.errorMessage.email
                  }
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
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
              Cập nhật mật khẩu
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
        <Message notify ={notify} setNotify={setNotify}/>
      </Container>

    </ThemeProvider>
  );
}

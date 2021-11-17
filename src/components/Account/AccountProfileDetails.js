import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useHistory } from "react-router";
import callApi from '../../api/apiService';


const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    showPassword: false,
  });

  const [user, setUser] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  useEffect(() => {
    (
      async () => {
        callApi(`user/findUserByToken`, "GET")
          .then((res) => {
            console.log(res);
            console.log(res.data.data.token)
            localStorage.getItem("accessToken", res.data.data.token)
            setUser(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    )();
  }, [])


  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const handleClickShowPassword = () => {

    setValues({
      ...user,
      showPassword: !values.showPassword,
    });
  };

  const handleClick = () => {
    setShowPassword(!showPassword);
  };


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const history = useHistory()
  const handleSubmit = (e) => {

    const data = new FormData(e.currentTarget);
    //handleNext(e);
    e.preventDefault();
    if (data.get('name') !== "" &&
      data.get('phone') !== "" && data.get('address') !== "") {
      let user = {
        name: data.get('name'),
        address: data.get('address'),
        phone: data.get('phone'),
      }
      console.log(user);
      callApi(`/user/editProfile`, "PUT", user)
        .then((res) => {
          console.log(res);
          console.log(res.data.data.token)
          localStorage.getItem("accessToken", res.data.data.token)
          history.push("user/profile");

        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <form autoComplete="off" noValidate {...props} style={{ marginTop: '60px' }} onSubmit={handleSubmit}>
      <Card style={{ marginTop: '60px' }}>
        <CardHeader
          subheader="Cập nhật thông tin cá nhân"
          title="Thông tin tài khoản"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Vui lòng điền đầy đủ thông tin"
                label="Họ và tên"
                name="name"
                onChange={handleChange}
                value={user.name}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Địa chỉ"
                name="address"
                onChange={handleChange}
                value={user.address}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                disabled
                fullWidth
                label="E-mail"
                name="email"
                onChange={handleChange}
                value={user.email}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Số điện thoại"
                name="phone"
                onChange={handleChange}
                value={user.phone}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                disabled
                fullWidth
                label="Mật khẩu"
                name="password"
                onChange={handleChange}
                // type={showPassword ? 'text' : 'password'}
                type='password'
                value={user.password}
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
                        onClick={handleClick}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {user.showPassword ? <VisibilityOff /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              marginTop='5px'
            > <Button
              size="large"
              type="button"
              variant="contained"
              style={{ backgroundColor: "#F1786a" }}
              href="/user/changepassword"
            >
                Đổi mật khẩu
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#F1786a" }}
          >
            Cập nhật
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
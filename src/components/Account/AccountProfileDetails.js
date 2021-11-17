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


const AccountProfileDetails = (props) => {

  const [user, setUser] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  let defaultUrl = 'http://localhost:5000/user/findUserByToken'
  useEffect(() => {
    (       
            async () => {

            const response = await fetch(defaultUrl,{
                method: 'GET',
                headers: {'Content-Type': 'application/json',  "Authorization":"Bearer " + localStorage.getItem("accessToken")}
            });
            
            const content = await response.json();
            console.log(content.data)
            setUser(content.data)
      }    
    )();
},[])


  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };


  const handleClick = () => {
    setShowPassword(!showPassword);
  };


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card style={{marginTop: '60px'}}>
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
                value='0123456789'
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
                        {1234567890 ? <VisibilityOff /> : <Visibility />}
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

              {/* <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField> */}
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
import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import { useHistory } from "react-router";
import callApi from '../../api/apiService';

// const user = {
//   avatar: 'https://firebasestorage.googleapis.com/v0/b/travel-app-34be2.appspot.com/o/unknown.jpg?alt=media&token=3dbbbcec-60e1-419b-89b8-cedb9d7f0514',
//   address: 'Hồ Chí Minh',
//   country: 'Việt Nam',
//   jobTitle: 'Khách hàng',
//   name: 'Nhựt Thiên',
//   timezone: 'GTM-7'
// };


const Input = styled('input')({
  display: 'none',
});


const AccountProfile = (props) => {

  const [user, setUser] = useState('');
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
  const [urlImage, setUrlImage] = useState()
  const handleUrl = (e) => {
    setUrlImage(e.target.files[0])

  }
  console.log(urlImage)

  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (urlImage !== null) {
      let user = new FormData()
      user.append('Avatar', urlImage)
      console.log(user);
      callApi(`user/updateAvatar`, "PUT", user)
        .then((res) => {
          console.log(res);
          console.log(res.data.data.token)
          localStorage.getItem("accessToken", res.data.data.token)
          window.location.reload()

        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <Card style={{ marginTop: '60px' }} {...user}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 100,
              width: 100
            }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            style={{ fontSize: '28px' }}
          >
            {user.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${user.address}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${moment().format('hh:mm A')} ${user.timezone}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          style={{ backgroundColor: "#F1786a" }}
          fullWidth
          type="file"
          variant="contained"
          onClick={handleSubmit}
        >
          Cập nhật ảnh đại diện
        </Button>

        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" onChange={handleUrl} />
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </CardActions>
    </Card>)
}


export default AccountProfile;
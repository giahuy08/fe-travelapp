import {
    Box,
    Container,
    Grid
  } from '@mui/material';
  import AccountProfile from '../../components/Account/AccountProfile';
  import ChangePasswordDetails from '../../components/Account/ChangePasswordDetails';
import Header from '../../components/Header/Header';

  
  const ChangePassword = () => (
    <>
    <Header/>
      <Box
      style = {{marginTop:'30px'}}
        sx={{
          width:'100%',
          height:'90.5vh',
          backgroundImage: 'url(../../images/bg.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <AccountProfile />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <ChangePasswordDetails />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
  
  export default ChangePassword;
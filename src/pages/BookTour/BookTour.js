import React from "react";
import Header from "../../components/Header/Header";
import Foot from "../../components/Foot/Foot";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Done from '@mui/icons-material/Done';
import HighlightOff from '@mui/icons-material/HighlightOff';
import AlarmOn from '@mui/icons-material/AlarmOn';

import { useState, useEffect } from 'react';
import { red } from "@mui/material/colors";


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });


function BookTour() {
  const [status, setStatus] = React.useState(4);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  


  const [history, setHistory] = useState([]);
  let defaultUrl = 'http://localhost:5000/booktour/getUserBookTour?skip=1&limit=5'
  useEffect(() => {
    (       
            async () => {

            const response = await fetch(defaultUrl,{
                method: 'GET',
                headers: {'Content-Type': 'application/json',  "Authorization":"Bearer " + localStorage.getItem("accessToken")}
            });
            
            const content = await response.json();
            console.log(content.data)
            setHistory(content.data)
      }    
    )();
},[])

const checkStatus = (status)=>{
  if(status==0) return <Chip label="Chờ xác nhận" color='primary' style={{backgroundColor:'GoldenRod'}} icon={<AlarmOn />}/>
  if(status==1) return <Chip label="Đã đặt" color='primary' style={{backgroundColor:'green'}} icon={<Done />}/>
  if(status==2) return <Chip label="Đã hủy" color='primary' style={{backgroundColor:'red'}} icon={<HighlightOff />}/>
}

  return (
      <div>
        <Header/>

        <React.Fragment>
      <CssBaseline />
      <Container Width='80%' sx={{marginTop: '90px', }}>
          <h2 style={{textAlign: 'center'}}>Book Tour</h2>
        <Box sx={{ bgcolor: '#fff'}}>

        <div>
      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Trạng Thái
      </Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Loại</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={status}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={4}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={0}>Chờ xác nhận</MenuItem>
          <MenuItem value={1}>Đã đặc</MenuItem>
          <MenuItem value={2}>Đã hủy</MenuItem>
        </Select>
      </FormControl>
    </div>   

    {history.map((tour)=>{ if(status == 4 || status == tour.status)
    return <div>
    <Paper sx={{ p: 2, margin: 'auto', width: '80%', flexGrow: 1 , marginTop: '20px', }}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={tour.imagesTour} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">              
                <div style={{fontWeight: 'bold'}}>{tour.name}</div>
              </Typography>
              <Typography variant="body2" gutterBottom>
                {tour.detail}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {tour.place}
              </Typography>
              
              
            </Grid>
            <Grid item>
              {/* <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography> */}
              {
                checkStatus(tour.status)
              }
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {tour.finalpayment} VNĐ
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </div>
        })}   
        </Box>
      </Container>
    </React.Fragment>


        <Foot/>
      </div>  
  );
}

export default BookTour;

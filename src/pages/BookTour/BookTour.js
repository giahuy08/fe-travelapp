import React from "react";
import Header from "../../components/Header/Header";
import Foot from "../../components/Foot/Foot";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Done from "@mui/icons-material/Done";
import HighlightOff from "@mui/icons-material/HighlightOff";
import AlarmOn from "@mui/icons-material/AlarmOn";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import callApi from "../../api/apiService";
import Message from "../../components/Message/Message";
import CircularProgress from "@mui/material/CircularProgress";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function BookTour() {
  const [status, setStatus] = React.useState(4);
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [idBookTour, setIdBookTour] = React.useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClickDialogOpen = (id) => {
    setIdBookTour(id);
    setOpenDialog(true);
  };

  const handleClickDialogClose = () => {
    setOpenDialog(false);
  };

  const [history, setHistory] = useState([]);
  let defaultUrl =
    "http://localhost:5000/booktour/getUserBookTour?skip=&limit=";
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
      console.log(content.data);

      setHistory(content.data);
    })();
  }, []);

  const cancelTour = (id) => {
    callApi(`booktour/cancelBookTour?id=${id}`, "POST")
      .then((res) => {
        setNotify({ isOpen: true, message: "???? h???y tour", type: "success" });
        setTimeout(function () {
          window.location.reload();
        }, 2000);

        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkStatus = (status, idBookTour) => {
    if (status === 0)
      return (
        <>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <Chip
                label="Ch??? x??c nh???n"
                color="primary"
                style={{ backgroundColor: "GoldenRod" }}
                icon={<AlarmOn />}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon color="error" />}
                onClick={(e) => {
                  e.preventDefault();
                  handleClickDialogOpen(idBookTour);
                }}
              >
                H???y
              </Button>
            </Grid>
          </Grid>
        </>
      );
    if (status === 1)
      return (
        <Chip
          label="???? ?????t"
          color="primary"
          style={{ backgroundColor: "green" }}
          icon={<Done />}
        />
      );
    if (status === 2)
      return (
        <Chip
          label="???? h???y"
          color="primary"
          style={{ backgroundColor: "red" }}
          icon={<HighlightOff />}
        />
      );
  };

  return (
    <div>
      <Header />
      {(history.length === 0 && (
        <Box
          sx={{ display: "flex" }}
          style={{
            marginTop: "150px",
            marginLeft: "50%",
            marginBottom: "100px",
          }}
        >
          <CircularProgress />
        </Box>
      )) || (
        <React.Fragment>
          <CssBaseline />
          <Container Width="80%" sx={{ marginTop: "90px" }}>
            <h2 style={{ textAlign: "center" }}>Qu???n l?? tour</h2>
            <Box sx={{ bgcolor: "#fff" }}>
              <div>
                <Button sx={{ display: "block", mt: 2 }} onClick={handleOpen}>
                  Tr???ng Th??i
                </Button>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-controlled-open-select-label">
                    Lo???i
                  </InputLabel>
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
                      <em>T???t c???</em>
                    </MenuItem>
                    <MenuItem value={0}>Ch??? x??c nh???n</MenuItem>
                    <MenuItem value={1}>???? ?????t</MenuItem>
                    <MenuItem value={2}>???? h???y</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {history &&
                history.map((tour, index) => {
                  if (status === 4 || status === tour.status)
                    return (
                      <div key={index}>
                        <Paper
                          sx={{
                            p: 2,
                            margin: "auto",
                            width: "80%",
                            flexGrow: 1,
                            marginTop: "20px",
                          }}
                        >
                          <Grid container spacing={2}>
                            <Grid item>
                              <ButtonBase sx={{ width: 128, height: 128 }}>
                                <Img alt="complex" src={tour.imagesTour} />
                              </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                              <Grid
                                item
                                xs
                                container
                                direction="column"
                                spacing={2}
                              >
                                <Grid item xs>
                                  <Typography
                                    gutterBottom
                                    variant="subtitle1"
                                    component="div"
                                  >
                                    <div style={{ fontWeight: "bold" }}>
                                      {tour.name}
                                    </div>
                                  </Typography>
                                  <Typography variant="body2" gutterBottom>
                                    {tour.detail}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                  >
                                    {tour.place}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                  >
                                    Ng??y ??i{" "}
                                    {
                                      new Date(tour.startDate)
                                        .toISOString()
                                        .split("T")[0]
                                    }
                                  </Typography>

                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                  >
                                    Ng??y ?????n{" "}
                                    {
                                      new Date(tour.endDate)
                                        .toISOString()
                                        .split("T")[0]
                                    }
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  {/* <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography> */}
                                  {checkStatus(tour.status, tour._id)}
                                </Grid>
                              </Grid>
                              <Grid item>
                                <Typography variant="subtitle1" component="div">
                                  {tour.finalpayment} VN??
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Paper>
                      </div>
                    );
                })}
            </Box>
          </Container>
        </React.Fragment>
      )}
      <Dialog
        open={openDialog}
        onClose={handleClickDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"X??c nh???n h???y tour du l???ch?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            B???n mu???n h???y tour du l???ch n??y
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e) => {
              e.preventDefault();
              cancelTour(idBookTour);
            }}
          >
            H???y
          </Button>
          <Button onClick={handleClickDialogClose} autoFocus>
            Tho??t
          </Button>
        </DialogActions>
      </Dialog>
      <Message notify={notify} setNotify={setNotify} />

      <Foot />
    </div>
  );
}

export default BookTour;

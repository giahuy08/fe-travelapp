import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Carousel } from "@trendyol-js/react-carousel";
import "./TourItem.css";
import Comment from "./Comment/Comment";
import Header from "../../components/Header/Header";
import { Link, useLocation, useHistory } from "react-router-dom";
import callApi from "../../api/apiService";
import Vote from "./Vote/Vote";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Message from "../../components/Message/Message";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CountertopsIcon from "@mui/icons-material/Countertops";
import Rating from "@mui/material/Rating";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
function TourItem() {
  const [value, setValue] = React.useState(null);
  const [tour, setTour] = useState();
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState(false);
  const [enterprise, setEnterprise] = useState({});
  const [rooms, setRooms] = useState([]);
  const [image, setImage] = useState([]);
  const [openRating, setOpenRating] = useState(false);
  const [comments, setComments] = useState([]);
  const [code, setCode] = useState("");
  const [tables, setTables] = useState([]);
  const [errorCode, setErrorCode] = useState("");
  const historyback = useHistory();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const handlebooking = (e) => {
    e.preventDefault();
    if (value) {
      if (localStorage.getItem("accessToken") !== null) {
        historyback.push({
          pathname: `/payment/${id}`,
          state: {
            code: code,
            date: value,
            time: tour.time,
          },
        });
      }
      else{
        setNotify({
          isOpen: true,
          message: "Vui l??ng ????ng nh???p",
          type: "warning",
        });
      }
    } else {
      setNotify({
        isOpen: true,
        message: "Vui l??ng ch???n ng??y kh???i h??nh",
        type: "warning",
      });
    }
  };
  const handleChangeCode = (event) => {
    setCode(event.target.value);
  };
  const togglePopup = () => {
    setOpenRating(!openRating);
  };
  const location = useLocation();

  const id = location.state.id;

  const getComment = async () => {
    await callApi(`reviewtour/getReviewOfTour?idTour=${id}`, "GET")
      .then((res) => {
        setComments(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    callApi(`tour/getOneTour?id=${id}`, "GET")
      .then((res) => {
        setImage(res.data.data.imagesTour);
        getRoomsOfHotel(res.data.data);
        getTableOfHotel(res.data.data);
        getEnterprise(res.data.data);

        setTour(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getVehicle();
  }, []);

  const getEnterprise = async (tour) => {
    await callApi(`enterprise/getOneEnterprise?id=${tour.idEnterprise}`, "GET")
      .then((res) => {
        setEnterprise(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getVehicle = async () => {
    await callApi(`vehicle/getAllVehicleOfTour?idTour=${id}`, "GET")
      .then((res) => {
        setVehicles(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRoomsOfHotel = async (tour) => {
    const id = tour.idEnterprise;

    await callApi(`hotelroom/getRoomOfEnterprise?idEnterprise=${id}`, "GET")
      .then((res) => {
        setRooms(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTableOfHotel = async (tour) => {
    const id = tour.idEnterprise;
    console.log(id);
    await callApi(
      `restauranttable/getTableOfEnterprise?idEnterprise=${id}`,
      "GET"
    )
      .then((res) => {
        setTables(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <div>
      <Header />
      {(!tour && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )) || (
        <div className="touritem__content">
          <div className="touritem__content-slider">
            <div className="touritem__content-slider-item">
              <img
                src={image[0]}
                alt=""
                className="touritem__content-slider-img"
              />
            </div>
            {/* <Carousel show={2} slide={1} swiping={true}></Carousel> */}
          </div>
          <span
            onClick={() => {
              historyback.goBack();
            }}
            style={{
              cursor: "pointer",
              fontSize: 15,
              margin: "10px",
              display: "block",
              color: "#fe5a2d",
            }}
          >
            <ArrowBackIosIcon
              style={{ fontSize: "20px", marginBottom: "-4px" }}
            />
            <ArrowBackIosIcon
              style={{
                fontSize: "20px",
                marginBottom: "-4px",
                marginLeft: "-10px",
              }}
            />
            Quay l???i
          </span>
          <div className="touritem__content-wrap">
            <div className="touritem__content-wrap-info">
              <h2 className="touritem__name">{tour.name}</h2>
              <div className="touritem__place">
                <i className="fas fa-map-marker-alt"></i>
                {tour.place}
              </div>
              <div className="touritem__detail">{tour.detail}</div>
            </div>

            <div className="touritem__content-wrap-booking">
              <div className="touritem__content-booking-price">
                {tour.payment} ??/ {tour.time}
              </div>

              <div className="touritem__content-booking-vehicle">
                Ph????ng ti???n: Xe kh??ch
              </div>

              <TextField
                margin="normal"
                required
                fullWidth
                id="code"
                label="M?? khuy???n m??i"
                name="code"
                autoFocus
                value={code}
                onChange={handleChangeCode}
              />
              <div
                className="touritem__content-booking-errorcode"
                style={{ marginBottom: "10px" }}
              >
                {errorCode}
              </div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  disablePast
                  label="Ch???n ng??y kh???i h??nh"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
              {console.log(value)}
              <div className="touritem__content-booking-vehicle">
                T???ng ti???n: {tour.payment} ??
              </div>

              <button
                className="touritem__content-booking-btn"
                onClick={handlebooking}
              >
                ?????t ngay
              </button>
            </div>
          </div>

          {/* Others */}
          <div className="touritem__content-wrap-feature">
            <div className="touritem__content-wrap-feature-item">
              <h3 className="touritem-feature__name">Ti???n nghi ch??? ???</h3>
              <div className="touritem-feature__name__desc">
                Gi???i thi???u v??? c??c ti???n nghi v?? d???ch v??? t???i n??i l??u tr??
              </div>
              <div className="touritem-feature__list">
                <div className="touritem-feature__item">
                  <i className="fas fa-wifi"></i> Wifi
                </div>
                <div className="touritem-feature__item">
                  <i className="fas fa-tv"></i> Tivi
                </div>

                <div className="touritem-feature__item">
                  <i className="fas fa-fan"></i> Air conditioner
                </div>
              </div>
            </div>
            <div className="touritem__content-wrap-feature-item">
              <div className="touritem-feature__name__desc">Ti???n ??ch b???p</div>
              <div className="touritem-feature__list">
                <div className="touritem-feature__item">
                  <i className="fas fa-wifi"></i> Wifi
                </div>
                <div className="touritem-feature__item">
                  <i className="fas fa-tv"></i> Tivi
                </div>

                <div className="touritem-feature__item">
                  <i className="fas fa-fan"></i> Air conditioner
                </div>
              </div>
            </div>
            <div className="touritem__content-wrap-feature-item">
              <h3 className="touritem-feature__name">Gi?? ph??ng</h3>
              <div className="touritem-feature__name__desc">
                Gi?? c?? th??? t??ng v??o cu???i tu???n ho???c ng??y l???
              </div>
              <div className="touritem-feature-price">
                {tour.payment} / {tour.time}
              </div>
            </div>
          </div>

          {/* Hotel */}
          <div className="touritem__hotel">
            <h3 className="touritem-hotel__name">Kh??ch s???n</h3>
            <div className="touritem__content-wrap-hotel">
              <div className="touritem__hotel-img-wrap">
                <img
                  src={enterprise.logo}
                  className="touritem__hotelitem-img"
                  alt=""
                />
              </div>
              <div className="touritem__content-wrap-content">
                <h3 className="touritem-hotelitem__name">{enterprise.name}</h3>
                <div className="touritem-hotel__table">
                  <div className="touritem-hotel__table-detail">
                    {enterprise.detail}
                  </div>
                </div>
              </div>
            </div>
            {/* TEst */}
            <div className="cards">
              {/* <Carousel show={2.5} slide={2} swiping={true} transition={0.5}> */}
              {/* {enterprises && enterprises.map((enterprise)=>(

            <div class="card">
              <img
                src="https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt=""
                class="card-image"
              />
              <div class="card-content">
                <div class="card-top">
                  <h3 class="card-title">{enterprise.name}</h3>
                  <div class="card-user">
                    <img
                      src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      alt=""
                      class="card-user-avatar"
                    />
                    <div class="card-user-info">
                      <div class="card-user-top">
                        <h4 class="card-user-name">Tam Tran</h4>
                        <ion-icon name="checkmark-circle"></ion-icon>
                      </div>
                      <div class="card-user-game">Call of duty</div>
                    </div>
                  </div>
                </div>
                <div class="card-bottom">
                  <div class="card-live">
                    <ion-icon name="wifi"></ion-icon>
                    <span>Live</span>
                  </div>
                  <div class="card-watching">4.2k watching</div>
                </div>
              </div>
            </div>
            ))} */}

              {/* <div class="card">
              <img
                src="https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt=""
                class="card-image"
              />
              <div class="card-content">
                <div class="card-top">
                  <h3 class="card-title">2020 World Champs Gaming Warzone</h3>
                  <div class="card-user">
                    <img
                      src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      alt=""
                      class="card-user-avatar"
                    />
                    <div class="card-user-info">
                      <div class="card-user-top">
                        <h4 class="card-user-name">Tam Tran</h4>
                        <ion-icon name="checkmark-circle"></ion-icon>
                      </div>
                      <div class="card-user-game">Call of duty</div>
                    </div>
                  </div>
                </div>
                <div class="card-bottom">
                  <div class="card-live">
                    <ion-icon name="wifi"></ion-icon>
                    <span>Live</span>
                  </div>
                  <div class="card-watching">4.2k watching</div>
                </div>
              </div>
            </div> */}
              {/* </Carousel> */}
            </div>
            {/* TEs */}

            {/* <Carousel show={2.5} slide={2} swiping={true} transition={0.5}>
            <div className="touritem__some__hotel-container">
              <Link to="#" className="touritem__some__hotel-link">
                <img
                  src="../images/apartment_1_1625465608.jpg"
                  alt=""
                  className="touritem__some__hotel-img"
                />
                <p className="touritem__some__hotel-label">
                  VI VU NGO???I TH??NH H?? N???I
                </p>
                <p className="touritem__some__hotel-decs">
                  Tr???i nghi???m kh??ng gian tho??ng ????ng cho chuy???n ??i ngay g???n H??
                  N???i
                </p>
              </Link>
            </div>

            <div className="touritem__some__hotel-container">
              <Link to="#" className="touritem__some__hotel-link">
                <img
                  src="../images/apartment_1_1625465608.jpg"
                  alt=""
                  className="touritem__some__hotel-img"
                />
                <p className="touritem__some__hotel-label">
                  VI VU NGO???I TH??NH H?? N???I
                </p>
                <p className="touritem__some__hotel-decs">
                  Tr???i nghi???m kh??ng gian tho??ng ????ng cho chuy???n ??i ngay g???n H??
                  N???i
                </p>
              </Link>
            </div>

            <div className="touritem__some__hotel-container">
              <Link to="#" className="touritem__some__hotel-link">
                <img
                  src="../images/apartment_1_1625465608.jpg"
                  alt=""
                  className="touritem__some__hotel-img"
                />
                <p className="touritem__some__hotel-label">
                  VI VU NGO???I TH??NH H?? N???I
                </p>
              </Link>
            </div>
          </Carousel> */}
          </div>

          {/* ---- */}
          <div className="feature-flex">
            <div className="touritem__content-wrap-feature">
              <h3 className="touritem-feature__name">
                {" "}
                <MeetingRoomIcon style={{ fontSize: 30 }} /> Ph??ng
              </h3>
              {!rooms && (
                <div className="touritem-feature__table-size">
                  Ch??a c?? th??ng tin ph??ng
                </div>
              )}

              {rooms &&
                rooms.map((room, index) => (
                  <div className="touritem-feature__table" key={index}>
                    <div className="touritem-feature__table-size feature-bold">
                      Size: {room.size}
                    </div>
                    <div className="touritem-feature__table-floor feature-bold">
                      T???ng: {room.floor}
                    </div>
                    <div className="touritem-feature__table-floor feature-bold">
                      Gi?????ng: {room.bed}
                    </div>
                    <div className="touritem-feature__table-floor feature-bold">
                      Chi ti???t: {room.detail}
                    </div>

                    <div className="touritem-feature__table-price feature-bold">
                      Gi??: {room.price} ??
                    </div>
                  </div>
                ))}
            </div>

            {/* Tabel */}

            <div className="touritem__content-wrap-feature">
              <h3 className="touritem-feature__name">
                {" "}
                <CountertopsIcon style={{ fontSize: 30 }} /> B??n
              </h3>
              {!tables && (
                <div className="touritem-feature__table-size feature-bold">
                  Ch??a c?? th??ng tin b??n
                </div>
              )}
              {tables &&
                tables.map((table, index) => (
                  <div className="touritem-feature__table " key={index}>
                    <div className="touritem-feature__table-name feature-bold">
                      T??n: {table.name}
                    </div>
                    <div className="touritem-feature__table-size feature-bold">
                      Size: {table.size}
                    </div>
                    <div className="touritem-feature__table-floor feature-bold">
                      T???ng: {table.floor}
                    </div>
                    <div className="touritem-feature__table-detail feature-bold">
                      Chi ti???t: {table.detail}
                    </div>
                    <div className="touritem-feature__table-price feature-bold">
                      Gi??: {table.price} ??
                    </div>
                  </div>
                ))}
            </div>

            <div className="touritem__content-wrap-feature">
              <h3 className="touritem-feature__name">
                {" "}
                <CountertopsIcon style={{ fontSize: 30 }} /> Ph????ng ti???n
              </h3>
              {!vehicles && (
                <div className="touritem-feature__table-size feature-bold">
                  Ch??a c?? th??ng tin b??n
                </div>
              )}
              {vehicles &&
                vehicles.map((vehicle, index) => (
                  <div className="touritem-feature__table " key={index}>
                    <div className="touritem-feature__table-name feature-bold">
                      T??n: {vehicle.name}
                    </div>
                    <div className="touritem-feature__table-size feature-bold">
                      Bi???n s???: {vehicle.vehicleNumber}
                    </div>
                    {vehicle.imagesVehicle.map((image, index) => (
                      <img
                        className="touritem-feature__vehicle-img "
                        src={image}
                        alt=""
                        key={index}
                      />
                    ))}
                  </div>
                ))}
            </div>
          </div>

          {/* ---- */}

          {/* ????nh gi?? */}

          <div className="touritem__content-wrap-feature">
            <Stack direction="row" spacing={2}>
              <Button
                endIcon={<SendIcon />}
                style={{
                  backgroundColor: "#FF512F",
                  color: "#fff",
                  width: "200px",
                  marginTop: "80px",
                  marginBottom: "80px",
                }}
                onClick={() => {
                  setOpenRating(!openRating);
                }}
              >
                Vi???t ????nh gi??
              </Button>
            </Stack>

            <h3 className="touritem-feature__name">????nh gi?? - t??? kh??ch h??ng</h3>
            <div className="touritem-feature-star">
              <div>????nh gi??</div>
              {console.log("star" + Number(tour.star).toFixed(1))}
              <Rating
                name="half-rating-read"
                value={Number(tour.star).toFixed(1)}
                readOnly
                precision={0.1}
              />
            </div>
            {comments &&
              comments.map((comment, index) => (
                <Comment
                  key={index}
                  star={comment.star}
                  imagesReview={comment.imagesReview}
                  comment={comment.comment}
                  avatar={comment.avatarUser}
                  nameUser={comment.nameUser}
                />
              ))}
            {comments.length === 0 && <h3>Ch??a c?? ????nh gi?? n??o</h3>}
          </div>

          {/* ---- */}
        </div>
      )}
      {openRating && <Vote handleClose={togglePopup} idTour={id} />}
      <Message notify={notify} setNotify={setNotify} />{" "}
    </div>
  );
}

export default TourItem;

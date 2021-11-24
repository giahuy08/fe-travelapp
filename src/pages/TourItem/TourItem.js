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
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CountertopsIcon from '@mui/icons-material/Countertops';
function TourItem() {
  const [tour, setTour] = useState({});
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
  var list = [];

  return (
    <div>
      <Header />
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
          Quay lại
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
              {tour.payment} đ/ {tour.time}
            </div>

            <div className="touritem__content-booking-vehicle">
              Phương tiện: Xe khách
            </div>

            <TextField
              margin="normal"
              required
              fullWidth
              id="code"
              label="Mã khuyến mãi"
              name="code"
              autoFocus
              value={code}
              onChange={handleChangeCode}
            />
            <div className="touritem__content-booking-errorcode">
              {errorCode}
            </div>
            <div className="touritem__content-booking-vehicle">
              Tổng tiền: {tour.payment} đ
            </div>
            <Link
              to={{
                pathname: `/payment/${id}`,
                state: {
                  code: code,
                },
              }}
            >
              <button className="touritem__content-booking-btn">
                Đặt ngay
              </button>
            </Link>
          </div>
        </div>

        {/* Others */}
        <div className="touritem__content-wrap-feature">
          <div className="touritem__content-wrap-feature-item">
            <h3 className="touritem-feature__name">Tiện nghi chỗ ở</h3>
            <div className="touritem-feature__name__desc">
              Giới thiệu về các tiện nghi và dịch vụ tại nơi lưu trú
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
            <div className="touritem-feature__name__desc">Tiện ích bếp</div>
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
            <h3 className="touritem-feature__name">Giá phòng</h3>
            <div className="touritem-feature__name__desc">
              Giá có thể tăng vào cuối tuần hoặc ngày lễ
            </div>
            <div className="touritem-feature-price">
              {tour.payment} / {tour.time}
            </div>
          </div>
        </div>

        {/* Hotel */}
        <div className="touritem__hotel">
          <h3 className="touritem-hotel__name">Khách sạn</h3>
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

          <Carousel show={2.5} slide={2} swiping={true} transition={0.5}>
            <div className="touritem__some__hotel-container">
              <Link to="#" className="touritem__some__hotel-link">
                <img
                  src="../images/apartment_1_1625465608.jpg"
                  alt=""
                  className="touritem__some__hotel-img"
                />
                <p className="touritem__some__hotel-label">
                  VI VU NGOẠI THÀNH HÀ NỘI
                </p>
                <p className="touritem__some__hotel-decs">
                  Trải nghiệm không gian thoáng đãng cho chuyến đi ngay gần Hà
                  Nội
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
                  VI VU NGOẠI THÀNH HÀ NỘI
                </p>
                <p className="touritem__some__hotel-decs">
                  Trải nghiệm không gian thoáng đãng cho chuyến đi ngay gần Hà
                  Nội
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
                  VI VU NGOẠI THÀNH HÀ NỘI
                </p>
              </Link>
            </div>
          </Carousel>
        </div>

        {/* ---- */}
        <div className="feature-flex">
          <div className="touritem__content-wrap-feature">
            <h3 className="touritem-feature__name"> <MeetingRoomIcon style={{fontSize:30}}/> Phòng</h3>
            {!rooms && (
              <div className="touritem-feature__table-size">
                Chưa có thông tin phòng
              </div>
            )}

            {rooms &&
              rooms.map((room, index) => (
                <div className="touritem-feature__table" key={index}>
                  <div className="touritem-feature__table-size feature-bold">
                    Size: {room.size}
                  </div>
                  <div className="touritem-feature__table-floor feature-bold">
                    Tầng: {room.floor}
                  </div>
                  <div className="touritem-feature__table-floor feature-bold">
                    Giường: {room.bed}
                  </div>
                  <div className="touritem-feature__table-floor feature-bold">
                    Chi tiết: {room.detail}
                  </div>

                  <div className="touritem-feature__table-price feature-bold">
                    Giá: {room.price} đ
                  </div>
                </div>
              ))}
          </div>

          {/* Tabel */}

          <div className="touritem__content-wrap-feature">
            <h3 className="touritem-feature__name"> <CountertopsIcon style={{fontSize:30}}/>  Bàn</h3>
            {!tables && (
              <div className="touritem-feature__table-size feature-bold">
                Chưa có thông tin bàn
              </div>
            )}
            {tables &&
              tables.map((table, index) => (
                <div className="touritem-feature__table " key={index}>
                  <div className="touritem-feature__table-name feature-bold">
                    Tên: {table.name}
                  </div>
                  <div className="touritem-feature__table-size feature-bold">
                    Size: {table.size}
                  </div>
                  <div className="touritem-feature__table-floor feature-bold">
                    Tầng: {table.floor}
                  </div>
                  <div className="touritem-feature__table-detail feature-bold">
                    Chi tiết: {table.detail}
                  </div>
                  <div className="touritem-feature__table-price feature-bold">
                    Giá: {table.price} đ
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* ---- */}

        {/* Đánh giá */}

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
              Viết đánh giá
            </Button>
          </Stack>

          <h3 className="touritem-feature__name">Đánh giá - từ khách hàng</h3>
          {comments &&
            comments.map((comment, index) => (
              <Comment
                key={index}
                star={comment.star}
                imagesReview={comment.imagesReview}
                comment={comment.comment}
                avatar={comment.avatar}
                nameUser={comment.nameUser}
              />
            ))}
          {comments.length === 0 && <h3>Chưa có đánh giá nào</h3>}
        </div>

        {/* ---- */}
      </div>
      {openRating && <Vote handleClose={togglePopup} idTour={id} />}
    </div>
  );
}

export default TourItem;

import React, { useState, useEffect } from "react";
import Head from "../../components/Head/Head";
import TextField from "@mui/material/TextField";
import { Carousel, ScrollingCarousel } from "@trendyol-js/react-carousel";
import CardImage from "../../components/CardImage/CardImage";
import "./TourItem.css";
import Comment from "./Comment/Comment";
import Header from "../../components/Header/Header";
import { Link, useLocation } from "react-router-dom";
import callApi from "../../api/apiService";
import Vote from "./Vote/Vote";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

function TourItem() {
  const [tour, setTour] = useState({});
  const [image, setImage] = useState([]);
  const [openRating, setOpenRating] = useState(false);
  const [comments,setComments] = useState([]);
  const [images,setImages] = useState([])
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
  }
  useEffect(() => {
    callApi(`tour/getOneTour?id=${id}`, "GET")
      .then((res) => {
        setImage(res.data.data.imagesTour);
        setTour(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getComment()
    // const interval=setInterval(()=>{
    //   getComment();
    //  },1000)
       
       
    //  return()=>clearInterval(interval)
  },[])
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
        <div className="touritem__content-wrap">
          <div className="touritem__content-wrap-info">
            <h2 className="touritem__name">{tour.name}</h2>
            <div className="touritem__place">
              <i class="fas fa-map-marker-alt"></i>
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
            />

            <div className="touritem__content-booking-vehicle">
              Tổng tiền: 200,000đ
            </div>
            <Link to="/payment">
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
                <i class="fas fa-wifi"></i> Wifi
              </div>
              <div className="touritem-feature__item">
                <i class="fas fa-tv"></i> Tivi
              </div>

              <div className="touritem-feature__item">
                <i class="fas fa-fan"></i> Air conditioner
              </div>
            </div>
          </div>
          <div className="touritem__content-wrap-feature-item">
            <div className="touritem-feature__name__desc">Tiện ích bếp</div>
            <div className="touritem-feature__list">
              <div className="touritem-feature__item">
                <i class="fas fa-wifi"></i> Wifi
              </div>
              <div className="touritem-feature__item">
                <i class="fas fa-tv"></i> Tivi
              </div>

              <div className="touritem-feature__item">
                <i class="fas fa-fan"></i> Air conditioner
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
          <h3 className="touritem-feature__name">Khách sạn</h3>

          <Carousel show={2.5} slide={2} swiping={true} transition={0.5}>
            <div class="touritem__some__hotel-container">
              <a href="#" class="touritem__some__hotel-link">
                <img
                  src="../images/apartment_1_1625465608.jpg"
                  alt=""
                  class="touritem__some__hotel-img"
                />
                <p class="touritem__some__hotel-label">
                  VI VU NGOẠI THÀNH HÀ NỘI
                </p>
                <p class="touritem__some__hotel-decs">
                  Trải nghiệm không gian thoáng đãng cho chuyến đi ngay gần Hà
                  Nội
                </p>
              </a>
            </div>

            <div class="touritem__some__hotel-container">
              <a href="#" class="touritem__some__hotel-link">
                <img
                  src="../images/apartment_1_1625465608.jpg"
                  alt=""
                  class="touritem__some__hotel-img"
                />
                <p class="touritem__some__hotel-label">
                  VI VU NGOẠI THÀNH HÀ NỘI
                </p>
                <p class="touritem__some__hotel-decs">
                  Trải nghiệm không gian thoáng đãng cho chuyến đi ngay gần Hà
                  Nội
                </p>
              </a>
            </div>

            <div class="touritem__some__hotel-container">
              <a href="#" class="touritem__some__hotel-link">
                <img
                  src="../images/apartment_1_1625465608.jpg"
                  alt=""
                  class="touritem__some__hotel-img"
                />
                <p class="touritem__some__hotel-label">
                  VI VU NGOẠI THÀNH HÀ NỘI
                </p>
              </a>
            </div>
          </Carousel>
        </div>

        {/* ---- */}

        {/* Tabel */}

        <div className="touritem__content-wrap-feature">
          <h3 className="touritem-feature__name">Bàn</h3>
          <div className="touritem-feature__table">
            <div className="touritem-feature__table-name">Tên: A-3</div>
            <div className="touritem-feature__table-size">Size: 1</div>
            <div className="touritem-feature__table-floor">Tầng: 1</div>
            <div className="touritem-feature__table-detail">
              Chi tiết: Bàn ăn vừa dành cho 1 người
            </div>
            <div className="touritem-feature__table-price">Giá: 750000đ</div>
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
                marginBottom: "80px"
              }}
              onClick={() => {
                setOpenRating(!openRating);
              }}
            >
              Viết đánh giá
            </Button>
          </Stack>

          <h3 className="touritem-feature__name">Đánh giá - từ khách hàng</h3>
          {comments.map((comment,index)=>(

            <Comment key={index} star = {comment.star} imagesReview = {comment.imagesReview} comment={comment.comment}/>
          ))
          }
        </div>

        {/* ---- */}
      </div>
      {openRating && <Vote handleClose={togglePopup} idTour={id} />}
    </div>
  );
}

export default TourItem;

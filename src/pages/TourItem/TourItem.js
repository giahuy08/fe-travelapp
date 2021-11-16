import React from "react";
import Head from "../../components/Head/Head";
import TextField from "@mui/material/TextField";
import { Carousel } from "@trendyol-js/react-carousel";
import CardImage from "../../components/CardImage/CardImage";
import "./TourItem.css";
import Comment from "./Comment/Comment"
import Header from "../../components/Header/Header";

function TourItem() {
  return (
    <div>
      <Header />
      <div className="touritem__content">
        <div className="touritem__content-slider">
          <Carousel show={2.5} slide={2} swiping={true} transition={0.5}>
            <div className="touritem__content-slider-item">
              <img
                src="../images/apartment_1_1614660728.jpg"
                alt=""
                className="touritem__content-slider-img"
              />
            </div>
            <div className="touritem__content-slider-item">
              <img
                src="../images/apartment_2_1614588617.jpg"
                alt=""
                className="touritem__content-slider-img"
              />
            </div>
            <div className="touritem__content-slider-item">
              <img
                src="../images/apartment_2_1614588617.jpg"
                alt=""
                className="touritem__content-slider-img"
              />
            </div>
            <div className="touritem__content-slider-item">
              <img
                src="../images/apartment_2_1614588617.jpg"
                alt=""
                className="touritem__content-slider-img"
              />
            </div>
            <div className="touritem__content-slider-item">
              <img
                src="../images/apartment_2_1614588617.jpg"
                alt=""
                className="touritem__content-slider-img"
              />
            </div>
            <div className="touritem__content-slider-item">
              <img
                src="../images/apartment_2_1614588617.jpg"
                alt=""
                className="touritem__content-slider-img"
              />
            </div>
          </Carousel>
        </div>
        <div className="touritem__content-wrap">
          <div className="touritem__content-wrap-info">
            <h3 className="touritem__name">
              Hanoi Home 3 - Beautiful apartment for you (no. 22) - miễn phí xe đạp
            </h3>
            <div className="touritem__place">
              <i class="fas fa-map-marker-alt"></i>
              Tây Hồ, Hà Nội, Vietnam
            </div>
            <div className="touritem__detail">
              Căn hộ nằm ở một vị trí lý tưởng, nơi này là một con phố đông đúc
              của cộng đồng nước ngoài. Có rất nhiều nhà hàng, quán bar, quán cà
              phê, phòng tập thể dục, tất cả đều được làm cho người nước ngoài.
              Khu vực xung quanh có nhiều cảnh quan đẹp như Hồ Kiếm, Hồ Trúc
              Bạch, Chùa Quán Thành, Sông Hồng, Làng hoa Quang An, Làng hoa Nhật
              Tân và đặc biệt là Hồ Tây rộng lớn, rộng lớn, nơi bạn có thể đi xe
              đạp ( miễn phí) quanh Hồ và uống cà phê dọc đường.
            </div>
          </div>

          <div className="touritem__content-wrap-booking">
            <div className="touritem__content-booking-price">
              690,000đ / 1 ngày
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

            <button className="touritem__content-booking-btn">Đặt ngay</button>
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
            <div className="touritem-feature-price">690,000đ / 1 ngày</div>
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
            <div className="touritem-feature__table-name">
              Tên: A-3
            </div>
            <div className="touritem-feature__table-size">
              Size: 1
            </div>
            <div className="touritem-feature__table-floor">
              Tầng: 1
            </div>
            <div className="touritem-feature__table-detail">
              Chi tiết: Bàn ăn vừa dành cho 1 người
            </div>
            <div className="touritem-feature__table-price">
                Giá: 750000đ
            </div>
           </div>
        </div>

        {/* ---- */}

        {/* Đánh giá */}

        <div className="touritem__content-wrap-feature">
           <h3 className="touritem-feature__name">Đánh giá</h3>
           <Comment id="1"/>
         
        </div>
      {/* ---- */}
      </div>
    </div>
  );
}

export default TourItem;

import React from "react";
import "./homepage.css";
import Head from "../../components/Head/Head";
import CardImage from "../../components/CardImage/CardImage";
import Foot from "../../components/Foot/Foot";
function HomePage() {
  return (
    <div className="home">
      <Head />
      <div className="home__body">
        <div className="home__slider">
          <div className="home__slider-container">
            <a href="#" class="home__slider-link">
              <img
                src="/images/slider1.png"
                alt=""
                className="home__slider-img home__slider-img--animation"
              />
            </a>
          </div>

          <div class="home__content grid wide">
            <div class="home__content__container mt-55">
              <h3 class="home__content__container-heading mb-18">
                Chào mừng đến với Travel
              </h3>
              <div class="home__content__container-desc mb-10">
                Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa
                trên Travel
              </div>
              <span class="home__content__container-auth">
                <a href="#" class="home__content__container-auth-link">
                  Đăng nhập
                </a>
                hoặc
                <a href="#" class="home__content__container-auth-link">
                  Đăng ký
                </a>
                để trải nghiệm
              </span>
            </div>
          </div>

          <div class="home__content  grid wide">
            <div class="home__content__container mt-50">
              <h4 class="home__content__container-heading mb-18">
                Địa điểm nổi bật
              </h4>
              <div class="home__content__container-desc">
                Bắt đầu chuyến hành trình của bạn
              </div>
            </div>
          </div>

          <div className="home__pro_place_wrapper">
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
            <CardImage />
          </div>

          <div class="home__content grid wide">
            <div class="home__content__container mt-50">
              <h4 class="home__content__container-heading mb-18">
                Ưu đãi độc quyền
              </h4>
              <div class="home__content__container-desc">
                Chỉ có tại Luxstay, hấp dẫn và hữu hạn, book ngay!
              </div>
            </div>
          </div>
          {/* Discover */}

          <div class="home_some__idea-container-box">
            <div class="home__some__idea">
              <div class="home__some__idea-container">
                <a href="#" class="home__some__idea-link">
                  <img
                    src="./images/apartment_1_1625465608.jpg"
                    alt=""
                    class="home__some__idea-img"
                  />
                  <p class="home__some__idea-label">VI VU NGOẠI THÀNH HÀ NỘI</p>
                  <p class="home__some__idea-decs">
                    Trải nghiệm không gian thoáng đãng cho chuyến đi ngay gần Hà
                    Nội
                  </p>
                </a>
              </div>

              <div class="home__some__idea-container">
                <a href="#" class="home__some__idea-link">
                  <img
                    src="./images/apartment_1_1614660728.jpg"
                    alt=""
                    class="home__some__idea-img"
                  />
                  <p class="home__some__idea-label">
                    HÀ NỘI NỘI THÀNH LÃNG MẠN
                  </p>
                  <p class="home__some__idea-decs">
                    Không gian lãng mạn dành cho cặp đôi tại trung tâm Hà Nội
                  </p>
                </a>
              </div>

              <div class="home__some__idea-container">
                <a href="#" class="home__some__idea-link">
                  <img
                    src="./images/apartment_2_1614588617.jpg"
                    alt=""
                    class="home__some__idea-img"
                  />
                  <p class="home__some__idea-label">vũng tàu biệt thự hồ bơi</p>
                  <p class="home__some__idea-decs">
                    Không gian lãng mạn dành cho cặp đôi tại trung tâm Hà Nội
                  </p>
                </a>
              </div>

              <div class="home__some__idea-container">
                <a href="" class="home__some__idea-link">
                  <img
                    src="./images/apartment_2_1615794965.jpg"
                    alt=""
                    class="home__some__idea-img"
                  />
                  <p class="home__some__idea-label">Sài Gòn cần là có ngay</p>
                  <p class="home__some__idea-decs">
                    Những căn homestay có 01 phòng ngủ tại Sài Gòn có thể đặt
                    nhanh chóng
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* GUIDE */}
          <div class="home__home__content grid wide">
            <div class="home__content__container mt-50">
              <h4 class="home__content__container-heading mb-18">
                Hướng dẫn sử dụng
              </h4>
              <div class="home__content__container-desc">
                Đặt chỗ nhanh, thanh toán đơn giản, sử dụng dễ dàng
              </div>
            </div>
          </div>

          <div class="home__guide">
            <div class="home__guide-wrap">
              <div class="home__guide-item">
                <a href="" class="home__guide-item-link">
                  <img
                    src="./images/guide1.jpg"
                    alt=""
                    class="home__guide-item-img"
                  />
                </a>
              </div>

              <div class="home__guide-item">
                <a href="" class="home__guide-item-link">
                  <img
                    src="./images/guide2.jpg"
                    alt=""
                    class="home__guide-item-img"
                  />
                </a>
              </div>

              <div class="home__guide-item">
                <a href="" class="home__guide-item-link">
                  <img
                    src="./images/guide3.jpg"
                    alt=""
                    class="home__guide-item-img"
                  />
                </a>
              </div>

              <div class="home__guide-item">
                <a href="" class="home__guide-item-link">
                  <img
                    src="./images/guide4.jpg"
                    alt=""
                    class="home__guide-item-img"
                  />
                </a>
              </div>

              <div class="home__guide-item">
                <a href="home__guide-item-link">
                  <img
                    src="./images/guide5.jpg"
                    alt=""
                    class="home__guide-item-img"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Dowload */}

          <div class="download__app mt-50">
            <div class="grid wide">
              <div class="download__app_wrap">
                <div class="col l-6 m-12">
                  <div class="download__app-logo">
                    <img src="./images/logo.png" alt="" className="download__app-logo-img" />
                  </div>
                  <div class="download__app-heading">
                    TÌM KIẾM CHỖ Ở GIÁ TỐT NHẤT
                  </div>
                  <div class="download__app-decs">
                    TRAVEL hiện là nền tảng đặt tour trực tuyến tại Việt Nam.
                    Đồng hành cùng chúng tôi, bạn có những chuyến đi mang đầy
                    trải nghiệm. Với TRAVEL, việc đặt tour trở nên nhanh
                    chóng, thuận tiện và dễ dàng.
                  </div>
                  <div class="download__app-place">
                    <div class="download__app-qr">
                      <img
                        src="./images/qr-code.png"
                        alt=""
                        class="download__app-qr-img"
                      />
                    </div>
                    <div class="download__app-mobile">
                      <div class="download__app-mobile-container">
                        <a href="" class="download__app-mobile-link">
                          <img
                            src="./images/google-play.svg"
                            alt=""
                            class="download__app-mobile-img mb-36"
                          />
                        </a>
                        <a href="" class="download__app-mobile-link">
                          <img
                            src="./images/apple-store.svg"
                            alt=""
                            class="download__app-mobile-img"
                          />
                        </a>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div class="col l-6 m-12">
                  <div class="download__app-home">
                    <img
                      src="./images/phone.png"
                      alt=""
                      class="download__app-home-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>


            <Foot/>

        </div>
      </div>
    </div>
  );
}

export default HomePage;

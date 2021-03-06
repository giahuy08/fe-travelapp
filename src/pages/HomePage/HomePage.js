import React, { useState, useEffect } from "react";
import "./homepage.css";
import Head from "../../components/Head/Head";
import CardImage from "../../components/CardImage/CardImage";
import Foot from "../../components/Foot/Foot";
import callApi from "../../api/apiService";
import { Link } from "react-router-dom";
import Discount from "../../components/Discount/Discount";
function HomePage() {
  const [sea, setSeas] = useState([]);
  const [highland, setHighLands] = useState([]);
  const [others, setOthers] = useState([]);
  const [alltours, setTours] = useState([]);
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    callApi(`tour/getAllTour?skip=1&limit=4`, "GET").then((res) => {
      console.log(res.data.data);
      setTours(res.data.data);
    });
    callApi(`tour/findAllTourByCategory?category=1`, "GET").then((res) => {
      console.log(res.data.data);
      setSeas(res.data.data);
    });
    callApi(`tour/findAllTourByCategory?category=2`, "GET").then((res) => {
      console.log(res.data.data);
      setHighLands(res.data.data);
    });
    callApi(`tour/findAllTourByCategory?category=0`, "GET").then((res) => {
      console.log(res.data.data);
      setOthers(res.data.data);
    });

    callApi(`discount/getAllDiscount`, "GET").then((res) => {
      console.log(res.data.data);
      setDiscounts(res.data.data);
    });
  }, []);

  return (
    <>
      <div className="home">
        <Head />

        <div className="home__body">
          <div className="home__slider">
            <div className="home__slider-container">
              <Link to="#" className="home__slider-link">
                <img
                  src="/images/slider1.png"
                  alt=""
                  className="home__slider-img home__slider-img--animation"
                />
              </Link>
            </div>

            <div className="home__content grid wide">
              <div className="home__content__container mt-55">
                <h3 className="home__content__container-heading mb-18">
                  Chào mừng đến với Travel
                </h3>

                <div className="home__content__container-desc mb-10">
                  Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa
                  trên Travel
                </div>
                <span className="home__content__container-auth">
                  <Link
                    to="/login"
                    className="home__content__container-auth-link"
                  >
                    Đăng nhập
                  </Link>
                  hoặc
                  <Link
                    href="/sign-up"
                    className="home__content__container-auth-link"
                  >
                    Đăng ký
                  </Link>
                  để trải nghiệm
                </span>
              </div>
            </div>

            <div className="home__content  grid wide">
              <div className="home__content__container mt-50">
                <h4 className="home__content__container-heading mb-18">
                  Địa điểm nổi bật
                </h4>
                <div className="home__content__container-desc">
                  Bắt đầu chuyến hành trình của bạn
                </div>
              </div>
            </div>

            <div className="home__pro_place_wrapper">
              {/* <Carousel show={2.5} slide={2} swiping={true}> */}

              <CardImage
                link="/tour?category=1"
                name="Biển - Đảo"
                numbers={sea.length}
                image="/images/biendep.jpg"
              />

              <CardImage
                link="/tour?category=2"
                name="Vùng cao"
                numbers={highland.length}
                image="/images/vungcao.jpg"
              />
              <CardImage
                link="/tour?category=0"
                name="Khác"
                numbers={others.length}
                image="/images/dulichkhac.jpg"
              />
              {/* </Carousel> */}
            </div>

            <div className="home__content grid wide">
              <div className="home__content__container mt-50">
                <h4 className="home__content__container-heading mb-18">
                  Mã giảm giá
                </h4>
                <div className="home__content__container-desc">
                  Chỉ có tại TRAVEL, các tour ưu đãi hãy nhập ngay!
                </div>
              </div>
            </div>
            <div className="discount-banner">
              {/* Discover */}
              {discounts &&
                discounts.map(function (discount, index) {
                  var date = new Date();
                  var dateEnd = new Date(discount.endDiscount);

                
               
                  if (date < dateEnd) {
                    return (
                      <Discount
                        key={index}
                        code={discount.code}
                        discount={discount.discount}
                        name={discount.nameTour}
                      />
                    );
                  }
                })}
            </div>

            <div className="home__content grid wide">
              <div className="home__content__container mt-50">
                <h4 className="home__content__container-heading mb-18">
                  Ưu đãi độc quyền
                </h4>
                <div className="home__content__container-desc">
                  Chỉ có tại TRAVEL, hấp dẫn và hữu hạn, book ngay!
                </div>
              </div>
            </div>

            <div className="home_some__idea-container-box">
              <div className="home__some__idea">
                {alltours &&
                  alltours.map((tour, index) => {
                    return (
                      <Link
                        key={index}
                        to={{
                          pathname: `/tour-item`,
                          state: {
                            id: tour._id,
                          },
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="home__some__idea-container" key={index}>
                          <Link to="#" className="home__some__idea-link">
                            <img
                              src={tour.imagesTour[0]}
                              alt=""
                              className="home__some__idea-img"
                            />
                          </Link>
                          <div className="home__some__idea-info">
                            <div className="home__some__idea-label">
                              {tour.name}
                            </div>
                            <div className="home__some__idea-decs">
                              {tour.detail}
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>

            {/* GUIDE */}
            <div className="home__home__content grid wide">
              <div className="home__content__container mt-50">
                <h4 className="home__content__container-heading mb-18">
                  Hướng dẫn sử dụng
                </h4>
                <div className="home__content__container-desc">
                  Đặt chỗ nhanh, thanh toán đơn giản, sử dụng dễ dàng
                </div>
              </div>
            </div>

            <div className="home__guide">
              <div className="home__guide-wrap">
                <div className="home__guide-item">
                  <Link to="" className="home__guide-item-link">
                    <img
                      src="./images/guide1.jpg"
                      alt=""
                      className="home__guide-item-img"
                    />
                  </Link>
                </div>

                <div className="home__guide-item">
                  <Link to="" className="home__guide-item-link">
                    <img
                      src="./images/guide2.jpg"
                      alt=""
                      className="home__guide-item-img"
                    />
                  </Link>
                </div>

                <div className="home__guide-item">
                  <Link to="" className="home__guide-item-link">
                    <img
                      src="./images/guide3.jpg"
                      alt=""
                      className="home__guide-item-img"
                    />
                  </Link>
                </div>

                <div className="home__guide-item">
                  <Link to="" className="home__guide-item-link">
                    <img
                      src="./images/guide4.jpg"
                      alt=""
                      className="home__guide-item-img"
                    />
                  </Link>
                </div>

                <div className="home__guide-item">
                  <Link to="home__guide-item-link">
                    <img
                      src="./images/guide5.jpg"
                      alt=""
                      className="home__guide-item-img"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Dowload */}

            <div className="download__app mt-50">
              <div className="grid wide">
                <div className="download__app_wrap">
                  <div className="col l-6 m-12">
                    <div className="download__app-logo">
                      <img
                        src="./images/logo.png"
                        alt=""
                        className="download__app-logo-img"
                      />
                    </div>
                    <div className="download__app-heading">
                      TÌM KIẾM ĐỊA ĐIỂM DU LỊCH GIÁ TỐT NHẤT
                    </div>
                    <div className="download__app-decs">
                      TRAVEL hiện là nền tảng đặt Tour trực tuyến tại Việt Nam.
                      Đồng hành cùng chúng tôi, bạn có những chuyến đi mang đầy
                      trải nghiệm. Với TRAVEL, việc đặt tour trở nên nhanh
                      chóng, thuận tiện và dễ dàng.
                    </div>
                    <div className="download__app-place">
                      <div className="download__app-qr">
                        <img
                          src="./images/qr-code.png"
                          alt=""
                          className="download__app-qr-img"
                        />
                      </div>
                      <div className="download__app-mobile">
                        <div className="download__app-mobile-container">
                          <Link to="" className="download__app-mobile-link">
                            <img
                              src="./images/google-play.svg"
                              alt=""
                              className="download__app-mobile-img mb-36"
                            />
                          </Link>
                          <Link to="" className="download__app-mobile-link">
                            <img
                              src="./images/apple-store.svg"
                              alt=""
                              className="download__app-mobile-img"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col l-6 m-12">
                    <div className="download__app-home">
                      <img
                        src="./images/phone.png"
                        alt=""
                        className="download__app-home-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Foot />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

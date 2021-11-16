import React from "react";
import "./Foot.css";
function Foot() {
  return (
    <div className="home__footer">
      <div className="home__footer__container">
        <div className="home__footer__wrap">
          <div className="home__footer__container-info">
            <div className="home__footer__info-mess">
              <div className="home__footer__info-mess-title">
                <div className="home__footer__info-mess-heading">Messenger</div>
                <div className="home__footer__info-mess-decs">
                  <a
                    href="http://m.me/luxstay"
                    className="home__footer__info-mess-decs-link"
                  >
                    http://travel.com
                  </a>
                </div>
              </div>
            </div>
            <div className="home__footer__info-phone">
              <div className="home__footer__info-phone-title">
                <div className="home__footer__info-phone-heading">Call center</div>
                <div className="home__footer__info-phone-decs">
                  <a href="tel:18006586" className="home__footer__info-phone-link">
                    18000000 (Việt Nam)
                  </a>
                  <a
                    href="tel:0889866666"
                    className="home__footer__info-phone-link"
                  >
                    000000000
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col l-2-4 m-6 hide-on-mobile">
            <div className="homestay__favourit ">
              <div className="home__footer__heading">
                TOP HOMESTAY ĐƯỢC YÊU THÍCH
              </div>
              <ul className="home__footer__list">
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Homestay Đà Lạt
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Homestay Hà Nội
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Homestay Hồ Chí Minh
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Homestay Sapa
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Homestay Vũng Tàu
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Homestay Tam Đảo
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Homestay Hội An
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Homestay Đà Nẵng
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Homestay Hạ Long
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Homestay Phan Thiết
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col l-2-4 m-4 mb-20 hide-on-mobile">
            <div className="premium__space">
              <div className="home__footer__heading">KHÔNG GIAN ƯA THÍCH</div>
              <ul className="home__footer__list">
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Căn hộ dịch vụ
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Biệt thự
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Nhà riêng
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Studio
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Travel Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col l-2-4 m-4 mb-20 hide-on-mobile">
            <div className="about__us">
              <div className="home__footer__heading">VỀ CHÚNG TÔI</div>
              <ul className="home__footer__list">
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Blog
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Điều khoản hoạt động
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="tel:18006586" className="home__footer__item-link">
                    1800 6586
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="tel:0889866666" className="home__footer__item-link">
                    +84 8898 66666
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    info@luxstay.com
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Trang thông tin dành cho chủ nhà
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Cơ hội nghề nghiệp
                  </a>
                </li>
                <li className="home__footer__item">
                  <a href="" className="home__footer__item-link">
                    Tạp chí du lịch
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="home__footer__download">
            <div className="home__footer__heading">TẢI ỨNG DỤNG LUXSTAY</div>
            <div className="home__footer__download-app">
              <div className="home__footer__download-app-qr">
                <img
                  src="./images/qr-code.png"
                  alt=""
                  className="home__footer__download-app-qr-img"
                />
              </div>
              <div className="home__footer__download-app-container">
                <div className="">
                  <a href="" className="home__footer__download-app-link">
                    <img
                      src="./assets/img/apple-store.svg"
                      alt=""
                      className="home__footer__download-app-img"
                    />
                  </a>
                </div>
                <a href="" className="home__footer__download-app-link">
                  <img
                    src="./assets/img/google-play.svg"
                    alt=""
                    className="home__footer__download-app-img"
                  />
                </a>
                <a href="" className="home__footer__download-app-link">
                  <img
                    src="./assets/img/huawei.svg"
                    alt=""
                    className="home__footer__download-app-img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

      
          <div className="home__footer_transaction">
            <div className="transaction">
              <div className="home__footer__heading">SECURE YOUR TRANSACTION</div>
              <ul className="home__footer__transaction-list">
                <li className="home__footer__transaction-item">
                  <img
                    src="../images/visa.svg"
                    alt="VISA CARD"
                    className="home__footer__transaction-img"
                  />
                </li>
                <li className="home__footer__transaction-item">
                  <img
                    src="../images/mastercard.svg"
                    alt="MASTER CARD"
                    className="home__footer__transaction-img"
                  />
                </li>
                <li className="home__footer__transaction-item">
                  <img
                    src="../images/maestro.svg"
                    alt="MAESTRO CARD"
                    className="home__footer__transaction-img"
                  />
                </li>
              </ul>
            </div>

            <div className="certification">
              <div className="home__footer__heading">CERTIFICATION</div>
              <ul className="certification-list">
                <li className="certification-item">
                  <a href="" className="certification-item-link">
                    <img
                      src="../images/bct.png"
                      alt=""
                      className="mr-20 certification-item-img"
                    />
                  </a>
                </li>
                <li className="certification-item">
                  <a href="" className="certification-item-link">
                    <img
                      src="../images/dmca.png"
                      alt=""
                      className="certification-item-img"
                    />
                  </a>
                </li>
              </ul>
            </div>

          </div>
      </div>
    </div>
  );
}

export default Foot;

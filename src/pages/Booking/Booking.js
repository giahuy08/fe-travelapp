import React from "react";
import "./Booking.css";
import { Button, Chip } from "@mui/material";
import Head from "../../components/Head/Head";
import Header from "../../components/Header/Header";
function Booking() {
  return (
    <>
      <Header />
      <div className="booking-card">
        <div className="booking-item">
          <img src="/images/bg.jpg" className="booking-item__img" alt="" />
          <div className="booking__content">
            <p className="booking__content-name">
              Căn hộ Nikko - Cuộc sống quý phái (Nikko Apartments - The Classy
              Life)
            </p>
            <p>Ngày đặt: 20/10/2021</p>
            <p className="booking-place">Địa điểm: </p>
            <p className="booking-item-price">Giá : 10000000 VND</p>
            <Chip label="Vũng tàu" color="primary" />
            <Button variant="contained" className="booking-item__btn">
              Xem chi tiết
            </Button>
          </div>
        </div>
        <div className="booking-item">
          <img src="images/bg.jpg" className="booking-item__img"  alt=""/>
          <div className="booking__content">
            <p className="booking__content-name">
              Căn hộ Nikko - Cuộc sống quý phái (Nikko Apartments - The Classy
              Life)
            </p>
            <p>Ngày đặt: 20/10/2021</p>
            <p className="booking-place">Địa điểm: </p>
            <p className="booking-item-price">Giá : 10000000 VND</p>
            <Chip label="Vũng tàu" color="primary" />
            
            <Button variant="contained" className="booking-item__btn">
              Xem chi tiết
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;

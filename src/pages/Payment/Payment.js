import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Header from "../../components/Header/Header";
import MoneyIcon from "@mui/icons-material/Money";
import callApi from "../../api/apiService";
import {
  useParams,
  useLocation,
  Redirect,
  Link,
  useHistory,
} from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Message from "../../components/Message/Message";
import "./Payment.css";
function Payment() {
  const [tour, setTour] = useState();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [images, setImages] = useState([]);
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [errorCode, setErrorCode] = useState("");
  const [success, setSuccess] = React.useState(false);
  const [helperText, setHelperText] = React.useState(
    "Vui lòng chọn hình thức thanh toán"
  );
  const { id } = useParams();
  const location = useLocation();
  const code = location.state.code;
    // Hiển thị ngày đi
  const date = new Date(location.state.date).toLocaleString().slice(10,20).toString();
  const datadaystart = new Date(location.state.date).toISOString().slice(0, 10)

  const historyback = useHistory();
  const date_format = location.state.date

  const timeTour = location.state.time.toString();

  // Lấy số ngày
  var numbers = [];
  timeTour.replace(/(\d[\d\.]*)/g, function( x ) { var n = Number(x); if (x == n) { numbers.push(x); }  })
  var maxInNumbers = Math.max.apply(Math, numbers);


  console.log(maxInNumbers) 
  const dayend = new Date(date_format.getTime() + maxInNumbers * 24*60*60*1000);
  const datadayend = new Date(dayend).toISOString().slice(0, 10)

  console.log(datadayend)
  // Hiển thị ngày về
  const formatDayEnd = new Date(dayend).toLocaleString().slice(10,20).toString()
  console.log(formatDayEnd) 

  useEffect(async () => {
    await callApi(`tour/getOneTour?id=${id}`, "GET")
      .then((res) => {
        setImages(res.data.data.imagesTour);
        setTour(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };
  const bookTourPayment = (type) => {
    let data;
    
    data = {
      idTour: id,
      codediscount: code,
      typePayment: type,
      startDate:datadaystart
      
    };
    callApi(`booktour/bookTourPayment`, "POST", data)
      .then((res) => {
        console.log(res.data.data);
        if (res.data.data) {
          window.open(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        if (err.response.data.message === "Code Discount doesn't exist") {
          setErrorCode("Code không phù hợp");
          setHelperText("Code không phù hợp");
        }
        if (err.response.data.message === "The tour is already booked") {
          setErrorCode("Tour đã book vui lòng vào history để thanh toán");
          setHelperText("Tour đã book vui lòng vào history để thanh toán");
        }
      });
  };
  const bookTourCash = () => {
    let data;
    if (code != "") {
      data = {
        idTour: id,
        codediscount: code,
        startDate:datadaystart
      };
    } else {
      data = {
        idTour: id,
        startDate:datadaystart
      };
    }
    callApi(`booktour/bookTour`, "POST", data)
      .then((res) => {
        setNotify({
          isOpen: true,
          message: "Đặt tour thành công vào history để xem",
          type: "success",
        });
        setTimeout(function() {

          historyback.push("/booktour");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        if (err.response.data.message === "Code Discount doesn't exist") {
          setErrorCode("Code không phù hợp");
          setHelperText("Code không phù hợp");
        }
        if (err.response.data.message === "The tour is already booked") {
          setErrorCode("Tour đã book vui lòng vào history để thanh toán");
          setHelperText("Tour đã book vui lòng vào history để thanh toán");
        }
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "") {
      setHelperText("Please select an option.");
      setError(true);
    }
    if (value === "cash") {
      bookTourCash();

      setError(true);
    }
    if (value === "vnpay") {
      bookTourPayment("2");
      setError(true);
    }

    if (value === "paypal") {
      bookTourPayment("1");
      setError(true);
    }
  };
  return (
    <div className="payment__container">
      <Header />
      <span
        onClick={() => {
          historyback.goBack();
        }}
        style={{
          cursor: "pointer",
          fontSize: 15,
          margin: "80px 10px 0px 10px",
          display: "block",
          padding: "10px",
          color: "#fe5a2d",
        }}
      >
        <ArrowBackIosIcon style={{ fontSize: "20px", marginBottom: "-4px" }} />
        <ArrowBackIosIcon
          style={{
            fontSize: "20px",
            marginBottom: "-4px",
            marginLeft: "-10px",
          }}
        />
        Quay lại
      </span>
      <div className="payment__wrapper">
        <div className="payment__header">
          <h3 className="payment__header-title">Thanh toán</h3>
          <p className="payment__guide">Vui lòng chọn phương thức thanh toán</p>
          <div className="payment__type">
            <form onSubmit={handleSubmit}>
              <FormControl
                sx={{ m: 3 }}
                component="fieldset"
                error={error}
                variant="standard"
              >
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={value}
                  onChange={handleRadioChange}
                >
                  <div className="payment__wrap-control">
                    <FormControlLabel
                      value="cash"
                      control={<Radio />}
                      label="Thanh toán bằng tiền mặt"
                      className="payment-control"
                    />
                    <MoneyIcon
                      className="payment-control-icon"
                      style={{ color: "green" }}
                    />
                  </div>
                  <div className="payment__wrap-control">
                    <FormControlLabel
                      value="vnpay"
                      control={<Radio />}
                      label="Thanh toán với VNPAY"
                      className="payment-control"
                    />
                    <img
                      src="../images/vnpay.png"
                      alt=""
                      className="payment-control-img"
                    />
                  </div>

                  <div className="payment__wrap-control">
                    <FormControlLabel
                      value="paypal"
                      control={<Radio />}
                      label="Thanh toán với PAYPAL"
                      className="payment-control"
                    />
                    <img
                      src="../images/paypal.png"
                      alt=""
                      className="payment-control-img-paypal"
                    />
                  </div>
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button
                  sx={{ mt: 1, mr: 1 }}
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: "#fe5a2d" }}
                >
                  Xác nhận hình thức thanh toán
                </Button>
              </FormControl>
            </form>
          </div>
        </div>
        {tour && (
          <div className="payment__tour-info">
            <div className="payment__tour-info-head">
              <div className="payment__tour-info-left">
                <div className="payment__tour-name">{tour.name}</div>
                <div className="payment__tour-place">
                  <i className="fas fa-map-marker-alt"></i>
                  {tour.place}
                </div>
              </div>
              {console.log("img" + tour.imagesTour[0])}
              <img src={images[0]} alt="" className="payment__tour-img" />
            </div>
            <div className="payment__tour-price-wrap">
              <div className="payment__tour-title">Giá tour </div>
              <div className="payment__tour-price">{(tour.payment).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
            </div>

            <div className="payment__tour-price-wrap">
              <div className="payment__tour-title">Ngày đi</div>
              <div className="payment__tour-price">{datadaystart}</div>
            </div>

            <div className="payment__tour-price-wrap">
              <div className="payment__tour-title">Ngày về</div>
              <div className="payment__tour-price">{datadayend}</div>
            </div>
            {code && (
              <>
                <div className="payment__tour-code">
                  <div className="payment__tour-price-code">
                    <div className="payment__tour-title ">Mã giảm giá</div>
                    <div className="payment__tour-price ">{code}</div>
                  </div>
                  <div className="payment__tour-price payment__text">
                    {errorCode}
                  </div>
                </div>
              </>
            )}

            <div className="payment__tour-price-wrap">
              <div className="payment__tour-title payment__text">Tổng tiền</div>
              <div className="payment__tour-price payment__text">
               {(tour.payment).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}
              </div>
            </div>
            <div className="payment__term">
              <b>Chính sách hủy phòng Linh hoạt</b> : Miễn phí hủy tour trong
              vòng 48h sau khi đặt phòng thành công và trước 1 ngày so với thời
              gian check-in. Sau đó, hủy phòng trước 1 ngày so với thời gian
              check-in, được hoàn lại 100% tổng số tiền đã trả (trừ phí dịch vụ)
            </div>
          </div>
        )}
      </div>
      <Message notify={notify} setNotify={setNotify} />
    </div>
  );
}

export default Payment;

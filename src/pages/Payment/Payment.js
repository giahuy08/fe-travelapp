import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Header from "../../components/Header/Header";
import MoneyIcon from "@mui/icons-material/Money";
import "./Payment.css";
function Payment() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Vui lòng chọn hình thức thanh toán");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   
     if(value==="") {
      setHelperText("Please select an option.");
      setError(true);
    }
  };
  return (
    <div className="payment__container">
      <Header />
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
                      value="best"
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
                      value="worst"
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
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="contained">
                  Xác nhận hình thức thanh toán
                </Button>
              </FormControl>
            </form>
          </div>
        </div>

        <div className="payment__tour-info">
          <div className="payment__tour-info-head">
            <div className="payment__tour-info-left">
              <div className="payment__tour-name">
                999 CONDOTEL Mường Thanh Viễn Triều - Căn hộ sang trọng nhìn ra
                biển
              </div>
              <div className="payment__tour-place">
                <i className="fas fa-map-marker-alt"></i> 
                   Nha Trang, Khánh Hòa,
                Vietnam
              </div>
            </div>

            <img
              src="../images/location_4_1559786177.png"
              alt=""
              className="payment__tour-img"
            />
          </div>
          <div className="payment__tour-price-wrap">
            <div className="payment__tour-title">Giá tour </div>
            <div className="payment__tour-price">2,198,000₫</div>
          </div>

          <div className="payment__tour-price-wrap">
            <div className="payment__tour-title payment__text">Tổng tiền</div>
            <div className="payment__tour-price payment__text">2,008,000₫</div>
          </div>
          <div className="payment__term">
            <b>Chính sách hủy phòng Linh hoạt</b> : Miễn phí hủy phòng trong
            vòng 48h sau khi đặt phòng thành công và trước 1 ngày so với thời
            gian check-in. Sau đó, hủy phòng trước 1 ngày so với thời gian
            check-in, được hoàn lại 100% tổng số tiền đã trả (trừ phí dịch vụ)
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

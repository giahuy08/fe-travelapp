import { useEffect } from "react";

import callApi from "../../api/apiService";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Bill.css";

export default function Bill() {
  const GetURLParameter = (sParam) => {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    for (var i = 0; i < sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split("=");
      if (sParameterName[0] == sParam) {
        return sParameterName[1];
      }
    }
  };
  const url = window.location.search.substring(1);
  console.log(GetURLParameter("vnp_PayDate"))
  console.log(url)
  useEffect(() => {
    if (GetURLParameter("price") != null) {
      console.log('hello')
      callApi(`booktour/paymentPayPal?${url}`, "GET")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err)
        });
    }
     if(GetURLParameter("vnp_PayDate")!=null) {
      callApi(`booktour/paymentVNPay?${url}`, "GET")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err)
        });
    }
  }, []);
  return (
    <div className="bill-wrapper">
      <div className="bill-bg-wrap">
        <img src="../images/bill.png" alt="" className="bill-bg" />

        <Link to="/booktour" className="bill-link">
          <Button variant="contained" color="success" className="bill-btn">
            Xem tour đã đặt
          </Button>
        </Link>
      </div>
    </div>
  );
}

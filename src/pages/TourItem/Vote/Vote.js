import { auto } from "async";
import React, { useState } from "react";
import callApi from "../../../api/apiService";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
// import Notification from "../../Notification/Notification";
import { styled } from "@mui/material/styles";
import "./Vote.css";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Input = styled("input")({
  display: "none",
});
function Vote(props) {
  const [comment, setComment] = useState();

  const [files, setFiles] = useState();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [value, setValue] = React.useState(2);
  const onChangeInput = (e) => {
    var files = e.target.files[0];
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    setFiles(files);
  };
  const buttonSubmitVoting = (e) => {
    e.preventDefault();
    const vote = {
      idTour: props.idTour,
      star: value,
      comment: comment,
      ImagesReview: files,
    };
    let data = new FormData();
    data.append("idTour", props.idTour);
    data.append("star", value);
    data.append("comment", comment);
    data.append("ImagesReview", files);

    console.log(vote);
    callApi(`reviewtour/createReviewTour`, "POST", data)
      .then((res) => {
        console.log(res);

        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div style={styles.wrapper}>
        <div style={styles.rating}>
          <div style={styles.feedback}>
            <span className="close" onClick={props.handleClose}>
              x
            </span>
            <div>
              {/* <h1>{props.name}</h1> */}
              <h2>Đánh giá tour du lịch này như thế nào ?</h2>
            </div>
            <Typography
              component="legend"
              style={{ marginTop: "20px" }}
            ></Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />

            <div style={styles.wrap}>
              <div>Nhận xét của bạn khóa học này như thế nào ?</div>
              <textarea
                style={{ resize: "none" }}
                placeholder="Viết đánh giá"
                style={styles.textarea}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />

              {files && (
                <img
                  className="vote-file-preview"
                  src={URL.createObjectURL(files)}
                  alt=""
                />
              )}

              <div style={styles.listButton}>
                <label htmlFor="icon-button-file">
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    onChange={onChangeInput}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>

                <Button onClick={buttonSubmitVoting} style={styles.buttonvote}>
                  Đánh giá
                </Button>
                {/* <Button variant="outlined" color="error" style={styles.buttonquit} onClick={props.handleClose}>
                  Thoát
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Notification notify={notify} setNotify={setNotify} /> */}
    </>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    background: "#00000050",
    width: "100%",
    height: "100vh",
    top: 0,
    left: 0,
    zIndex: 100,
  },
  rating: {
    width: 800,
    height: 800,

    marginLeft: "-200px",
  },
  feedback: {
    display: "inline-block",
    marginLeft: 700,
    padding: "30px",
    marginTop: 100,
    backgroundColor: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    borderRadius: "10px",
    position: "relative",
  },
  wrap: {
    display: "flex",
    flexDirection: "column",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 10,
    width: 560,
    padding: 10,
    margin: "20px 0 ",
    minHeight: 60,
  },
  listButton: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 20,
  },
  buttonvote: {
    color: "#fff",
   
    borderRadius: 5,
    backgroundColor: "#FF512F",
    width: 200,
    padding: 10,
    outline: "none"
  },
  buttonquit: {
    color: "#fff",
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    backgroundColor: "red",
    width: 200,
    padding: 10,
  },
};

export default Vote;

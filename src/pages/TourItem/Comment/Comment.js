import React, { useState, useEffect } from "react";
// import Avatar from "../../../../images/avatar.png";
import "./Comment.css";
// import callApi from "../../../../api/apiService";
// import { Form } from "react-bootstrap";

// import Notification from "../../../Notification/Notification";

import Rating from "@mui/material/Rating";

function Comment(props) {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState();
  const [value, setValue] = React.useState(props.star);
  // Mở form edit
  const [dataEdit, setDataEdit] = useState();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });



  const handleOpen = () => {
    setOpen(!open);
  };

  const getIdCurrent = () => {
    // callApi(`Authentication/getUser`, "GET")
    //   .then((res) => {
    //     console.log(res);
    //     setIdUser(res.data.data.userId);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };



  useEffect(() => {
    reloadData();
    getIdCurrent();
  }, []);

  const reloadData = () => {
    // callApi(`Comment/getAllComment/` + props.idForum, "GET")
    //   .then((res) => {
    //     console.log(res);
    //     SetComment(res.data.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const editComment = (id) => {
    var data = {
      content: dataEdit,
    };
    // callApi(`Comment/updateComment/${id}`, "PUT", data)
    //   .then((res) => {
    //     console.log(res);
    //     setEdit(false);
    //     setNotify({
    //       isOpen: true,
    //       message: "Chỉnh sửa bình luận thành công",
    //       type: "success",
    //     });
    //     reloadData();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const deleteComment = (id) => {
    // callApi(`Comment/deleteComment/${id}`, "DELETE")
    //   .then((res) => {
    //     console.log(res);
    //     setNotify({
    //       isOpen: true,
    //       message: "Đã xóa bình luận",
    //       type: "success",
    //     });
    //     reloadData();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const buttonAnswer = (e) => {
    e.preventDefault();

    var data = {
      idForum: props.idForum,
      content: answer,
    };

    console.log(data);
    if (localStorage.getItem("accessToken") != null) {
      // callApi(`Comment/createComment`, "POST", data)
      //   .then((res) => {
      //     console.log(res);
      //     setOpen(!open);
      //     setAnswer("");
      //     // window.location.reload()
      //     reloadData();
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    } else {
      setNotify({ isOpen: true, message: "Bạn chưa đăng nhập", type: "error" });
    }
  };

  return (
    <>
     
      <>
        <div className="comment-card">
          <div className="comment-card__header">
            <div className="comment-card__info">
              {props.avatar === null && (
              <img
                src="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"
                className="comment-card__img"
              />
               )}

              {props.avatar !== null && ( 
               <img src={props.avatar} className="comment-card__img" />
               )}

              <div className="comment-card__name">
                <div className="comment-card__name-label">{props.nameUser}</div>
                <div className="comment-card__name-username">
                  {/* {item.user.displayName} */}
                </div>
              </div>
            </div>

            <div className="comment-card__date">
              <Rating name="read-only" value={value} readOnly />
            </div>
            {/* {item.idUser === idUser && ( */}
            {/* <div className="comment-update-icons">
              <EditIcon
                onClick={() => {
                  setEdit(!edit);
                  // setDataEdit(item.content)
                  // setIdCommentCurrent(item.id)
                }}
                style={{ cursor: "pointer", fontSize: 20 }}
              />
              <DeleteIcon
                onClick={() => {
                  // deleteComment(item.id);
                }}
                style={{ cursor: "pointer", fontSize: 20 }}
              />
            </div> */}
            {/* )} */}
          </div>
           
          <div className="comment-card__body">
            {/* <div className="comment-card__body-content">{item.content}</div> */}
            <div className="comment-card__body-content">{props.comment}</div>
            {
              props.imagesReview && props.imagesReview.map((image,index)=>(
                
               
                <img key={index} className="comment-img" src={image} alt="" />
                
              ))
            }
          </div>
        </div>

      </>

    </>
  );
}

export default Comment;

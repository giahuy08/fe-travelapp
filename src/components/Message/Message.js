import * as React from "react";
import Stack from "@mui/material/Stack";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Message(props) {
  const [open, setOpen] = React.useState(props.open);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(!open);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      
      <Snackbar open={open}  onClose={handleClose}  anchorOrigin={{ vertical:'bottom',horizontal:'right' }}>
        <Alert onClose={handleClose} severity={props.type} sx={{ width: "100%" }}>
          {props.message}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert> */}
      {/* <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </Stack>
  );
}

export default Message;

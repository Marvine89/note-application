import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import { getShowSnackBar } from "../../redux/modules/modal/selectors";
import { showSnackBar } from "../../redux/modules/modal/actions";

export const SnackBar: React.FC = () => {
  const dispatch = useDispatch();
  const snackBar = useSelector(getShowSnackBar);
  if (!snackBar || !snackBar.open) return null;

  const handleClose = () => {
    dispatch(showSnackBar({ open: false }));
  };

  return (
    <Snackbar open={snackBar.open} autoHideDuration={6000}>
      <Alert onClose={handleClose} severity={snackBar.type}>
        {snackBar.message}
      </Alert>
    </Snackbar>
  );
};

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

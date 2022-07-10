// testing purposes
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { useNavigate } from "react-router-dom";
//hooks!
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// material ui components
import { Paper, Typography, Button } from "@material-ui/core";

//icons
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

// actions
import { endPatientToUpdate } from "../../actions/patient";

// styles
import useStyles from "./styles";

export const Header = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  let navigate = useNavigate();

  const patientToUpdate = useAppSelector(
    (state) => state.patients.patientToUpdate
  );

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("minaDoc-app"))
  );
  const doctor = user.result;

  const { t } = useTranslation();

  return (
    <Paper className={classes.paper} elevation={3} title="header">
      <Button
        className={classes.arrow}
        onClick={() => navigate(-1)}
        title="arrow"
      >
        <BsFillArrowLeftSquareFill size="30" />
      </Button>
      <Typography
        component={Link}
        to="/dashboard"
        style={{ textDecoration: "none", color: "black" }}
        className={classes.title}
        variant="h4"
        title="drName"
      >
        Dr. {doctor.firstName.toUpperCase()} {doctor.lastName}
      </Typography>
      <div className={classes.actions} title="actions">
        <Button
          className={classes.btnadd}
          varient="contained"
          size="small"
          onClick={() =>
            patientToUpdate
              ? dispatch(endPatientToUpdate(patientToUpdate.patientId))
              : dispatch(endPatientToUpdate(0))
          }
          component={Link}
          to="/home/add"
        >
          {t("Header.1")}
        </Button>
      </div>
    </Paper>
  );
};

export default Header;

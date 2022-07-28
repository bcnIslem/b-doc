// hooks!
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import { useTranslation } from "react-i18next";

// actions
import { LOGOUT } from "../../constants/actiontypes.js";

// material components
import { Grid, Paper, Typography } from "@material-ui/core";

// image for the logo
import ProDoc from "../../assets/ProDoc.jpg";

// icons
import { MdSpaceDashboard } from "react-icons/md";
import { RiLogoutBoxRFill, RiHome4Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosHelpCircle } from "react-icons/io";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgMenuLeft, CgProfile } from "react-icons/cg";

// styles
import useStyles from "./styles";

// notyifications
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Language from "../language/Language.jsx";

toast.configure();

const LeftNave = () => {
  const pathname = window.location.pathname;

  const notifyLogout = () => {
    toast.success("Logout Seccessfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("minaDoc-app"))
  );

  const doc = user.result;

  const logout = () => {
    dispatch({ type: LOGOUT });
    notifyLogout();
    navigate("/login");
    setUser(null);
  };

  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const { t } = useTranslation();
  return (
    <>
      <Grid
        className={`${classes.menubtn} ${classes.hidemenubtn}`}
        onClick={handleMenu}
      >
        {open ? <CgMenuLeft size="24" /> : <HiMenuAlt1 size="24" />}
      </Grid>
      <Paper
        elevation={3}
        className={
          open ? `${classes.paper}` : `${classes.paper} ${classes.hide}`
        }
      >
        <Grid className={classes.top}>
          <Grid className={classes.app}>
            <Grid item className={classes.gridOne}>
              <Link to="/">
                <img
                  src={ProDoc}
                  style={{
                    borderRadius: "10px",
                    boxShadow: "2px 2px 6px black",
                  }}
                  alt="ProDoc Logo"
                  width="40px"
                  height="40px"
                />
              </Link>
            </Grid>
            <Typography className={classes.typo} variant="h6">
              ProDoc
            </Typography>
          </Grid>

          <Grid className={classes.userName}>
            <Paper className={classes.circle}>
              <Typography variant="h6">
                {doc.firstName[0].toUpperCase()}
              </Typography>
              <Typography variant="h6">
                {doc.lastName[0].toUpperCase()}
              </Typography>
            </Paper>
            <Typography className={classes.typo} variant="body1">
              {doc.userName}
            </Typography>
          </Grid>
        </Grid>

        <Grid className={classes.stat}>
          <Paper className={`${classes.numberPatient}`}>
            <Language />
          </Paper>

          <Paper className={classes.number}>
            <Grid>
              <Typography className={classes.typo} variant="body2">
                {moment().format("LT")}
              </Typography>
              <Typography className={classes.typo} variant="body2">
                {moment().format("L")}
              </Typography>
            </Grid>
          </Paper>
        </Grid>

        <Grid className={classes.menu}>
          <Link style={{ textDecoration: "none" }} to="/home">
            <div className={classes.links}>
              <RiHome4Fill size="25" />
              <Typography className={classes.item} variant="body1">
                {t("LeftNav.1")}
              </Typography>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/dashboard">
            <div
              className={`${
                pathname === "/dashboard"
                  ? `${classes.linksSelected}`
                  : `${classes.links}`
              }`}
            >
              <MdSpaceDashboard size="25" />
              <Typography className={classes.item} variant="body1">
                {t("LeftNav.2")}
              </Typography>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/profile">
            <div className={classes.links}>
              <CgProfile size="25" />
              <Typography className={classes.item} variant="body1">
                Profile
              </Typography>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/settings">
            <div className={classes.links}>
              <IoSettingsSharp size="25" />
              <Typography className={classes.item} variant="body1">
                {t("LeftNav.3")}
              </Typography>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/help">
            <div className={classes.links}>
              <IoIosHelpCircle size="25" />
              <Typography className={classes.item} variant="body1">
                {t("LeftNav.4")}
              </Typography>
            </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/">
            <div className={classes.links} onClick={logout}>
              <RiLogoutBoxRFill size="25" />
              <Typography className={classes.item} variant="body1">
                {t("LeftNav.5")}
              </Typography>
            </div>
          </Link>
        </Grid>
        <Grid className={classes.developer}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/services"
          >
            Services
          </Link>
          <Typography className={classes.item}>-</Typography>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/about-us"
          >
            About Us
          </Link>
          <Typography className={classes.item}>-</Typography>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/contact-us"
          >
            Contact Us
          </Link>
          <Typography className={classes.item}>-</Typography>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Typography className={classes.item}>-</Typography>
          <Link style={{ textDecoration: "none", color: "black" }} to="/qa">
            QA
          </Link>
        </Grid>
      </Paper>
    </>
  );
};

export default LeftNave;

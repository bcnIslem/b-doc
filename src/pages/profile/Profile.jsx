// hooks
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import ReactImageFileToBase64 from "react-file-image-to-base64";

// material ui components
import {
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  Container,
} from "@material-ui/core";

// actions
import {
  getPrescriptions,
  updatePrescription,
} from "../../actions/prescription";

// icons
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

// styles
import useStyles from "./styles";

const Profile = () => {
  const dispatch = useDispatch();
  const { prescriptions } = useSelector((state) => state.prescriptions);
  const classes = useStyles();
  //   const { t } = useTranslation();

  const [prescription, setPrescription] = useState({
    doctorFullName:
      prescriptions?.doctorFullName === "" ? "" : prescriptions?.doctorFullName,
    doctorSpeciality:
      prescriptions?.doctorSpeciality === ""
        ? ""
        : prescriptions?.doctorSpeciality,
    phone: prescriptions?.phone === "" ? "" : prescriptions?.phone,
    address: prescriptions?.address === "" ? "" : prescriptions?.address,
    logo: prescriptions?.logo === "" ? "" : prescriptions?.logo,
    cabinetName:
      prescriptions?.cabinetName === "" ? "" : prescriptions?.cabinetName,
    cabinetAddress:
      prescriptions?.cabinetAddress === "" ? "" : prescriptions?.cabinetAddress,
    cabinetPhone:
      prescriptions?.phone === "" ? "" : prescriptions?.cabinetPhone,
  });

  // doctor
  const handleSubmit = (e) => {
    e.preventDefault();

    const id = prescriptions?._id;
    dispatch(updatePrescription(id, prescription));
  };

  const handleLogoSubmit = (e) => {
    e.preventDefault();

    handleSubmit(e);
  };

  const handleOnCompleted = (file) => {
    setPrescription({ ...prescription, logo: file[0].base64_file });
  };

  useEffect(() => {
    dispatch(getPrescriptions());
  }, [dispatch]);

  return (
    <Container className={classes.main}>
      <Grid component={Link} to="/dashboard" className={classes.back}>
        <BsFillArrowLeftSquareFill size="35" color="#3be993" />
      </Grid>
      <Grid className={classes.container}>
        <Paper className={classes.name} elevation={3}>
          <form
            autoComplete="off"
            noValidate
            className={classes.form}
            onSubmit={handleSubmit}
          >
            <Typography variant="h5">Doctor</Typography>
            <TextField
              className={classes.textfield}
              name="doctorFullName"
              variant="outlined"
              label="Doctor Full Name"
              fullWidth
              value={prescription.doctorFullName}
              onChange={(e) =>
                setPrescription({
                  ...prescription,
                  doctorFullName: e.target.value,
                })
              }
            />

            <TextField
              className={classes.textfield}
              name="doctorSpeciality"
              variant="outlined"
              label="Doctor Speciality"
              fullWidth
              value={prescription.doctorSpeciality}
              onChange={(e) =>
                setPrescription({
                  ...prescription,
                  doctorSpeciality: e.target.value,
                })
              }
            />

            <TextField
              className={classes.textfield}
              name="phone"
              variant="outlined"
              label="phone"
              fullWidth
              value={prescription.phone}
              onChange={(e) =>
                setPrescription({ ...prescription, phone: e.target.value })
              }
            />

            <TextField
              className={classes.textfield}
              name="address"
              variant="outlined"
              label="address"
              fullWidth
              value={prescription.address}
              onChange={(e) =>
                setPrescription({ ...prescription, address: e.target.value })
              }
            />

            <Button
              type="submit"
              className={classes.btnSubmit}
              variant="contained"
              size="large"
              fullWidth
            >
              Update
            </Button>
          </form>
        </Paper>

        {/* logo */}
        <Paper className={classes.name} elevation={3}>
          <form
            autoComplete="off"
            noValidate
            className={classes.form}
            onSubmit={handleLogoSubmit}
          >
            <Typography variant="h5">Logo</Typography>
            <Paper
              style={{ width: "200px", height: "200px", margin: "20px auto" }}
            >
              <img
                src={prescriptions?.logo}
                alt="prescription logo"
                width="200px"
                height="200px"
              />
            </Paper>
            <div className={classes.folderBtn} style={{ margin: "10px" }}>
              {" "}
              <ReactImageFileToBase64
                multiple={false}
                onCompleted={handleOnCompleted}
              />
            </div>

            <Button
              type="submit"
              className={classes.btnSubmit}
              variant="contained"
              size="large"
              fullWidth
            >
              Update
            </Button>
          </form>
        </Paper>

        <Paper className={classes.name} elevation={3}>
          <form
            autoComplete="off"
            noValidate
            className={classes.form}
            onSubmit={handleSubmit}
          >
            <Typography variant="h5">Cabinet</Typography>
            <TextField
              className={classes.textfield}
              name="cabinetName"
              variant="outlined"
              label="Cabinet Name"
              fullWidth
              value={prescription.cabinetName}
              onChange={(e) =>
                setPrescription({
                  ...prescription,
                  cabinetName: e.target.value,
                })
              }
            />

            <TextField
              className={classes.textfield}
              name="cabinetAddress"
              variant="outlined"
              label="Cabinet Address"
              fullWidth
              value={prescription.cabinetAddress}
              onChange={(e) =>
                setPrescription({
                  ...prescription,
                  cabinetAddress: e.target.value,
                })
              }
            />

            <TextField
              className={classes.textfield}
              name="cabinetPhone"
              variant="outlined"
              label="Cabinet Phone"
              fullWidth
              value={prescription.cabinetPhone}
              onChange={(e) =>
                setPrescription({
                  ...prescription,
                  cabinetPhone: e.target.value,
                })
              }
            />

            <Button
              type="submit"
              className={classes.btnSubmit}
              variant="contained"
              size="large"
              fullWidth
            >
              Update
            </Button>
          </form>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Profile;

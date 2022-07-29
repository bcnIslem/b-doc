// hooks
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { useTranslation } from "react-i18next";

// material ui components
import { Container, Paper, Grid, Typography, Button } from "@material-ui/core";

// components
import Loading from "../../components/loading/Loading";
import Header from "../../components/header/Header";

import TreatmentComponent from "./TreatmentComponent";
import CheckUpComponent from "./CheckUpComponent";

// actions
import {
  getPatient,
  patientToCheckUp,
  patientToAddTreatment,
  patientToAddMedicalFolder,
} from "../../actions/patient";
import { getAllCheckUps } from "../../actions/checkUp";
import { getAllMedicalFolders } from "../../actions/medicalFolder";

// styles
import useStyles from "./styles";
import MedicalFolderComponent from "./MedicalFolderComponent";

const Patient = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const classes = useStyles();

  const id = location.pathname.split("/")[3];

  const { patient } = useSelector((state) => state.patients);
  const { checkUps } = useSelector((state) => state.checkUps);
  const { treatments } = useSelector((state) => state.treatments);
  const { medicalFolders } = useSelector((state) => state.medicalFolder);

  useEffect(() => {
    dispatch(getPatient(id));
    dispatch(getAllMedicalFolders(id));
    dispatch(getAllCheckUps());
  }, [id, dispatch]);

  if (!patient) return <Loading />;

  const handleAddCheckUp = () => {
    dispatch(patientToCheckUp(patient, navigate));
  };
  const handleAddTreatment = () => {
    dispatch(patientToAddTreatment(patient, navigate));
  };
  const handleAddMedicalFolder = () => {
    dispatch(patientToAddMedicalFolder(patient, navigate));
  };

  return (
    <Container title="patientPage">
      <Header />

      <Paper className={classes.btnPaper}>
        <Button
          size="small"
          className={classes.btn}
          onClick={handleAddMedicalFolder}
        >
          {t("PatientDetails.7")}
        </Button>
        <Button size="small" className={classes.btn} onClick={handleAddCheckUp}>
          {t("PatientDetails.1")}
        </Button>
        <Button
          size="small"
          className={classes.btn}
          onClick={handleAddTreatment}
        >
          {t("PatientDetails.2")}
        </Button>
      </Paper>

      <Paper className={classes.paper} elevation={3}>
        <Grid className={classes.grid} container>
          <Grid className={classes.griditem} item>
            <Typography className={classes.title} variant="h6">
              {t("Home.1")}:{" "}
            </Typography>
            <Typography className={classes.typo} variant="body1">
              {patient.fullName}
            </Typography>
          </Grid>
          <Grid className={classes.griditem} item>
            <Typography className={classes.title} variant="h6">
              {t("Home.2")}:{" "}
            </Typography>
            <Typography className={classes.typo} variant="body1">
              {patient.phone}
            </Typography>
          </Grid>
          <Grid className={classes.griditem} item>
            <Typography className={classes.title} variant="h6">
              {t("Home.3")}:{" "}
            </Typography>
            <Typography className={classes.typo} variant="body1">
              {patient.age}
            </Typography>
          </Grid>
          <Grid className={classes.griditem} item>
            <Typography className={classes.title} variant="h6">
              {t("Home.4")}:{" "}
            </Typography>
            <Typography className={classes.typo} variant="body1">
              {patient.sex}
            </Typography>
          </Grid>
          <Grid className={classes.griditem} item>
            <Typography className={classes.title} variant="h6">
              {t("PatientDetails.3")}:{" "}
            </Typography>
            <Typography className={classes.typo} variant="body1">
              {moment(patient.createdAt).format("YYYY-MM-DD")}
            </Typography>
          </Grid>
          <Grid className={classes.griditem} item>
            <Typography className={classes.title} variant="h6">
              {t("PatientDetails.4")}:{" "}
            </Typography>
            <Typography className={classes.typo} variant="body1">
              {moment(patient.updatedAt).format("YYYY-MM-DD")}
            </Typography>
          </Grid>
          <Grid className={classes.griditem} item>
            <Typography className={classes.title} variant="h6">
              {t("Home.5")}:{" "}
            </Typography>
            <Typography className={classes.typo} variant="body1">
              {patient.description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.foldercontent} elevation={6}>
        <Typography variant="h6">Medical Folders</Typography>
        <Grid className={classes.foldertable}>
          {!medicalFolders?.length ? (
            <Loading />
          ) : (
            medicalFolders
              ?.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1))
              .map((medicalFolder) => {
                if (patient._id !== medicalFolder.patientId) {
                  return null;
                } else {
                  return (
                    <Paper
                      className={classes.folder}
                      elevation={6}
                      key={medicalFolder._id}
                    >
                      <MedicalFolderComponent
                        item={medicalFolder}
                        key={medicalFolder._id}
                      />
                    </Paper>
                  );
                }
              })
          )}
        </Grid>
      </Paper>

      <Paper className={classes.content} elevation={6}>
        <Grid className={classes.table}>
          <Typography variant="h6">{t("PatientDetails.5")}</Typography>
          {!checkUps?.length ? (
            <Loading />
          ) : (
            checkUps
              ?.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1))
              .map((checkUp) => {
                if (patient.fullName !== checkUp.patientFullName) {
                  return null;
                } else {
                  return (
                    <Paper
                      className={classes.chechup}
                      elevation={6}
                      key={checkUp._id}
                    >
                      <CheckUpComponent item={checkUp} key={checkUp._id} />
                    </Paper>
                  );
                }
              })
          )}
        </Grid>
        <Grid className={classes.table}>
          <Typography variant="h6">{t("PatientDetails.6")}</Typography>
          {!treatments?.length ? (
            <Loading />
          ) : (
            treatments
              ?.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1))
              .map((treat) => {
                if (patient.fullName !== treat.patientName) {
                  return null;
                } else {
                  return (
                    <Paper
                      className={classes.treatment}
                      elevation={6}
                      key={treat._id}
                    >
                      <TreatmentComponent item={treat} key={treat._id} />
                    </Paper>
                  );
                }
              })
          )}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Patient;

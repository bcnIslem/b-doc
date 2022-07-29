// hooks
import { Paper, Typography, Grid, Container, Button } from "@material-ui/core";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// actions
import { getAllCheckUps } from "../../actions/checkUp";
import { getAllTreatments } from "../../actions/treatment";
import {
  endPatientToUpdate,
  getPatients,
  getStatistic,
  patientToAddTreatment,
  patientToUpdated,
} from "../../actions/patient";

// components
import LeftNave from "../../components/leftNav/LeftNave";
import Calender from "../../components/calender/Calender";
import Loading from "../../components/loading/Loading";
import PatientChart from "../../components/patientChart/PatientChart";
import PatientChartCercle from "../../components/patientChartCercle/PatientChartCercle";

// icons
import {
  RiHeartAddFill,
  RiHealthBookFill,
  RiEmotionUnhappyFill,
} from "react-icons/ri";
import { MdNoteAdd } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { HiEmojiHappy } from "react-icons/hi";

//styles
import useStyles from "./styles";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const classes = useStyles();

  // have treatments
  const [done, setDone] = useState([]); // no treatments
  const noTreatment = [];

  // for the patients pecked by the calender
  const [patientsDate, setPatientsDate] = useState([]);

  // staticts for chart
  const [patientsStats, setPatientsStates] = useState([]);
  const [statistic, setStatistic] = useState([
    { name: "Jan", Patients: 0 },
    { name: "Feb", Patients: 0 },
    { name: "Mar", Patients: 0 },
    { name: "Apr", Patients: 0 },
    { name: "May", Patients: 0 },
    { name: "Jun", Patients: 0 },
    { name: "Jul", Patients: 0 },
    { name: "Aug", Patients: 0 },
    { name: "Sep", Patients: 0 },
    { name: "Oct", Patients: 0 },
    { name: "Nov", Patients: 0 },
    { name: "Dec", Patients: 0 },
  ]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const data = "added patients";

  const { patients } = useSelector((state) => state.patients);
  const { checkUps } = useSelector((state) => state.checkUps);
  const { treatments } = useSelector((state) => state.treatments);

  // fiiling the missing months
  statistic.forEach((element) => {
    patientsStats.forEach((e) => {
      if (e.name === element.name) {
        element.Patients = e.Patients;
      }
    });
  });

  //left bottom paper
  // dont have treatments
  var noTreat = [];
  // [1] have treatment
  treatments.forEach((t) => {
    noTreat.push(t.patientId);
  });

  // [2] dont have treatments
  patients.forEach((p) => {
    if (!noTreat.includes(p._id)) {
      noTreatment.push(p);
    }
  });

  // @ cercle chart
  // have treatments
  patients.forEach((p) => {
    treatments.forEach((t) => {
      if (p.fullName === t.patientName) {
        if (!done.includes(p.fullName)) {
          done.push(p.fullName);
        }
      }
    });
  });

  // dont have treatments
  const undone = patients?.length - done?.length;

  // to update patients
  const handlePatientToUpdate = (item) => {
    dispatch(endPatientToUpdate());
    dispatch(patientToUpdated(item, navigate));
  };

  // to add treatment
  const handleAddTreatment = (patient) => {
    dispatch(patientToAddTreatment(patient, navigate));
  };

  useEffect(() => {
    dispatch(getPatients());
    dispatch(getAllCheckUps());
    dispatch(getAllTreatments());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getStatistic(MONTHS, setPatientsStates));
  }, [dispatch, MONTHS]);

  const { t } = useTranslation();

  return (
    <Grid className={classes.main}>
      <LeftNave />
      {/* main right */}
      <Container className={classes.mainRight}>
        {/* top right that containes the chart and the calender */}
        <Grid className={classes.right}>
          {/* the lest top that constains the total and chart */}
          <Grid className={classes.insideleft}>
            {/* the total papers */}
            <Grid className={classes.top}>
              <Paper
                className={classes.topPaper}
                elevation={3}
                component={Link}
                to="/home"
              >
                <Grid className={classes.grid}>
                  <RiHeartAddFill size="20" />
                  <Typography variant="h6">{patients?.length}</Typography>
                </Grid>
                <Grid className={classes.gridtitle}>
                  <Typography variant="body1">
                    {t("Dashboard.1")}
                    <br /> {t("Dashboard.2")}
                  </Typography>
                </Grid>
              </Paper>

              <Paper
                className={classes.topPaper}
                elevation={3}
                component={Link}
                to="/home/treatments"
              >
                <Grid className={classes.grid}>
                  <RiHealthBookFill size="20" />
                  <Typography variant="h6">{treatments?.length}</Typography>
                </Grid>
                <Grid className={classes.gridtitle}>
                  <Typography variant="body1">
                    {t("Dashboard.1")}
                    <br /> {t("Dashboard.3")}
                  </Typography>
                </Grid>
              </Paper>

              <Paper
                className={classes.topPaper}
                elevation={3}
                component={Link}
                to="/home/check-ups"
              >
                <Grid className={classes.grid}>
                  <MdNoteAdd size="20" />
                  <Typography variant="h6">{checkUps?.length}</Typography>
                </Grid>
                <Grid className={classes.gridtitle}>
                  <Typography variant="body1">
                    {t("Dashboard.1")}
                    <br /> {t("Dashboard.4")}
                  </Typography>
                </Grid>
              </Paper>
            </Grid>

            {/* waiting for the missing monthes befor render the chart */}
            {!patientsStats?.length ? (
              <Grid className={classes.loading}>
                <Loading />
              </Grid>
            ) : (
              <Grid className={classes.topChart}>
                <Grid className={classes.chart}>
                  <Paper
                    elevation={3}
                    style={{
                      borderRadius: "15px",
                    }}
                  >
                    <PatientChart data={statistic} dataKey={data} />
                  </Paper>
                </Grid>
              </Grid>
            )}
          </Grid>

          {/* the calender paper */}
          <Paper className={classes.insideright} elevation={3}>
            <Calender setPatientsDate={setPatientsDate} />
          </Paper>
        </Grid>

        {/* bottom right that contains the 3 papers */}
        <Grid className={classes.botomRight}>
          <Grid className={classes.botomRightgrid}>
            <Paper className={classes.bottonPaper} elevation={3}>
              <Grid className={classes.datepatients}>
                <Typography variant="h6">
                  {t("Dashboard.5")}: {noTreatment?.length}
                </Typography>
              </Grid>
              <Grid className={classes.scroll}>
                {!noTreatment?.length ? (
                  <Grid className={classes.loading}>
                    <HiEmojiHappy size="130" color="gray" />
                    <Typography variant="h6">ALL GOOD</Typography>
                  </Grid>
                ) : (
                  noTreatment?.sort().map((item) => (
                    <Grid className={classes.dateGrid} key={item._id}>
                      <Grid className={classes.open}>
                        <Grid
                          className={classes.dateitem}
                          onClick={() => navigate(`/home/patients/${item._id}`)}
                        >
                          <Typography
                            className={classes.datetext}
                            variant="body1"
                          >
                            {item.fullName}
                          </Typography>
                        </Grid>
                        <Grid className={classes.actions}>
                          <Button
                            className={classes.btn}
                            onClick={() => handleAddTreatment(item)}
                          >
                            Add
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))
                )}
              </Grid>
            </Paper>
            <Paper className={classes.cerclePaper} elevation={3}>
              <Typography variant="h6">{t("Dashboard.6")}</Typography>
              <Grid className={classes.color}>
                <Paper
                  style={{ backgroundColor: "#33A6FF" }}
                  elevation={3}
                  className={classes.coloritems}
                >
                  {t("Dashboard.8")}
                </Paper>
                <Paper
                  style={{ backgroundColor: "#3be993" }}
                  elevation={3}
                  className={classes.coloritems}
                >
                  {t("Dashboard.9")}
                </Paper>
                <Paper
                  style={{ backgroundColor: "#fc5a03" }}
                  elevation={3}
                  className={classes.coloritems}
                >
                  {t("Dashboard.10")}
                </Paper>
              </Grid>
              <PatientChartCercle
                patients={patients?.length}
                patientsWith={done?.length}
                patientsWithout={undone}
              />
            </Paper>

            {/* patients render with date */}
            <Paper className={classes.datePaper} elevation={3}>
              <Grid className={classes.datepatients}>
                <Typography variant="h6">
                  {t("Dashboard.7")}: {patientsDate?.length}
                </Typography>
              </Grid>
              <Grid className={classes.scroll}>
                {!patientsDate?.length ? (
                  <Grid className={classes.loading}>
                    <RiEmotionUnhappyFill size="130" color="gray" />
                    <Typography variant="h6">No Patients Today Yet!</Typography>
                  </Grid>
                ) : (
                  patientsDate?.sort().map((item) => (
                    <Grid className={classes.dateGrid} key={item._id}>
                      <Grid className={classes.open}>
                        <Grid
                          className={classes.dateitem}
                          onClick={() => navigate(`/home/patients/${item._id}`)}
                        >
                          <Typography
                            className={classes.datetext}
                            variant="body1"
                          >
                            {item.fullName}
                          </Typography>
                        </Grid>
                        <Grid className={classes.actions}>
                          <Button
                            style={{ textDecoration: "none" }}
                            onClick={() => handlePatientToUpdate(item)}
                          >
                            <AiFillEdit size="20" color="#3be993" />
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))
                )}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Dashboard;

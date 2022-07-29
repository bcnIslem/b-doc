// hooks
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";

//actions
import { getPrescriptions } from "../../actions/prescription";

// material ui components
import { Button, Container, Grid, Typography } from "@material-ui/core";

// icons
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

// print
import { useReactToPrint } from "react-to-print";

// styles
import useStyles from "./styles";

const CheckUpDetails = () => {
  const dispatch = useDispatch();
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const checkUpToPrint = useSelector((state) => state.checkUps.checkUpToPrint);
  const { prescriptions } = useSelector((state) => state.prescriptions);

  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPrescriptions());
  }, [dispatch]);
  return (
    <Container>
      <Grid className={classes.top}>
        <Grid onClick={() => navigate(-1)} className={classes.back}>
          <BsFillArrowLeftSquareFill size="35" color="#3be993" />
        </Grid>
        <Button onClick={handlePrint} className={classes.btn}>
          Print
        </Button>
      </Grid>
      <Grid className={classes.main} ref={componentRef}>
        <Grid className={classes.header}>
          <Grid>
            <Typography variant="h5" style={{ fontWeight: 600 }}>
              {prescriptions.doctorFullName}
            </Typography>
            <Typography variant="h6">
              {prescriptions.doctorSpeciality}
            </Typography>
            <Typography variant="h6">{prescriptions.phone}</Typography>
            <Typography variant="h6">{prescriptions.address}</Typography>
          </Grid>
          <Grid style={{ width: "200px", height: "200px", margin: "20px" }}>
            <img
              src={prescriptions?.logo}
              alt="prescription logo"
              width="150px"
              height="150px"
            />
          </Grid>
          <Grid>
            <Typography variant="h5" style={{ fontWeight: 600 }}>
              {prescriptions.cabinetName}
            </Typography>
            <Typography variant="h6">{prescriptions.cabinetAddress}</Typography>
            <Typography variant="h6">{prescriptions.cabinetPhone}</Typography>
          </Grid>
        </Grid>
        <Grid className={classes.patient}>
          <Typography variant="h6">
            Full Name: {checkUpToPrint.patientFullName}
          </Typography>
          <Typography variant="h6">
            date: {moment().format("YYYY-MM-DD")}
          </Typography>
        </Grid>

        <Grid className={classes.medications}>
          {checkUpToPrint.tests.map((test) => (
            <Grid className={classes.lign} key={test}>
              <Typography className={classes.medName} variant="body1">
                •{test}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckUpDetails;

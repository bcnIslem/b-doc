// hooks
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";

//actions
import { getPrescriptions } from "../../actions/prescription";

// material ui components
import {
  Button,
  Container,
  Grid,
  Typography,
  CardMedia,
} from "@material-ui/core";

// icons
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

// print
import { useReactToPrint } from "react-to-print";

// styles
import useStyles from "./styles";

const MedicalFolderDetails = () => {
  const dispatch = useDispatch();
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { medicalFolderToPrint } = useSelector((state) => state.medicalFolder);
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
            Title: {medicalFolderToPrint.title}
          </Typography>
          <Typography variant="h6">
            date: {moment().format("YYYY-MM-DD")}
          </Typography>
        </Grid>
        <Grid>
          {medicalFolderToPrint.folder[0].files.map((item) => (
            <CardMedia
              className={classes.media}
              image={item.base64_file}
              title={item.file_name}
              key={item.file_name}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MedicalFolderDetails;

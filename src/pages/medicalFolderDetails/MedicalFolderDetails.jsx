// hooks
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

const CheckUpDetails = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { medicalFolderToPrint } = useSelector((state) => state.medicalFolder);

  const classes = useStyles();
  const navigate = useNavigate();

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
        <Grid>
          <Typography variant="h5">{medicalFolderToPrint.title}</Typography>
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

export default CheckUpDetails;

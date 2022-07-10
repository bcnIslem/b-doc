// hooks
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// material ui components
import { Button, Grid, Typography } from "@material-ui/core";

// actions
import { deleteFolder, goToM } from "../../actions/medicalFolder";

// icons
import { AiFillDelete } from "react-icons/ai";

// styles
import useStyles from "./styles";

const MedicalFolderComponent = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Grid className={classes.gridaction}>
      <Grid
        className={classes.medicalFolderTopAction}
        onClick={() => dispatch(goToM(item, navigate))}
      >
        <Typography variant="h5" className={classes.graytext}>
          {moment(item.updatedAt).format("YYYY-MM-DD")}
        </Typography>
        <Grid className={classes.wrap}>
          <Typography variant="h6">{item.title}</Typography>
        </Grid>
      </Grid>
      <Button
        className={classes.action}
        onClick={() => dispatch(deleteFolder(item._id))}
      >
        <AiFillDelete size="20" color="#ff0000" />
      </Button>
    </Grid>
  );
};

export default MedicalFolderComponent;

// hooks
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// actions
import { deleteCheckUp, gotoC } from "../../actions/checkUp";

// icons
import { AiFillDelete } from "react-icons/ai";

// material ui components
import { Button, Paper, Grid, Typography } from "@material-ui/core";

// styles
import useStyles from "./styles";

const CheckUp = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const classes = useStyles();

  const deleteC = (id) => {
    dispatch(deleteCheckUp(id));
  };

  return (
    <Paper className={classes.paper}>
      <div
        className={classes.open}
        onClick={() => dispatch(gotoC(item, navigate))}
      >
        <Grid className={classes.grid}>
          <Typography>{item.patientFullName}</Typography>
        </Grid>
        <Grid className={`${classes.griddesc} ${classes.hide}`}>
          <Typography className={classes.tp}>
            {item.tests.map((test) => `•${test} `)}
          </Typography>
        </Grid>
      </div>
      <div className={classes.actions}>
        <Button onClick={() => deleteC(item._id)}>
          <AiFillDelete size="20" color="red" />
        </Button>
      </div>
    </Paper>
  );
};

export default CheckUp;

// hooks
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// date range components
import { DateRange } from "react-date-range";

// m-ui components
import { Grid } from "@material-ui/core";

// date styles
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

// actions
import { getPatientsByDate } from "../../actions/patient";

// styles
import useStyles from "./styles";

const Calander = ({ setPatientsDate }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  useEffect(() => {
    dispatch(getPatientsByDate(state, setPatientsDate));
  }, [state]);

  return (
    <Grid className={classes.calender}>
      <DateRange
        className={classes.component}
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </Grid>
  );
};

export default Calander;

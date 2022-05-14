
import { DateRange } from 'react-date-range';
import {useEffect, useState} from 'react' 
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Grid } from '@material-ui/core';

import useStyles from './styles'
import { getPatientsByDate } from '../../actions/patient';
import { useDispatch } from 'react-redux';

const Calander = ({ setPatientsDate }) => {

    const dispatch = useDispatch()

    const classes = useStyles()

    const [state, setState] = useState([
    {
        startDate: new Date(),
        endDate: null,
        key: 'selection'
    }
    ]);

    useEffect(() => {

        dispatch(getPatientsByDate(state, setPatientsDate))
    }, [state])

    return (
        <Grid className={classes.calender} elevation={3}>
            <DateRange
                className={classes.component}
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
            />
        </Grid>
    );
}

export default Calander
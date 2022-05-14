
// hooks
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

// actions
import { deleteTreatment, goTo } from '../../actions/treatment'

// icons
import { AiFillDelete } from 'react-icons/ai'

// material ui components
import { Button, Paper, Grid, Typography } from '@material-ui/core'

// styles
import useStyles from './styles'

const CheckUp = ({ item }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const deleteT = (id) => {
        dispatch(deleteTreatment(id))
    }

    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
        <div  className={classes.open} onClick={() => dispatch(goTo(item, navigate))}>
        <Grid className={classes.grid}>
            <Typography>{item.patientName}</Typography>
        </Grid>
        <Grid className={`${classes.grid} ${classes.hide}`}>
            <Typography className={classes.tp}>{moment(item.createdAt).format('YYYY-MM-DD')}</Typography>
        </Grid>
        <Grid className={`${classes.griddesc} ${classes.hide}`}>
            <Typography className={classes.tp}>{item.medications.map((test) => `•${test.name} `)}</Typography>
        </Grid>
        </div>
        <div className={classes.actions}>
        <Button onClick={() => deleteT(item._id)}><AiFillDelete size="20" color='red' /></Button>
        </div>
    </Paper>
    )
}

export default CheckUp
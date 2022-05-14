
// hooks
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

// actions
import { deletedPatient, endPatientToUpdate, getPatients, patientToUpdated } from '../../actions/patient'

// icons
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

// material ui components
import { Button, Paper, Grid, Typography } from '@material-ui/core'

// styles
import useStyles from './styles'

const Patient = ({ item }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const openPatien = () => {
        navigate(`/home/patients/${item._id}`)
    }

    const handlePatientToUpdate = () => {
        dispatch(endPatientToUpdate())
        dispatch(patientToUpdated(item, navigate))
    }

    const deleteP = (id) => {
        dispatch(deletedPatient(id))
        dispatch(getPatients())
    }

    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <div  className={classes.open} onClick={openPatien}>
            <Grid className={`${classes.grid} ${classes.show}`}>
                <Typography>{item.fullName}</Typography>
            </Grid>
            <Grid className={`${classes.grid} ${classes.hide}`}>
                <Typography>{item.phone}</Typography>
            </Grid>
            <Grid className={`${classes.grid} ${classes.hide}`}>
                <Typography>{moment(item.yearOfBirth).format('YYYY-MM-DD')}</Typography>
            </Grid>
            <Grid className={`${classes.grid} ${classes.hide}`}>
                <Typography>{item.sex}</Typography>
            </Grid>
            <Grid className={`${classes.griddesc} ${classes.hide}`}>
                <Typography className={classes.tp}>{item.description}</Typography>
            </Grid>
            </div>
            <div className={classes.actions}>
            <Button onClick={handlePatientToUpdate}>< AiFillEdit size="20" color='#3be993' /></Button>
            <Button onClick={() => deleteP(item._id)}><AiFillDelete size="20" color='red' /></Button>
            </div>
        </Paper>
    )
}

export default Patient
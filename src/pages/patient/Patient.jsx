
// hooks
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import moment from 'moment'

// material ui components
import { Container, Paper, Grid, Typography, Button } from '@material-ui/core'

// components
import Loading from '../../components/loading/Loading'
import Header from "../../components/header/Header"

import TreatmentComponent from "./TreatmentComponent"
import CheckUpComponent from "./CheckUpComponent"

// actions
import { getPatient, patientToCheckUp, patientToAddTreatment } from "../../actions/patient"
import { getAllCheckUps } from "../../actions/checkUp"

// styles
import useStyles from './styles'
import { goTo } from "../../actions/treatment"

const Patient = () => {

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const classes = useStyles()

    const id = location.pathname.split('/')[3]

    const { patient } = useSelector((state) => state.patients)
    const { checkUps } = useSelector((state) => state.checkUps)
    const { treatments } = useSelector((state) => state.treatments)

    useEffect(() => {
        dispatch(getPatient(id))
        dispatch(getAllCheckUps())
    }, [id, dispatch])
    
    const color = 'lightblue'
    const type = 'bars'
    const name = 'Patient'
    const checkUpName = 'CheckUp'
    const TreatmentName = 'Treatment'

    if(!patient) return (
        <Loading color={color} type={type} name={name} />
    )

    const handleAddCheckUp = () => {
        dispatch(patientToCheckUp(patient, navigate))
    }
    const handleAddTreatment = () => {
        dispatch(patientToAddTreatment(patient, navigate))
    }

    return (
        <Container title='patientPage'>
            <Header />

            <Paper className={classes.btnPaper}>
                <Button className={classes.btn} onClick={handleAddCheckUp} >Add Check-up</Button>
                <Button className={classes.btn} onClick={handleAddTreatment}>Add Treatment</Button>
            </Paper>

            <Paper className={classes.paper} elevation={3}>
                <Grid className={classes.grid} container>
                    <Grid className={classes.griditem} item>
                        <Typography className={classes.title} variant='h6'>Full Name: </Typography>
                        <Typography className={classes.typo} variant='body1'>{patient.fullName}</Typography>
                    </Grid>
                    <Grid className={classes.griditem} item>
                        <Typography className={classes.title} variant='h6'>Phone: </Typography>
                        <Typography className={classes.typo} variant='body1'>{patient.phone}</Typography>
                    </Grid>
                    <Grid className={classes.griditem} item>
                        <Typography className={classes.title} variant='h6'>year of birth: </Typography>
                        <Typography className={classes.typo} variant='body1'>{moment(patient.yearOfBirth).format('YYYY-MM-DD')}</Typography>
                    </Grid>
                    <Grid className={classes.griditem} item>
                        <Typography className={classes.title} variant='h6'>sex: </Typography>
                        <Typography className={classes.typo} variant='body1'>{patient.sex}</Typography>
                    </Grid>
                    <Grid className={classes.griditem} item>
                        <Typography className={classes.title} variant='h6'>added: </Typography>
                        <Typography className={classes.typo} variant='body1'>{moment(patient.createdAt).format('YYYY-MM-DD')}</Typography>
                    </Grid>
                    <Grid className={classes.griditem} item>
                        <Typography className={classes.title} variant='h6'>Last visite: </Typography>
                        <Typography className={classes.typo} variant='body1'>{moment(patient.updatedAt).format('YYYY-MM-DD')}</Typography>
                    </Grid>
                    <Grid className={classes.griditem} item>
                        <Typography className={classes.title} variant='h6'>description: </Typography>
                        <Typography className={classes.typo} variant='body1'>{patient.description}</Typography>
                    </Grid>
                </Grid>
            </Paper>

            <Paper className={classes.content} elevation={6}>
                <Grid className={classes.table}>
                <Typography variant='h6'>Check-Ups</Typography>
                        {!checkUps?.length
                            ? (<Loading color={color} type={type} name={checkUpName} />)
                            : checkUps?.sort((a, b) => a.updatedAt > b.updatedAt ? -1 : 1)
                            .map(
                                (checkUp) => 
                                {
                                    if (patient.fullName !== checkUp.patientFullName ) {
                                        return null
                                        } else {
                                            return (
                                            <Paper className={classes.chechup} elevation={2} key={checkUp._id}>
                                                <CheckUpComponent item={checkUp} key={checkUp._id} />
                                            </Paper>
                                            )
                                        }
                                    }
                                    )
                                }
                </Grid>
                <Grid className={classes.table}>
                    <Typography variant='h6'>Treatments</Typography>
                        {!treatments?.length
                            ? (<Loading color={color} type={type} name={TreatmentName} />)
                            : treatments?.sort((a, b) => a.updatedAt > b.updatedAt ? -1 : 1)
                            .map(
                                (treat) => 
                                {
                                        if (patient.fullName !== treat.patientName ) {
                                            return null
                                        } else {
                                            return (
                                            <Paper className={classes.treatment} elevation={3} key={treat._id} onClick={() => dispatch(goTo(treat, navigate))}>
                                                <TreatmentComponent item={treat} key={treat._id} />
                                            </Paper>
                                            )
                                        }
                                    }
                                )
                        }
                </Grid>
            </Paper>
        </Container>
    )
}

export default Patient
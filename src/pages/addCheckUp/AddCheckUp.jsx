
// hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// actions
import { addCheckUp } from '../../actions/checkUp'
import { endAddCheckUp } from '../../actions/patient'

// components
import Header from '../../components/header/Header'

// material ui components
import { Container, Paper, Typography, TextField, Button } from '@material-ui/core'

// styles
import useStyles from './styles'

const AddCheckUp = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const classes = useStyles()

    const patientToCheckUp = useSelector((state) => state.patients.patientToAddCheckUp)

    const [checkUpData, setCheckUpData] = useState({
        patientId: '', 
        patientFullName: '', 
        tests: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        checkUpData.patientId = patientToCheckUp.patientId;
        checkUpData.patientFullName = patientToCheckUp.fullName;

        dispatch(addCheckUp(checkUpData, navigate));
        dispatch(endAddCheckUp());
    } 

    return(
        <Container>
            <Header />
            <Paper className={classes.paper} elevation={3}>
                <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                    <Typography variant='h3' className={classes.title}>Add Check-up</Typography>
                    <Typography variant='h4' >{patientToCheckUp.fullName}</Typography>
                    <TextField className={classes.textfield}
                    name='tests' 
                    variant='outlined' 
                    label='test1, test2, test3, ...'
                    fullWidth 
                    value={checkUpData.tests} 
                    onChange={(e) => setCheckUpData({ ...checkUpData, tests: e.target.value.split(',') })} />
                    <Button type="submit" className={classes.btnSubmit} variant='contained' size='large'fullWidth>Add Check-up</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default AddCheckUp
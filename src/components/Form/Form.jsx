
// hooks
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// actions
import { addPatient, updatedPatient, endPatientToUpdate } from '../../actions/patient'

// material ui components
import { Paper, Typography, TextField, Button } from '@material-ui/core'

// styles
import useStyles from './styles'

const Form = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const classes = useStyles()

  const [patientData, setPatientData] = useState({
    fullName: '', 
    phone: '', 
    yearOfBirth: '', 
    sex: '', 
    description: ''
  })

  const patientToUpdate = useSelector((state) => state.patients.patientToUpdate)

  const clear = (id) => {

    // remove from localstorage
    dispatch(endPatientToUpdate(id))

    // empty the patient object
    setPatientData({
      fullName: '', 
      phone: '', 
      yearOfBirth: '', 
      sex: '', 
      description: ''
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(patientToUpdate === 0) {

      // add patient
      dispatch(addPatient(patientData))
    } else {

      // update patient
      dispatch(updatedPatient(patientToUpdate.patientId, patientData))
      
      // calling the clear function
      clear(patientToUpdate.patientId)
    }

    // route to dashboard page
    navigate('/home')
  }

  useEffect(() => {
    if (patientToUpdate === 0) {
      setPatientData({
        fullName: '', 
        phone: '', 
        yearOfBirth: '', 
        sex: '', 
        description: ''
      })
      clear(patientToUpdate.patientId)
    } else {
      setPatientData(patientToUpdate)
    }
  },[patientToUpdate])

  return (
    <Paper className={classes.paper} elevation={3}>
      <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit} title="form">
        <Typography variant='h6' className={classes.title}>{patientToUpdate ? `Updating "${patientToUpdate.fullName}"`: 'Add Patient'}</Typography>
        <TextField className={classes.textfield}
        name='fullName' 
        variant='outlined' 
        label='Full Name'
        fullWidth 
        value={patientData.fullName} 
        onChange={(e) => setPatientData({ ...patientData, fullName: e.target.value })} />
        <TextField className={classes.textfield}
        name='phone' 
        variant='outlined' 
        label='Phone' 
        fullWidth 
        value={patientData.phone} 
        onChange={(e) => setPatientData({ ...patientData, phone: e.target.value })} />
        <TextField className={classes.textfield}
        name='yearOfBirth' 
        variant='outlined' 
        label='Year Of Birth [2022-04-22]'
        fullWidth 
        value={patientData.yearOfBirth} 
        onChange={(e) => setPatientData({ ...patientData, yearOfBirth: e.target.value })} />
        <TextField className={classes.textfield}
        name='sex' 
        variant='outlined' 
        label='Sex' 
        fullWidth 
        value={patientData.sex} 
        onChange={(e) => setPatientData({ ...patientData, sex: e.target.value })} />
        <TextField className={classes.textfield}
        name='description' 
        variant='outlined' 
        label='Description'
        multiline
        rows={3}
        fullWidth 
        value={patientData.description} 
        onChange={(e) => setPatientData({ ...patientData, description: e.target.value })} />
        <Button type="submit" className={classes.btnSubmit} variant='contained' size='large'fullWidth>{patientToUpdate ? `Update Patient`: 'Add Patient'}</Button>
        <Button variant='contained' className={classes.btnClear} size='small' fullWidth onClick={clear}>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form
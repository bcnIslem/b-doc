
// hooks
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

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
    age: '', 
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
      age: '', 
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
        age: '', 
        sex: '', 
        description: ''
      })
      clear(patientToUpdate.patientId)
    } else {
      setPatientData(patientToUpdate)
    }
  },[patientToUpdate])

  const { t } = useTranslation()

  return (
    <Paper className={classes.paper} elevation={3}>
      <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit} title="form">
        <Typography variant='h6' className={classes.title}>{patientToUpdate ? `${t('Form.1')} "${patientToUpdate.fullName}"`: `${t('Form.2')}`}</Typography>
        <TextField className={classes.textfield}
        name='fullName' 
        variant='outlined' 
        label={t('Form.3')}
        fullWidth 
        value={patientData.fullName} 
        onChange={(e) => setPatientData({ ...patientData, fullName: e.target.value })} />
        <TextField className={classes.textfield}
        name='phone' 
        variant='outlined' 
        label={t('Home.2')}
        fullWidth 
        value={patientData.phone} 
        onChange={(e) => setPatientData({ ...patientData, phone: e.target.value })} />
        <TextField className={classes.textfield}
        name='age' 
        variant='outlined' 
        label='age'
        fullWidth 
        value={patientData.age} 
        onChange={(e) => setPatientData({ ...patientData, age: e.target.value })} />
        <TextField className={classes.textfield}
        name='sex' 
        variant='outlined' 
        label={t('Form.4')}
        fullWidth 
        value={patientData.sex} 
        onChange={(e) => setPatientData({ ...patientData, sex: e.target.value })} />
        <TextField className={classes.textfield}
        name='description' 
        variant='outlined' 
        label={t('Form.5')}
        multiline
        rows={3}
        fullWidth 
        value={patientData.description} 
        onChange={(e) => setPatientData({ ...patientData, description: e.target.value })} />
        <Button type="submit" className={classes.btnSubmit} variant='contained' size='large'fullWidth>{patientToUpdate ? `${t('Form.1')} Patient`: `${t('Form.2')}`}</Button>
        <Button variant='contained' className={classes.btnClear} size='small' fullWidth onClick={clear}>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form
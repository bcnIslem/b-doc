
import { FETCH_ALL, FETCH_PATIENT, FETCH_TO_UPDATE_PATIENT, FETCH_BY_SEARCH, END_PATIENT_TO_UPDATE, START_LOADING, END_LOADING, CREATE_P, UPDATE_P, DELETE_P, END_ADD_CHECKUP, FETCH_TO_ADD_CHECKUP, FETCH_TO_ADD_TREATMENT, END_ADD_TREATMENT, FETCH_STATISTIC, END_ADD_MEDICAL_FOLDER, FETCH_TO_ADD_MEDICAL_FOLDER } from '../constants/actiontypes.js'

import * as api from '../api/index.js'
import moment from 'moment'

// notyifications
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const notifyAdd = () => {
    toast.success(`Patient Added Seccessfully`, { position: toast.POSITION.TOP_CENTER })
}

const notifyUpdate = () => {
    toast.info('patient updated seccessfully', { position: toast.POSITION.TOP_CENTER })
}

const notifyDelete = () => {
    toast.warn('patient deleted seccessfully', { position: toast.POSITION.TOP_CENTER })
}

const notifyError = (error) => {
    toast.error(`${error.message}`, { position: toast.POSITION.TOP_CENTER })
}

// get all patients
export const getPatients = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPatients()
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        notifyError(error)
    }
}
// get all by date
export const getPatientsByDate = (date, setPatientsDate) => async (dispatch) => {

    try {
        var array = []
        let uniqueChars = []

        const { data } = await api.fetchPatients()
        data.forEach(d => {
            if (moment(d.createdAt).format('YYYY-MM-DD') === moment(date[0].endDate).format('YYYY-MM-DD')) {
                array.push(d)

            } else if(moment(d.createdAt).format('YYYY-MM-DD') >= moment(date[0].startDate).format('YYYY-MM-DD') && moment(d.createdAt).format('YYYY-MM-DD') < moment(date[0].endDate).format('YYYY-MM-DD')) {
                array.push(d)

            }
        })

        // remove duplicate object
        uniqueChars = [...new Set(array)];
        
        setPatientsDate(uniqueChars)
    } catch (error) {
        notifyError(error)
    }
}

// get patient by Search
export const getSearchPatient = (searchFullName) => async (dispatch) => {
    try {
        const { data }= await api.fetchPatientBySearch(searchFullName)
        dispatch({ type: FETCH_BY_SEARCH, payload: data })
    } catch (error) {
        notifyError(error)
    }
}

// get patient
export const getPatient = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        const { data } = await api.fetchPatient(id)

        dispatch({ type: FETCH_PATIENT, payload: { patient: data } })
        dispatch({ type: END_LOADING })
    } catch (error) {
        notifyError(error)
    }
}

// add patient
export const addPatient = (patient) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        const { data } = await api.createPatient(patient)

        dispatch({ type: CREATE_P, payload: data })
        dispatch({ type: END_LOADING })
        notifyAdd()
    } catch (error) {
        notifyError(error)
    }
}

// update patient
export const updatedPatient = (id, patient) => async (dispatch) => {
    try {
        const { data } = await api.updatePatient(id, patient)

        dispatch({ type: UPDATE_P, payload: data })
        notifyUpdate()
    } catch (error) {
        notifyError(error)
    }
}

// delete patient
export const deletedPatient = (id) => async (dispatch) => {
    try {
        await api.deletePatient(id)

        dispatch({ type: DELETE_P, payload: id })
        notifyDelete()
    } catch (error) {
        notifyError(error)
    }
}

// add patient in localstorage
export const patientToUpdated = (item, router) => async (dispatch, getState) => {
    dispatch({
        type: FETCH_TO_UPDATE_PATIENT,
        payload: {
            patientId: item._id,
            fullName: item.fullName,
            phone: item.phone,
            age: item.age,
            sex: item.sex,
            description: item.description,
        }
    })
    localStorage.setItem('patient-to-update', JSON.stringify(getState().patients.patientToUpdate))
    router('/home/add')
}

// delete patient from localstorage
export const endPatientToUpdate = () => async(dispatch, getState) => {
    dispatch({
        type: END_PATIENT_TO_UPDATE,
    })

    localStorage.setItem('patient-to-update', JSON.stringify(getState().patients.patientToUpdate))
}

// add patient in localstorage to add checkUp
export const patientToCheckUp = (patient, router) => async (dispatch, getState) => {
    dispatch({
        type: FETCH_TO_ADD_CHECKUP,
        payload: {
            patientId: patient._id,
            fullName: patient.fullName,
        }
    })
    localStorage.setItem('patient-to-add-check-up', JSON.stringify(getState().patients.patientToAddCheckUp))
    router('/home/patients/add/checkUp')
}

// delete check-up patient from localstorage
export const endAddCheckUp = () => async(dispatch, getState) => {
    dispatch({
        type: END_ADD_CHECKUP,
    })

    localStorage.setItem('patient-to-add-check-up', JSON.stringify(getState().patients.patientToAddCheckUp))
}
// add patient in localstorage to add treatment
export const patientToAddTreatment = (patient, router) => async (dispatch, getState) => {
    dispatch({
        type: FETCH_TO_ADD_TREATMENT,
        payload: {
            patientId: patient._id,
            fullName: patient.fullName,
        }
    })
    localStorage.setItem('patient-to-add-treatment', JSON.stringify(getState().patients.patientToAddTreatment))
    router('/home/patients/add/treatment')
}

// delete treatment patient from localstorage
export const endAddTreatment = () => async(dispatch, getState) => {
    dispatch({
        type: END_ADD_TREATMENT,
    })

    localStorage.setItem('patient-to-add-treatment', JSON.stringify(getState().patients.patientToAddTreatment))
}

// add patient in localstorage to add medical folder
export const patientToAddMedicalFolder = (patient, router) => async (dispatch, getState) => {
    dispatch({
        type: FETCH_TO_ADD_MEDICAL_FOLDER,
        payload: {
            patientId: patient._id,
            fullName: patient.fullName
        }
    })
    localStorage.setItem('patient-to-add-medical-folder', JSON.stringify(getState().patients.patientToAddMedicalFolder))
    router('/home/patients/add/medical-folder')
}

// delete medical folder from localstorage
export const endAddMedicalFolder = () => async(dispatch, getState) => {
    dispatch({
        type: END_ADD_MEDICAL_FOLDER,
    })

    localStorage.setItem('patient-to-add-medical-folder', JSON.stringify(getState().patients.patientToAddMedicalFolder))
}

// all patients statistic
export const getStatistic = (MONTHS, setProjectStates) => async (dispatch) => {
    try {
        const { data } = await api.patientStats()
        
        dispatch({ type: FETCH_STATISTIC, payload: data })

        data.map(item => setProjectStates(
            prev => [
                ...prev, 
                {name: MONTHS[item._id - 1], "Patients": item.total} 
            ])) 
    } catch (error) {
        notifyError(error)
    }
}
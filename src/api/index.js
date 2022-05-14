import axios from 'axios'

const API = axios.create({ baseURL: 'https://mina-doc.herokuapp.com/api' })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('minaDoc-app')) {
        req.headers.token = `Bearer ${JSON.parse(localStorage.getItem('minaDoc-app')).token}`
    }
    return req
})

// auth
// @log in
export const signIn = (formData) => API.post('/auth/login',  formData)

// @forget password and reset
export const forgetPasswordAndReset = (formData) => API.post('/auth/forget-password',  formData)
// @update name
export const updateNAme = (id, nameData) => API.patch(`/auth/update-name/${id}`,  nameData)
// @update security question
export const updateSecurityQuestion = (id, questionData) => API.patch(`/auth/update-security-question/${id}`,  questionData)
// @update password
export const updatePassword = (id, passwordData) => API.patch(`/auth/update-password/${id}`,  passwordData)

//####################################################################################################################################################

// patients
export const fetchPatients = () => API.get('/patients')

// patient
export const fetchPatient = (id) => API.get(`/patients/${id}`)

// patient by search
export const fetchPatientBySearch = (searchFullName) => API.get(`/patients/search?queryFullName=${searchFullName || 'none'}`)

export const patientStats = () => API.get('/patients/statistic')

// crud patient!
export const createPatient = (patient) => API.post('/patients', patient)
export const updatePatient = (id, patient) => API.patch(`/patients/${id}`, patient)
export const deletePatient = (id) => API.delete(`/patients/${id}`)

//####################################################################################################################################################

// check-up

// checkUps
export const fetchCheckUps = () => API.get('/check-ups')

// checkUp
export const fetchCheckUp = (id) => API.get(`/check-ups/${id}`)

// crud checkUp!
export const createCheckUp = (checkUp) => API.post('/check-ups', checkUp)
export const updateCheckUp = (id, checkUp) => API.patch(`/check-ups/${id}`, checkUp)
export const deleteCheckUp = (id) => API.delete(`/check-ups/${id}`)

//####################################################################################################################################################

// Treatments

// treatments
export const fetchTreatments = () => API.get('/treatments')

// treatment
export const fetchTreatment = (id) => API.get(`/treatments/${id}`)

// crud treatment!
export const createTreatment = (treatment) => API.post('/treatments', treatment)
export const updateTreatment = (id, treatment) => API.patch(`/treatments/${id}`, treatment)
export const deleteTreatment = (id) => API.delete(`/treatments/${id}`)
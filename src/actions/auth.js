
import { AUTH, FORGET_AND_RESET, UPDATE_D_NAME, UPDATE_D_QUESTION, UPDATE_D_PASSWORD } from '../constants/actiontypes.js'

import * as api from '../api/index.js'

// notyifications
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const notifyLogin = () => {
    toast.success('Logging in...', {
        position: "top-center",
        autoClose: 900,
    });
}
const notifyLoginSeccess = () => {
    toast.success(`welcome`, { position: toast.POSITION.TOP_CENTER })
}

const notifyReset = () => {
    toast.success('Password Reset Seccessfully', { position: toast.POSITION.TOP_CENTER })
}

const notifyUpdateName = () => {
    toast.info('name updated seccessfully', { position: toast.POSITION.TOP_CENTER })
}
const notifyUpdateQuestion = () => {
    toast.info('security question updated seccessfully', { position: toast.POSITION.TOP_CENTER })
}
const notifyUpdatePassword = () => {
    toast.info('password updated seccessfully', { position: toast.POSITION.TOP_CENTER })
}

const notifyError = (error) => {
    toast.error(`${error}`, { position: toast.POSITION.TOP_CENTER })
}

// log in 
export const signin = (formData, navigate) => async (dispatch) => {
    try {
        notifyLogin()
        const { data } = await api.signIn(formData)

        dispatch({ type: AUTH, data })
        notifyLoginSeccess()
        navigate('/dashboard')
    } catch (error) {
        notifyError(error)
    }
}


// forget password and reset
export const forgetPassword = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.forgetPasswordAndReset(formData)

        dispatch({ type: FORGET_AND_RESET, data })
        notifyReset()
        navigate('/dashboard')

    } catch (error) {
        notifyError(error.message)
    }
}

// update name
export const updatedName = (id, doctor) => async (dispatch) => {
    try {
        const { data } = await api.updateNAme(id, doctor)
        dispatch({ type: UPDATE_D_NAME, payload: data })
        notifyUpdateName()
    } catch (error) {
        notifyError(error)
    }
}

// update question
export const updatedQuestion = (id, doctor) => async (dispatch) => {
    try {
        const { data } = await api.updateSecurityQuestion(id, doctor)
        dispatch({ type: UPDATE_D_QUESTION, payload: data })
        notifyUpdateQuestion()
    } catch (error) {
        notifyError(error)
    }
}
// update password
export const updatedPassword = (id, doctor) => async (dispatch) => {
    try {
        const { data } = await api.updatePassword(id, doctor)
        dispatch({ type: UPDATE_D_PASSWORD, payload: data })
        notifyUpdatePassword()
    } catch (error) {
        notifyError(error)
    }
}
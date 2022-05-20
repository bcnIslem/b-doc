
import { START_LOADING, END_LOADING, FETCH_ALL_CHECKUPS, FETCH_CHECKUP, CREATE_C, UPDATE_C, DELETE_C, CHECKUP_TO_PRINT } from '../constants/actiontypes.js'

import * as api from '../api/index.js'

// notyifications
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const notifyAdd = () => {
    toast.success(`check-up Added Seccessfully`, { position: toast.POSITION.TOP_CENTER })
}

const notifyUpdate = () => {
    toast.info('check-up updated seccessfully', { position: toast.POSITION.TOP_CENTER })
}

const notifyDelete = () => {
    toast.warn('check-up deleted seccessfully', { position: toast.POSITION.TOP_CENTER })
}

const notifyError = (error) => {
    toast.error(`${error.message}`, { position: toast.POSITION.TOP_CENTER })
}

// add 
export const addCheckUp = (checkUp, router) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.createCheckUp(checkUp);
        dispatch({ type: CREATE_C, payload: data });
        dispatch({ type: END_LOADING });
        notifyAdd();
        router(`/home/patients/${checkUp.patientId}`)
    } catch (error) {
        notifyError(error)
    }
}

// get all
export const getAllCheckUps = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCheckUps();
        dispatch({ type: FETCH_ALL_CHECKUPS, payload: data });
    } catch (error) {
        notifyError(error)
    }
}

// get by id
export const getCheckUp = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchCheckUp(id);
        dispatch({ type: FETCH_CHECKUP, payload: { checkUp: data } });
        dispatch({ type: END_LOADING });
    } catch (error) {
        notifyError(error)
    }
}

// update
export const updateCheckUp = (id, checkUp) => async (dispatch) => {
    try {
        const { data } = await api.updateCheckUp(id, checkUp);
        dispatch({ type: UPDATE_C, payload: data });
        notifyUpdate();
    } catch (error) {
        notifyError(error);
    }
}

// delete
export const deleteCheckUp = (id) => async (dispatch) => {
    try {
        await api.deleteCheckUp(id);
        dispatch({ type: DELETE_C, payload: id });
        notifyDelete();
    } catch (error) {
        notifyError(error);
    }
}

// get by id
export const goto = (chechUp, router) => async (dispatch) => {
    try {
        dispatch({ type: CHECKUP_TO_PRINT, payload: chechUp })

        router(`/home/checkUp-details`)
    } catch (error) {
        notifyError(error)
    }
}
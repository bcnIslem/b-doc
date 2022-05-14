
import { START_LOADING, END_LOADING, FETCH_ALL_TREATMENTS, FETCH_TREATMENT, CREATE_T, UPDATE_T, DELETE_T, TREATMENT_TO_PRINT } from '../constants/actiontypes.js'

import * as api from '../api/index.js'

// notyifications
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const notifyAdd = () => {
    toast.success(`Treatment Added Seccessfully`, { position: toast.POSITION.TOP_CENTER })
}

const notifyUpdate = () => {
    toast.info('Treatment updated seccessfully', { position: toast.POSITION.TOP_CENTER })
}

const notifyDelete = () => {
    toast.warn('Treatment deleted seccessfully', { position: toast.POSITION.TOP_CENTER })
}

const notifyError = (error) => {
    toast.error(`${error.message}`, { position: toast.POSITION.TOP_CENTER })
}

// add 
export const addTreatment = (treatment, router) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.createTreatment(treatment);
        dispatch({ type: CREATE_T, payload: data });
        dispatch({ type: TREATMENT_TO_PRINT, payload: treatment})

        notifyAdd();
        router(`/home/treatment-details`)

    } catch (error) {
        notifyError(error)
    }
}


// get all
export const getAllTreatments = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTreatments();
        dispatch({ type: FETCH_ALL_TREATMENTS, payload: data });
    } catch (error) {
        notifyError(error)
    }
}

// get by id
export const getTreatment = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.fetchTreatment(id);
        dispatch({ type: FETCH_TREATMENT, payload: { treatment: data } });

        dispatch({ type: END_LOADING });
    } catch (error) {
        notifyError(error)
    }
}

// get by id
export const goTo = (treatment, router) => async (dispatch) => {
    try {
        dispatch({ type: TREATMENT_TO_PRINT, payload: treatment })

        router(`/home/treatment-details`)
    } catch (error) {
        notifyError(error)
    }
}

// update
export const updateTreatment = (id, treatment) => async (dispatch) => {
    try {
        const { data } = await api.updateTreatment(id, treatment);
        dispatch({ type: UPDATE_T, payload: data });
        notifyUpdate();
    } catch (error) {
        notifyError(error);
    }
}

// delete
export const deleteTreatment = (id) => async (dispatch) => {
    try {
        await api.deleteTreatment(id);
        dispatch({ type: DELETE_T, payload: id });
        notifyDelete();
    } catch (error) {
        notifyError(error);
    }
}
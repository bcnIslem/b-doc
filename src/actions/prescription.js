
import { START_LOADING, END_LOADING, GET_PREISCRIPTION, CREATE_PRESCRIPTION, UPDATE_PREISCRIPTION } from '../constants/actiontypes.js'

import * as api from '../api/index.js'

// notyifications
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const notifyAdd = () => {
    toast.success(`prescription Added Seccessfully`, { position: toast.POSITION.TOP_CENTER })
}

const notifyUpdate = () => {
    toast.info('prescription updated seccessfully', { position: toast.POSITION.TOP_CENTER })
}

const notifyError = (error) => {
    toast.error(`${error.message}`, { position: toast.POSITION.TOP_CENTER })
}

// add
export const createPrescription = (prescription, router) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.addPrescription(prescription);
        dispatch({ type: CREATE_PRESCRIPTION, payload: data });
        dispatch({ type: END_LOADING });

        notifyAdd();
        router(`/dashboard`);
    } catch (error) {
        notifyError(error)
    }
}

// get
export const getPrescriptions = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.getPrescription();
        let prescription = data[0]
        dispatch({ type: GET_PREISCRIPTION, payload: prescription })
        dispatch({ type: END_LOADING })
    } catch (error) {
        notifyError(error);
    }
}

// update

export const updatePrescription = (id, prescription) => async (dispatch) => {
    try {
        console.log('prescription--actions:', prescription);
        const { data } = await api.updatePrescription(id, prescription);
        dispatch({ type: UPDATE_PREISCRIPTION, payload: data });
        notifyUpdate();
    } catch (error) {
        notifyError(error);
    }
}
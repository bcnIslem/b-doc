
import { FETCH_PATIENT_MEDICAL_FOLDERS, FETCH_PATIENT_SINGLE_FOLDER, CREATE_MF, UPDATE_MF, DELETE_MF, START_LOADING, END_LOADING, MEDICAL_FOLDER_TO_PRINT } from '../constants/actiontypes.js'

import * as api from '../api/index.js'

// notifications
// notyifications
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const notifyAdd = () => {
    toast.success(`medical folder Added Seccessfully`, { position: toast.POSITION.TOP_CENTER })
}

const notifyUpdate = () => {
    toast.info('medical folder has been updated', { position: toast.POSITION.TOP_CENTER })
}

const notifyDelete = () => {
    toast.warn('medical folder has been deleted', { position: toast.POSITION.TOP_CENTER })
}

const notifyError = (error) => {
    toast.error(`${error.message}`, { position: toast.POSITION.TOP_CENTER })
}

// add medical folder to a patient
export const addMedicalFolder = (folder, router) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.addMedicalFolder(folder);
        dispatch({ type: CREATE_MF, payload: data });

        notifyAdd();
        router(`/home/patients/${folder.patientId}`)
    } catch (error) {
        notifyError(error)
    }
}

// get all medical folders of a patient
export const getAllMedicalFolders = (id) => async (dispatch) => {
    try {
        const { data } = await api.getPatientMedicalFolders(id);
        dispatch({ type: FETCH_PATIENT_MEDICAL_FOLDERS, payload: {data} });
    } catch (error) {
        notifyError(error)
    }
}

// get folder by id
export const getFolderById = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        
        const { data } = await api.getFolder(id);
        dispatch({ type: FETCH_PATIENT_SINGLE_FOLDER, payload: { folder: data } });

        dispatch({ type: END_LOADING });
    } catch (error) {
        notifyError(error)
    }
}

// update
export const updateFolder = (id, folder) => async (dispatch) => {
    try {
        const { data } = await api.updateMedicalFolder(id, folder);
        dispatch({ type: UPDATE_MF, payload: data });
        notifyUpdate();
    } catch (error) {
        notifyError(error);
    }
}

// delete
export const deleteFolder = (id) => async (dispatch) => {
    try {
        await api.deleteMedicalFolder(id);
        dispatch({ type: DELETE_MF, payload: id });
        notifyDelete();
    } catch (error) {
        notifyError(error);
    }
}

// 
export const goToM = (medicalFolder, router) => async (dispatch) => {
    try {
        dispatch({ type: MEDICAL_FOLDER_TO_PRINT, payload: medicalFolder })
        router(`/home/medical-folder-details`)
    } catch (error) {
        notifyError(error)
    }
}
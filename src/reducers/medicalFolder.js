
import { FETCH_PATIENT_MEDICAL_FOLDERS, FETCH_PATIENT_SINGLE_FOLDER, CREATE_MF, UPDATE_MF, DELETE_MF, START_LOADING, END_LOADING, MEDICAL_FOLDER_TO_PRINT } from '../constants/actiontypes.js'

const medicalFolderReducers = (state = { isLoading: true, medicalFolders: [], medicalFolderToPrint: [] }, action) => {
    switch(action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_PATIENT_MEDICAL_FOLDERS:
            return { ...state, medicalFolders: action.payload.data };
        case FETCH_PATIENT_SINGLE_FOLDER:
            return { ...state, medicalFolderr: action.payload.medicalFolder };
        case MEDICAL_FOLDER_TO_PRINT:
            return { ...state, medicalFolderToPrint: action.payload };
        case CREATE_MF:
            return { ...state, medicalFolders: [ ...state.medicalFolders, action.payload ] };
        case UPDATE_MF:
            return { ...state, medicalFolders: state.medicalFolders.map((medicalFolder) => medicalFolder._id === action.payload._id ? action.payload : medicalFolder) };
        case DELETE_MF:
            return { ...state, medicalFolders: state.medicalFolders.filter((medicalFolder) => medicalFolder._id !== action.payload) };
        default:
            return state;
    }
}

export default medicalFolderReducers;
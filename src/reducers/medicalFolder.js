
import { FETCH_PATIENT_MEDICAL_FOLDERS, FETCH_PATIENT_SINGLE_FOLDER, CREATE_MF, UPDATE_MF, DELETE_MF, START_LOADING, END_LOADING } from '../constants/actiontypes.js'

const medicalFolderReducers = (state = { isLoading: true, medicalFolders: [] }, action) => {
    switch(action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_PATIENT_MEDICAL_FOLDERS:
            return { ...state, medicalFolders: action.payload };
        case FETCH_PATIENT_SINGLE_FOLDER:
            return { ...state, medicalFolder: action.payload.medicalFolder };
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
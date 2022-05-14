
import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_PATIENT, FETCH_BY_SEARCH, FETCH_TO_UPDATE_PATIENT, END_PATIENT_TO_UPDATE, CREATE_P, UPDATE_P, DELETE_P, FETCH_TO_ADD_CHECKUP, END_ADD_CHECKUP, FETCH_TO_ADD_TREATMENT, END_ADD_TREATMENT, FETCH_STATISTIC } from '../constants/actiontypes.js'

const patientsReducers = (state = { isLoading: true, patients: [], patientToUpdate: [], patientToAddCheckUp: [], patientToAddTreatment: [], statistic: [] }, action) => {
    switch(action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return { ...state, patients: action.payload };
        case FETCH_BY_SEARCH:
            return { ...state, patients: action.payload };
            case FETCH_STATISTIC:
            return { ...state, statistic: action.payload};
        case FETCH_PATIENT:
            return { ...state, patient: action.payload.patient };
        case FETCH_TO_UPDATE_PATIENT:
            return { ...state, patientToUpdate: action.payload};
        case FETCH_TO_ADD_CHECKUP:
            return { ...state, patientToAddCheckUp: action.payload};
        case FETCH_TO_ADD_TREATMENT:
            return { ...state, patientToAddTreatment: action.payload};
        case END_PATIENT_TO_UPDATE:
            return { ...state, patientToUpdate: 0 };
        case END_ADD_CHECKUP:
            return { ...state, patientToAddCheckUp: 0 };
        case END_ADD_TREATMENT:
            return { ...state, patientToAddTreatment: 0 };
        case CREATE_P:
            return { ...state, patients: [ ...state.patients, action.payload ] };
        case UPDATE_P:
            return { ...state, patients: state.patients.map((patient) => patient._id === action.payload._id ? action.payload: patient) };
        case DELETE_P:
            return { ...state, patients: state.patients.filter((patient) => patient._id !== action.payload) };
        default:
            return state;
    }
}

export default patientsReducers;
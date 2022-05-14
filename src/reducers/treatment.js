
import { START_LOADING, END_LOADING, FETCH_ALL_TREATMENTS, FETCH_TREATMENT, CREATE_T, UPDATE_T, DELETE_T, TREATMENT_TO_PRINT } from '../constants/actiontypes.js'

const treatmentReducers = (state = { isLoading: true, treatments: [], treatmentToPrint: []}, action) => {
    switch(action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL_TREATMENTS:
            return { ...state, treatments: action.payload };
        case FETCH_TREATMENT:
            return { ...state, treatments: action.payload.checkUp };
        case TREATMENT_TO_PRINT:
            return { ...state, treatmentToPrint: action.payload };
        case CREATE_T:
            return { ...state, treatments: [ ...state.treatments, action.payload ] };
        case UPDATE_T:
            return { ...state, treatments: state.treatments.map((treatment) => treatment._id === action.payload._id ? action.payload: treatment) };
        case DELETE_T:
            return { ...state, treatments: state.treatments.filter((treatment) => treatment._id !== action.payload) };
        default:
            return state;
    }
}

export default treatmentReducers;
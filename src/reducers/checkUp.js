
import { START_LOADING, END_LOADING, FETCH_ALL_CHECKUPS, FETCH_CHECKUP, CREATE_C, UPDATE_C, DELETE_C, CHECKUP_TO_PRINT } from '../constants/actiontypes.js'

const checkUpsReducers = (state = { isLoading: true, checkUps: [], checkUpToPrint: []}, action) => {
    switch(action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL_CHECKUPS:
            return { ...state, checkUps: action.payload };
        case FETCH_CHECKUP:
            return { ...state, checkUp: action.payload.checkUp };
        case CHECKUP_TO_PRINT:
            return { ...state, checkUpToPrint: action.payload };
        case CREATE_C:
            return { ...state, checkUps: [ ...state.checkUps, action.payload ] };
        case UPDATE_C:
            return { ...state, checkUps: state.checkUps.map((checkUp) => checkUp._id === action.payload._id ? action.payload: checkUp) };
        case DELETE_C:
            return { ...state, checkUps: state.checkUps.filter((checkUp) => checkUp._id !== action.payload) };
        default:
            return state;
    }
}

export default checkUpsReducers;
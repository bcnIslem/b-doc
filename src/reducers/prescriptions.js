
import { START_LOADING, END_LOADING, GET_PREISCRIPTION, UPDATE_PREISCRIPTION, CREATE_PRESCRIPTION } from '../constants/actiontypes.js'

const prescriptionReducers = (state = { isLoading: true, prescriptions: []}, action) => {
    switch(action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case GET_PREISCRIPTION:
            return { ...state, prescriptions: action.payload };
        case CREATE_PRESCRIPTION:
            return { ...state, prescriptions: [ ...state.prescriptions, action.payload ] };
        case UPDATE_PREISCRIPTION:
            return { ...state, prescriptions: state.prescriptions._id === action.payload._id ? action.payload : state.prescriptions };
        default:
            return state;
    }
}

export default prescriptionReducers;
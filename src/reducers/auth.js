
import * as actionTypes from '../constants/actiontypes.js';

const authReducer = ( state = { authData: null }, action ) => {
    switch (action.type) {
        case actionTypes.AUTH:
            localStorage.setItem('minaDoc-app', JSON.stringify({ ...action?.data }))
            return { ...state, authData: action.data }
        case actionTypes.UPDATE_D_NAME:
            localStorage.setItem('minaDoc-app', JSON.stringify({ ...action?.payload }))
            return { ...state, authData: action.payload }
        case actionTypes.FORGET_AND_RESET:
            localStorage.setItem('minaDoc-app', JSON.stringify({ ...action?.data }))
            return { ...state, authData: action.data }
        case actionTypes.LOGOUT:
            localStorage.clear()
            return { ...state, authData: null }
        default:
            return state
    }
}

export default authReducer
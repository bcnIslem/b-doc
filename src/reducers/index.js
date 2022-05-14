import { combineReducers } from "redux"

import auth from './auth'
import patients from './patients'
import checkUps from './checkUp'
import treatments from './treatment'

export const reducers = combineReducers({ auth, patients, checkUps, treatments })
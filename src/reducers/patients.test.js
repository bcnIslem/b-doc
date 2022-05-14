
import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_PATIENT, FETCH_BY_SEARCH, FETCH_TO_UPDATE_PATIENT, END_PATIENT_TO_UPDATE, CREATE, UPDATE, DELETE } from '../constants/actiontypes.js'

import patients from './patients'

describe('Patients Reducer', () => {

    let state;
    it('Should return default state', () => {
        state = { isLoading: true, patients: [], patientToUpdate: [] };
        const newState = patients(state, {});
        expect(newState).toBe(state);
    });

    describe('Should return new state if receiving type', () => {

        const state = { isLoading: true, patients: [], patientToUpdate: [] };
        let pts = [
            {
                _id: 1,
                fullName: 'boucenina islem',
                phone: 660405837,
                yearOfBirth: '22-04-1998',
                description: 'testing some functionalities in the hands',
                sex: 'homme'
            },
            {
                _id: 2,
                fullName: 'coding wilcher',
                phone: 123456789,
                yearOfBirth: '22-04-1998',
                description: 'testing description',
                sex: 'homme'
            },
        ];
        
        it('Should return all patients', () => {
            const action = { 
                type: FETCH_ALL,
                payload: pts 
            }
            const newState = patients(state, action);
            expect(newState.patients).toEqual(pts);
        });

        it('Should return true', () => {
            const action = { 
                type: START_LOADING,
                payload: pts 
            }
            const newState = patients(state, action);
            expect(newState.isLoading).toEqual(true);
        });

        it('Should return false', () => {
            const action = { 
                type: END_LOADING,
                payload: pts 
            }
            const newState = patients(state, action);
            expect(newState.isLoading).toEqual(false);
        });

        it('Should create patirnt', () => {
            const newPatient = {
                fullName: 'new',
                phone: 123,
                yearOfBirth: '22-04-1998',
                description: 'new description',
                sex: 'femme'
            };

            const action = { 
                type: CREATE,
                payload: newPatient 
            }

            const newState = patients(state, action);
            expect(newState.patients).toEqual([newPatient]);
        });

        it('Should update patirnt', () => {

            state.patients = pts;

            const updatedPatient = {
                _id: 2,
                fullName: 'updated',
                phone: 123,
                yearOfBirth: '22-04-1998',
                description: 'updated description',
                sex: 'homme'
            };

            const action = { 
                type: UPDATE,
                payload: updatedPatient
            };


            const newState = patients(state, action);
            expect(newState.patients[1].fullName).toEqual('updated');
        });

        it('Should delete patirnt', () => {

            state.patients = pts;

            const action = { 
                type: DELETE,
                payload: 2
            };


            const newState = patients(state, action);
            expect(newState.patients).toEqual([pts[0]]);
        });


    });

});

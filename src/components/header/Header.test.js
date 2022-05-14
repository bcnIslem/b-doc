
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from 'react-router-dom'

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

// import { createStore } from "redux";
// import { reducers } from '../../reducers';

import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks'
import { testUseAppSelector } from '../../redux/test-app-selector'

jest.mock('../../redux/redux-hooks');

import Header from './Header';

const renderWithProvider = ( ui, /*{reduxState}  = {} */ ) => {

    const initialState = { outpute: 0 };
    const mockStore = configureStore();

    let store = mockStore(initialState);
    return render(
        <Provider store={store}>
            <BrowserRouter>
                {ui}
            </BrowserRouter>
        </Provider>
    )
}

describe('Header with redux.', () => {

    describe('Rendering the elements.', () => {
        it('must render properly.', () => {
            const { queryByTitle } = renderWithProvider(<Header />
            // , {
            //     store: { isLoading: true, patients: [], patientToUpdate: [] }
            // }
            );
            expect(queryByTitle('header')).toBeDefined()
        });
    
        it('must be in the document "button".', () => {
            const { queryByTitle } = renderWithProvider(<Header />
            // , {
            //     store: { isLoading: true, patients: [], patientToUpdate: [] }
            // }
            );
            expect(queryByTitle('arrow')).toBeTruthy()
        });
    
        it('must be in the document "title".', () => {
            const { queryByTitle } = renderWithProvider(<Header />
            // , {
            //     store: { isLoading: true, patients: [], patientToUpdate: [] }
            // }
            );
            expect(queryByTitle('drName')).toBeTruthy()
        });
    
        it('div actions must be visible.', () => {
            const { getByText } = renderWithProvider(<Header />
            // , {
            //     store: { isLoading: true, patients: [], patientToUpdate: [] }
            // }
            );
            let element = getByText('add patient')
        });
    });

    describe('clearing pationt to be updated', () => {

        const dispatch = jest.fn();

        beforeEach(() => {
            useAppSelector.mockImplementation(testUseAppSelector);

            useAppDispatch.mockImplementation(() => dispatch);
        })

        afterEach(() => {
            jest.clearAllMocks();
        })

        it('should call dispatch', () => {

            renderWithProvider(<Header />
            // , {
            //     store: { isLoading: true, patients: [], patientToUpdate: [] }
            // }
            );

            const btn = screen.getByText(/add patient/i);
            userEvent.click(btn);

            expect(dispatch).toBeCalledTimes(1)
        })
    })


});
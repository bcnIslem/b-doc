
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'

import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks'
import { testUseAppSelector } from '../../redux/test-app-selector'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

jest.mock('../../redux/redux-hooks')

import Auth from './Auth'

const renderWithProvider = ( ui ) => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    const initialState = { outpute: 0 };

    let store = mockStore(initialState);

    return render(
        <Provider store={store}>
            <BrowserRouter>
                {ui}
            </BrowserRouter>
        </Provider>
    )
}

describe('Auth with redux', () => {

    describe('rendering the elements', () => {

        it('should render', () => {
            const { queryByTitle } = renderWithProvider(<Auth />);
            expect(queryByTitle('auth')).toBeDefined();
        });

        it('should render elements', () => {
            const { queryByTitle } = renderWithProvider(<Auth />);
            expect(queryByTitle('form')).toBeInTheDocument();
        });

        it('should accept inputs', () => {

            const { getByTitle } = renderWithProvider(<Auth />);

            const fieldUserName = getByTitle('userName').querySelector('input')
            const fieldPassword = getByTitle('password').querySelector('input')
            
            const userName = 'wilcher';
            userEvent.type(fieldUserName, userName);
            expect(fieldUserName).toHaveValue(userName);

            const password = '12345';
            userEvent.type(fieldPassword, password);
            expect(fieldPassword).toHaveValue(password);
        });
    });

    describe('should submit on click', () => {
        
        const dispatch = jest.fn();
        beforeEach(() => {
            useAppSelector.mockImplementation(testUseAppSelector);

            useAppDispatch.mockImplementation(() => dispatch);
        })

        afterEach(() => {
            jest.clearAllMocks();
        })

        it('shouls call dispatch', () => {
            // renderWithProvider(<Auth />)

            // const btn = screen.getByTitle(/login/i);
            // fireEvent.click(btn);

            // expect(dispatch).toBeCalledTimes(1);
        })
    });
})


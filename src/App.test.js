
import { render } from "@testing-library/react";

import App from './App';

import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

describe('testing the app', () => {
    const initialState = { outpute: 0 };
    const mockStore = configureStore();

    let store;
    it('works fine', () => {
        store = mockStore(initialState);
        const { queryByTitle } = render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(queryByTitle('app')).toBeTruthy()
    })
})
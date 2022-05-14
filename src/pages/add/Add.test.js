
import { render } from "@testing-library/react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./Add";

describe('test the add page', () => {
    it('works fine', () => {
        const { queryByTitle } = render(
            <BrowserRouter>
                <Routes>
                    <Route path='/dashboard/add' element={<Add />} />
                </Routes>
            </BrowserRouter>
        );
        expect(queryByTitle('add')).toBeDefined();
    });
});
import React from 'react';
import {render, screen} from '@testing-library/react';
import Roulette from "./Roulette";

const renderComponent = () => render(<Roulette/>);


describe('Roulette', () => {
    it("renders a roll button", () => {
        renderComponent();
        expect(screen.getByRole('button', {name: 'Roll the roulette'})).toBeVisible()
    });

    it.skip("renders a restart button", () => {
        // show other ways to test like data test id or get by text
    });

    describe.skip("roll the roulette", () => {
        it("given a high roll shows win a message", () => {
            // here mock the utils file that generates the random number
        });

        it("given a low roll shows win a message", () => {
            // here mock the utils file that generates the random number
        });
    });

    it.skip("restart clears the result", () => {
    // negative testing (show that the element is not present)
    });
})
import React from 'react';
import {render, screen} from '@testing-library/react';
import Roulette from "./Roulette";

const renderComponent = () => render(<Roulette/>);


describe('Roulette', () => {
    it("renders a roll button", () => {
        renderComponent();
        expect(screen.getByRole('button', { name: 'Roll the roulette' })).toBeVisible()
    });

    it.skip("renders a restart button", () => {

    });

    describe.skip("roll the roulette", () => {
        it("given a high roll shows win a message", () => {

        });

        it("given a low roll shows win a message", () => {

        });
    });

    it.skip("restart clears the result", () => {

    });
})
import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import Roulette from "./Roulette";
import {rollDice} from "./DiceMachine";
import userEvent from '@testing-library/user-event';
import * as ResultValidator from "./ResultValidator";

jest.mock('./DiceMachine');
const validateSpy = jest.spyOn(ResultValidator, 'validateResult');
const renderComponent = () => render(<Roulette/>);


describe('Roulette', () => {
    it("renders a roll button", () => {
        renderComponent();
        expect(screen.getByRole('button', {name: 'Roll the roulette'})).toBeVisible()
    });

    it("renders a restart button", () => {
        // show other ways to test like data test id or get by text
        renderComponent();
        expect(screen.getByTestId('my-restart-button')).toBeVisible()
    });

    describe("roll the roulette", () => {
        it("given a high roll shows win a message", async () => {
            screen.debug()
            rollDice.mockReturnValue(6);
            renderComponent();
            const rollButton = screen.getByRole('button', {name: 'Roll the roulette'});
            expect(rollButton).toBeVisible()
            userEvent.click(rollButton);
            await waitFor(() => {
                expect(screen.getByTestId('win-component')).toBeVisible();
            });
            // here mock the utils file that generates the random number
        });

        it.skip("given a low roll shows lose a message", async () => {

            screen.debug()
            rollDice.mockReturnValue(2);
            // renderComponent();
            const rollButton = screen.getByRole('button', {name: 'Roll the roulette'});
            expect(rollButton).toBeVisible()
            userEvent.click(rollButton);
            await waitFor(() => {
                expect(screen.getByTestId('lose-component')).toBeVisible();
                expect(validateSpy).toHaveBeenCalledWith(6);
            });
            // here mock the utils file that generates the random number
            // here mock the utils file that generates the random number
        });
    });

    it.skip("restart clears the result", () => {
    // negative testing (show that the element is not present)
    });
})
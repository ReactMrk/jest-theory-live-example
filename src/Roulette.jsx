import React, {useState} from 'react';
import {rollDice} from "./utils";

const Roulette = () => {
    const [win, setWin] = useState(null);

    const validateResult = (result) => {
        console.log(result);

        if (result >= 5) {
            setWin(true);
        } else {
            setWin(false);
        }
    }


    const onClickPlay = () => {
        validateResult(rollDice());
    };

    const onClickClear = () => {
        setWin(null);
    };


    return (
        <>
            <div>
                <button className="my-button" data-test-id={"my-roll-button"} onClick={onClickPlay}>
                    Roll the roulette
                </button>
                <button className="my-button" data-test-id={"my-restart-button"} onClick={onClickClear}>
                    Restart
                </button>
            </div>
            {win === true && (
                <div data-testid="win-component">You Won!</div>
            )}
            {win === false && (
                <div data-testid="lose-component">You lose!</div>
            )}
        </>
    )
};

export default Roulette;
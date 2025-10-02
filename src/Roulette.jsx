import React, {useState} from 'react';
import {rollDice} from "./DiceMachine";
import {validateResult} from "./ResultValidator";

const Roulette = () => {
    const [win, setWin] = useState(null);

    const onClickPlay = () => {
        setWin(validateResult(rollDice()));
    };

    const onClickClear = () => {
        setWin(null);
    };


    return (
        <>
            <div>
                <button className="my-button" data-testid={"my-roll-button"} onClick={onClickPlay}>
                    Roll the roulette
                </button>
                <button className="my-button" data-testid={"my-restart-button"} onClick={onClickClear}>
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
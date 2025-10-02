export const rollDice = ()=> {
    const result = Math.floor(Math.random() * 10) + 1;
    console.log(result);
    return result;
}
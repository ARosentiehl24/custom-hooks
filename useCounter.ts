import { useState } from 'react';

export const useCounter = (initialValue: number = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const decrement = (incrementValue: number = 1) => {
        if (counter <= 0) {
            return;
        }

        setCounter((current) => current - incrementValue);
    };

    const increment = (incrementValue: number = 1) => {
        setCounter((current) => current + incrementValue);
    };

    const reset = () => {
        setCounter(initialValue);
    };

    return {
        counter,
        decrement,
        increment,
        reset,
    };
};

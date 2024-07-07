import React, { useMemo, useState } from 'react';

const Calculation: React.FC = () => {
    const [items, setItems] = useState<number[]>([]);
    const [sum, setSum] = useState(0);
    const [count, setCount] = useState(0);

    // Memoized sum calculation
    const sumItems = useMemo(() => {
        console.log('Recalculating... (with memo)');
        return items.reduce((acc, curr) => acc + curr, 0);
    }, [items]);

    // Function to add a random number to the items array
    const addItem = () => {
        const newItem = Math.floor(Math.random() * 10);
        setItems([...items, newItem]);
    };

    // Non-memoized sum calculation
    const calculateSum = () => {
        console.log('Calculating.. (no memo)');
        const newSum = items.reduce((acc, curr) => acc + curr, 0);
        setSum(newSum);
    };

    return (
        <div>
            <h1>Expensive Calculation</h1>
            <button onClick={addItem}>Add Random Number</button>
            <button onClick={calculateSum}>Calculate Sum (No memo)</button>
            <p>Items: {items.join(', ')}</p>
            <p>Sum (Memoized): {sumItems}</p>
            <p>Sum (No Memo): {sum}</p>
            <br />
            <button onClick={() => setCount(count + 1)}>Re-render {count}</button>
        </div>
    );
};

export default Calculation;



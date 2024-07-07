import React from 'react'
import { useCounter } from './CounterContext'

const Counter: React.FC = () => {
    const { state, dispatch } = useCounter();
    return (
        <>
            <div style={{ textAlign: 'center' }} >
                <h1>Counter</h1>
                <p>{state.count}</p>
                <button onClick={() => dispatch({ type: 'decrement' })} >Decrement</button>
                <button onClick={() => dispatch({ type: 'increment' })} >Increment</button>
            </div>
        </>
    )
}

export default Counter;
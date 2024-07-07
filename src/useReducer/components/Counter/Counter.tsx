import React, { useReducer } from 'react'
import { Action, reducer } from './reducer';
import { initialState, State } from './initialState';

const Counter: React.FC = () => {
    const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initialState)
    return (
        <div>
            <p>Count:{state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })} >Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })} >Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })} >Reset</button>
        </div>
    )
}

export default Counter;
import React, { createContext, useContext, useReducer, ReactNode } from 'react'

interface CounterState {
    count: number;
}

interface CounterAction {
    type: 'increment' | 'decrement'
}

const initialState: CounterState = { count: 0 };

const CounterContext = createContext<{
    state: CounterState;
    dispatch: React.Dispatch<CounterAction>;
}>({ state: initialState, dispatch: () => { } })


function countReducer(state: CounterState, action: CounterAction): CounterState {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state;
    }
}

const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(countReducer, initialState);

    return (
        <CounterContext.Provider value={{ state, dispatch }} >
            {children}
        </CounterContext.Provider>
    )
}

const useCounter = () => useContext(CounterContext);

export { CounterProvider, useCounter };
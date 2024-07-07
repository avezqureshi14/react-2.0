import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { Action, Task } from './types'

interface TodoState {
    tasks: Task[];
}

const initialState: TodoState = { tasks: [] }

const TodoContext = createContext<{
    state: TodoState;
    dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => { } })

function todoReducer(state: TodoState, action: Action): TodoState {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
            break;

        default:
            return state;
    }
}

const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }} >
            {children}
        </TodoContext.Provider >
    )
}

const useTodo = () => useContext(TodoContext);

export { TodoProvider, useTodo };
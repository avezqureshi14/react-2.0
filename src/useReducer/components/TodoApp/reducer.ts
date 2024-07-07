import { State, Action, Todo } from "./types";

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'add':
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            };
            // Creates a new object that has all the properties of the current state object.
            // Creates a new array that contains all the current todos from state.todos and appends newTodo to the end of the array
            return { ...state, todos: [...state.todos, newTodo] };
        case 'remove':
            return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) }
        case 'toggle':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    return todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                })
            }
        case 'setFilter':
            return { ...state, filter: action.payload }
        default:
            throw new Error('Unknow action Type');
            break;
    }

}
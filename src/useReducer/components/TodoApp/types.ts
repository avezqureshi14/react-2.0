export interface Todo {
    id: number,
    text: string,
    completed: boolean
}


export interface State {
    todos: Todo[],
    filter: 'all' | 'completed' | 'active'
}


export type Action =
    | { type: 'add'; payload: string }
    | { type: 'remove'; payload: number }
    | { type: 'toggle'; payload: number }
    | { type: 'setFilter'; payload: 'all' | 'completed' | 'active' };
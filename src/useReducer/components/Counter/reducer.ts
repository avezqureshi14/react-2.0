import { State } from "./initialState";

export type Action = | { type: 'increment' } | { type: 'decrement' } | { type: 'reset' }

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
            break;
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: state.count = 0 };
        default:
            throw new Error('Unknown actio type');
    }
}
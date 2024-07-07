export interface Task {
    id: number;
    title: string;
    completed: boolean;
}


export type Action =
    | { type: 'add'; payload: Task }
    | { type: 'toggle'; payload: number }
    | { type: 'remove'; payload: number };


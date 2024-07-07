import React, { useState } from 'react'
import { useTodo } from './TodoContext'

const TodoForm: React.FC = () => {
    const { dispatch } = useTodo();
    const [title, setTitle] = useState('');
    return (
        <div>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Enter todo'
            />
            <button onClick={() => {
                dispatch({ type: 'add', payload: { id: Date.now(), title, completed: false } })
            }} >Add</button>
        </div>
    )
}

export default TodoForm
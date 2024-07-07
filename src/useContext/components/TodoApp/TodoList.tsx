import React from 'react'
import { useTodo } from './TodoContext'

const TodoList: React.FC = () => {
    const { state } = useTodo();
    return (
        <>
            <ul>
                {
                    state.tasks.map((task, index) => {
                        return (
                            <li key={index}
                            >
                                {task.title} </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default TodoList

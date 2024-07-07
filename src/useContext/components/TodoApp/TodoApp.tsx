import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoApp: React.FC = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }} >
                <TodoForm />
                <TodoList />
            </div>
        </>
    )
}

export default TodoApp

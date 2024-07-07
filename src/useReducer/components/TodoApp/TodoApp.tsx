import React, { useReducer, useState } from 'react'
import { Action, State } from './types'
import { reducer } from './reducer'
import { initialState } from './initialState'

const TodoApp: React.FC = () => {
    const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initialState)
    const [newTodo, setNewTodo] = useState('');
    const todos = state.todos;
    const handleDelete = (id: number) => {
        dispatch({ type: 'remove', payload: id })
    }
    const filteredTodos = todos.filter((todo) => {
        if (state.filter === 'completed') { return todo.completed }
        if (state.filter === 'active') { return !todo.completed }
        return true;
    })
    return (
        <div>
            <h1>Todo List</h1>
            <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <li onClick={() => {
                    dispatch({ type: 'setFilter', payload: 'all' })
                }}
                    style={{ marginLeft: '1rem', listStyle: 'none' }}
                >All</li>
                <li onClick={() => {
                    dispatch({ type: 'setFilter', payload: 'active' })
                }}
                    style={{ marginLeft: '1rem', listStyle: 'none' }}
                >Active</li>
                <li onClick={() => {
                    dispatch({ type: 'setFilter', payload: 'completed' })
                }}
                    style={{ marginLeft: '1rem', listStyle: 'none' }}
                >Completed</li>
            </ul>
            <input
                type='text'
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
                placeholder='Add New Task'
            />
            <button onClick={() => {
                dispatch({ type: 'add', payload: newTodo })
                setNewTodo('');
            }} >Add</button>
            <ul>
                {
                    filteredTodos.map((item, index) => {
                        return (
                            <div key={index}>
                                <span
                                    style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
                                    onClick={() => dispatch({ type: 'toggle', payload: item.id })}
                                >
                                    <li >{item.text}</li>
                                    <button onClick={() => handleDelete(item.id)} >Remove</button>
                                </span>
                            </div >
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoApp

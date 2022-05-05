import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo, getTodos } from '../redux/todosSlice'
import { GoTrashcan } from 'react-icons/go'
import { BsCheck2 } from 'react-icons/bs'

export const TodoList = () => {
    const { todos } = useSelector(state => state)
    const dispatch = useDispatch()
    return (    
        <ul style={{ width: 500, margin: 'auto' }}>
            <button class="btn btn-outline btn-primary w-full" onClick={() => dispatch(getTodos())}>fetch todos</button>
            {todos.map((todo, index) => {
                return (
                    <li className='text-lg font-bold text-white p-5 border-solid border-2 border-gray-600 rounded-lg my-8' style={{ display: 'flex', justifyContent: 'space-between' }} key={todo.id}>
                        <h1 style={{maxWidth:350}} className={`max-w-8 break-all pr-5 ${todo.completed ? "line-through opacity-50" : " "}` }>
                            {todo.title}
                        </h1>
                        <span className='d-flex'>
                            <button id="all_done" class="btn btn-outline btn-success mr-2" onClick={() =>dispatch(toggleTodo(todo.id))}><BsCheck2/></button>
                            <button class='btn btn-outline btn-error' onClick={() =>dispatch(deleteTodo(todo.id))}><GoTrashcan/></button>
                        </span>
                    </li>
    )
})}
        </ul >
    )
}


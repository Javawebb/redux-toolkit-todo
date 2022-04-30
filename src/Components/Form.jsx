import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todosSlice'

export const Form = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault()
        if (!value.trim()) return

        const todo = {
            id:Date.now(),
            text:value,
        }
        dispatch(createTodo(todo))
    }
  return (
    <form onSubmit={submitHandler} style={{width:500, margin: '20px auto'}}>
        <input value={value} onChange={(event) => setValue(event.target.value)} placeholder='todo text here...' type="text"  style={{width:'100%'}}/><br />
        <button>add</button>
    </form>
  )
}

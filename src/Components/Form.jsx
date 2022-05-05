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
            title:value,
            completed:false,
        }
        dispatch(createTodo(todo))
    }
  return (
    <form onSubmit={submitHandler} class='mt-28' style={{width:500,display:"flex", margin: '20px auto'}}>
        <input id='input' class="input input-bordered input-primary w-full" value={value} onChange={(event) => setValue(event.target.value)} placeholder='todo text here...' type="text"  style={{width:'100%'}}/><br />
        <button class="btn btn-info">add</button>
    </form>
  )
}

import React from 'react'

export const TodoList = () => {
    const faceTodos = [
        {
            id:123456,
            text:'todo 1' ,
            isCompleted:false
        },
        {
            id:1234567,
            text:'todo 2' ,
            isCompleted:false
        }
    ]

  return (
    <ul style={{width:500, margin:'auto'}}>
        {faceTodos.map((todo , index) => {
            return (
                <li style={{display:'flex' , justifyContent:'space-between'}} key={todo.id}>{todo.text}
                    <span>
                        <button>check</button>
                        <button>delete</button>
                    </span>
                  </li>
            )
        })}
    </ul>
  )
}

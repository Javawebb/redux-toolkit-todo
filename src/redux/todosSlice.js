import {createSlice} from "@reduxjs/toolkit";

export const todosSlice = createSlice({
   name:'todos',
   initialState: [],
   reducers:{
       createTodo: (state , action) => {
          return [...state, action.payload]
       },
       deleteTodo: (state , action) => {    
        let todos = state.filter(todo => todo.id !== action.payload)
        return todos
       }
   } 
})

export const { createTodo, deleteTodo} = todosSlice.actions
export default todosSlice.reducer
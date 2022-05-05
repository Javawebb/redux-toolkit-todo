import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
const inputt = document.getElementById('input');


const getTodos = createAsyncThunk("getTodos",async () => {
   let response = await fetch ("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
   let data = await response.json()
   return data
})

   
export const todosSlice = createSlice({
   name:'todos',
   initialState: [],
   reducers:{
       createTodo: (state , action) => {
         return [...state, action.payload]
         inputt.value=''
       },
       deleteTodo: (state , action) => {    
        let todos = state.filter(todo => todo.id !== action.payload)
        return todos
       },
       toggleTodo: (state,action) => {
         state.map(todo => {
            if(todo.id === action.payload){
               todo.completed = !todo.completed
               
            }
            
            return todo;
         })
       }
       
   },
   extraReducers: (builder) => {
      builder.addCase(getTodos.fulfilled, (state,action) => {
         return [...state,...action.payload]
      })
   }
})

export const { createTodo, deleteTodo,toggleTodo} = todosSlice.actions;
export {getTodos}
export default todosSlice.reducer
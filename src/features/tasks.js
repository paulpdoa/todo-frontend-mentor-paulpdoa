import { createSlice } from "@reduxjs/toolkit";

const tasks = [{ id: 0, todo: 'wash my clothes in the afternoon', done:true }];

export const taskSlice = createSlice({
    name:"task",
    initialState: { value: tasks},
    reducers: {
        addTask: (state,action) => {
            state.value.push(action.payload) 
        },
        clearTask: (state) => {
            state.value = tasks;
        },
        deleteSingleTask: (state,action) => {
            state.value = state.value.filter(task => task.id !== action.payload.id);
        },
        updateTask: (state,action) => {
            // Get the id then convert the done to its opposite
           state.value.map((task) => {
               if(task.id === action.payload.id){
                  task.done = action.payload.done
               }
           })
           
        }
    }
})

export const { addTask,clearTask,deleteSingleTask,updateTask } = taskSlice.actions;

export default taskSlice.reducer;
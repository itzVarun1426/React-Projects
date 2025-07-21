import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [

    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                completed: false
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        updateTodo: (state, action) => {
            const { id, title } = action.payload;
            state.todos = state.todos.map(todo => todo.id === id ? {
                ...todo,
                title
            } : todo)

        },
        toggleTodo: () => {
            //logic to toggle todo completion

        }
    }
})

export const { addTodo, removeTodo, updateTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;

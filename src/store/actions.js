import { ADD_TODO_INPUT, SET_TODO_INPUT, DELETE_TODO_INPUT, UPDATE_TODO_INPUT, UPDATE_INDEX_TODO } from "./constants"
export const setToDoInput = (payload) =>({
    type:  SET_TODO_INPUT,
    payload
})
export const addTodo = payload =>({
    type: ADD_TODO_INPUT,
    payload
})
export const deleteTodo = payload =>({
    type: DELETE_TODO_INPUT,
    payload
})
export const setUpdateIndex = index =>({
    type: UPDATE_INDEX_TODO,
    index
})
export const updateTodo = payload =>({
    type: UPDATE_TODO_INPUT,
    payload
})



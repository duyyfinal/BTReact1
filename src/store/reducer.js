import { updateIndex } from "./actions"
import { ADD_TODO_INPUT, SET_TODO_INPUT, DELETE_TODO_INPUT, UPDATE_TODO_INPUT, UPDATE_INDEX_TODO } from "./constants"

const initState = {
     todos: [],
     todoInput: '',
     updateIndex: false
}
function reducer(state, action){
    switch(action.type)
    {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO_INPUT:
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO_INPUT:
            const newToDo = [...state.todos]
            newToDo.splice(action.payload,1)
            return{
                ...state,
                todos: newToDo
            }
        case UPDATE_INDEX_TODO:
            return{
                ...state,
                updateIndex: action.index
            }

        case UPDATE_TODO_INPUT:
            
            const newUpdateTodo = [...state.todos]
            if(action.payload == ''){
                return{
                    ...state,
                    todos: newUpdateTodo,
                    updateIndex: false
                }
            }
            else{
                newUpdateTodo[state.updateIndex] = action.payload
                return{
                    ...state,
                    todos: newUpdateTodo,
                    updateIndex: false
                }
            }
            

        default:
            throw new Error('Invalid action')
    }
}
export {initState}
export default reducer
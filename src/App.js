// import { useState, useTransition } from "react";

// const courses = [
//   {
//     id: 1,
//     name: "duy"
//   },
//   {
//     id: 2,
//     name: "tân"
//   },
//   {
//     id: 3,
//     name:"minh"
//   }
// ]

// function App() {

//   const jobJSON = localStorage.getItem('jobs')
//   const curJobs = JSON.parse(jobJSON)

  

//   const [job, setJob] = useState('')
//   const [jobs, setJobs] = useState([curJobs])


//   const handleAdd = ()=>{
//     setJobs(prevJob => {
//       const newJobs = [...prevJob, job]
//       //save to local storage
//       const jsonJobs = JSON.stringify(newJobs)
//       localStorage.setItem('jobs', jsonJobs)
//       return  newJobs
//     })
//     setJob('')
//   }

//   return (
//     <div style={{padding:32}}>
      
//       <input 
//         value={job}
//         onChange={e=>setJob(e.target.value)}
//       />
       
//       <button onClick={handleAdd}>Add</button>

//       <ul>
//         {jobs.map((job, index)=>(
//             <li key={index}>{job}</li>
//         ))}
        
        
//       </ul>
//     </div>
//   )
// }

/* ****************** */
// import TodoApp from './todo'

// function App(){
//   return <TodoApp />

// }
// export default App

//-----------------------------------

// import Content from "./content"
// import './App.css'
// import { useContext } from "react"
// import { ThemeContext } from "./ThemeContext"



// function App(){
//   const context = useContext(ThemeContext)

//   return (
    
//       <div style={{padding:20}}>
//       <button onClick={context.toggleTheme}> Toggle theme</button>
//       <Content />
//       </div>
    
    
//   )
// }
// export default App

//------------------------
import { useStore, actions } from "./store"
import { deleteTodo, setToDoInput, setUpdateIndex } from "./store/actions"
import { useRef, useEffect } from "react"



function App(){
  const [state, dispatch] = useStore()
  const {todos, todoInput, updateIndex} = state
  const inputRef = useRef();
  
  const handleSubmit = ()=>{
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setToDoInput(''))
    inputRef.current.focus()
    
  }
  const handleUpdate = ()=>{
    dispatch(actions.updateTodo(todoInput))
    dispatch(actions.setToDoInput(''))
    inputRef.current.focus()
    
  }
  
  const handleEdit = (index)=>{

    dispatch(actions.setUpdateIndex(index))
    dispatch(actions.setToDoInput(todos[index]))
    inputRef.current.focus()
    
  }
  const handleCancel = ()=>{
    
    dispatch(actions.setToDoInput(''))
    inputRef.current.focus()
  }
  
  
  return(
    <div>
      <h1>Hello world</h1>
      <input 
        ref={inputRef}
        value={todoInput}
        placeholder="enter todo"
        onChange={e=>{
          dispatch(actions.setToDoInput(e.target.value))
        }}
      />
      <button onClick={updateIndex === false? handleSubmit : handleUpdate}>{updateIndex === false ? 'add' : 'update'}</button>
      {/* {updateIndex === false ? <button onClick={handleSubmit}>add</button>:<div>
        <button>update</button>
        <button onClick={handleUpdate(updateIndex)}>Update</button>
        <button onClick={handleCancel}>Cancel</button>
        </div>} */}
      
      <ul>
        {todos.map((todo, index)=>(
          <li key={index}>
             {todo}
            <span style={{padding:20}} onClick={()=>handleEdit(index)}>Edit</span>
            <span onClick={()=>dispatch(deleteTodo(index))}>Delete</span>
            
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App
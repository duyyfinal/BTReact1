import { useReducer } from "react";

import reducer, {initState} from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";
import blogger from './blogger'

//init state

//Actions



//Reducer

//dispatch


function App(){

  const[state, dispatch] = useReducer(blogger(reducer), initState)
  
  const handleAdd = ()=>{
    dispatch(addJob(job))
    dispatch(setJob(''))
  }
  
  const { job, jobs} = state
  return (
    <div style={{padding:20}}>
      <h3>todo</h3>
      <input 
        value={job}
        placeholder="Enter todo..."
        onChange={e=>{dispatch(setJob(e.target.value))}}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((job, index)=>(
          <li key={index}>{job}
          <span onClick={()=>{dispatch(deleteJob(index))}}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;

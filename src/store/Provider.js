import { useReducer } from "react";
import Context  from "./context";
import reducer, {initState} from "./reducer";
import blogger from "./logger"; // blogger(reducer)
function Provider({children}){
    const [state, dispatch] = useReducer(reducer, initState)
    return(
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}
export default Provider
function blogger(reducer){
    return (preState, action)=>{
        console.group(action.type)
        console.log('preState', preState)
        console.log('action',action)
        const newState = reducer(preState, action)
        console.log('nextState', newState)
        console.groupEnd()
        return newState
    }
}
export default blogger
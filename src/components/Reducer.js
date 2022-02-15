import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {...state, count: state.count + 1};
      case 'toggleText':
        return {...state, display: !state.display};
      default:
        throw state;
    }
  }

function Reducer() {

    const [state, dispatch] = useReducer(reducer, {count: 0, display: false});

  return (
    <div>
        <h1>useReducer</h1>
        <h4>{state.count}{state.display && "  Hello"}</h4>
        <button onClick={()=>{
            dispatch({type: 'increment'});
            dispatch({type: 'toggleText'});
            }
        }>Click me</button>
    </div>
  )
}

export default Reducer
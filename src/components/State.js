// increment value
// input value should be display

import React, { useState } from 'react'

function State() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("Default Text")

    const increment = () => {
        setCount(count+1);
    }

    const changeHandler = (event) => {
        setText(event.target.value);
    }

  return (
    <div>
        <h1>useState</h1>
        {count}<button onClick={increment}>Increment</button>
        <br/><br/>
        <input type="text" placeholder="Enter text here" onChange={changeHandler} /> {text.length!==0?text:"Default Text"}
    </div>
  )
}

export default State
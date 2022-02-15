import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'

function Effect() {

    const [counter, setCounter] = useState(0);
    const [bg, setbg] = useState(true);
    const intialVal = useRef(true);

    useLayoutEffect(() => {
        if(!intialVal.current){
            console.log("Layout Effect:" + (bg));
        }
    }, [bg]);

    useEffect(() => {
        if(intialVal.current){
            intialVal.current = false;
        } else {
            console.log(`You clicked ${counter} times`);
        }
      }, [counter]);

    const clickHandler = () => {
        setCounter(counter + 1);
        if(bg){
            document.querySelector('#effect').style.backgroundColor = "gray";
        } else {
            document.querySelector('#effect').style.backgroundColor = "white";
        }
        setbg(!bg);
      }

  return (
    <div id="effect">
        <h1>useEffect &#38; useLayoutEffect</h1>
        <p>You clicked {counter} times</p>
        <button onClick={clickHandler}>
            Click me
        </button>
    </div>
  )
}

export default Effect
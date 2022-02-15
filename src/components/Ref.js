import React, { useRef } from 'react'

function Ref() {

    const refVal = useRef(null);

    const focusInput = () => {
        refVal.current.focus();
    }

    return (
        <div>
            <h1>useRef</h1>
            <input type="text" ref={refVal} />
            <button onClick={focusInput}>Focus</button>
        </div>
    )
}

export default Ref
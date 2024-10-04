import React, { useEffect, useState } from 'react'

function UseEff() {
    const [count,setCount]=useState(0)
    const [add,setAdd]=useState(0)
    useEffect(()=>{
            setAdd(()=>count *2)
        // setTimeout(()=>{
        //         setCount(count=>count+1)
        // },1000)
    },[count])
    return (
        <div>
                <h1>{count}</h1>
                <button onClick={()=>setCount(count=>count+1)}>Add</button>
                <h3>{add}</h3>
        </div>
    )
}

export default UseEff

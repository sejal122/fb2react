import React,{useRef} from 'react'
import Button from 'react-bootstrap/Button'
function Userefhook() {
    const inputelem=useRef()
    const changeColor=()=>{
        console.log(inputelem)
        inputelem.current.style.backgroundColor='red'
    }
    return (
        <>
        <input type='text' ref={inputelem}/>
        <button onClick={changeColor}>change color</button>
        <Button variant='danger'>btn</Button>
        </>
    )
}

export default Userefhook

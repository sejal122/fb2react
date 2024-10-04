import React ,{useState} from "react";
function FunctionComponent(props){
    //destructuring props
    const {myscore,city}=props
    let name='Sejal'
    //create state in react
    const [counter,setCounter]=useState(0);

// props.myscore=15 - this will give error
const increment=(e)=>{
    //update state value 
    setCounter(counter+1)
    console.log(e)
}
    return (
        <div>
            <h3>I am a function component</h3>
            <h4>I am {name}</h4>
            <h5> {city}'s score is : {props.myscore}</h5>
            <b>Counter: {counter}</b> <br/>
            <button onClick={increment} id='incBtn'> <b>+ </b></button>
            <button> - </button>
        </div>
    )
}

export default FunctionComponent;
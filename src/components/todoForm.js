import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function TodoForm() {
    const navigation=useNavigate()
    const [newdata,setNewdata]=useState({
        title:'',
        completed:false,
        userId: "10",
    })
    const addTodo=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:3000/todos`,newdata)
        .then(res=>console.log(res))
        //fetch('url',{ method : 'DELETE'})
    }
    return (
        <>
         <Form style={{width:'70%',margin:'0 auto'}} onSubmit={addTodo}>
      <Form.Group className="mb-3" controlId="newTask">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={(e)=>{setNewdata({...newdata,title:e.target.value})}} type="text" placeholder="Add new task" />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="submitBtn">
        
        <Form.Control type="submit" />
      </Form.Group>
    </Form>
        </>
    )
}

export default TodoForm

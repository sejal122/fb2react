import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios'

function EditTodo() {
    const navigate=useNavigate()
    let {id}=useParams()
    const [mytodo,setMyTodo]=useState(null)
    useEffect(()=>{
        axios.get(`http://localhost:3000/todos/${id}`)
        .then((res)=>res.data)
        .then(data=>{console.log(data);setMyTodo(data)})
    },[])
    const handleChange=(e)=>{
     
        setMyTodo({...mytodo,title:e.target.value})
    }
    const editData=()=>{
        axios.patch(`http://localhost:3000/todos/${id}`,{
          title:mytodo?.title
        }).then((res)=>{console.log(res)})
        .catch(e=>console.log('something went wrong!'))
        navigate('/')
       }
    return (
        <>
       <Form style={{width:'70%',margin:'0 auto'}} onSubmit={editData}>
      <Form.Group className="mb-3" controlId="newTask">
        <Form.Label>Title</Form.Label>
        <Form.Control defaultValue={mytodo?.title} onChange={(e)=>handleChange(e)} type="text" placeholder="Add new task" />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="submitBtn">
        
        <Form.Control type="submit" />
      </Form.Group>
    </Form>
        </>
    )
}

export default EditTodo

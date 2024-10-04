import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import './todo.css'
import { Link } from 'react-router-dom';
function Todo() {
    const [mytodo,setMyTodo]=useState(null)
    useEffect(()=>{
        axios.get('http://localhost:3000/todos')
        .then((res)=>res.data)
        .then(data=>{console.log(data);setMyTodo(data)})
    },[])
    const deleteTodo=(id)=>{
        console.log(id)
        console.log(typeof id)
        axios.delete(`http://localhost:3000/todos/${id}`)
        .then(res=>console.log(res))
        //fetch('url',{ method : 'DELETE'})
    }
   const changeStatus=(id,currStatus)=>{
    axios.patch(`http://localhost:3000/todos/${id}`,{
      completed:!currStatus
    }).then((res)=>console.log(res))
    window.location.reload()
   }
    return (
      <div>

      <div id='iconDiv'><Link to={'/addTodo'}><FontAwesomeIcon id='addIcon' icon={faSquarePlus}/></Link></div>
        <div  id='todoList'>
            {mytodo?.map((todo)=>{

                return <Card id='todoCard' className={todo.completed?'completed':'pending'} style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{todo.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Status : {todo.completed?"Completed":"Pending"}</Card.Subtitle>
                <Card.Text>
                <Card.Link href="#" onClick={()=>changeStatus(todo.id,todo.completed)}>{todo.completed?"Mark Pending":"Mark Completed"}</Card.Link>
                </Card.Text>
                  <div id='btnDiv'>
                  
                  <Card.Link href="#"><Link to={`/editTodo/${todo.id}`}>Edit</Link></Card.Link>
                  <Card.Link href="#" onClick={()=>deleteTodo(todo.id)}>Delete</Card.Link>
                  </div>
                 
                </Card.Body>
              </Card>
            })}
                
        </div>
        </div>
    )
}

export default Todo

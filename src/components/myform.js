import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import './myform.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser ,faEnvelope, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
function Myform() {
  const [name,setName]=useState('')
  const [formdata,setFormdata]=useState({
    name:'',
    email:'',
    city:'',
    contact:0,
    message:''

  })
const validate=(e)=>{
e.preventDefault();
console.log(formdata)
if(formdata.name.length<3){
  setError(e,'Please enter more than 3 characters')
}
}
function setError(elem , msg){
  console.log(elem)
  //elem.style.border='1px solid red'
  //code if any input field has invalid value

}
function setSuccess(){
  //code if  input field has valid value
  
}
    return (
        <>
        <Form id='form' onSubmit={validate}>
        <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name  <FontAwesomeIcon icon={faUser}/></Form.Label>
        <Form.Control type="text" onChange={(e)=>setFormdata({...formdata,name:e.target.value})} placeholder="" />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address  <FontAwesomeIcon icon={faEnvelope}/> </Form.Label>
        <Form.Control type="email" onChange={(e)=>setFormdata({...formdata,email:e.target.value})} placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" onChange={(e)=>setFormdata({...formdata,city:e.target.value})} placeholder="Pune" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contact">
        <Form.Label>Contact</Form.Label>
        <Form.Control type='number' onChange={(e)=>setFormdata({...formdata,contact:e.target.value})} placeholder="Enter 10 digits contact number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Write a message!</Form.Label>
        <Form.Control as="textarea" onChange={(e)=>setFormdata({...formdata,message:e.target.value})} rows={3} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contact">
       
        <Form.Control type='submit' icon={faCircleCheck} />  
      </Form.Group>

    </Form>
        
        </>
    )
}

export default Myform

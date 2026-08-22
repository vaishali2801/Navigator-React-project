import { useState } from 'react'

import "./Home.css";
import { Container,Button } from 'react-bootstrap';

const Service = () => {
  const [input,setInput] = useState({
    name:"",
    email:"",
    password:"",
    phone:""
  });
  const handleChange = (field,e) =>{
    setInput((prev)=>{
      return{
        ...prev,
        [field]:e.target.value
      }
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setInput({name:"",email:"",password:"",phone:""})
  }
  return (
    <Container className='d-flex justify-content-center mt-5'>
      <div className='div'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input type="text" placeholder='enter your name' value={input.name} onChange={(e)=>handleChange("name",e)} />
        <br />
        <br />
        <label htmlFor="name">Email :</label>
        <input type="email" placeholder='enter your email' value={input.email} onChange={(e)=>handleChange("email",e)} />
        <br />
        <br />
        <label htmlFor="name">Password :</label>
        <input type="password" placeholder='enter your password' value={input.password} onChange={(e)=>handleChange("password",e)} />
        <br />
        <br />
        <label htmlFor="name">Phone :</label>
        <input type="number" placeholder='enter your phone' value={input.phone} onChange={(e)=>handleChange("phone",e)} />
        <br />
        <br />
        <Button type='submit' variant='warning' className=''>Submit</Button>
      </form>
    </div>
    </Container>
  )
}

export default Service

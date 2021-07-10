import React,{useState} from 'react'
import {Form,Button,Row,Col, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import FormContainer from './FormContainer'

const LoginScreen = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const submitHandler =(e)=>{
       
        e.preventDefault()
        console.log('Inside Submit Handler')
    }   


    return (
        <FormContainer>
        <h1>Sign In</h1>
        
        
         <Form onSubmit={submitHandler} id='form'> 
             <FormGroup id='login-register' controlId='email' >
                 <FormLabel>Email: </FormLabel>
                 <FormControl type='email' placeholder='Enter Email' value={email}
                 onChange={(e)=>setEmail(e.target.value)}></FormControl>
             </FormGroup>

             <FormGroup controlId='password' >
                 <FormLabel>Password: </FormLabel>
                 <FormControl type='password' placeholder='Enter Password' value={password}
                 onChange={(e)=>setPassword(e.target.value)}></FormControl>
             </FormGroup>

             <Button type='submit' varient='primary'>
                 Sign In
             </Button>
             

         </Form>
 
       
         <Row className='py-3' id='register-link'>
             <Col>
             New Customer ? Register Here
             </Col>
         </Row>
    </FormContainer>
    )
}

export default LoginScreen

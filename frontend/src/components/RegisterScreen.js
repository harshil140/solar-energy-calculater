import React ,{ useState} from 'react'

import {Form,Button,Row,Col, FormGroup, FormLabel, FormControl} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const RegisterScreen = () => {
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [confirmpassword,setConfimPassword]=useState('')
    const [message,setMessage]=useState(null)
    const submitHandler =(e)=>{
        e.preventDefault()
       
        if(password !==confirmpassword){
            setMessage('Password do not match')
        }else{
       console.log('object')
     }
}   
    return (
        <FormContainer>
        <h1>Register</h1>
        
      
         <Form onSubmit={submitHandler}  id='form'>
             <FormGroup id='login-register' controlId='name' >
                 <FormLabel>Name: </FormLabel>
                 <FormControl type='name' placeholder='Enter Name' value={name}
                 onChange={(e)=>setName(e.target.value)}></FormControl>
             </FormGroup>
             <FormGroup controlId='email' >
                 <FormLabel>Email: </FormLabel>
                 <FormControl type='email' placeholder='Enter Email' value={email}
                 onChange={(e)=>setEmail(e.target.value)}></FormControl>
             </FormGroup>

             <FormGroup controlId='password' >
                 <FormLabel>Password: </FormLabel>
                 <FormControl type='password' placeholder='Enter Password' value={password}
                 onChange={(e)=>setPassword(e.target.value)}></FormControl>
             </FormGroup>

             <FormGroup controlId='password' >
                 <FormLabel>Confirm Password: </FormLabel>
                 <FormControl type='password' placeholder='Enter Password' value={confirmpassword}
                 onChange={(e)=>setConfimPassword(e.target.value)}></FormControl>
             </FormGroup>
             {message &&  <div class="alert alert-danger" role="alert" id='wrong'>{message}</div>}
             <Button type='submit' varient='primary'>
               Register
             </Button>

         </Form>
 
         <Row className='py-3' id='register-link'>
             <Col>
            Have An Account? LogIn
             </Col>
         </Row>
    </FormContainer>
    )
}

export default RegisterScreen

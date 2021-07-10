import React from 'react'
import { Container} from 'reactstrap'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const Landing = () => {
    return (
        <Container fluid id='img-cont'>
        <Container fluid id='title-cont'>
        <Fade bottom > <h1>Let's Hack 4.0</h1></Fade> 
        <Fade bottom >  <h2>Solar Meter Energy Calculator</h2></Fade>
        </Container>
        <Container fluid id='button-cont'>
      <Link to='/calculate'>  <Button  variant="primary" >CALCULATE YOUR BILL</Button></Link>
        </Container>
       </Container>
    )
}

export default Landing

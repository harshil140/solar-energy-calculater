import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
const FormContainer = ({children}) => {
    return (
        <Container id='login-register'>
            <Row id='login-register-row' className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer

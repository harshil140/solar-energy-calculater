import React,{useState} from 'react'
import { Collapse, Container, Nav, Navbar,  NavbarToggler, NavItem } from 'reactstrap'
import {  NavLink} from 'react-router-dom';




const Header = () => {
    const [isNavOpen,toggleNav] = useState(false)
   
  

    return (
        <div id='header'>
                      
            <Navbar id='navbar' expand='lg' fixed-top>
   

                <Container fluid>
                    <Nav  className='mr-auto' >
                <Container id='logo-cont'>
                            <NavLink to="/home">
                                <img src="/assets/logo.png" alt="logo" className="logo"></img>
                             
                            </NavLink>
                 </Container>
                 </Nav>
                    <NavbarToggler id='toggle' onClick={()=>toggleNav(!isNavOpen)}>Menu <i className='fa fa-bars'></i></NavbarToggler>
        
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav  id='nav-items' >
                            <NavItem id="items">
                              <NavLink to='/' onClick={()=>toggleNav(false)}>  Home </NavLink>
                            </NavItem>
                            <NavItem id="items">
                            <a href='/calculate'  onClick={()=>toggleNav(false)}>  Project </a>
                            </NavItem > 
                            <NavItem id="items">
                            <a href='/#future-work'  onClick={()=>toggleNav(false)}>Future Work</a>
                            </NavItem >
                            <NavItem id="items">
                            <a href='/#about-us'  onClick={()=>toggleNav(false)}>About Us</a>
                            </NavItem >
                       
                        
                        </Nav>

                        <Nav className='ml-auto'  id='nav-items' >
                            <NavItem id="items">
                              <NavLink to='/login' onClick={()=>toggleNav(false)}>  Sign In </NavLink>
                            </NavItem>
                            <NavItem id="items">
                              <NavLink to='/register' onClick={()=>toggleNav(false)}>  Register </NavLink>
                            </NavItem>
                     
                        
                        </Nav>
                
                    </Collapse>

                    
                </Container>
                
            </Navbar>
        
          
      
            
           
        </div>
    )
}

export default Header

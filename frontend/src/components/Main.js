import React from 'react'
 import { Switch, Route } from 'react-router-dom';
// import About from './About';
// import Demo from './Demo';
import MainPage from './MainPage'
import Calculator from './Calculator';
import Header from './Header';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const Main = () => {
    return (
        <div>
          
        
          <Header></Header>
            <Switch>
                
            {/* <Route path="/about" component={About}/>     */}
            {/* <Route path="/demo" component={Demo}/>  */}
            <Route path="/calculate" component={Calculator}/> 
            <Route path="/login" component={LoginScreen}/> 
            <Route path="/register" component={RegisterScreen}/> 
            <Route path="/" component={MainPage}/> 
    
            
            </Switch>
           
         
        </div>
    )
}

export default Main
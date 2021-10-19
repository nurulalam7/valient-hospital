import logo from './logo.svg';
import './App.css';
import Google from './Googleauth/Google';
import Home from './Components/Home/Home';
import Header from './Header/Header';

import Bannermain from './Components/Shared/Banner/Bannermain';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import About from '../src/Navlink/About'
import Facilities from './Navlink/Facilities';
import Service from './Navlink/Service';
import Offer from './Navlink/Offer';
import Signup from './Navlink/Signup';

import Notfound from './Navlink/Notfound';






function App() {
  return (
    <div className="">
     
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path='/'>
            <Bannermain></Bannermain>
         </Route>
         <Route path="/bannermain">
           <Bannermain></Bannermain>
         </Route>
         <Route path="/about">
            <About></About>
         </Route>
         <Route path="/facilities">
            <Facilities></Facilities>
         </Route>
          <Route path="/service">
          
           <Service></Service>
          </Route>
         
         <Route path="/offer">
            <Offer></Offer>
         </Route>
         <Route path="/google">
           <Google></Google>
         </Route>
         <Route path="/signup">
           <Signup></Signup>
           
          </Route>
          <Route path='*'>
             <Notfound></Notfound>
          </Route>


        </Switch>
        <Home></Home>
       
      </Router>
    
     
      
    
     
    
     
    </div>
  );
}

export default App;

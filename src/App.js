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


import Notfound from './Navlink/Notfound';

import Login from './Navlink/Login';
import Authprovider from './Context/Authprovider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';








function App() {
  return (
    <div className="">
     
     <Authprovider>
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
         <PrivateRoute path="/facilities">
            <Facilities></Facilities>
         </PrivateRoute>
         
          <PrivateRoute path="/service">
          
           <Service></Service>
          </PrivateRoute>
         
         <PrivateRoute path="/offer">
            <Offer></Offer>
         </PrivateRoute>
         <Route path="/login">
           <Login></Login>
         </Route>
         
          <Route path=''>
             <Notfound></Notfound>
          </Route>


        </Switch>
        <Home></Home>
       
      </Router>
     </Authprovider>
    
     
      
    
     
    
     
    </div>
  );
}

export default App;

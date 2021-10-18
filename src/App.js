import logo from './logo.svg';
import './App.css';
import Google from './Googleauth/Google';
import Home from './Components/Home/Home';
import Header from './Header/Header';

import Bannermain from './Components/Shared/Banner/Bannermain';



function App() {
  return (
    <div className="">
      <Header></Header>
      
     <Google></Google>
     <Bannermain></Bannermain>
     <Home></Home>
     
    </div>
  );
}

export default App;

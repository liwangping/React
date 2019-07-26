import React from 'react';
import {BrowserRouter,Route} from "./react-router-dom/index"
import './App.css';
function Home() {
  return "Home"
}
function Detail() {
  return 'Detail'
}

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
      <ul>
        <li>home</li>
        <li>detail</li>
      </ul>
      <Route path="/home" component={Home} ></Route>
      <Route path="/detail" component={Detail}></Route>
      </BrowserRouter>)
  }
 
}

export default App;

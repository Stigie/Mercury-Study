import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
class Logo extends Component{
  render() {
    return(
       <header>
        <img src = {logo}/>
       </header>
    );
  }
}
class Title extends Component{
  render(){
    return(
      <h1>Welcome on board, &#123;username&#125;!</h1>
    );
  }
}
class Form extends Component{
  render(){
    return(
      <form className="main">
        <input className="input" placeholder="Username" />
        <button className="submit-button">Submit</button>
      </form>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="cover">
        <Logo />
        <Title />
      </div>  
        <Form />
      </div>
    );
  }
}

export default App;

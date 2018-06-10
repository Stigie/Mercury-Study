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
  constructor(){
    super();
  }
  render(){
    let msg = this.props.inputText;
    if (msg ===""){
      msg = "username"
    }
    return(
      <h1>Welcome on board, &#123;{msg}&#125;!</h1>
    );
  }
}
class Form extends Component{
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.props.onUserInput(
      this.inputText.value,
    );
  }
  render(){
    return(
      <form className="main">
        <input 
          className="input" 
          placeholder="Username" 
          value={this.props.inputText} 
          ref={(input) => this.inputText = input}
          onChange={this.handleChange} />
        <button className="submit-button">Submit</button>
      </form>
    );
  }
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      inputText: ""
    }
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(inputText) {
    this.setState({
      inputText: inputText,
    });
  }
  render() {
    return (
      <div className="App">
      <div className="cover">
        <Logo />
        <Title inputText={this.state.inputText} />
      </div>  
        <Form inputText={this.state.inputText}
              onUserInput={this.handleUserInput} />
      </div>
    );
  }
}

export default App;

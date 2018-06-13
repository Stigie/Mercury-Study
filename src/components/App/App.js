import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'
import Logo from '../Logo/Logo'
import Title from '../Title/Title'


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

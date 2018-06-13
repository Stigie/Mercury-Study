import React, { Component } from 'react';

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
  export default Form;
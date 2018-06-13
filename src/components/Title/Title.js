import React, { Component } from 'react';

class Title extends Component{
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

  export default Title;
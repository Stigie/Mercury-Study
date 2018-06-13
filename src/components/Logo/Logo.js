import React, { Component } from 'react';
import logo from '../../assets/logo.svg';

class Logo extends Component{
    render() {
      return(
         <header>
          <img src = {logo}/>
         </header>
      );
    }
  }
  export default Logo;
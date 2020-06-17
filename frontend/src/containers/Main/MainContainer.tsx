import * as React from "react";

import Posts from '../Posts'
import './main.css'
import { Router } from "react-router-dom";

// 'HelloWorldProps' describes our props structure.
// For the state, we use the '{}' type.
export default class MainContainer extends React.Component {
  constructor(props:{}) {
    super(props);
    this.state = {
      isLoggedIn:false
    }
  }

 

    render() {
      return(
        
        <div className={'homePage'}>
          {console.log('EEEEEEEE')}
          Main page
        </div>

      )
}
}
import * as React from "react";
import './main.css'
import { Router, Redirect } from "react-router-dom";
import UserPage from "../UserPage";
import WritingContainer from "../Writing/WritingContainer";


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
        
        <>
        {/* <UserPage /> */}
        <WritingContainer />
        </>
        // <div className={'homePage'}>
        //   {console.log('EEEEEEEE')}
        //  <>
        // </div>

      )
}
}
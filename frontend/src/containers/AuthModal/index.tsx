import * as React from "react";
import AuthForm from '../../components/AuthForm';

// 'HelloWorldProps' describes our props structure.
// For the state, we use the '{}' type.
export default class AuthModal extends React.Component {
  constructor(props:{}) {
    super(props);
    }
  



 

    render() {
      return(
        <AuthForm />
      );
  }
}
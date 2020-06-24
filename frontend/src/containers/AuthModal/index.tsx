import * as React from "react";
import AuthForm from '../../components/AuthForm';

// 'HelloWorldProps' describes our props structure.
// For the state, we use the '{}' type.
interface IAuthModalState {
  activeTab: string;
}

export default class AuthModal extends React.Component<{}, IAuthModalState> {
  constructor(props:{}) {
    super(props);
    this.state = {
      activeTab: 'registration',
    }
    this.handleClick = this.handleClick.bind(this);
  }
    

    handleClick(tab: string) {
      this.setState({activeTab: tab})
    }

    render() {
      return(
        <AuthForm handleClick={this.handleClick} activeTab={this.state.activeTab} />
      );
  }
}
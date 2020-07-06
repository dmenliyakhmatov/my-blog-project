import * as React from 'react';
import AuthForm from '../../components/AuthForm';
import { ILoginForm, IRegisterForm } from '../../interfaces';

// 'HelloWorldProps' describes our props structure.
// For the state, we use the '{}' type.
interface IAuthModalState {
  activeTab: string;
}

interface IAuthModalProps {
  errMsg: string;
  closeModal: () => void;
  loginSubmit: (formData: ILoginForm) => void;
  registrationSubmit: (formData: IRegisterForm) => void;
}

export default class AuthModal extends React.Component<IAuthModalProps, IAuthModalState> {
  constructor(props:IAuthModalProps) {
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
        <AuthForm 
        handleClick={this.handleClick} 
        activeTab={this.state.activeTab} 
        {...this.props} 
        />
      );
  }
}
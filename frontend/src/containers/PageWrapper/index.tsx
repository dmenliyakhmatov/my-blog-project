import React from 'react';
import PageHeader from '../../components/PageWrapper/PageHeader'
import Filters from '../PageWrapper/SideBar';
import LiveBlock from '../PageWrapper/LiveBlock/LiveBlock';
import AuthModal from '../AuthModal';
import './wrapper.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../store/user/actions';
import { ILoginForm, IRegisterForm } from '../../interfaces';

interface IPageWrapperState {
  authActive: boolean;
}

class PageWrapper extends React.Component<any,IPageWrapperState> {
  constructor(props:any) {
    super(props);
    this.state ={
      authActive: false,
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.registrationSubmit = this.registrationSubmit.bind(this);
  }
  
  closeModal() {
    this.props.actions.modalActivate(false);
  }

  openModal() {
    console.log(this.props)
    this.props.actions.modalActivate(true);
  }

  loginSubmit(formData: ILoginForm) {
    console.log('111')
    this.props.actions.onLogin(formData);
  }

  registrationSubmit(formData: IRegisterForm ) {
    this.props.actions.registration(formData);
  }

  render() {
    return (<>
      <PageHeader isLoggedIn={this.props.isLoggedIn} handleLogInButton={this.openModal} />
      <div className="content-box">
        <Filters />
        <section className="center-column">
          {this.props.children}
        </section>
        <LiveBlock />
      </div>
      {this.props.modal &&
        <>
        <div className="popup" onClick={() => this.closeModal()} ></div>
        <AuthModal 
          loginSubmit={this.loginSubmit} 
          closeModal={this.closeModal} 
          registrationSubmit={this.registrationSubmit}
          />
      </>}
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({ ...state.user });

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper);
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
  logoutMenu: boolean;
}

class PageWrapper extends React.Component<any,IPageWrapperState> {
  constructor(props:any) {
    super(props);
    this.state ={
      authActive: false,
      logoutMenu: false,
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.registrationSubmit = this.registrationSubmit.bind(this);
    this.onLogoutArrowClick = this.onLogoutArrowClick.bind(this);
    this.onBlurLogout = this.onBlurLogout.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  
  componentDidMount() {
    if(!this.props.isLoggedIn && localStorage.length!== 0) {
      const currentUser = {
        currentName: localStorage.getItem('currentName'),
        currentSurname: localStorage.getItem('currentSurname'),
      };
      const token = localStorage.getItem('token');

      this.props.actions.getDataFromStorage(currentUser, token)
    }
  }

  closeModal() {
    this.props.actions.modalActivate(false);
  }

  onLogout() {
    console.log('logout')
    localStorage.clear();
    this.props.actions.onLogout();
  }

  onLogoutArrowClick() {
    this.setState({logoutMenu: !this.state.logoutMenu});
  }

  onBlurLogout() {
    this.setState({logoutMenu: false});
  }

  openModal() {
    this.props.actions.modalActivate(true);
  }

  loginSubmit(formData: ILoginForm) {
    this.props.actions.onLogin(formData);
  }

  registrationSubmit(formData: IRegisterForm ) {
    this.props.actions.registration(formData);
  }

  headerProps = {
    isLoggedIn: this.props.isLoggedIn,
    currentUser: this.props.currentUser,
  }

  render() {
    const { isLoggedIn, currentUser } = this.props;

    return (<>
      <PageHeader 
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          handleLogInButton={this.openModal}
          onLogoutArrowClick={this.onLogoutArrowClick}
          onBlurLogout={this.onBlurLogout}
          logoutMenu={this.state.logoutMenu}
          onLogout={this.onLogout}
          />
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
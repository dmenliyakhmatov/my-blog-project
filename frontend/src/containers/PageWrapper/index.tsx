import React from 'react';
import PageHeader from '../../components/PageWrapper/MainHeader/PageHeader';
import Filters from '../PageWrapper/SideBar';
import LiveBlock from '../PageWrapper/LiveBlock/LiveBlock';
import AuthModal from '../AuthModal';
import './wrapper.css';

interface IPageWrapperState {
  authActive: boolean;
}
export default class PageWrapper extends React.Component<{},IPageWrapperState> {
  constructor(props:{}) {
    super(props);
    this.state ={
      authActive: false,
    }
    this.handleLogInButton = this.handleLogInButton.bind(this);
  }
  
  handleBlur() {
    this.setState({ authActive:false })
  }

handleLogInButton() {
  this.setState({ authActive: !this.state.authActive })
}


  render() {
    return (<>
      <PageHeader handleLogInButton={this.handleLogInButton} />
      <div className="content-box">
        <Filters />
        <section className="center-column">
          {this.props.children}
        </section>
        <LiveBlock />
      </div>
      {this.state.authActive &&
        <>
        <div className="popup" onClick={() => this.handleBlur()} ></div>
        <AuthModal  />
      </>}
      </>
    )
  }
}
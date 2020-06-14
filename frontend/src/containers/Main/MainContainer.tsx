import * as React from "react";
import PageHeader from '../../components/PageWrapper/MainHeader/PageHeader';
import Filters from '../PageWrapper/SideBar';
import LiveBlock from '../PageWrapper/LiveBlock/LiveBlock'
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
          <PageHeader isLoggedIn={false} />
          <div className="content-box">

            <Filters />
            <Posts />
            <LiveBlock />
          </div>
        </div>

      )
}
}
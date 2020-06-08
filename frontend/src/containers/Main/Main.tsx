import * as React from "react";
import PageHeader from './PageWrapper/MainHeader/PageHeader';
import Filters from './Filters';
import LiveBlock from '../containers/PageWrapper/LiveBlock/LiveBlock'
import Posts from '../containers/content/posts/posts'
import './main.css'

// 'HelloWorldProps' describes our props structure.
// For the state, we use the '{}' type.
export class Main extends React.Component {
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
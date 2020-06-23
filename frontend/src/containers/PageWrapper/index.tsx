import React from 'react';
import PageHeader from '../../components/PageWrapper/MainHeader/PageHeader';
import Filters from '../PageWrapper/SideBar';
import LiveBlock from '../PageWrapper/LiveBlock/LiveBlock';
import './wrapper.css';

export default class PageWrapper extends React.Component<{},{}> {
  constructor(props:{}) {
    super(props);

  }
  
  render() {
    return (<>
      <PageHeader />
      <div className="content-box">
        <Filters />
        <section className="center-column">
          {this.props.children}
        </section>
        <LiveBlock />
      </div>
      </>
    )
  }
}
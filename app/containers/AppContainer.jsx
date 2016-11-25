import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import GithubBanner from '../components/GithubBanner/GithubBanner';

const App = props => (
  <div>
    <GithubBanner />
    <div className="container">
      <h1>Abakus vs Online</h1>
      <Navbar />
      { props.children }
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;

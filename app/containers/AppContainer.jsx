import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const App = props => (
  <div className="container">
    <h1>Abakus vs Online</h1>
    <Navbar />
    { props.children }
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;

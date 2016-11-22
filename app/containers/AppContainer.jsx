import React from 'react';

const App = props => (
  <div className="container">
    <h1>Abakus vs Online</h1>
    { props.children }
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;

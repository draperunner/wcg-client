import React from 'react';

const App = props => (
  <div>
    <p>Its an app!</p>
    { props.children }
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;

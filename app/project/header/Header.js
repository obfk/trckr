import React from 'react';

import styles  from './Header.css'

const Header = React.createClass({
  render: function() {
    return (
      <div className={styles.container}>
        <h2>Trckr</h2>
      </div>
    );
  }
});

export default Header;

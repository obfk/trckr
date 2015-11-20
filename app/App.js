import React from 'react';

import Stories from './project/preview/Stories.js';

import styles from './App.css';

const App = React.createClass ({
  getInitialState: function() {
    return {
      stories: []
    };
  },

  componentDidMount: function() {
    this.setStoriesState_();
  },

  render: function() {
    return (<Stories stories={this.state.stories} />);
  },

  setStoriesState_: function() {
    $.get('/v5/projects/1486124/stories', function(result) {
      if (this.isMounted()) {
        this.setState({
          stories: result,
        });
      }
    }.bind(this));
  }
});

export default App;

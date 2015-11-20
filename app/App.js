import React from 'react';

import Header from './project/header/Header.js';
import Panel from './project/preview/Panel.js';

import styles from './App.css';

const App = React.createClass ({
  getInitialState: function() {
    return {
      unstarted:   [],
      started:     [],
      finished:    [],
      delivered:   [],
      rejected:    [],
      accepted:    [],
      unscheduled: []
    };
  },

  componentDidMount: function() {
    this.setStoriesState_();
  },

  render: function() {
    return (
      <div className={styles.container} >
        <Header />
        <Panel stories={this.state.unstarted} panelState={'unstarted'} />
      </div>
    );
  },

  // TODO: DRY up
  setStoriesState_: function() {
    $.get('/v5/projects/1486124/stories?filter=state%3Aunstarted', function(result) {
      if (this.isMounted()) {
        this.setState({
          unstarted: result,
        });
      }
    }.bind(this));

    $.get('/v5/projects/1486124/stories?filter=state%3Astarted', function(result) {
      if (this.isMounted()) {
        this.setState({
          started: result,
        });
      }
    }.bind(this));

    $.get('/v5/projects/1486124/stories?filter=state%3Afinished', function(result) {
      if (this.isMounted()) {
        this.setState({
          finished: result,
        });
      }
    }.bind(this));

    $.get('/v5/projects/1486124/stories?filter=state%3Adelivered', function(result) {
      if (this.isMounted()) {
        this.setState({
          delivered: result,
        });
      }
    }.bind(this));

    $.get('/v5/projects/1486124/stories?filter=state%3Arejected', function(result) {
      if (this.isMounted()) {
        this.setState({
          rejected: result,
        });
      }
    }.bind(this));

    $.get('/v5/projects/1486124/stories?filter=state%3Aaccepted', function(result) {
      if (this.isMounted()) {
        this.setState({
          accepted: result,
        });
      }
    }.bind(this));

    $.get('/v5/projects/1486124/stories?filter=state%3Aunscheduled', function(result) {
      if (this.isMounted()) {
        this.setState({
          unscheduled: result,
        });
      }
    }.bind(this));
  }
});

export default App;

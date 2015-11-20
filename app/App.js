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

        {this.state.accepted.length > 0 ?
          <Panel stories={this.state.accepted} panelState={'accepted'} /> : null
        }
        {this.state.finished.length > 0 ?
          <Panel stories={this.state.finished} panelState={'finished'} /> : null
        }
        {this.state.delivered.length > 0 ?
          <Panel stories={this.state.delivered} panelState={'delivered'} /> : null
        }
        {this.state.started.length > 0 ?
          <Panel stories={this.state.started} panelState={'started'} /> : null
        }
        {this.state.rejected.length > 0 ?
          <Panel stories={this.state.rejected} panelState={'rejected'} /> : null
        }
        {this.state.unstarted.length > 0 ?
          <Panel stories={this.state.unstarted} panelState={'unstarted'} /> : null
        }
        {this.state.unscheduled.length > 0 ?
          <Panel stories={this.state.unscheduled} panelState={'unscheduled'} /> : null
        }

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

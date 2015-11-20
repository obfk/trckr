import React from 'react';

import Story from './Story.js';

import styles from './App.css';

const App = React.createClass ({
  getInitialState: function() {
    return {
      stories: []
    };
  },

  componentDidMount: function() {
    // $.get('/v5/projects/1486124/stories', function(result) {
    //   if (this.isMounted()) {
    //     this.setState({
    //       stories: result,
    //     });
    //   }
    // }.bind(this));
  },

  render: function() {
    return (
      <div>
        {
          this.state.stories.map(story => {
            return <Story key={story.id} story={story} />
          })
        }
      </div>
    );
  }
});

export default App;

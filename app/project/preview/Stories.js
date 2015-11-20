import React from 'react';

import Story from './Story.js';

import styles from './Stories.css';

const Stories = React.createClass ({
    render: function() {
    return (
      <div>
        {
          this.props.stories.map(story => {
            return <Story key={story.id} story={story} />
          })
        }
      </div>
    );
  }
});

export default Stories;

import React from 'react';

import styles from './Story.css';

const Story = React.createClass({
  render: function() {
    return (
      <div className={`${styles.row} ${styles[this.storyState_(this.props.story.current_state)]}`}>
        <span className={`${styles['col-story-type']}`}>
          {this.props.story.story_type}
        </span>

        <span className='col-story-name'>
          {this.props.story.name}
        </span>
      </div>
    );
  },

  storyState_: function(currentState) {
    switch (currentState) {
      case 'unscheduled':
        return 'unscheduled';
      case 'unstarted':
        return 'unstarted';
      case 'accepted':
        return 'accepted';
      default:
        return 'started';
    }
  }
});

export default Story;

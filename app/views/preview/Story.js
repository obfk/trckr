import React from 'react';

import styles from './Story.css';

const Story = React.createClass({
  render: function() {
    return (
      <div className={`row ${styles.row} ${styles[this.storyState_(this.props.story.current_state)]}`}>
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
      case 'accepted':
        return 'accepted';
      case 'delivered':
        return 'delivered';
      case 'finished':
        return 'finished';
      case 'started':
        return 'started';
      case 'rejected':
        return 'rejected';
      case 'unstarted':
        return 'unstarted';
      default:
        return 'unscheduled';
    }
  }
});

export default Story;

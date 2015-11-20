import React from 'react';

import Story from './Story.js';

import styles from './Panel.css';

const Panel = React.createClass ({
  render: function() {
    return (
      <div className={styles[this.props.panelState]}>

        <h4 className={styles.section_heading}>{this.props.panelState}</h4>

        {
          this.props.stories.map(story => {
            return <Story key={story.id} story={story} />
          })
        }
      </div>
    );
  }
});

export default Panel;

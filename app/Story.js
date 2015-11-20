import React from 'react';

const Story = React.createClass({
  render: function() {
    return (
      <div>
        <span>{this.props.story.story_type}</span>
        <span>{this.props.story.name}</span>
        <span>{this.props.story.current_state}</span>
      </div>
    );
  }
});

export default Story;

import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

@observer([ 'timerStore' ])
class TimerRoute extends Component {

  static propTypes = {
    timerStore: PropTypes.object.isRequired
  }

  onReset = () => {
    this.props.timerStore.resetTimer();
  }

  render() {
    return (
      <div>
        <button onClick={ this.onReset }>
          click to reset: { this.props.timerStore.timer }
        </button>
      </div>
    );
  }
}

export default TimerRoute;

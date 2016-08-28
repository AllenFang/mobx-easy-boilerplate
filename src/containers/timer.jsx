import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

require('styles/timer.css');

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
      <section className='buttons'>
        <div className='timer'>
          <a className='button' onClick={ this.onReset }>
            click to reset: { this.props.timerStore.timer }
          </a>
        </div>
      </section>
    );
  }
}

export default TimerRoute;

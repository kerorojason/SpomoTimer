import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LinesEllipsis from 'react-lines-ellipsis';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { timeLeft: null, working: true };
  }
  async componentDidMount() {
    // start playing music
    this.props.startTimer();

    // start counting down
    this.setState({ timeLeft: this.props.timerState.workTime * 10 });
    this.intervalId = setInterval(() => {
      if (this.state.timeLeft > 0) {
        this.setState(state => ({ ...state, timeLeft: state.timeLeft - 1 }));
      } else {
        this.setState(state => ({ working: !state.working }));
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  componentWillUnmount() {
    // clearInterval(this.intervalId);
  }

  componentDidUpdate(prevProps, prevState) {
    // check if props.timerState.working changed
    // (work <=> break)
    if (prevState.working !== this.state.working) {
      this.restartCounting();
      // add todo item count
      if (prevState.working) {
        this.props.addCount(this.props.timerState.todo);
      }
    }
  }

  restartCounting() {
    // reset timeleft
    this.setState(state => ({
      timeLeft:
        this.props.timerState[state.working ? 'workTime' : 'breakTime'] * 10
    }));

    // restart counter
    this.intervalId = setInterval(() => {
      if (this.state.timeLeft > 0) {
        this.setState(state => ({ ...state, timeLeft: state.timeLeft - 1 }));
      } else {
        this.setState(state => ({ working: !state.working }));
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  renderTime() {
    let min = Math.floor(this.state.timeLeft / 60);
    let sec = this.state.timeLeft % 60;
    sec = sec < 10 ? '0' + sec : sec;
    return `${min} : ${sec}`;
  }

  render() {
    const { timerState } = this.props;
    return (
      <div className='timer'>
        <h3 className='timer__time'>{this.renderTime()}</h3>
        <p className='timer__todo'>
          {this.state.working
            ? `Work on: ${
                this.props.todos.find(todo => todo.id === timerState.todo).text
              }!`
            : 'Take a break~'}
        </p>
        <div
          className='timer__img'
          style={{
            backgroundImage: this.state.working
              ? `url(${timerState.workList.images[0].url})`
              : `url(${timerState.breakList.images[0].url})`
          }}
        >
          <div
            className='timer__control timer__control--prev '
            onClick={this.props.playNext}
          >
            <i className='fas fa-step-forward' />
          </div>
          <div
            className='timer__control timer__control--next'
            onClick={this.props.playPrev}
          >
            <i className='fas fa-step-backward' />
          </div>
        </div>
        <div className='timer__playlist'>
          <LinesEllipsis
            text={this.props.timerState.workList.name}
            maxLine='2'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ timerState, todos }) {
  return { timerState, todos };
}

export default connect(
  mapStateToProps,
  actions
)(Timer);

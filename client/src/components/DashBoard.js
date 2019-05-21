import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.selectDevice = this.selectDevice.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
  }

  async componentDidMount() {
    await this.props.fetchDevices();

    // set default value
    this.props.setSelectedDevice(
      this.props.devices[0] ? this.props.devices[0].id : undefined
    );
    this.props.setSelectedTodo(
      this.props.todos.length > 0 ? this.props.todos[0].id : undefined
    );
  }

  renderImg(list) {
    return list ? (
      <img src={list.images[0].url} className='dashboard__img' alt='playlist' />
    ) : (
      <p>Playlist not selected</p>
    );
  }

  selectDevice(e) {
    this.props.setSelectedDevice(e.target.value);
  }

  selectTodo(e) {
    this.props.setSelectedTodo(e.target.value);
  }

  render() {
    const {
      workList,
      breakList,
      device,
      todo,
      workTime,
      breakTime
    } = this.props.timerState;
    return (
      <section className='dashboard'>
        <div data-tip data-for='happyFace' className='dashboard__main-wrapper'>
          <Link
            to='/timer'
            className={
              workList && breakList
                ? 'dashboard__main-title'
                : 'dashboard__main-title dashboard__main-title--inactive'
            }
          >
            <i className='fas fa-play-circle' />
            <br />
            Start working !
          </Link>
        </div>
        {workList && breakList ? (
          ''
        ) : (
          <ReactTooltip id='happyFace' place='right' type='dark' effect='float'>
            <span>Please selecte playlist first :)</span>
          </ReactTooltip>
        )}

        <div className='select-section'>
          <div className='select'>
            <select
              onChange={this.selectTodo}
              value={todo ? todo : 'Select a todo item'}
            >
              <option disabled>Choose a todo item</option>
              {this.props.todos
                ? this.props.todos.map(todo => (
                    <option value={todo.id} key={todo.id}>
                      {todo.text}
                    </option>
                  ))
                : ''}
            </select>
          </div>

          <div className='select'>
            <select
              onChange={this.selectDevice}
              value={device ? device.name : 'Select a device'}
            >
              <option disabled>Choose a device</option>
              {this.props.devices
                ? this.props.devices.map(device => (
                    <option value={device.id} key={device.name}>
                      {device.name}
                    </option>
                  ))
                : ''}
            </select>
          </div>
        </div>

        <div className='dashboard__setter dashboard__setter--work'>
          <h2 className='dashboard__title'>Work time</h2>
          <button className='dashboard__btn' onClick={this.props.minusWorkTime}>
            <i className='fas fa-arrow-circle-left' />
          </button>
          <input
            className='dashboard__input'
            type='text'
            value={workTime}
            onChange={e => this.props.setWorkTime(e.target.value)}
          />
          <button className='dashboard__btn' onClick={this.props.addWorkTime}>
            <i className='fas fa-arrow-circle-right' />
          </button>
          {this.renderImg(workList)}
          <h4 className='playLists__name'>{workList ? workList.name : ''}</h4>
        </div>

        <div className='dashboard__setter dashboard__setter--break'>
          <h2 className='dashboard__title'>Break time</h2>
          <button
            className='dashboard__btn'
            onClick={this.props.minusBreakTime}
          >
            <i className='fas fa-arrow-circle-left' />
          </button>
          <input
            className='dashboard__input'
            type='text'
            value={breakTime}
            onChange={e => this.props.setBreakTime(e.target.value)}
          />
          <button className='dashboard__btn' onClick={this.props.addBreakTime}>
            <i className='fas fa-arrow-circle-right' />
          </button>
          {this.renderImg(breakList)}
          <h4 className='playLists__name'>{breakList ? breakList.name : ''}</h4>
        </div>
      </section>
    );
  }
}

function mapStateToProps({ timerState, devices, todos }) {
  return { timerState, devices, todos };
}

export default connect(
  mapStateToProps,
  actions
)(DashBoard);

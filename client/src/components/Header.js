import React, { Component } from 'react';
import { connect } from 'react-redux'; //let certain components able to call action-creaters as props
import { NavLink } from 'react-router-dom';

class Header extends Component {
  renderLogin() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <ul className='header__list'>
            <li className='header__item'>
              <NavLink
                to='/dashboard'
                className='header__link'
                activeStyle={{ color: '#ffa7c4' }}
              >
                Dashboard
              </NavLink>
            </li>
            <li className='header__item'>
              <NavLink
                to='/todo-list'
                className='header__link'
                activeStyle={{ color: '#ffa7c4' }}
              >
                TodoList
              </NavLink>
            </li>
            <li className='header__item'>
              <NavLink
                to='/play-list'
                className='header__link'
                activeStyle={{ color: '#ffa7c4' }}
              >
                PlayList
              </NavLink>
            </li>
            <li className='header__item'>
              <a className='header__link' href='/api/logout'>
                Logout
              </a>
            </li>
          </ul>
        );
    }
  }
  render() {
    return (
      <header className='header'>
        <img className='header__img' src='./pomodoro.svg' alt='logo' />
        <h1 className='header__title'>SpomoTimer</h1>
        {this.renderLogin()}
      </header>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(
  mapStateToProps,
  null
)(Header);

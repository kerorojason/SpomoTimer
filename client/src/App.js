import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import queryString from 'query-string';
import { connect } from 'react-redux'; //let certain components able to call action-creaters as props
import * as actions from './actions';

import Header from './components/Header';
import LoginPage from './components/LoginPage';
import PlayListsSection from './components/PlayListsSection';
import DashBoard from './components/DashBoard';
import TodoList from './TodoList/TodoList';
import Timer from './components/Timer';

class App extends Component {
  async componentDidMount() {
    // 取得登入資訊
    await this.props.fetchUser();
    if (this.props.auth) {
      this.props.fetchTodos();
    }

    // this.props.fetchPlayLists(this.props.auth);

    // 若從/auth/spotify/callback redirect
    // 用URI 抓token 存到 locatstorage 和 store
    // let parsed = queryString.parse(window.location.search);
    // if (parsed.access_token && parsed.refresh_token) {
    //   localStorage.setItem(
    //     'state',
    //     JSON.stringify({
    //       accessToken: parsed.access_token,
    //       refreshToken: parsed.refresh_token
    //     })
    //   );
    // }
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <LoginPage />;
      default:
        return (
          <section style={{ width: '85%', margin: 'auto' }}>
            <Switch>
              <Route exact path='/timer' component={Timer} />
              <Redirect from='/DashBoard' to='/' />
              <Route exact path='/todo-list' component={TodoList} />
              <Route exact path='/play-list' component={PlayListsSection} />
              <Route exact path='/' component={DashBoard} />
            </Switch>
          </section>
        );
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(
  mapStateToProps,
  actions
)(App);

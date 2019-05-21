import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PlayLists from './PlayLists';

class PlayListsSection extends Component {
  componentDidMount() {
    this.props.fetchPlayLists('myLists');
  }

  render() {
    const category = this.props.playLists
      ? this.props.playLists.category
      : null;
    return (
      <div className='playLists'>
        <ul className='playLists__nav'>
          <button
            className='playLists__nav-item'
            onClick={() => this.props.fetchPlayLists('myLists')}
            style={{
              color: category === 'myLists' ? '#ffa7c4' : 'inherit'
            }}
          >
            MyLists
          </button>
          <button
            className='playLists__nav-item'
            onClick={() => this.props.fetchPlayLists('genres')}
            style={{
              color:
                ['myLists', 'programming', 'studying'].indexOf(category) === -1
                  ? '#ffa7c4'
                  : 'inherit'
            }}
          >
            Genres & Mood
          </button>
          <button
            className='playLists__nav-item'
            onClick={() => this.props.fetchPlayLists('programming')}
            style={{
              color: category === 'programming' ? '#ffa7c4' : 'inherit'
            }}
          >
            Programming
          </button>
          <button
            className='playLists__nav-item'
            onClick={() => this.props.fetchPlayLists('studying')}
            style={{
              color: category === 'studying' ? '#ffa7c4' : 'inherit'
            }}
          >
            Studying
          </button>
        </ul>
        <PlayLists />
      </div>
    );
  }
}
function mapStateToProps({ playLists }) {
  return { playLists };
}

export default connect(
  mapStateToProps,
  actions
)(PlayListsSection);

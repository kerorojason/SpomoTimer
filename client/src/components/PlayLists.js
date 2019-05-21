import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LinesEllipsis from 'react-lines-ellipsis';

class PlayLists extends Component {
  renderLists(playLists) {
    return playLists ? (
      this.props.playLists.category === 'genres' ? (
        playLists.items.map((playList, key) => (
          <div className='playLists__item' key={key}>
            <div
              className='playLists__img'
              style={{
                backgroundImage: `url(${playList.icons[0].url})`
              }}
              onClick={() => this.props.fetchPlayLists(playList.id)}
            />
            <h4 className='playLists__name'>{playList.name}</h4>
          </div>
        ))
      ) : (
        playLists.items.map((playList, key) => (
          <div className='playLists__item' key={key}>
            <div
              className='playLists__img'
              style={{
                backgroundImage: `url(${playList.images[0].url})`
              }}
            >
              <div
                className='playLists__add playLists__add--work'
                onClick={() =>
                  this.props.setSelectedLists({ workList: playList })
                }
              >
                {/* <i className='fal fa-plus-circle playLists__add-icon' />  */}
                <i className='fas fa-plus playLists__add-icon' />
                Work
              </div>
              <div
                className='playLists__add playLists__add--break'
                onClick={() =>
                  this.props.setSelectedLists({ breakList: playList })
                }
              >
                <i className='fas fa-plus playLists__add-icon' />
                Break
                {/* <i className='fal fa-plus-circle ' /> Break */}
              </div>
            </div>
            {/* <p className='playLists__name'>{playList.name}</p> */}
            <div className='playLists__name'>
              <LinesEllipsis
                text={playList.name}
                maxLine='2'
                ellipsis='...'
                trimRight
                basedOn='letters'
              />
            </div>
          </div>
        ))
      )
    ) : (
      <div>Loading PlayLists</div>
    );
  }
  render() {
    return (
      <div className='playLists__list'>
        {this.renderLists(this.props.playLists)}
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
)(PlayLists);

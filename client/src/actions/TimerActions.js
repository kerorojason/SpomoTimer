import axios from 'axios';

export const fetchDevices = () => async (dispatch, getState) => {
  const res = await axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/me/player/devices',
    headers: {
      Authorization: 'Bearer ' + getState().auth.spotifyAccessToken
    }
  });
  dispatch({
    type: 'FETCH_DEVICES',
    payload: res.data.devices
  });
};

export const setSelectedDevice = device => async dispatch => {
  dispatch({ type: 'SET_DEVICE', payload: { device } });
};

export const setSelectedTodo = todo => async dispatch => {
  dispatch({ type: 'SET_TODO', payload: { todo } });
};

export const startTimer = () => async (dispatch, getState) => {
  // get uri array from playlist
  let uris = await axios({
    method: 'get',
    url: `https://api.spotify.com/v1/playlists/${
      getState().timerState.workList.id
    }/tracks`,
    headers: {
      Authorization: 'Bearer ' + getState().auth.spotifyAccessToken
    },
    params: { fields: 'items(track(name, artists, id))' }
  });
  uris = await uris.data.items.map(item => 'spotify:track:' + item.track.id);

  // set shuffle
  // await axios({
  //   method: 'put',
  //   url: 'https://api.spotify.com/v1/me/player/shuffle?state=true',
  //   headers: {
  //     Authorization: 'Bearer ' + getState().auth.spotifyAccessToken
  //   }
  // });

  // start playing playlist
  await axios({
    method: 'put',
    url:
      'https://api.spotify.com/v1/me/player/play?device_id=' +
      getState().timerState.device,
    headers: {
      Authorization: 'Bearer ' + getState().auth.spotifyAccessToken
    },
    data: {
      // context_uri: 'spotify:playlist:' + getState().timerState.work.id
      uris: uris
    }
  });
};

export const playNext = () => async (dispatch, getState) => {
  await axios({
    method: 'post',
    url: 'https://api.spotify.com/v1/me/player/next',
    headers: {
      Authorization: 'Bearer ' + getState().auth.spotifyAccessToken
    }
  });
};

export const playPrev = () => async (dispatch, getState) => {
  await axios({
    method: 'post',
    url: 'https://api.spotify.com/v1/me/player/previous',
    headers: {
      Authorization: 'Bearer ' + getState().auth.spotifyAccessToken
    }
  });
};

export const setWorkTime = workTime => ({
  type: 'SET_WORKTIME',
  payload: +workTime
});

export const addWorkTime = () => ({
  type: 'ADD_WORKTIME'
});

export const minusWorkTime = () => ({
  type: 'MINUS_WORKTIME'
});

export const setBreakTime = breakTime => ({
  type: 'SET_BREAKTIME',
  payload: +breakTime
});

export const addBreakTime = () => ({
  type: 'ADD_BREAKTIME'
});
export const minusBreakTime = () => ({
  type: 'MINUS_BREAKTIME'
});

// export const initTimeLeft = time => ({
//   type: 'INIT_TIMELEFT',
//   payload: time * 60
// });

// export const countDown = () => ({
//   type: 'COUNT_DOWN'
// });

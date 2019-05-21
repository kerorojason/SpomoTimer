import axios from 'axios';

export const fetchPlayLists = listType => async (dispatch, getState) => {
  const searchName = listName =>
    axios({
      method: 'get',
      url: `https://api.spotify.com/v1/search?q=${listName}&type=playlist`,
      headers: {
        Authorization: 'Bearer ' + getState().auth.spotifyAccessToken
      },
      params: {
        limit: 24
        // offset: 10
      }
    });

  switch (getState().auth) {
    case null:
      return;
    default:
      let res;
      switch (listType) {
        case 'genres':
          res = await axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/browse/categories?country=TW',
            headers: {
              Authorization: 'Bearer ' + getState().auth.spotifyAccessToken
            },
            params: {
              limit: 24
              // offset: 10
            }
          });
          dispatch({
            type: 'FETCH_PLAYLISTS',
            payload: { ...res.data.categories, category: 'genres' }
          });
          break;

        case 'programming':
          res = await searchName('programming');
          dispatch({
            type: 'FETCH_PLAYLISTS',
            payload: { ...res.data.playlists, category: 'programming' }
          });
          break;

        case 'studying':
          res = await searchName('studying');
          dispatch({
            type: 'FETCH_PLAYLISTS',
            payload: { ...res.data.playlists, category: 'studying' }
          });
          break;

        case 'myLists':
          res = await axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/me/playlists',
            headers: {
              Authorization: 'Bearer ' + getState().auth.spotifyAccessToken
            },
            params: {
              limit: 24
              // offset: 10
            }
          });
          dispatch({
            type: 'FETCH_PLAYLISTS',
            payload: { ...res.data, category: 'myLists' }
          });
          break;

        default:
          res = await axios({
            method: 'get',
            url: `https://api.spotify.com/v1/browse/categories/${listType}/playlists?country=TW`,
            headers: {
              Authorization: 'Bearer ' + getState().auth.spotifyAccessToken
            },
            params: {
              limit: 24
              // offset: 10
            }
          });
          dispatch({
            type: 'FETCH_PLAYLISTS',
            payload: { ...res.data.playlists, category: listType }
          });
          break;
      }
  }
};

export const setSelectedLists = playList => async dispatch => {
  dispatch({ type: 'SET_PLAYLIST', payload: playList });
};

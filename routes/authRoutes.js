const passport = require('passport');
const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  // app.use(passport.initialize());

  app.get(
    '/auth/spotify',
    passport.authenticate('spotify', {
      scope: [
        'streaming',
        'user-read-birthdate',
        'user-read-email',
        'user-read-private',
        'playlist-read-private',
        'user-modify-playback-state',
        'user-read-playback-state'
        //,'app-remote-control'
      ],
      showDialog: true
    }),
    function(req, res) {
      // The request will be redirected to spotify for authentication, so this
      // function will not be called.
    }
  );

  app.get(
    '/auth/spotify/callback',
    passport.authenticate('spotify', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect(
        // '/'
        '/?access_token=' +
          req.user.spotifyAccessToken +
          '&refresh_token=' +
          req.user.spotifyRefreshToken
      );
    }
  );

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
    // res.send(req.session);
  });

  app.get('/api/get_token', (req, res) => {
    res.send({
      access_token: req.user.spotifyAccessToken,
      refresh_token: req.user.spotifyRefreshToken
    });
  });

  app.get('/api/refresh_token', (req, res) => {
    axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      params: {
        grant_type: 'refresh_token',
        refresh_token: req.user.spotifyRefreshToken
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          Buffer.from(
            `${keys.spotifyClientID}:${keys.spotifyClientSecret}`
          ).toString('base64')
      }
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  });

  app.get('/api/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};

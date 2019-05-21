const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const keys = require('../config/keys');

const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: keys.spotifyClientID,
      clientSecret: keys.spotifyClientSecret,
      callbackURL: '/auth/spotify/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ spotifyId: profile.id });
      if (existingUser) {
        // 已存在：更新token
        existingUser.set({
          spotifyAccessToken: accessToken,
          spotifyRefreshToken: refreshToken
        });
        await existingUser.save();
        return done(null, existingUser);
      }
      // 不存在：新建user
      const user = await new User({
        spotifyId: profile.id,
        spotifyAccessToken: accessToken,
        spotifyRefreshToken: refreshToken,
        todos: []
      }).save();
      console.log(user);
      return done(null, user);
    }
  )
);

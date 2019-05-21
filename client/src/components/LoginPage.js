import React from 'react';
export default () => {
  return (
    <div className='login-page'>
      <p className='login-page__title'>
        Make a musical pomodoro timer integrated with Spotify!
      </p>
      <a className='login-page__btn' href='/auth/spotify'>
        Login with Spotify
      </a>
      <img
        className='login-page__img'
        src='./bg-1-headphone-no-shelf.svg'
        alt='head'
      />
    </div>
  );
};

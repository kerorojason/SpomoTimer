# Spomo-Timer (Spotify Pomodoro)
A web applicaiton integrated Spotify music player, todo list and pomodoro clock all together.
## Demo Link
https://spomo-timer.herokuapp.com/
## How to Use
- Login page.
![](https://i.imgur.com/OEUZrxZ.png)

- Log in with Spotify account.
![](https://i.imgur.com/OST6ZVd.png)

- Choose a playlist category (your favorite playlists, genres & mood, programming playlists, studying playlists).
![](https://i.imgur.com/VCPzSVg.jpg)

- Choose your working / breaking playlist.
![](https://i.imgur.com/23CxCMr.jpg)

- Edit your todo list
![](https://i.imgur.com/riUEK0e.png)

- Dashboard page
    - Choose a connected device you want to play your music and a todo item.
    - Select your working / breaking time.
![](https://i.imgur.com/nDRmhr5.png)
- Working page
![](https://i.imgur.com/WAZD2Rn.png)
- Breaking page
![](https://i.imgur.com/uKAI6Iz.png)
- Todo item updated!
![](https://i.imgur.com/cm3IWaQ.png)


## Framework Used
- Front end: React.js
- Back end: Node.js, Express.js 
## Module Used
- Front end: 
    - axios
    - react-redux
    - redux
    - redux-thunk
    - react-router
    - LinesEllipsis
    - font-awesome
    - emoji-dictionary
- Back end:
    - axios
    - uuid
    - body-parser
    - passport
    - mongoose
    - cookie-session
## Remarks
- Spomo-Timer doesn't have Spotify Web Playback SDK, which means you have to play music with your own Spotify player (any device connected to Spotify).
- Spomo-Timer server will not save your Spotify account and password, it will only receive your access token and refresh token.
## Todos
- Make the access toke refresh automatically. (Access token expires after an hour)
- Add require-login middleware for backend api.
- RWA
- Add pagination or lazy loading for playlist page.

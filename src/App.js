import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const[{user, token}, dispatch] = useStateValue();
 
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if(_token) {
      spotify.setAccessToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      
      
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlists: playlists,
        })
      })

      spotify.getPlaylist('5YoEtPYeMycVAt3S4Tnn5m').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      })
    }
    
  }, []);


  return (
    <div className="App">
      { token ? (<Player spotify={spotify} />) : <Login/> }
    </div>
  );
}

export default App;

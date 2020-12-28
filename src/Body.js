import React from 'react';
import "./Body.css";
import Header from './Header';
import { useStateValue } from './StateProvider';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body({spotify}) {
  const[{discover_weekly}, dispatch] = useStateValue();

  const playPlaylist = (id) => {
      spotify
        .play({
            context_uri: `5YoEtPYeMycVAt3S4Tnn5m`,
        })
        .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((result) => {
                dispatch({
                    type: 'SET_ITEM',
                    item: result.item
                });
                dispatch({
                    type: 'SET_PLAYING',
                    playing: true,
                });
            });
        });
  };

  const playSong = (id) => {
      spotify
        .play({
            uris: [`spotify:track:${id}`]
        })
        .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((result) => {
                dispatch({
                    type: 'SET_ITEM',
                    item: result.item
                });
                dispatch({
                    type: 'SET_PLAYING',
                    playing: true,
                });
            })
        })
  }

    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt=""/>
                <div className="body_infotext">
                    <strong>Playlist</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon 
                        className="body_shuffle" 
                        onClick={playPlaylist}
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
            </div>

            {discover_weekly?.tracks.items.map(item => (
                <SongRow playSong={playSong} track={item.track}/>
            ))}
        </div>
    )
}

export default Body

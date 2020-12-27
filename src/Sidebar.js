import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateValue } from './StateProvider';

function Sidebar() {
  const[{playlists}, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="logo"/>
            <SidebarOptions Icon={HomeIcon} title="Home"/>
            <SidebarOptions Icon={SearchIcon} title="Search"/>
            <SidebarOptions Icon={LibraryMusicIcon} title="Your Library"/>
            <br/>
            <strong className="sidebar_title">Playlists</strong>
            <hr/>
            {playlists?.items?.map((playlist) => (
                <span key={playlist.id}>
                    <SidebarOptions title={playlist.name}/>
                </span>
            ))}
        </div>
    )
}

export default Sidebar

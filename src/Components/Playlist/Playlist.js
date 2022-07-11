import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component { 
    constructor(props) {
        super(props); 
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSavePlaylist = this.handleSavePlaylist.bind(this); 
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    handleSavePlaylist() {
        this.props.onSave(); 
        document.getElementById("playlistName").value = "New Playlist"; 
    }


    render() { 
        return (
            <div className="Playlist">
                <input defaultValue={this.props.playlistName} onChange={this.handleNameChange} id="playlistName"/>
                <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
                <button className="Playlist-save" onClick={this.handleSavePlaylist}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist; 


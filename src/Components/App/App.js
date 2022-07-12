import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import Playlist from '../Playlist/Playlist';

// import Spotify from '../../utill/Spotify';
import TestData from '../../utill/TestData';

class App extends React.Component {
  constructor(props) {
    super(props); 

    this.addTrack = this.addTrack.bind(this); 
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this); 
    this.savePlaylist = this.savePlaylist.bind(this); 
    this.search = this.search.bind(this); 

    this.state = {
      searchResults: [],
      playlistName: "Enter Name of Routine",
      playlistTracks: []
    }

    this.runID = 0; 
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks; 

    this.runID++; 
    track.id = this.runID; 

    tracks.push(track); 
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)

    this.setState({playlistTracks: tracks})
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlaylist() {
    //const trackUris = this.state.playlistTracks.map(track => track.uri);
    // Spotify.savePlayList(this.state.playlistName, trackUris).then(() => {
    //   this.setState({
    //     playlistName: "New Playlist", 
    //     playlistTracks: []
    //   })
    // })

    this.setState({
      playlistName: "Enter Name of Routine",
      playlistTracks: []
    })
  }

  search(term) {
    // Spotify.search(term).then(searchResults => {
    //   this.setState({searchResults: searchResults})
    // })
    this.setState({searchResults: TestData.search(term)});
  }

  render() {
    return (
      <div>
        <h1><span className="highlight">AUTO</span> BUJO</h1>
        <div className='App'>
          <SearchBar onSearch={this.search} onCreate={this.addTrack}/>
          <div className='App-playlist'>
            <SearchResult searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

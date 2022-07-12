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
      playlistName: "New Set of Routine",
      playlistTracks: []
    }
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks; 
    if(tracks.find(savedTrack => savedTrack.id === track.id)){
      return; 
    } 

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
      playlistName: "New Set of Routine",
      playlistTracks: []
    })
  }

  search(term) {
    // Spotify.search(term).then(searchResults => {
    //   this.setState({searchResults: searchResults})
    // })

    if(TestData.search(term) === []){
      alert("Not found, Try again, Ex. rou 20");
    } else {
      this.setState({searchResults: TestData.search(term)})
    }

  }

  render() {
    return (
      <div>
        <h1><span className="highlight">AUTO</span> BUJO</h1>
        <div className='App'>
          <SearchBar onSearch={this.search}/>
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

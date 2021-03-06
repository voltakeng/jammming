import React from 'react';
import './SearchResult.css' 
import TrackList from '../TrackList/TrackList';

class SearchResult extends React.Component {
    render() { 
        return (
            <div className="SearchResults">
                <h2>Suggests</h2>
                <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false}/> 
            </div>
        )
    }
}

export default SearchResult; 

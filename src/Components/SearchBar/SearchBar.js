import React from 'react' 
import './SearchBar.css'

class SearchBar extends React.Component { 
    constructor(props) {
        super(props); 
        this.search = this.search.bind(this); 
        this.handleTermChange = this.handleTermChange.bind(this); 
    }

    search(searchKeywords) {
        this.props.onSearch(searchKeywords)
    }

    handleTermChange(event) {
        this.search(event.target.value)
    }

    render() { 
        return (
            <div className="SearchBar">
                <input placeholder="Example: routine 20 mins"/> 
                <button className="SearchButton" onClick={this.handleTermChange}>SEARCH!!!</button> 
            </div>
        );
    }
}

export default SearchBar;

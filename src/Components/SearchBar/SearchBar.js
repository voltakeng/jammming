import React from 'react' 
import './SearchBar.css'

class SearchBar extends React.Component { 
    constructor(props) {
        super(props); 
        this.search = this.search.bind(this); 
        this.handleTermChange = this.handleTermChange.bind(this); 
        this.handleCreate = this.handleCreate.bind(this); 
    }

    search(searchKeywords) {
        this.props.onSearch(searchKeywords);
    }

    handleTermChange(event) {
        this.search(event.target.value);
    }

    handleCreate() {
        const track = {
                id: 0, 
                name: document.getElementById("input").value, 
                artist: document.getElementById("mins").value + " mins", 
                album: "album"
        };
        this.props.onCreate(track);
    }

    render() { 
        return (
            <div className="SearchBar">
                <div className='Input'>
                    <input placeholder="ทำอะไร" id="input" onChange={this.handleTermChange}/>
                    <input type="number" id="mins" placeholder="กี่นาที"/>  
                </div>
                <button className="SearchButton" onClick={this.handleCreate}>SEARCH</button> 
            </div>
        );
    }
}

export default SearchBar;

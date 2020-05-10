import React, {Component} from 'react';
import CardList from './CardList';
import {disneyQuotes} from './disneyQuotes';
import SearchBox from './SearchBox';

class App extends Component {

    constructor (){
        super();
        this.state = {
            disneyQuotes: disneyQuotes,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value});
        
    }


    render() {
        const filteredList = this.state.disneyQuotes.filter( singleQuote => {
            return singleQuote.category.toLowerCase().includes(this.state.searchfield.toLowerCase())
            });
        return (
            <div className="tc flexbox flex-wrap">
                <SearchBox searchChangeProp={this.onSearchChange}/>
                <CardList disneyQuotes={filteredList}/>
            </div>
            );
        }
    }

export default App;
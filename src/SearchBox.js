import React from 'react';


const SearchBox = ({searchfield,searchChangeProp}) => {
    return (
        <div>
            <h2 className="white">Look for Marvel, Star Wars, Classic Disney, Pixar quote</h2>
            <input 
            className="f2 code pa2 ma3" 
            type='search' 
            placeholder='e.g.: "Marvel"'
            onChange={searchChangeProp}/>
            
        </div>
    )
}



export default SearchBox;
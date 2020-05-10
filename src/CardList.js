import React from 'react';
import Card from './Card';
import 'tachyons'; 

const CardList = ({disneyQuotes}) => {

    return (
        <div className="tc flexbox flex-wrap flex-grow">
        {
            disneyQuotes.map((disneyChar,i) => {
                return (
                    <Card 
                        key={disneyChar.id} 
                        id={disneyChar.id} 
                        name={disneyChar.name}
                        quote={disneyChar.quote}/>
            )})
        }
        
        </div>

    );
}

export default CardList;
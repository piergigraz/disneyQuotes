import React from 'react';


const Card = (props) => {
   const {name, id, quote} = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='loading..' src={require(`../src/img/${id}.jpg`)} width="200px"></img> 
            <div className="mw5">
                <h2>{name}</h2>    
                <p>{quote}</p>
            </div>  
        </div>
    );
};

export default Card;
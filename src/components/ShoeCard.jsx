import React from 'react';

const ShoeCard = props => {
    const {
        shoe: {shoe},
        shoe: {type},
        shoe: {brand},
        shoe: {model},
        shoe: {miles},
        shoe:{milesLeft},
        addMiles,

    } = props;

    //what we want returned to the screen
    return(
       <div>
           <p>
            <label htmlFor= "shoeId">Shoe</label>   
            <span id= "shoeId">{shoe}</span>
           </p>
           <p>
               <label htmlFor="shoeType">Type:</label>
               <span id="shoeType">{type}</span>
           </p>
           <p>
               <label htmlFor="shoeBrand">Brand:</label>
               <span id="shoeBrand">{brand}</span>
           </p>
           <p>
               <label htmlFor="shoeModel">Model:</label>
               <span id="shoeModel">{model}</span>
           </p>
           <p>
               <label htmlFor="miles">Miles:</label>
               <span id="miles">{miles}</span>
           </p>
           <p>
               <label htmlFor="milesLeft">Miles Left:</label>
               <span id="milesLeft">{miles ? (milesLeft-miles) : 0}</span>
           </p>
           <div>
               <button name={shoe} onClick={e=> { addMiles(e.target.name)}}>Add Miles</button>
           </div>
       </div>
    )
}

export default ShoeCard;
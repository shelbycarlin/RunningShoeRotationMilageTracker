import React from 'react';
class ShoeCard extends React.Component {
    render(){

    const {
        //shoeindividual grab the info from the shoe list element
        shoeIndividual: {shoe},
        shoeIndividual: {type},
        shoeIndividual: {brand},
        shoeIndividual: {model},
        shoeIndividual: {miles},
        shoeIndividual:{milesLeft},
        addMiles: {addMiles},

    } = this.props;

    //what we want returned to the screen
    return(
       <div className='shoeCard'>
           <p>
            <label htmlFor= "shoeId">Shoe </label>   
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
               <span id="milesLeft">{ (milesLeft-miles) }</span>
           </p>
           <div>
               <button 
               name={shoe}
               onClick={ e => addMiles(e.target.name)}>Add Miles</button>
           </div>
       </div>
    )
  }
}

export default ShoeCard;
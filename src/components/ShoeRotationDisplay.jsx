import React from "react";
import ShoeCard from './ShoeCard.jsx'

//we need to connect to the store to get the func props
class ShoeRotationDisplay extends React.Component {
        render() {

        const {
            shoeList,
            addMiles,
            updateNewType,

        } = this.props

    const shoeCardComponents = [];
    for (let i =0; i < shoeList.length; i++) {
        shoeCardComponents.push(
            <ShoeCard
            key = {'Shoe' + i}
            shoeIndividual = {shoeList[i]}
            addMiles = {addMiles}
            updateNewType={type}

            />
        )
    }

    
        return (
            <div>
                <h2>Current Shoe Rotation</h2>
                    {shoeCardComponents}
            </div>
            
           
        );
    };
}




//this holds the shoe cards 
//stretch have active and archive
//we have two child components in here 
    //ActiveShoeContainer
    //ArchiveShoeContainer
//what props do we need to pass down to shoeCard.jsx
    //shoe
    //type
    //brand
    //model
    //miles
    //milesLeft
//we want to iterate and push this component on to the shoes
//<ShoeCard>
    //shoe{i}
    //type:
    //Brand
    //Model
    //milesRun 
    //milesLeft
    //addMiles
    export default ShoeRotationDisplay

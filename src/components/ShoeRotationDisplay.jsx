import React from "react";
import ShoeCard from './ShoeCard.jsx'


const ShoeRotationDisplay = props => {
        const {
            shoeList,
            addMiles,
            milesLeft,

        } = props

    const shoeCardComponents = [];
    for (let i =0; i < props.shoeList.length; i++) {
        shoeCardComponents.push(
            <ShoeCard
            shoeList = {shoeList[i]}
            addMiles = {addMiles}

            />
        )
    }

    
        return (
            <h5>Shoe Rotation</h5>
            
           
        );
    };




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

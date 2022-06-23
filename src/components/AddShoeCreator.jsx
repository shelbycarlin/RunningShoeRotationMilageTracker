import React from "react";
//on button click we are dispatching the addShoe cunftion 

class AddShoeCreator extends React.Component {

    render() {
        return (
         <div className="shoeCreatorContainer">
            <h2>Add Shoe To Rotation</h2>
            <label htmlFor ="type">Choose Shoe Type: </label>
                <select name="type" id="type">
                    <option value="race">Race</option>
                    <option value="tempo">Tempo</option>
                    <option value="daily">Daily</option>
                    <option value="recovery">Recovery</option>
                </select>
            <label htmlFor="brand">Brand:</label>
            <input type="text" />
            <label htmlFor="model">Model:</label>
            <input type="text" />
            <button type='submit' onClick={this.props.addShoe}>Add Shoe To Rotation</button>

            {/* <button onClick={()=>{ props.addShoe() }}>Add Shoe To Rotation</button> */}
            {/* props.addShoe dispatch function */}
         </div>

        )
    }
}

//this hold the input fields to add newShoes
//what props do we need to pass down to shoeCard.jsx
    //shoe
    //type
    //brand
    //model
    //miles
    //milesLeft

    export default AddShoeCreator
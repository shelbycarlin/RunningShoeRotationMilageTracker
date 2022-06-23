//import react mehthods
import React, { Component } from 'react'
//used to acess the store
import { connect } from 'react-redux'
//import actions 

//import child components (containers and displays)
//import TotalMileDisplay from '../components/TotalMileDisplay'
//importing actions from the reducer
import { addMiles, addShoe } from '../reducers/shoe/actions.js';
//import AddShoeCreator to render the component
import AddShoeCreator from '../components/AddShoeCreator.jsx'
//import the ShoeRotationDisplay to render the component below
import ShoeRotationDisplay from '../components/ShoeRotationDisplay.jsx'
//need to acess shoe list from the store 

//declare map state to props 
//what props do we need to share with 
//what props do we need to share with shoe rotation container
const mapStateToProps = (state) => {
    return ({
    //need shoe list for shoeRotation container 
    shoeList: state.shoes.shoeList,
    //needShoeNumber for display
    shoe: state.shoe,
    //need shoe type for creator 
    type: state.type,
    //need shoe brand for creator 
    brand: state.brand,
    //need shoe model for creator 
    model: state.model,
    milesLeft: state.milesLeft
})};

const mapDispatchToProps = dispatch => ({
    //need this functionality to be passed down to the addShoeCreator
    addShoe: (newShoe) => {
        dispatch(addShoe(newShoe))
    },
    //passed down for shoeRotationDisplay
    addMiles: (shoe) => {
        dispatch(addMiles(shoe))
    }


});

//mapStatetoDispatch 
    //addShoe function needs to be passed down to add shoeCreator

class MainContainer extends Component {
    render() {
        const {
            shoeList,
            addShoe,
            milesLeft,
        } = this.props
        return (

            <div>
                <h3>hello?</h3>
                <AddShoeCreator addShoe = {addShoe} milesLeft = {milesLeft}/>
                <ShoeRotationDisplay addMiles = {addMiles} shoeList = {shoeList}/>
            </div>
        );
    };
}
//we have 1 element and 3 components in the main container 
    //header title
        //Running Shoe Rotation Milage Tracker
    //total mile display 
    //add shoe creator 
    //shoe rotation container

    //export default connect with mapstate to props and mapDispatch to props
    export default connect(mapStateToProps,mapDispatchToProps)(MainContainer);

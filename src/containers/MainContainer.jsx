//import react mehthods
import React, { Component } from 'react'
//used to acess the store
import { connect } from 'react-redux'
//import actions 

//import child components (containers and displays)
import TotalMileDisplay from '../components/TotalMileDisplay.jsx'
//importing actions from the reducer
import { addMiles, addShoe, setBrand, setModel, setType } from '../reducers/shoe/actions.js';
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
    totalMiles: state.shoes.totalMiles,
    //needShoeNumber for display
    //shoe: state.shoe,
    //need shoe type for creator 
    //type: state.type,
    //need shoe brand for creator 
    addBrand: state.shoes.addBrand,
    addModel: state.shoes.addModel,
    addType: state.shoes.addType
    //need shoe model for creator 
    //model: state.model,
   // milesLeft: state.milesLeft
})};

const mapDispatchToProps = dispatch => ({
    //need this functionality to be passed down to the addShoeCreator
    addShoe: () => {
        dispatch(addShoe())
    },
    //passed down for shoeRotationDisplay
    addMiles: (shoe) => {
        dispatch(addMiles(shoe))
    },

    updateNewBrand: (brand) => {
        dispatch(setBrand(brand))
    },

    updateNewModel: (model) => {
        dispatch(setModel(model))
    },

    updateNewType: (type) => {
        dispatch(setType(type))
    }


});

//mapStatetoDispatch 
    //addShoe function needs to be passed down to add shoeCreator

class MainContainer extends Component {
    render() {
        const {
            shoeList,
            addMiles,
            addShoe,
            totalMiles,
            addBrand,
            addModel,
            updateNewBrand,
            updateNewModel,
            updateNewType
        } = this.props
        return (

            <div className='mainContainerBox'>
                <h1>Running Shoe Rotation Milage Tracker</h1>
                <div className='totalMiles'>
                <TotalMileDisplay 
                    totalMiles={totalMiles}/>
                </div>
                <AddShoeCreator 
                    addShoe = {addShoe} 
                    shoeList = {shoeList} 
                    addBrand ={addBrand}
                    addModel ={addModel}
                    updateNewBrand ={updateNewBrand}
                    updateNewModel={updateNewModel}
                    updateNewType={updateNewType}
                    />
                <ShoeRotationDisplay 
                    addMiles = {addMiles} 
                    shoeList = {shoeList}
                    updateNewType={updateNewType}
                    />
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

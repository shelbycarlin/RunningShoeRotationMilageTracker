import { ADD_SHOE, ADD_MILES, SET_BRAND, SET_MODEL, SET_TYPE } from "./types";

const INTIAL_STATE = {
    totalMiles:0,
    shoeList:[],
    shoe:0,
    type:'',
    brand:'',
    model:'',
    miles:0,
    milesLeft:400,
};

const shoeReducer = (state = INTIAL_STATE, action) => {
    let shoeList = []
    let miles;
    let milesLeft;
    let totalMiles
    let shoe
    switch (action.type) {
        case ADD_SHOE:{
            //increment the id number for shoes 
            shoe = ++state.shoe;
            //create the new shoe object from provided data
            const newUserShoe = {
                shoe:shoe,
                type:state.addType,
                brand: state.addBrand,
                model: state.addModel,
                miles:state.miles, 
                milesLeft: state.milesLeft
            };
            //make a copy of the shoeList 
            shoeList = state.shoeList.slice();
            //pushes the newUserShoe onto the copy 
            shoeList.push(newUserShoe);


            return {
                ...state,
                shoeList,
                shoe,
                type:'',
                brand:'',
                model:'',
                type:''
            };
        }
        case ADD_MILES:{
        //     const newShoeList = state.shoeList.map((shoeCard,shoe) => {
        //         if (shoe === actionpayload) {
        //             return{
        //             ...shoeCard,
        //             miles: shoeCard.miles +1,
        //             milesLeft: shoeCard.milesLeft -1
        //         }
        //     }
        // })
            //make copy of shoe list 
            shoeList = state.shoeList.slice();
            totalMiles = state.totalMiles
            miles = state.miles
            //make copy of totalmiles
            // for (let i = 0; i < shoeList.length; i++) {
            //     if (shoeList[i])
            // }
           // totalMiles = state.totalMiles;
            //looping mechanism 
            for (let i = 0; i < shoeList.length; i++) {
                if (shoeList[i].shoe === action.payload) {
                    console.log('working')
                        shoeList[i].miles += 1
                        shoeList[i].milesLeft -= 1
                        totalMiles++
                    }
                    // ++shoeList[i].miles;
                    // --shoeList[i].milesLeft;
                    // //totalMiles++;
                    // break;)
                }
                 
            return {
                ...state,
                shoeList,
                totalMiles
                // totalMiles: state.totalMiles +1,
                // shoeList: newShoeList
            };
        }
        case SET_BRAND:{
            return {
                ...state,
                //totalMiles,
                addBrand: action.payload
            };
        }
        case SET_MODEL:{
            return {
                ...state,
                //totalMiles,
                addModel: action.payload
            };
        }
        case SET_TYPE:{
            return{
                ...state,
                addType: action.payload
            }
        }
        default: 
            return state
    }
};

export default shoeReducer

import { ADD_SHOE, ADD_MILES } from "./types";

const INTIAL_STATE = {
    //totalMiles:0,
    shoeList:[],
    shoe:0,
    type:'',
    brand:'',
    model:'',
    miles:0,
    milesLeft:400,
};

const shoeReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case ADD_SHOE:{
            //increment the id number for shoes 
            const currentShoe = ++state.shoe;
            //create the new shoe object from provided data
            const newUserShoe = {
                currentShoe,
                type: state.type,
                brand: state.brand,
                model: state.model,
                miles:0, 
                milesLeft: 400
            };
            //make a copy of the shoeList 
            newshoeList = state.shoeList.slice();
            //pushes the newUserShoe onto the copy 
            newShoeList.push(newUserShoe);


            return {
                ...state,
                shoeList:newShoeList,
                shoe: currentShoe,
                type:'',
                brand:'',
                model:'',
            };
        }
         default: 
            return state
    

        case ADD_MILES:{
            //make copy of shoe list 
            newShoeList = state.shoeList.slice();
            //make copy of totalmiles
           // totalMiles = state.totalMiles;
            //looping mechanism 
            for (let i = 0; i < newShoeList.length; i++) {
                if (newShoeList[i].shoe === action.payload) {
                    newShoeList[i].miles++;
                    newShoeList[i].milesLeft--;
                    //totalMiles++;
                    break;
                }
            };
            return {
                ...state,
                //totalMiles,
                shoeList: newShoeList,
            };
        }
    }
};

export default shoeReducer

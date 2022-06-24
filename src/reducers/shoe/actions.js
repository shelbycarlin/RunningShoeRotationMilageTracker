import { ADD_SHOE, ADD_MILES, SET_BRAND, SET_MODEL } from "./types";
//both trigger the action and report to the store 

// export const addShoe = event => (dispatch, getState) => {
//     event.preventDefault();
//     const shoeBrand = getState().shoes.brand
//     if (shoeBrand) {
//         dispatch ({  type:ADD_SHOE, payload:shoeBrand })
//     }
//     return {
//         type:ADD_SHOE,
//         payload:newShoe,
//     };
// };

// export const addMiles = (shoe) => (dispatch,getState) => {
//     if (getState().shoes.shoeList[shoe].miles <= 400) {
//         dispatch({ type:ADD_MILES, payload:shoe });
//     }
// };
 export const addShoe = () => {
    return {
        type:ADD_SHOE
    };
};

export const addMiles = (shoe) => {
    return {
        type:ADD_MILES,
        payload:shoe,
    };
};

export const setBrand = (brand) => {
    return {
        type:SET_BRAND,
        payload:brand
    }
};

export const setModel = (model) => {
    return {
        type:SET_MODEL,
        payload:model
    }
};

export const setType = (type) => {
    return{
        type:SET_TYPE,
        payload:type
    }
}


//setNewType?

//setnewbrand action creator 
//setnewmodel action creator
//setnew
// export const deleteShoe = (shoe) => {
//     return {
//         type:DELETE_SHOE,
//         payload:shoe,
//     };

// };
// export const archiveShoe = (shoe) => {
//     return {
//         type:ARCHIVE_SHOE,
//         payload:shoe,
//     };
// }
//readd to the imports

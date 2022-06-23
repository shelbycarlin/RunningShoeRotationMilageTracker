import { ADD_SHOE, ADD_MILES } from "./types";
//both trigger the action and report to the store 

export const addShoe = event => (dispatch, getState) => {
    event.preventDefault();
    const shoeBrand = getState().shoes.brand
    if (shoeBrand) {
        dispatch ({  type:ADD_SHOE, payload:shoeBrand })
    }
    return {
        type:ADD_SHOE,
        payload:newShoe,
    };
};

export const addMiles = (shoe) => (dispatch,getState) => {
    if (getState().shoes.shoeList[shoe].miles <= 400) {
        dispatch({ type:ADD_MILES, payload:shoe });
    }
};
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

import { combineReducers } from "redux";
import shoeReducers from './shoe/reducer'

const allReducers = combineReducers({
    shoes: shoeReducers,
});

export default allReducers;
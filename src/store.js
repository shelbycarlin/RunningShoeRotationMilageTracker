import { createStore } from 'redux';
import  allReducers  from './reducers/allReducers';

const store = createStore(
    allReducers
    //need to add other stuff when we get a server and db going
    );

export default store;
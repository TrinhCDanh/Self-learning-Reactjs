import status from './status';
import sort from './sort';
import { combineReducers } from 'redux'

// Create reduce
var myReducer = combineReducers({
    status, // status: status
    sort // sort: sort
});

export default myReducer;
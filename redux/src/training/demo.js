import { createStore } from 'redux';
import { status, sort } from './actions/index';
import myReducer from './reducer';


// Create store
const store = createStore(myReducer);

console.log('Default: ', store.getState());
// Create action -> dispatch


store.dispatch(status());

console.log('TOGGLE_STATUS: ', store.getState());


store.dispatch(sort({
    by: 'name',
    value: -1
}));
console.log('SORT: ', store.getState());
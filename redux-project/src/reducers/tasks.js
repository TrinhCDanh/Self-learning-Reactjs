import * as types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('tasks'));
const initialState = data ? data : [];

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LIST_All:
            return state;
        default: return state;
    }
}

export default myReducer;
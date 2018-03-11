import * as types from './../constants/ActionTypes';

const initialState = {
    id: '',
    name: '',
    status: false
};

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.EDIT_ITEM:
            return action.task;
        default: return state;
    }
}

export default myReducer;

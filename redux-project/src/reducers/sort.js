import * as types from './../constants/ActionTypes';

const initialState = {
    sortBy: 'name',
    sortDir: 'asc'
};

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SORT:
            //console.log(action);
            return {
                sortBy: action.sort.sortBy,
                sortDir: action.sort.sortDir
            };
        default: return state;
    }
}

export default myReducer;

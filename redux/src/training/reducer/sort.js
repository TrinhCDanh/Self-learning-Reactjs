// Create state
var initialState = {
    by: 'name',
    value: 1
};

// Create reduce
var myReducer = (state = initialState, action) => {
    if (action.type === 'SORT') {
        var { by, value } = action.sort;
        return { by, value }
    }
    return state;
}

export default myReducer;
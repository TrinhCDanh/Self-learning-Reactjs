import * as types from './../constants/ActionTypes';

var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var createId = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var data = JSON.parse(localStorage.getItem('tasks'));
const initialState = data ? data : [];

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LIST_All:
            return state;
        case types.ADD_TASK:
            var newTask = {
                id: createId(),
                name: action.task.name,
                status: action.task.status ? true : false
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state) );
            return [...state];
        default: return state;
    }
}

export default myReducer;
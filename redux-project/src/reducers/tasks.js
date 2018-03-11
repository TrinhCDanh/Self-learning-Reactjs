import * as types from './../constants/ActionTypes';
import {orderBy as funcOrderBy, remove, findIndex} from 'lodash';

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
        case types.SAVE_TASK:
            var task = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status ? true : false
            }
            if(!task.id) {
                task.id = createId();
                state.push(task);
            } else {
                var index = findIndex(state, {id: action.task.id});
                state[index] = task;
            }
            localStorage.setItem('tasks', JSON.stringify(state) );
            return [...state];
        case types.UPDATE_STATUS:
            var index = findIndex(state, {id: action.id});
            state[index] = {
                ...state[index],
                status : !state[index].status 
            } // i don't understand
            localStorage.setItem('tasks', JSON.stringify(state) );
            return [...state];
        case types.DELETE_TASK:
            console.log(action);
            remove(state, (item) => {
                return item.id === action.id;
            });
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default: return state;
    }
}

export default myReducer;
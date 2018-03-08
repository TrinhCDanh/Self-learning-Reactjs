import * as types from './../constants/ActionTypes';

export const ListAll = () => {
    return {
        type: types.LIST_All
    }
};

export const AddTask = (task) => {
    return {
        type: types.ADD_TASK,
        task
    }
};
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

export const ToggleForm = () => {
    return {
        type: types.TOGGLE_FORM,
    }
};

export const CloseForm = () => {
    return {
        type: types.CLOSE_FORM,
    }
};

export const OpenForm = () => {
    return {
        type: types.OPEN_FORM,
    }
};

export const UpdateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS,
        id
    }
};
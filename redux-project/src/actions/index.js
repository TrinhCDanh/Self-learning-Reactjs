import * as types from './../constants/ActionTypes';

export const ListAll = () => {
    return {
        type: types.LIST_All
    }
};

export const SaveTask = (task) => {
    return {
        type: types.SAVE_TASK,
        task
    }
};

export const DeleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id
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

export const EditItem = (task) => {
    return {
        type: types.EDIT_ITEM,
        task
    }
}

export const FilterTable = (filter) => {
    return {
        type: types.FILTER_TABLE,
        filter
    }
}

export const SearchTask = (keyword) => {
    return {
        type: types.SEARCH,
        keyword
    }
}

export const SortTask = (sort) => {
    return {
        type: types.SORT,
        sort
    }
}
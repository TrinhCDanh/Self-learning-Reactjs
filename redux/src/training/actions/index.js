import  * as type  from './../constants/actionConstant';

export const status = () => {
    return {
        type: type.TOGGLE_STATUS
    }
}

export const sort = (sort) => {
    return {
        type: type.SORT,
        sort
    }
}
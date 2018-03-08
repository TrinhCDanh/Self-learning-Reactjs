import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayFrm from './isDisplayFrm';

const myReducer = combineReducers({
    tasks,
    isDisplayFrm
});

export default myReducer;
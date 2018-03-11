import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayFrm from './isDisplayFrm';
import loadTask from './loadTask';
import filterTable from './filterTable';
import search from './search';
import sort from './sort';

const myReducer = combineReducers({
    tasks,
    isDisplayFrm,
    loadTask,
    filterTable,
    search,
    sort
});

export default myReducer;
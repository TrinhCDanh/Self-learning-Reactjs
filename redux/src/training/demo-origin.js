// import { createStore } from 'redux';

// // Create state
// var initialState = {
//     status: false,
//     sort: {
//         by: 'name',
//         value: 1
//     }
// };

// // Create reduce
// var myReducer = (state = initialState, action) => {
//     if (action.type === 'TOGGLE_STATUS') {
//         state.status = !state.status;
//         return state;
//     }
//     if (action.type === 'SORT') {
//         var { by, value } = action.sort;
//         var { status } = state;
//         state = {
//             status: status,
//             sort: {
//                 by: by,
//                 value: value
//             }
//         }
//     }
//     return state;
// }

// // Create store
// const store = createStore(myReducer);

// console.log('Default: ', store.getState());
// // Create action -> dispatch

// var actionStatus = {
//     type: 'TOGGLE_STATUS'
// }
// store.dispatch(actionStatus);

// console.log('TOGGLE_STATUS: ', store.getState());

// var actionSort = {
//     type: 'SORT',
//     sort: {
//         by: 'name',
//         value: -1
//     }
// }
// store.dispatch(actionSort);
// console.log('SORT: ', store.getState());
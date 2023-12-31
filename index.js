//require store

const store = require('./src/store');

//require actions 
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const iceActions = require('./features/ice/iceSlice').iceActions;
const fetchUsers = require('./features/users/usersSlice').fetchUsers

console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {
   //console.log('Updated', store.getState());
});

store.dispatch(cakeActions.ordered(2));
store.dispatch(iceActions.ordered(5));

store.dispatch(fetchUsers());

///unsubscribe(); 
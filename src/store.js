const configureStore = require('@reduxjs/toolkit').configureStore;
const { getDefaultMiddleware, createAsyncThunk, isAsyncThunkAction } = require('@reduxjs/toolkit');
//require reducers
const cakeReducer = require('../features/cake/cakeSlice');
const iceReducer = require('../features/ice/iceSlice');
const usersReducer = require('../features/users/usersSlice');
//logger
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        ice: iceReducer,
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});


module.exports = store;
const configureStore = require('@reduxjs/toolkit').configureStore;
const { getDefaultMiddleware } = require('@reduxjs/toolkit');
//require reducers
const cakeReducer = require('../features/cake/cakeSlice');
const iceReducer = require('../features/ice/iceSlice');
//logger
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        ice: iceReducer
    },
    middleware: [].concat(logger)
});


module.exports = store;
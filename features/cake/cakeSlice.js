//import the redux toolkit
const createSlice = require('@reduxjs/toolkit').createSlice;
//extra Reducers action
const { iceActions } = require('../ice/iceSlice');
//initialize the slice state
const initialState = {
    numofCakes: 10
}
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numofCakes -= action.payload
        },
        restocked: (state, action) => {
            state.numofCakes += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(iceActions.ordered, (state, action) => {
            state.numofCakes -= action.payload
        })
    }
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
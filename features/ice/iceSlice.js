const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numofIce: 10
}

const iceSlice = createSlice({
    name: 'ice',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numofIce -= action.payload
        },
        restocked: (state, action) => {
            state.numofIce += action.payload
        }
    }
});

module.exports = iceSlice.reducer;
module.exports.iceActions = iceSlice.actions; 
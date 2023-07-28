const createSlice = require('@reduxjs/toolkit').createSlice;

//import Async thunk
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');

const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.data.map((user) => user.id));
});


const initialState = {
    loading: false,
    users: [],
    error: ''
}


const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false 
            state.error = action.error.message
        })
    }
});
module.exports = usersSlice.reducer;
module.exports.fetchUsers = fetchUsers;


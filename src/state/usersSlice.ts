import {AsyncThunkAction, AsyncThunkPayloadCreator, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {InitialState, User} from "../types/models";
import state from "./index";
import {fetchUsers} from "../api/fetch";

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async () => {
        const users = fetchUsers('https://jsonplaceholder.typicode.com/users');
        return users;
    }
);

const initialState: InitialState = {
    users: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(
                getUsers.fulfilled, (state, action) => {
                    state.users = action.payload;
                }
            )

    }
});

export default usersSlice.reducer;
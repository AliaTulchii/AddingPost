import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Laura' },
    { id: '1', name: 'Massimo' },
    { id: '2', name: 'Daniel' },
    { id: '3', name: 'Alia' },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    redusers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
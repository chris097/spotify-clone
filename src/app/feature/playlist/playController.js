import { createSlice } from "@reduxjs/toolkit";

export const playSlice = createSlice({
    name: 'Play',
    initialState: {
        value: false
    },
    reducers: {
        play: (state, action) => {
            state.value = action.payload
        },
        pause: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { play, pause } = playSlice.actions;

export default playSlice.reducer;
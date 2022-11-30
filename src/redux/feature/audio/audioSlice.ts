import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AudioState {
  isPlaying: boolean
};

const initialState: AudioState = {
    isPlaying: false
};

export const audioSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        playPause: (state, action:PayloadAction<boolean>) => {
            state.isPlaying = action.payload
        },
    }
});

export const { playPause } = audioSlice.actions;

export default audioSlice.reducer;
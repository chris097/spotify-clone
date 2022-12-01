import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AudioState {
    isPlaying: boolean
    activeSong: object
    currentSongs: [],
    currentIndex: number,
    isActive: boolean
};

const initialState: AudioState = {
    isPlaying: false,
    activeSong: {},
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
};

export const audioSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },
        playPause: (state, action:PayloadAction<boolean>) => {
            state.isPlaying = action.payload
        },
    }
});

export const { playPause, setActiveSong } = audioSlice.actions;

export default audioSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export interface ColorScheme {
    activeColor: string
};

const initialState: ColorScheme = {
    activeColor: ''
};

export const colorScheme = createSlice({
    name: 'color',
    initialState,
    reducers: {
        setActiveColor: (state, action) => {
            state.activeColor = action.payload
        }
    }
});

export const { setActiveColor } = colorScheme.actions;

export default colorScheme.reducer;
import { configureStore } from "@reduxjs/toolkit";
import { playSlice } from "./playlist/playController";

export default configureStore({
    reducer: {
        play: playSlice
    }
})
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { url: '' };

const urlSlice = createSlice({
    name: 'url',
    initialState: initialState,
    reducers: {
        updateUrl(state, action) { // You need to accept an action parameter here
            state.url = action.payload; // Update the url using action.payload
        }
    }
});

export const { updateUrl } = urlSlice.actions; // Destructure the action creator

const store = configureStore({
    reducer: {
        url: urlSlice.reducer
    }
});

export default store;

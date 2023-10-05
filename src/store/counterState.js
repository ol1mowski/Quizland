import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) { // You need to accept an action parameter here
            state.counter ++; // Update the url using action.payload
        }
    }
});

export const { increment } = counterSlice.actions;

export default counterSlice;
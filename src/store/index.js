import { configureStore } from "@reduxjs/toolkit";
import urlSlice from "./urlState";
import counterSlice from "./counterState";


const store = configureStore({
    reducer: {
        url: urlSlice.reducer,
        counter: counterSlice.reducer,
    }
});

export default store;

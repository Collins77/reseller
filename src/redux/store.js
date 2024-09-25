import { configureStore } from '@reduxjs/toolkit';
import resellerReducer from './slices/resellerSlice';

const store = configureStore({
    reducer: {
        resellers: resellerReducer,
    }
});

export default store;

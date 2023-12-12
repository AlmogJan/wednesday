import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { taskReducer } from './task.reducer';

const rootReducer = combineReducers({
    taskModule: taskReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>;
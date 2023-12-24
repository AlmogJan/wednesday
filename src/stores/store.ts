import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { taskReducer } from './task/task.reducer';
import { userReducer } from './user/user.reducer';

const rootReducer = combineReducers({
    taskModule: taskReducer,
    userModule: userReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>;
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FormName, FormReducer } from "@/entities/Form/model/reducer/FormReducer";

export const createReduxStore = () => {
    const rootReducer = combineReducers({
        [FormName]: FormReducer,
    });
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({})
    });
    return store;
};

const store = createReduxStore();

export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

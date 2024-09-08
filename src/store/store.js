import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { DarkModeReducer, ProjectReducer, UserReducer } from './slice'


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['Users']
}
export const rootReducers = combineReducers({
    Token: null,
    // Active: LogedinUserReducer,
    Users: UserReducer,
    DarkMode: DarkModeReducer,
    Projects: ProjectReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducers)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export default store
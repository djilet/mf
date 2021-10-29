import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga"

import rootReducer  from './RootReducer'
import { RootWatcher } from './RootWatcher';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), ...middlewares]
})

sagaMiddleware.run(RootWatcher)
// @ts-ignore
window.store = store

export type AppDispatch = typeof store.dispatch

export default store



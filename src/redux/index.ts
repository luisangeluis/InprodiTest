import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from "./rootReducer";
import persistStore from "redux-persist/es/persistStore";
import { weatherApi } from "./services/weatherApi";
import { setupListeners } from "@reduxjs/toolkit/query";
// import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }).concat([weatherApi.middleware])
})

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { combineReducers } from "redux";
import userSlice from "./slices/userSlice";
import storage from 'redux-persist/lib/storage'
// import persistReducer from "redux-persist/es/persistReducer";
import {persistReducer} from "redux-persist";

const rootReducer = combineReducers({
    user: userSlice
})

const persistConfig={
    key:"root",
    storage,
    version: 1,
    whitelist:["user"]
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export type RootState = ReturnType<typeof rootReducer>;
export default persistedReducer;
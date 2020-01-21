import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";
import rootReducer from './Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { responsiveStoreEnhancer } from 'redux-responsive';
import localStorage from "redux-persist/es/storage";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
        responsiveStoreEnhancer,
    )
);

const persistor = persistStore(store);

export default () => {
    return { store, persistor };
};
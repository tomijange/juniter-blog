import persistReducer from "redux-persist/es/persistReducer";
import createStore from "antd/lib/table/createStore";
import { applyMiddleware } from "C:/Users/TomiC/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from './Reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const persistConfig = {
    key: 'root',

};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
    )
);

const persistor = persistStore(store);

export default () => {
    return { store, persistor };
};
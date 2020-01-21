import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes/routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from './store';

const { store, persistor } = createStore();

const App = () => (
    <Provider store={store}>
        <Router>
            <PersistGate loading={null} persistor={persistor}>
                <Routes></Routes>
            </PersistGate>
        </Router>
    </Provider>
);

export default App;

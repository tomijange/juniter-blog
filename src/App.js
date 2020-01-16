import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Routes from './Routes/routes';

const App = () => (
    <Router>
        <Routes></Routes>
    </Router>
);

export default App;

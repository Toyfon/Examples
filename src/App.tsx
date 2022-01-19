import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {NavLinkPage} from "./pages/routesPage/NavlinkPage";
import {RoutesPage} from "./pages/routesPage/RoutesPage.";

function App() {
    return (
        <div className="App">
            <HashRouter>
            <NavLinkPage/>
            <RoutesPage/>
            </HashRouter>
        </div>
    );
}

export default App;

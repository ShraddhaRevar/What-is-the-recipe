import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import App from './../App';
import Login from './Login';
import Register from './Register';
import Food from "./Food";
function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route 
                    exact 
                    path="/" 
                    component={App} 
                />
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/findRecipe" component={Food}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;

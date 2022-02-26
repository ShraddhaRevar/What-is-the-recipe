import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import FoodLibrary from './FoodLibrary';
import App from './../App';
import Login from './Login';
import Register from './Register';
import Food from "./Food";

function Router() {
    return (
        <BrowserRouter>
                <Routes>
                <Route 
                    exact 
                    path="/" 
                    element={<App/>} 
                />
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/findRecipe" element={<Food/>}/>
                <Route path="/foodLibary" element={<FoodLibrary/>}/>
                </Routes>
                
        
        </BrowserRouter>
    );
}

export default Router;

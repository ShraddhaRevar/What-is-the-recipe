import React,{useEffect,useRef} from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import FoodLibrary from './FoodLibrary';
import App from './../App';
import Login from './Login';
import Register from './Register';
import Food from "./Food";

function Router() {
    const token=useRef(null)
    useEffect(()=>{
        const userInfo=JSON.parse(localStorage.getItem("userInfo"));
        if(userInfo){
        token.current=userInfo.token;
        if(token){
            console.log("token value :",token);
        }
    }
        
    })
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
                {token?(
                    <Route path="/foodLibrary" element={<FoodLibrary/>}/>
                ):(<Route path="/" element={<App/>}/>)}
                
                </Routes>
                
        
        </BrowserRouter>
    );
}

export default Router;

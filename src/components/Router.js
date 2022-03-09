import React,{useEffect,useRef} from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import FoodLibrary from './FoodLibrary';
import App from './../App';
import Login from './Login';
import Register from './Register';
import Food from "./Food";
import Profile from './Profile';
import Recipes from "./Recipes";
import NewRecipe from './NewRecipe';
import EditRecipe from './EditRecipe';

function Router() {
    const token=useRef(null)
    useEffect(()=>{
        const userInfo=JSON.parse(localStorage.getItem("userInfo"));
        if(userInfo){
        token.current=userInfo.token;
       
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
                <Route path="/recipeList" element={<Recipes/>}/>
                <Route path="/editRecipe/:fid" element={<EditRecipe/>}/>
                {token?(
                    <>
                    <Route path="/addRecipe" element={<NewRecipe/>}/>
                    <Route path="/foodLibrary" element={<FoodLibrary/>}/>
                    <Route path="/userProfile/:id" element={<Profile/>}/>
                    
                    </>  
                ):(<Route path="/" element={<App/>}/>)}
                
                </Routes>
                
        
        </BrowserRouter>
    );
}

export default Router;

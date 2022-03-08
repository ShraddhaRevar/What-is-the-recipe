import React,{useState,useEffect} from 'react';
import Header from './Header';
import axios from 'axios';
import ToastNotification from '../services/ToastNotification';
import { ToastContainer } from 'material-react-toastify';
import Recipes from './Recipes';
import { useNavigate } from 'react-router-dom';
//import  Chef from "../images/Chef.jpg";
const Food = () => {
  const navigate=useNavigate();
  const [dish,setDishName]=useState('');
  useEffect(()=>{
    localStorage.removeItem("dishes");
  })
  const handleChange=(e)=>{
    setDishName(e.target.value);
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log("DishName :",dish);
    const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`);
    console.log("Dished array :",data);
    if(data.meals===null){
      ToastNotification.showErrorMessage(
        "bottom-center",
        "Invalid Dish Name , Search again" 
      )
    }else{
    
      localStorage.setItem("dishes",JSON.stringify(data));
      navigate("/recipeList");
    }
  }
  return (
    <>
    {localStorage.getItem("dishes")!==null?(<Recipes/>):(
      <>
      <ToastContainer/>
      <Header/>
      <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
        rel="stylesheet"
      />
        </head>
        <body >
        <div className="container" style={{height:"300px", width:"600px"}}>
          <div className="top-header">
            <h3>Search your Favourite</h3>
            <p>What's On your mind</p>
          </div>
          <form action="">
            <div className="email">
              <i className="bx bx-search"></i>
              <input type="email" placeholder="Enter your Favourite Food" value={dish} onChange={handleChange} />
             
            </div>
          </form>
          <div className="btn" >
            <button onClick={handleSubmit} style={{width:"40%"}} class='bx bxs-dish'><span style={{marginLeft:"4%"}}>Search</span></button>
          </div>
        </div>
        </body>
      </>
    )}
   

    </>
    
  )
}

export default Food
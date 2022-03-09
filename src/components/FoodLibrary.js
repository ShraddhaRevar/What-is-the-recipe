/* eslint-disable array-callback-return */
import React,{useEffect,useState} from 'react'
import Header from './Header'
import axios from 'axios';
import Recipe from "./Recipe";
const FoodLibrary = () => {
  const [favourites,setFavorites]=useState([]);

  useEffect(()=>{
    const userInfo=JSON.parse(localStorage.getItem("userInfo"));
    const {id,token}=userInfo;

    const config={
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      }
    }
     const fetchFavoriteRecipes=async()=>{
       const {data}=await axios.get(`http://localhost:5000/foods/${id}`,config);

       setFavorites(data.recipes);
     }
     fetchFavoriteRecipes();
  },[])

  
  return (
    <>
    
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
    <h1 style={{textAlign:"center"}}>Favorites</h1>
    <div >
    {favourites.map((recipes)=>(
      <>
      <Recipe style={{display:"flex",float:"left"}} recipes={recipes}/>
      <br/>
      </>
    
    ))}
    </div>
    
    </>
   
  )
}

export default FoodLibrary;
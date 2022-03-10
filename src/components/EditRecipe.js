import React,{useEffect, useState} from 'react'
import Header from "../components/Header";
import { useParams } from 'react-router-dom';
import ToastNotification from '../services/ToastNotification';
import { ToastContainer } from 'material-react-toastify';
import axios from 'axios';
import RecipeApp from '../services/RecipeApp';
const EditRecipe = () => {
    const params=useParams()
    const fid=params.fid;
    let [recipeName,setRecipeName]=useState('');
    let [foodImage,setfoodImage]=useState('');
    let [procedure,setProcedure]=useState('');
    let [ingredients,setIngredient]=useState('');
    let [videoLink,setVideoLink]=useState('');

    useEffect(()=>{
        const userInfo=JSON.parse(localStorage.getItem("userInfo"));
        const config={
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${userInfo.token}`
            }
        }
        const fetchRecipe=async()=>{
            const {data}=await RecipeApp.get(`/foods/${userInfo.id}/${fid}`,config);
            setRecipeName(data.recipeName);
            setfoodImage(data.foodImage);
            setVideoLink(data.videoLink);
            setProcedure(data.procedure);
            let ingList="";
             data.ingredient.forEach(element => {
                 ingList+=element;
                 ingList+=","
                 
             });
             ingList=ingList.substring(0,ingList.length-1);
             setIngredient(ingList);
            
        }
        fetchRecipe();
    },[fid])
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const userInfo=JSON.parse(localStorage.getItem("userInfo"));
        const ingredientList=ingredients.split(",");
        const config={
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${userInfo.token}`
            }
        }
        const body={
            recipeName,
            procedure,
            ingredient:ingredientList,
            foodImage,
            videoLink
        }
        const {data}=await RecipeApp.post(`/foods/${userInfo.id}/${fid}`,body,config);
        if(data){
            ToastNotification.showSuccessMessage(
                "bottom-center",
                "Recipe has been successfully updated into your Library"
            )
        }
    }
  return (
    <div>
    <ToastContainer/>
    <div>
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
      <div className="container">
      <div className="top-header">
        <h3>Update Recipe</h3>
        <p>Add your Favorite Dish into your Library</p>
      </div>
      <form action="">
        <div className="dish">
          <i className="bx bxs-dish"></i>
          <input type="text" placeholder="Enter your Favourite Dish Name" required value={recipeName} onChange={(e)=>{setRecipeName(e.target.value)}}/>
        </div>
        <div className="imageUrl">
        <i className="bx bx-image"></i>
        <input type="text" placeholder="Enter Image_Url of the Dish" value={foodImage} onChange={(e)=>{setfoodImage(e.target.value)}} />
      </div>
        <div className="Video">
          <i className="bx bxl-youtube"></i>
          <input type="text" placeholder="Enter the Video Link" value={videoLink} onChange={(e)=>{setVideoLink(e.target.value)}} />
        </div>

        <div className="instructions">
          <i className="bx bx-bowl-hot"></i>
          <textarea  placeholder='Preparation Procedure of your Favourite Dish goes here.' value={procedure} onChange={(e)=>{setProcedure(e.target.value)}} />
        </div>
        <div className="ingredients">
          <i className="bx bxs-lemon"></i>
          <input type="text" placeholder="Ingredients separated by (,)" required  value={ingredients} onChange={(e)=>{setIngredient(e.target.value)}} />
        </div>
      </form>
      <div className="btn" >
        <button onClick={handleSubmit}>Update Recipe</button>
      </div>
    </div>
    </div>
    </div>

  )
}

export default EditRecipe
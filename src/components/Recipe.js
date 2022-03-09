import React from 'react'
import {Icon} from '@iconify/react';
import { Card,Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ToastNotification from '../services/ToastNotification';
import { ToastContainer } from 'material-react-toastify';
const Recipe = (props) => {

    
    let ingredients=[];
   const navigate=useNavigate();
    ingredients=[...ingredients, props.recipes.ingredient];
    let ingredientList="";
    for(let i=0;i<ingredients.length;i++){
        ingredientList+=ingredients[i];
        ingredientList+=",";
    }
    let arr=ingredientList.split(",");
    arr.pop(arr.length-1);
    const listIng=arr.map((ing)=>(
        <li>{ing}</li>
    ))
   
    const handleDelete=async(e,fid)=>{
        e.preventDefault();
        const userInfo=JSON.parse(localStorage.getItem("userInfo"));
        console.log("UserInfo :",userInfo);
        const config={
            headers:{
                'Content-type':'application/json',
                'Authorization':`Bearer ${userInfo.token}`
            }
        }
        const {data}=await axios.delete(`http://localhost:5000/foods/${userInfo.id}/${fid}`,config);
        if(data){
            ToastNotification.showSuccessMessage(
                "bottom-center",
                "Recipe has been removed successfully"
            )
            window.location.reload();
        }else{
            ToastNotification.showErrorMessage(
                "bottom-center",
                "Invalid Request"
            )
        }
       
    }
    const handleEdit=(e,fid)=>{
        e.preventDefault();
        console.log("Edit food id :",fid);
        navigate(`/editRecipe/${fid}`);
    }

  return (
        <>
        <ToastContainer/>
        <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
        <link
      href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
      rel="stylesheet"
        />
     </head>
     <div className='row'>
     <div  style={{float:"left"}} className="col-md-4">
     <Card  style={{display:"inline-flex", marginLeft:"20%"}} className="recipes__box">
     <Card.Img className="recipe__box-img" style={{width:"100%",height:"50%"}} variant="top" src={props.recipes.foodImage} alt={props.recipes.recipeName} />
     <Card.Body>
     <Card.Title>{props.recipes.recipeName}</Card.Title>
     <Card.Text>
     {props.recipes.procedure}
     </Card.Text>
     <Card.Body>{listIng}</Card.Body>
     <span>
     <Icon onClick={(e)=>{handleDelete(e,props.recipes._id)}} style={{color:"red"}} icon="fluent:delete-16-filled" width="40" />
     <Icon onClick={(e)=>{handleEdit(e,props.recipes._id)}} style={{color:"blue",marginLeft:"4%"}} icon="akar-icons:chat-edit" width="40" />
     </span>
     <Button href={props.recipes.videoLink}  variant="danger">
     <i style={{color:"white"}} className="bx bxl-youtube">Video</i>
     </Button>
     </Card.Body>
     </Card>
     </div>
     </div>
    
    </>
  )
}

export default Recipe
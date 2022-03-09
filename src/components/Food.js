import React,{useState} from 'react';
import { Card,Button } from 'react-bootstrap';
import Header from './Header';
import axios from 'axios';
import ToastNotification from '../services/ToastNotification';
import { ToastContainer } from 'material-react-toastify';
//import  Chef from "../images/Chef.jpg";
const Food = () => {
 
  let listItems;
  let [darr, setDarr] = useState([]);
  const [dish,setDishName]=useState('');
  const handleChange=(e)=>{
    setDishName(e.target.value);
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
     const {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`);
    if(data.meals===null){
      ToastNotification.showErrorMessage(
        "bottom-center",
        "Invalid Dish Name , Search again" 
      )
    }else{  
      darr=[...darr,data.meals];
      setDarr(darr)
    }
  }
    if(darr.length>0){
       listItems=darr[0].map((ele)=>(
        <div className='row'>
        <div  style={{float:"left"}} className="col-md-4">
        <Card  style={{display:"inline-flex", marginLeft:"20%"}} className="recipes__box">
        <Card.Img className="recipe__box-img" src={ele.strMealThumb} alt={ele.strMeal} style={{width:"100%",height:"50%"}} variant="top"   />
        <Card.Body>
        <Card.Title>{ele.strMeal}</Card.Title>
        <Card.Text>
        {ele.strInstructions.substring(0,200)}
        </Card.Text>
        <Card.Body>Ingredients: </Card.Body>
        {ele.strIngredient1.length>0?(
          <li>{ele.strIngredient1}</li>
        ):(<></>)}
        {ele.strIngredient2.length>0?(
          <li>{ele.strIngredient2}</li>
        ):(<></>)}
        {ele.strIngredient3.length>0?(
          <li>{ele.strIngredient3}</li>
        ):(<></>)}
        {ele.strIngredient4.length>0?(
          <li>{ele.strIngredient4}</li>
        ):(<></>)}
        {ele.strIngredient5.length>0?(
          <li>{ele.strIngredient5}</li>
        ):(<></>)}
        <Button href={ele.strYoutube}  variant="danger">
        <i style={{color:"white"}} className="bx bxl-youtube">Video</i>
        </Button>
        </Card.Body>
        </Card>
        <br/>
        </div>
        </div>
       
    
      ))  
    }
   
  return (
    <>
      {darr.length>0?(<>
      
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

        <div>
          {listItems}
        </div>
      
      
      </>):(
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
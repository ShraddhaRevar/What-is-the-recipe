import React from 'react';
import RecipeHome from "./images/RecipeHome.jpg";

import Header from './components/Header';

const App = () => {
  return (
    <>
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
    <div className='App'>
      <Header/>
    
    </div>
    <img style={{
      width:"100%",
      height:"100%"
    }} src={RecipeHome} alt="recipeHome.jpeg"/>
    </>
    
  
   
  )
}

export default App
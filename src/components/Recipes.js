import React,{useEffect,useRef} from 'react'
import Header from './Header'

const Recipes = () => {

    const dishLists=useRef([]);
    
    useEffect(()=>{
       dishLists.current=JSON.parse(localStorage.getItem("dishes"));
     
    },[]);
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
    <Header/>
    <div>
  
    </div>
    </>
  )
}

export default Recipes
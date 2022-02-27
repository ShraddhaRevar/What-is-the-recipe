import React,{useState} from 'react'
import Header from './Header'
import ToastNotification from '../services/ToastNotification';
import { ToastContainer } from 'material-react-toastify';
import "material-react-toastify/dist/ReactToastify.css";
import "../Register.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
  const navigate=useNavigate();
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const handleUsername=(e)=>{
    setUsername(e.target.value);
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value);
  }
  const handleConfirmPassword=(e)=>{
    setConfirmPassword(e.target.value);
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(password!==confirmPassword){
      ToastNotification.showErrorMessage(
        "bottom-center",
        "Password and Confirm Password do not match"
      );
    }else{
      const config={
        headers:{
          'Content-Type':'application/json'
        }
      }
      const {data}=await axios.post("http://localhost:5000/users/register",{username,password,email},config);
      console.log("Register Data :",data);
      if(data.message){
        ToastNotification.showErrorMessage(
          "bottom-center",
          data.message 
        )
      }else{
        localStorage.setItem("userInfo",JSON.stringify(data));
        navigate("/foodLibrary");
      }
    }
  }

  return (
    <div>
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
    <body>
   
    <div className="container">
      <div className="top-header">
        <h3>Sign Up</h3>
        <p>Enter your credentials to create your account</p>
      </div>
      <form action="">
        <div className="user">
          <i className="bx bxs-user-circle"></i>
          <input type="text" placeholder="Enter your username" onChange={handleUsername} value={username}/>
        </div>
        <div className="email">
        <i className="bx bxs-envelope"></i>
        <input type="email" placeholder="Enter your email" onChange={handleEmail} value={email} />
      </div>
        <div className="pass">
          <i className="bx bxs-lock-alt"></i>
          <input type="password" placeholder="Enter your password" onChange={handlePassword} value={password} />
        </div>
        <div className="pass">
          <i className="bx bxs-lock-alt"></i>
          <input type="password" placeholder="Confirm Password" onChange={handleConfirmPassword} value={confirmPassword} />
        </div>
      </form>
      <div className="btn" onClick={handleSubmit}>
        <button>Register</button>
      </div>
    </div>
    </body>
    </div>

  
  )
}

export default Register
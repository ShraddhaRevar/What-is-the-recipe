import React,{useEffect,useState} from 'react'
import Header from './Header'
import ToastNotification from '../services/ToastNotification';
import { ToastContainer } from 'material-react-toastify';
import axios from 'axios'
const Profile = () => {
  const [username,setUserName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [userId,setUserId]=useState('');
  const [tvalue,setToken]=useState('');
  useEffect(()=>{
    const {token,id}=JSON.parse(localStorage.getItem("userInfo"));
    setToken(token);
    setUserId(id);
    const fetchUserData=async()=>{
      const config={
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${token}`
        }
      }
      const {data}=await axios.get("http://localhost:5000/users/profile",config);
      setUserName(data.username);
      setEmail(data.email);
    }
      fetchUserData();
    },[]);
    const handleUserNameInput=(e)=>{
      setUserName(e.target.value);
    }
    const handleEmailInput=(e)=>{
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
          "Password and Confirm Password does not match"
        )
      }else{
        const config={
          headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${tvalue}`
          }
        }
        const {data}=await axios.post(`http://localhost:5000/users/updateProfile/${userId}`,{username,email,password},config);
        if(data.message){
          ToastNotification.showErrorMessage(
            "bottom-center",
            "Unauthorized User"
          )
        }else{
          ToastNotification.showSuccessMessage(
            "bottom-center",
            "User data has been updated successfully"
          )
          setPassword('');
          setConfirmPassword('');
        }
        
      }
    }
    
  return (
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
        
        <body>
        <div className="container" style={{height:"470px"}}>
          <div className="top-header">
            <h3>Welcome {username}</h3>
            <p>Enter the credentials to Update User Profile</p>
          </div>
          <form action="">
          <div className="user">
            <i className="bx bxs-user-circle"></i>
            <input type="text" placeholder="Enter your username" value={username} onChange={handleUserNameInput}/>
          </div>
          <div className="email">
          <i className="bx bxs-envelope"></i>
          <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailInput}/>
        </div>
          <div className="pass">
            <i className="bx bxs-lock-alt"></i>
            <input type="password" placeholder="Enter your password" value={password} onChange={handlePassword} />
          </div>
          <div className="pass">
            <i className="bx bxs-lock-alt"></i>
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPassword}/>
          </div>
        </form>
        <div className="btn">
        <button onClick={handleSubmit}>Update Profile</button>
      </div>
        </div>
        </body>
      </>
   
  )
}

export default Profile
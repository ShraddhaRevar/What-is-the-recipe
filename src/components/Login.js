import React,{useState,} from 'react'
import Header from './Header';
const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleInputEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handleInputPassword=(e)=>{
    setPassword(e.target.value);
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("Email :",email);
      console.log("Password :",password);
      
  }
  return (
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
    <body>
    <div className="container" style={{height:"400px"}}>
      <div className="top-header">
        <h3>Welcome back</h3>
        <p>Enter your credentials to access your account</p>
      </div>
      <form action="">
        <div className="email">
          <i className="bx bxs-envelope"></i>
          <input type="email" placeholder="Enter your Email Id" onChange={handleInputEmail} value={email}  />
        </div>
        <div className="pass">
          <i className="bx bxs-lock-alt"></i>
          <input type="password" placeholder="Enter your password" onChange={handleInputPassword} value={password} />
        </div>
      </form>
      <div className="btn" onClick={handleSubmit}>
        <button>Login</button>
      </div>
    </div>
    </body>
    </div>
    
  
  )
}

export default Login;
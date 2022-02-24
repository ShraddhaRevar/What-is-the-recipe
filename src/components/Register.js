import React from 'react'
import Header from './Header'
import "../Register.css";
const Register = () => {
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
    <div className="container">
      <div className="top-header">
        <h3>Sign Up</h3>
        <p>Enter your credentials to create your account</p>
      </div>
      <form action="">
        <div className="user">
          <i className="bx bxs-user-circle"></i>
          <input type="text" placeholder="Enter your username" />
        </div>
        <div className="email">
        <i className="bx bxs-envelope"></i>
        <input type="email" placeholder="Enter your email" />
      </div>
        <div className="pass">
          <i className="bx bxs-lock-alt"></i>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="pass">
          <i className="bx bxs-lock-alt"></i>
          <input type="password" placeholder="Confirm Password" />
        </div>
      </form>
      <div className="btn">
        <button>Sign in</button>
      </div>
    </div>
    </body>
    </div>

  
  )
}

export default Register
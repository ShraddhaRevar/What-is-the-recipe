import React,{useEffect,useState} from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate=useNavigate();
  const [userName,setUserName]=useState('');
  const [userId,setuserId]=useState('');
  const [userPresent,setUserPresent]=useState(false);
  useEffect(()=>{
    const userInfo=JSON.parse(localStorage.getItem("userInfo"));
    if(userInfo){
      setUserPresent(true);
      setuserId(userInfo.id);
      setUserName(userInfo.username);
    }
  },[userName,userId]);
  const handleLogout=()=>{
    localStorage.removeItem("userInfo");
    navigate("/");

  }
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Diner</Navbar.Brand>
    <Nav className="me-auto">
      {!userPresent&&(
        <>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
        </>
      )}
      
      
      <Nav.Link href="/findRecipe">Browse Recipe</Nav.Link>
      {userPresent&&(
        <>
        <Nav.Link href="/foodLibrary">FoodLibrary</Nav.Link>
        <Nav.Link href={`/userProfile/${userId}`}> username: {userName}</Nav.Link>
        <Nav.Link href="/addRecipe">New Recipe</Nav.Link>
        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
        </>
      )}
     
    </Nav>
  </Navbar>
  )
}

export default Header
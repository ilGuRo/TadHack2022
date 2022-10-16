import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/main`; 
    navigate(path);
  }
  

  return <MDBBtn rounded className="mb-4 px-5" style={{backgroundColor: "#b7056f", color: '#fff'}} size='lg' onClick={() => { routeChange(); loginWithRedirect({redirect_uri: 'http://localhost:3000/main'})}}>Log In</MDBBtn>
};

export default LoginButton;
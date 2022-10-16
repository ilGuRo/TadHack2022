import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MDBBtn } from 'mdb-react-ui-kit';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    
    <MDBBtn  outline rounded className='mx-2' color='secondary' onClick={() => logout({ returnTo: window.location.origin })}>    Log Out  </MDBBtn>

  );
};

export default LogoutButton;
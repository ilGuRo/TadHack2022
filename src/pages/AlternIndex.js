import React from 'react';
import {
  
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  
}
from 'mdb-react-ui-kit';

import LoginButton from "../components/Login.js"
import Logo from "../logoOficial.svg"

function AlternIndex() {
  return (
    <MDBContainer className="my-5 ">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>
          
          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <img src={Logo} className="App-log"/>
              </div>

              <h5 center className="fw-normal my-4 pb-3 text-center" style={{letterSpacing: '1px'}}>  <LoginButton/></h5>

             
              <a className="small text-muted" href="#!">Forgot password?</a>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default AlternIndex;
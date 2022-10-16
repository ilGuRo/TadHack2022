import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import {useAuth0} from '@auth0/auth0-react'
import LogoutButton  from "../components/Logout";
import Call from "../components/Call";
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const {user, isAuthenticated}= useAuth0();

  const navigate= useNavigate();

  console.log(user)
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={user.picture}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Welcome back {user.given_name}!</p>
                <LogoutButton/>
                <div className="d-flex justify-content-center mb-2">
                </div>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
            
              <MDBCardBody>
              <MDBRow>
              <MDBCol md='6'>
              <div className='pb-3'>How do you feel? Start your daily call</div>
              </MDBCol>
              </MDBRow>

              <MDBRow>
              <MDBCol md='6'>
              <MDBBtn rounded color='success' onClick={()=>navigate('/Call')}>Start Call</MDBBtn>
              </MDBCol>
              </MDBRow> 
              
                 
              </MDBCardBody>
            </MDBCard>

            <MDBRow>

            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
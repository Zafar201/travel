import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function AdminLogin() {
  return <div >
      <div className='admin-nav'>
       <Container>
           <Row>
               <Col>
               <Link to="/">
                       <h1>LOGO HERE</h1>
               </Link>
               </Col>
               <Col>
               
               </Col>
           </Row>
       </Container>
       </div>

       <div className='login'>
          <Container>
              <Row>
                  <h1>Login</h1>
                  <p>Manage your properties</p>
              </Row>
              <Row style={{justifyContent:"center",paddingTop:"48px"}}>
                  <div className='login-user'>
                      <img src="../assets/image/user.png" alt="" />
                      <input type="text" placeholder='Username'/>
                  </div>
              </Row>
              <Row style={{justifyContent:"center",paddingTop:"27px"}}>
                  <div className='login-user'>
                      <img src="../assets/image/pass.png" alt="" />
                      <input type="text" placeholder='Username'/>
                  </div>
              </Row>
              <Row style={{justifyContent:"center",paddingTop:"32px"}}>
                 <Link to='/dashboard'><button>Sign in</button></Link> 
              </Row>
              <Row>
                  <h3>Not registered yet? <span>Create an Account</span> </h3>
              </Row>
          </Container>
       </div>
  </div>;
}

export default AdminLogin;

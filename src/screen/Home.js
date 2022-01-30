import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Home() {
  return (
  <div className='home' >
  <div className="home-container" style={{ backgroundImage: `url("../assets/image/homebg2.png")` }}>

 
      <Navbar collapseOnSelect expand="lg"  variant="dark">
          <Container className="nav-pad">
              <Col md={8}>
              <Navbar.Brand href="#home" className="logo" >LOGO HERE</Navbar.Brand>
              </Col>
           
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            
              <Nav>
                  <Col md={6}>
                  <Link to="/">  <Nav.Link href="#deets">Home</Nav.Link> </Link>|{" "}
                  </Col>
                  <Col md={6}>
                  <Link to="/about">    <Nav.Link href="#deets" style={{color:" #D9B061 !important;",}}>About Us</Nav.Link></Link>
                  </Col>
                  <Col md={6}>
                  <Link to="/contact">   <Nav.Link href="#deets">Contact Us</Nav.Link></Link>
                  </Col>
              
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <Container className='home-2'>
          <Row>
            <h1>The Tawi Experience</h1>
           <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
          </Row>              
        </Container>

        <Container className='home-2-bottom'>
          <Row style={{placeContent:"center"}}>
            <h1>Title here</h1>
           <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
            {/* <p>Know More</p> */}
          </Row>              
        </Container>
        </div>

      
      
      <div className="home-2-container">
        <Container className='home-2-rec'>
        <div className='d-flex'>
          <div>
          <h1>Our top recommendation</h1>
          </div>
           <div  className='home-2-vec'>
                <img src="../assets/image/down.png" alt="" />
           </div>    
          </div>
        </Container>

        <Container className='home-3'>
       
          <Row>
            <Col style={{padding:"0px"}} md={3} className='home-3-img'>
              <img src="../assets/image/home2.png" alt="" />
            </Col>
            <Col>
             <Container>
             <Row>
                  <h1>Hurawalhi Island Resort</h1>
              </Row>
              <Row >
                <Col md={5} className='home-3-1'>
                  <img src="../assets/image/location.png" alt="" /> Maldives
                </Col>
              </Row>
                <Row>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                     sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Row>

                <Row className='home-3-2'>
                  <Col>
                     <p3>Rated <span>4 out of 5</span> </p3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                     <p4>₹ 1,20,850</p4>
                  </Col>
                  <Col>
                    <p5></p5>
                  </Col>
                </Row>
             </Container>
              
            </Col>
          </Row>
        </Container>


        <Container className='home-3'>
          <Row>
            <Col style={{padding:"0px"}} md={3} className='home-3-img'>
              <img src="../assets/image/home3.png" alt="" />
            </Col>
            <Col>
             <Container>
             <Row>
                  <h1>Paradise Island Resort & Spa</h1>
              </Row>
              <Row >
                <Col md={5} className='home-3-1'>
                  <img src="../assets/image/location.png" alt="" /> Maldives
                </Col>
              </Row>
                <Row>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                     sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Row>

                <Row className='home-3-2'>
                  <Col>
                     <p3>Rated <span>4 out of 5</span> </p3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                     <p4>₹ 1,20,850</p4>
                  </Col>
                  <Col>
                    <p5></p5>
                  </Col>
                </Row>
             </Container>
              
            </Col>
          </Row>
        </Container>

        <Container className='home-3'>
          <Row>
            <Col style={{padding:"0px"}} md={3} className='home-3-img'>
              <img src="../assets/image/home3.png" alt="" />
            </Col>
            <Col>
             <Container>
             <Row>
                  <h1>Paradise Island Resort & Spa</h1>
              </Row>
              <Row >
                <Col md={5} className='home-3-1'>
                  <img src="../assets/image/location.png" alt="" /> Maldives
                </Col>
              </Row>
                <Row>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                     sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Row>

                <Row className='home-3-2'>
                  <Col>
                     <p3>Rated <span>4 out of 5</span> </p3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                     <p4>₹ 1,20,850</p4>
                  </Col>
                  <Col>
                    <p5></p5>
                  </Col>
                </Row>
             </Container>
              
            </Col>
          </Row>
        </Container>

        
        </div>

        <div className="about-4" style={{marginTop:"70px"}}>
            <Container>
          
              <Row >
                
                <Col md={3}>
                </Col>
              
              
                
                <Col className='about-4-fnt' >
                  <img src="../assets/image/wtsp.png" alt="" />+91 888 777 9999
                </Col>
                <Col className='about-4-fnt'>
                <img src="../assets/image/phone.png" alt="" />+91 888 777 9999
                </Col>
                <Col className='about-4-fnt'>
                <img src="../assets/image/email.png" alt="" />info@domain.com
                </Col>
                <Col md={3}>
                </Col>
               
              </Row>

              <Row className="about-4-2">
                <Col md={1}>
                  <p>About Us</p>
                </Col>
                <Col md={1}>
                 <p>Support</p>
                </Col>
                <Col md={1} className='about-4-2-pad'>
                 <p>Follow us on</p>
                </Col>
                <Col>
                <img src="../assets/image/instagram.png" alt="" />
                <img src="../assets/image/facebook.png" alt="" />
                <img src="../assets/image/youtube.png" alt="" />
                </Col>
                <Col md={7} className="copyright">
                 <p>All material herein © 2005–2022 Company Name All Rights Reserved.</p>
                </Col>
                
              </Row>
           
            </Container>
          </div>
  </div>
  );
}

export default Home;

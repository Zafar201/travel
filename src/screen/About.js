import React from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="about" style={{ backgroundImage: `url("../assets/image/aboutbg.png")` }}>
     
     <Navbar collapseOnSelect expand="lg"  variant="dark">
          <Container className="nav-pad">
              <Col md={8}>
              <Navbar.Brand href="#home" className="logo" >LOGO HERE</Navbar.Brand>
              </Col>
           
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            
              <Nav>
                  <Col md={6}>
                  <Link to="/">  <Nav.Link href="#deets">Home</Nav.Link> </Link>
                  </Col>
                  <Col md={6}>
                  <Link to="/about">    <Nav.Link href="#deets" style={{color:" #D9B061 !important;",}}>About Us</Nav.Link></Link>|{" "}
                  </Col>
                  <Col md={6}>
                  <Link to="/contact">   <Nav.Link href="#deets">Contact Us</Nav.Link></Link>
                  </Col>
              
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      
            <Container className="about-2">
               <Row >
                  <h1>Who Are We</h1>
               </Row>
               <Row>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </Row>
            </Container>
       

          <Container>
              <Row className='about-3'>
                  <Col className="about-box">
                    <Row>
                     <center><img src="../assets/image/vector.png" alt="" /></center>   
                    </Row>
                    <Row>
                        
                      <h1>Services across</h1>  
                    </Row>
                    <Row className='about-mrgin'>
                     <p><span>12+</span>countries</p>   
                   </Row>
                  </Col>

                  <Col className="about-box">
                    <Row>
                     <center><img src="../assets/image/help.png" alt="" /></center>   
                    </Row>
                    <Row>
                        
                      <h1>Services across</h1>  
                    </Row>
                    <Row className='about-mrgin'>
                     <p><span>12+</span>countries</p>   
                   </Row>
                  </Col>

                  <Col className="about-box">
                    <Row>
                     <center><img src="../assets/image/smile.png" alt="" /></center>   
                    </Row>
                    <Row>
                        
                      <h1>Services across</h1>  
                    </Row>
                    <Row className='about-mrgin'>
                     <p><span>12+</span>countries</p>   
                   </Row>
                  </Col>
              </Row>
          </Container>


          <div className="about-4">
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

export default About;

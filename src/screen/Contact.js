import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Contact() {
  return (
  <div className='contact' style={{ backgroundImage: `url("../assets/image/aboutbg.png")` }}>

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
                  <Link to="/about">    <Nav.Link href="#deets" style={{color:" #D9B061 !important;",}}>About Us</Nav.Link></Link>
                  </Col>
                  <Col md={6}>
                  <Link to="/contact">   <Nav.Link href="#deets">Contact Us</Nav.Link></Link>
                  </Col>
              
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <Container className='contact-2'>
            <Row >
                <h1>Connect with us</h1>
                <p>Fill the form and we’ll be getting in touch with you ASAP!</p>
            </Row>
            <div className='contact-2-pad'>
            <Row>
                <input type="text" placeholder='Your name' />
              
            </Row>
            <Row className='contact-2-pd'>
             
                <input type="text" placeholder='Your email' />
            </Row>
            <Row>
                {/* <input type="text"  text/> */}
                <textarea name="" id="" cols="6" rows="6" placeholder='what whould you like to know'></textarea>
            </Row>
            </div>
           
        </Container>

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

export default Contact;

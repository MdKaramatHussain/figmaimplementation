import React from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
    return (
        <>

            <Navbar  data-bs-theme="dark" style={{backgroundColor:'rgba(0, 0, 0, 0.959)'}}>
                <Container className='m-0 mr-0' style={{marginRight:'0'}} >
                    <Navbar.Brand href="#home">
                        <Image src='../logo.jpg' alt='logo' height={95} width={95} />
                    </Navbar.Brand>
                    <Row>
                        <Col>

                        </Col>
                        <Col style={{marginRight:"0"}}>
                            <Nav>
                                <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
                                <Nav.Link href="#Services" className='text-white'>Services</Nav.Link>
                                <Nav.Link href="#About" className='text-white'>About</Nav.Link>
                                <Nav.Link href="#Contact" className='text-white'>Contact</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>

                </Container>
            </Navbar>

        </>
    );
}
export default Header

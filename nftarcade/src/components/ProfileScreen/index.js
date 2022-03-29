import React from "react";
import "./profile.css";
import CardList from "../CardList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const ProfileScreen = () => {

    return (
        <>
            <div className="temp-nav"> 
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">temp-navbar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="profile">
                <img className="profile-bg-img" src="./images/profilebanner.jpeg"/>
                <img className="profile-img" src="./images/profile.jpg"/>
                <h1 className="user-name">User</h1>
                <h2 className="subtitle">Your Collections</h2>
                <CardList/>
                <h2 className="subtitle">On sales</h2>
                <CardList/>
            </div>
        </>
    );
};
export default ProfileScreen;

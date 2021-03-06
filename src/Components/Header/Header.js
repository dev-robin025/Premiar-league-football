import React from 'react';
import '../../App.css';
import logo from '../../images/logo.png'
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <Navbar sticky="top" className="navBar" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <FontAwesomeIcon icon={faFutbol} className="text-light" style={{ fontSize: '40px' }} />
            </Container>
        </Navbar>
    );
};

export default Header;
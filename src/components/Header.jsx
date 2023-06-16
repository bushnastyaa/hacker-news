import React  from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => (
  <Navbar className="navbar navbar-light">
    <Container>
      <Link className="navbar-brand" to="/">
        <span className="navbar-brand text-white fs-3 ms-2">Hacker News</span>
      </Link>
    </Container>
  </Navbar>
);

export default Header;

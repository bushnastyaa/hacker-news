import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const ErrorPage = () => {
  return (
    <Container fluid className="h-100">
      <div className="text-center">
        <h1>404</h1>
        <h2 className="h4 text-muted">
          Ooops! Page not found
        </h2>
        <p className="text-muted">
          Sorry, this page does not exist
          <Link to="/" />
        </p>
      </div>
    </Container>
  );
};

export default ErrorPage;

import React, { useEffect }  from 'react';
import { useDispatch } from "react-redux"
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRepeat } from 'react-bootstrap-icons';
import NewsList from './NewsList.jsx';
import { fetchNews } from '../../slices/newsSlice.js';

const NewsPage = () => {
  const dispatch = useDispatch();

  const refreshNews = () => {
    setInterval(() => dispatch(fetchNews()), 60000)
  };

  useEffect(() => {
    dispatch(fetchNews());
    refreshNews();
  }, []);

  return (
    <Container className="h-100 my-3">
      <Row className="justify-content-center align-content-center h-100">
        <Col className="col-12" md={8} xxl={9}>
          <div className="d-flex justify-content-end align-items-center">
            <p className="text-secondary h5 m-2">Update</p>
            <Button 
              onClick={() => dispatch(fetchNews())} 
              className="p2"
              variant="light"
            >
              <ArrowRepeat size={28} />
            </Button>
          </div>
          <NewsList />
        </Col>
      </Row>
    </Container>
  )
};

export default NewsPage;

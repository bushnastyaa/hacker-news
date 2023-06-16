import React  from 'react';
import { Row, Col } from 'react-bootstrap';
import { ClockFill, BookmarkFill, ChatDotsFill, PersonFill } from 'react-bootstrap-icons';

const NewsItem = ({ item }) => {
  return (
    <div className="card mb-2">
      <p className="card-header fs-5">{item.title}</p>
      <div className="card-body d-flex justify-content-between p-2">
        <Row xs="auto" className="text-muted">
          <Col>
            <span className="d-inline-block p-1 mr-2"><BookmarkFill /></span>
            <span>{item.score}</span>
          </Col>
          <Col>
            <span className="d-inline-block p-1 mr-2"><PersonFill /></span>
            <span>{item.by}</span>
          </Col>
          <Col>
            <span className="d-inline-block p-1 mr-2"><ChatDotsFill /></span>
            <span>{item.descendants} comments</span>
          </Col>
          <Col>
            <span className="d-inline-block p-1 mr-2"><ClockFill /></span>
            <span>{new Date(item.time * 1000).toLocaleString()}</span>
          </Col>
        </Row>
        <button type="button" className="btn btn-secondary border-0">Open</button>
      </div>
    </div>
  )
};

export default NewsItem;

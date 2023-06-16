import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRepeat, BookmarkFill, PersonFill, ClockFill } from 'react-bootstrap-icons';
import Comments from '../comments/Comments.jsx';
import { fetchNewsItem } from '../../slices/newsSlice.js';
import { fetchComments, selectors } from '../../slices/commentsSlice.js';

const SingleNewsPage = () => {
  const article = useSelector((state) => state.news.newsItem);
  const comments = useSelector(selectors.selectAll);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchNewsItem(id));
    dispatch(fetchComments(id));
  }, []);

  return (
    <Container className="p-0">
      <Row className="justify-content-center align-content-center h-100">
        <Col className="col-12 bg-light p-4 rounded" md={8} xxl={9}>
          <h1 className="fs-2">{article.title}</h1>
          <a href={article.url} target="_blank" rel="noreferrer" className="d-block text-muted mb-3">
            {article.url}
          </a>

          <Row xs="auto" className="text-muted small">
            <Col>
              <p>
                <span className="d-inline-block p-1"><PersonFill /></span>
                {article.by}
              </p>
            </Col>
            <Col>
              <p>
                <span className="d-inline-block p-1"><ClockFill /></span>
                {new Date(article.time * 1000).toLocaleString()}
              </p>
            </Col>
            <Col>
              <p>
                <span className="d-inline-block p-1"><BookmarkFill /></span>
                {article.score}
              </p>
            </Col>
          </Row>

          <div className="mb-2 pt-2 d-flex justify-content-between align-items-center">
            <p className="fs-5 m-0">Comments {!article.kids ? 0 : article.descendants}</p>
            <Button variant="light" onClick={() => dispatch(fetchComments(id))}>
              <ArrowRepeat color="black" size={24} />
            </Button>
          </div>

          {comments[0] === undefined ? (
              null
            ) : (
              comments.map((comment) => 
                !comment.deleted ? <Comments comment={comment} key={comment.id} /> : null)
          )}

        </Col>
      </Row>
    </Container>
  );
};

export default SingleNewsPage;

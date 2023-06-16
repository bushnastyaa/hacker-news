import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from 'react-bootstrap';
import { fetchCommentKids } from '../../slices/commentsSlice.js';
import Answers from './Answers.jsx';

const Comments = ({ comment }) => {
  const { commentKids } = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const kids = comment.kids;
  const id = comment.id;

  return (
    <>
      <Row xs="auto" className="text-muted border-top border-2">
        <Col className="mt-2"><span>{comment.by}</span></Col>
        <Col className="mt-2">
          <span>
            {new Date(comment.time * 1000).toLocaleTimeString()}
          </span>
        </Col>
      </Row>

      <p dangerouslySetInnerHTML={{ __html: comment.text }} />
      {comment.kids && (
        <Button 
          className="comment-btn btn-secondary border-0 mb-2" 
          onClick={() => dispatch(fetchCommentKids({ id, kids }))}
        >
          Replies:
        </Button>
      )}
      {commentKids[id] && (
        commentKids[id].map((answer) => !answer.deleted ? <Answers key={answer.id} answer={answer} /> : null)
      )}
    </>
  );
};

export default Comments;

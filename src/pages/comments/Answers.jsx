const Answers = ({ answer }) => {
  return (
    <div className="comments">
      <div className="comments-block">
        <span>{answer.by}</span>
        <span>
          {new Date(answer.time * 1000).toLocaleTimeString()}
        </span>
        <p dangerouslySetInnerHTML={{ __html: answer.text }} />
      </div>
   </div>
  );
};

export default Answers;

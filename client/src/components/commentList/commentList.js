import React from 'react';

const commentStyle = {
  color: 'black'
}

const titleStyle = {
  backgroundColor: '#66ccff',
  padding: '10px'
}

const divStyle = {
  justifyContent: 'center'
}

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <>
      <h3
        // className="p-5 display-inline-block"
        className="p-5"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Comments
      </h3>
      <div className="flex-row my-4 w-50" style={divStyle}>
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="p-3" style={titleStyle}>
                <h5 className="card-header" style={commentStyle}>
                  {comment.username} commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {comment.createdAt}
                  </span>
                </h5>
                <p className="comment" style={commentStyle}>{comment.commentBody}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;

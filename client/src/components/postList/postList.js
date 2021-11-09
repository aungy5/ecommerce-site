import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
  color: '#66ccff'
}

const titleStyle = {
  backgroundColor: '#66ccff',
  padding: '20px'
}

const postStyle = {
  padding: '20px'
}

const dogStyle = {
  padding: "20px",
  backgroundColor: '#212429',
  justifyContent: 'Center'
};

const postList = ({
  posts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!posts.length) {
    return <h3>No posts Yet</h3>;
  }

  return (
    <section className="posts">
      <h1 style={titleStyle}>User Posts</h1>
      {posts.map((post) => (
        <div key={post._id} className="row bg-dark" style={dogStyle}>
        <div className="col-sm-8">
          <div className="card text-center">
            <div className="card-header">{post.createdAt}</div>
            <div className="card-body">
              <h5 className="card-title">Posted by {post.username}</h5>
              {/* <img src={dog.image} style={imgStyle}></img> */}
              <p className="card-text">
                {post.postBody}
                
              </p>
              <a href={`/posts/${post._id}`} className="btn btn-dark">
                  Comment on this Post!
              </a>
            </div>
            {/* <div class="card-footer text-muted">XXX</div> */}
          </div>
        </div>
        </div>
      ))}
    </section>
  )

  // return (
  //   <div>
  //     {showTitle && <h3>{title}</h3>}
  //     {posts &&
  //       posts.map((post) => (
  //         <div key={post._id} className="card mb-3">
  //           <h4 className="card-header bg-primary text-light p-2 m-0" style={titleStyle}>
  //             {showUsername ? (
  //               <Link
  //                 className="text-light"
  //                 to={`/profiles/${post.username}`}
  //               >
  //                 {post.username} <br />
  //                 <span style={{ fontSize: '1rem' }}>
  //                   had this post on {post.createdAt}
  //                 </span>
  //               </Link>
  //             ) : (
  //               <>
  //                 <span style={{ fontSize: '1rem' }}>
  //                   You had this post on {post.createdAt}
  //                 </span>
  //               </>
  //             )}
  //           </h4>
  //           <div className="card-body bg-light p-2">
  //             <p>{post.postBody}</p>
  //           </div>
  //           {/* <Link
  //             className="btn btn-primary btn-block btn-squared"
  //             to={`/posts/${post._id}`}
  //           >
  //             Join the discussion on this post.
  //           </Link> */}

  //           <button type="button" className="btn btn-dark">
  //           <Link to={`/posts/${post._id}`} style={linkStyle}>
  //           Comment on this Post!
  //           </Link>
  //           </button>
  //         </div>
  //       ))}
  //   </div>
  // );
};

export default postList;
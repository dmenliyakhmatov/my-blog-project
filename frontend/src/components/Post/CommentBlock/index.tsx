import React from 'react';
import Comment from '../Comment'

const CommentBlock = (props: any) => {

    return(
      <section className="comments_container">
        <div className="comment-wrapper">
          <Comment {...props} />
        </div>
      </section>
    );
};

export default CommentBlock;
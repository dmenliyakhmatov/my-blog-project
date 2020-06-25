import React from 'react';
import Comment from '../Comment'
import './commentBlockStyle.css'

const CommentBlock = (props: any) => {
  const { comments, } = props;
    return(
      <section className="comments_container">
          {
            comments &&
            comments.map((comment: any) => (
              <Comment {...comment} key={comment._id} />
            ))
          }

      </section>
    );
};

export default CommentBlock;
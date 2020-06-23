import React from 'react';
import Comment from '../Comment'
import './commentBlockStyle.css'

const CommentBlock = (props: any) => {

    return(
      <section className="comments_container">
          <Comment {...props} />

      </section>
    );
};

export default CommentBlock;
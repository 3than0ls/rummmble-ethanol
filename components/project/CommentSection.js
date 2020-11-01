import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import { v4 as uuidv4 } from 'uuid';
import CommentCard from './CommentCard';

const CommentSection = ({ comments }) => {
  const commentCards = comments.map((comment) => (
    <LazyLoad>
      <CommentCard
        key={uuidv4()}
        author={comment.author}
        date={comment.date}
        content={comment.content}
      />
    </LazyLoad>
  ));

  return (
    <div className="my-8 w-full flex flex-col justify-center items-start">
      {commentCards}
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.number.isRequired,
};

export default CommentSection;

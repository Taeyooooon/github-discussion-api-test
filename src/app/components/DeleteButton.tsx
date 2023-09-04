'use client';

import deleteComment from '@/app/service/deleteComment';
import React from 'react';

const DeleteButton = ({ commentId }: any) => {
  const onClick = () => {
    deleteComment(commentId)
      .then((r) => console.log('Delete Comment : ', r))
      .catch((error) => console.error('Delete Comment Error : ', error));
  };

  return (
    <button
      className=' bg-red-600 text-white px-2 py-1 rounded-lg'
      onClick={onClick}
    >
      Delete Comment
    </button>
  );
};
export default DeleteButton;

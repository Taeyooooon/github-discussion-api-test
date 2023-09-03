'use client';

import React from 'react';
import deleteDiscussion from '@/app/service/deleteDiscussion';

const Button = ({ discussionId }: any) => {
  const onClick = (discussionId: string) => {
    deleteDiscussion(discussionId).then((r) => console.log('delete : ', r));
  };
  return (
    <button
      className=' bg-red-300 p-1 rounded-lg'
      onClick={() => onClick(discussionId)}
    >
      글 삭제
    </button>
  );
};
export default Button;

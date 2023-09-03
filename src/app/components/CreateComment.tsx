'use client';
import React, { useState } from 'react';
import getRepositoryId from '@/app/service/getRepositoryId';
import { createComment } from '@/app/service/createComment';

const CreateComment = ({ discussionId, replyToId, reply = false }: any) => {
  const [body, setBody] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const owner = 'Taeyooooon';
    const repositoryId = await getRepositoryId();
    const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN || '';
    try {
      const result = await createComment(
        owner,
        discussionId,
        body,
        githubToken,
        replyToId
      );
      console.log('CreateDiscussion Result:', result);
    } catch (error) {
      console.error('Error creating discussion:', error);
    }
  };

  return (
    <>
      <h2 className='text-2xl font-bold'>{reply ? '답글달기' : '댓글달기'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          댓글:
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </label>
        <br />
        <button type='submit'>댓글 쓰기</button>
      </form>
    </>
  );
};

export default CreateComment;

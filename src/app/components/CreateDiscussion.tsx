'use client';
import React, { useState } from 'react';
import { createDiscussion } from '@/app/service/createDiscussion';
import getRepositoryId from '@/app/service/getRepositoryId';
import getAllCategoryId from '@/app/service/getAllCategoryId';

const CreateDiscussion = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const owner = 'Taeyooooon';
    const repositoryId = await getRepositoryId();
    const allCategoryId = await getAllCategoryId();
    const categoryId = 'DIC_kwDOKNMC1s4CY9pf'; // General
    const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN || '';
    try {
      const result = await createDiscussion(
        owner,
        repositoryId,
        title,
        body,
        categoryId,
        githubToken
      );
      console.log('CreateDiscussion Result:', result);
    } catch (error) {
      console.error('Error creating discussion:', error);
    }
  };

  return (
    <>
      <h2 className='text-2xl font-bold'>Create Discussion</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Body:
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </label>
        <br />
        
        <button type='submit'>Create</button>
      </form>
    </>
  );
};

export default CreateDiscussion;

'use client';
import React, { useEffect, useState } from 'react';
import { createDiscussion } from '@/app/service/createDiscussion';
import getRepositoryId from '@/app/service/getRepositoryId';
import getAllCategoryId from '@/app/service/getAllCategoryId';

const CreateDiscussion = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');

  const owner = 'Taeyooooon';
  const name = 'github-discussion-api-test';
  const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN || '';

  useEffect(() => {
    const getCategories = async () => {
      const allCategories = await getAllCategoryId(owner, name);
      setCategories(allCategories);
    };

    getCategories();
  }, []);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!categoryId) {
      return alert('Please select a category');
    }

    const repositoryId = await getRepositoryId(owner, name);

    try {
      const result = await createDiscussion(
        owner,
        repositoryId,
        title,
        body,
        categoryId,
        githubToken
      );
      console.log('CreateDiscussion Result : ', result);
    } catch (error) {
      console.error('Create Discussion Error : ', error);
    }
  };

  return (
    <section className=' border-2 border-black mt-4 p-2 rounded-lg'>
      <h2 className='text-2xl font-bold'>Create Discussion</h2>
      <form onSubmit={onSubmit}>
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
        <label>
          Category:
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option disabled value=''>
              Select a category
            </option>
            {categories.map((category: any) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <br />

        <button className=' bg-green-500 px-2 py-1 rounded-lg' type='submit'>
          글쓰기
        </button>
      </form>
    </section>
  );
};

export default CreateDiscussion;

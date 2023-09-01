'use client';

import React from 'react';
import deleteDiscussion from '@/app/service/deleteDiscussion';
import getAllCategoryId from '@/app/service/getAllCategoryId';
import getRepositoryId from '@/app/service/getRepositoryId';
import getPickedCategoryId from '@/app/service/getPickedCategoryId';

const Test = () => {
  getRepositoryId().then((r) => console.log('getRepositoryId : ', r));
  getAllCategoryId().then((r) =>
    console.log(
      'getAllCategoryId : ',
      r.find((item: any) => item.name === 'General')
    )
  );
  getPickedCategoryId('General').then((r) => console.log('getPicked', r));

  const onClick = () => {
    deleteDiscussion().then((r) => console.log('delete : ', r));
  };
  return (
    <button className=' bg-red-300 p-2 rounded-lg' onClick={onClick}>
      DELETE
    </button>
  );
};
export default Test;

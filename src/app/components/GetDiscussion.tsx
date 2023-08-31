import React from 'react';
import getDiscussion from '@/app/service/getDiscussion';

const GetDiscussion = async () => {
  const { repository, viewer }: any = await getDiscussion();
  console.log('repository : ', repository);
  console.log('viewer : ', viewer);
  return (
    <>
      <h1 className='text-2xl font-bold'>Get Discussion</h1>
      <pre className=' p-4 border-2 border-blue-400 rounded-md'>
        {JSON.stringify(repository, null, 2)}
      </pre>
    </>
  );
};
export default GetDiscussion;

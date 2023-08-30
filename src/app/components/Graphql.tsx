import React from 'react';
import getDiscussion from '@/app/service/getDiscussion';

const Graphql = async () => {
  const { repository, viewer }: any = await getDiscussion();
  console.log('repository : ', repository);
  console.log('viewer : ', viewer);
  return <pre>{JSON.stringify(repository, null, 2)}</pre>;
};
export default Graphql;

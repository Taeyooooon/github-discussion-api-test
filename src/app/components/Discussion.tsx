import React from 'react';
import getDiscussion from '@/app/service/getDiscussion';
import Button from '@/app/components/Button';
import CreateComment from '@/app/components/CreateComment';
import DeleteButton from '@/app/components/DeleteButton';
import DiscussionComments from '@/app/components/DiscussionComments';

// interface Discussion {
//   repository: {
//     discussions: {
//       edges: {
//         node: {
//           category: {}[];
//           author: {}[];
//           createdAt: string;
//           title: string;
//           id: string;
//           url: string;
//           bodyHTML: string;
//           answer: {}[] | null;
//           comments: {}[];
//         };
//       }[];
//     };
//   };
//   viewer: {
//     login: string;
//     avatarUrl: string;
//   };
// }

const Discussion = async () => {
  const { repository, viewer }: any = await getDiscussion();
  const nodes = repository.discussions.edges;
  console.log('repository : ', repository.discussions.edges[0]);

  return (
    <>
      {/* <pre>{JSON.stringify(repository, null, 2)}</pre> */}
      <h1 className='text-2xl font-semibold'>Get Discussion</h1>
      <div className='flex flex-col gap-4'>
        {/* 글 */}
        {nodes.map(({ node }: any, index: number) => {
          return (
            <section key={index} className=' border rounded-lg p-2'>
              <h1 className=' font-semibold'>제목 : {node.title}</h1>
              <h2 className=' font-semibold'>제목 : {node.title}</h2>
              <span className=' font-semibold'>본문 : </span>
              <div dangerouslySetInnerHTML={{ __html: node.bodyHTML }} />

              {/* 댓글 */}
              <DiscussionComments node={node} />
              <CreateComment discussionId={node.id} />
              <Button discussionId={node.id} />
            </section>
          );
        })}
      </div>
    </>
  );
};
export default Discussion;

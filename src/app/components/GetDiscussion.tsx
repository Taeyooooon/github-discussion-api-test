import React from 'react';
import getDiscussion from '@/app/service/getDiscussion';
import Button from '@/app/components/Button';

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

const GetDiscussion = async () => {
  const { repository, viewer }: any = await getDiscussion();
  const nodes = repository.discussions.edges;
  console.log('repository : ', repository.discussions.edges[0]);
  // console.log('viewer : ', viewer);

  return (
    <>
      <h1 className='text-2xl font-semibold'>Get Discussion</h1>
      <div className='flex flex-col gap-4'>
        {/* 글 */}
        {nodes.map(({ node }: any, index: number) => {
          return (
            <section key={index} className=' border rounded-lg p-2'>
              <h1 className=' font-semibold'>제목 : {node.title}</h1>
              <span className=' font-semibold'>본문 : </span>
              <div dangerouslySetInnerHTML={{ __html: node.bodyHTML }} />
              <span className=' font-semibold'>댓글 : </span>

              {/* 댓글 */}
              {node.comments.edges.map(
                ({ node: commentNode }: any, index: number) => {
                  return (
                    <div key={index} className=' border rounded-lg m-2 p-2'>
                      <span>Author : </span>
                      <span>{commentNode.author.login}</span>
                      <br />
                      <span>댓글내용 : </span>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: commentNode.bodyHTML,
                        }}
                      />
                    </div>
                  );
                }
              )}
              <Button discussionId={node.id} />
            </section>
          );
        })}
      </div>
    </>
  );
};
export default GetDiscussion;

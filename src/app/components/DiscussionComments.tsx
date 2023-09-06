'use client';
import CreateComment from '@/app/components/CreateComment';
import DeleteButton from '@/app/components/DeleteButton';
import { answerComment } from '@/app/service/answerComment';
import { updateComment } from '@/app/service/updateComment';
import React, { useState } from 'react';

const DiscussionComments = ({ node }: any) => {
  return (
    <>
      {node.comments.edges.map(({ node: commentNode }: any, index: number) => {
        return (
          <div key={index} className=' border rounded-lg m-2 p-2'>
            <p className=' font-semibold'>댓글 {index + 1}</p>
            <span>Author : </span>
            <span>{commentNode.author.login}</span>
            <br />
            <span>댓글내용 : </span>
            <div
              dangerouslySetInnerHTML={{
                __html: commentNode.bodyHTML,
              }}
            />
            <button
              disabled={!commentNode.viewerCanMarkAsAnswer}
              className=' disabled:bg-red-800 bg-green-500 text-white px-2 py-1 rounded-lg'
              onClick={() => {
                answerComment(commentNode.id);
              }}
            >
              {commentNode.viewerCanMarkAsAnswer ? '채택하기' : '채택권한없음'}
            </button>
            <DeleteButton commentId={commentNode.id} />
            <button
              className=' bg-blue-500 text-white px-2 py-1 rounded-lg'
              onClick={() =>
                updateComment(commentNode.id, '댓글 수정 API 테스트')
                  .then((r) => console.log('Update Comment : ', r))
                  .catch((error) =>
                    console.error('Update Comment Error : ', error)
                  )
              }
            >
              수정하기 테스트
            </button>

            {commentNode.replies.nodes.map((replyNode: any, index: number) => {
              return (
                <div key={index} className=' border rounded-lg m-2 p-2'>
                  <span className=' font-semibold'>답글 {index + 1}</span>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: replyNode.bodyHTML,
                    }}
                  />
                  <button
                    className=' bg-blue-500 text-white px-2 py-1 rounded-lg'
                    onClick={() =>
                      updateComment(replyNode.id, '답글 수정 API 테스트')
                        .then((r) => console.log('Update Comment : ', r))
                        .catch((error) =>
                          console.error('Update Comment Error : ', error)
                        )
                    }
                  >
                    수정하기 테스트
                  </button>
                </div>
              );
            })}
            <CreateComment
              discussionId={node.id}
              replyToId={commentNode.id}
              reply
            />
          </div>
        );
      })}
    </>
  );
};
export default DiscussionComments;

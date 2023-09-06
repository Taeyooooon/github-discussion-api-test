import { graphql } from '@octokit/graphql';

export const answerComment = async (commentId: string) => {
  const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  const result: any = await graphql({
    headers: {
      authorization: `token ${githubToken}`,
    },
    commentId,
    query: `mutation MarkDiscussionCommentAsAnswerInput($commentId: ID!) {
      markDiscussionCommentAsAnswer(input: {
        commentId: $commentId,
      }) {
        discussion {
          body
        }
      }
    }
  `,
    variables: {
      commentId: commentId, // commentId 변수 설정
    },
  });

  return result;
};

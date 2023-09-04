import { graphql } from '@octokit/graphql';

export const updateComment = async (commentId: string, body: string) => {
  const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  const result: any = await graphql({
    headers: {
      authorization: `token ${githubToken}`,
    },
    owner: 'Taeyooooon',
    commentId,
    body,
    query: `mutation UpdateComment($commentId: ID!, $body: String!) {
      updateDiscussionComment(input: {
        commentId: $commentId,
        body: $body
      }) {
        comment {
          body
        }
      }
    }
  `,
  });

  return result;
};

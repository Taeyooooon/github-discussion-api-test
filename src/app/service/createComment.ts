import { graphql } from '@octokit/graphql';

export const createComment = async (
  owner: string,
  discussionId: string,
  body: string,
  githubToken: string,
  replyTo?: string
) => {
  const result: any = await graphql({
    headers: {
      authorization: `token ${githubToken}`,
    },
    owner,
    discussionId,
    body,
    query: `mutation CreateComment($discussionId: ID!, $body: String!) {
      addDiscussionComment(input: {
        discussionId: $discussionId,
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

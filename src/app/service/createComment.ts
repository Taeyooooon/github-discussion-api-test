import { graphql } from '@octokit/graphql';

export const createComment = async (
  owner: string,
  discussionId: string,
  body: string,
  githubToken: string,
  replyToId?: string
) => {
  const result: any = await graphql({
    headers: {
      authorization: `token ${githubToken}`,
    },
    owner,
    discussionId,
    body,
    replyToId,
    query: `mutation CreateComment($discussionId: ID!, $body: String!,$replyToId: ID) {
      addDiscussionComment(input: {
        discussionId: $discussionId,
        replyToId : $replyToId
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

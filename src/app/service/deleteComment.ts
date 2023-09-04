import { graphql } from '@octokit/graphql';

const deleteComment = async (commentId: string) => {
  const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  const result: any = await graphql({
    headers: {
      authorization: `token ${githubToken}`,
    },
    id: commentId, //discussion node id
    query: `mutation deleteDiscussionComment($id: ID!) {
      deleteDiscussionComment(input: {
        id: $id,
      }) {
        comment {
          body
          deletedAt
        }
      }
    }
  `,
  });
  return result;
};
export default deleteComment;

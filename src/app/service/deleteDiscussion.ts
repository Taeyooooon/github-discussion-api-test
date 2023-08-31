import { graphql } from '@octokit/graphql';

const deleteDiscussion = async () => {
  const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  const result: any = await graphql({
    headers: {
      authorization: `token ${githubToken}`,
    },
    id: 'D_kwDOKNMC1s4AVRxE', //discussion node id
    query: `mutation deleteDiscussion($id: ID!) {
      deleteDiscussion(input: {
        id: $id,
      }) {
        discussion {
          id
          title
          body
          url
        }
      }
    }
  `,
  });
  return result;
};
export default deleteDiscussion;

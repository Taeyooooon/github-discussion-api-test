import { graphql } from '@octokit/graphql';

export const createDiscussion = async (
  owner: string,
  repositoryId: string,
  title: string,
  body: string,
  categoryId: string,
  githubToken: string
) => {
  console.log('CREATE : ', owner, repositoryId, title, body, categoryId, githubToken);
  const result: any = await graphql({
    headers: {
      authorization: `token ${githubToken}`,
    },
    owner,
    repositoryId,
    title,
    body,
    categoryId,
    query: `mutation createDiscussion($repositoryId: ID!, $title: String!, $body: String!, $categoryId: ID!) {
      createDiscussion(input: {
        repositoryId: $repositoryId,
        categoryId: $categoryId,
        title: $title,
        body: $body
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

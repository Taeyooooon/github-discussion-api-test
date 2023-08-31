import { graphql } from '@octokit/graphql';

const getCategoryId = async () => {
  const owner = 'Taeyooooon';
  const name = 'github-discussion-api-test';
  const result = await graphql({
    headers: {
      authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
    owner: `${owner}`,
    name: `${name}`,
    query: `
    query repository($owner: String!, $name: String!){
        repository(owner: $owner, name: $name) {
          id # RepositoryID
          name
          discussionCategories(first: 10) {
            nodes {
              id # CategoryID
              name
            }
          }
        }
      }
    `,
  });
  return result;
};
export default getCategoryId;

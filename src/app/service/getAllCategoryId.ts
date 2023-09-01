import { graphql } from '@octokit/graphql';

const getAllCategoryId = async () => {
  const owner = 'Taeyooooon';
  const name = 'github-discussion-api-test';
  const { repository }: any = await graphql({
    headers: {
      authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
    owner,
    name,
    query: `query repository($owner: String!, $name: String!){
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
  return repository.discussionCategories.nodes;
};
export default getAllCategoryId;

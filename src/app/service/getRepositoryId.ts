import { graphql } from '@octokit/graphql';

export default async function getRepositoryId() {
  const owner = 'Taeyooooon';
  const name = 'github-discussion-api-test';
  const result = await graphql({
    headers: {
      authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
    owner,
    name,
    query: `
      query ($name: String!, $owner: String!) {
        repository(owner: $owner, name: $name) {
          id
        }
      }
    `,
  });
  return result;
}

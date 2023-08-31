import { graphql } from '@octokit/graphql';

interface RepositoryResult {
  repository: {
    id: string;
  };
}

const getRepositoryId = async () => {
  const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  const owner = 'Taeyooooon';
  const name = 'github-discussion-api-test';
  const { repository }: RepositoryResult = await graphql({
    headers: {
      authorization: `token ${githubToken}`,
    },
    owner,
    name,
    query: `query ($name: String!, $owner: String!) {
        repository(owner: $owner, name: $name) {
          id
        }
      }
    `,
  });
  return repository.id;
};

export default getRepositoryId;

import { graphql } from '@octokit/graphql';

const getRateLimit = async () => {
  const owner = 'Taeyooooon';
  const name = 'github-discussion-api-test';
  const result: any = await graphql({
    headers: {
      authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
    owner,
    name,
    query: `
    query {
      rateLimit {
        limit
        cost
        remaining
        resetAt
      }
    }
    `,
  });
  return result;
};
export default getRateLimit;

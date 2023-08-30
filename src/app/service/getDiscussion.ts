import { graphql } from '@octokit/graphql';

const getDiscussion = async () => {
  const { repository, viewer }: any = await graphql({
    headers: {
      authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
    owner: 'Taeyooooon', // my github ID
    name: 'github-discussion-api-test', // github repository name
    num: 20,
    query: `query repository($owner: String!, $name: String!, $num: Int!) {
        repository(name: $name, owner: $owner) {
          discussions(first: $num) {
            edges {
              node {
                category {
                  name
                }
                author {
                  login
                  avatarUrl
                }
                createdAt
                title
                id
                url
                bodyHTML
                answer {
                  author {
                    login
                    avatarUrl
                  }
                  bodyHTML
                  createdAt
                  id
                }
                # 댓글
                comments(first: $num) {
                  edges {
                    node {
                      author {
                        login
                        avatarUrl
                      }
                      bodyHTML
                      createdAt
                      id
                    }
                  }
                }
              }
            }
          }
        },
        viewer {
          login
          avatarUrl
        }
      }`,
  });
  return { repository, viewer };
};
export default getDiscussion;

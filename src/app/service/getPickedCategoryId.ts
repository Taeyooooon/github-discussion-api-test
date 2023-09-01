import getAllCategoryId from '@/app/service/getAllCategoryId';
import { graphql } from '@octokit/graphql';

const getPickedCategoryId = async (categoryName: string) => {
  const owner = 'Taeyooooon';
  const name = 'github-discussion-api-test';
  const allCategoryId = await getAllCategoryId();
  const pickedCategoryId = allCategoryId.find(
    (item: any) => item.name === categoryName
  );

  console.log('picked : ', pickedCategoryId);

  const result: any = await graphql({
    headers: {
      authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
    owner,
    name,
    query: `query GetPickedCategoryId($owner: String!, $name: String!, $categoryName: String!){
        repository(owner: $owner, name: $name) {
          id # RepositoryID
          name
          discussionCategories(first: 10, categoryId : $pickedCategoryId) {
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
export default getPickedCategoryId;

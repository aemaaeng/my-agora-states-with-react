const { graphql } = require("@octokit/graphql");

export async function getDiscussions() {
  const GHP_TOKEN = process.env.REACT_APP_GHP_TOKEN;
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${GHP_TOKEN}`,
    },
  });
  const { repository } = await graphqlWithAuth(
    `
    {
      repository(name: "agora-states-fe", owner: "codestates-seb") {
        discussions(first: 30) {
          edges {
            node {
              id
              author {
                avatarUrl
                login
              }
              createdAt
              title
              answer {
                id
              }
              url
            }
          }
        }
      }
    }
      `
  );
  return repository;
  // return fetch("http://localhost:4000/discussions").then((res) => res.json());
}

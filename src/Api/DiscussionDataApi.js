export function getDiscussions() {
  return fetch("http://localhost:4000/discussions").then((res) => res.json());
}

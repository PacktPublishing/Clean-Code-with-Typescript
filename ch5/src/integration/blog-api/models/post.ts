export interface Post {
  id: number;
  title: string;
  content: string;
}

export let posts: Post[] = [];
let currentId = 1;

export const getNextId = () => currentId++;

export const resetPosts = (): void => {
  posts = [];
  currentId = 1;
};

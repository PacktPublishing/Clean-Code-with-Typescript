import { type Post, posts, getNextId } from '../models/post.js';

export const getPosts = (): Post[] => posts;

export const getPostById = (id: number) => posts.find((p) => p.id === id);

export const createPost = (title: string, content: string): Post => {
  const newPost = { id: getNextId(), title, content };
  posts.push(newPost);
  return newPost;
};

export const updatePost = (
  id: number,
  title: string,
  content: string
): Post | null => {
  const post = getPostById(id);
  if (post) {
    post.title = title;
    post.content = content;
    return post;
  }
  return null;
};

export const deletePost = (id: number): void => {
  const index = posts.findIndex((p) => p.id === id);
  if (index !== -1) {
    posts.splice(index, 1);
  }
};

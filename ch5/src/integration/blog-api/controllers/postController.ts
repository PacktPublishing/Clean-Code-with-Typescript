import type { Request, Response } from 'express';
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from '../services/postService.js';

export const getAllPosts = (_req: Request, res: Response) => {
  res.json(getPosts());
};

export const getPost = (req: Request, res: Response) => {
  const post = getPostById(Number(req.params.id));
  post ? res.json(post) : res.status(404).send('Post not found');
};

export const createNewPost = (req: Request, res: Response) => {
  const { title, content } = req.body;
  res.status(201).json(createPost(title, content));
};

export const updateExistingPost = (req: Request, res: Response) => {
  const post = updatePost(Number(req.params.id), req.body.title, req.body.content);
  post ? res.json(post) : res.status(404).send('Post not found');
};

export const deleteExistingPost = (req: Request, res: Response) => {
  deletePost(Number(req.params.id));
  res.status(204).send();
};

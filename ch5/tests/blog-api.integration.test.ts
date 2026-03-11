import { beforeEach, describe, expect, it } from 'vitest';
import request from 'supertest';
import app from '../src/integration/blog-api/index.js';
import { resetPosts } from '../src/integration/blog-api/models/post.js';

describe('Blog Post API Integration', () => {
  let postId: number;

  beforeEach(() => {
    resetPosts();
  });

  it('should create and then retrieve a blog post', async () => {
    const createRes = await request(app)
      .post('/posts')
      .send({ title: 'My Post', content: 'Integration Testing' });

    expect(createRes.statusCode).toBe(201);
    postId = createRes.body.id;

    const getRes = await request(app).get(`/posts/${postId}`);
    expect(getRes.statusCode).toBe(200);
    expect(getRes.body.title).toBe('My Post');
  });

  it('should update and then delete the post', async () => {
    const createRes = await request(app)
      .post('/posts')
      .send({ title: 'My Post', content: 'Integration Testing' });

    postId = createRes.body.id;

    const updateRes = await request(app)
      .put(`/posts/${postId}`)
      .send({ title: 'Updated', content: 'This content has been modified.' });

    expect(updateRes.statusCode).toBe(200);
    expect(updateRes.body.title).toBe('Updated');
    expect(updateRes.body.content).toBe('This content has been modified.');

    const deleteRes = await request(app).delete(`/posts/${postId}`);
    expect(deleteRes.statusCode).toBe(204);

    const getRes = await request(app).get(`/posts/${postId}`);
    expect(getRes.statusCode).toBe(404);
  });
});

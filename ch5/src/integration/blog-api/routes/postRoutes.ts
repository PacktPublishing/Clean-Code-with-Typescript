import { Router } from 'express';
import {
  getAllPosts,
  getPost,
  createNewPost,
  updateExistingPost,
  deleteExistingPost,
} from '../controllers/postController.js';

const router = Router();

router.get('/posts', getAllPosts);
router.get('/posts/:id', getPost);
router.post('/posts', createNewPost);
router.put('/posts/:id', updateExistingPost);
router.delete('/posts/:id', deleteExistingPost);

export default router;

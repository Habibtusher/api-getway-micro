import express from 'express';
import { BlogController } from './blog.controller';
import auth from '../../middlewares/auth';
const router = express.Router();

router.get('/', BlogController.getAllFromDb);
router.patch('/update/:id',auth(),BlogController.updateBlog)
router.get('/:id', BlogController.getById);
router.delete('/:id',auth(),BlogController.deleteBlog)

router.post('/create-blog', BlogController.insertIntoDb);

export const BlogRoutes = router;

import express from 'express';
import { BlogController } from './blog.controller';
import auth from '../../middlewares/auth';
const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Blog
 *   description: Blog-related routes
 */
/**
 * @swagger
 * /api/v1/blog/create-blog:
 *   post:
 *     summary: Create a new blog post
 *     tags:
 *       - Blog
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *             required:
 *               - title
 *               - content
 *     responses:
 *       '201':
 *         description: Blog post created successfully
 *       '400':
 *         description: Bad request, validation failed
 *       '401':
 *         description: Unauthorized, missing or invalid token
 *       '500':
 *         description: Internal server error
 */


/**
 * @swagger
 * /api/v1/blog:
 *   get:
 *     summary: Get all blog posts
 *     tags: [Blog]
 *     responses:
 *       '200':
 *         description: A list of blog posts
 *       '500':
 *         description: Internal server error
 */
/**
 * @swagger
 * /api/v1/blog/{id}:
 *   get:
 *     summary: Get a blog post by ID
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A blog post
 *       '404':
 *         description: Blog post not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/blog/delete/{id}:
 *   delete:
 *     summary: Delete a specific blog post by ID
 *     tags:
 *       - Blog
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '204':
 *         description: Blog post deleted successfully
 *       '401':
 *         description: Unauthorized, missing or invalid token
 *       '404':
 *         description: Blog post not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/blog/update/{id}:
 *   patch:
 *     summary: Update a specific blog post by ID
 *     tags:
 *       - Blog
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - Authorizatoin: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *             required:
 *               - title
 *               - content
 *     responses:
 *       '200':
 *         description: Blog post updated successfully
 *       '400':
 *         description: Bad request, validation failed
 *       '401':
 *         description: Unauthorized, missing or invalid token
 *       '404':
 *         description: Blog post not found
 *       '500':
 *         description: Internal server error
 */

router.get('/', BlogController.getAllFromDb);
router.patch('/update/:id',auth(),BlogController.updateBlog)
router.get('/:id', BlogController.getById);
router.delete('/:id',auth(),BlogController.deleteBlog)

router.post('/create-blog', BlogController.insertIntoDb);

export const BlogRoutes = router;

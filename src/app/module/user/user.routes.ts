import express from 'express';
import { UserController } from './user.controller';
const router = express.Router()
/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Log in as an existing user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                 refreshToken:
 *                   type: string
 *       '401':
 *         description: Unauthorized, login failed
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - email
 *               - password
 *     responses:
 *       '201':
 *         description: User registered successfully
 *       '400':
 *         description: Bad request, registration failed
 *       '500':
 *         description: Internal server error
 */


router.post("/register",UserController.register)
router.post("/login",UserController.login)

export const AuthRoutes =router
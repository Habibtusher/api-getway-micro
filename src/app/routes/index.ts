import express from 'express';
import { BlogRoutes } from '../module/blog/blog.route';
import { AuthRoutes } from '../module/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/blog',
    route: BlogRoutes
  },
  {
    path:'/auth',
    route:AuthRoutes
  }
];

moduleRoutes.forEach((routes) => {
  router.use(routes.path, routes.route);
});
// router.use('/blog',BlogRoutes)
export default router;

import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalExceptionHandler from './app/middlewares/globalExceptionHandler';
import routes from './app/routes';
import { BlogSwagger } from './app/module/blog/swagger.blog';
import { AuthSwagger } from './app/module/user/swagger.auth';

import * as swaggerUi from 'swagger-ui-express';

const app: Application = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/api-docs/blog', swaggerUi.serve,swaggerUi.setup(BlogSwagger.specs));
app.use('/api/v1/api-docs/auth', swaggerUi.serve,swaggerUi.setup(AuthSwagger.specs));

app.use('/api/v1', routes);


app.use(globalExceptionHandler);

app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API not found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API not found'
      }
    ]
  });
});

export default app;

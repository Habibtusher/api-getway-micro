import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BLog',
      version: '1.0.0',
      description: 'API documentation for the blog service'
    },
    basePath: '/api/v1/blog', 
  },
  apis: ['./src/app/module/blog/blog.route.ts'] // Your TypeScript blog route file path
};

const specs = swaggerJsdoc(options);

export const BlogSwagger = { specs };

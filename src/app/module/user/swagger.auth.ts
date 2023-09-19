import swaggerJsdoc from 'swagger-jsdoc';


const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Auth Service',
      version: '1.0.0',
      description: 'API documentation for the auth service'
    },
    basePath: '/api/v1/auth', 
  },
  apis: ['./src/app/module/user/user.routes.ts'] // Your TypeScript blog route file path
};

const specs = swaggerJsdoc(options);

export const AuthSwagger =  { specs };

import { withSwagger } from 'next-swagger-doc';

const swaggerHandler = withSwagger({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Swagger',
      version: '0.1.0',
      contact: {
        name: "MALANOU Patrick",
        email: "noumbissipatrick@gmail.com",
    },
    },
  },
  apiFolder: 'pages/api',
});
export default swaggerHandler();
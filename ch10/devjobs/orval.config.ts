export default {
    devjobs: {
      input: './apps/devjobs-backend/src/openapi.yml',
      output: {
        schemas: './libs/api-types/model',  
        target: './libs/api-types',
      },
    },
  };
  
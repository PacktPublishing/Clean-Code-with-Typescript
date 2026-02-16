export default {
  devjobs: {
    input: './apps/devjobs-backend/src/openapi.yml',
    output: {
      target: 'libs/api-client/src/generated', // folder for generated files
      client: 'react-query',
      mode: 'tags',         // separate file per tag
      override: {
        mutator: {
          path: './libs/api-client/src/axios.ts',
          name: 'api',
        },
      },
      prettier: true,
      index: true,            // generate root index.ts
      clean: true,
    },
    hooks: {
      afterAllFilesWrite: [
        () => {
          console.log('✅ DevJobs API client generated successfully');
        },
      ],
    },
  },
};

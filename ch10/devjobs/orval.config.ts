
// export default {
//   devjobs: {
//     input: './apps/devjobs-backend/src/openapi.yml',
//     output: {
//       mode: 'tags-split',
//       target: './libs/api-client/src/generated',
//       schemas: './libs/api-types/model',
//       client: 'react-query',
//       override: {
//         mutator: {
//           path: './libs/api-client/src/axios-instance.ts',
//           name: 'customInstance',
//         },
//       },
//     },
//   },
// };

// orval.config.js
module.exports = {
  devjobs: {
    input: './apps/devjobs-backend/src/openapi.yml',
    output: {
      target: 'libs/api-client/src/generated', // folder for generated files
      client: 'react-query',
      mode: 'tags',         // separate file per tag
      override: true,
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
